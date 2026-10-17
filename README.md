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

## Explorações visuais (branch `explorations/visual-polish`)

`explore.html` lista três direções de interface com o mesmo conteúdo: `explore-a.html` (Signal), `explore-b.html` (Ambient) e `explore-c.html` (HUD). Elas não substituem o `index.html`; servem para comparar antes de escolher o que levar para o site. As páginas têm `noindex`.
