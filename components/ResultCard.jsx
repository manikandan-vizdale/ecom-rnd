import React from 'react';
import { useGetQuestionNum } from './zustand/state';

const questions = [
    'Total revenue for this month',
    'Total number of orders for this month',
    'Current month Sales',
    'Previous month Sales',
    'Total marketing costs',
    'Number of new customers',
    'Average Purchase value of a customer',
    'Average Purchase frequency of a customer',
    'Average customer lifespan',
    'Num of customers at the start of the month',
    'Num of customers at the end of the month',
    'Num of new customers in a month',
    'Num of customers making repeated purchases',
    'Total num of customers',
];

const ResultCard = () => {
    const { point } = useGetQuestionNum();

    return (
        <div className="flex flex-col h-screen w-full items-center justify-between">
            <table className='space-y-4'>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody className='space-y-4'>
                    {questions.map((question, i) => (
                        <tr key={i}>
                            <td>{question}</td>
                            <td className={point[i].flag === 1 ? 'bg-green-100' : 'bg-red-100'}>
                                {point[i].answer}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultCard;
