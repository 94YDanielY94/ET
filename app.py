from flask import Flask, render_template, request
import pandas as pd
import plotly.express as px
import plotly.io as pio
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    table_html = None
    
    hide_class = ''
    graphJSONBar = None
    graphJSONBox = None
    rankingData = []
    Overall_pass_rate = None
    Overall_average = None
    Top_student = None
    least_student = None

    if request.method == 'POST':
        if my_file := request.files.get('myfile'):
            df = pd.read_csv(my_file)
            analysis = pd.DataFrame(index=df.index)
            average_df,subject_column = dataAnalysis(df)

            analysis['Average'] = average_df
            df['Average'] = analysis['Average']

            analysis['pass/fail'] = df['Average'].apply(
                lambda x: 'Pass' if x >= 50 else 'Fail')
            df['status'] = analysis['pass/fail']

            analysis["ranking"] = df['Average'].rank(
                ascending=False, method='min')
            df["ranking"] = analysis["ranking"]
            
            rankingData = df.sort_values(
                by='ranking', ascending=True)[['fullname', 'Average','id']].to_dict(orient='records')
        
           
            graphJSONBar = pio.to_json(subGraph(df, subject_column))
            graphJSONBox = pio.to_json(subBox(df, subject_column))

            top_Students = df.sort_values(
                by='ranking', ascending=True).head(5)
            least_Students = df.sort_values(
                by='ranking', ascending=False).head(5)

            Overall_pass_rate = (analysis['pass/fail'] == 'Pass').mean() * 100
            Overall_average = analysis['Average'].mean().round(1)
            Top_student = top_Students.iloc[0]
            least_student = least_Students.iloc[0]
            
            df['status'] = analysis['pass/fail']
            df['Average'] = df['Average'].apply(
                lambda x: f"{x}%")
            table_html = df.drop(columns=['id','gender','ranking']).to_html(classes='table dataframe', index=False)
            hide_class = 'hide'


    return render_template('index.html',
                           table=table_html,
                           hide=hide_class, graphJSONBar=graphJSONBar, graphJSONBox=graphJSONBox,
                           overall_pass_rate=Overall_pass_rate,
                           overall_average=Overall_average,
                           top_student=Top_student,
                           least_student=least_student,
                           ranking_data=rankingData)


def subBox(df, subject_column):
    df_long = df.melt(id_vars=['fullname'], 
                  value_vars=subject_column, 
                  var_name='Subject', 
                  value_name='Score')
    fig = px.box(
        df_long, 
        x='Subject', 
        y='Score', 
        color='Subject',
        points='all',  # Adds the dots on the left of each box
        color_discrete_sequence=['#1a1a1a', '#94a3b8', '#cbd5e1']
    )       

    fig.update_layout(
        title={
            'text': "<b>Grade Distribution</b><br><span style='font-size:14px; color:grey;'>Score variance and outliers</span>",
            'y': 0.95,
            'x': 0.05,
            'xanchor': 'left'
        },
        plot_bgcolor='white',
        showlegend=False,
        yaxis=dict(
            range=[0, 100], 
            gridcolor='#e2e8f0', 
            showgrid=True,
            zeroline=False
        ),
        xaxis=dict(showgrid=False)
    )

    fig.update_traces(width=0.4, jitter=0.3)
    return fig
def subGraph(df, subject_column):
    subgraph = df[subject_column].mean().round(0).reset_index()
    subgraph.columns = ['subject','average']
    fig = px.bar(
        subgraph,
        x='subject',
        y='average',
        title="Subject-wise Average Performance",
        labels={'subject': 'Subject', 'average': 'Average Score'},
        color='subject',
        color_discrete_sequence=['#1a1a1a', '#94a3b8', '#1a1a1a', '#cbd5e1', '#94a3b8']
    )
                
            
    fig.update_layout(
        title={
            'text': "<b>Subject Performance</b><br><span style='font-size:14px; color:grey;'>Average scores across disciplines</span>",
            'y': 0.95,
            'x': 0.05,
            'xanchor': 'left',
            'yanchor': 'top'
        },
        plot_bgcolor='white',
        showlegend=False,
        yaxis=dict(
            range=[0, 100],
            gridcolor='#e2e8f0',
            showgrid=True,
            zeroline=False,
            ticksuffix=" " 
        ),
        xaxis=dict(
            showgrid=False,
            linecolor='white'
        ),
        margin=dict(t=80, l=50, r=50, b=50)
    )
    return fig
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

    return df[actual_cols].mean(axis=1).round(1),actual_cols


if __name__ == '__main__':
    app.run(debug=True)
