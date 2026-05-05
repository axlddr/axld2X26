---
title: Agorapulse Social Listening
serial: 0001
---

:::header
image: img/header.png
keywords: SAAS + SOCIAL LISTENING + REFONTE
title: Agorapulse, Social Listening — Refonte d'une fonctionnalité clé pour un marché plus professionnel
serial: 001
year: 2023
company: AGORAPULSE
role: PRODUCT DESIGNER
:::

:::text-only
align: left
title: Contexte
text: Agorapulse est une **plateforme SaaS** dédiée aux gestionnaires de réseaux sociaux, facilitant la publication de contenu, la gestion des interactions et la mesure de l'impact en ligne. \n \n En 2023, Agorapulse cherchait à se **repositionner sur un marché plus professionnel**, et le Social Listening, fonctionnalité clé dans ce segment, avait besoin d'une **refonte complète** pour être à la hauteur. \n \n Sur ce projet, j'étais le seul designer, responsable de toute la chaîne : recherche, idéation, tests et UI. Je travaillais en étroite collaboration avec mon Product Manager et mon Head of Design, au sein d'une équipe produit de trois personnes.
:::

:::text-only
align: right
title: Objectifs
text: |
  Trois objectifs guidaient ce projet :
  - Réduire les **deals perdus** liés aux lacunes de l'ancien Social Listening, avec un impact direct sur le revenu
  - Rattraper les **solutions concurrentes** sur les fonctionnalités et la couverture des plateformes
  - Assurer une **bonne adoption** dès le lancement, mesurée via la satisfaction utilisateurs et les métriques d'usage
:::

:::separator
index: 01
label: Diagnostic
:::

:::margin
:::

:::image-right
image: img/before-listening-creation.png
caption: L'ancienne version, proche d'une boîte de réception — sans en avoir l'utilité
title: Pourquoi une refonte ?
text: |
  Face aux solutions concurrentes, le Social Listening d'Agorapulse montrait clairement ses limites :

  - **Couverture limitée :** uniquement les mentions directes et les hashtags Instagram, sans possibilité d'agréger les résultats entre réseaux
  - **Profondeur insuffisante :** moins de réseaux supportés, moins de données, trop peu de fonctionnalités pour répondre aux attentes d'un public professionnel
:::

:::margin
:::

:::separator
index: 03
label: RECHERCHE
:::

:::margin
:::

:::image-left
image: img/concu.png
caption: Extrait flouté de l'analyse concurrentielle — les solutions rivales offraient analyse de sentiment et recherches multi-plateformes sur un même écran
title: Analyse du marché et de la concurrence
text: |
  Pour comprendre où se situait Agorapulse dans l'écosystème, nous avons combiné plusieurs approches :
  - **Benchmark concurrentiel :** les solutions concurrentes offraient deux avantages clés absents chez nous : l'analyse de sentiment et la construction de recherches multi-plateformes sur un même écran. Ce benchmark a aussi mis en lumière des erreurs d'expérience à éviter.
  - **Étude de marché :** le State of Social Listening du Social Intelligence Lab nous a permis de mieux situer Agorapulse dans le marché et d'affiner notre positionnement.
:::


:::image-right
image: img/useflow.png
caption: Extrait du user-flow simplifié de la feature avant sa refonte
title: Compréhension des utilisateurs
text: |
  En parallèle, nous avons travaillé à mieux comprendre nos utilisateurs actuels et potentiels :
  - **Feedback existant :** analyse des retours d'utilisateurs actuels et de prospects non convertis, complétée par des échanges avec les équipes support et marketing
  - **User flows :** cartographie des parcours existants pour identifier les blocages et les limites de la solution actuelle
  - **Interviews complémentaires :** sessions avec des leads potentiels et des utilisateurs clés pour compléter et challenger nos hypothèses
:::

:::text-only
align: right
title: Besoins des utilisateurs
text: |
  Ces deux axes de recherche ont permis d'identifier quatre besoins principaux :
  - Accéder à des données précises et actionnables sur la santé de la marque
  - Produire des rapports à partir de ces données
  - Suivre les tendances de leur industrie
  - Comprendre la stratégie de leurs concurrents
  \n \n À l'issue des interviews, nous avons décidé collectivement avec le PM et le Head of Design de concentrer le MVP sur ce premier besoin. L'objectif : releaser plus rapidement et commencer à itérer avec du vrai feedback utilisateur derrière.
:::

:::margin
:::

:::separator
index: 04
label: IDÉATION
:::

:::margin
:::

:::image-right
image: img/wireframes.png
caption: Exemples de wireframes étudiés à différents stades du sprint
title: Le design sprint
text: |
  Un design sprint a été organisé avec les parties prenantes clés : Product Manager, Head of Design, Engineering Manager et Product Designer. Impliquer ces profils dès le départ a permis de trancher rapidement sur les pistes à explorer.\n \n
  Le sprint s'est articulé en trois temps :
  - **Cadrage du MVP :** définition du périmètre autour du besoin principal, la surveillance de la santé de la marque via des données précises
  - **Ateliers de conception :** 6-to-1, card sorting et explorations papier pour converger vers les pistes les plus solides
  - **Wireframing :** une fois l'arborescence validée, exploration en low-fidelity pour poser les bases de la structure des pages
:::

:::image-left
image: img/prototype.png
caption: Protocole utilisé pendant les tests d'utilisabilité
title: Tests d'utilisabilité
text: |
  Une fois une piste validée en fin de sprint, nous l'avons prototypée et testée suivant un protocole précis, en interne avec les équipes support et marketing, puis en externe avec une dizaine d'utilisateurs réels.\n \n

  Les résultats étaient solides : 8 utilisateurs sur 10 ont réussi à construire une recherche de façon autonome. Près de la moitié ont cependant bloqué sur une même fonctionnalité, ce qui nous a permis de la retravailler avant la release. Les tests ont aussi fait remonter des besoins pour les prochaines itérations :
  - Plus de données disponibles
  - La possibilité d'interagir directement avec les posts depuis l'outil
:::

:::margin
:::

:::separator
index: 05
label: Design haute fidélité
:::

:::margin
:::

:::image-right
image: img/search-views.png
caption: L'ancienne interface de création de recherche — très limitée dans ses possibilités
title: Arbitrages et décisions
text: Ce travail a aussi été l'occasion de prendre des décisions concrètes avec l'équipe. Un exemple : j'avais prévu d'inclure les "top posts" directement dans le panneau de données à gauche. \n \n En échangeant avec l'engineering, on a réalisé que l'implémentation représentait un coût disproportionné par rapport à la valeur ajoutée, d'autant qu'un workaround existait : filtrer par engagement dans la vue des items à droite couvrait le même besoin. On a coupé la fonctionnalité et gardé l'énergie pour des éléments plus impactants.
:::

:::image-left
image: img/search-builder.png
caption: Le search builder — combinaison facile de plusieurs réseaux, hashtags, mots-clés et mentions
title: Ce qui a guidé l'exécution
text: |
  Avec un design system solide en place, la phase haute fidélité a avancé rapidement, mais il s'agissait aussi de s'assurer que la fonctionnalité s'intègre sans friction dans un produit existant, tout en posant les bases d'un bon suivi post-lancement.

  - **Accessibilité :** contrastes, wording clair, lisibilité des données
  - **Design d'interaction :** absent du prototype de test, mais essentiel pour le confort d'utilisation au quotidien
  - **Cohérence produit :** alignement avec les trois autres designers travaillant en parallèle, pour conserver des structures de pages communes
  - **Instrumentation :** définition des éléments à tracker pour assurer un suivi des KPIs dès le lancement
:::

:::text-only
align: left
title: Développement et lancement
text: Le développement a démarré à la livraison des écrans, avec quelques imprévus côté APIs, notamment Twitter, qui ont allongé les délais.\n \nUne bêta fermée a précédé l'ouverture au grand public. Les retours ont permis de corriger plusieurs points bloquants et d'itérer rapidement avant la release. Par exemple, la suppression d'une étape dans le parcours de création d'une search a fait passer le taux de complétion de 30% à 80%.
:::

:::margin
:::

:::separator
index: 07
label: CONCLUSION
:::

:::metrics
- label: Deals perdus / mois
  value: 5 → 1
  index: 001
- label: Taux de complétion du parcours de création
  value: 30% → 80%
  index: 002
- label: Searches créées
  value: Croissance mois sur mois depuis le lancement
  index: 003
:::

:::margin
:::

:::text-only
align: left
title: Résultats et impact
text: |
  Quelques semaines après l'ouverture au grand public, les KPIs fixés en amont montraient des résultats encourageants :

  - **Deals perdus** liés aux lacunes du Social Listening : de 5 par mois à 1
  - **Croissance du revenu :** une augmentation constante du nombre de searches créées depuis le lancement, vendues en add-on à l'unité
:::

:::text-only
align: right
title: Conclusion
text: |
  Un projet qui m'a demandé de jongler entre recherche, cadrage stratégique et exécution, tout en maintenant un lien constant avec les utilisateurs pour rester ancré dans leurs besoins réels.\n \n

  La fonctionnalité a depuis continué d'évoluer, avec l'ajout de l'analyse de sentiment et de l'écoute des blogs et sites de news.\n \n

  Avec du recul, deux choses que je ferais différemment :
  - **Anticiper les contraintes APIs dès le cadrage**, pour éviter les imprévus en phase de développement
  - **Réduire encore le scope du MVP :** certaines fonctionnalités ont dû être coupées pendant la bêta pour tenir les délais. Partir plus petit aurait permis de lancer plus tôt et d'itérer plus vite.
:::
