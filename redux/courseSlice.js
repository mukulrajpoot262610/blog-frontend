import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  selectedcourse: {},
  content: '',
  articleHTML: '',
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      const { courses } = action.payload;
      state.courses = courses;
    },
    setCourse: (state, action) => {
      const { course } = action.payload;
      state.selectedcourse = course;
    },
    setContentData: (state, action) => {
      const { content } = action.payload;
      state.content = content;
    },
    setArticleHTML: (state, action) => {
      state.articleHTML = action.payload;
    },
    setPublish: (state, action) => {
      state.selectedcourse.isPublished = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCourses,
  setCourse,
  setPublish,
  setContentData,
  setArticleHTML,
} = courseSlice.actions;

export default courseSlice.reducer;
