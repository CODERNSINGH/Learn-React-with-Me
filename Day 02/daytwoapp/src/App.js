import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About This Page</h1>
      <p>Hello there.<br />i am the who is writing all of these nonsence</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <h1>Now it's Under Control </h1>

        <p>
          Yah! it's Normal css
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h2>Hello How are You me whose the bose</h2>
        <button>Submit</button>
      </header>
    </div>
  );
}

// export default App;
export default AboutPage;