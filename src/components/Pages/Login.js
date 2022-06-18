
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  const [formData, setformData] = useState({}); 
  const [errorMsg, setErrorMsg] = useState({});
  const [departments, setDepartments] = useState([]);

  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
    delete errorMsg[event.target.name];
  };

const handleCheck = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.checked });
    delete errorMsg[event.target.name];
  };

const cancelButtonn = () => {
  console.log("Cancel Btton")
}


const onSubmit = (event) => {
  event.preventDefault();
  console.log("Submit pressed");
  axios({
    method: "post",
    url: "https://api2.naac.pro/api/v1/token",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      if( response.data.access ){
        localStorage.setItem("accessToken", 'Bearer ' + response.data.access);
        localStorage.setItem("refresToken", 'Bearer ' + response.data.refresh);
        navigate('/dashboard')
        } 
    })
    .catch(function (error) {
      let msgData = error.response.data.data
      let errorDataObj = {}
      for (var key in msgData) {
        if (msgData.hasOwnProperty(key)) {
            errorDataObj[key] =  msgData[key]
        }
    }
    setErrorMsg(errorDataObj);
    });
}


const getHtmlForm = (field) => {
        
  if(field.type === "text") {
    return ( <div className='mb-3'> 
            <label htmlFor={field.name} className="form-label">{field.label}</label>
             <input type='text' className='form-control' 
             id= {field.name} name={field.name} 
             onChange={handleChange}  value={formData[`${field.name}`]}
             />
              { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
            </div>)
          
      }  else if (field.type === "textarea") {
      return ( <div className='mb-3'> 
      <label htmlFor={field.name} className="form-label">{field.label}</label>
      <textarea className='form-control' 
      id= {field.name} name={field.name} rows={field.rows}
      onChange={handleChange}  value={formData[`${field.name}`]}
      />
        { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
     </div>) 
    } else if (field.type === "email") {
      return ( <div className='mb-3'> 
      <label htmlFor={field.name} className="form-label">{field.label}</label>
       <input type='email' className='form-control' 
      id= {field.name} name={field.name}
      onChange={handleChange}  value={formData[`${field.name}`]}
      />
        { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
     </div>) 
    } else if (field.type === "password") {
      return ( <div className='mb-3'> 
          <label htmlFor={field.name} className="form-label">{field.label}</label>
           <input type='password' className='form-control' 
           id= {field.name} name={field.name} 
           onChange={handleChange}  value={formData[`${field.name}`]}
           />
             { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
          </div>)}
    
    else if (field.type === "checkbox") {
      return ( <div className='mb-3'> 
     
       <input type='checkbox' className='form-check-input' 
      id= {field.name} name={field.name}
      onChange={handleCheck}  value={formData[`${field.name}`]}
      />
       <label htmlFor={field.name} className="form-check-label">{field.label}</label>
       { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
     </div>) 
    }
    else if (field.type === "radio") {
      return ( <div className='mb-3'> 
      
       <input type='radio' className='form-check-input' 
      id= {field.name} name={field.name}
      onChange={handleCheck}  value={formData[`${field.name}`]}
      />
      <label htmlFor={field.name} className="form-check-label">{field.label}</label>
      { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
     </div>) 
    }  else if (field.type === "select") {
      return ( <div className='mb-3'> 
      <label htmlFor={field.name} className="form-label">{field.label}</label>
      <select className="form-select" aria-label=""
      id= {field.name} name={field.name}
      onChange={handleChange}  value={formData[`${field.name}`]} defaultValue={field.name}> 
        {field.options.map((obj, index) => ( 
         <option value={obj.id} > {obj.name} </option>
        ))}
      </select>
      { errorMsg[`${field.name}`] !== "" ? <p className="text-danger"> {errorMsg[`${field.name}`]} </p> : null }
     </div>) 
    }
} 


const fieldsData = [
  {"name":"username", "type":"text", "requierd":true, "max":120, "label": "Username"},
  {"name":"password",  "type":"password", "requierd":true, "max":15, "label": "Password "},
  ]

return (
<div>
  <div className='container'>
      <h2> SignupForm </h2>
      <div className="col-sm-6">
      <form onSubmit={onSubmit}>
          {fieldsData.map((field, index) => (
          getHtmlForm(field,errorMsg)
          ) )}
     
          <button className='btn btn-primary m-2' type="submit"> Login </button>
      </form>

      </div>
  </div>
  
</div>
)
}






export default Login