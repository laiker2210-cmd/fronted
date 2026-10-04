import "./ProgressBar.css"

function ProgressBar({ persent }) {

    const getColor = () => {
        if (persent < 40) {
            return "#001d25ff"
        }else if(persent < 70){
            return "#015e7a"
        }else{
            return "#019ac9ff"
        }

    }

    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${persent}%`, background: getColor() }}>

            </div>
        </div>
    )
}

export default ProgressBar;