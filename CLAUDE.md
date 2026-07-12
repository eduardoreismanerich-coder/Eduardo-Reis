# Preferências do projeto

## Geração de imagens

- **Sempre que o usuário pedir para gerar uma nova imagem, use o Magnific** (ferramentas `mcp__Magnific__*`), não outra ferramenta.
- **Modelo padrão: Google Nano Banana 2 (Flash)** — slug `imagen-nano-banana-2-flash`.
  - Passe `imagen-nano-banana-2-flash` como modelo na chamada `images_generate`.
- Só troque de modelo se o usuário pedir explicitamente. Exceções úteis quando ele indicar a necessidade:
  - **Nano Banana Pro** (`imagen-nano-banana-2`) — máxima fidelidade (produto, personagem, marca, assets finais).
  - **Recraft V4.1** — text-to-image puro, sem referências.
  - **GPT 2** — texto legível, infográfico, UI, diagrama.
- Antes de gerações pagas, confira o saldo com `account_balance` se relevante.
- Após gerar, siga o campo `instruction` da resposta; para preview inline chame `creations_show`.
