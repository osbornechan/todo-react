import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form/form';
import ItemList from './components/item_list/itemlist'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTask: "",
            tasks: [],
            error: ''
        }
    }

    setCurrentTask(currentTask) {
        this.setState({
            currentTask: currentTask
        })
        console.log(currentTask)
    }

    setTasks(tasks) {
        this.setState({
            tasks: tasks
        })
        console.log(this.state.tasks)
    }

    setError(message){
        this.setState({
            error: message
        })
    }


    render() {

    return (
        <div>
          <Form
            currentTask={this.state.currentTask}
            tasks={this.state.tasks}
            error={this.state.error}
            setCurrentTask={(task)=>{this.setCurrentTask(task)}}
            setTasks={(tasks)=> {
                this.setTasks(tasks)}}
            setError={(message)=>{this.setError(message)}}
            />
          <ItemList
            tasks={this.state.tasks}
            setTasks={(tasks)=>{this.setTasks(tasks)}}/>
        </div>
    );
  }
}

export default hot(module)(App);