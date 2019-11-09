import React, {Component} from 'react';
import './food.css';

class Food extends Component{

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
                    <li><a href="index.html#section">healthy lifestyle</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </header>
        <section id="section">
            <div className="main-section">
                <div className="main-section-heading">
                    <h1>Worried? Want to do your food analysis.</h1>
                </div>
                <div className="medicine-search-form">
                    <form action="" method="POST">
                        <fieldset>
                            <legend><h3> Enter food and it's ingredients:</h3></legend>
                            <div className="input-elements">
                                <h2>Food Item</h2>
                                <h2>Ingredients</h2>
                                <input type="text" id="group1" name="food-item-1" placeholder="Enter Food Item 1" required />
                                <input type="text" id="group2" name="food-item-1-indredient" placeholder="Food Item 1 Indredient" required />
                                <input type="text" id="group3" name="food-item-1-indredient" placeholder="Food Item 1 Indredient" required />
                                <input type="text" id="group4" name="food-item-2" placeholder="Enter Food Item 2" required />
                                <input type="text" id="group5" name="food-item-2-indredient" placeholder="Food Item 2 Indredient" required />
                                <input type="text" id="group6"  name="food-item-2-indredient" placeholder="Food Item 2 Indredient" required />
                                <input type="text" id="group7"  name="food-item-2-indredient" placeholder="Food Item 2 Indredient" required />
                                <input type="submit" name="food-submit" value="Submit" />
                            </div>
                        </fieldset>
                    </form>
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

export default Food;