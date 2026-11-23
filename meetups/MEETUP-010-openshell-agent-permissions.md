# MEETUP-010 — OpenShell : contrôler les permissions des agents IA

**Statut :** proposé, non programmé  
**Durée :** 75 minutes (proposition)  
**Date, lieu, intervenants et inscriptions :** à confirmer  
**Issue de suivi existante :** [#69](https://github.com/opensource-enterprise-factory/osef-tech-intelligence/issues/69)  
**Lab associé :** [LAB-CNAI-SEC-001](../labs/LAB-CNAI-SEC-001-openshell-secure-agent-runtime.md) — [Issue #188](https://github.com/opensource-enterprise-factory/osef-tech-intelligence/issues/188)  
**Sources primaires :** https://www.cncf.io/blog/2026/11/10/welcoming-openshell-to-the-cncf-open-governance-to-secure-agentic-ai/ ; https://github.com/ai-openshell/openshell

## Faits vérifiés
OpenShell est un projet CNCF Sandbox d'isolation et de contrôle des permissions des agents IA. Son statut Sandbox n'est pas une certification de sécurité ; les instructions de déploiement doivent être vérifiées pour la version utilisée.

## Ce qui change
Le projet ouvre des pistes de contribution communautaire autour de la gouvernance des accès des agents IA.

## Intérêt pour l’Afrique francophone
Les entreprises qui explorent les agents IA ont besoin de comprendre les accès aux données, au réseau et aux services externes.

## Action OSEF
Préparer un atelier francophone de sensibilisation technique, adossé à un lab reproductible.
**Livrables :** support, démonstration, matrice d'autorisations/refus, questions fréquentes et compte rendu.

## Lab à construire
**LAB-CNAI-SEC-001** — isoler un agent avec OpenShell.
- **Objectif :** tester les autorisations réseau et fichiers.
- **Prérequis :** Linux, CLI et runtime compatibles avec une version épinglée, environnement jetable.
- **Étapes :** installer ; créer sandbox ; tester les refus ; appliquer une politique minimale ; tester les autorisations ; recueillir les traces.
- **Succès :** preuves reproductibles d'accès autorisés/refusés, limites documentées.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Vos agents IA peuvent-ils accéder à tout votre réseau ?  
**Public :** ingénieurs IA, DevSecOps, SRE, RSSI, architectes.  
**Format :** 75 minutes, présentation, démonstration et discussion.  
**Statut :** proposé, non programmé.

## Agenda
- 00–10 : enjeux et frontières de confiance
- 10–25 : architecture et politiques OpenShell
- 25–50 : démonstration du LAB-CNAI-SEC-001, si validé
- 50–65 : limites, secrets, logs et intégration Kubernetes
- 65–75 : questions et pistes de contribution

## Préparation
- [ ] Responsable et intervenant confirmés
- [ ] Vérifier les sources et la version utilisée
- [ ] Répéter la démonstration ou préparer un plan B
- [ ] Valider date, format, plateforme et inscriptions
- [ ] Obtenir les autorisations de publication des supports
- [ ] Réaliser le meetup et publier un RETEX anonymisé

## Impact opérationnel
Aider les participants à évaluer les politiques de moindre privilège sans promettre une sécurité absolue.

## Contributions possibles
Exemples de politiques, tests d'intégration, documentation, remontées de bugs reproductibles.
