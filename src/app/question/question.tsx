"use client";
import { useEffect, useState } from 'react';
import { goToNextQuestion, goToPreviousQuestion, saveAnswer }  from '@/redux/features/question-slice'
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { generatePromptForOpenAI } from '../../openAI/prompt';
import { useRouter } from 'next/navigation'


export default function QuestionLogic() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const currentQuestionIndex = useAppSelector((state) => state.questionReducer.currentQuestionIndex);
    const questionsOrder = useAppSelector((state) => state.questionReducer.questionsOrder);
    const currentQuestion = useAppSelector((state) => state.questionReducer.questions[questionsOrder[currentQuestionIndex]]);
    const userAnswers = useAppSelector((state) => state.questionReducer.userAnswers);
    const questions = useAppSelector((state) => state.questionReducer.questions);
    
    useEffect(() => {
        if (Object.keys(userAnswers).length === questionsOrder.length) {
            const prompt = generatePromptForOpenAI(userAnswers, questions);
            console.log(prompt); 
        }
    }, [userAnswers, questionsOrder, questions]);
    

    const onClickNext = () => {
        console.log("Next clicked");
        if (currentQuestionIndex === questionsOrder.length - 1) {
            router.push('/pricing');
        } else {
            dispatch(goToNextQuestion());
        }
    }
    

    const onClickPrevious = () => {
        console.log("Previous clicked");
        dispatch(goToPreviousQuestion());
    }
    const onAnswerClick = (answer: string) => {
        console.log("Answer clicked: ", answer);
        dispatch(saveAnswer({ questionName: questionsOrder[currentQuestionIndex], answer }));
    
        if (currentQuestionIndex === questionsOrder.length - 1) {
            router.push('/pricing');
        }
    }
    

    return (
        <>
        <div className="w-full px-6 md:px-8 lg:px-16">
            <div className="rounded-lg bg-black p-8" style={{ height: '800px' }}>
                <div className="mb-1 text-base font-medium text-white">{currentQuestionIndex + 1}/{questionsOrder.length}</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${(currentQuestionIndex + 1) / questionsOrder.length * 100}%` }}></div>
                </div>
                <div className="flex flex-col items-center justify-center h-full flex-grow">
                    <h1 className="text-4xl text-white mb-8">{currentQuestion.question}</h1>
                    <div className="flex flex-wrap justify-center gap-2">
                        {currentQuestion.answers.map(answer => (
                            <button 
                                key={answer} 
                                onClick={() => onAnswerClick(answer)}
                                type="button" 
                                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900"
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-5 left-8 right-8 flex justify-between">
                    <button onClick={onClickPrevious} type="button" className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-gray-900">Previous</button>
                    <button onClick={onClickNext} type="button" className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-gray-900">Next</button>
                </div>
            </div>
        </div>
    </>
    
    );
}