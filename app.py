from flask import Flask, render_template, request
import pandas as pd
import plotly.express as px
import plotly.io as pio

app = Flask(__name__)

HIGH_SCHOOL_SUBJECTS = [
    "Algebra I", "Algebra II", "Geometry", "Trigonometry", "Pre-Calculus",
    "Calculus", "Statistics", "Discrete Math", "Math",
    "Biology", "Chemistry", "Physics", "Environmental Science",
    "Earth Science", "Anatomy & Physiology", "Astronomy",
    "English", "Literature", "Creative Writing", "Composition",
    "Public Speaking", "Journalism",
    "World History", "Geography", "Civics", "Economics",
    "Psychology", "Sociology", "Philosophy", "Political Science",
    "Computer Science", "Web Development", "Cybersecurity",
    "Information Technology", "It", "Robotics", "Digital Media",
    "Visual Arts", "Graphic Design", "Photography", "Music Theory",
    "Band", "Choir", "Drama", "Art History",
    "Physical Education", "Health & Wellness", "Nutrition",
    "Spanish", "French", "Mandarin", "German", "Japanese", "Latin",
]


def base_layout(title_html):
    return dict(
        title={
            "text": title_html,
            "y": 0.95,
            "x": 0.05,
            "xanchor": "left",
            "yanchor": "top",
        },
        plot_bgcolor="white",
        showlegend=False,
        yaxis=dict(range=[0, 100], gridcolor="#e2e8f0", showgrid=True, zeroline=False),
        xaxis=dict(showgrid=False),
        margin=dict(t=80, l=50, r=50, b=50),
    )


def subject_bar_chart(df, subject_columns):
    averages = df[subject_columns].mean().round(0).reset_index()
    averages.columns = ["subject", "average"]
    fig = px.bar(
        averages,
        x="subject",
        y="average",
        labels={"subject": "Subject", "average": "Average Score"},
        color="subject",
        color_discrete_sequence=["#1a1a1a", "#94a3b8", "#1a1a1a", "#cbd5e1", "#94a3b8"],
    )
    layout = base_layout(
        "<b>Subject Performance</b><br>"
        "<span style='font-size:14px; color:grey;'>Average scores across disciplines</span>"
    )
    layout["yaxis"]["ticksuffix"] = " "
    layout["xaxis"]["linecolor"] = "white"
    fig.update_layout(**layout)
    return fig


def subject_box_chart(df, subject_columns):
    df_long = df.melt(
        id_vars=["fullname"],
        value_vars=subject_columns,
        var_name="Subject",
        value_name="Score",
    )
    fig = px.box(
        df_long,
        x="Subject",
        y="Score",
        color="Subject",
        points="all",
        color_discrete_sequence=["#1a1a1a", "#94a3b8", "#cbd5e1"],
    )
    layout = base_layout(
        "<b>Grade Distribution</b><br>"
        "<span style='font-size:14px; color:grey;'>Score variance and outliers</span>"
    )
    fig.update_layout(**layout)
    fig.update_traces(width=0.4, jitter=0.3)
    return fig


def extract_subject_columns(df):
    normalised = {c.lower().capitalize() for c in df.columns}
    matched = [s for s in HIGH_SCHOOL_SUBJECTS if s in normalised]
    return [col for col in df.columns if col.lower().capitalize() in matched]


def process_upload(file):
    df = pd.read_csv(file)
    subject_columns = extract_subject_columns(df)

    df["Average"] = df[subject_columns].mean(axis=1).round(1)
    df["status"] = df["Average"].apply(lambda x: "Pass" if x >= 50 else "Fail")
    df["ranking"] = df["Average"].rank(ascending=False, method="min")

    ranking_data = (
        df.sort_values(by="ranking", ascending=True)[["fullname", "Average", "id"]]
        .to_dict(orient="records")
    )

    overall_pass_rate = (df["status"] == "Pass").mean() * 100
    overall_average = df["Average"].mean().round(1)

    sorted_df = df.sort_values(by="ranking", ascending=True)
    top_student = sorted_df.iloc[0]
    least_student = sorted_df.iloc[-1]

    graph_bar = pio.to_json(subject_bar_chart(df, subject_columns))
    graph_box = pio.to_json(subject_box_chart(df, subject_columns))

    df["Average"] = df["Average"].apply(lambda x: f"{x}%")
    table_html = df.drop(columns=["id", "gender", "ranking"]).to_html(
        classes="table dataframe", index=False
    )

    return dict(
        table=table_html,
        graph_bar=graph_bar,
        graph_box=graph_box,
        ranking_data=ranking_data,
        overall_pass_rate=overall_pass_rate,
        overall_average=overall_average,
        top_student=top_student,
        least_student=least_student,
    )


@app.route("/", methods=["GET", "POST"])
def index():
    context = dict(
        table=None,
        hide="",
        graph_bar=None,
        graph_box=None,
        ranking_data=[],
        overall_pass_rate=None,
        overall_average=None,
        top_student=None,
        least_student=None,
    )

    file = request.files.get("myfile") if request.method == "POST" else None
    if file:
        context.update(process_upload(file))
        context["hide"] = "hide"

    return render_template("index.html", **context)


if __name__ == "__main__":
    app.run(debug=True)