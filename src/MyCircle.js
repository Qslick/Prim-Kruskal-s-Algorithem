import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text, Circle } from 'react-konva';


class MyCircle extends Component {

constructor(props){
  super(props);

  this.state = {
    radius: 50
  };
}

tap(){

  let circle = this.Konva.Circle({
    x: 60,
    y: 60,
    radius: 70
  })
}

  render() {

    const width = window.innerWidth;
    const height = window.innerHeight;
    const scale = Math.random() * 3;
  
    return (
      <Circle
      id={this.props.id}
      radius={this.props.radius}
      x={this.props.x}
      y={this.props.y}
      fill="red"
      />

    );
  }
}

export default MyCircle;
