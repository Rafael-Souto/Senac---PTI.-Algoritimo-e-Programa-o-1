// Cálculo para saber se é mais vantajoso abastecer o veículo com álcool ou gasolina

var gas, alc, resul, res = 's';

// Laço de repetição (for), repetirá enquanto a resposta do usuário for 's'
for(resul = 0; res == 's'; resul++){
  alert("SIMULAÇÃO DE QUAL A MELHOR OPÇÃO PARA ABASTECER SEU VEÍCULO.\n");
  do{
    alc = parseFloat(prompt("Insira o preço do álcool R$"));
  } while (alc < 0);
    do{
      gas = parseFloat(prompt("Insira o preço da gasolina R$"));
    } while (gas < 0);
  resul = parseFloat(alc / gas);
    alert("Resultado: " + resul.toFixed(2));

  // Estrutura if-else para cálcular qual o combustível mais vantajoso  
  if(resul < 0.7){
    alert("\nConsiderando o preço do álcool e da gasolina por litro. \nÉ mais vantajoso abastecer com álcool.\n ");
  } else if(resul > 0.7){
      alert("\nConsiderando o preço do álcool e da gasolina por litro. \nÉ mais vantajoso abastecer com gasolina.\n "); 
    } else {
        alert("\nConsiderando o preço do álcool e da gasolina por litro. \nTanto faz abastecer com álcool ou gasolina.\n "); 
}

  // Decisão do usuário se quer fazer um novo cálculo ou encerrar o programa
  res = prompt("Desejá fazer um novo cálculo? Digite s para sim e n para não");

  console.clear();
}
  if(res == 'n'){
    alert("Simulação encerrada.");
}