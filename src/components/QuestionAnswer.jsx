import React from "react";
import Answers from "./Answers";

const QuestionAnswer = ({ item, index }) => {
  return (
    <>
      <div
        key={index + Math.random()}
        className={item.type === "q" ? "flex justify-end" : ""}
      >
        {item.type === "q" ? (
          <li
            className="text-right p-1 border-8 dark:bg-zinc-700 bg-green-200 dark:border-zinc-700 border-green-200 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit"
            key={index}
          >
            <Answers
              ans={item.text}
              index={index}
              totalResult={1}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li className="text-left p-1" key={ansIndex + Math.random()}>
              <Answers
                ans={ansItem}
                index={ansIndex}
                totalResult={item.length}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default QuestionAnswer;
