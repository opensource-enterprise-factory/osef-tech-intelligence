# Apache Sourcelume — Traçabilité des données d'entraînement IA

- **Date de l'annonce :** 10 novembre 2026
- **Date de la fiche :** 12 novembre 2026
- **Source primaire :** https://news.apache.org/foundation/entry/tiny-model-full-provenance-where-apache-sourcelume-is-and-where-it-is-heading
- **Statut :** veille ; lab et meetup proposés, non réalisés.

## Faits vérifiés
Apache Sourcelume décrit une spécification de métadonnées JSON-LD, un registre de référence fondé sur Apache Atlas et un TrainingProvenanceRecord. Un exemple public entraîne un petit modèle sur un texte du domaine public et enregistre des métadonnées de provenance. Le projet précise que la véracité des déclarations enregistrées n'est pas encore vérifiée.

## 1. Ce qui change
La provenance peut être enregistrée pendant l'entraînement plutôt que reconstruite a posteriori ; cela ne constitue pas encore une preuve indépendante de véracité.

## 2. Intérêt pour l’Afrique francophone
Les DSI, entreprises et ingénieurs IA peuvent documenter l'origine, les licences et les transformations des données. La traçabilité déclarative ne garantit pas la conformité légale ni l'autorisation d'utilisation.

## 3. Action OSEF
Proposer un exemple de registre de provenance pour une expérimentation IA. **Livrables :** schéma, pipeline de démonstration, rapport technique et limites.

## 4. Lab à construire
**LAB-AI-PROVENANCE-001**
- **Objectif :** générer un enregistrement de provenance lors d'un entraînement miniature.
- **Prérequis :** Python, environnement isolé, exemple public Sourcelume et corpus dont l'utilisation est autorisée.
- **Étapes :** installer et exécuter l'exemple ; enregistrer les métadonnées ; les consulter ; tester les limites de validation.
- **Critère de succès :** entraînement reproductible, métadonnées consultables et distinction documentée entre déclaration et preuve.

## 5. Meetup afférent
**« Peut-on réellement prouver l'origine des données d'entraînement d'une IA ? »** — DSI, Data Engineers, RSSI ; format proposé de 60 minutes avec démo et discussion sur les licences. **Non programmé.**

## Opportunité de contribution Open Source
Tester les exemples publics et proposer une correction documentaire ou technique reproductible si un besoin réel est identifié, en respectant les règles du projet.

## Réserves
Aucune validation cryptographique ou conformité réglementaire n'est présumée.
