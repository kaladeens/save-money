import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';

function App() {
  // const style = {
  //   textDecoration: 'none',
  //   color: 'inherit'
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path = "/add" element = {<AddingPage />}/>
          <Route path = "/view" element = {<ViewPage />}/> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
