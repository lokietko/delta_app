import React, { Component } from 'react';
import "./kontakt.css";
 class Kontakt extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     } 
     
     
handleScroll=()=>{
     
    window.addEventListener("scroll",()=>{
    const el=document.querySelector(".tringlesSidesRight");
    const ele=document.querySelector(".tringlesSidesLeft");
    //const elem=document.querySelector(".tringlesSidesBase");
        let set=window.pageYOffset/5;
        console.log(set)
       

        el.style.transform = `rotate(45deg) translateX(${set}px)`;  
        ele.style.transform = `rotate(145deg) translateX(${set}px)`;
        //elem.style.left= `${set}px`;

    })

    

}





     render() { 
         return ( <footer>
         
         <div className="tringlesSidesRight"></div>
          <div className="tringlesSidesLeft"></div>
          <div className="tringlesSidesBase"></div>
         {this.handleScroll()}
         
         
         
         
         </footer> );
     }
    }
  
 export default Kontakt;