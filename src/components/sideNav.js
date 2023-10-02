import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, {  useCallback , useState , useEffect } from 'react';
import "../index.css"
import "highlight.js/styles/github.css";
import { Highlighter } from "rc-highlight";
//import hljs from "highlight.js";
import Highlight from 'react-highlight'
import { Background } from 'reactflow';
import './tokyo-night-dark.css'

const onDragStart = (event, nodeType ) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
}



let valArr =[];
let res = 0;

let id = -1;
const getNodeId = () => {return `${id++}`};

let id1 = -1;
const getNodeId1 = () => {return `${id1++}`};



function MySideNav({addNode , deleteNode , selectedNode , clearCanvas , nodes}){

    const [label, setLabel] = useState('');
    const [input , setInput] = useState('')
    const [selectedOperator, setSelectedOperator] = useState('+');
    const [selectedNodeType, setSelectedNodeType] = useState('input'); 
    const [inputNodeContents, setInputNodeContents] = useState({});
    const [inputValues, setInputValues] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');



    const generateAndDisplayCppCode = () => {
        
const displayGeneratedCode = `
   
#include<iostream>
#include<vector>
    
using namespace std;
    
int main() {

vector<int> valArr; 
char selectedOperator = '${selectedOperator}';

${valArr.map((value) => `valArr.push_back(${value});`).join('\n')}
    

   cout << "Input Values: ";
   for (int i = 0; i < valArr.size(); i++) {
      cout << valArr[i];
      if (i < valArr.size() - 1) {
          cout << ", ";
      }
   }
   cout << endl;
 
   cout << "Operator Selected: " << selectedOperator << endl;

   int result = 0;
    
   if (selectedOperator == '+') {
    for (int i = 0; i < valArr.size(); i++) {
                result += valArr[i];
            }
    } else if (selectedOperator == '-') {
   if (!valArr.empty()) {
            result = valArr[0];
            for (int i = 1; i < valArr.size(); i++) {
               result -= valArr[i];
            }
        }
   } else if (selectedOperator == '*') {
      result = 1;
      for (int i = 0; i < valArr.size(); i++) {
            result *= valArr[i];
      }
   } else if (selectedOperator == '/') {
      if (!valArr.empty()) {
            result = valArr[0];
            for (int i = 1; i < valArr.size(); i++) {
               if (valArr[i] != 0) {
                  result /= valArr[i];
               } else {
                  cout << "Division by zero detected." << endl;
                  return 1; 
               }
            }
      }
   } else {
      cout << "Invalid operator selected." << endl;
      return 1;
   }
    
   cout << "Output Value: " << result << endl;
    
   return 0;
}
`;
   setGeneratedCode(displayGeneratedCode)
    

      console.log('Generated C++ Code:', displayGeneratedCode);
    };
    const outputContent = () => {

      let n = valArr.length;
      console.log(n);
      if(n === 0)
      {
         return 0;
      }
      var nums = valArr.map(function(ele) {
         return parseInt(ele); }
         );
      
      
         if(selectedOperator === "+")
         {
            res = nums.reduce((accumulator, currentValue) => currentValue + accumulator);
            console.log(nums);
            return res;
         } else if( selectedOperator === "-")
         {
            res = nums.reduce((accumulator, currentValue) => accumulator - currentValue);
            return res;

         } else if( selectedOperator === "*")
         {
            res = nums.reduce((accumulator, currentValue) => currentValue * accumulator);
            return res;

         }else if( selectedOperator === "/")
         {
            res = nums.reduce((accumulator, currentValue) => accumulator/currentValue);
            console.log(res);
            return res; 
         }
      
   }

   // function Index() {
   //    useEffect(() => {
   //      hljs.highlightAll();
   //    }, []);
   //  }

    useEffect(() => {
      const inputNode1 = document.getElementById('inputnode-1');
      const dragBtn = document.getElementById('dragBtn');
      const submitBtn = document.getElementById("submitBtn");
      const nodeSpec = document.getElementById('nodeSpec');
      const cppCode = document.getElementById('run');
      const code = document.getElementById('code');


      
      cppCode.addEventListener("click" , generateAndDisplayCppCode)

      const submitHandler = () => {
         if(submitBtn)
         {
            nodeSpec.innerHTML = 
                             `<div class ="bg-gradient-l from-bluey to-green-800">
                              <div class="text-base m-1 text-gray-300  typewriter">Input Value : ${valArr.join(", ")}</div>
                              <div class="text-base m-1 text-gray-300  typewriter">Operator Selected : ${selectedOperator}</div>
                              <div class="text-base m-1 text-gray-300  typewriter ">OutputNode Value : ${outputContent()}: </div>
                              </div>`
                   console.log(selectedOperator)           
         }else{
            nodeSpec.innerHTML = "Nothing to display";
         }

      }
      if(outputContent !== null || outputContent !== undefined)
      {
         submitBtn.addEventListener("click" , submitHandler);
      }
      
      const clickHandler = () => {
        if (inputNode1 && inputNode1.value !== '') {
          valArr.push(inputNode1.value);
          console.log(valArr);
        }
      };
  
      if (dragBtn) {
        dragBtn.removeEventListener('click', clickHandler);
        dragBtn.addEventListener('click', clickHandler);
      }

      return () => {
        if (dragBtn) {
          dragBtn.removeEventListener('click', clickHandler);
        }
      };
    }, [selectedOperator, outputContent]);

    // const handleLabelChange = (event, id) => {
    // const { value } = event.target.value;
    // // Update the inputValues state with the new value for the specified ID
    // setInputValues((prevInputValues) => ({
    //     ...prevInputValues,
    //     [id]: value,
    // }));
    // };

    // const handleLabelChange = (event) => {
    //     const val  = event.target.value;
    //     const nodeId = nodes.id; // Get the node ID from data-id
    //     console.log(val , nodeId);
    //     setInputValues((prevInputValues) => ({
    //       ...prevInputValues,
    //       [nodeId]: val, // Use nodeId as the key in the inputValues object
    //     }));
    //   };

    const handleLabelChange = (event) => {
      setLabel(event.target.value);
    };

   //  const handleLabelChange2 = (event) => {
   //      setInputValues(event.target.value);
   //  };

   //  const handleInputChange = (id, event) => {
   //      setInputNodeContents((prevContents) => {
   //        const updatedContents = {
   //          ...prevContents,
   //          [id]: event.target.value,
   //        };
   //        console.log(`Input Node ${id} value: ${updatedContents[id]}`);
   //        return updatedContents;
   //      });
   //    };
     
    
    


    const handleOperatorChange = (event) => {
        setSelectedOperator(event.target.value);
        console.log(selectedOperator);
      };

      const handleClearCanvasClick = () => {
        clearCanvas();
        valArr =[];
        id=-1;
        console.log('Input Values:', inputValues);
      };

      const handleNodeTypeChange = (event) => {
        setSelectedNodeType(event.target.value);
      };
      const handleDeleteNodeClick = (id) => {
        deleteNode(id);
      };

      const handleAddNodeClick = () => {
        console.log(selectedNodeType, selectedOperator)
        if(selectedNodeType === "input"  )
        {      
            const newNode = {
                id: getNodeId(),
                type: selectedNodeType,
                data: {
                  label: label, id:getNodeId1()
                },
                position: { x: 100, y: 100 },
              };
              addNode(newNode);
              setLabel('');
              
              console.log(id)

        }else if(selectedNodeType === "operator")
        {
            const newNode = {
                id: getNodeId(),
                type: selectedNodeType,
                data: {
                  label: selectedOperator,
                },
                position: { x: 150, y: 100 },
              };
              addNode(newNode);
        
              setLabel('');
        } else{
            const newNode = {
                id: getNodeId(),
                type: selectedNodeType,
                data: {
                  label:outputContent(),
                },
                position: { x: 200, y: 100 },
              };
              addNode(newNode);
    
              setLabel('');
            }
      };
    
   

    return (
<div >        
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex  items-center p-2 mt-2 ml-3 text-sm text-gray-100 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   {/* <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg> */}
</button>

<aside id="default-sidebar" class="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  border-r-gray-300 border-gray-300" aria-label="Sidebar" >
   <div class="h-full px-3 py-4 overflow-y-auto bg-bluey dark:bg-gray-800 text-white border-r-2 border-r-gray-300 ">
      <ul class="space-y-2 font-medium text-white">
         <li >
            <a href="#" class="flex items-center ml-1 mr-0 p-2 text-white rounded-lg dark:text-white hover:bg-blue-800 hover:text-gray-900 dark:hover:bg-gray-700 group">
               <span><label for="countries" class="block ml-0 mr-3 mb-2 text-md font-medium text-white dark:text-white">Select node type</label></span>
               <div class ="ml-6 mr-0 w-2/4">
               <select id="nodeType" value={selectedNodeType} onChange={handleNodeTypeChange} class="placeholder-opacity-50  placeholder-gray-500 bg-gray-800 border border-gray-300 text-gray-100 text-sm text-left rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " >
               <option value="input" selected class="placeholder-gray-500" >Input</option>
               <option value="output" >Output</option>
               <option value="operator">Operator</option>
               </select>
               </div>
               
            </a>
         </li>
         <li >
            <a href="#" class="flex items-center ml-0 text-white rounded-lg dark:text-white hover:bg-blue-800 dark:hover:bg-gray-700 group">

               <span disabled={selectedNodeType !== "input"} id="node_value" class=" m-0 flex-1 ml-3 whitespace-nowrap">Input Node Value</span>
               
              <div class =" ml-6 mr-4 w-1/3">
              <input type="text" id="inputnode-1" input-id ="1" disabled={selectedNodeType !== "input"} value={label}  onChange={handleLabelChange}
 class="placeholder-gray-500 m-2 bg-gray-800 border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input" required/>
              </div>
            </a>
         </li>
 
         {/* <li>
            <a href="#" class="flex items-center ml-0  text-white rounded-lg dark:text-white hover:bg-blue-800 dark:hover:bg-gray-700 group">
               <span class="text-left text-md m-0 flex-1 ml-3 whitespace-nowrap">Input Node-2</span>
               
              <div class = "ml-6 mr-4 w-1/3">
              <input type="text" id = "inputnode-2" input-id="2"  value={inputValues} onChange={handleLabelChange2}  class="placeholder-white m-2 bg-gray-800 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input" required/>
              </div>
            </a>
         </li> */}
         <li >
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-800 dark:hover:bg-gray-700 group">
               <span><label for="countries" class="mr-3 ml-1 block mb-2 text-md font-medium text-white dark:text-white">Select a operator</label></span>
               <div class = "ml-6 mr-0 w-1/3 ">
               <select id="countries" disabled={selectedNodeType !== "operator"}   value={selectedOperator} onChange={handleOperatorChange} class="placeholder-gray-500 bg-gray-800 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="+" selected>+</option>
               <option value="-">-</option>
               <option value="*">x</option>
               <option value="/">/</option>
               </select>
               </div>
            </a>
         </li>
         <li class = "h-full  rounded-md justify-center " eventKey = "Drag" onDragStart={(event) => onDragStart(event, 'Drag')} draggable>
            <a href="#" class="text-md flex items-center justify-center  p-2 text-gray-100 rounded-lg  hover:bg-gradient-to-r hover:from-red-300 hover:via-pink-300 hover:to-indigo-500 dark:text-white group">
               <button id = "dragBtn" type="button" onClick={handleAddNodeClick}  eventKey = "Drag" onDragStart={(event) => onDragStart(event, 'Drag')} draggable  class="transition ease-in-out delay-60 hover:-translate-x-1 hover:scale-105 hover:bg-blue-900 duration-100 text-lg w-2/4 p-2 h-full bg-blue-900 rounded-lg ">
                Drag
               </button>
            </a>
         </li>

         <li class = "h-full  rounded-md justify-center " eventKey = "Drag" onDragStart={(event) => onDragStart(event, 'Drag')} draggable>
            <a href="#" class="text-md flex items-center justify-center  p-2 text-gray-100 rounded-lg  hover:bg-gradient-to-r hover:from-red-300 hover:via-pink-300 hover:to-indigo-500 dark:text-white group">
               <button type="button" onClick={handleClearCanvasClick}  eventKey = "Drag" onDragStart={(event) => onDragStart(event, 'Drag')} draggable  class="transition ease-in-out delay-60 hover:-translate-x-1 hover:scale-105 hover:bg-blue-900 duration-100 text-lg w-2/4 p-2 h-full bg-blue-900 rounded-lg ">
                Clear All
               </button>
            </a>
         </li>   
         <li>
            <div class="mt-8 bg-gradient-r  from-black to-bluey border-t border-b border-blue-700 text-white px-4 py-3" role="alert">
               <p class="font-bold mb-2">To Delete a particular node</p>
               <p class="text-sm">Click <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-900 bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 p-2 m-2 dark:border-gray-500">Backspace</kbd> </p>
            </div>
         </li>
         <li>
            
         </li>
      </ul>
   </div>
   
</aside>

<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
      <div class="grid grid-cols-3 gap-4 mb-4 ">
         <div class="flex border-gray-500 border-2 hover:border-blue-300 items-center justify-center h-24 rounded bg-gray-300 dark:bg-gray-800  bg-gradient-to-r from-blue-900 to-green-900 hover:bg-gradient-to-r hover:from-blue-800 hover:to-green-800">
            <p id='nodeSpec' class=" font-semibold text-base text-gray-100 w-3/4 justify-center flex  dark:text-gray-500">
              Node Specifications
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-300 dark:bg-gray-800 hover:border-blue-300 hover:border-2">
               <button type="button" id="submitBtn" class=" text-2xl w-full h-full bg-gradient-to-r from-gray-900 to-bluey text-white hover:from-bluey hover:to-cyan ...">
                Submit
               </button>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-300 dark:bg-gray-800  hover:border-blue-300 hover:border-2 ">
               <button type="button" id ='run' class="text-2xl w-full h-full bg-gradient-to-r from-gray-900 to-bluey text-white hover:from-bluey hover:to-cyan ...">
                Run
               </button>
         </div>
      </div>
      <div class="flex items-left justify-start h-96 mb-4 rounded bg-bluey dark:bg-gray-800">
         <div id = "code" class="text-lg text-yellow-300 dark:text-gray-500 w-full  ">
         <div class ="inline-block overflow-auto h-96 w-full  bg-bluey text-yellow-200">

         <Highlight  className='cpp p-8 h-full' >
            {generatedCode}
         </Highlight>
         </div>
         </div>
  
      </div>
   </div>
</div>
</div>

    )
}

export default MySideNav;












    // return <SideNav  className = "bg-bluey"
    // onSelect={(selected) => console.log(`Selected: ${selected}`)} style={{marginTop :"6%" } }
    // >
    //     <SideNav.Toggle  className = "bg-bluey" />
    //     <SideNav.Nav defaultSelected = "Input"  className = "bg-bluey" >
    //         <NavItem eventKey = "Input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
    //             <NavIcon style = {{fontSize:"1.5rem"}}><i className='fa fa-database'/></NavIcon>
    //             <NavText style = {{fontSize:"1.5rem"}} >Input Node</NavText>
    //         </NavItem>
    //         <NavItem eventKey = "Operator" onDragStart={(event) => onDragStart(event, 'operator')} draggable>
    //                  <NavIcon style = {{fontSize:"1.5rem"}}><i className='fa fa-plus-minus'/></NavIcon>
    //                  <NavText style = {{fontSize:"1.5rem"}} >Operator Node</NavText>
    //         </NavItem>
    //         <NavItem eventKey = "Output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
    //             <NavIcon style = {{fontSize:"1.5rem"}}><i className='fa fa-code'/></NavIcon>
    //             <NavText style = {{fontSize:"1.5rem"}} >Output Node</NavText>
    //         </NavItem>
        
    //            {/* <NavItem eventKey = "Divide" onDragStart={(event) => onDragStart(event, 'output')} draggable>
    //                  <NavIcon style = {{fontSize:"1.5rem"}}><i className='fa fa-minus'/></NavIcon>
    //                  <NavText style = {{fontSize:"1.5rem"}} >Subtraction</NavText>
    //            </NavItem> */}
    //     </SideNav.Nav>
    // </SideNav>





       
// #include<iostream>
// #include<vector>
    
// using namespace std;
    
// int main() {

// vector<int> valArr; 
// char selectedOperator = '${selectedOperator}';

// ${valArr.map((value) => `valArr.push_back(${value});`).join('\n')}
    

//    cout << "Input Values: ";
//    for (int i = 0; i < valArr.size(); i++) {
//       cout << valArr[i];
//       if (i < valArr.size() - 1) {
//           cout << ", ";
//       }
//    }
//    cout << endl;
 
//    cout << "Operator Selected: " << selectedOperator << endl;

//    int result = 0;
    
//    if (selectedOperator == '+') {
//     for (int i = 0; i < valArr.size(); i++) {
//                 result += valArr[i];
//             }
//     } else if (selectedOperator == '-') {
//    if (!valArr.empty()) {
//             result = valArr[0];
//             for (int i = 1; i < valArr.size(); i++) {
//                result -= valArr[i];
//             }
//         }
//    } else if (selectedOperator == '*') {
//       result = 1; // Initialize to 1 for multiplication
//       for (int i = 0; i < valArr.size(); i++) {
//             result *= valArr[i];
//       }
//    } else if (selectedOperator == '/') {
//       if (!valArr.empty()) {
//             result = valArr[0];
//             for (int i = 1; i < valArr.size(); i++) {
//                if (valArr[i] != 0) {
//                   result /= valArr[i];
//                } else {
//                   cout << "Division by zero detected." << endl;
//                   return 1; 
//                }
//             }
//       }
//    } else {
//       cout << "Invalid operator selected." << endl;
//       return 1;
//    }
    
//    cout << "Output Value: " << result << endl;
    
//    return 0;
// }