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

function StatusButton(props) {
    const [isShown, setIsShown] = useState(false);


    let order = props.order
    let ordersStauses = props.orders.orderStatuses

    const handleStatusUpdate = (e) => {
        e.preventDefault()
        let updatedOrder = order
        updatedOrder.status = getNextStatus()
        props.updateOrder(updatedOrder)
        console.log(JSON.stringify(updatedOrder))

    }

    const getNextStatus = () => {
        let nextStatus = ""
        if (order.status.toLowerCase() == ordersStauses.UNREAD) {
            return ordersStauses.READ
        } else if (order.status.toLowerCase() == ordersStauses.READ) {
            return ordersStauses.PREPARING
        } else if (order.status.toLowerCase() == ordersStauses.PREPARING) {
            return ordersStauses.DELIVERED
        } else if (order.status.toLowerCase() == ordersStauses.DELIVERED) {
            return ordersStauses.ARCHIVED
        } else {
            return order.status
        }
    }
    return (
        <Button className="primary" outline
                style={{width:"200px"}}
                onClick={event => {handleStatusUpdate(event)}}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
            {isShown ? "Mark as " + getNextStatus() : order.status}
        </Button>
    );
}

export default connect(({orders}) => ({orders}), {
    updateOrder
})(StatusButton);
