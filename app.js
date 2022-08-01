// https://calculator.swiftutors.com/perpetuity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const presentValueofPerpetuityRadio = document.getElementById('presentValueofPerpetuityRadio');
const dividendCouponperPeriodRadio = document.getElementById('dividendCouponperPeriodRadio');
const discountRateRadio = document.getElementById('discountRateRadio');

let presentValueofPerpetuity;
let dividendCouponperPeriod = v1;
let discountRate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

presentValueofPerpetuityRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend/Coupon per Period ($)';
  variable2.textContent = 'Discount Rate (%)';
  dividendCouponperPeriod = v1;
  discountRate = v2;
  result.textContent = '';
});

dividendCouponperPeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Present Value of Perpetuity ($)';
  variable2.textContent = 'Discount Rate (%)';
  presentValueofPerpetuity = v1;
  discountRate = v2;
  result.textContent = '';
});

discountRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Present Value of Perpetuity ($)';
  variable2.textContent = 'Dividend/Coupon per Period ($)';
  presentValueofPerpetuity = v1;
  dividendCouponperPeriod = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(presentValueofPerpetuityRadio.checked)
    result.textContent = `Present Value of Perpetuity = ${computePresentValueofPerpetuity().toFixed(2)} $`;

  else if(dividendCouponperPeriodRadio.checked)
    result.textContent = `Dividend/Coupon per Period = ${computeDividendCouponperPeriod().toFixed(2)} $`;

  else if(discountRateRadio.checked)
    result.textContent = `Discount Rate = ${computeDiscountRate().toFixed(2)} %`;
})

// calculation

function computePresentValueofPerpetuity() {
  return Number(dividendCouponperPeriod.value) / (Number(discountRate.value) / 100);
}

function computeDividendCouponperPeriod() {
  return Number(presentValueofPerpetuity.value) * (Number(discountRate.value) / 100);
}

function computeDiscountRate() {
  return (Number(dividendCouponperPeriod.value) / Number(presentValueofPerpetuity.value)) * 100;
}