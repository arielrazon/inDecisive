import React, { useState } from 'react';

export default class IBNU extends React.Component {

    state={
      tasks:[],
    };
  
    handleInput(task){
      this.setState({input:task.target.value})
    }
  
  
    render(){
      return(
        <div className="toDoInput" onClick="">
          <input
          type="text"
          value={this.state.input}
          onInput={e=>this.handleInput(e)}/>
        </div>
      )
    }
  }