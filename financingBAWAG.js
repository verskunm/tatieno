// script version - 3.2

financingBAWAG = new Object();
var actual_JSON;

financingBAWAG.alpha = function(amountToLoan, productCode, replacementObj) {
  // function for the lowest amount, alpha function

  var loanObj = prepareLoanObj(productCode, replacementObj);
  var printError = '';
  var processingFee;
  var otherCosts;
  var averageMaintenanceFee;
  var pymtMaintenanceFeeFreqYr = 4;
  var nominalRateDec;
  var lowestamount = 0;
  var termMonths = 60;
  var minimumInstallment;

  if (loanObj.processingFee == 0) {
    // process fee calc
    processingFee = (loanObj.processingFeePercentage / 100) * amountToLoan;
    processingFeePercent = loanObj.processingFeePercentage;
  } else {
    processingFee = loanObj.processingFee;
    processingFeePercent = (processingFee * 100) / amountToLoan;
  }

  if (loanObj.otherCosts == 0) {
    // other charges fee calc
    otherCosts = (loanObj.otherCostsPercentage / 100) * amountToLoan;
    otherCostsPercent = loanObj.otherCostsPercentage;
  } else {
    otherCosts = loanObj.otherCosts;
    otherCostsPercent = (otherCosts * 100) / amountToLoan;
  }
  nominalRateDec = loanObj.nominalRate * 0.01;
  minimumInstallment = loanObj.minimumInstallment;

  while (lowestamount < minimumInstallment) {
    averageMaintenanceFee = loanObj.accountFee * pymtMaintenanceFeeFreqYr * (termMonths / 12);
    lowestamount = PMT(nominalRateDec / 12, termMonths, amountToLoan + averageMaintenanceFee + processingFee + otherCosts, 0, true);
    if (lowestamount < minimumInstallment) {
      termMonths--;
      if (termMonths <= 0) {
        break;
      }
    }
  }
  var betaObj = financingBAWAG.beta(amountToLoan, productCode, termMonths, replacementObj);
  if (Number(betaObj.mp) < minimumInstallment && termMonths != 0 && betaObj.e == 'E400') {
    termMonths--;
    betaObj = financingBAWAG.beta(amountToLoan, productCode, termMonths, replacementObj);
  }
  var lineA = {
    lowestamount: betaObj.mp,
    months: termMonths,
    e: betaObj.e
  };
  return lineA;
};

financingBAWAG.beta = function(amountToLoan, productCode, termMonths, replacementObj) {
  // function for the loan calculator

  loadStringIncludes(); //loading polyfill implementation of string.includes if not included in browser

  var loanObj = prepareLoanObj(productCode, replacementObj);
  var repaymentDay = 1;
  var processingFee;
  var otherCosts;
  var processingFeePercent;
  var otherCostsPercent;
  var averageMaintenanceFee;
  var pymtMaintenanceFeeFreqYr = 4;
  var nominalRateDec;
  var cashflowDays = [];
  var minimumInstallment;

  var lineA = {
    //object to return in the end
    drt: 0,
    mp: 0,
    tawf: 0,
    pf: 0,
    af: 0,
    oc: 0,
    pfp: 0,
    afp: 0,
    ocp: 0,
    nr: 0,
    er: 0,
    tip: 0, // totalInterestPayments
    e: ''
  };
  if (!replacementObj) {
    if (amountToLoan == undefined || productCode == undefined || termMonths == undefined) {
      lineA.e = 'E100';
      return lineA;
    }
  }

  if (amountToLoan < loanObj.creditFrom || amountToLoan > loanObj.creditTo || typeof amountToLoan !== 'number') {
    lineA.e = 'E200';
    return lineA;
  }
  if (termMonths < loanObj.termFrom || termMonths > loanObj.termTo || typeof termMonths !== 'number') {
    lineA.e = 'E300';
    return lineA;
  }
  if (loanObj.processingFee == 0) {
    // process fee calc
    processingFee = (loanObj.processingFeePercentage / 100) * amountToLoan;
    processingFeePercent = loanObj.processingFeePercentage;
  } else {
    processingFee = loanObj.processingFee;
    processingFeePercent = (processingFee * 100) / amountToLoan;
  }

  if (loanObj.otherCosts == 0) {
    // other charges fee calc
    otherCosts = (loanObj.otherCostsPercentage / 100) * amountToLoan;
    otherCostsPercent = loanObj.otherCostsPercentage;
  } else {
    otherCosts = loanObj.otherCosts;
    otherCostsPercent = (otherCosts * 100) / amountToLoan;
  }
  nominalRateDec = loanObj.nominalRate * 0.01;
  minimumInstallment = loanObj.minimumInstallment;

  averageMaintenanceFee = loanObj.accountFee * pymtMaintenanceFeeFreqYr * (termMonths / 12);

  var monthlyInstallment = PMT(nominalRateDec / 12, termMonths, amountToLoan + averageMaintenanceFee + processingFee + otherCosts, 0, true);
  if (monthlyInstallment < minimumInstallment) {
    printError = true;
  }
  monthlyInstallment = round(monthlyInstallment, 2);

  var totalAmountToPay = monthlyInstallment * termMonths;

  lineA.drt = termMonths;
  lineA.mp = monthlyInstallment;
  lineA.tawf = totalAmountToPay;
  lineA.pf = round(processingFee, 2);
  lineA.af = round(loanObj.accountFee, 2);
  lineA.oc = round(otherCosts, 2);
  lineA.pfp = round(processingFeePercent, 2);
  lineA.ocp = round(otherCostsPercent, 4);
  lineA.nr = round(nominalRateDec * 100, 4);
  lineA.er = '';

  function calculate() {
    // function to calc the EIR, the monthly payment and the final amount
    //in Date() months go from 0 to 11, 0 being January, 11 being December
    var dateOpened = new Date();
    var dateFirstPymt = new Date(dateOpened.getFullYear(), dateOpened.getMonth() + 1, repaymentDay);
    var dateMaturity = new Date(
      dateFirstPymt.getFullYear(),
      dateFirstPymt.getMonth() + termMonths - loanObj.loanPaymentFrequency,
      dateFirstPymt.getDate()
    );
    var EOMDate;
    var newDate;

    var totalPymt = amountToLoan + processingFee + otherCosts;
    var lastPymt = totalPymt;
    var outStandingPrincipal = totalPymt;

    var repaymentAmount = monthlyInstallment;

    var LoanCashFlows = termMonths / loanObj.loanPaymentFrequency;

    var tempPaymentInterest = 0;
    var tempPaymentInterestQ = 0;
    var AccruedInterest = 0;
    var AccruedInterestQ = 0;
    var paymentInterest = 0;
    var paymentInterestQ = 0;
    dateFirstPymt = new Date(dateOpened.getFullYear(), dateOpened.getMonth(), dateOpened.getDate());

    var DailyRateI = nominalRateDec / loanObj.baseCalculation;
    var totalMaintenanceFee = 0;

    for (var i = 1; i < LoanCashFlows + 1; i++) {
      var auxMonth = dateFirstPymt.getMonth() + 1;

      if ((loanObj.accountFee > 0 || nominalRateDec > 0) && auxMonth % 3 == 0) {
        EOMDate = setEndOfMonth(dateFirstPymt, EOMDate);
        numberOfDays = setNumberOfDays(dateFirstPymt, EOMDate);
        tempPaymentInterest = lastPymt * DailyRateI * numberOfDays;
        tempPaymentInterest = round(tempPaymentInterest, 3);
        tempPaymentInterestQ = outStandingPrincipal * DailyRateI * numberOfDays;
        tempPaymentInterestQ = round(tempPaymentInterestQ, 3);
        outStandingPrincipal = outStandingPrincipal + loanObj.accountFee + AccruedInterestQ + tempPaymentInterestQ;
        lastPymt = lastPymt + loanObj.accountFee + AccruedInterest + tempPaymentInterest;
        totalMaintenanceFee += loanObj.accountFee;
        AccruedInterest = 0;
        AccruedInterestQ = 0;
      }

      newDate = calculateNextRefDate(dateFirstPymt, newDate, loanObj.loanPaymentFrequency, 'M', repaymentDay);

      if (tempPaymentInterest > 0) {
        numberOfDays = setNumberOfDays(EOMDate, newDate);
        paymentInterest = lastPymt * DailyRateI * numberOfDays;
        paymentInterestQ = outStandingPrincipal * DailyRateI * numberOfDays;
      } else {
        numberOfDays = setNumberOfDays(dateFirstPymt, newDate);
        paymentInterest = lastPymt * DailyRateI * numberOfDays;
        paymentInterestQ = outStandingPrincipal * DailyRateI * numberOfDays;
      }

      tempPaymentInterest = 0;
      tempPaymentInterestQ = 0;
      AccruedInterest += paymentInterest;
      AccruedInterestQ += paymentInterestQ;

      if (i == LoanCashFlows) {
        lastPymt = lastPymt + AccruedInterest + loanObj.accountFee;
        lastPymt = round(lastPymt, 2);
        outStandingPrincipal = outStandingPrincipal + AccruedInterestQ + loanObj.accountFee;
        totalMaintenanceFee += loanObj.accountFee;
      } else {
        lastPymt = lastPymt - repaymentAmount;
        lastPymt = round(lastPymt, 2);
      }
      cashflowDays.push(setNumberOfDays(dateOpened, newDate));
      dateFirstPymt = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
    }
    var finalQuota = lastPymt;
    var remainderFinalQuota = finalQuota - repaymentAmount;
    var remainderQ = outStandingPrincipal;
    var algorithmicQuota = round((repaymentAmount * remainderQ) / (remainderQ - remainderFinalQuota), 2);
    var totalInstallment = 0;
    var diffLastInstallment = 0;
    var adjustedAlgorithmicQuota;
    var finalTotalPymt = 0;

    if (lineA.nr == 0) {
      for (i = 1; i < LoanCashFlows + 1; i++) {
        totalInstallment += algorithmicQuota;
      }

      if (totalInstallment != amountToLoan + lineA.pf + totalMaintenanceFee + otherCosts) {
        diffLastInstallment = amountToLoan + lineA.pf + totalMaintenanceFee + otherCosts - totalInstallment;

        adjustedAlgorithmicQuota = algorithmicQuota + diffLastInstallment;

        totalInstallment = totalInstallment + diffLastInstallment;
      }
    }

    var vnXXX = 0;
    var vnPRVAUX = 0;
    var vnAUX = 1 + nominalRateDec / loanObj.methodCalculation;
    var vnAVERAGE = nominalRateDec;
    var vnSUP = 1;
    var vnINF = 0;

    while (true) {
      vnXXX = 0;
      vnXXX = vnXXX + -totalPymt / Math.pow(vnAUX, 0);
      vnXXX = vnXXX + (processingFee + otherCosts / Math.pow(vnAUX, 0));
      for (var i = 0; i < LoanCashFlows; i++) {
        if (adjustedAlgorithmicQuota && i == LoanCashFlows - 1) {
          vnXXX = vnXXX + adjustedAlgorithmicQuota / Math.pow(vnAUX, cashflowDays[i]);
          continue;
        }
        vnXXX = vnXXX + algorithmicQuota / Math.pow(vnAUX, cashflowDays[i]);
      }

      vnPRVAUX = round(vnPRVAUX, 8);
      vnAUX = round(vnAUX, 8);

      if (vnPRVAUX == vnAUX) {
        break;
      } else {
        if (vnXXX <= 0.001 && vnXXX >= -0.001) {
          break;
        } else {
          if (vnXXX > 0) {
            vnINF = vnAVERAGE;
          }
          if (vnXXX < 0) {
            vnSUP = vnAVERAGE;
          }
          vnPRVAUX = vnAUX;
          vnAVERAGE = (vnINF + vnSUP) / 2;
          vnAUX = 1 + vnAVERAGE / loanObj.methodCalculation;
        }
      }
    }

    var EIR = (Math.pow(vnAUX, loanObj.methodCalculation) - 1) * 100;
    if (nominalRateDec < 0.001) {
      finalTotalPymt = amountToLoan + processingFee + totalMaintenanceFee + otherCosts;
    } else {
      finalTotalPymt = algorithmicQuota * termMonths;
    }
    lineA.er = round(EIR, 2);
    lineA.mp = round(algorithmicQuota, 2);
    lineA.tmf = round(totalMaintenanceFee, 2);
    lineA.tawf = round(finalTotalPymt, 2);
  }

  calculate();
  lineA.tip = round(lineA.tawf - amountToLoan - lineA.tmf - lineA.pf - lineA.oc, 2);
  if (lineA.mp < minimumInstallment) {
    lineA.e = 'E400';
  }
  return map(lineA, replacementObj);
};

//FUNCTIONS______________________________________

function prepareLoanObj(productCode, replacementObj) {
  var loanObj;

  if (!replacementObj) {
    var lineA = {
      //object to return in the end
      drt: 0,
      mp: 0,
      tawf: 0,
      pf: 0,
      af: 0,
      oc: 0,
      pfp: 0,
      afp: 0,
      ocp: 0,
      nr: 0,
      er: 0,
      tip: 0, // totalInterestPayments
      e: ''
    };

    if (productCode != 'S170' && productCode != 'S171') {
      lineA.e = 'E500';
      return lineA;
    }

    if (!actual_JSON) {
      loadJSON(function(response) {
        // Parse JSON string into object
        actual_JSON = JSON.parse(response);
      });
    }

    var selectedProductParams = actual_JSON[productCode].loanProductConfig;

    loanObj = {
      // Object created based on json file
      nominalRate: selectedProductParams.nominalInterestRate === 0 ? 0.00001 : selectedProductParams.nominalInterestRate,
      creditFrom: selectedProductParams.minAmount,
      creditTo: selectedProductParams.maxAmount,
      termFrom: selectedProductParams.minTermInMonths,
      termTo: selectedProductParams.maxTermInMonths,
      accountFee: selectedProductParams.maintenanceFeeAbsoluteAmount,
      processingFee: selectedProductParams.openingFee.absoluteAmount,
      processingFeePercentage: selectedProductParams.openingFee.percentage,
      otherCosts: selectedProductParams.otherCosts.absoluteAmount,
      otherCostsPercentage: selectedProductParams.otherCosts.percentage,
      minimumInstallment: selectedProductParams.minInstallmentAmount,
      loanPaymentFrequency: selectedProductParams.loanPaymentFrequency,
      baseCalculation: selectedProductParams.baseCalculation,
      methodCalculation: selectedProductParams.methodCalculation
    };
  }

  if (replacementObj) {
    loanObj = {
      // Object created based on json file
      nominalRate: replacementObj.nominalInterestRate === 0 ? 0.00001 : replacementObj.nominalInterestRate,
      creditFrom: replacementObj.minAmount,
      creditTo: replacementObj.maxAmount,
      termFrom: replacementObj.minTermInMonths,
      termTo: replacementObj.maxTermInMonths,
      accountFee: replacementObj.maintenanceFeeAbsoluteAmount,
      processingFee: replacementObj.openingFee.absoluteAmount,
      processingFeePercentage: replacementObj.openingFee.percentage,
      otherCosts: replacementObj.otherCosts.absoluteAmount,
      otherCostsPercentage: replacementObj.otherCosts.percentage,
      minimumInstallment: replacementObj.minInstallmentAmount,
      loanPaymentFrequency: replacementObj.loanPaymentFrequency,
      baseCalculation: replacementObj.baseCalculation,
      methodCalculation: replacementObj.methodCalculation
    };
  }

  return loanObj;
}

function map(objToMap, replacementObj) {
  if (!replacementObj) {
    Object.keys(objToMap).map(function(key, index) {
      if (typeof objToMap[key] === 'number' && index !== 0) {
        objToMap[key] = objToMap[key].toFixed(2);
      }
    });
  }

  return objToMap;
}

function loadStringIncludes() {
  if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      value: function(search, start) {
        if (typeof start !== 'number') {
          start = 0;
        }

        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      }
    });
  }
}

function round(num, scale) {
  if (!('' + num).includes('e')) {
    return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
  } else {
    var arr = ('' + num).split('e');
    var sig = '';
    if (+arr[1] + scale > 0) {
      sig = '+';
    }
    return +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e-' + scale);
  }
}

function setNumberOfDays(dt1, dt2) {
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
}

function setEndOfMonth(date1) {
  //in Date() months go from 0 to 11, 0 being January, 11 being December
  var year = date1.getFullYear();
  var month = date1.getMonth();
  var day = date1.getDate();
  if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    return new Date(year, month, day + 31 - day);
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return new Date(year, month, day + 30 - day);
  } else if (month == 1) {
    if (year % 4 == 0 && (year % 100 == 0 || year % 400 == 0)) {
      return new Date(year, month, day + 29 - day);
    } else {
      return new Date(year, month, day + 28 - day);
    }
  }
}

function calculateNextRefDate(date1, date2, rpymtFrequency, periods, rpymtDay) {
  if (rpymtFrequency == 0) {
    date2 = date1;
  } else {
    if (periods === 'M') {
      date2 = new Date(date1.getFullYear(), date1.getMonth() + rpymtFrequency, rpymtDay);
    } else if (periods === 'D') {
      date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + rpymtFrequency);
    } else {
      date2 = new Date(Date1.getFullYear() + rpymtFrequency, date1.getMonth(), date1.getDate());
    }
  }
  return date2;
}

function PMT(ir, np, pv, fv, type) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;

  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return pmt * -1;
}

function loadJSON(callback) {
  var fileName = 'financingBAWAG';
  var scripts = document.getElementsByTagName('script');
  var src;
  for (var i = 0; i < scripts.length; i++) {
    if (new RegExp('\\b' + fileName + '\\b').test(scripts[i].src)) {
      src = scripts[i].src
        .split('/')
        .slice(0, -1)
        .join('/');
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType('application/json');
      xobj.open('GET', src + '/config.json', false);
      xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == '200') {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
      };
      xobj.send(null);
    }
  }
}
