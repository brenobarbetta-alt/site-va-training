# VA Training Performance — Documento do Projeto

> Este documento reúne o briefing original da empresa e o registro de tudo que foi desenvolvido, decidido e implementado no site até o momento. Serve como referência para edições futuras, onboarding de novos colaboradores e continuidade do projeto.

**Última atualização:** Junho de 2026  
**Repositório:** github.com/brenobarbetta-alt/site-va-training  
**Status atual:** Site desenvolvido, publicação pendente

---

## Parte 1 — Briefing da empresa

### 1.1. Sobre a empresa

Nome: **VA Training Performance**

A VA Training é um estúdio/academia voltado para treinamentos direcionados, específicos e individualizados, com foco em saúde, prevenção, reabilitação, qualidade de vida e performance.

A empresa é especializada na aplicação de exercícios físicos para prevenção e tratamento de doenças crônicas, acompanhamento fisiológico de atletas e prescrição de treinamentos personalizados.

**Biografia do Instagram:**
> Especializado em exercícios físicos para tratamento de doenças e acompanhamento fisiológico de atletas.

**Outras descrições utilizadas:**
- Um estúdio especializado na aplicação de exercícios físicos para prevenção e tratamento de doenças crônicas.
- Avaliação física, com testes personalizados, para diferentes objetivos.
- Programas de prevenção e tratamento de lesões.
- Treinamento de força e mobilidade específicos para diferentes esportes.
- Atendimento para crianças e adultos.

**Objetivo do site:** Transmitir profissionalismo, autoridade científica, confiança, modernidade e acolhimento. Funciona como página de apresentação compartilhada via Instagram, Facebook e WhatsApp para converter visitas em contato direto.

---

### 1.2. Localização

**Rua Manoel Andrade, 55 — Empresarial Manoel Gomes Mendonça, Sala 9C — Pituba, Salvador, Bahia, Brasil.**

---

### 1.3. Contatos

| Pessoa | Telefone | WhatsApp |
|--------|----------|----------|
| Valter (fundador) | (71) 91577100 | https://wa.me/557191577100 |
| Breno | (71) 992933460 | https://wa.me/5571992933460 |

**E-mail:** professor@valterabrantes.com

**Regras de contato:**
- Não apresentar preços no site.
- Não criar formulário de contato — o contato é sempre por botão direto.
- CTAs utilizados: "Fale com a VA Training", "Agende uma conversa", "Solicitar avaliação", "Entrar em contato pelo WhatsApp".

---

### 1.4. Público-alvo

- Pessoas com doenças crônicas (diabetes, hipertensão, cardiopatologias);
- Pessoas em reabilitação pós-lesão;
- Pessoas que buscam qualidade de vida e envelhecimento ativo;
- Atletas amadores e profissionais;
- Corredores de rua;
- Pessoas que buscam avaliação física e fisiológica baseada em dados;
- Crianças e adultos com necessidade de acompanhamento individualizado.

A linguagem deve ser clara, humana, profissional e acessível. Transmitir base científica sem parecer excessivamente técnica.

---

### 1.5. Serviços

#### Treinamento para saúde e doenças crônicas
Exercícios direcionados para diabetes, hipertensão, cardiopatologias, reabilitação pós-lesão, prevenção de lesões, mobilidade, fortalecimento, condicionamento e qualidade de vida.

#### Avaliação física e fisiológica
Avaliação corporal, dobras cutâneas, bioimpedância, relatórios de composição corporal, análise de risco de sarcopenia, avaliação de força com dinamômetros, relatórios com insights e recomendações, acompanhamento de performance.

#### Prescrição de treinamentos online
Treinamentos preventivos para modalidades esportivas, musculação, corrida de rua, treinamento de força, mobilidade, exercícios específicos por esporte, acompanhamento individualizado.

---

### 1.6. Equipe

#### Fundador — Valter Abrantes Pereira da Silva
Instagram: **@vatrainingoficial**

Mestre em Educação Física. Doutorado em andamento em Medicina e Saúde pela UFBA. Fisiologista e Coordenador Científico com atuação em Esporte Clube Vitória, Chapecoense e Kashima Antlers (Japão). CEO da VA Training Performance, referência em ciência da performance esportiva. Profissional de Educação Física com trajetória acadêmica e prática nas Ciências da Saúde, mais de 20 anos de experiência docente, atuação em avaliação, reabilitação, saúde e alto rendimento.

#### Co-fundador — Breno Barbetta Pereira da Silva
Instagram: **@_brenobarbetta**

Bacharel em Educação Física pela Faculdade de Ciências e Tecnologias de Salvador. Estagiário no setor de Fisiologia/Sport Science do Esporte Clube Bahia (2022–2024). Analista de Dados das Categorias de Base do Esporte Clube Bahia (2024–2025.1). Atualmente Assistente de Fisiologia do time profissional do Esporte Clube Bahia SAF.

#### Equipe de Professores

| Nome | Instagram | CREF |
|------|-----------|------|
| Felipe Santana | @fesantanatrainer | A preencher |
| Deise Oliveira | @prof.deisee_oliveir | A preencher |
| Rê Guimarães | @personalreguimaraes | A preencher |

---

### 1.7. Estilo visual desejado

- Claro, clean, moderno, profissional, elegante, fluido;
- Sem poluição visual, sem animações exageradas;
- Fundo claro (branco ou off-white) com hero escuro;
- Tipografia moderna e legível;
- Boa hierarquia visual com espaçamento generoso;
- Layout responsivo e mobile-first.

**Restrições:**
- Não apresentar preços;
- Não criar formulário de contato;
- Não usar linguagem apelativa;
- Não exagerar em promessas de resultado;
- Não inventar informações não fornecidas;
- Não transformar o site em estética fitness genérica.

---

## Parte 2 — O que foi implementado

### 2.1. Stack técnica

O site é uma **aplicação estática one-page** sem frameworks ou dependências de build. Arquivos:

```
index.html       — toda a estrutura HTML
css/styles.css   — todos os estilos
js/main.js       — todos os comportamentos
assets/          — logos e imagens
```

**Fontes:** Google Fonts — Inter (corpo) + Oswald (títulos)  
**Ícones:** SVG inline (sem biblioteca externa)  
**Animações:** CSS transitions + Intersection Observer API  
**Sem:** React, Vue, Bootstrap, jQuery, Tailwind.

---

### 2.2. Decisões de design implementadas

#### Paleta de cores (CSS custom properties)

```css
--bg: #ffffff          /* fundo geral */
--bg2: #f4f6f3         /* fundo alternado (seções pares) */
--bg-dark: #1a1d1e     /* hero e CTA final */
--bg-dark2: #212629    /* gradiente do hero */
--card: #ffffff        /* fundo dos cards */
--border: #e2e6e0      /* bordas sutis */
--text: #1a1d1e        /* texto principal */
--muted: #687075       /* texto secundário */
--green: #8dc63f       /* verde principal da marca */
--green2: #a4d952      /* verde claro (hovers) */
--green-dim: rgba(141,198,63,.10)  /* verde translúcido (fundos) */
```

#### Tipografia

```css
--fhead: 'Oswald', 'Arial Black', sans-serif   /* títulos */
--fbody: 'Inter', system-ui, sans-serif         /* corpo */
```

#### Estratégia de header/logo

O header tem dois estados visuais:
- **Estado escuro** (sobre o hero): fundo transparente, logo com texto branco (`logo-horizontal.png`)
- **Estado claro** (ao rolar para baixo): fundo branco com sombra, logo com texto escuro (`logo-performance.jpg`)

A transição é controlada por JavaScript via `classList.toggle('light', isLight)` e troca dinâmica do `img.src`.

---

### 2.3. Estrutura de seções implementada

| ID | Título | Descrição |
|----|--------|-----------|
| `#inicio` | Hero | Logo escudo, headline, subtítulo, dois CTAs |
| `#sobre` | Sobre a VA Training | Descrição da empresa e proposta |
| `#para-quem` | Para quem é | Cards dos perfis atendidos |
| `#servicos` | Serviços | 8 cards de serviços com ícones SVG |
| `#diferenciais` | Diferenciais | Blocos com os diferenciais da empresa |
| `#avaliacoes` | Avaliações e Relatórios | Seção específica de avaliação fisiológica |
| `#equipe` | Equipe de Professores | Fundador em destaque, co-fundador, professores |
| `#contato` | Fale com a VA Training | CTA final com dois botões WhatsApp + endereço |
| — | Rodapé | Logo, dados de contato, direitos reservados |

---

### 2.4. Arquivos de logo e seu uso

| Arquivo | Onde é usado | Contexto |
|---------|-------------|----------|
| `assets/logo-horizontal.png` | Header (estado escuro) + Footer | Logo com fundo escuro |
| `assets/logo-performance.jpg` | Header (estado claro — após rolar) | Logo com fundo branco |
| `assets/logo-shield.png` | Hero section | Escudo da marca |

**Como substituir uma logo:** basta sobrescrever o arquivo com o mesmo nome. O browser fará cache — se a imagem não atualizar, adicione `?v=3` (incrementando) no final da referência no HTML.

---

### 2.5. Comportamentos JavaScript

- **Logo swap:** troca automática ao rolar além do hero
- **Navegação ativa:** link do menu recebe classe `.active` conforme a seção visível
- **Menu mobile:** hamburger toggle com fechamento ao clicar em link
- **Reveal ao scroll:** elementos com classe `.reveal` aparecem suavemente com Intersection Observer; irmãos ganham delay escalonado de 80ms cada
- **WhatsApp flutuante:** botão no canto inferior direito expande dois contatos (Valter e Breno)

---

### 2.6. Estrutura de pastas

```
Site VA Training/
├── index.html              ← página principal
├── css/
│   └── styles.css          ← todos os estilos
├── js/
│   └── main.js             ← todos os comportamentos
├── assets/
│   ├── logo-horizontal.png ← logo horizontal (fundo escuro, usado no header escuro e footer)
│   ├── logo-performance.jpg← logo horizontal (fundo branco, usado no header claro)
│   ├── logo-shield.png     ← escudo da marca (hero)
│   └── fotos/              ← pasta para fotos dos professores e estúdio
├── docs/
│   └── briefing.md         ← este documento
└── .claude/
    └── launch.json         ← config do servidor de desenvolvimento local
```

#### Onde colocar fotos futuras
- **Fotos dos professores:** `assets/fotos/nome-do-professor.jpg`
- **Fotos do estúdio:** `assets/fotos/estudio-01.jpg`, etc.
- Após adicionar, referenciar no `index.html` dentro do card do professor correspondente

---

### 2.7. Como rodar o site localmente

O servidor de desenvolvimento usa Python (já instalado na máquina):

```bash
# No terminal, dentro da pasta do projeto:
python -m http.server 3000
```

Depois abra: `http://localhost:3000`

A configuração está salva em `.claude/launch.json` para uso via Claude Code.

---

### 2.8. GitHub e versionamento

- **Conta GitHub:** brenobarbetta-alt
- **Repositório:** site-va-training
- **Branch principal:** master

Cada conjunto de alterações deve ser salvo com um commit:

```bash
git add index.html css/styles.css
git commit -m "feat: adiciona foto dos professores"
git push origin master
```

O GitHub não publica o site automaticamente — isso é feito via Vercel (ver seção 3.2).

---

## Parte 3 — Próximos passos

### 3.1. Itens pendentes

- [ ] **CREF dos professores** — preencher no `index.html` nos campos `<span class="membro-cref">CREF: </span>` de Felipe Santana, Deise Oliveira e Rê Guimarães
- [ ] **Foto de Valter** — adicionar em `assets/fotos/valter.jpg` e referenciar no card do fundador
- [ ] **Foto de Breno** — adicionar em `assets/fotos/breno.jpg` e referenciar no card
- [ ] **Fotos dos professores** — idem para Felipe, Deise e Rê
- [ ] **Fotos do estúdio** — para usar em seções futuras ou como background
- [ ] **Logos sem fundo** — remover o fundo das logos usando Canva, Remove.bg ou Photoshop para obter versões PNG transparentes; substituir os arquivos na pasta `assets/`

### 3.2. Como publicar o site (Vercel)

1. Acesse vercel.com e crie uma conta gratuita (pode entrar com o GitHub)
2. Clique em **"Add New Project"**
3. Conecte o repositório `site-va-training` do GitHub
4. Deixe todas as configurações padrão — o Vercel detecta automaticamente que é um site estático
5. Clique em **Deploy**
6. O site ficará disponível em um endereço como `site-va-training.vercel.app`

A cada novo `git push origin master`, o Vercel republica o site automaticamente.

### 3.3. Como adicionar um domínio personalizado

Se você já tem um domínio (ex: vatraining.com.br):
1. No painel do Vercel, vá em **Settings → Domains**
2. Adicione o domínio e siga as instruções para apontar os DNS

Se não tem domínio ainda:
- **registro.br** — para domínios `.com.br` (aprox. R$ 40/ano)
- **Namecheap** ou **GoDaddy** — para domínios `.com` (aprox. US$ 12/ano)

Após registrar, aponte o DNS para o Vercel conforme as instruções do painel.

---

## Parte 4 — Como fazer edições comuns

### Alterar um texto
Abra `index.html` e localize o trecho pelo conteúdo. Edite diretamente o texto entre as tags HTML.

### Adicionar foto de um professor
1. Coloque a foto em `assets/fotos/nome.jpg`
2. No `index.html`, localize o card do professor (procure pelo nome)
3. Substitua o elemento de iniciais (`.membro-avatar`) por uma tag `<img src="assets/fotos/nome.jpg" alt="Nome">`

### Adicionar um novo professor
1. Copie um bloco `<div class="membro-card">` existente no `index.html`
2. Troque nome, Instagram, CREF e foto

### Alterar as logos
Substitua o arquivo em `assets/` mantendo o mesmo nome. Se o browser mostrar a versão antiga, adicione `?v=X` (incrementando o número) ao final do `src` da imagem no HTML.

### Alterar cores
As cores estão centralizadas no topo de `css/styles.css` nas variáveis `:root { ... }`. Altere apenas ali — o resto do CSS usa as variáveis automaticamente.

---

*Documento mantido por Breno Barbetta — brenobarbetta@gmail.com*
