import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactComponent from './ReactComponent'
import ReactPureComponent from './ReactPureComponent'

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 'component', value: '' },
        { id: 'purecomponent', value: '' }
      ]
    }
  }
  handleInputChange = (e) => {
    const { id, value } = e.target
    const data = this.state.data
      .map(eachData => eachData.id === id
           ? { ...eachData, value }
           : eachData)
    this.setState({ data })
  }
  render() {
    const { data } = this.state
    return (
      <div className='parent-wrapper'>
        <h3><u>Component vs. PureComponent</u></h3>
        <div className='list'>
          <h4>Values</h4>
          { data.map(({ id, value }) => <li key={id}>{ value }</li>) }
        </div>
        <div className='children'>
          <h4>React.Component</h4>
          <ReactComponent
            id='component'
            value={data[0].value}
            onChange = {this.handleInputChange}
          />
          <h4>React.PureComponent</h4>
          <ReactPureComponent
            id='purecomponent'
            value={data[1].value}
            onChange = {this.handleInputChange}
          />
        </div>
      </div>
    )
  }
}
