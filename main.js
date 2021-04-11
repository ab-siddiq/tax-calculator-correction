let taxForm = document.getElementById("tax-form");
taxForm.addEventListener("submit", (e)=>{
    e.preventDefault();
})
let taxFormOutput = document.getElementById("tax-form-output");
taxForm.addEventListener("submit", (e)=>{
    e.preventDefault();
})
function taxCalculation() {
  
    let invest = getInputNumber("tax-actual-invest");
    let income = getInputNumber("tax-total-income");
    let taxableIncome = getInputNumber("tax-annual-taxable-income");
    let allowableInvestment = getInputNumber("tax-maximum-allowable-investment");
    let investAmountThree = getInputNumber("output-invest-amount-3");
    // console.log(allowableInvestment);


    let minMaximum = Math.min( taxableIncome * .25, 1500000);
    let minApplicable = Math.min( invest, minMaximum);

    document.getElementById("tax-maximum-allowable-investment").value =  minMaximum;
    document.getElementById("tax-applicable-allowable-investment").value = minApplicable;


  //output invest
    let investAmountOne = minMaximum;
    let investAmountTwo = minApplicable;
    
    let  = 0;
    let saveTaxTwo = 0;
    let saveTaxThree = 0;
    document.getElementById("output-invest-amount-1").value = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(investAmountOne) ;
    document.getElementById("output-invest-amount-2").value = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(investAmountTwo) ;
    //output save tax amount
    
  
    if (income > 1500000) {
        saveTaxOne = minMaximum * 0.1;
        document.getElementById("output-save-tax-amount-1").value =new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxOne) ;
    } else {
        saveTaxOne =  minMaximum * 0.15;
        document.getElementById("output-save-tax-amount-1").value =new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxOne);
    }
// 
    if (income > 1500000) {
        saveTaxTwo = minApplicable * 0.1;
        document.getElementById("output-save-tax-amount-2").value =new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxTwo) ;
       
    } else {
        saveTaxTwo = minApplicable * 0.15;
        document.getElementById("output-save-tax-amount-2").value =new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxTwo) ;
    }
// 
    if (income > 1500000) {
        saveTaxThree = investAmountThree * 0.1;
        document.getElementById("output-save-tax-amount-3").value =new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxThree) ;
       
    } else {
        saveTaxThree = investAmountThree * 0.15;
        document.getElementById("output-save-tax-amount-3").value =new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxThree) ;
    }

    let taxInvestOne = saveTaxOne / investAmountOne;
    let taxInvestTwo = saveTaxTwo / investAmountTwo;
    let taxInvestThree = saveTaxThree / investAmountThree;
    document.getElementById("output-tax-invest-1").value = taxInvestOne * 100 + "%";         
    document.getElementById("output-tax-invest-2").value = taxInvestTwo * 100 + "%";         
    document.getElementById("output-tax-invest-3").value = taxInvestThree * 100 + "%";
    
    let taxIncomeOne = saveTaxOne / income;
    let taxIncomeTwo = saveTaxTwo / income;
    let taxIncomeThree = saveTaxThree / income;
    document.getElementById("output-tax-total-income-1").value = taxIncomeOne * 1000 + "%";         
    document.getElementById("output-tax-total-income-2").value = taxIncomeTwo * 100 + "%";         
    document.getElementById("output-tax-total-income-3").value = taxIncomeThree * 100 + "%";         
    //output-invest-amount-
    //output-save-tax-amount-
    //output-tax-invest-
    //output-tax-total-income-
    document.getElementById("tax-summary").className += " tax-summary";
    document.querySelector('.tax-summary').innerHTML = `
        <p class="">
            Based on your annual income, if you Invest the Maximum Allowable Investment of <strong>BDT ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(minMaximum)}</strong> for tax rebate in Ekush Managed Fund, you can save <strong>BDT ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 15 }).format(saveTaxOne)}</strong> in taxes, implicitly earn <strong>${taxInvestOne}%</strong> on your investment merely through tax savings. Which is <strong>${taxIncomeOne*1000}%</strong> of your total income.
        </p>
    `

}

// function calculate(params) {
    
// }
function getInputNumber(id) {
    let inputNumber = document.getElementById(id).value;
    let parseInputNumber = parseFloat(inputNumber);
    return parseInputNumber;
}

// function taxReset() {
//     document.getElementById("tax-form").reset(); 
//     document.getElementById("tax-output").reset(); 
// }