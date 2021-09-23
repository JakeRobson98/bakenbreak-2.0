const moment = require("moment")

export const totalRevenue = (orders) => {
    let totalRevenue = 0;
    for (let order in orders) {
        totalRevenue += orders[order].totals.total
    }
    return totalRevenue
}

export const numberOfTotalStores = (orders) => {
    let totalStores = [];
    for (let order in orders) {
        if (!totalStores.includes(orders[order].shipping.suburb)) {
            totalStores.push(orders[order].shipping.suburb)
        }
    }
    return totalStores.length
}
export const totalStoresArray = (orders) => {
    let totalStores = [];
    for (let order in orders) {
        if (!totalStores.includes(orders[order].shipping.suburb)) {
            totalStores.push(orders[order].shipping.suburb)
        }
    }
    return totalStores
}


export const totalBakes = (orders) => {
    let totalBakes = 0;
    for (let order in orders) {
        for (let item in orders[order].lineItems) {
            totalBakes += orders[order].lineItems[item].QTY_O
        }
    }
    return totalBakes
}

export const totalBakesBySKU = (sku, orders) => {
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

export const amountOfBeef= (orders) => {

    let beefCountInGrams = 0
    for (let order in orders) {
        for (let lineItem in orders[order].lineItems) {
            if (orders[order].lineItems[lineItem].PART == "SKU001" || orders[order].lineItems[lineItem].PART == "SKU002") {
                beefCountInGrams += orders[order].lineItems[lineItem].QTY_O * 110
            }
        }
    }
    console.log(beefCountInGrams)
    return beefCountInGrams / 1000
}

export const amountOfTofu= (orders) => {
    let tofuCountInUnits = 0
    for (let order in orders) {
        for (let lineItem in orders[order].lineItems) {
            if (orders[order].lineItems[lineItem].PART == "SKU003") {
                tofuCountInUnits += orders[order].lineItems[lineItem].QTY_O * 0.45
            }
        }
    }
    console.log(tofuCountInUnits)
    return tofuCountInUnits
}

export const amountOfOnionRings= (orders) =>{
    let amountOfOnionRings = 0
    for (let order in orders) {
        for (let lineItem in orders[order].lineItems) {
            if (orders[order].lineItems[lineItem].PART == "SKU002") {
                amountOfOnionRings += orders[order].lineItems[lineItem].QTY_O
            }
        }
    }
    return amountOfOnionRings / 6
}

export const amountOfBread=(orders)=> {
    let amountOfBread = 0
    for (let order in orders) {
        for (let lineItem in orders[order].lineItems) {
            amountOfBread += orders[order].lineItems[lineItem].QTY_O
        }
    }
    return amountOfBread
}
export const getLastWeeksOrders =(orders)=> {
    let oneWeekAgo = moment().add(-1, "w")
    let filteredOrders = orders.filter(order => moment(order.meta.delivery_date).isAfter(oneWeekAgo))
    return filteredOrders
}

export const getLastMonthsOrders =(orders)=> {
    let oneMonthAgo = moment().add(-1, "m")
    let filteredOrders = orders.filter(order => moment(order.meta.delivery_date).isAfter(oneMonthAgo))
    return filteredOrders
}

export const stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

