from flask import Flask, render_template, request
import pandas as pd
import plotly.express as px
import plotly.io as pio
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    table_html = None
    top_students_name = None
    least_students_name = None
    hide_class = ''
    graphJSON = None

    if request.method == 'POST':
        if my_file := request.files.get('myfile'):
            df = pd.read_csv(my_file)
            analysis = pd.DataFrame(index=df.index)
            average_df = dataAnalysis(df)

            analysis['Average'] = average_df
            df['Average'] = analysis['Average']

            analysis['pass/fail'] = df['Average'].apply(
                lambda x: 'Pass' if x >= 50 else 'Fail')
            df['status'] = analysis['pass/fail']

            analysis["ranking"] = df['Average'].rank(
                ascending=False, method='min')
            df["ranking"] = analysis["ranking"]
            
            fig = px.bar(
                df.head(100),
                x='fullname',
                y='Average',
                title="Student Performance"
            )

            graphJSON = pio.to_json(fig)
            top_Students = df.sort_values(
                by='ranking', ascending=True).head(5)
            least_Students = df.sort_values(
                by='ranking', ascending=False).head(5)

            top_students_name = top_Students['fullname'].tolist()
            least_students_name = least_Students['fullname'].tolist()
            df['status'] = analysis['pass/fail']
            df['Average'] = df['Average'].apply(
                lambda x: f"{x}%")
            table_html = df.drop(columns=['id','gender','ranking']).to_html(classes='table dataframe', index=False)
            hide_class = 'hide'


    return render_template('index.html',
                           table=table_html,
                           top_students=top_students_name,
                           least_students=least_students_name,
                           hide=hide_class, graphJSON=graphJSON)


def dataAnalysis(df):
    high_school_subjects = [

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

        "Spanish", "French", "Mandarin", "German", "Japanese", "Latin"
    ]
    current_cols = [c.lower().capitalize() for c in df.columns]
    dataSubjectList = [s for s in high_school_subjects if s in current_cols]

    actual_cols = [col for col in df.columns if col.lower().capitalize()
                   in dataSubjectList]

    return df[actual_cols].mean(axis=1).round(1)


if __name__ == '__main__':
    app.run(debug=True)
