'use strict';

// Update the following variables with your own values
const apiKey = '';
const userId = '';
const vendorId = '';

document.addEventListener("DOMContentLoaded", function () {
    window.grailpay.init({
        containerId: "widget-container",
        vendorId: vendorId,
        userId: userId,
        token: apiKey,
        onSuccess: (props) => {
            console.log('GrailPay.onSuccess', props);
        },
        onError: (error) => {
            console.log( "GrailPay.onError", error)
        },
        onClose: (data) => {
            console.log( "GrailPay.onClose", data)

            let responseContainer = document.getElementById('response-container');
            if( responseContainer ){
                responseContainer.innerHTML = `AccountId: ${data.accountId}`
            }
        },
    }).then((res) => {
        if( res.status === 200 ){
            console.log( "GrailPay Banklink Widget initialized successfully")
        }
    }).catch(err => console.log(err, 'err'))
        .finally(() => {
        });

    const payButton = document.getElementById('pay-button');
    if( payButton ){
        payButton.addEventListener('click', function () {
            window.grailpay.open();
        });
    }
});
