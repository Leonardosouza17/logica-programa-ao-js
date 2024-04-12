function converteTemperatura() {
  const temperatura = parseFloat(prompt('Digite a temperatura'));

  if (isNaN(temperatura)) {
    return alert('Por favor, digite um número válido para a temperatura.');
  }

  const escalaAtual = prompt('Informe a unidade de temperatura atual (C, F, K)').toLowerCase();
  const escalaAlvo = prompt('Informe para qual escala você deseja converter (C, F, K)').toLowerCase();

  let temperaturaConvertida;

  switch (escalaAtual) {
    case 'c':
      temperaturaConvertida = (escalaAlvo === 'f') ? (temperatura * 9 / 5) + 32 :
        (escalaAlvo === 'k') ? temperatura + 273.15 : temperatura;
      break;
    case 'f':
      temperaturaConvertida = (escalaAlvo === 'c') ? (temperatura - 32) * 5 / 9 :
        (escalaAlvo === 'k') ? (temperatura + 459.67) * 5 / 9 : temperatura;
      break;
    case 'k':
      temperaturaConvertida = (escalaAlvo === 'c') ? temperatura - 273.15 :
        (escalaAlvo === 'f') ? temperatura * 9 / 5 - 459.67 : temperatura;
      break;
    default:
      return alert('Unidade de temperatura atual não reconhecida. Use "C", "F" ou "K".');
  }

  alert(`Temperatura convertida: ${temperaturaConvertida.toFixed(2)} ${escalaAlvo.toUpperCase()}`);
}

converteTemperatura();