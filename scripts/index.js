

const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const customTipInput = document.getElementById('custom-tip');
const tipContainer = document.querySelector(".tip-buttons");
const tipButtons = document.querySelectorAll('.tip-button');
const resetButton = document.getElementById('reset-button')

// * Get Values

let selectedTip = 0;
      

const handleInputChange = (e) => {
      const { id, value } = e.target;
      const parsedValue = value === '' ? 0 : parseFloat(value);
      const parsedIntValue = value === '' ? 0 : parseInt(value);


      if (id === 'bill') console.log("bill:" , parsedValue);
      if (id === 'people') console.log("number of people", parseInt(value) || 0);
      if (id === 'custom-tip') { 
            selectedTip = parsedIntValue;
            console.log('Custom Tip:', selectedTip);
            
      }

} 


tipContainer.addEventListener("click", (e) => {
      if(e.target.classList.contains("tip-button")) {
            selectedTip = parseInt(e.target.dataset.tip);
            console.log('selected tip %:', selectedTip);
            
      }
})



resetButton.addEventListener("click", () => {
      [billInput, peopleInput, customTipInput].forEach(input => input.value = "");
      selectedTip = 0;
      console.log("Values Reset");
  });
  
  
  
document.addEventListener("input", handleInputChange);



const tipCalculator = () => {
      const billValue = parseFloat( billInput.value || 0 );
      const peopleValue = parseInt( peopleInput.value || 1 );
      const tipPercentage = selectedTip / 100;


      let billPerPerson = billValue / peopleValue;
      let tipAmountPerPerson = billPerPerson * tipPercentage;
      let totalPerPerson = tipAmountPerPerson + billPerPerson;

      document.getElementById('tip-amount').innerText = `$${tipAmountPerPerson.toFixed(2)}`
      document.getElementById('tip-total').innerText = `$${totalPerPerson.toFixed(2)}`
}

document.addEventListener('input', tipCalculator);
document.addEventListener('click', tipCalculator);


