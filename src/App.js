import React, { Component } from 'react'

import './App.css';
import TaskList from './TaskList'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: [],
      currentItem: {
        text: "",
        key: ""
      }


    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
  }
  handleInput(e) {
    const currentItem = {
      text: e.target.value,
      key: Date.now()
    }
    this.setState({
      currentItem
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      this.setState({
        itemList: [...this.state.itemList, newItem],
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
  }
  deleteItem(key) {
    const filteredList = this.state.itemList.filter(item => item.key !== key)

    this.setState({
      itemList: filteredList
    })
  }
  editItem(key) {

    const item = this.state.itemList.filter(item => item.key === key)[0];
    this.deleteItem(key);
    this.setState({
      currentItem: item,
    })

  }

  render() {
    return (
      <div className='App'>
        <form className='form-div' onSubmit={this.addItem}>
          <input type='text' placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput} />
          <button type='submit'>Add activity</button>
        </form>
        <TaskList itemList={this.state.itemList} deleteItem={this.deleteItem} editItem={this.editItem} />
      </div>
    )
  }
}
