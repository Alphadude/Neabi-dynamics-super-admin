import React from "react";
import SideBar from "./SideBar";
import Stat from "./Stat";
import TopBar from "./TopBar";

function Layout({ children, showStat }) {

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
