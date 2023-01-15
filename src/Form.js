import React, { useEffect, useState } from "react";
import "./form.css";

const Form = () => {

     const data={name:'',email:'',password:''}
     const [inputData,setInputData]=useState(data)
     const [flag,setFlag]=useState(false)

     useEffect(()=>{                // useEffect is used- to Rendar Perticular/dev Dipendancy Componant[ ] ,  useEffect wil work only when dependency coponant gets Rendar
     console.log("Registred");
    //  alert("Registred Sucessfully")          this alert will Automatically render on page load - so we will not use It
     },[flag])

     function handleData(e){
        setInputData({  ...inputData ,[e.target.name]:e.target.value});
        console.log(inputData)
     }                        //...inputData - we are using for Previous data/history of browser input,  its optional to write
                              // [e.target.name]:e.target.value -  we are using it for - Key and Value Data  Store
 
      function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email ||!inputData.password ){
            alert("Alll Fileds Are Mendatory")
        }else{
            setFlag(true)
        }
      }                        
 
 
  return (
    <>

    <pre>   {(flag)?<h2 className="ui-define" style={{color:"red",textAlign:"center"}}> Registred Sucessfully</h2>:""}   </pre>  
                     {/* Pre Tag is used-  to Show Pre Defind/hidden things , After Sucessfull Operation */}

      <form onSubmit={handleSubmit}>
        <div className="cointanier">
          <h1>Resgistration Form</h1>

          <input type="text" placeholder="enter your Name" name="name"    value={inputData.name} onChange={handleData}></input>
          <input type="text" placeholder="Enter your email id" name="email" value={inputData.email} onChange={handleData} ></input>
          <input type="text" placeholder="enter your Password"  name="password"  value={inputData.password}  onChange={handleData}></input>

          <button type="Submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
