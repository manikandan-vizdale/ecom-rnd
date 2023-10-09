'use client'

import React, { useState } from 'react'
import { useGetQuestionNum } from './zustand/state'

const DiscoverCard = () => {

  const questions = [
    'Total revenue for this month',
    'Total number of orders for this month',
    'Current month Sales',
    'Previous month Sales',
    'Total marketing costs',
    'Number of new customers',
    'Average Purchase value of a customer',
    'Average Puchase frequency of a customer',
    'Average customer lifespan',
    'Num of customers at start of the month',
    'Num of customers at end of the month',
    'Num of new customers in a month',
    'Num of customers make repeated purchases',
    'Total num of customers'
  ]

  const { questionNum, setQuestionNum, response, setResponse, point, setPoint } = useGetQuestionNum();
  const [ans, setAns] = useState('');

  const goBack = () => {
    setAns(response[questionNum - 1].answer)
    setQuestionNum(questionNum - 1);
  }

  const changeQuestion = () => {
    const existingItemIndex = response.findIndex(item => item.quesNum === questionNum);
    if (existingItemIndex !== -1 && ans != "") {
      const updatedResponse = [...response];
      updatedResponse[existingItemIndex].answer = ans;
      setResponse(updatedResponse);
    } else {
      setResponse([...response, { quesNum: questionNum, answer: ans }]);
    }
    setAns('');
    setQuestionNum(questionNum + 1);
    setAns(response[questionNum + 1] == undefined ? '' : response[questionNum + 1].answer);
  }

  const calculate = () => {
    let res = [...response, { quesNum: questionNum, answer: ans }]
    setResponse([...response, { quesNum: questionNum, answer: ans }]);
    let score = [];
    console.log(res);
    score[0] = res[0].answer / res[1].answer;
    score[1] = score[0];
    score[2] = ((res[2].answer - res[3].answer) / res[3].answer) * 100;
    score[3] = score[2];
    score[4] = res[4].answer / res[5].answer;
    score[5] = score[4];
    score[6] = res[6].answer * res[7].answer * res[8].answer;
    score[7] = score[8] = score[6];
    score[9] = ((res[9].answer - res[10].answer) / res[9].answer) * 100;
    score[10] = score[9];
    score[11] = ((res[10].answer - res[11].answer) / res[9].answer) * 100;
    score[12] = (res[12].answer / res[13].answer) * 100;
    score[13] = score[12];
    console.log(score);

    let msg = [...point];

    if (score[0] < 1500) {
      msg[0].answer = msg[1].answer = 'Give combo offers, Bundle offers, Discount on high value orders';
      msg[0].flag = msg[1].flag = 0
    } else {
      msg[0].answer = msg[1].answer = 'Good!';
      msg[0].flag = msg[1].flag = 1;
    }

    if (score[2] < 20) {
      msg[2].answer = msg[3].answer = 'There is a decline in revenue, Critical';
      msg[2].flag = msg[3].flag = 0;
    } else {
      msg[2].answer = msg[3].answer = 'Good!';
      msg[2].flag = msg[3].flag = 1;
    }

    if (score[4] > 6000) {
      msg[4].answer = msg[5].answer = 'Reduce cost of marketing, choose different customer base';
      msg[4].flag = msg[5].flag = 0;
    } else {
      msg[4].answer = msg[5].answer = 'Good!';
      msg[4].flag = msg[5].flag = 1;
    }

    if (score[6] < 8000) {
      msg[6].answer = msg[7].answer = msg[8].answer = 'Select best customers, target good one';
      msg[6].flag = msg[7].flag = msg[8].flag = 0;
    } else {
      msg[6].answer = msg[7].answer = msg[8].answer = 'Good customer base!';
      msg[6].flag = msg[7].flag = msg[8].flag = 1;
    }

    if (score[9] > 40) {
      msg[9].answer = msg[10].answer = 'Sign of customer dissatisfaction, Increase customer support. Increase customer experience. Get feedbacks often';
      msg[9].flag = msg[10].flag = 0;
    } else {
      msg[9].answer = msg[10].answer = 'Good, Better customer retention!';
      msg[9].flag = msg[10].flag = 1;
    }

    if (score[11] < 20) {
      msg[11].answer = 'Sign of customer dissatisfaction, Increase customer support. Increase customer experience. Get feedbacks often';
      msg[11].flag = 0;
    } else {
      msg[11].answer = 'Good, Better customer retention!';
      msg[11].flag = 1;
    }

    if (score[12] < 20) {
      msg[12].answer = msg[13].answer = 'Try to make repeated purchase plans';
      msg[12].flag = msg[13].flag = 0;
    } else {
      msg[12].answer = msg[13].answer = 'Good, Better customer satisfaction!';
      msg[12].flag = msg[13].flag = 1;
    }

    setPoint(msg);
    console.log(msg);

    setAns('');
    setQuestionNum(questionNum + 1);
  }

  return (
    <div className='h-screen w-11/12 flex flex-col items-center justify-center' id='DiscoverCard'>
      <h1 className='text-left w-5/12 justify-start items-start'>{questionNum + 1} / {questions.length}</h1>
      <div className="p-5 w-7/12 gap-6 py-10 flex flex-col justify-center items-center">
        <h1 className="mb-1 text-2xl font-medium">
          {questions[questionNum]}
        </h1>
        <input
          type="number"
          onChange={(e) => { setAns(e.target.value) }}
          required
          className="py-2 px-2 mt-12 bg-gray-200 rounded-md"
          value={ans}
        />
        <div className='flex gap-4'>
          {questionNum != 0 && <button
            onClick={goBack}
            className="bg-[#1B1A1A] border-[#1B1A1A] mt-4 justify-start flex w-fit px-5 py-2 rounded-md text-white"
          >
            BACK
          </button>}
          {questionNum != questions.length - 1 && <button
            onClick={changeQuestion}
            disabled={ans.length == 0}
            className="bg-[#1B1A1A] border-[#1B1A1A] mt-4 justify-start flex w-fit px-5 py-2 rounded-md text-white"
          >
            NEXT
          </button>}
          {questionNum == questions.length - 1 && <button
            onClick={calculate}
            className="bg-[#1B1A1A] border-[#1B1A1A] mt-4 justify-start flex w-fit px-5 py-2 rounded-md text-white"
          >
            SUBMIT
          </button>}
        </div>
      </div>
    </div >
  )
}

export default DiscoverCard
