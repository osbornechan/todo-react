import React from 'react';

export default class Todoitem extends React.Component {
    render() {

        const taskList = this.props.tasks.map(task => {
            return (<label>{task} - {this.props.date}</label>)
        })

        return(
            <div className='task-box'>
                {taskList}
            </div>
        )
    }
}