// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const HTMLParser = require('node-html-parser');

let htmlToParseNewFormat = `<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<style type="text/css">
    td {
        FONT-WEIGHT: 300;
        FONT-SIZE: 8PT;
        FONT-FAMILY: verdana;
    }

    body {
        FONT-WEIGHT: 300;
        FONT-SIZE: 8PT;
        FONT-FAMILY: verdana;
    }</style>
<link rel="stylesheet" href="../print.css" type="text/css" media="print">
<body>
<b></b><br>
<center>
    <h2>PURCHASE ORDER # 390269</h2>
</center>
<table width="100%">
    <tr>
        <td align="right">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>

                        <table border="0" cellpadding="0" cellspacing="0" id="table5">
                            <tr>
                                <td align="right"><b>Supplier :</b>
                                <td> CATERBAKE LIMITED</td>
                            </tr>
                            <tr>
                                <td align="right"><b>Supplier GST:</b>
                                <td> 132-475-758</td>
                            </tr>
                            <tr>
                                <td align="right"><b>Supplier INV# :</b>
                                <td></td>
                            </tr>
                            <tr>
                                <td align="right"><b>Delivery Date :</b>
                                <td> 22-06-2021</td>
                            </tr>
                            <tr>
                                <td align="right"><b>Stock Receive Date :</b>
                                <td></td>
                            </tr>
                            <tr>
                                <td align="right"><b>Order Date :</b></td>
                                <td>18-06-2021 08:44</td>
                            </tr>
                        </table>

                    </td>
                    <td align="right" valign="bottom">


                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td height="5" bgcolor="#4B748D">
            <p></td>
    </tr>
</table>
<br>
<table border="0" width="100%" id="table6">
    <tr>
        <td>
            <table border="0" width="100%" id="table7" cellspacing="0" cellpadding="0">
                <tr>
                    <td><b>Supplier</b></td>
                    <td><b>Bill To:</b></td>
                    <td width="388"><b>Ship To:</b></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td width="388"></td>
                </tr>
                <tr>
                    <td rowspan="8" valign="top">CATERBAKE LIMITED<p>562 Richmond Road
                        <br>Grey Lynn
                        <br>Auckland 1021
                        <br>
                        <br>Phone:
                        <br>Fax:
                        <br></td>
                    <td>Farro Fresh Food Ltd</td>
                    <td valign="top" width="388" rowspan="8">446 Manukau Road
                        <br>Epsom
                        <br>
                        <br>New Zealand
                        <br></td>
                </tr>
                <tr>
                    <td>Farro Fresh Food</td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td>Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Fax:
                    </td>
                </tr>
            </table>
        </td>
    </tr>

</table>
<br><!-- ******** Variable to use ********* -->
<!-- @@PO_NUMBER, @@PURCHASE_TYPE, @@TODAY_DATE, @@SUPPLIER_ID, @@SUPPLIER_NAME, @@SUPPLIER_NO, @@INVOICE_DATE, @@PO_NUMBER -->
<!-- *** Shipping/Billing Address *** @@COMPANY_NAME, @@TRADING_NAME,@@NAME, @@CONTACT, @@ADDR1,  @@ADDR2,@ADDR3,@@COUNTRY,@@PHONE,@@FAX,@@EMAIL,@@COMMENTS,@@STAFF, @@SHIPPTO -->
<!-- *** Supplier Details *** @@SUPPLIER_NAME, @@SUPPLIER_ADDRESS --><!-- ******** END HERE ********* -->
<table width="100%" cellpadding="0" cellspacing="0">
    <tr>
        <td></td>
    </tr>
    <tr>
        <td nowrap="">CODE &nbsp;</td>
        <td width="130">PART#</td>
        <td width="60%">DESCRIPTION</td>
        <td nowrap="" aligh="center">VOLUME</td>
        <td nowrap="" aligh="center">UNIT</td>
        <td nowrap="" aligh="center">PRICE</td>
        <td nowrap="" align="center" title="Ordered">QTY_O</td>
        <td nowrap="" align="center" title="Received">QTY_R</td>
        <td nowrap="" align="center" title="Variant">QTY_V</td>
        <td nowrap="" align="center">AMOUNT</td>
    </tr>
    <tr>
        <td colspan="10">
            <hr>
        </td>
    </tr>
    <tr>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td nowrap="">SKU003</td>
        <td nowrap="">Bake n Break Tofu Cheeseburger Slider Tray</td>
        <td nowrap="">650</td>
        <td nowrap="">g</td>
        <td nowrap="">$17.75</td>
        <td nowrap="" align="center">3</td>
        <td nowrap="" align="center">0</td>
        <td nowrap="" align="center">0</td>
        <td nowrap="" align="right">$53.25</td>
    <tr>
        <td>&nbsp;</td>
        <td nowrap="">SKU002</td>
        <td nowrap="">Bake n Break BBQ Burger Slider Tray</td>
        <td nowrap="">700</td>
        <td nowrap="">g</td>
        <td nowrap="">$17.75</td>
        <td nowrap="" align="center">3</td>
        <td nowrap="" align="center">0</td>
        <td nowrap="" align="center">0</td>
        <td nowrap="" align="right">$53.25</td>
    <tr>
        <td>&nbsp;</td>
        <td nowrap="">SKU001</td>
        <td nowrap="">Bake n Break Cheese Burger Slider Tray</td>
        <td nowrap="">600</td>
        <td nowrap="">g</td>
        <td nowrap="">$17.75</td>
        <td nowrap="" align="center">3</td>
        <td nowrap="" align="center">0</td>
        <td nowrap="" align="center">0</td>
        <td nowrap="" align="right">$53.25</td>
    <tr>
        <td colspan="10">
            <hr>
        </td>
    </tr>
    <tr>
        <td valign="top" colspan="9" align="right"><b>SubTotal(NZD) : </b></td>
        <td align="right"><b>$159.75</b></td>
    </tr>
    <tr>
        <td valign="top" colspan="9" align="right"><b>Freight(NZD) : </b></td>
        <td align="right"><b>$0.00</b></td>
    </tr>
    <tr>
        <td valign="top" colspan="9" align="right"><b>Tax(NZD) : </b></td>
        <td align="right"><b>$23.96</b></td>
    </tr>
    <tr>
        <td valign="top" colspan="9" align="right"><b>Total(NZD) : </b></td>
        <td align="right"><b>$183.71</b></td>
    </tr>
</table>
</td></tr>
<tr>
    <td></td>
</tr>
</table><p>Ordered by: jimmy.whyte@farro.co.nz &nbsp; Email : jimmy.whyte@farro.co.nz</p>
<p>Received by: &nbsp; Email : </p>
<p>Approved by: __________</p>

<p>Closed by: <font color="red"></font></p>
<p>Closed time:<font color="red"></font></p>
Order Comments:
<br>
Receive Comments:


<br><br>
<p class="print" align="right"><input type="button" value="Dispatch Information"
                                      onClick="window.open('purchase.aspx?n=&amp;da=1&amp;ssid=44365.3625396181','my','resizable=yes, width=600, height=500,scrollbars')"><input
        type="button" value="&nbsp;Print Out&nbsp;" onClick="window.print()"><input type="button" value="Close Window"
                                                                                    onClick="window.close()"></p></body>
</html>`


const path = require('path');
const  EmlParser = require('eml-parser');
const  fs = require('fs');



// meta
// delivery_date
// "07-09-2021"
// order_date
// "05-09-2021 13:01"
// order_number
// 417266
// stock_receive_date
// ""
// supplier
// "CATERBAKE LIMITED"
// supplier_gst
// "132-475-758"
// supplier_inv
// ""

function parseSuburb(shippingString) {
    if(shippingString.includes("Orakei")){
        return "Orakei"
    }
    else if(shippingString.includes("Mt Eden")){
        return "Mt Eden"
    } else if(shippingString.includes("Grey Lynn")){
        return "Grey Lynn"
    }else if(shippingString.includes("Lunn")){
        return "Lunn ave"
    }else if(shippingString.includes("Mairangi")){
        return "Mairangi Bay"
    }else if(shippingString.includes("Epsom")){
        return "Epsom"
    }
}

//todo parse the dat
const parseEmailResponseNewFormat = (root) => {
    let h2 = root.querySelector("h2")
    let meta = new Object();
    let totals = new Object();
    let shipping = new Object();

    meta.order_number = parseInt(h2.innerText.replace("PURCHASE ORDER #", "").trim())
    let tables = root.querySelectorAll("td")
    tables = tables.filter(e => e.innerText != null)
    let result = []
    for(let td in tables){
        result.push(tables[td].innerText.replace(/^\s+|\s+$/g, ''));
    }
    result = result.filter(str => str.length !=0)
    result = result.slice(2)

    meta.supplier = result[1]
    meta.delivery_date = result[6]
    meta.order_date = result[9]

    let shippingString = result[14].replace(/\s+/g, ' ').trim()
    shipping.address = shippingString
    shipping.suburb = parseSuburb(shippingString)



    totals.sub_total = parseFloat(result[result.length - 7].replace("$", "").replace(",", ""))
    totals.freight = parseFloat(result[result.length - 5].replace("$", "").replace(",", ""))
    totals.tax =  parseFloat(result[result.length - 3].replace("$", "").replace(",", ""))
    totals.total = parseFloat(result[result.length - 1].replace("$", "").replace(",", ""))

    lineItems = []
    for (let res in result){
        if(result[res].includes("SKU00")){
            console.log(res)
            lineItems.push(parseLineItem(result.slice(parseInt(res), parseInt(res) + 9)))
        }
    }
    console.log({meta, totals, shipping, lineItems, status: "archived"})
    return {meta, totals, shipping, lineItems, status: "archived"}
}

const convertEmlToHtml =(file) =>{
    return new EmlParser(fs.createReadStream(path.join( '../emails/', file)))
        .parseEml()
        .then(result  => {
            return result.html
        })
        .catch(err  => {
            console.log(err);
        })
}

const postOrder = (order) =>{
    api.post("/orders/updateOrder", order).then((res)=>{
        // console.log(res)
    }).catch((error)=>{
        console.log("ERRORING", error)
    })
}
const axios = require('axios')

const api = axios.create({
    baseURL: 'https://us-central1-bake-n-break.cloudfunctions.net/app',
    timeout: 10000,
});

//joining path of directory
const directoryPath = path.join(__dirname, '../emails');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        convertEmlToHtml(file).then(html => {
            let root = HTMLParser.parse(html);
            let invoiceForFirestore = parseEmailResponseNewFormat(root)
            postOrder(invoiceForFirestore)
        })
    });
});



function parseLineItem(items){
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

// totals
// freight
// 0
// sub_total
// 319.5
// tax
// 47.93
// total
// AMOUNT
// 53.25
// CODE
// " "
// DESCRIPTION
// "Bake n Break Tofu Cheeseburger Slider Tray"
// PART
// "SKU003"
// PRICE
// 17.75
// QTY_O
// 3
// QTY_R
// 0
// QTY_V
// 0
// UNIT
// "g"
// VOLUME