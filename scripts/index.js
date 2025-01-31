

const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const customTipInput = document.getElementById('custom-tip');
const tipContainer = document.querySelector(".tip-buttons");
const tipButtons = document.querySelectorAll('.tip-button');
const resetButton = document.getElementById('reset-button');
const errorMessage = document.querySelector('.error-msg');

// * Get Values

let selectedTip = 0;
      

const handleInputChange = (e) => {
      const { id, value } = e.target;
      const parsedValue = value === '' ? 0 : parseFloat(value);
      const parsedIntValue = value === '' ? 0 : parseInt(value);


      if (id === 'custom-tip') { 
            selectedTip = parsedIntValue;  
      }

      if (id === 'people') {
            e.target.classList.remove('green-border', 'error-border');

        if (parsedValue === 0) {
            e.target.classList.add('error-border');
            errorMessage.classList.remove('hidden');
            

        } else if (parsedValue !== '') {
            e.target.classList.add('green-border');
            errorMessage.classList.add('hidden');
      }
      }
} 


tipContainer.addEventListener("click", (e) => {
      if(e.target.classList.contains("tip-button")) {
            selectedTip = parseInt(e.target.dataset.tip);   
      }

     tipButtons.forEach(btn => btn.classList.remove('active'));
     e.target.classList.add('active');

});







resetButton.addEventListener("click", () => {
      [billInput, peopleInput, customTipInput].forEach(input => input.value = "");
      selectedTip = 0;
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


