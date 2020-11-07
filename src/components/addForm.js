import React, { Component } from "react";

export default class AddForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  capture = () => {
    const quadrant = document.querySelector("#quadrant").value;
    const priority = document.querySelector("#priority").value;
    const newTask = document.querySelector("#newTask").value;

    let task = {
      date: new Date(),
      content: {
        title: newTask.trim(),
        priority: priority
      }
    };

    switch (quadrant) {
      case "IAU":
        this.state.tasks.iau
          ? this.setState({
              tasks: {
                ...this.state.tasks,
                iau: {
                  ...this.state.tasks.iau,
                  [task.content.title]: { ...task }
                }
              }
            })
          : this.setState({
              tasks: {
                ...this.state.tasks,
                IAU: { [this.task.date]: { ...task } }
              }
            });
        console.log(this.state);
        break;
      case "IBNU":
        this.setState({ tasks: { ...this.state.tasks, IBNU: { ...task } } });
        console.log(this.state);
        break;
      case "UBNI":
        this.setState({ tasks: { ...this.state.tasks, UBNI: { ...task } } });
        console.log(this.state);
        break;
      case "NUNI":
        this.setState({ tasks: { ...this.state.tasks, NUNI: { ...task } } });
        console.log(this.state);
        break;
      default:
        console.log("?");
        break;
    }
  };

  componentDidMount() {
    this.setState({ tasks: { ubni: {}, ibnu: {}, nuni: {}, iau: {} } });
  }

  render() {
    return (
      <div>
        <input id="newTask" type="text" placeholder="add task here" />
        <select id="quadrant">
          <option value="IAU">Important and Urgent</option>
          <option value="IBNU">Important but Not Urgent</option>
          <option value="UBNI">Urgent But Not Important</option>
          <option value="NUNI">Not Urgent, Not Important</option>
        </select>
        <select id="priority">
          <option value="0">Bad Things Will Happen if this Isn't Done</option>
          <option value="1">Immediate</option>
          <option value="2">Next Couple of Weeks</option>
          <option value="3">Eventually</option>
          <option value="4">
            Not Time Sensitive, No Consequences for Not Getting It Done
          </option>
        </select>
        <button id="submit" onClick={this.capture}>
          Update
        </button>
      </div>
    );
  }
}
