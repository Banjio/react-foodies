import logo from './logo.svg';
import './App.css';
import './static/landingPage.css'

const exampleData = 
{
  'Frosta Bordelais': {
    metaInfo: {},
    price: 4.19,
    priceUnit: "EUR",
    nutriScore: "B"
   }, 
  'Frosta Curry': {
     metaInfo: {},
     price: 1.99,
     priceUnit: "EUR",
     nutriScore: "D"
   }
}

function SearchArea(){
  return(
  <div className="lp-searchArea-container">
    <button className="lp-searchArea-Btn" form="lp-searchArea-searchInput"><i className="fa fa-search"></i></button>
    <input id="lp-searchArea-searchInput" type="text"></input>
  </div>
  )
}

function SearchResult(){
  return(
    <div className="lp-searchResult-container">
      <h1>Search Result</h1>
    </div>
  )
}

function LandingPage() {
  return(
    <div className="landingPage-container">
      <SearchArea/>
      <br></br>
      <br></br>
      <SearchResult/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default LandingPage;
