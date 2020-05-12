import React from 'react';

export class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        some
        {this.props.title}
      </div>
    )
  }
}