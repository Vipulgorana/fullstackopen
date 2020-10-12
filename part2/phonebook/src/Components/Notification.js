import React from 'react';

const Notification = ({error}) =>{
  const {message,bgcolor} = error !== null ? error : {message:null,bgcolor:null};
  const notificationStyle = {backgroundColor:`${bgcolor}`}
  const displayMessage = error !== null ? (<div className="notification" style={notificationStyle}><h2>{message}</h2></div>) : null;
  return(
    <>{displayMessage}</>
  )
}


export default Notification;