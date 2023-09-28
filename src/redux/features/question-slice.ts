import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type QuestionState = {
    question: string,
    answers: string[],
};

type QuestionsSliceState = {
    questionsOrder: string[],
    currentQuestionIndex: number,
    questions: Record<string, QuestionState>,
    userAnswers: Record<string, string>
};

const initialState: QuestionsSliceState = {
    questionsOrder: [
        "Goal", "ActivityLevel", "TrainingFrequency","TrainingDuration","PrimaryFocusArea","TrainingStyle",
        "Equipment", "InjuryProneAreas", "Experience", "Diet", "TrainingTime", "RestDays", "DaysOff", "Intensity",
        "Hydration", "LevelOfCommitment"
    ],
    currentQuestionIndex: 0,
    questions: {
      Goal: {
        question: "What is your primary fitness goal?",
        answers: ["Weight loss", "Muscle gain", "Improve stamina", "Flexibility and balance", "Rehabilitation"]
      },
      ActivityLevel: {
        question: "How would you describe your current activity level?",
        answers: ["Sedentary", "Lightly active", "Moderately active", "Very active", "Super active"]
      },
      TrainingFrequency: {
        question: "How often do you plan to train?",
        answers: ["1-2 times a week", "3-4 times a week", "5-6 times a week", "Daily"]
      },
      TrainingDuration: {
        question: "How long is each training session?",
        answers: ["Less than 30 minutes", "30-60 minutes", "60-90 minutes", "More than 90 minutes"]
      },
      PrimaryFocusArea: {
        question: "What is your primary focus area for workouts?",
        answers: ["Upper body", "Lower body", "Core", "Full body"]
      },
      TrainingStyle: {
        question: "What training style do you prefer?",
        answers: ["Cardio", "Strength training", "HIIT", "Yoga/Pilates", "Sports-specific"]
      },
      Equipment: {
        question: "What equipment do you have access to?",
        answers: ["None", "Basic", "Home gym", "Full gym"]
      },
      InjuryProneAreas: {
        question: "Do you have any injury-prone areas or previous injuries?",
        answers: ["Knees", "Lower back", "Shoulders", "Neck", "None"]
      },
      Experience: {
        question: "How experienced are you in training?",
        answers: ["Beginner", "Intermediate", "Advanced"]
      },
      Diet: {
        question: "Do you follow any specific diet?",
        answers: ["Vegan/Vegetarian", "Paleo", "Keto", "Intermittent fasting", "No diet"]
      },
      TrainingTime: {
        question: "What time do you prefer for training?",
        answers: ["Morning", "Afternoon", "Evening"]
      },
      RestDays: {
        question: "How many rest days do you prefer in a week?",
        answers: ["None", "1-2 days", "3-4 days", "More than 4 days"]
      },
      DaysOff: {
        question: "Which days do you want to take off from training?",
        answers: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      },
      Intensity: {
        question: "What workout intensity do you prefer?",
        answers: ["Low", "Moderate", "High"]
      },
      Hydration: {
        question: "On average, how many glasses of water do you drink daily?",
        answers: ["Less than 4 glasses", "4-8 glasses", "More than 8 glasses"]
      },
      LevelOfCommitment: {
        question: "How committed are you to this training program?",
        answers: ["Fully committed", "Will try but not sure", "Looking for a change but skeptical"]
      }
    },
    userAnswers: {}
  };

  export const questions = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        goToNextQuestion: (state) => {
            if (state.currentQuestionIndex < state.questionsOrder.length - 1) {
                state.currentQuestionIndex++;
            }
        },
        goToPreviousQuestion: (state) => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
            }
        },
        saveAnswer: (state, action: PayloadAction<{ questionName: string, answer: string }>) => {
            const { questionName, answer } = action.payload;
            state.userAnswers[questionName] = answer;
        },
    },
});


  
export const { goToNextQuestion, goToPreviousQuestion, saveAnswer } = questions.actions;

export default questions.reducer;






