import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";

import Posts from './components/posts'
import Post from './components/post'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
    </Router>
  );
}

export default App;
