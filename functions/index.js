// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const HTMLParser = require('node-html-parser');
admin.initializeApp();

// Since this code will be running in the Cloud Functions environment
// we call initialize Firestore without any arguments because it
// detects authentication from the environment.
const firestore = admin.firestore();
// let htmlToParse =
//     `<div dir="ltr"><br><br>
//  <div class="gmail_quote">
//         <div class="gmail_quote">
//             <div dir="ltr" class="gmail_attr">---------- Forwarded message ---------<br>From: <span
//                     dir="auto">&lt;<a href="mailto:noreply@farro.co.nz"
//                         target="_blank">noreply@farro.co.nz</a>&gt;</span><br>Date: Sun, 5 Sept 2021 at
//                 13:01<br>Subject: Purchase Order #417266<br>To: &lt;<a href="mailto:hello@bakenbreak.co.nz"
//                     target="_blank">hello@bakenbreak.co.nz</a>&gt;<br></div><br><br>
//             <div> <b></b><br>
//                 <center>
//                     <h2>PURCHASE ORDER # 417266</h2>
//                 </center>
//                 <table width="100%">
//                     <tbody>
//                         <tr>
//                             <td align="right">
//                                 <table width="100%" border="0" cellpadding="0" cellspacing="0">
//                                     <tbody>
//                                         <tr>
//                                             <td>
//                                                 <table border="0" cellpadding="0" cellspacing="0"
//                                                     id="m_1853280297849101644m_7167306094259272560table5">
//                                                     <tbody>
//                                                         <tr>
//                                                             <td align="right"><b>Supplier :</b></td>
//                                                             <td> CATERBAKE LIMITED</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td align="right"><b>Supplier GST:</b></td>
//                                                             <td> 132-475-758</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td align="right"><b>Supplier INV# :</b></td>
//                                                             <td> </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td align="right"><b>Delivery Date :</b> </td>
//                                                             <td> 07-09-2021</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td align="right"><b>Stock Receive Date :</b> </td>
//                                                             <td> </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td align="right"><b>Order Date :</b></td>
//                                                             <td>05-09-2021 13:01</td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </td>
//                                             <td align="right" valign="bottom"> </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td height="5" bgcolor="#4B748D">
//                                 <p> </p>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table> <br>
//                 <table border="0" width="100%" id="m_1853280297849101644m_7167306094259272560table6">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table border="0" width="100%" id="m_1853280297849101644m_7167306094259272560table7"
//                                     cellspacing="0" cellpadding="0">
//                                     <tbody>
//                                         <tr>
//                                             <td><b>Supplier</b></td>
//                                             <td><b>Bill To:</b></td>
//                                             <td width="388"><b>Ship To:</b></td>
//                                         </tr>
//                                         <tr>
//                                             <td> </td>
//                                             <td> </td>
//                                             <td width="388"> </td>
//                                         </tr>
//                                         <tr>
//                                             <td rowspan="8" valign="top">CATERBAKE LIMITED<p>562 Richmond Road
//                                                     <br>Grey Lynn <br>Auckland 1021 <br> <br>Phone: <br>Fax: <br>
//                                                 </p>
//                                             </td>
//                                             <td>Farro Fresh Food Ltd</td>
//                                             <td valign="top" width="388" rowspan="8">422 Dominion Road <br>Mt Eden
//                                                 <br> <br>New Zealand <br></td>
//                                         </tr>
//                                         <tr>
//                                             <td>Farro Fresh Food</td>
//                                         </tr>
//                                         <tr>
//                                             <td></td>
//                                         </tr>
//                                         <tr>
//                                             <td></td>
//                                         </tr>
//                                         <tr>
//                                             <td></td>
//                                         </tr>
//                                         <tr>
//                                             <td></td>
//                                         </tr>
//                                         <tr>
//                                             <td></td>
//                                         </tr>
//                                         <tr>
//                                             <td>Phone: Fax: </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table> <br>
//                 <table width="100%" cellpadding="0" cellspacing="0">
//                     <tbody>
//                         <tr>
//                             <td></td>
//                         </tr>
//                         <tr>
//                             <td nowrap>CODE </td>
//                             <td width="130">PART#</td>
//                             <td width="60%">DESCRIPTION</td>
//                             <td nowrap>VOLUME</td>
//                             <td nowrap>UNIT</td>
//                             <td nowrap>PRICE</td>
//                             <td nowrap align="center" title="Ordered">QTY_O</td>
//                             <td nowrap align="center" title="Received">QTY_R</td>
//                             <td nowrap align="center" title="Variant">QTY_V</td>
//                             <td nowrap align="center">AMOUNT</td>
//                         </tr>
//                         <tr>
//                             <td colspan="10">
//                                 <hr>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td> </td>
//                         </tr>
//                         <tr>
//                             <td> </td>
//                             <td nowrap>SKU003</td>
//                             <td nowrap>Bake n Break Tofu Cheeseburger Slider Tray</td>
//                             <td nowrap>650</td>
//                             <td nowrap>g</td>
//                             <td nowrap>$17.75</td>
//                             <td nowrap align="center">3</td>
//                             <td nowrap align="center">0</td>
//                             <td nowrap align="center">0</td>
//                             <td nowrap align="right">$53.25</td>
//                         </tr>
//                         <tr>
//                             <td> </td>
//                             <td nowrap>SKU002</td>
//                             <td nowrap>Bake n Break BBQ Burger Slider Tray</td>
//                             <td nowrap>700</td>
//                             <td nowrap>g</td>
//                             <td nowrap>$17.75</td>
//                             <td nowrap align="center">6</td>
//                             <td nowrap align="center">0</td>
//                             <td nowrap align="center">0</td>
//                             <td nowrap align="right">$106.50</td>
//                         </tr>
//                         <tr>
//                             <td> </td>
//                             <td nowrap>SKU001</td>
//                             <td nowrap>Bake n Break Cheese Burger Slider Tray</td>
//                             <td nowrap>600</td>
//                             <td nowrap>g</td>
//                             <td nowrap>$17.75</td>
//                             <td nowrap align="center">9</td>
//                             <td nowrap align="center">0</td>
//                             <td nowrap align="center">0</td>
//                             <td nowrap align="right">$159.75</td>
//                         </tr>
//                         <tr>
//                             <td colspan="10">
//                                 <hr>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td valign="top" colspan="9" align="right"><b>SubTotal(NZD) : </b></td>
//                             <td align="right"><b>$319.50</b></td>
//                         </tr>
//                         <tr>
//                             <td valign="top" colspan="9" align="right"><b>Freight(NZD) : </b></td>
//                             <td align="right"><b>$0.00</b></td>
//                         </tr>
//                         <tr>
//                             <td valign="top" colspan="9" align="right"><b>Tax(NZD) : </b></td>
//                             <td align="right"><b>$47.93</b></td>
//                         </tr>
//                         <tr>
//                             <td valign="top" colspan="9" align="right"><b>Total(NZD) : </b></td>
//                             <td align="right"><b>$367.43</b></td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td></td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <p>Ordered by: <a href="mailto:jimmy.whyte@farro.co.nz" target="_blank">jimmy.whyte@farro.co.nz</a>
//                     Email : <a href="mailto:jimmy.whyte@farro.co.nz" target="_blank">jimmy.whyte@farro.co.nz</a></p>
//                 <p>Received by: Email : </p>
//                 <p>Approved by: __________</p>
//                 <p>Closed by: <font color="red"></font>
//                 </p>
//                 <p>Closed time:<font color="red"></font>
//                 </p> Order Comments: <br> Receive Comments: <br><br>
//                 <p align="right"><input type="button" value="Dispatch Information"><input type="button"
//                         value=" Print Out "><input type="button" value="Close Window"></p>
//             </div>
//         </div>
//     </div>
// </div>
//
//
//
//
// <br><br><p class="print" align="right"><input type="button" value="Dispatch Information" onClick="window.open('purchase.aspx?n=&amp;da=1&amp;ssid=44365.3625396181','my','resizable=yes, width=600, height=500,scrollbars')"><input type="button" value="&nbsp;Print Out&nbsp;" onClick="window.print()"><input type="button" value="Close Window" onClick="window.close()"></p></body></html>`

// let htmlToParseNewFormat = `<html>
// <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
// </head>
// <style type="text/css">
//     td {
//         FONT-WEIGHT: 300;
//         FONT-SIZE: 8PT;
//         FONT-FAMILY: verdana;
//     }
//
//     body {
//         FONT-WEIGHT: 300;
//         FONT-SIZE: 8PT;
//         FONT-FAMILY: verdana;
//     }</style>
// <link rel="stylesheet" href="../print.css" type="text/css" media="print">
// <body>
// <b></b><br>
// <center>
//     <h2>PURCHASE ORDER # 390269</h2>
// </center>
// <table width="100%">
//     <tr>
//         <td align="right">
//             <table width="100%" border="0" cellpadding="0" cellspacing="0">
//                 <tr>
//                     <td>
//
//                         <table border="0" cellpadding="0" cellspacing="0" id="table5">
//                             <tr>
//                                 <td align="right"><b>Supplier :</b>
//                                 <td> CATERBAKE LIMITED</td>
//                             </tr>
//                             <tr>
//                                 <td align="right"><b>Supplier GST:</b>
//                                 <td> 132-475-758</td>
//                             </tr>
//                             <tr>
//                                 <td align="right"><b>Supplier INV# :</b>
//                                 <td></td>
//                             </tr>
//                             <tr>
//                                 <td align="right"><b>Delivery Date :</b>
//                                 <td> 22-06-2021</td>
//                             </tr>
//                             <tr>
//                                 <td align="right"><b>Stock Receive Date :</b>
//                                 <td></td>
//                             </tr>
//                             <tr>
//                                 <td align="right"><b>Order Date :</b></td>
//                                 <td>18-06-2021 08:44</td>
//                             </tr>
//                         </table>
//
//                     </td>
//                     <td align="right" valign="bottom">
//
//
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
//     <tr>
//         <td height="5" bgcolor="#4B748D">
//             <p></td>
//     </tr>
// </table>
// <br>
// <table border="0" width="100%" id="table6">
//     <tr>
//         <td>
//             <table border="0" width="100%" id="table7" cellspacing="0" cellpadding="0">
//                 <tr>
//                     <td><b>Supplier</b></td>
//                     <td><b>Bill To:</b></td>
//                     <td width="388"><b>Ship To:</b></td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                     <td></td>
//                     <td width="388"></td>
//                 </tr>
//                 <tr>
//                     <td rowspan="8" valign="top">CATERBAKE LIMITED<p>562 Richmond Road
//                         <br>Grey Lynn
//                         <br>Auckland 1021
//                         <br>
//                         <br>Phone:
//                         <br>Fax:
//                         <br></td>
//                     <td>Farro Fresh Food Ltd</td>
//                     <td valign="top" width="388" rowspan="8">446 Manukau Road
//                         <br>Epsom
//                         <br>
//                         <br>New Zealand
//                         <br></td>
//                 </tr>
//                 <tr>
//                     <td>Farro Fresh Food</td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td>Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         Fax:
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
//
// </table>
// <br><!-- ******** Variable to use ********* -->
// <!-- @@PO_NUMBER, @@PURCHASE_TYPE, @@TODAY_DATE, @@SUPPLIER_ID, @@SUPPLIER_NAME, @@SUPPLIER_NO, @@INVOICE_DATE, @@PO_NUMBER -->
// <!-- *** Shipping/Billing Address *** @@COMPANY_NAME, @@TRADING_NAME,@@NAME, @@CONTACT, @@ADDR1,  @@ADDR2,@ADDR3,@@COUNTRY,@@PHONE,@@FAX,@@EMAIL,@@COMMENTS,@@STAFF, @@SHIPPTO -->
// <!-- *** Supplier Details *** @@SUPPLIER_NAME, @@SUPPLIER_ADDRESS --><!-- ******** END HERE ********* -->
// <table width="100%" cellpadding="0" cellspacing="0">
//     <tr>
//         <td></td>
//     </tr>
//     <tr>
//         <td nowrap="">CODE &nbsp;</td>
//         <td width="130">PART#</td>
//         <td width="60%">DESCRIPTION</td>
//         <td nowrap="" aligh="center">VOLUME</td>
//         <td nowrap="" aligh="center">UNIT</td>
//         <td nowrap="" aligh="center">PRICE</td>
//         <td nowrap="" align="center" title="Ordered">QTY_O</td>
//         <td nowrap="" align="center" title="Received">QTY_R</td>
//         <td nowrap="" align="center" title="Variant">QTY_V</td>
//         <td nowrap="" align="center">AMOUNT</td>
//     </tr>
//     <tr>
//         <td colspan="10">
//             <hr>
//         </td>
//     </tr>
//     <tr>
//         <td>&nbsp;</td>
//     </tr>
//     <tr>
//         <td>&nbsp;</td>
//         <td nowrap="">SKU003</td>
//         <td nowrap="">Bake n Break Tofu Cheeseburger Slider Tray</td>
//         <td nowrap="">650</td>
//         <td nowrap="">g</td>
//         <td nowrap="">$17.75</td>
//         <td nowrap="" align="center">3</td>
//         <td nowrap="" align="center">0</td>
//         <td nowrap="" align="center">0</td>
//         <td nowrap="" align="right">$53.25</td>
//     <tr>
//         <td>&nbsp;</td>
//         <td nowrap="">SKU002</td>
//         <td nowrap="">Bake n Break BBQ Burger Slider Tray</td>
//         <td nowrap="">700</td>
//         <td nowrap="">g</td>
//         <td nowrap="">$17.75</td>
//         <td nowrap="" align="center">3</td>
//         <td nowrap="" align="center">0</td>
//         <td nowrap="" align="center">0</td>
//         <td nowrap="" align="right">$53.25</td>
//     <tr>
//         <td>&nbsp;</td>
//         <td nowrap="">SKU001</td>
//         <td nowrap="">Bake n Break Cheese Burger Slider Tray</td>
//         <td nowrap="">600</td>
//         <td nowrap="">g</td>
//         <td nowrap="">$17.75</td>
//         <td nowrap="" align="center">3</td>
//         <td nowrap="" align="center">0</td>
//         <td nowrap="" align="center">0</td>
//         <td nowrap="" align="right">$53.25</td>
//     <tr>
//         <td colspan="10">
//             <hr>
//         </td>
//     </tr>
//     <tr>
//         <td valign="top" colspan="9" align="right"><b>SubTotal(NZD) : </b></td>
//         <td align="right"><b>$159.75</b></td>
//     </tr>
//     <tr>
//         <td valign="top" colspan="9" align="right"><b>Freight(NZD) : </b></td>
//         <td align="right"><b>$0.00</b></td>
//     </tr>
//     <tr>
//         <td valign="top" colspan="9" align="right"><b>Tax(NZD) : </b></td>
//         <td align="right"><b>$23.96</b></td>
//     </tr>
//     <tr>
//         <td valign="top" colspan="9" align="right"><b>Total(NZD) : </b></td>
//         <td align="right"><b>$183.71</b></td>
//     </tr>
// </table>
// </td></tr>
// <tr>
//     <td></td>
// </tr>
// </table><p>Ordered by: jimmy.whyte@farro.co.nz &nbsp; Email : jimmy.whyte@farro.co.nz</p>
// <p>Received by: &nbsp; Email : </p>
// <p>Approved by: __________</p>
//
// <p>Closed by: <font color="red"></font></p>
// <p>Closed time:<font color="red"></font></p>
// Order Comments:
// <br>
// Receive Comments:
//
//
// <br><br>
// <p class="print" align="right"><input type="button" value="Dispatch Information"
//                                       onClick="window.open('purchase.aspx?n=&amp;da=1&amp;ssid=44365.3625396181','my','resizable=yes, width=600, height=500,scrollbars')"><input
//         type="button" value="&nbsp;Print Out&nbsp;" onClick="window.print()"><input type="button" value="Close Window"
//                                                                                     onClick="window.close()"></p></body>
// </html>`
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();


const parseLineItems = (root) => {
    let tables = root.querySelectorAll("tbody")
    let orderTable = tables[5]
    let orderTableRows = orderTable.querySelectorAll("tr")
    let Headers = orderTableRows[1].querySelectorAll("td")

    let cbHtml = orderTableRows[4].querySelectorAll("td")
    let bbqHtml = orderTableRows[5].querySelectorAll("td")
    let tofuHtml = orderTableRows[6].querySelectorAll("td")

    let cbLineItem = new Object()
    let tofuLineItem = new Object()
    let bbqLineItem = new Object()
    for (const key in Headers) {
        if (Headers[key].innerText == "PRICE" || Headers[key].innerText == "AMOUNT") {
            cbLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = parseFloat(cbHtml[key].innerText.replace("$", ""))
            bbqLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = parseFloat(bbqHtml[key].innerText.replace("$", ""))
            tofuLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = parseFloat(tofuHtml[key].innerText.replace("$", ""))
        } else if (Headers[key].innerText === "VOLUME" || Headers[key].innerText === "QTY_O" || Headers[key].innerText === "QTY_R" || Headers[key].innerText === "QTY_V") {
            cbLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = parseInt(cbHtml[key].innerText)
            bbqLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = parseInt(bbqHtml[key].innerText)
            tofuLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = parseInt(tofuHtml[key].innerText)
        } else {
            cbLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = cbHtml[key].innerText
            bbqLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = bbqHtml[key].innerText
            tofuLineItem[Headers[key].innerText.trim().replace("#", "").replace(" ", "")] = tofuHtml[key].innerText
        }
    }
    let lineItems = [cbLineItem, tofuLineItem, bbqLineItem]
    return lineItems
}

const parseTotals = (root) => {
    let tables = root.querySelectorAll("tbody")
    let orderTable = tables[5]
    let orderTableRows = orderTable.querySelectorAll("tr")
    let SubTotal = orderTableRows[8].querySelectorAll("td")
    let Freight = orderTableRows[9].querySelectorAll("td")
    let Tax = orderTableRows[10].querySelectorAll("td")
    let Total = orderTableRows[11].querySelectorAll("td")
    let totalsObject = new Object()
    totalsObject.sub_total = parseFloat(SubTotal[1].innerText.replace("$", "").replace(",", ""));
    totalsObject.freight = parseFloat(Freight[1].innerText.replace("$", "").replace(",", ""));
    totalsObject.tax = parseFloat(Tax[1].innerText.replace("$", "").replace(",", ""));
    totalsObject.total = parseFloat(Total[1].innerText.replace("$", "").replace(",", ""));
    return totalsObject
}

const parseShipping = (root) => {
    let shippingResult = new Object()
    let tables = root.querySelectorAll("tbody")
    let shippingBody = tables[3]
    shippingBody = shippingBody.querySelector("table")
    shippingBody = shippingBody.querySelector("tbody")
    shippingBody = shippingBody.querySelectorAll("tr")
    let address = shippingBody[2].querySelectorAll("td")
    address = address[2].childNodes.filter(function (n) {
        return n.rawTagName != 'br'
    })
    shippingResult.street_number = address[0].innerText.trim()
    shippingResult.suburb = address[1].innerText.trim()
    return shippingResult
}

const parseMeta = (root) => {
    let h2 = root.querySelector("h2")
    let metaObject = new Object();
    let tables = root.querySelectorAll("tbody")
    let metaBody = tables[0]
    metaBody = metaBody.querySelectorAll("table")
    metaBody = metaBody[1]
    metaBody = metaBody.querySelectorAll("tr")
    for (meta in metaBody) {
        let property = metaBody[meta].querySelectorAll("td")[0].innerText.replace(":", "").trim().replace(" ", "_").toLowerCase().replace("#", "").replace(" ", "_")
        let value = metaBody[meta].querySelectorAll("td")[1].innerText.trim()
        metaObject[property] = value
    }
    metaObject.order_number = parseInt(h2.innerText.replace("PURCHASE ORDER #", "").trim())
    return metaObject
}

//todo parse the dat 
const parseEmailResponse = (root) => {
    functions.logger.info("trying to write to parse email content")
    try {
        let invoice = {
            lineItems: parseLineItemsLoad(root),
            meta: parseMeta(root),
            shipping: parseShipping(root),
            totals: parseTotals(root)
        }
        //console.log(invoice)
        return invoice
    } catch (error) {
        functions.logger.error("Unable to parse  Email response email")
        throw error
    }

}

function parseLineItem(items) {
    return {
        DESCRIPTION: items[1],
        PART: items[0],
        PRICE: parseFloat(items[4].replace("$", "").replace(",", "")),
        QTY_O: parseFloat(items[5].replace("$", "").replace(",", "")),
        QTY_R: parseFloat(items[6].replace("$", "").replace(",", "")),
        QTY_V: parseFloat(items[7].replace("$", "").replace(",", "")),
        AMOUNT: parseFloat(items[8].replace("$", "").replace(",", "")),
    }
}

const parseEmailResponseNewFormat = (root) => {
    let h2 = root.querySelector("h2")
    let meta = new Object();
    let totals = new Object();
    let shipping = new Object();

    meta.order_number = parseInt(h2.innerText.replace("PURCHASE ORDER #", "").trim())
    let tables = root.querySelectorAll("td")
    tables = tables.filter(e => e.innerText != null)
    let result = []
    for (let td in tables) {
        result.push(tables[td].innerText.replace(/^\s+|\s+$/g, ''));
    }
    result = result.filter(str => str.length != 0)
    result = result.slice(2)

    meta.supplier = result[1]
    meta.delivery_date = result[6]
    meta.order_date = result[9]

    let shippingString = result[14].replace(/\s+/g, ' ').trim()
    shipping.address = shippingString
    shippingString = shippingString.split(' ')[3]
    shipping.suburb = shippingString


    totals.sub_total = parseFloat(result[result.length - 7].replace("$", "").replace(",", ""))
    totals.freight = parseFloat(result[result.length - 5].replace("$", "").replace(",", ""))
    totals.tax =  parseFloat(result[result.length - 3].replace("$", "").replace(",", ""))
    totals.total = parseFloat(result[result.length - 1].replace("$", "").replace(",", ""))

    lineItems = []
    for (let res in result) {
        if (result[res].includes("SKU00")) {
            console.log(res)
            lineItems.push(parseLineItem(result.slice(parseInt(res), parseInt(res) + 9)))
        }
    }
    return{meta, totals, shipping, lineItems, status: "unread"}
}


app.use(bodyParser.json({
    verify: (req, res, buf) => {
        req.rawBody = buf
    }
}))

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// The endpoint the email hits
// build multiple CRUD interfaces:
app.post('/', (req, res) => {
    functions.logger.info("Received mail, attempting to write to DB")
    root = HTMLParser.parse(req.body.html);
    //root = HTMLParser.parse(htmlToParse);
    let invoiceForFirestore = parseEmailResponse(root.childNodes[0])
    //let invoiceForFirestore = parseEmailResponseNewFormat(root)

    functions.logger.info("parsed invoice:", invoiceForFirestore)

    console.log(invoiceForFirestore)
    const docRef = firestore.collection("invoices").doc(invoiceForFirestore.meta.order_number.toString()).set(invoiceForFirestore)
        .then((docRef) => {
            console.log("Document written with ID: ", invoiceForFirestore.meta.order_number.toString());
            functions.logger.info("Successfully wrote to the DB", docRef)
            res.status(200).send("Successfully wrote email content to the database.")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            res.status(500).send("Error adding document: ", error)

        });
});


// gets orders
app.get('/orders', (req, res) => {
    functions.logger.info("Getting orders")
    let docRef = firestore.collection("invoices");
    docRef.get().then((doc) => {
        res.status(200).send(doc.docs.map(doc => doc.data()));
    }).catch((error) => {
        functions.logger.error("Error getting orders: ", error);
        res.status(500).send("Error getting orders: ", error);
    });
})

// updates an order
app.post('/orders/updateOrder', (req, res) => {
    let order = req.body
    console.log(order)
    functions.logger.info("Updating order")
    const docRef = firestore.collection("invoices").doc(order.meta.order_number.toString()).set(order)
        .then((doc) => {
            res.status(200).send("updated order " + order.meta.order_number);
            functions.logger.info("updated order " + order.meta.order_number)
        }).catch((error) => {
            functions.logger.error("Error updating order: ", error);
            res.status(500).send("Error updating order: ", error);
        });
})

// Expose Express API as a single Cloud Function:
exports.app = functions.https.onRequest(app);