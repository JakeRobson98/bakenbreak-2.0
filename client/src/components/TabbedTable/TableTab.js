import {CardBody, CardHeader, FormGroup, Input, Label, Table, TabPane} from "reactstrap";
import OrderRows from "./orderRows";
import React, {useState} from "react";

function TableTab(props) {
    const [filter, setFilter] = useState({
        deliveryDate: ''
    })

    function handleChange(e) {
        e.preventDefault()
        console.log(e.target.value)
        setFilter({deliveryDate: e.target.value})
        console.log(filter)
        return;
    }

    function filteredList() {
        if (filter.deliveryDate != '') {
            console.log(props.ordersData)
        }
        else{
            return props.ordersData
        }
    }

    return <TabPane tabId={props.orderStatus}>
        <CardHeader>
            <FormGroup>
                <Label for="exampleEmail">Date</Label>
                <Input onChange={e =>handleChange(e)} type="text" name="email" id="exampleEmail" placeholder="dd-mm-yyyy"></Input>
            </FormGroup>

        </CardHeader>
        <CardBody>
            <Table responsive>
                <thead className="text-primary">

                <tr>
                    <th/>
                    <th>
                        Purchase number
                    </th>
                    <th>Date ordered</th>
                    <th>Delivery Date</th>
                    <th>Store location</th>
                    <th>Total Revenue</th>
                    <th className="text-center">Status</th>
                </tr>
                </thead>
                <tbody>
                <OrderRows
                    ordersData={
                         props.ordersData.filter(order => order.meta.delivery_date.toString().includes(filter.deliveryDate))
                    }
                    //ordersData = {props.ordersData}
                    handleSelect={props.handleSelect}></OrderRows>
                </tbody>
            </Table>
        </CardBody>
    </TabPane>
}

export default TableTab