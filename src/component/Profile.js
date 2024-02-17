import { useState } from "react";

const Profile =(p)=>{
    const [count, setCount]= useState(0);
    return (
        <div>
            <h1>This is a Profile Page {p.name}</h1>
            <h2>{count}</h2>
            <button onClick={
                ()=>{
                    setCount(count+1)
                }
            }>Count</button>
        </div>
    )};

export default Profile;