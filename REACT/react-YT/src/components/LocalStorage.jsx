import React from "react";

const LocalStorage = () => {

  const user1={
    username:"abx",
    age:22,
    city:"bhopal"

  }

  // localStorage.setItem('user','sarthak')
   const user = localStorage.getItem('user');
  console.log(user);
  localStorage.setItem('user1',JSON.stringify(user1))
  const back=JSON.parse(localStorage.getItem('user1'))
  console.log(back);
  
  

  return <div>LocalStorage</div>;
};

export default LocalStorage;
