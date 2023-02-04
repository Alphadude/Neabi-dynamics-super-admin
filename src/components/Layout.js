import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SideBar from "./SideBar";
import Stat from "./Stat";
import TopBar from "./TopBar";

function Layout({ children, showStat }) {
  let navigate = useNavigate()
  //this makes sure u cant access the dashboard without login


  useEffect(() => {
    axios({
      method:"get",
      url:"https://neabidynamicapi.devemmy.tech/api/v1/admin/profile",
      headers:{
        Authorization:`bearer ${localStorage.getItem("token")}`
      }
    })
    .then((data)=>{
    })
    .catch((err)=>{
      if(err){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successful',
          text:"Welcome to Neabi Dynamics concept limited",
          showConfirmButton: false,
          timer: 1500
        })
        .then(()=>{navigate("/")})
      }
    })
  }, [])
  
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
    <div className ="side">
      <SideBar />
      {/* <TopBar /> */}
    </div>
      <main className="flex">
      {showStat === true ? <Stat /> : ``}
        {children}
        </main>
    </div>
  );
}

export default Layout;
