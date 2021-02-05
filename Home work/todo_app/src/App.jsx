import './App.css';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';



class App extends Component {
 
  constructor() {
    super()
    
    this.state = {
      task: [{todo : 'Morning',edit : false}],
      value: ''
    }
  }
 
  add_Todo = () => {
   
    let obj = {
      todo: this.state.value,
      edit: false
    }
    
    this.setState({
      task: [...this.state.task, obj],
      value: ''
    })
  }
  edit_todo = (index) => {
    this.state.task[index].edit = true;
    this.setState({
      task: this.state.task
    })
  }
  delete_todo = (index) => {
    this.state.task.splice(index, 1);
    this.setState({
      task: this.state.task
    })
  }
  deleteAll=()=>{
  this.setState({
    task:[]
  })
  }
  handle_Change=(e,i)=>{
    this.state.task[i].todo = e.target.value;
    this.setState({
      task: this.state.task
    }) 
  }
  update=(index)=>{
    this.state.task[index].edit = false;
    this.setState({
      task: this.state.task
    })
  }
  render() {
    return (
      <div className='main'>
        <div className='todo'>
          <h2>Add Tasks</h2>
          <form noValidate autoComplete="off">
            <TextField value={this.state.value} style={{ fontSize: "20px" }} onChange={
              (e) => {
                this.setState({
                  value: e.target.value
                })
              }
            }
              label="What to do ?" />
            <br />
            <button type="button" className="btn btn-primary"
              onClick={
                () => {
                  this.add_Todo()
                }
              }
            >
              Add
        </button>
          </form>
        </div>
        <div className="todos">
          <h2>Tasks : </h2>
          <ul>
            {
              this.state.task.map((v, i) => {
                return (
                  <li key={i}>

                    {v.edit ? <TextField value={v.todo} style={{ fontSize: "20px" }} label="Update" onChange={
                      (e)=>{
                        this.handle_Change(e,i);
                      }
                    } />
                      :
                      v.todo}
                    {
                      v.edit ? <button type="button" className="btn btn-primary btn-sm delete"
                        onClick={() => this.update(i)}>Update</button>
                        :
                        <button type="button" className="btn btn-primary btn-sm delete"
                          onClick={() => this.edit_todo(i)}>Edit</button>
                    }
                    <button type="button" className="btn btn-primary btn-sm delete"
                      onClick={() => this.delete_todo(i)}>Delete</button>
                    <button type="button" className="btn btn-primary btn-sm delete"
                      onClick={() => this.deleteAll()}>Delete All</button>
                  </li>
                );
              }
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
