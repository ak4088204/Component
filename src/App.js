
import './App.css';
import { useState } from 'react';

function App() {

const [arr,setarr]=useState([])

const [value, setvalue]=useState({name:"", comment:""})

function changehandle(e){
  setvalue({...value,[e.target.name]:e.target.value})

}

let {name,comment}=value;

function handle(){
  setarr([...arr,{name,comment}])
  
}

  return (
    <div className="App">
      <ul><li>Comments about course</li></ul>
      <div className="data">
        <h2>Share your experience</h2>
        <h4>Name:</h4>
        <input type ="text" name="name" autoComplete="off" value={value.name} onChange={changehandle} ></input>
        <h4>Comments:</h4>
        <textarea name="comment" rows="4" cols="50" autoComplete="off" value={value.comment} onChange={changehandle} ></textarea><br></br>
        <button onClick={handle}>Post</button><br></br>
      </div>
    
      <div className="output">
        <table>
        {
          arr.map(
            (data, ind)=>{
                return(
                  <div className="comments" key={ind}>
                    <b>{data.name}</b>
                    <br></br>
                    {data.comment}<br></br><br></br>
                  </div>
                )
            }
          )
        }
        </table>
      </div>
      <div className='button'>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comments about course</li>
      </div>
    </div>
  );
}

export default App;
