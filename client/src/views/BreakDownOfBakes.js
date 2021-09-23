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

function BreakDownOfBakes(props) {



    const reactJSChartData = (orders) => {
        let storesDataSet = storesDataSets(orders)
        //storesDataSet.push(dataSet(getDataPoints(orders, getDateLabels(orders)), "ALL"))
        return {
            labels: labels,
            datasets: storesDataSet,
            options: {
                plugins: {
                    legend: { display: false },
                },
            },
        }
    }

    const dataSet= (dataSet, bakeName) =>{
        return {
            data: dataSet,
            fill: false,
            borderColor: stringToColour(store),
            backgroundColor: stringToColour(bakeName),
            pointBorderColor: stringToColour(store),
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8,
            tension: 0.4,
            label: store
        }
    }





    return (
        <>

        </>
    );
}

export default connect(({orders}) => ({orders}), {

})(BreakDownOfBakes);