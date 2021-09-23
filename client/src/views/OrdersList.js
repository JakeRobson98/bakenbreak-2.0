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
import {connect} from "react-redux";
import classnames from 'classnames';

import {selectUnselectOrder} from "actions/orders";


// reactstrap components
import {
    TabContent,TabPane, CardText,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardFooter,
    Table,
    Row,
    Col,
    Button, Nav,NavLink, NavItem
} from "reactstrap";

import {totalBakes, numberOfTotalStores, totalBakesBySKU, totalRevenue} from "../HelperFunctions";

import TableTab from "../components/TabbedTable/TableTab";
import Ingredients from "../components/Ingredients";

function OrdersList(props) {
    let ordersData = props.orders.orders

    const FullList = () => {
        return <TableTab ordersData={ordersData}  handleSelect={props.selectUnselectOrder}></TableTab>
    }

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Orders</CardTitle>
                            </CardHeader>
                            {FullList()}
                        </Card>
                    </Col>
                </Row>
            </div>
        </>


    );
}

export default connect(({orders}) => ({orders}), {
    selectUnselectOrder
})(OrdersList);