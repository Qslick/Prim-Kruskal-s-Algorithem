
import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text, Circle, Line } from 'react-konva';

import MyCircle from './MyCircle';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stageWidth: window.innerWidth,
      stageHeight: window.innerHeight,
      nodeList: [],
      numNodes: 5,
      endpoints:[],
      radius: 10,

    };

  }

  nodePos() {
    let data =
    {
      x: Math.random() * this.state.stageWidth,
      y: Math.random() * this.state.stageWidth,
    }
    this.setState((state, props) => {
      nodeList: state.nodeList.push(data);
      endpoints: state.endpoints.push(data.x, data.y);
    });
    console.log(this.state)
    return data;
  }

  test() {
    let data = this.state.nodeList;
    data.map((x) => {
      console.log(x.key)
    })
    // console.log(data);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

          <button onClick={this.tap}>
            test button
          </button>

          <Stage width={this.state.stageWidth} height={this.state.stageHeight}>
            <Layer>



              <Line points={this.state.endpoints} stroke="blue" />
              {[...Array(this.state.numNodes)].map((position = this.nodePos(), i) =>
                <Circle key={i} radius={this.state.radius} x={position.x} y={position.y} fill="red" />
              )}



            </Layer>
          </Stage>
        </header>
      </div>
    );
  }
}

export default App;
