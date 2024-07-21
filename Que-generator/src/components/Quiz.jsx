import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextQues, selectAns } from '../Redux/Quiz/QuizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const currentQuesIndex = useSelector((state) => state.quiz.currentQuesIndex);
  const questions = useSelector((state) => state.quiz.questions);
  const isCorrect = useSelector((state) => state.quiz.isCorrect);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuesIndex]);

  if (!questions || questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQues = questions[currentQuesIndex];

  const handleNext = () => {
    dispatch(nextQues());
  };

  const handleAnswerSelect = (quesIndex, ansIndex) => {
    setSelectedOption(ansIndex);
    dispatch(selectAns({ quesIndex, ansIndex }));
  };

  return (
    <div className="h-screen w-full flex justify-center items-start bg-gray-300 text-black">
      <article className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <div>
            <h3 className="font-medium sm:text-lg">
              <span href="#" className="hover:underline">
                {currentQues.question}
              </span>
            </h3>
            <h5 className="font-sm sm:text-sm">
              <span href="#" className="hover:underline">
                Note: {currentQues.questionDescription}
              </span>
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
        <div className="flex justify-end">
          <button
            className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-blue-600 px-3 py-1.5 text-white"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>
        </div>
      </article>
    </div>
  );
}

export default Quiz;
