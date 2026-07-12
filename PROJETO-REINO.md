# Projeto — Site da Reino (Balneário Camboriú)

> Documento de memória do projeto. Reúne tudo que foi definido e validado até aqui,
> para retomar o trabalho sem perder contexto nem repetir erros.
> Última atualização desta sessão: julho/2026.

---

## 1. Onde está tudo
- **Repositório:** `eduardoreismanerich-coder/Eduardo-Reis`
- **Branch de trabalho:** `claude/igreja-reino-website-qnahfl`
- **Arquivos do site:**
  - `index.html` — página principal (home, uma página com âncoras)
  - `fe.html` — página completa da Declaração de Fé (32 artigos)
  - `css/styles.css` — estilos
  - `js/main.js` — nav mobile, scroll reveal, formulário, índice da Declaração
  - `assets/img/` — fotos (fachada, comunidade, mensagens, família pastoral) + versões `_s` (leves, usadas no preview)
  - `.nojekyll` — para publicação em GitHub Pages
- **Link de teste (Artifact, privado):** https://claude.ai/code/artifact/8dfe5dce-7f1e-4191-8fce-ad45eb75a96e
  - É gerado juntando `index.html` + `fe.html` num arquivo só (fotos embutidas). No preview a Declaração fica na âncora `#declaracao`.
- **Ainda NÃO publicado no ar** (a pedido). Quando quiser: GitHub Pages ou Netlify/Vercel.

---

## 2. Fatos oficiais — VALIDADOS pelo pastor/equipe (não errar)
- **Nome de uso no site:** "a Reino" / "Reino". **NUNCA "Reino Church"** (regra do briefing).
- **Fundação:** 2021.
- **Endereço:** Av. Marginal Oeste, 2000 — Bairro dos Municípios, Balneário Camboriú, SC.
- **Reuniões de domingo (4):** **9h · 11h · 18h · 20h**
  - 9h e 11h = **manhã**; 18h = **tarde**; 20h = **noite**.
  - A das 9h **não** é "internacional" — é reunião normal como as outras.
- **Durante a semana:** apenas **Escola de Oração (terça e quinta)**.
  - Mulheres (quarta) e DNA (sábado): **removidos por enquanto** (não entram).
- **Campi (Praia Brava, Medianeira) e outras igrejas:** **fora do site por enquanto**.
- **Liderança:** Pr. **Eduardo Reis** (titular) e Pra. **Ana Pricila** · filhos **Lorenzo, Luca e Enrico**.
  - ⚠️ A foto solo da moça loira que foi enviada **não é a Pra. Ana** — não usar como pastora.
- **Contato/redes:** contato@reinochurch.com · Instagram/YouTube/TikTok/Facebook **@wearereino**.

---

## 3. Identidade visual (Brandbook 2026)
- **Paleta pastel Céu/Areia/Mar** (do início ao fim — sem áreas escuras/pretas):
  - Céu: `#D0E6F1` `#B5D4DE` `#ACCCD7`
  - Areia: `#EEEAE0` `#E5DCCC` `#DBCFBA`
  - Mar: `#C2D9D8` `#AFCECD` `#A7C4C3`
  - Tinta (texto): `#141414` · acento sage: `#6f9b9a`
- **Tipografia:** Neue Haas Grotesk (paga). No site usa-se fallback fiel (Helvetica Neue / Inter). Se conseguirem a fonte licenciada, embutir para fidelidade 100%.
- **Logo:** o "R" na elipse (ⓡ) = grão de mostarda. No hero usa-se o motivo de **arcos** do círculo (a "capa Reino Style" preferida).
- **Capa/hero preferido:** arcos + wordmark **"we are reino."** + assinatura **"vivendo o ordinário de forma extraordinária"** (nada de "reino × religião" no hero).
- **Estética:** editorial, minimalista, **muito respiro**, tipografia grande, sem ícones extras (só tipografia). Fotos tratadas com um leve véu pastel unificado.

---

## 4. Linguagem e cultura (fiel ao Guia de Cultura da Reino)
Usar as frases da Reino, claras e "de site", sem "igrejês" e sem gírias soltas.
- **Frases da casa:** "não somos uma religião, somos um estilo de vida" · "não somos igreja porque fazemos coisas, somos igreja porque estamos juntos" · "conectamos pessoas com pessoas, e pessoas com a presença de Jesus" · "servir é um privilégio" · "contribuir é nosso privilégio" · "crianças são a igreja de hoje e os líderes do futuro" · "vivendo o ordinário de forma extraordinária" · "pertencer antes de crer" · "filho, não escravo".
- **Substituições de vocabulário:** culto → **reunião**; ministérios → **equipes**; altar/púlpito → **palco**; Santa Ceia → **ceia**; obreiros/diáconos → **voluntários**; doutrina → **cultura**; casa do Senhor → **prédio da Reino**.
- **Tom ao falar com a comunidade:** "Queridos", "Povo da Reino", "Voluntários". **Não** usar "família", "pessoal", "irmãos".
- **Belong · Believe · Become** (pertencer · acreditar · se tornar) é parte da identidade — **manter** a seção.
- **Gramática/ortografia:** cuidado com maiúsculas de "Deus", "Cristo", "Espírito"; evitar excesso de travessões (—) no corpo do texto.

---

## 5. Estrutura atual do site (home)
Hero (arcos + we are reino) → Fachada (faixa) → Manifesto ("não somos uma religião...") →
Jornada (belong/believe/become) → Reuniões & Localização → Planeje sua visita (o que esperar + formulário) →
Comunidade (galeria de fotos reais) → Liderança (família pastoral) → Conecte-se (grupos, voluntários, Recap, Movimento Epiphany/Amanhecer) →
Mensagens (3 pregações reais do YouTube) → Eventos → No que cremos (link para a Declaração) → Contribuir (4 pilares) → Contato → Rodapé (3 blocos).

**Declaração de Fé (`fe.html`):** Prólogo + 32 artigos em 11 partes (cada um com texto e base bíblica) + Doxologia, com índice fixo lateral. Títulos das partes com capitalização correta (sem minúsculo forçado).

---

## 6. Movimentos / submarcas conhecidos (referência)
Recap (adolescentes) · Movimento Epiphany → evento **Amanhecer** (Praia Central) · Reino Kids · Reino Style (RNO/RNO.C) · Reino Hub · Reino Publishing · Fragmentos · RNO energy.
(Só usar no site o que for confirmado; hoje só Recap e Epiphany aparecem em "Conecte-se/Eventos".)

---

## 7. Pendências / próximos passos
- [ ] Confirmar se a programação da semana muda (hoje: só Escola de Oração ter/qui).
- [ ] Trocar/adicionar **mais fotos** quando houver (adoração/worship, Amanhecer na praia, Reino Kids). Enviar os arquivos no chat (o Google Drive não é acessível automaticamente).
- [ ] Foto real da **Pra. Ana Pricila** (se quiserem, entra na Liderança).
- [ ] **Fonte Neue Haas Grotesk** licenciada (fidelidade 100%).
- [ ] **Formulário** "Planeje sua visita": conectar a um serviço real (Formspree/Netlify Forms) — hoje é só front-end.
- [ ] **Publicar no ar** (quando pedirem): GitHub Pages (`Settings → Pages → branch → /root`) ou Netlify/Vercel (permite domínio próprio).
- [ ] Possíveis páginas dedicadas futuras: Sobre, Mensagens, Eventos (hoje são seções na home).

---

## 8. Como pré-visualizar localmente
```bash
python3 -m http.server 8000
# abrir http://localhost:8000  (home)  e  http://localhost:8000/fe.html  (Declaração)
```
