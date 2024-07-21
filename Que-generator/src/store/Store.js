import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../Redux/Quiz/QuizSlice';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
