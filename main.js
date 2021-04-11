let taxForm = document.getElementById("tax-form");
taxForm.addEventListener("submit", (e)=>{
    e.preventDefault();
})
let taxFormOutput = document.getElementById("tax-form-output");
taxForm.addEventListener("submit", (e)=>{
    e.preventDefault();
})
function taxCalculation() {
    // const nameInput = getInputNumber("tax-name-input");
    // console.log(nameInput);
    console.log("clicked");
    let invest = getInputNumber("tax-actual-invest");
    let income = getInputNumber("tax-total-income");
    let taxableIncome = getInputNumber("tax-annual-taxable-income");
    let allowableInvestment = getInputNumber("tax-maximum-allowable-investment");
    // console.log(allowableInvestment);

    let minValue = Math.min(invest, taxableIncome * .25, 1500000);

    document.getElementById("tax-maximum-allowable-investment").value = minValue;
    document.getElementById("output-actual-invest-unit-fund").value = invest;

    let outputSaveTaxUnitFund = getInputNumber("output-save-tax-unit-fund");
    
    let outputSaveTaxDPS = getInputNumber("output-save-tax-dps");

    let outputActualInvestUnitFund = getInputNumber("output-actual-invest-unit-fund");
    let outputActualInvestDPS = getInputNumber("output-actual-invest-dps");

    document.getElementById("output-actual-invest-dps").value = outputActualInvestUnitFund;
    document.getElementById("output-maximum-investment-unit-fund").value = minValue;

    let saveTaxUnit = 0;
    let saveTaxDPS = 0;
    let outputMaximumInvestUnitFund = getInputNumber("output-maximum-investment-unit-fund");
    let outputMaximumInvestDPS = getInputNumber("output-maximum-investment-dps");
  
    if (income > 1500000) {
        saveTaxUnit = outputMaximumInvestUnitFund * .1;
        saveTaxDPS = outputMaximumInvestDPS * .1;
        console.log("if", saveTax);
        document.getElementById("output-save-tax-unit-fund").value = saveTax;
        document.getElementById("output-save-tax-dps").value = saveTaxDPS;
    } else {
        saveTaxUnit = outputMaximumInvestUnitFund * .15;
        saveTaxDPS = outputMaximumInvestDPS * .15;
        console.log("else", saveTaxUnit);
        document.getElementById("output-save-tax-unit-fund").value = saveTaxUnit;
        document.getElementById("output-save-tax-dps").value = saveTaxDPS;
    }

   
    let calculateTaxUnit = Math.ceil((saveTaxUnit / outputActualInvestUnitFund)*100);
    let calculateTaxDPS = Math.ceil((saveTaxDPS / outputActualInvestUnitFund)*100);
   
    console.log(calculateTaxUnit, calculateTaxDPS);
    document.getElementById("output-return-tax-unit-fund").value =calculateTaxUnit+"%";
    document.getElementById("output-return-tax-dps").value =calculateTaxDPS+"%";

    document.getElementById("max-allowable-investment").innerHTML = outputMaximumInvestUnitFund; 
    document.getElementById("ekus-unit-fund").innerHTML = saveTaxUnit; 
    document.getElementById("implicitly-earn").innerHTML = calculateTaxUnit+"%"; 
    


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