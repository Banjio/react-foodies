import logo from './logo.svg';
import './App.css';
import './static/landingPage.css'

const products = 
[
  {'name': 'Frosta Bordelais',
    metaInfo: {},
    price: 4.19,
    priceUnit: "EUR",
    nutriScore: "B"
   }, 
   {'name': 'Frosta Curry',
     metaInfo: {},
     price: 1.99,
     priceUnit: "EUR",
     nutriScore: "D"
   }
  ]

function SearchArea(){
  return(
  <div className="lp-searchArea-container">
    <button className="lp-searchArea-Btn" form="lp-searchArea-searchInput"><i className="fa fa-search"></i></button>
    <input id="lp-searchArea-searchInput" type="text"></input>
  </div>
  )
}

function SearchResult(){
  const dictItems = products.map(product =>
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.nutriScore}</td>
      </tr>
    );
  return(
    <div className="lp-searchResult-container">
      <h1><center>Search Result</center></h1>
      <div className="flexBreak"></div>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Nutri Score</th>
        </tr>
        {dictItems}
        </tbody>
      </table>
    </div>
  )
}

function LandingPage() {
  return(
    <div className="landingPage-container">
      <SearchArea/>
      <div className="flexBreak"></div>
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
