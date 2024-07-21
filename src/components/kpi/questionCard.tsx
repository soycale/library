import React from 'react';

type Props = {
  title: string,
  question: string,
}

const QuestionCard: React.FC<Props> = ({ title, question }) => {
  return (
    <div className="flex flex-row w-[300px] h-[100px] rounded-lg p-5 overflow-hidden max-w-full hover:bg-gray-200">
      <div className="flex flex-col items-baseline flex-1 overflow-hidden">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm font-normal overflow-hidden text-ellipsis">{question}</p>
      </div>
    </div>
  );
}

export default QuestionCard;
