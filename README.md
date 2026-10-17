# Júlio John Portfolio

Portfólio de UX/UI e direção de arte para games e produtos digitais.

Site estático: um `index.html` (HTML, CSS e JavaScript sem dependências) e as imagens em `w/` (WebP).

## Publicar no GitHub Pages

1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main**, pasta **/ (root)** → Save

Em um ou dois minutos o site fica no endereço que o GitHub mostrar nessa tela.

## Usar o domínio juliojohn.com

1. Em Settings → Pages → Custom domain, digite `juliojohn.com` e salve (isso cria o arquivo `CNAME`).
2. No painel do seu domínio, aponte os registros DNS para o GitHub Pages (registros A para os IPs do GitHub e um CNAME `www` para `SEU-USUARIO.github.io`).
3. Quando o certificado sair, marque **Enforce HTTPS**.

## Editar conteúdo

Os projetos ficam no array `P` dentro do `<script>` do `index.html`: textos, resumo, legendas e lista de pranchas de cada caso.

## Projetos iFood importados

Galerias em WebP, com versões de 800 e 1600 pixels, e animação em MP4 local. As pranchas de apresentação que repetiam o resumo foram retiradas das galerias:

- Promotion Platform (4 pranchas e 1 vídeo): https://juliojohn.com/projects/DLmnyG
- 1 Year Free (3 pranchas): https://juliojohn.com/projects/4NyweY
- Consumer Loyalty (3 pranchas): https://juliojohn.com/projects/Nqb9kg

As imagens ficam em `w/` e o vídeo em `media/`.

## Rodar localmente

Com Node.js instalado, execute `node serve.cjs` nesta pasta e abra http://localhost:4173.
O servidor suporta requisições HTTP Range para avançar e retroceder nos vídeos.

## Mídia dos jogos

- TWVC: animação do personagem em MP4 local e modelo 3D interativo do Sketchfab (requer internet). Fonte: https://juliojohn.com/projects/nJmEzo
- Hack&Lock: dois vídeos de gameplay em MP4 local, ao final da galeria. Fonte: https://juliojohn.com/projects/qJdW1y
