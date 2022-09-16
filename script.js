//load modal
$(window).on('load', function () {
    $('#staticBackdrop').modal('show');
});

//fetch from json file
fetch('file.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        //transaction details
        document.getElementById("amount").innerHTML += '₹' + data.transactionamount;
        document.getElementById("date0").innerHTML += String(new Date(data.transactiondate)).slice(4, 21);

        //sender details
        document.getElementById("sender").innerHTML += data.senderDetails.sender;
        document.getElementById("bankdetails").innerHTML += data.senderDetails.bank + ', IFSC ' + data.senderDetails.IFSC;
        document.getElementById("acnumber").innerHTML += 'A/c No. ' + data.senderDetails.accountno;
        document.getElementById("date1").innerHTML += String(new Date(data.senderDetails.transactiondate)).slice(4, 21);

        //reciever details
        document.getElementById("reciever").innerHTML += data.recieverDetails.reciever;
        document.getElementById("wallet").innerHTML += data.recieverDetails.wallet;
        document.getElementById("refnumber").innerHTML += 'Ref No. ' + data.recieverDetails.referenceno;
        document.getElementById("date2").innerHTML += String(new Date(data.recieverDetails.transactiondate)).slice(4, 21);

        //payment method
        document.getElementById("paymethod").innerHTML += 'Payment Method: ' + '<span style="color: #CCCDCC">' + data.paymentmethod + "</span>";
        document.getElementById("tranid").innerHTML += 'Transaction ID: ' + '<span style="color: #CCCDCC">' + data.transactionId + "</span> &nbsp";

    })