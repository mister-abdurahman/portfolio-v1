import React, { Component, useState } from "react";
import NavDots from "./NavDots";
import SocialLinks from "./SocialLinks";

function AppWrap(Component: any, idName: string) {
  function HOC() {
    const [activePage, setActivePage] = useState("Hero");
    return (
      <div id={idName} className="relative">
        <NavDots setActivePage={setActivePage} idName={idName} />
        <SocialLinks />
        <Component />
      </div>
    );
  }
  return HOC;
}
export default AppWrap;
