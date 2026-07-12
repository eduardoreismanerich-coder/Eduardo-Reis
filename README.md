# Reino Church — Website

Site institucional da **Reino Church** (Balneário Camboriú · SC), inspirado no
estilo moderno de referência [2819church.org](https://2819church.org/): hero
escuro em tela cheia, tipografia forte e seções de rolagem limpas.

> Design original — nenhum texto ou imagem foi copiado da referência.

## Informações da igreja

- **Endereço:** Av. Marginal Oeste, 2000 — Balneário Camboriú, SC
- **Cultos:** Domingo 9h · 11h · 18h · 20h — Quinta 20h
- **E-mail:** contato@reinochurch.com
- **Redes:** [@wearereino](https://www.instagram.com/wearereino/) (Instagram · YouTube · TikTok · Facebook)

## Estrutura

```
index.html        # marcação da página
css/styles.css    # tema escuro, layout responsivo, animações
js/main.js        # navegação mobile, scroll reveal, formulário
```

## Seções

1. **Hero** — chamada principal + "Planeje sua visita"
2. **Sobre** — boas-vindas e estatísticas
3. **Horários & Localização** — grade de cultos e endereço
4. **Próximos Passos** — cartões de conexão
5. **Mensagens** — pregações em destaque
6. **Agenda** — eventos recorrentes
7. **Contribua** — chamada para generosidade
8. **Planeje sua visita** — contato + formulário
9. **Rodapé** — navegação, contato e redes sociais

## Como rodar

Site estático — abra o `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Personalização

- **Cores:** variáveis CSS em `:root` (`css/styles.css`) — o dourado `--accent`
  representa o tema "Reino".
- **Formulário:** `js/main.js` faz validação no front-end. Conecte a um serviço
  (Formspree, Netlify Forms, backend próprio) para receber os envios de verdade.
- **Mensagens/Agenda:** substitua os cartões de exemplo pelos conteúdos reais.
