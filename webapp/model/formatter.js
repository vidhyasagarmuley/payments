sap.ui.define([], function () {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit : function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        }, formatNumberIntoCurrency: function (sValue) {
            var formatter = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
            });

           return formatter.format(parseInt(sValue));
        },
        formatNatures: function (sValue) {
            let sRetrun = "";
            if (sValue) {
                switch (sValue) {
                    case 'L' :
                        sRetrun = 'Loan Partners'
                        break;
                    case 'SL' :
                        sRetrun = 'Salaries'
                        break;
                    case 'G' :
                        sRetrun = 'PayU and Razorpay'
                        break;
                    case 'E' :
                        sRetrun = 'Exports'
                        break;
                    case 'N' :
                        sRetrun = 'NACH(EE Bytes)'
                        break;
                    case 'O' :
                        sRetrun = 'Others'
                        break;   
                }
            }
            return sRetrun;
        },
        formatMonthYear : function (sValue) {
            if (sValue.length > 0) {
                return sValue.substr(0,2) + '-' + sValue.substr(2);
            }
        },
        formatDateExport: function (sValue) {
            if (sValue.length > 6) {
                return sValue.toLocaleDateString();
            } else if (sValue.length === 6) {
                return sValue.substr(0,2) + "/" + sValue.substr(2,6);
            }
        }

    };

});