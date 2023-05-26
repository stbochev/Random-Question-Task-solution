import StaticMath from "../components/StaticMath/StaticMath";
import MathInput from "../components/MathInput/MathInput";
import { useState } from "react";
import "../public/styles/globals.css";
import { evaluateTex } from "tex-math-parser";
import {
  valueA,
  valueB,
  objectA,
  objectB,
  resultOne,
  resultTwo,
  question,
  addition,
  questionChoice,
} from "../public/helper";

export default function App({}) {
  const [memory, setMemory] = useState({});
  const [solutionShown, setSolutionShown] = useState(false);
  const [result, setQuestion] = useState(question);

  function addToMemory(newValue) {
    setMemory((prev) => {
      return { ...prev, ...newValue };
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          maxWidth: "800px",
          width: "calc(100vw - 40px)",
          marginTop: "50px",
        }}
      >
        <StaticMath
          latex={`\\text{${valueA} ${addition} ${objectA} and ${valueB} ${addition} ${objectB} have a total cost of £${resultOne}}`}
        />
        <StaticMath
          latex={`\\text{${valueB} ${addition} ${objectA} and ${valueA} ${addition} ${objectB} have a total cost of £${resultTwo}}`}
        />
        <StaticMath
          latex={`\\text{Work out the total cost of 1 ${addition} ${questionChoice}}`}
        />
        <br />
        <br />
        {solutionShown ? (
          <StaticMath
            latex={`\\text{The price of 1 ${addition} ${questionChoice} is ${question}}`}
          />
        ) : (
          ""
        )}
        <br />
        <br />
        <MathInput
          buttons={["frac", "times"]}
          markingFunction={markingFunction}
          memKey="mathinput1"
          memory={memory}
          setMemory={addToMemory}
          placeholder="Type your answer here!"
        />
        <br />
        <br />
        <button
          onClick={() => {
            setMemory((prev) => {
              return { ...prev, feedbackShown: true };
            });
          }}
        >
          Check Answer
        </button>
        <br />
        {!solutionShown ? (
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              setSolutionShown(true);
            }}
          >
            Show Solution
          </button>
        ) : (
          ""
        )}
        {solutionShown ? (
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              setSolutionShown(false);
            }}
          >
            Hide Solution
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function markingFunction(userInput) {
  let inputValue;
  try {
    //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
    inputValue = evaluateTex(userInput).evaluated;
  } catch {
    return 0;
  }
  if (inputValue === question) {
    return 1;
  } else {
    return 0;
  }
}
