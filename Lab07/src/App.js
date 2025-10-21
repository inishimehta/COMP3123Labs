import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';
import Hello from './components/Hello';
import Student from './components/Student';
import Employee from './components/Employee';

function App() {
  let name  = "Nishi Mehta"
  let myStyle = {color: 'blue', backgroundColor:'yellow'}
  return (
    <Fragment>
    <h1 style={{color:'red', backgroundColor:'yellow'}}>Hello ReactJS</h1>
    <h2 style={myStyle}>{name}</h2>
    <Hello />
    <Student sid="1" fnm="Liam" lnm="Ridley" city="Mumbai"/>
    <Employee />
    </Fragment>
  );
}

export default App;
