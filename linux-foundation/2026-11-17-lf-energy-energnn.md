# LF Energy — EnerGNN : Graph Neural Networks pour les réseaux électriques

- **Date de veille :** 17 novembre 2026
- **Date de l'atelier annoncée :** 18 novembre 2026
- **Source primaire :** https://lfenergy.org/events/ai-for-real-life-and-full-scale-power-grid-operations-using-energnn-a-hands-on-approach/
- **Organisateurs cités :** LF Energy / RTE
- **Statut :** fiche de veille ; lab et meetup proposés, non réalisés
- **Vérification :** éléments repris de la veille du 17 novembre ; la date de publication initiale de la page n'est pas confirmée. Les détails techniques sont à recontrôler sur les ressources officielles avant toute expérimentation.

## Faits vérifiés dans la veille
LF Energy présente un atelier technique animé par RTE consacré à **EnerGNN**, projet open source utilisant des réseaux neuronaux sur graphes pour des problèmes liés aux réseaux électriques. L'atelier annonce une prise en main via notebook Python ; les technologies citées sont JAX et Flax, avec une possibilité d'import depuis PowSyBl. Aucune participation OSEF n'est confirmée.

## 1. Ce qui change
Un atelier pratique permet d'explorer EnerGNN et de comprendre son fonctionnement. Il ne s'agit ni d'une nouvelle version publiée le 17 novembre ni d'un nouveau projet lancé ce jour-là.

## 2. Intérêt pour l’Afrique francophone
Les équipes énergie, data et IA peuvent étudier l'usage de modèles sur graphes dans un contexte d'infrastructure critique. Les performances, les besoins matériels, la qualité des données et l'adéquation aux réseaux africains ne sont pas démontrés et doivent être évalués.

## 3. Action OSEF
Qualifier le projet et préparer un essai pédagogique en environnement isolé. **Livrable :** note d'architecture avec dépendances, procédure de reproduction, métriques et pistes de contribution. Aucun déploiement opérationnel prévu.

## 4. Lab à construire
**Sujet proposé :** LAB-ENERGY-AI-001 — Première expérimentation EnerGNN.
- **Objectif :** exécuter et évaluer un modèle de graphe sur un réseau électrique synthétique.
- **Prérequis :** Git, Python, notions de graphes et de ML, environnement compatible avec les dépendances du projet (notamment JAX).
- **Étapes :** examiner le dépôt et sa licence ; fixer les versions ; préparer des données synthétiques ; exécuter le notebook officiel ou une adaptation documentée ; mesurer et publier les résultats.
- **Critère de succès :** un deuxième ingénieur reproduit le scénario et les métriques sur un environnement propre.
- **Statut :** proposition non démarrée.

## 5. Meetup afférent
**Titre proposé :** « Graph Neural Networks et réseaux électriques : expérimenter EnerGNN depuis l'Afrique francophone ».
- **Public :** ingénieurs énergie, chercheurs, data scientists, DSI et communautés open source.
- **Format :** 60 minutes : contexte, architecture, démonstration du lab si prêt, discussion sur limites et cas d'usage.
- **Statut :** proposition non programmée, sans intervenant confirmé.

## Impact opérationnel
Potentiel de formation aux modèles sur graphes et à l'expérimentation open source appliquée aux réseaux électriques. Aucun bénéfice de performance, de fiabilité ou de coût n'est revendiqué.

## Opportunités de contribution
Examiner la documentation, les issues, la licence et les règles de contribution du dépôt officiel avant de proposer documentation, tests ou correctifs upstream.

## Actions OSEF
- [ ] Vérifier le dépôt officiel, sa licence et les prérequis techniques.
- [ ] Identifier des ingénieurs volontaires.
- [ ] Préparer un jeu de données entièrement synthétique.
- [ ] Produire un notebook reproductible et ses métriques.
- [ ] Évaluer un meetup après validation du lab.

**LinkedIn :** brouillon distinct, non publié.
