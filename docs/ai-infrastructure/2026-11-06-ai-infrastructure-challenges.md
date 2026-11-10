# CNCF — Resource and Infrastructure Challenges for AI Workloads

**Date :** 2026-11-06
**Source officielle :** CNCF
**URL :** https://www.cncf.io/reports/resource-and-infrastructure-challenges-for-ai-workloads/
**Statut :** Fiche OSEF ; actions, labs et meetups proposés, non réalisés.

## Faits vérifiés
La CNCF publie un rapport sur les défis d'infrastructure des workloads IA : topologie matérielle, GPU hétérogènes, partage, stockage, résilience, élasticité et coûts. Il ne s'agit pas d'une nouvelle version de Kubernetes.

## Ce qui change
Cette publication complète le rapport CNCF du 5 novembre sur l'ordonnancement des jobs IA en examinant les contraintes d'infrastructure sous-jacentes.

## Intérêt pour l’Afrique francophone
Aider les DSI, fournisseurs cloud et ingénieurs à évaluer le GPU-as-a-Service, les goulets d'étranglement réseau/stockage et les risques d'exploitation. Aucun gain économique n'est présumé sans mesures locales.

## Impact opérationnel
Évaluer topologie, disponibilité, performance, isolation et coût total d'exploitation.

## Opportunités de contribution
Benchmarks reproductibles, documentation, retours d'expérience et contribution aux projets open source d'orchestration pertinents.

## Action OSEF
Produire une matrice d'évaluation et un blueprint de plateforme IA mutualisée. **Livrable :** architecture et protocole de benchmark.

## Lab à construire
**LAB-AI-002 — Infrastructure IA mutualisée**
- **Objectif :** mesurer l'impact du stockage, du placement et de la concurrence.
- **Prérequis :** Kubernetes, Prometheus, charges de test ; GPU facultatif.
- **Étapes :** définir les métriques ; mesurer une référence ; exécuter des charges concurrentes ; simuler une défaillance ; comparer.
- **Critère de succès :** rapport reproductible avec limites explicites. Sans GPU, aucune conclusion sur les performances GPU.

## Meetup afférent
**Titre :** Construire un GPU Cloud africain : au-delà de Kubernetes.
**Public :** DSI, SRE, architectes IA, fournisseurs cloud.
**Format :** 60 minutes, démonstration et discussion.
**Statut :** proposition non programmée.
