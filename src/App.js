import React, { Component } from 'react';
import Header from "./header";
import './App.css';
import Navigate from './navigate';
import Entry from './Entry';
import People from './People';
import Ofert from "./Ofert";
import Prize from "./prize";
import Kontakt from './kontakt';

class App extends Component {


  render() {
    return (
<><div className="headerTringles">
    <div className="headerYellowTringle"></div>
     <div className="headerGreyTringle"></div> 
     </div> 
   
     <div className="container">
<Header></Header>
<Navigate/> 
</div>
<div className="entry"></div> 
 <div className = "container">
<Entry/>
  <People/>
</div>
<div className="secondYellowTringle"></div>
<div className='secondGreyTringle'></div>
<div className = "container">
<Ofert/>
<Prize/>
<Kontakt/>
</div>

     </>
    );
  }
}

export default App;
