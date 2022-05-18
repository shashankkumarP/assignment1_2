import React from"react";
import "./My.css"
export let Navbar=()=>{
    let style1 = {display:"flex",justifyContent:"space-evenly"}
    return (
        <div style={{display:"flex",justifyContent:"space-around",border:"1px solid",backgroundColor:"black",color:"white",marginTop:"10px"}}>
           <h3 className="Name">LOGOBAKERY</h3>
           < div id='middle'>
             <p>Services</p>
             <p>Products</p>
             <p>About</p>
           </div>
           <button style={{height:"30px",width:"80px",borderRadius:"15px",marginTop:"7px",marginBottom:"5px",color:"white",backgroundColor:"skyblue"}}>Content</button>

        </div>
    )
}