import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import User from "./components/User";
import './css/style.css'

function App() {
  const [user, setUser] = useState()
  const inputRef=useRef()

  //componentDidMount
  useEffect(() => {
    fetchUserProfile("Wais000");
  }, []);
  const fetchUserProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const result = await response.json();
    setUser(result)

 
  }
  const searchNewUser =(e) =>{
    e.preventDefault()
    console.log(inputRef.current.value)
    if(inputRef.current.value.trim()!==""){
     fetchUserProfile(inputRef.current.value)
  }
inputRef.current.value=''
}

  return (
    <div className="App">
      <Header />
      <form onSubmit={searchNewUser}>
        <input type="text" name="username" ref = {inputRef} />
        <input type="submit" value="search" />
      </form>

      {user &&<User userdata={user} />}
    </div>
  );
}

export default App;
