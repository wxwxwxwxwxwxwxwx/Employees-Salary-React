import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    addItem = (e) => {
        e.preventDefault();
		this.setState(({name, salary}) => {
            const {data} = this.props;
			// const before = data;
			// const newPerson = [{name: name, salary: salary}];

			// const newArray = [...before, ...newPerson];

			return {
				data: data.push({name: name, salary: salary})
			}
            // alert(name + salary)
		});
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.addItem}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                        className="btn btn-outline-light"
                        >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;