import React from 'react';

class Form extends React.Component {

    changeHandler(event) {
        if (event.target.type === 'text') {
            let newTask = event.target.value;

            this.props.setCurrentTask(newTask)
        }
    }

    clickHandler(event){
        let addTask = this.props.tasks;
        addTask.push(this.props.currentTask);

        this.props.setTasks(addTask)
    }

  render() {

    return (
      <div className='container'>
        <h1>You should be doing these..</h1>
        <h2>
            <input
                type='text'
                value={this.props.currentTask}
                className='input'
                onChange={(event) => {this.changeHandler(event)}}
                placeholder='Type tasks here..'
            />
        </h2>
        <button
            className='submit'
            onClick={(event)=>{this.clickHandler(event)}}>
            Submit
            </button>
        <br/>
      </div>
    );
  }
}

export default Form;