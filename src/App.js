import React, { Component } from "react";
import "./styles.css";
import AddForm from "./components/addForm";
import Quadrant from "./components/quadrant";

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: { ubni: {}, ibnu: {}, nuni: {}, iau: {} } };
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
                iau: { [task.content.title]: { ...task } }
              }
            });
        console.log(this.state);
        break;
      case "IBNU":
        this.state.tasks.ibnu
          ? this.setState({
              tasks: {
                ...this.state.tasks,
                ibnu: {
                  ...this.state.tasks.iau,
                  [task.content.title]: { ...task }
                }
              }
            })
          : this.setState({
              tasks: {
                ...this.state.tasks,
                ibnu: { [task.content.title]: { ...task } }
              }
            });
        console.log(this.state);
        break;
      case "UBNI":
        this.state.tasks.ubni
          ? this.setState({
              tasks: {
                ...this.state.tasks,
                ubni: {
                  ...this.state.tasks.ubni,
                  [task.content.title]: { ...task }
                }
              }
            })
          : this.setState({
              tasks: {
                ...this.state.tasks,
                ubni: { [task.content.title]: { ...task } }
              }
            });
        console.log(this.state);
        break;
      case "NUNI":
        this.state.tasks.nuni
          ? this.setState({
              tasks: {
                ...this.state.tasks,
                nuni: {
                  ...this.state.tasks.nuni,
                  [task.content.title]: { ...task }
                }
              }
            })
          : this.setState({
              tasks: {
                ...this.state.tasks,
                nuni: { [task.content.title]: { ...task } }
              }
            });
        console.log(this.state);
        break;
      default:
        console.log("?");
        break;
    }
  };

  componentWillMount() {
    this.setState({ tasks: { ubni: {}, ibnu: {}, nuni: {}, iau: {} } });
  }

  render() {
    return (
      <div className="App">
        <Quadrant
          items={
            this.state.tasks.iau === {}
              ? this.state.tasks.iau
              : ["No", "Def Not"]
          }
          onClick={console.log("clicked")}
          heading="Important and Urgent"
        />
        <AddForm onClick={this.capture} />
      </div>
    );
  }
}
