// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Table
// import React, { Component } from 'react';  
// import ReactTable from 'react-table-6';  
// import 'react-table-6/react-table.css';  
  
// class App extends Component {  
//   render() {  
//      const data = [{  
//         name: 'Ayaan',  
//         age: 26  
//         },{  
//          name: 'Ahana',  
//          age: 22  
//          },{  
//          name: 'Peter',  
//          age: 40      
//          },{  
//          name: 'Virat',  
//          age: 30  
//          },{  
//          name: 'Rohit',  
//          age: 32  
//          },{  
//          name: 'Dhoni',  
//          age: 37  
//          }]  
//      const columns = [{  
//        Header: 'Name',  
//        accessor: 'name'  
//        },{  
//        Header: 'Age',  
//        accessor: 'age'  
//        }]  
//     return (  
//           <div>  
//               <ReactTable  
//                   data={data}  
//                   columns={columns}  
//                   defaultPageSize = {2}  
//                   pageSizeOptions = {[2,4, 6]}  
//               />  
//           </div>        
//     )  
//   }  
// }  
// export default App;

// Router
import React from 'react';

class App extends React.Component {  
  render() {  
    return (  
      <div>  
        <h1>Home</h1>  
      </div>  
    )  
  }  
}  
export default App;