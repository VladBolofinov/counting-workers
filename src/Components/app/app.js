import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import TestSection from "../testSection/testSection";
import './app.css';
import {Component} from "react";
import searchPanel from "../search-panel/search-panel";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, rise:true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise:false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise:false, id: 3},
                {name: 'Carl W.', salary: 5000, increase: true, rise:false, id: 4},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => { //setState принимает как аргумент ф-цию.
            return  {                     //Эта функция получает предыдущее состояние в качестве аргумента
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id,prop) => {
        /*this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0,index),newItem,...data.slice(index + 1)];
            return {
                data:newArr
            }
        })*/
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items,term) => {
        if (term.length === 0){
            return items;
        }
        return items.filter(item => {
             return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }


    filterPost = (items,filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }

    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    render() {
        const {data,term,filter}=this.state;
        const workersNumber = this.state.data.length;
        const workersSalaryNumber = this.state.data.filter(item => item.increase === true).length;
        const visibleData = this.filterPost(this.searchEmp(data,term), filter);
        return (
            <div className="app">
                <AppInfo
                    countWorkers={workersNumber}
                    countWorkersSalary={workersSalaryNumber}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
                <TestSection number='1' activ='true' text='person' />
            </div>
        );
    }
}
export default App;