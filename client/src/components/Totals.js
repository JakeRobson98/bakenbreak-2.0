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
import {Button, Card, CardBody, CardFooter, CardTitle, Col, Nav, Row} from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";
import {connect} from "react-redux";
import {updateOrder} from "../actions/orders";
import {totalBakes, totalRevenue, numberOfTotalStores} from "../HelperFunctions";

function Totals(props) {

    console.log(props)

    return (
        <Row>
            <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                    <CardBody>
                        <Row>
                            <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                    <i className="nc-icon nc-globe text-warning"/>
                                </div>
                            </Col>
                            <Col md="8" xs="7">
                                <div className="numbers">
                                    <p className="card-category">Total orders</p>
                                    <CardTitle tag="p">{props.orders.length}</CardTitle>
                                    <p/>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <hr/>
                        <div className="stats">
                            <i className="fas fa-sync-alt"/> Update Now
                        </div>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                    <CardBody>
                        <Row>
                            <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                    <i className="nc-icon nc-money-coins text-success"/>
                                </div>
                            </Col>
                            <Col md="8" xs="7">
                                <div className="numbers">
                                    <p className="card-category">Revenue</p>
                                    <CardTitle tag="p">${totalRevenue(props.orders)}</CardTitle>
                                    <p/>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <hr/>
                        <div className="stats">
                            <i className="far fa-calendar"/> Last day
                        </div>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                    <CardBody>
                        <Row>
                            <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                    <i className="nc-icon nc-vector text-danger"/>
                                </div>
                            </Col>
                            <Col md="8" xs="7">
                                <div className="numbers">
                                    <p className="card-category">Total bakes</p>
                                    <CardTitle tag="p">{totalBakes(props.orders)}</CardTitle>
                                    <p/>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <hr/>
                        <div className="stats">
                            <i className="far fa-clock"/> In the last hour
                        </div>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                    <CardBody>
                        <Row>
                            <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                    <i className="nc-icon nc-favourite-28 text-primary"/>
                                </div>
                            </Col>
                            <Col md="8" xs="7">
                                <div className="numbers">
                                    <p className="card-category">Total Stores</p>
                                    <CardTitle tag="p">{numberOfTotalStores(props.orders)}</CardTitle>
                                    <p/>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <hr/>
                        <div className="stats">
                            <i className="fas fa-sync-alt"/> Update now
                        </div>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    );

}

export default Totals;
