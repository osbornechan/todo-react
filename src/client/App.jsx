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
    }


    render() {

    return (
        <div>
          <Form
            currentTask={this.state.currentTask}
            tasks={this.state.tasks}
            setCurrentTask={(task)=>{this.setCurrentTask(task)}}
            setTasks={(tasks)=> {
                this.setTasks(tasks)}}
            />
          <ItemList tasks={this.state.tasks}/>
        </div>
    );
  }
}

export default hot(module)(App);