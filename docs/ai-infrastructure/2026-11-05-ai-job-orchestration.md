# Orchestration des workloads IA sur Kubernetes

**Date de publication :** 2026-11-05  
**Source primaire :** CNCF  
**URL :** https://www.cncf.io/reports/job-orchestration-challenges-for-ai-workloads/  
**Statut :** Fiche de veille OSEF — proposition de travaux, non réalisés.

## Faits vérifiés
Le rapport CNCF « Job Orchestration Challenges for AI Workloads » traite notamment des jobs distribués, du gang scheduling, des files d'attente, des priorités, de la préemption et de l'équité d'accès aux ressources GPU.

## Ce qui change
Publication d'une analyse dédiée à l'ordonnancement des workloads IA ; ce rapport n'annonce pas à lui seul une nouvelle fonctionnalité de Kubernetes.

## Intérêt pour l’Afrique francophone
Les fournisseurs cloud, entreprises et laboratoires IA peuvent étudier comment mutualiser des ressources GPU coûteuses entre plusieurs équipes, en évaluant les arbitrages de priorité, d'attente et de qualité de service.

## Impact opérationnel
Besoin d'une politique explicite de quotas et de priorité, ainsi que de métriques d'utilisation et de temps d'attente. Aucun gain n'est présumé sans mesure.

## Opportunités de contribution
Benchmarks reproductibles, documentation, retours d'expérience et participation aux projets upstream d'ordonnancement pertinents.

## Action OSEF
Élaborer une architecture de référence GPU mutualisé et un protocole de benchmark. **Livrable :** blueprint, scénarios et mesures.

## Lab à construire
**LAB-AI-001 — Ordonnancement équitable de jobs IA.**
- **Objectif :** comparer le temps d'attente et l'équité entre deux équipes fictives.
- **Prérequis :** Kubernetes, simulateur de jobs CPU/GPU, observabilité, ordonnanceur adapté à sélectionner.
- **Étapes :** définir deux tenants ; lancer des jobs concurrents ; configurer quotas/priorités ; observer attente, utilisation et préemption ; documenter.
- **Critère de succès :** résultats comparables, mesurés et reproductibles, sans métriques inventées.

## Meetup afférent
**Titre :** Comment mutualiser les GPU dans un cloud souverain africain ?  
**Public :** DSI, SRE, ingénieurs IA, fournisseurs cloud.  
**Format :** 60 minutes, démonstration d'une file de jobs et discussion sur quotas et facturation.  
**Statut :** proposition, non programmée.
