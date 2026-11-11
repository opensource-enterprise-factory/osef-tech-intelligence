# OpenSSF — Sécurité des dépendances à l'ère de l'IA

- **Date de l'annonce :** 9 novembre 2026
- **Date de la fiche :** 11 novembre 2026
- **Source primaire :** https://openssf.org/blog/2026/11/09/the-ai-security-gap-hiding-in-routine-maintenance/
- **Statut :** fiche de veille ; actions, lab et meetup proposés, non réalisés.

## Faits vérifiés
L'OpenSSF relaie une étude LF Research menée auprès de 308 professionnels de la sécurité. Dans cet échantillon, 60 % signalent une augmentation des dépendances externes liée aux outils de programmation IA ; 83 % se préoccupent de la charge des mises à jour et 44 % se déclarent préparés. Ces pourcentages ne doivent pas être généralisés à toutes les entreprises.

## 1. Ce qui change
L'utilisation de l'IA pour produire du code accentue l'enjeu de maintenance et de contrôle des dépendances, au-delà de la seule détection de vulnérabilités.

## 2. Intérêt pour l’Afrique francophone
Les DSI, RSSI, développeurs et ingénieurs DevOps peuvent mieux maîtriser leurs composants tiers et la dette de maintenance. La portée de l'étude reste limitée à son échantillon.

## 3. Action OSEF
Proposer une grille d'audit des dépendances pour OSEF Digital Workplace et Support Enterprise. **Livrables attendus :** SBOM, politique de mise à jour, rapport d'écarts. Aucune réalisation n'est revendiquée.

## 4. Lab à construire
**LAB-SUPPLY-CHAIN-001 — AI-Assisted Dependency Security**

- **Objectif :** comparer les risques avant et après l'ajout de dépendances proposées par IA.
- **Prérequis :** dépôt de test, GitHub Actions, Syft, Grype ou Trivy.
- **Étapes :** créer une version témoin ; produire le SBOM ; ajouter des dépendances ; scanner ; corriger ; comparer les résultats.
- **Critère de succès :** SBOM reproductible, vulnérabilités documentées et correctifs vérifiés.

## 5. Meetup afférent
**« AI Coding : qui maintient les dépendances après la génération ? »** — Proposition de session de 60 minutes pour DSI, RSSI, DevOps et développeurs, avec démonstration SBOM et discussion. **Non programmé.**

## Opportunité de contribution Open Source
Améliorer la documentation et les exemples d'intégration des outils SBOM/scanning utilisés, sous réserve de repérer une issue upstream adaptée.

## Réserves
Les outils et labs proposés sont des pistes OSEF, non des annonces de l'OpenSSF.
