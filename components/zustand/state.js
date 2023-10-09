import { create } from 'zustand';

export const useGetQuestionNum = create((set) => ({
    questionNum: 0,
    setQuestionNum: (newQuestionNum) => set({ questionNum: newQuestionNum }),
    response: [{ quesNum: 0, answer: '' }],
    setResponse: (newResponse) => set({ response: newResponse }),
    point: [
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' },
        { answer: '', flag: '' }
    ],
    setPoint: (newPoint) => set({ point: newPoint }),
}));
