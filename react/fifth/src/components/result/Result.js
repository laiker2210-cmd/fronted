import "./Result.css";

function Result({ correct, questions }) {
    return (
        <div>
            <p className="text">Вы угадали <b>{correct}</b> ответ{correct === 1 ? "" : correct >= 2 && correct <= 4 ? "а" : "ов"} из {questions.length}</p>
            <a href="/" className="but">Попробовать снова</a>
        </div>
    )
}
export default Result;