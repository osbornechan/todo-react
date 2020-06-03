import React from 'react';

class Form extends React.Component {

    changeHandler(event) {
        if (event.target.type === 'text') {
            let newTask = event.target.value;

            this.props.setCurrentTask(newTask)
        }
    }

    clickHandler(event){
        let allTasks = this.props.tasks;
        let addTask = this.props.currentTask

        if (addTask.length < 1) {
            this.props.setError('You have more to do then that.. (min. 1 character)')
        } else if (addTask.length > 200) {
            this.props.setError('Woah slow down! (max. 200 characters)')
        } else {
            allTasks.push(addTask);
            this.props.setTasks(addTask)
        }


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
        <p className='error'>{this.props.error}</p>
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