# OBA: AOBA · Karaokê

Fila de músicas do karaokê da festa OBA: AOBA (San-San-San), 26.09.26.
Os convidados pedem música pelo celular (nome + música + link do YouTube
opcional) e quem comanda a máquina chama a próxima pelo painel.

- **Convidados:** abrem o endereço do site ou o QR code que aparece no painel.
  Cada celular pode ter até 3 pedidos esperando (`limitePorPessoa` no `config.js`)
  e pode cancelar os próprios.
- **Painel:** mesmo endereço com `#painel` no final, senha conferida contra `pinPainelHash`.
  "Chamar próxima" marca a atual como cantada e abre o vídeo no YouTube
  (ou uma busca "<música> karaoke", quando o pedido veio sem link).
  Dá para subir/descer, pôr para cantar agora ou tirar da fila.
- Cada pedido ganha um dos 8 pôsteres da festa (`img/posters/`), em sequência.

## Onde as coisas estão

- **Fila:** Firebase Realtime Database, projeto "Karaoke Oba Aoba"
  (`karaoke-oba-aoba-default-rtdb.firebaseio.com`, us-central1). O site só
  precisa do `databaseURL`, que está no `config.js`. As regras publicadas lá são
  as de `regras-firebase.json`.
- **Site:** GitHub Pages, publicado da branch `main`. Para mudar algo, editar e
  dar push; o Pages atualiza em cerca de um minuto.
- Sem `FIREBASE` no `config.js` o site roda em modo demonstração (fila só no
  navegador).

## Limites (é uma festa, não um banco)

- A senha do painel fica no `config.js` como hash SHA-256 (não aparece em
  texto), mas ela só esconde a tela: as regras do Firebase deixam qualquer
  pessoa com o endereço escrever na fila. Tudo bem para uma noite.
- O "seu pedido" é reconhecido pelo navegador do celular. Se a pessoa trocar de
  navegador ou abrir em aba anônima, não consegue cancelar o pedido antigo; o
  painel consegue.

## Depois da festa

Apagar o projeto no Firebase, ou trocar as regras para
`{"rules": {".read": false, ".write": false}}`.
