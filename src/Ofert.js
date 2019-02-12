import "./ofert.css";
import React, {Component} from 'react';
class Ofert extends Component {
    constructor(props) {
        super(props);
        this.state = {
        

          }
    }
handleIconMouseOver=(e)=>{
 
    return ( 
    e.target.style.color='yellow',
    e.target.style.transform = 'scale(1.5)'
    //e.target.nextSibling.style.visibility ="visible"
  
   
    )

     }
     handleIconMouseLeave=(e)=>{
        // (e.target.nextSibling.style.visibility='hidden',
        
      return  (e.target.style.color='grey',
      e.target.style.transform='scale(1)')
     }
    

    render() { 
        return ( <>    
    <h1 className="ofertTitle">Oferta</h1>
    <h2 className='titleH2'>BADANIA PSYCHOLOGICZNE Z ZAKRESU MEDYCYNY PRACY DLA:</h2>
    <div className="forWho">
        <div className='flexicon'> <i className = "fas fa-car" onMouseOver={this.handleIconMouseOver} onMouseLeave={this.handleIconMouseLeave}> </i><p className="indoIcons">kierowców</p>
               {/* <ul class='driver'>
            <li>=>do kursów na kategorie C, <br></br>C + E, D, D + E</li>
            <li>=>do kwalifikacji,</li>
            <li>=> dla instruktorów nauki jazdy i egzaminatorów</li>
            <li>=>do pracy(kierowcy zawodowi, taksówkarze)</li>
            <li>=>po zabraniu prawa jazdy</li>
            
             </ul>*/} </div>  
        <div className='flexicon'><i className="fas fa-motorcycle" onMouseOver={this.handleIconMouseOver} onMouseLeave={this.handleIconMouseLeave}></i><p className="indoIcons">sportowców sportów motorowych<br>

        </br> (żużel, kierowcy rajdowi)</p> </div>
        <div className='flexicon'><i className = "fas fa-shield-alt" onMouseOver={this.handleIconMouseOver} onMouseLeave={this.handleIconMouseLeave}></i><p className="indoIcons">pracowników ochrony</p></div>
        <div className='flexicon'><i className="fas fa-bullseye" onMouseOver={this.handleIconMouseOver} onMouseLeave={this.handleIconMouseLeave}></i><p className="indoIcons">osób starających się o pozwolenie na broń</p></div>
        <div className='flexicon'><i className = "fas fa-dolly-flatbed" onMouseOver={this.handleIconMouseOver} onMouseLeave={this.handleIconMouseLeave}> </i><p className="indoIcons">operatorów maszyn,<br></br> kierowców wózków widłowych, operatorów suwnic,<br></br> operatorów koparek, itp.</p></div>
        <div className='flexicon'><i className="fas fa-file-medical" onMouseOver={this.handleIconMouseOver} onMouseLeave={this.handleIconMouseLeave}></i><p className="indoIcons">badania okresowe i kontrolne</p></div>
    </div>
<h2>BADANIA LEKARSKIE Z ZAKRESU MEDYCYNY PRACY:</h2>
<p>badania lekarskie z zakresu medycyny pracy na wymienione wyżej stanowiska.</p>
<h2>KONSULTACJE I PORADY (TAKŻE DROGĄ TELEFONICZNĄ I INTERNETOWĄ)</h2>
<p>– konsultacje dla uczniów, studentów i absolwentów, którzy chcą odnaleźć właściwą sobie drogę w dorosłym życiu,

– konsultacje motywujące, skoncentrowane na poszukiwaniu i wzmacnianiu swoich mocnych stron (coaching),

– poradnictwo w przypadkach nagłych,

– konsultacje w sytuacjach kryzysowych, stanach depresyjnych, problemach z odnalezieniem swojego miejsca w świecie,

– konsultacje skoncentrowane na odnajdywaniu mocnych stron w sytuacjach zawodowych (poszukiwanie pracy, przygotowanie do rozmów kwalifikacyjnych).</p>




    </> );
    }
}
 
export default Ofert ;


