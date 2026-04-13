# TODO: Fix pandas average grade calculation in app.py

## Plan Steps:

1. [ ] Edit app.py:
   - Replace capColumns line and dataSubjectList.extend with list comp using capitalized_columns.
   - Replace averageGrade init and loop with df[matching_cols].mean(axis=1).to_frame('Average Grade').
2. [ ] Test: Run `python app.py`, upload CSV with grade columns (e.g. data/data.csv if suitable), check analysis.
3. [ ] Update TODO.md after each completion.
4. [ ] Complete task.
