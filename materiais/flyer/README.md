# Flyer ~A7 — Explicações de Matemática

Ficheiros-fonte do flyer (70 × 100 mm) para caixas de correio, feito com o Claude Design.

- `Main.dc.html` — o artboard do flyer (265 × 378 px a 96 dpi)
- `canvas.json` — layout do canvas
- `qr.svg` — QR code para https://diogoexplicacoes.web.app (gerado com o pacote npm `qrcode`)
- `folha-A4.html` — folha A4 com 8 flyers e marcas de corte, para imprimir em casa (abrir no browser → ⌘P → A4, margens *Nenhumas*, escala 100 %, gráficos de fundo ativados)
- `folha-A4.pdf` — a mesma folha já exportada

O conteúdo do flyer está duplicado em `Main.dc.html` e em `folha-A4.html` (dentro do `<template>`); ao alterar um, alterar o outro.

Canvas editável / exportação PNG-PDF: https://claude.ai/code/artifact/b91dad3d-c7fa-449d-bafb-7240ef382672
