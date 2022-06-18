import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../Navbar'
import Table from "../Tables"



function rankFormatter(row, actionProps) {
  return (
    < div
      style={{
        textAlign: "center",
        cursor: "pointer",
        lineHeight: "normal"
      }}>
        { actionProps.cell(row)}
    </div>
  );
}



const Users = () => {

  const [data, setData] = useState([])

  const viewData = (data)=>{
    console.log(data)
  }

  const editData = (data)=>{
    console.log(data)
  }

  const deleteData = (data)=>{
    console.log(data)
  }

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "username", text: "User Name", sort: true },
    { dataField: "email", text: "Email", sort: false },
    {
      dataField: "status", text: "Action", sort: false,
      formatter: (cell, row) => rankFormatter(row, 
        {
          cell: ( data ) => (
            <div className="d-flex ">
              <button className="btn btn-primary mx-2" onClick={()=>viewData(data)}> View </button>
              <button className="btn btn-warning mx-2" onClick={()=>editData(data)}> Edit </button>
              <button className="btn btn-danger mx-2" onClick={()=>deleteData(data)}> Delete</button>
            </div>
          )
        }
      ),
      headerAttrs: { width: 50 },
      attrs: { width: 50, class: "EditRow" }
    }
  ];
  const getUsers = () => {
    axios.get("https://api2.naac.pro/api/v1/user/list").then((response) => {
      setData(response.data.data);
    });
  };


  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
      <Navbar />

      <Table columns={columns} data={data} />

    </>
  )
}

export default Users