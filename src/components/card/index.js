import React from "react";

const Card = (props) => {
  const { mainHead, descriptionPara, cardDate } = props;
  return (
    <div className="bg-gray-100 border-2 border-gray-600 rounded-xl flex flex-col gap-[5px] justify-between w-[300px] p-[20px] hover:bg-gray-200 hover:transition ease-in-out delay-150">
      <div>
        <h2 className=" text-2xl font-bold mb-2">{mainHead}</h2>
        <p>{descriptionPara}</p>
      </div>
      <h5 className="font-bold">{cardDate}</h5>
    </div>
  );
};

export default Card;
