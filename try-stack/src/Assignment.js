import { CheckBox } from "@material-ui/icons";
import React from "react";


const handleFirst = ()=> {
    var res=document.getElementsByClassName("two").item;
    console.warn(res);

}

function Assignment() {
  return (
    <>
        <CheckBox checked="false" onClicked={handleFirst}>one</CheckBox>
        <CheckBox>tow</CheckBox>
      <div className="one" hidden>one</div>
      <div className="two" hidden>Two</div>
    </>
  );
}

export default Assignment;
