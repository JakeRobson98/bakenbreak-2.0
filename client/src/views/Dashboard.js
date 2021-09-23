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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import Totals from '../components/Totals'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col, Input, Label, FormGroup,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import {connect} from "react-redux";
import {selectUnselectOrder} from "../actions/orders";

import {
  totalRevenue,
  getLastWeeksOrders,
  getLastMonthsOrders,
  totalStoresArray,
  stringToColour
} from "../HelperFunctions";
import orders from "../reducers/orders";
import store from "../store";
import {color} from "chart.js/helpers";

function Dashboard(props) {

  let [allTime, setAllTime] = useState(true);

  const getDateLabels = (orders) =>{
    let dateLabels = []
    for(let order in orders){
      if(!dateLabels.includes(orders[order].meta.delivery_date)){
        dateLabels.push(orders[order].meta.delivery_date)
      }
    }
    console.log(dateLabels)
    return dateLabels
  }

  const getDataPoints = (orders, dates) =>{
    let dataPoints = []
    for(let date in dates){
        let totalRev = 0;
        let ordersForDate = orders.filter(ord => ord.meta.delivery_date === dates[date])
        if(ordersForDate.length > 0){
          totalRev = totalRevenue(ordersForDate)
        }
        dataPoints.push(totalRev)
    }
    return dataSet(dataPoints, orders[0].shipping.suburb)
  }

  const getAllStoresRevenue = (orders, dates) =>{
    let dataPoints = []
    for(let date in dates){
      let totalRev = 0;
      let ordersForDate = orders.filter(ord => ord.meta.delivery_date === dates[date])
      if(ordersForDate.length > 0){
        totalRev = totalRevenue(ordersForDate)
      }
      dataPoints.push(totalRev)
    }
    return dataSetAllTimeRevenue(dataPoints)
  }


  const storesDataSets = (orders) =>{
    let result = []
    let stores = totalStoresArray(orders)
    for(let store in stores){
      result.push(getDataPoints(orders.filter(order => order.shipping.suburb == stores[store]), getDateLabels(orders)))
    }
    console.log(result)
    return result
  }

  const reactJSChartData = (orders) => {
    let storesDataSet = storesDataSets(orders)
    if(allTime){
      storesDataSet.push(getAllStoresRevenue(orders, getDateLabels(orders)));
    }
    return {
      labels: getDateLabels(orders),
      datasets: storesDataSet,
      options: {
        plugins: {
          legend: { display: false },
        },
      },
    }
  }

  const dataSet= (dataSet, store) =>{
    return {
      data: dataSet,
      fill: false,
      borderColor: stringToColour(store),
      backgroundColor: "transparent",
      pointBorderColor: stringToColour(store),
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      tension: 0.4,
      label: store
    }
  }
  const dataSetAllTimeRevenue= (dataSet) =>{
    return {
      data: dataSet,
      fill: false,
      borderColor: stringToColour("All Time Revenue"),
      backgroundColor: "transparent",
      pointBorderColor: stringToColour('All Time Revenue'),
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      tension: 0.4,
      label: store
    }
  }

  const handleClick = (e) =>{
    console.log(e.target.checked)
    console.log(allTime)
    setAllTime(e.target.checked)
  }



  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Total Revenue</CardTitle>
                <Row>
                  <Col>
                    <p className="card-category">Running total of all time revenue</p>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <Label for="checkboxID">Show total: </Label>
                      <br/>
                      <Input checked={allTime} onChange={e =>handleClick(e)} id={"checkboxID"} type={"checkbox"}>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>



              </CardHeader>
              <CardBody>
                <Line
                    data={reactJSChartData(props.orders.orders)}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  {totalStoresArray(props.orders.orders).map(label =>{
                    return <>
                      <i style={{color: stringToColour(label)}} className={"fa fa-circle " } />
                      {label.toString()}
                    </>
                  })}
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>

          </Col>
        </Row>
        <div className="card-stats">
          <h5>All time:</h5>
          <p className="card-category">Running total of all time revenue</p>

          <Totals orders={props.orders.orders}></Totals>
        </div>
        <div className="card-stats">
          <h5>This week:</h5>
          <p className="card-category">Running total of last weeks revenue</p>

          <Totals orders={getLastWeeksOrders(props.orders.orders)}></Totals>
        </div>
        <div className="card-stats">
          <h5>This month:</h5>
          <p className="card-category">Running total of last months revenue</p>

          <Totals orders={getLastMonthsOrders(props.orders.orders)}></Totals>
        </div>
      </div>
    </>
  );
}

export default connect(({orders}) => ({orders}), {

})(Dashboard);