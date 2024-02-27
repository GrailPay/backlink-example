'use strict';

// Update the following variables with your own values
const apiKey = ''; //Add Api Key here
const userId = ''; // Add your user ID here
const vendorId = ''; // Add your vendor ID here

document.addEventListener('DOMContentLoaded', function () {
    const payButton = document.getElementById('pay-button');

    if (payButton) {
        payButton.disabled = true;

        window.grailpay.init({
            containerId: 'widget-container',
            vendorId: vendorId,
            userId: userId,
            token: apiKey,
            onError: function (error) {
                console.log('GrailPay.onError', error);
            },
            onClose: function (data) {
                console.log('GrailPay.onClose', data);
                let responseContainer = document.getElementById('response-container');

                if (responseContainer) {
                    responseContainer.innerHTML = data?.accountId ? `AccountId: ${data.accountId}` : '';
                }
            }
        }).then(function (res) {
            if (res.status === 200) {
                payButton.disabled = false;
                console.log('GrailPay Banklink Widget initialized successfully');
            }
        }).catch(function (err) {
            console.log(err, 'Error initializing GrailPay Banklink Widget');
        });

        payButton.addEventListener('click', function () {
            window.grailpay.open();
        });
    }
});