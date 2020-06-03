import React from 'react';

export default class Todoitem extends React.Component {

    clickHandler(event) {
        let index = event.target.id;
        delete(this.props.tasks[index]);

        this.props.setTasks(this.props.tasks)
    }

    render() {
        const taskList = this.props.tasks.map((task, index) => {
            return (
                <label>
                    <i class="fa fa-trash-alt"
                        id={index}
                        onClick={(event)=>{this.clickHandler(event)}}>
                    </i> &nbsp;
                    {task} ----- {this.props.date}
                </label>
            )
        })

        return(
            <div className='task-box'>
                {taskList}
            </div>
        )
    }
}