import './app-info.css';
const AppInfo = (props) => {
    const {countWorkers,countWorkersSalary} = props;
    return (
        <div className='app-info'>
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countWorkers} </h2>
            <h2>Премию получат: {countWorkersSalary}</h2>
        </div>
    );
}

export default AppInfo;