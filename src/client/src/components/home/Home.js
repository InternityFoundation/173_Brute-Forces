import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render(){
        return(
            <div>
                <div className="container">
        <header>
            <div className="brand">
                <a href="index.html">CURA: Live a Smart Lifestyle</a>
            </div>
            <div className="nav-bar">
                <ul className="nav-items">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#section">healthy lifestyle</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </header>
        <section id="section">
            <div className="main-section">
                <div className="main-section-heading">
                    <h1>Choose a healthy lifestyle.</h1>
                </div>
                <div className="food-enquiry">
                     <div className="food-enquiry-heading">
                        <a href="#"><div className="food-enquiry-tag"><h3>Food</h3></div></a>
                     </div>
                </div>
                <div className="medicine-enquiry">
                    <div className="medicine-enquiry-heading">
                        <a href="medicine.html"><div className="medicine-enquiry-tag"><h3>Medicine</h3></div></a>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div><h4>Copyrights 2019 @CURA</h4></div>
            <div><h4>Connect with us on:</h4></div>
        </footer>
    </div>
            </div>
        );
    }
}

export default Home;