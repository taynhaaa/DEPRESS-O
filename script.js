// Exemplo básico de dados
const destinos = {
    1: { nome: 'Nárnia', preco: 50 },
    2: { nome: 'Hogwarts', preco: 75 },
    3: { nome: 'Grand Line', preco: 300},
    4: { nome: 'Pousada Sekizenkan', preco: 40},
    5: {nome: 'oi', preco: 10},

  };
  
  const horarios = {
    morning: 'Manhã',
    afternoon: 'Tarde',
    evening: 'Noite',
  };
  
  function atualizarMensagemPersonalizada() {
    const destinoSelecionado = document.getElementById('destino').value;
    const mensagemPersonalizada = destinos[destinoSelecionado]?.mensagem || 'Mensagem padrão de boas-vindas.';
    alert(mensagemPersonalizada);
  }
  
  function comprarPassagem() {
    const destinoSelecionado = document.getElementById('destino').value;
    const horarioSelecionado = document.getElementById('horario').value;
    const saldoCliente = parseFloat(document.getElementById('saldo').value);
  
    if (!destinos[destinoSelecionado] || !horarios[horarioSelecionado]) {
      alert('Destino ou horário inválido!');
      return;
    }
  
    const precoPassagem = destinos[destinoSelecionado].preco;
  
    if (saldoCliente >= precoPassagem) {
      alert(`Passagem comprada para ${destinos[destinoSelecionado].nome} no horário da ${horarios[horarioSelecionado]}.`);
    } else {
      alert('Saldo insuficiente para comprar a passagem.');
    }
  }


