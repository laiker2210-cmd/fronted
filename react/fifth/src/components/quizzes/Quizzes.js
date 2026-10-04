import ProgressBar from "../../progress/ProgressBar";
import "./Quizzes.css";

function Quizzes({ question, onClickVariant, questions, step }) {

    const persent = Math.round(step / questions.length * 100);
    console.log(persent);


    return (
        <div className="content">
            <ProgressBar persent={persent} />
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li key={index} onClick={() => onClickVariant(index)}>{text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Quizzes;