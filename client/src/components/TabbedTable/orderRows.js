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
import React from "react";


// reactstrap components
import {Button,} from "reactstrap";
import OrderStatusButton from "../OrderStatusButton";

function OrderRows(props) {
    return props.ordersData.map((order, key) => {
        return <tr key={key}>
            <th>
                <Button
                    className="btn-round btn-icon"
                    color={order.isSelected ? 'success' : 'primary'}

                    size="sm"
                    onClick={e => props.handleSelect(order.meta.order_number)}
                >
                    <i className="nc-icon nc-check-2"/>
                </Button>
            </th>
            <th>{order.meta.order_number}</th>
            <th>{order.meta.order_date}</th>
            <th>{order.meta.delivery_date}</th>
            <th>{order.shipping.suburb}</th>
            <th>${order.totals.total}</th>
            <th className={"text-center"}>
                <OrderStatusButton order={order}></OrderStatusButton>
            </th>
        </tr>
    })
}

export default OrderRows