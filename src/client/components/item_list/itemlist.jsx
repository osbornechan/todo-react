import React from 'react'
import Todoitem from '../todo_item/todoitem'
var moment = require('moment');

export default class Itemlist extends React.Component {
    constructor() {
        super();
        this.state = {
            date: moment(new Date()).format('llll')
        }
    }

    render() {

        return(
            <Todoitem
                tasks={this.props.tasks}
                date={this.state.date} />
        )
    }
}