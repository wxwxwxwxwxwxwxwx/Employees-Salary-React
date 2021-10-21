import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Alex C.', salary: 800, increase: false, star: false, id: 1},
				{name: 'David B', salary: 1000, increase: false, star: false, id: 2},
				{name: 'Osсar V.', salary: 1500, increase: false, star: false, id: 3}
			]
		}
		this.maxId = 3;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		});
	}

	addItem = (e) => {
        e.preventDefault();
		this.setState(({data, maxId}) => {
			const {name, salary} = e.target.value;
			const newPerson = [
				{name : name, salary: salary, id: maxId++}
			]

			const before = data;
			const after = newPerson;

			const newArray = [...before, ...after];

			return {
				data: newArray
			}
		});
    }

  	render() {

		return (
			<div className="app">
				<AppInfo />
		
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}/>

				<EmployeesAddForm
					onAdd={this.addItem}/>
			</div>
		);
  	}
}

export default App;
