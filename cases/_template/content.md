---
title: Titre du case study
serial: 0000
---

<!-- ════════════════════════════════════════════════════════════════════
     TEMPLATE — dupliquer ce fichier dans cases/mon-projet/content.md
     Supprimer les blocs inutilisés. Le texte en dehors des ::: est du
     markdown standard (titres, paragraphes, listes, gras, italique).
     ════════════════════════════════════════════════════════════════════ -->


<!-- ── HEADER ── obligatoire, toujours en premier ── -->
:::header
image: img/hero.png
keywords: MOT CLÉ + MOT CLÉ + MOT CLÉ
title: Titre complet du case study pour le header
serial: 0001
year: 2023
company: NOM CLIENT
role: PRODUCT DESIGNER
:::


<!-- ── SEPARATOR ── barre sombre de section ── -->
:::separator
index: 01
label: CONTEXTE
:::


<!-- ── TEXT ONLY ── bloc texte positionné à gauche ou à droite ── -->
:::text-only
align: left
title: Titre de section
text: Texte de description. Rester sur une seule ligne ici — pour du texte long ou multi-paragraphes, utiliser du markdown standard entre les blocs.
:::

:::text-only
align: right
title: Titre de section
text: Texte de description, positionné sur le tiers droit de la page.
:::


<!-- ── MARGIN ── espace vide de 80px ── -->
:::margin
:::


<!-- ── IMAGE RIGHT ── texte à gauche, image à droite ── -->
:::image-right
image: img/screen-01.png
caption: Légende sous l'image (optionnelle)
title: Titre de la section
text: Description courte de ce que montre l'image.
:::


<!-- ── IMAGE LEFT ── image à gauche, texte à droite ── -->
:::image-left
image: img/screen-02.png
caption: Légende sous l'image (optionnelle)
title: Titre de la section
text: Description courte de ce que montre l'image.
:::


<!-- ── IMAGE FULL ── image pleine largeur ── -->
:::image-full
image: img/screen-03.png
caption: Légende sous l'image (optionnelle)
:::


<!-- ── METRICS ── 3 colonnes rose, format liste YAML ── -->
:::metrics
- label: Libellé de la métrique
  value: Avant → Après
  index: 001
- label: Libellé de la métrique
  value: Avant → Après
  index: 002
- label: Libellé de la métrique
  value: Avant → Après
  index: 003
:::


<!-- ── MARKDOWN STANDARD ── entre les blocs, texte libre ── -->

## Titre en markdown

Paragraphe normal avec **gras** et *italique*. Ce contenu est rendu dans un
bloc `.cs-prose` avec largeur contrainte et espacement automatique.
