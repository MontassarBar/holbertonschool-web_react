import logo from './logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils'

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
      <img src={logo} alt='logo'/>
      <h1>School dashboard</h1>
    </header>
    <hr></hr>
    <body className='App-body'>
      <p>Login to access the full dashboard</p>
      <label for='Email'>Email:  </label>
      <input type="text" id="email" name="email" style={{ marginLeft: '.5rem'}}></input>
      <label for='password' style={{ marginLeft: '.5rem' }}>Password:  </label>
      <input type="text" id="password" name="password" style={{ marginLeft: '.5rem' }}></input>
      <button style={{backgroundColor: 'white', borderRadius: '4px', padding: '2px 8px 2px 8px',border: '1px solid grey', marginLeft: '.9rem'}}>OK</button>
    </body>
    <hr></hr>
    <footer className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
    </div>
  );
}

export default App;