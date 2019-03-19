import React from 'react';
import Img from 'react-image';
import '../components/index.css'
import HeaderFile from '../HeaderFile';
//import { Link } from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
                <div>
                    <HeaderFile />
                        <div className="ui container">
                         <h1>Domestic Holidays- Under ₹ 30,000</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Img src={require("./laddak2.jpeg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                                <div className="ui text-block">
                                    <h4>Leh Ladakh Leh Places</h4>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <a href="#">Vishal Tours</a>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Img src={require("./gujarat2.jpeg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                        <div className="ui text-block">
                                <h4>Gujrat Royality of Sasangir,Somnath
                                </h4>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <a href="#">Vishal Tours</a>
                            
                        </div>
                        <hr></hr>        
                </div>
                
                <div className="ui column">
                    <Img src= {require("./northeast.jpg")} 
                     style={{width:"90%", height:"44vh"}}
                     />
                        <div className="ui text-block">
                                <h4>North-East Cherrapunji</h4>
                                <a   style={{color:"red"}}>₹ 28,999</a><br></br>
                                <a href="#">Vishal Tours</a>
                            
                        </div>
                        <hr></hr>      
                </div>
                
                </div>
                
                
                
                <h1>Domestic Family Holidays- Under ₹ 40,000</h1>
                    <div className="ui row">
                        <div className="ui column">
                        
                            <Img src={require("./pondichery.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            <div className="ui text-block">
                                <h4>Pondicherry Karaikal Beach</h4>
                                <a   style={{color:"red"}}>₹ 30,999</a><br></br>
                                <a href="#">Make My Trip</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column">
                            <Img src={require("./rajasthan2.jpeg")}
                            style={{width:"90%",height:"44vh"}}
                            />
                            <div className="ui text-block">
                                <h4>Rajasthan Pushkar Raj-Mahal</h4>
                                <a   style={{color:"red"}}>₹ 30,999</a><br></br>
                                <a href="#">Make My Trip</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column"> 
                            <Img src={require("./kullu3.jpeg")}
                             style={{width:"90%",height:"44vh"}}
                             />
                             <div className="ui text-block">
                                <h4>Rohtang Pass Manali</h4>
                                <a   style={{color:"red"}}>₹ 35,999</a><br></br>
                                <a href="#">Trivago</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                    </div>

                <h1>Domestic Honeymoon Packages</h1>
                <div className="ui row">
                        <div className="ui column">
                                <Img src= {require("./honeymoon.jpeg")}
                              style={{width:"90%"}}
                              />
                              <div className="ui text-block">
                                <h4>Andaman Nikobar Beach</h4>
                                <a   style={{color:"red"}}>₹ 21,399</a><br></br>
                                <a href="#">Vishal Tours</a>
                            
                                </div>
                                <hr></hr>
                                
                               
                        </div>
                        <div className="ui column">
                            <Img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                             style={{width:"90%",height:"45vh"}}
                            />
                             <div className="ui text-block">
                                <h4>Goa Chapora Beach</h4>
                                <a   style={{color:"red"}}>₹ 25,599</a><br></br>
                                <a href="#">Gangde Agencies</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column"> 
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkafguPCecXVXbfsHMu4ihKqtdcQvyoU8TennXQ90qNFXFkj5gw"
                             style={{width:"90%", height:"44vh"}}
                             />
                             <div className="ui text-block">
                                <h4>Kerela Chavakkad Beach</h4>
                                <a   style={{color:"red"}}>₹ 18,999</a><br></br>
                                <a href="#">Chouhan Agencies</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                </div>

                <h1>Biking Trips across India</h1>
                <div className="ui row">
                        <div className="ui column">
                            <Img src={require("./biking.jpeg")}
                             style={{width:"90%", height:"45vh"}}
                            />
                            <div className="ui text-block">
                                <h4>Leh to Manali Highway</h4>
                                <a   style={{color:"red"}}>₹ 26,599</a><br></br>
                                <a href="#">Chouhan Agencies</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column">
                            <Img src={require("./biking1.jpeg")}
                             style={{width:"90%"}}
                            />
                            <div className="ui text-block">
                                <h4>Guwahati to Tawang</h4>
                                <a   style={{color:"red"}}>₹ 22,699</a><br></br>
                                <a href="#">Chouhan Agencies</a>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column"> 
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovdOzvdmvUQEARH8VCzI82syqB2CCIg4wswq84hQBWKPJEmiFkw"
                             style={{width:"90%",height:"45vh"}}
                             />
                             <div className="ui text-block">
                                <h4>Shimla to Manali via Mandi</h4>
                                <a   style={{color:"red"}}>₹ 23,799</a><br></br>
                                <a href="#">Chouhan Agencies</a>
                                <hr></hr>   
                                </div>
                                
                        </div>
                </div>
            </div>
            </div>
        );
    }
}

export default App;