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
import OrderStatusButton from "../components/OrderStatusButton";
import OrderRow from "../components/TabbedTable/orderRows";
import TableTab from "../components/TabbedTable/TableTab";

function Tables(props) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    let ordersData = props.orders.orders
    let orderStauses = props.orders.orderStatuses

    const handleSelect = (key) => {
        console.log(key)
        props.selectUnselectOrder(key)
    }

    const filterContent = () =>{

    }


    const Navlinks = Object.keys(orderStauses).map(element => {
        return <NavItem key={element}>
            <NavLink
                className={classnames({active: activeTab === element})}
                onClick={() => {
                    toggle(element);
                }}
            >
                {element} orders
            </NavLink>
        </NavItem>
    })
    const tabbedContent = () => {
        Object.keys(orderStauses).map(orderStatus => {

            let filteredOrdersData = ordersData.filter(order => order.status == orderStatus.toString().toLowerCase())
            return <TableTab key={orderStatus} orderStatus={orderStatus} handleSelect={handleSelect} ordersData={filteredOrdersData} ></TableTab>
        })
    }
    const totalRevenue = (orders) => {
        let totalRevenue = 0;
        for (let order in orders) {
            totalRevenue += orders[order].totals.total
        }
        return totalRevenue
    }

    const totalStores = (orders) => {
        let totalStores = [];
        for (let order in orders) {
            if (!totalStores.includes(orders[order].shipping.suburb)) {
                totalStores.push(orders[order].shipping.suburb)
            }
        }
        return totalStores.length
    }

    const totalBakes = (orders) => {
        let totalBakes = 0;
        for (let order in orders) {
            for (let item in orders[order].lineItems) {
                totalBakes += orders[order].lineItems[item].QTY_O
            }
        }
        return totalBakes
    }

    const totalBakesBySKU = (sku, orders) => {
        let totalBakes = 0;
        for (let order in orders) {
            for (let item in orders[order].lineItems) {
                if (orders[order].lineItems[item].PART == sku) {
                    totalBakes += orders[order].lineItems[item].QTY_O
                }
            }
        }
        return totalBakes
    }


    return (
        <>
            <div className="content">

                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Orders</CardTitle>
                                <div>
                                    <Nav tabs>
                                        {Navlinks}
                                    </Nav>
                                </div>
                            </CardHeader>
                            <TabContent activeTab={activeTab}>
                                {tabbedContent}
                            </TabContent>

                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default connect(({orders}) => ({orders}), {
    selectUnselectOrder
})(Tables);