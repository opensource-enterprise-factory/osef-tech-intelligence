# MEETUP-PLATFORM-001 — Vendre et maintenir une application Open Source sur Kubernetes

**Statut :** proposé, non programmé  
**Durée :** 60 minutes (proposition)  
**Date, lieu, speakers et inscriptions :** à confirmer  
**Lab associé :** [LAB-PLATFORM-001](../labs/LAB-PLATFORM-001-kubernetes-customer-support-readiness.md) — [Issue #189](https://github.com/opensource-enterprise-factory/osef-tech-intelligence/issues/189)  
**Source primaire :** https://www.cncf.io/blog/2026/11/19/how-to-support-your-app-on-kubernetes-environments-you-dont-control/

## Faits vérifiés
Un article de contributeur publié sur le blog CNCF décrit les défis du support des applications Kubernetes sur des clusters clients hétérogènes. Il ne s'agit pas d'une nouvelle norme CNCF.

## Ce qui change
Le sujet met en avant la compatibilité et le diagnostic après l'installation, pas seulement la réussite du déploiement initial.

## Intérêt pour l’Afrique francophone
Les éditeurs, ESN et équipes plateformes peuvent structurer une offre de support explicite pour des environnements on-premises, managés et hybrides.

## Action OSEF
Préparer un atelier sur le **Kubernetes Enterprise Support Readiness Kit**.
**Livrables :** matrice de compatibilité, checklist d'onboarding, scénarios de diagnostic et grille de support.

## Lab à construire
**LAB-PLATFORM-001** — vérifier une application sur deux configurations Kubernetes.
- **Objectif :** tester portabilité et diagnostics.
- **Prérequis :** deux clusters isolés, kubectl, Helm/Kustomize, application témoin.
- **Étapes :** déployer ; varier la configuration ; injecter erreurs RBAC, DNS et stockage ; diagnostiquer ; documenter remédiations.
- **Succès :** chaque incident classifié, corrigé ou explicitement hors support.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Vendre et maintenir une application Open Source sur Kubernetes.  
**Public :** CTO, ESN, éditeurs, SRE, responsables support et ingénieurs commerciaux.  
**Format :** 60 minutes, présentation, démonstration d'une matrice et discussion sur les engagements de support.  
**Statut :** proposé, non programmé.

## Agenda
- 00–10 : contraintes de support en environnement client
- 10–20 : prérequis, versions et matrice de compatibilité
- 20–40 : démonstration du LAB-PLATFORM-001, si validé
- 40–55 : modèle de support, escalade et limites contractuelles
- 55–60 : questions et suites

## Préparation
- [ ] Identifier un responsable et un speaker
- [ ] Répéter les tests du lab
- [ ] Vérifier les configurations et scénarios
- [ ] Préparer un plan B si la démonstration échoue
- [ ] Confirmer date, format et inscriptions
- [ ] Valider les supports avant diffusion
- [ ] Publier un compte rendu après l'événement

## Impact opérationnel
Aider à cadrer les engagements de support ; aucun SLA ni économie ne sont présumés sans mesures.

## Contributions possibles
Documentation francophone, scripts de diagnostic, tests de compatibilité et retours upstream.
