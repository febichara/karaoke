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
  // Senha do painel (#painel), guardada como SHA-256 do texto em minúsculas
  // para não ficar legível no código público. Para trocar, gere o hash com:
  //   python -c "import hashlib;print(hashlib.sha256(b'novasenha').hexdigest())"
  pinPainelHash: "f6bd5f7f2f69719e7ceb4e0967eff7042b01fcaeee573ce4a88bd06bcaf5364b",
  // Quantos pedidos cada celular pode ter esperando na fila ao mesmo tempo.
  limitePorPessoa: 3,
  // Botões de reação na tela dos convidados (flutuam nos celulares e no telão).
  // Textos com mais de 3 caracteres viram letreiro em vez de emoji.
  reacoes: ["👏", "🔥", "😂", "😱", "🍻", "🍜", "🏮", "❤️", "KAMPAI!"],

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
