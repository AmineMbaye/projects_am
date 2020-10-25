// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
// import './index.css';
// // import ThemeSwitcher from './ThemeSwitcher';

// ReactDOM.render( <App /> , document.getElementById('root'));

// Router
// import React from 'react';  
// import ReactDOM from 'react-dom';  
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import './index.css';  
// import App from './App';  
// import About from './About.js'  
// import Contact from './Contact.js'  
  
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <Route path="/" component={App} />  
//       <Route path="/about" component={About} />  
//       <Route path="/contact" component={Contact} />  
//     </div>  
//   </Router>  
// )  
// ReactDOM.render(routing, document.getElementById('root')); 

// Adding Navigation using Link component
// Sometimes, we want to need multiple links on a single page. When we click on any of that particular Link, it should load that page which is associated with that path without reloading the web page. To do this, we need to import <Link> component in the index.js file.

// What is < Link> component?
// import React from 'react';  
// import ReactDOM from 'react-dom';  
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';  
// import './index.css';  
// import App from './App';  
// import About from './About.js'  
// import Contact from './Contact.js'  
  
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <ul>  
//         <li>  
//           <Link to="/">Home</Link>  
//         </li>  
//         <li>  
//           <Link to="/about">About</Link>  
//         </li>  
//         <li>  
//           <Link to="/contact">Contact</Link>  
//         </li>  
//       </ul>  
//       <Route exact path="/" component={App} />  
//       <Route path="/about" component={About} />  
//       <Route path="/contact" component={Contact} />  
//     </div>  
//   </Router>  
// )  
// ReactDOM.render(routing, document.getElementById('root'));

{/* <Link> vs <NavLink>
The Link component allows navigating the different routes on the websites, whereas NavLink component
    is used to add styles to the active routes.

React Router Switch 
The <Switch> component is used to render components only when the path will be matched. Otherwise, 
    it returns to the not found component.
To understand this, first, we need to create a notfound component.
*/}
// import React from 'react';  
// import ReactDOM from 'react-dom';  
// import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'  
// import './index.css';  
// import App from './App';  
// import About from './About.js'  
// import Contact from './Contact.js'  
// import Notfound from './Notfound.js'  
  
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <ul>  
//         <li>  
//           <NavLink to="/" exact activeStyle={  
//              {color:'red'}  
//           }>Home</NavLink>  
//         </li>  
//         <li>  
//           <NavLink to="/about" exact activeStyle={  
//              {color:'green'}  
//           }>About</NavLink>  
//         </li>  
//         <li>  
//           <NavLink to="/contact" exact activeStyle={  
//              {color:'magenta'}  
//           }>Contact</NavLink>  
//         </li>  
//       </ul>  
//       <Switch>  
//          <Route exact path="/" component={App} />  
//          <Route path="/about" component={About} />  
//          <Route path="/contact" component={Contact} />  
//          <Route component={Notfound} />  
//       </Switch>  
//     </div>  
//   </Router>  
// )  
// ReactDOM.render(routing, document.getElementById('root'));

// import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';  
// import ReactDOM from 'react-dom'; 
// import React, { Suspense, lazy } from 'react';  

  
// const Home = lazy(() => import('./routes/Home'));  
// const About = lazy(() => import('./routes/About'));  
// const Contact = lazy(() => import('./routes/Contact'));  
  
// const App = () => (  
//   <Router>  
//     <Suspense fallback={<div>Loading...</div>}>  
//       <Switch>  
//         <Route exact path="/" component={Home}/>  
//         <Route path="/about" component={About}/>  
//         <Route path="/contact" component={Contact}/>  
//       </Switch>  
//     </Suspense>  
//   </Router>  
// );  
// ReactDOM.render(<App />, document.getElementById('root'));

{/*
React Router <Redirect>
A <Redirect> component is used to redirect to another route in our application to maintain the old URLs. 
    It can be placed anywhere in the route hierarchy.

Nested Routing in React
Nested routing allows you to render sub-routes in your application. It can be understood in the below example.
*/}
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import React from 'react'; import ReactDOM from 'react-dom'; 
  

import './index.css';  
import App from './App';  
import About from './About.js'  
import Contact from './Contact.js'  
import Notfound from './Notfound.js'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul>  
      <Switch>  
         <Route exact path="/" component={App} />  
         <Route path="/about" component={About} />  
         <Route path="/contact" component={Contact} />  
         <Route component={Notfound} />  
      </Switch>  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 
