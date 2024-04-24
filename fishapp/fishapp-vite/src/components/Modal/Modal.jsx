import React from "react";
import { useEffect } from "react";

const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "50px",
    zIndex: "1000",
    border: "1px solid #000",
    borderRadius: "10px",
  };
  
  
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "15px",
  };
  
  const Modal = ({ children, onClose }) => {
    useEffect(()=>{
      const timeoutID=setInterval(()=>{
        console.log("Fish list changed");
      },1000);
      return()=>{
        clearTimeout(timeoutID);
      };
    },[]);
    return (
      <div className="modal" style={modalStyle}>
        {children}
        <button style={closeButtonStyle} onClick={onClose}>
          X
        </button>
      </div>
    );
  };
  
  export default Modal;
  