import React, { Component } from 'react'
import { string } from 'postcss-selector-parser';

class DetailPage extends Component{
  constructor () {
    super();
    this.state = {
      compdata: 'Old data',
      anotherdata: 'Another Data'
    }
  }

  changecompdata = () => {
      this.setState({
          compdata: 'New Comp Data'
      });
  }

 componentDidMount(){
    console.log('Props ', this.props);
    this.setState({
        ...this.state,
        ...this.props
    }, () => {
        console.log('new state', this.state);
    });
        
 }

  render () {
    return (
      <div>
        Detail Page
        <p>{this.props.listdata}</p>
        <p>{this.state.anotherdata}</p>
        <p>{this.state.compdata}</p>    
        <button onClick={this.changecompdata}>Change compdata</button>
        <button onClick={this.props.callback}>Callback Fn</button>
      </div>
    )
  }
}

export default DetailPage
