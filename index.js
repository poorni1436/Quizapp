import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);

function App()
{
  return(
    <div className='root'>
      <h2>Root Component</h2>
      <Header/>
      <Content/>
      <Footer/>

    </div>
  );
}

function Header()
{
  return(<div className='head'>
    <h3>Header Component</h3>
  </div>
  );
}

function Content()
{
  function getResult(event)
  {
    let ans1=event.target.q1.value;
    let ans2=event.target.q2.value;
    let ans3=event.target.q3.value;
    let ans4=event.target.q4.value;
    let marks=0;
    if(ans1==='A. OOPL')
    {
      marks++;
    }
    if(ans2 === 'B. PL')
    {
      marks++;
    }
    if(ans3 === 'A. High Level')
    {
      marks++;
    }
    if(ans4 === 'A. WORA')
    {
      marks++;
    }
    alert('Total marks='+ marks);
  }

  return(
    <div className='con'>
     <form onSubmit={getResult}>
     <h1>Answer these Questions</h1>
      <Ques 
      ques="Q. What is java?"
      op1="A. OOPL"
      op2="B. Functional"
      op3="C. Scripting"
      name="q1"
      />
      <Ques 
      ques="Q. What is sql?"
      op1="A. dbms"
      op2="B. PL"
      op3="C. Scripting"
      name="q2"
      />
       <Ques 
      ques="Q. What is python?"
      op1="A. High Level"
      op2="B. Structured"
      op3="C. All of the above"
      name="q3"
      />
      <Ques 
      ques="Q. Java obey______Priciple ?"
      op1="A. WORA"
      op2="B. ClassFile"
      op3="C. SourceCode"
      name="q4"
      />
      <input type="submit" value="getResult" />
     </form>
    </div>
  );
  }
  function Footer()
{
  return(<div className="foot">
      <h3>
    Footer Component
  </h3>
  </div>

  );
}
function Ques(props)
{
  return(
    <div >
     <h2>{props.ques}</h2>
    <input type='radio' name={props.name} value={props.op1}></input><label>{props.op1}</label>
    <input type='radio' name={props.name} value={props.op2}></input><label>{props.op2}</label>
    <input type='radio' name={props.name} value={props.op2}></input><label>{props.op3}</label> 
    </div>
  
  );
}