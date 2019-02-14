import React, { Component } from 'react';
import "./kontakt.css";
 class Kontakt extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     } 
     
handleScroll=()=>{
const tr=document.getElementsByClassName("tringlesSides");
const win=window;
console.log(tr,win);
win.addEventListener("scroll",function(){
  //  let top=win.srollTop();
    console.log(win.scrollBy());
})

}





     render() { 
         return ( <div>
         
         <div className="tringlesSides" data-speed="2"></div>
         
         {this.handleScroll()}
         
         
         
         
         </div> );
     }
    }
  
 export default Kontakt;