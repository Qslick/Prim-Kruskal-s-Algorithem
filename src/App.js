
import React, { Component } from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';

import './App.css';

class App extends Component {
  nodeCount = 0;
  constructor(props) {
    super(props);

    this.state = {
      stageWidth: window.innerWidth,
      stageHeight: window.innerHeight,
      nodeList: [],
      numNodes: 5,
      endpoints: [],
      radius: 10,
    };
  }

  nodePos(count) {
    this.nodeCount++;
    let data =
    {
      x: Math.random() * this.state.stageWidth,
      y: Math.random() * this.state.stageWidth,
      color: 'red'
    }
 
    this.setState((state, props) => {
      nodeList: state.nodeList.push(data);
      endpoints: state.endpoints.push(data.x, data.y);
    });
    return data;
  }

  addNode() {
    this.setState((state, props) => {
      numNodes: this.state.numNodes++;
    });
    console.log(this.state.numNodes);
  }

  subtractNode() {
    this.setState((state, props) => {
      numNodes: this.state.numNodes--;
    });
  }

  newGraph() {
    this.setState({
      nodeList: [],
      endpoints: []
        });

    this.nodeCount = 0;
    this.nodePos();
    console.log(this.state)
  }

  addEdges() {
    this.setState((state, props) => {
      endpoints: state.endpoints.push(state.nodeList[0].x, state.nodeList[0].y)
    })
    console.log(this.state.numNodes)
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
          <Stage width={this.state.stageWidth} height={this.state.stageHeight}>
            <Layer>

              <Line points={this.state.endpoints} stroke="blue" />
              {[...Array(this.state.numNodes)].map((nodeData = this.nodePos(), i) =>
                <Circle key={i} radius={this.state.radius} x={nodeData.x} y={nodeData.y} fill={nodeData.color} />
              )}

              {this.addEdges()}

            </Layer>
          </Stage>

          <h3>Number of nodes: {this.state.numNodes}</h3>
          <button onClick={this.addNode.bind(this)}>+1</button>
          <button onClick={this.subtractNode.bind(this)}>-1</button>
          <button onClick={this.newGraph.bind(this)}>New Graph</button>

        </header>
      </div>
    );
  }
}

export default App;
