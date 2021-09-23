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
/*eslint-disable*/
import React, {useState} from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col, NavItem, NavLink, Nav, TabContent, Table, CardFooter,
} from "reactstrap";
import classnames from "classnames";
import TableTab from "../components/TabbedTable/TableTab";
import {totalBakesBySKU, totalRevenue} from "../HelperFunctions";
import Ingredients from "../components/Ingredients";
import {connect} from "react-redux";
import {selectUnselectOrder} from "../actions/orders";

function Dispatcher(props) {

  const [activeTab, setActiveTab] = useState('UNREAD');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  let ordersData = props.orders.orders
  let orderStauses = props.orders.orderStatuses

  const handleSelect = (key) => {
    console.log(key)
    props.selectUnselectOrder(key)
  }

  const orderAggregator = ordersData.filter(element => element.isSelected).map((order, key) => {
    return <tr>
      <th></th>
      <th>{order.meta.order_number}</th>
      <th>{order.meta.delivery_date}</th>

      <th>{order.lineItems.filter(element => element.PART === "SKU001")[0]?.QTY_O}</th>
      <th>{order.lineItems.filter(element => element.PART === "SKU002")[0]?.QTY_O }</th>
      <th>{order.lineItems.filter(element => element.PART === "SKU003")[0]?.QTY_O }</th>
      <th className="text-right">${order.totals.total}</th>
    </tr>
  })

  const Navlinks = Object.keys(orderStauses).map(element => {
    return <NavItem>
      <NavLink
          className={classnames({active: activeTab === element})}
          onClick={() => {
            toggle(element);
          }}
      >
        {element}
      </NavLink>
    </NavItem>
  })

  const tabbedContent = Object.keys(orderStauses).map(orderStatus => {
    let filteredOrdersData = ordersData.filter(order => order.status == orderStatus.toString().toLowerCase())
    return <TableTab orderStatus={orderStatus} handleSelect={handleSelect} ordersData={filteredOrdersData} ></TableTab>
  })



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
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Order Aggreator </CardTitle>
                  <p className="card-category">for {ordersData.filter(element => element.isSelected).length} order(s)</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                    <tr>
                      <th/>
                      <th>Order number</th>
                      <th>Delivery Date</th>
                      <th>Number of cheeseburger bakes</th>
                      <th>Number of BBQ bakes</th>
                      <th>Number of tofu bakes</th>
                      <th className="text-right">Total Revenue</th>
                    </tr>
                    </thead>

                    <tbody>
                    {orderAggregator}
                    </tbody>

                    <tfoot className="text-primary">
                    <th/>
                    <th></th>
                    <th></th>
                    <th>{totalBakesBySKU("SKU001", ordersData.filter(i => i.isSelected))}</th>
                    <th>{totalBakesBySKU("SKU002", ordersData.filter(i => i.isSelected))}</th>
                    <th>{totalBakesBySKU("SKU003", ordersData.filter(i => i.isSelected))}</th>
                    <th className="text-right">{totalRevenue(ordersData.filter(i => i.isSelected))}</th>

                    </tfoot>
                  </Table>
                  <br/>
                  <Ingredients orders={ordersData.filter(i => i.isSelected)}></Ingredients>
                </CardBody>
                <CardFooter>
                  <hr/>
                  <div className="stats">
                    <i className="fa fa-history"/> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );

}

export default connect(({orders}) => ({orders}), {
  selectUnselectOrder
})(Dispatcher);