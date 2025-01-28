
// * Control form

const splitterForm = document.querySelector('.splitter-form');
const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');


// * Control buttons

const tipButtons = document.querySelectorAll('.tip-button');




// * Calculate results

tipButtons.forEach(button => {
      button.addEventListener('click', () => {
            tipButtons.forEach(button => {
                  button.classList.remove('active');
            });
            button.classList.add('active');
            customTipInput.value = '';
      });
});

const tipButtonSelected = document.querySelector('.active')

tipButtonSelected.addEventListener('click', () => {
      customTipInput.value = '';

      const tipValue = parseInt(tipButtonSelected.value);
      console.log(tipValue);
      
});


splitterForm.addEventListener('input', () => {

      const billValue = parseFloat(billInput.value);

      if (customTipInput.value <= 0 || customTipInput.value >= 100) {
            customTipInput.value = '';
      }
      
      const customPercentTipValue = parseInt(customTipInput.value);
      const peopleValue = parseInt(peopleInput.value);


})




// * Reset form & results

const resetButton = document.getElementById('reset-button');

const resetForm = () => {

      billInput.value = '';
      customTipInput.value = '';
      peopleInput.value = '';

      tipButtons.forEach(button => {
            button.classList.remove('active');
      });
}

const resetResults = () => {}

resetButton.addEventListener('click', resetForm);
resetButton.addEventListener('click', resetResults);