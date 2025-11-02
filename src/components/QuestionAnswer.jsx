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
            className="text-right px-4 py-2 dark:bg-zinc-700 bg-indigo-100 dark:text-zinc-100 text-slate-800 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit max-w-[80%] flex items-center justify-center shadow-sm"
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
