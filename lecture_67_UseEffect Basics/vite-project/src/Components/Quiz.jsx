import { useState } from "react";
import questions from "../questions";
import Question from "./Question";

function Quiz() {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < questions.length - 1) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <>
            <div className="box">
                <Question data={questions[index]} />

                <div>
                    <button onClick={prev}class className="btn">Prev</button>
                    <button onClick={next} className="btn">Next </button>
                </div>
            </div>


        </>);
}

export default Quiz;