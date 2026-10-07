import "./Success.css"

function Success({count}) {
    return (
        <div className="success-block">
            <h3>Успешно!</h3>
            <p>Всем <b>{count}</b> отправлено приглашение</p>
            <button className="send-ivite-btn" onClick={()=>window.location.reload()}>Назад</button>
        </div>
    )
}

export default Success;