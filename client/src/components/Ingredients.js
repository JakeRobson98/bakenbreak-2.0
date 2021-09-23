/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button, Nav} from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";
import {connect} from "react-redux";
import {updateOrder} from "../actions/orders";
import {amountOfOnionRings,amountOfTofu,amountOfBeef,amountOfBread } from "../HelperFunctions";
function Ingredients(props) {

    return (
        <>
            <h3>Ingredients needed: </h3>
            <div>
                <ul>
                    <li>Beef {amountOfBeef(props.orders)} kg(s)</li>
                    <li>Tofu {amountOfTofu(props.orders)} unit(s)</li>
                    <li>Onion rings {amountOfOnionRings(props.orders)} unit(s)</li>
                    <li>Bread {amountOfBread(props.orders)} unit(s)</li>
                </ul>
            </div>
        </>
    );

}

export default Ingredients;
