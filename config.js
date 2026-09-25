// Configuração da fila do karaokê.
//
// Enquanto FIREBASE estiver null, o site roda em "modo demonstração":
// a fila fica só neste navegador (serve para testar, não para a festa).
// Para a festa, cole aqui o objeto firebaseConfig do seu projeto Firebase
// (veja o LEIAME.md).

window.KARAOKE_CONFIG = {
  titulo: "OBA: AOBA",
  subtitulo: "SAN · SAN · SAN",
  data: "26.09.26",
  assinatura: "Bicharina 🎌 Kampai!",
  // Senha simples para abrir o painel de quem comanda a máquina (#painel).
  pinPainel: "bolinho",
  // Quantos pedidos cada celular pode ter esperando na fila ao mesmo tempo.
  limitePorPessoa: 3,

  // Projeto "Karaoke Oba Aoba". Para o Realtime Database sem login basta o endereço.
  FIREBASE: {
    databaseURL: "https://karaoke-oba-aoba-default-rtdb.firebaseio.com",
  },
  // Formato completo, caso um dia precise:
  // FIREBASE: {
  //   apiKey: "...",
  //   authDomain: "....firebaseapp.com",
  //   databaseURL: "https://...-default-rtdb.firebaseio.com",
  //   projectId: "...",
  //   appId: "...",
  // },
};
