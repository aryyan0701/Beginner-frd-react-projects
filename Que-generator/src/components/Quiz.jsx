// components/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextQues, selectAns, resetQuiz } from '../Redux/Quiz/QuizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const currentQuesIndex = useSelector(state => state.quiz.currentQuesIndex);
  const questions = useSelector(state => state.quiz.questions);
  const answers = useSelector(state => state.quiz.answers);
  const isCorrect = useSelector(state => state.quiz.isCorrect);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    if (currentQuesIndex >= questions.length) {
      setIsQuizCompleted(true);
    }
  }, [currentQuesIndex, questions.length]);

  if (!questions || questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const handleNext = () => {
    if (currentQuesIndex < questions.length - 1) {
      dispatch(nextQues());
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleAnswerSelect = (quesIndex, ansIndex) => {
    setSelectedOption(ansIndex);
    dispatch(selectAns({ quesIndex, ansIndex }));
  };

  const handleReset = () => {
    dispatch(resetQuiz());
    setIsQuizCompleted(false);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      if (questions[index].answer.includes(answer)) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const score = calculateScore();

  if (isQuizCompleted) {
    return (
      <div className="h-screen w-full flex justify-center items-start pt-8 bg-gray-300 text-black">
        <article className="rounded-xl border-2 border-gray-100 bg-white p-8 text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-xl">
            Your Score: {score} out of {questions.length}
          </p>
          <button
            className="mt-6 bg-red-500 text-white rounded-lg px-4 py-2"
            onClick={handleReset}
          >
            Reset Quiz
          </button>
        </article>
      </div>
    );
  }

  const currentQues = questions[currentQuesIndex];

  return (
    <div className="h-screen w-full flex justify-center items-start bg-gray-300 text-black">
      <article className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <div>
            <h3 className="font-medium sm:text-lg">
              <span>{currentQues.question}</span>
            </h3>
            <h5 className="font-sm sm:text-sm">
              <span>Note: {currentQues.questionDescription}</span>
            </h5>
            <fieldset className="grid grid-cols-2 gap-4 mt-5">
              <legend className="sr-only">Options</legend>
              {currentQues.options.map((option, index) => (
                <div key={index}>
                  <label
                    htmlFor={`Option${index}`}
                    className={`flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                      selectedOption === index
                        ? isCorrect === null
                          ? 'border-blue-500'
                          : isCorrect
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-black'
                        : ''
                    }`}
                  >
                    <div>
                      <p className="text-gray-700">{option}</p>
                    </div>
                    <input
                      type="radio"
                      name={`Option${currentQuesIndex}`}
                      value={`Option${index}`}
                      id={`Option${index}`}
                      className="size-5 border-gray-300 text-blue-500"
                      checked={selectedOption === index}
                      onChange={() => handleAnswerSelect(currentQuesIndex, index)}
                    />
                  </label>
                </div>
              ))}
            </fieldset>
          </div>
        </div>
        <div className="flex justify-between m-4">
          <button
            className={`-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl px-3 py-1.5 ${
              selectedOption !== null ? 'bg-blue-600 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>
          <button
            className="bg-red-500 text-white rounded-lg px-4 py-2"
            onClick={handleReset}
          >
            Reset Quiz
          </button>
        </div>
      </article>
    </div>
  );
}

export default Quiz;
