import "./app-info.css";

const AppInfo = ({data}) => {

    const amount = data.length
    const riseAmount = data.filter(item => item.increase === true).length


    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {amount}</h2>
            <h2>Премию получат: {riseAmount}</h2>
        </div>
    )
}

export default AppInfo;