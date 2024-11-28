const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const imputValue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e){
  e.preventDefault();
  

if(!imputValue.value || imputValue.value < 0) {
  alert('Informe um valor');
  return;
} else if(!selectCurrency.value){
  alert('Escolha uma moeda')
  return;
}
function valueConverter(){
  if(selectCurrency.value === 'euro'){
    
  }
}
  


};
//Aula 