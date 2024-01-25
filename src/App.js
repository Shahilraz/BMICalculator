import "./App.css";
import React,{useState} from "react";

function App() {
const [weigth,setWeight] = useState("");
const [height,setHeight] = useState("");
const [bmi,setBmi] = useState('');
const [massage,setMassage] = useState('');

let calBmi=(e)=>{
  e.preventDefault();
  
  if(weigth==0 || height==0)
  {
    alert('please enter a valid weight and height')
  }
  else{
    let bmi = (weigth/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi<25){
      setMassage('you are underweight')
    }
    else if(bmi>=25 && bmi < 30){
      setMassage('you are a healthy weight')
    }
    else {
      setMassage("you are overweight")
    }
  }
} 


let reload = () =>{
  window.location.reload()
}

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calBmi}>
          <div>
            <label>weigth (lbs)</label>
            <input type="text" placeholder="enter Weight value" 
            value={weigth}
            onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input type="text" placeholder="enter Height value" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="reload">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BIM is : {bmi}</h3>
            <p>{massage}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
