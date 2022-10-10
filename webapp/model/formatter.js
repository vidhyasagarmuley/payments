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
                    case 'DM' :
                        sRetrun = 'Direct Material'
                        break;
                    case 'SL' :
                        sRetrun = 'Salaries'
                        break;
                    case 'TX' :
                        sRetrun = 'Taxes'
                        break;
                    case 'RT' :
                        sRetrun = 'Rent'
                        break;
                    case 'AD' :
                        sRetrun = 'Advertisement'
                        break;
                    case 'OA' :
                        sRetrun = 'Other Investments'
                        break;   
                    case 'TA' :
                        sRetrun = 'Transport / Accommodation'
                        break;   
                    case 'BT' :
                        sRetrun = 'BTC'
                        break;   
                    case 'OT' :
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
        },
        getOustandingAmount: function (exp, pay) {
            if (exp) {
                if (!pay) {
                    pay = 0;
                } else {
                    pay = parseFloat(pay);
                }
                return (parseFloat(exp) - pay).toFixed(2);
            }
        }

    };

});