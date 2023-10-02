// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import BasicExample from "./components/Navbar";
// import MySideNav from './components/sideNav';


// function App() {
//   return (
//     <div className="App">
//      <MySideNav/>
//      <BasicExample/>
  
//     </div>
//   );
// }

// export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from "./components/Navbar";
// import MySideNav from './components/sideNav';
// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   Controls,
//   applyEdgeChanges,
//   applyNodeChanges,
// } from 'reactflow';
// import 'reactflow/dist/style.css';
// import './App.css';
// import './index.css';
// import TextUpdaterNode from './components/textUpdaterNode';

// const nodeTypes = { textUpdater: TextUpdaterNode };

// let id = 1;
// const getId = () => {return `${id++}`};

// let id1 = 1;
// const getId1 = () => {return `${id1++}`};

// const DnDFlow = () => {
//   const reactFlowWrapper = useRef(null);
//   const [nodes, setNodes] = useNodesState([]);
//   const [edges, setEdges] = useEdgesState([]);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const [inputNodeContents, setInputNodeContents] = useState({});
//   const [operatorNodeContent, setOperatorNodeContent] = useState('');

//     const handleInputChange = (id, event) => {
//       setInputNodeContents((prevContents) => {
//         const updatedContents = {
//           ...prevContents,
//           [id]: event.target.value,
//         };
//         console.log(`Input Node ${id} value: ${updatedContents[id]}`);
//         return updatedContents;
//       });
//       console.log(inputNodeContents);
//     };

//     const handleOperatorChange = (e) => {
//       const operatorValue = e.target.value
//       setOperatorNodeContent(operatorValue);
//       console.log(`Operator Node value: ${operatorValue}`);
//     };
  
//     const generateOutputNodeContent = () => {
//       const inputContent = [Object.values(inputNodeContents)];
//       console.log(inputNodeContents.values)
//       const operatorValue = operatorNodeContent;
//       console.log(operatorNodeContent.values)
//       console.log(`${inputContent[0][0]} ${operatorValue} ${inputContent[0][1]} = ${computeResult()}`)
//       return `${inputContent[0][0]} ${operatorValue} ${inputContent[0][1]} = ${computeResult()}`;
//     };

//     const computeResult = () => {
//       const inputContent1 = parseFloat(inputNodeContents['1']) || 0;
//       const inputContent2 = parseFloat(inputNodeContents['2']) || 0;
  
//       if (operatorNodeContent === '+') {
//         return inputContent1 + inputContent2;
//       } else if (operatorNodeContent === '-') {
//         return inputContent1 - inputContent2;
//       } else if (operatorNodeContent === '*') {
//         return inputContent1 * inputContent2;
//       } else if (operatorNodeContent === '/') {
//         return inputContent1 / inputContent2;
//       } else {
//         return 0;
//       }
//     };
//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     [setNodes]
//   );

//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     [setEdges]
//   );

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();

//       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//       const type = event.dataTransfer.getData('application/reactflow');

//       if (typeof type === 'undefined' || !type) {
//         return;
//       }
//       const position = reactFlowInstance.project({
//         x: event.clientX - reactFlowBounds.left,
//         y: event.clientY - reactFlowBounds.top,
//       });   
//       const outputNode = {
//         id: 'output',
//         type: 'textUpdater',
//         data: { label: generateOutputNodeContent() },
//         position,
//       };
//       const operatorNode = {
//         id: 'operator',
//         type: 'textUpdater',
//         data: { label: "Operator Node" ,handleOperatorChange },
//         position,
//       };
//       const InputNode = {
//         id: getId(),
//         type: 'textUpdater',
//         position,
//         data: { label: "Input Node" , handleInputChange , id:getId1()},
//       };
//       if (type === 'output') {
//         setNodes((nds) => nds.concat(outputNode));
//         console.log("OutNode")
//       } else if(type === "input"){
//         setNodes((nds) => nds.concat(InputNode));
//         console.log("InNode")
//       }else if(type === "operator"){
//         setNodes((nds) => nds.concat(operatorNode));
//         console.log("OPnode")
//       }
//     },
//     [reactFlowInstance]
//   );
//   return (
//     <div className="dndflow  bg-gradient-to-r from-bluey from-20% to-blue-900 to-80% ...">
//       <ReactFlowProvider >
//         <div className="reactflow-wrapper border-solid border-b-2 border-r-2 pattern-boxes pattern-white pattern-bg-bluey
//   pattern-size-4 pattern-opacity-20 "  ref={reactFlowWrapper} style={{ height: 800, width: 1700 }}>
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             nodeTypes={nodeTypes}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             onInit={setReactFlowInstance}
//             onDrop={onDrop}
//             onDragOver={onDragOver}
//             fitView
//           >
//             <Controls />
//           </ReactFlow>
//         </div>
//         <BasicExample/>
//         <MySideNav/>
       
//       </ReactFlowProvider>
//     </div>
//   );
// };
// export default DnDFlow;





import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./components/Navbar";
import MySideNav from './components/sideNav';
import React, { useState, useRef, useCallback, useEffect  } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  getIncomers,
  getOutgoers,
  applyEdgeChanges,
  applyNodeChanges,
  getConnectedEdges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import './index.css';
import  { MiniMap } from 'reactflow';
import CustomNode from './components/CustomNode';
// import "./styles.css";

let id = 1;
const getNodeId = () => {return `${id++}`};

// //const nodeTypes = {
//   custom: CustomNode,
// };

const initialNodes = [
  // {
  //   id: '1',
  //  // type: 'DefNode',
  //   data: { label:"Node"  },
  //   position: { x: 0, y: 50 },
  // },
  // {
  //   id: '2',
  //  // type: 'DefNode',
  //   data: { label:"Node"  },

  //   position: { x: -200, y: 200 },
  // },
  // {
  //   id: '3',
  //  // type: '',
  //   data: {label:"Node" },
  //   position: { x: 200, y: 200 },
  // },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
];

const FlowExample = () => {
  const reactFlowWrapper = useRef(null);
//   const [nodes, setNodes] = useNodesState([]);
//   const [edges, setEdges] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges , setEdges] = useEdgesState(initialEdges);
  const [state, setState] = useState({ node: "", operator: "" });
 // const [editState, setEditState] = useState({ id: "", name: "", age: "" });


 const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A0';
    case 'operator':
      return '#3B7288' 
    default:
      return '#1A0458';
  }
};

const colorN = (node) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A0';
    case 'operator':
      return '#3B7288' 
    default:
      return '#1A0458';
  }
};


  const reactFlowStyle = {
    color : colorN,
    width: '100%',
    height: 200,
    opacity:"100%",
    
  };

  const addNode = (newNode) => {
    // Add the new node to the existing nodes
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const deleteNode = (id) => {
    // Filter out the node with the specified ID
    const filteredNodes = nodes.filter((node) => node.id !== id);
    setNodes(filteredNodes);
  };

  const clearCanvas = () => {
    setEdges([]);
    setNodes([]);
  }
 
  const updateNodeData = (newValue) => {
    // Update the data of a specific node or all nodes as needed
    const updatedNodes = nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        label: `${node.id} - ${newValue}`,
      },
    }));

    setNodes(updatedNodes);
  };
  // const onEdit = () => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === editState.id) {
  //         node.data = {
  //           ...node.data,
  //           label: `${node.id} - ${editState.name} (${editState.age})`
  //         };
  //       }

  //       return node;
  //     })
  //   );
  // };

  const onAdd = () => {
    const id = getNodeId();
    const newNode = {
      id,
      data: { label: `${id} - ${state.name} (${state.age})` },
      position: {
        x: 0,
        y: 0 + (nodes.length + 1) * 20
      }
    };
    setNodes((nds) => nds.concat(newNode));
  };

const onNodesChange = useCallback(
  (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  [setNodes]
);

const onEdgesChange = useCallback(
  (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  [setEdges]
);

const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

const onNodesDelete = useCallback(
  (deleted) => {
    setEdges(
      deleted.reduce((acc, node) => {
        const incomers = getIncomers(node, nodes, edges);
        const outgoers = getOutgoers(node, nodes, edges);
        const connectedEdges = getConnectedEdges([node], edges);

        const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));

        const createdEdges = incomers.flatMap(({ id: source }) =>
          outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
        );

        return [...remainingEdges, ...createdEdges];
      }, edges)
    );
    console.log("deleted");
  },
  [nodes, edges]
);

const onDragOver = useCallback((event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}, []);

const onDrop = useCallback(
  (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');

    if (typeof type === 'undefined' || !type) {
      return;
    }
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });   
    
    const newNode = {
      id: "1",
      //type: 'Node',
      position,
      data: { label: "Node" ,  },
    }
    setNodes((nds) => nds.concat(newNode))
  },
  [reactFlowInstance]
);


  return (
    // <div>
    //   Name:{" "}
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setState((prev) => ({ ...prev, name: e.target.value }));
    //     }}
    //   />
    //   Age:{" "}
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setState((prev) => ({ ...prev, age: e.target.value }));
    //     }}
    //   />
    //   <button onClick={onAdd}>add node</button>
    //   <br />
    //   Id:{" "}
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setEditState((prev) => ({ ...prev, id: e.target.value }));
    //     }}
    //   />
    //   Name:{" "}
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setEditState((prev) => ({ ...prev, name: e.target.value }));
    //     }}
    //   />
    //   Age:{" "}
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setEditState((prev) => ({ ...prev, age: e.target.value }));
    //     }}
    //   />
    //   <button onClick={onEdit}>Edit node</button>
    <div className="dndflow  bg-gradient-to-r from-bluey  via-cyan to-blue-800 ...">
      <ReactFlowProvider >
        <div className="reactflow-wrapper border-solid border-b-2 border-r-2 pattern-boxes pattern-gray-500 
  pattern-size-4 pattern-opacity-80"  ref={reactFlowWrapper} style={{ height: 800, width: 1700 , }}>
          <ReactFlow
            style={reactFlowStyle}
            nodes={nodes}
            edges={edges}
          //  nodeTypes = {nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodesDelete={onNodesDelete}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <MiniMap nodeColor={nodeColor} />
          </ReactFlow>
        </div>
        <BasicExample/>
        <MySideNav addNode={addNode}  deleteNode={deleteNode} nodes={nodes} clearCanvas={clearCanvas}/>
       
      </ReactFlowProvider>
    </div>
      
    // {/* </div> */}
  );
};

export default () => (
  <ReactFlowProvider>
    <FlowExample />
  </ReactFlowProvider>
);


