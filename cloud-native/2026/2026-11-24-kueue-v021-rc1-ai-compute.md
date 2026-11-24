# Kueue 0.21 RC1 — Mutualisation des ressources de calcul IA

**Date de veille :** 2026-11-24  
**Date de publication :** 2026-11-20  
**Source officielle :** https://github.com/kubernetes-sigs/kueue/releases/tag/v0.21.0-rc.1  
**Statut :** fiche de veille publiée ; propositions non exécutées.

## Faits vérifiés
La version candidate présente des évolutions DRA, LeaderWorkerSet et MultiKueue, des précautions de migration et des changements de journalisation. Il s'agit d'une préversion, pas d'une version stable.

## Ce qui change
Étudier les mécanismes d'admission, les quotas et les évolutions DRA sans présumer de leur maturité en production.

## Intérêt pour l’Afrique francophone
Les entreprises, universités et centres de recherche peuvent explorer le partage des capacités de calcul entre équipes.

## Action OSEF
OSEF Shared AI Compute Platform — proposition à valider.
**Livrables :** Architecture multi-équipes, configurations Kueue, matrice des quotas, rapport de tests et étude de faisabilité GPU.

## Lab à construire
**LAB-CNAI-SCHED-001**
- **Objectif :** Contrôler l'admission de workloads concurrents avec des ressources limitées.
- **Prérequis :** Kubernetes compatible, Kueue, Helm, kubectl, Jobs Kubernetes ; GPU physique et pilote DRA compatible pour les tests GPU.
- **Étapes :** Installer Kueue en environnement isolé ; créer deux équipes ; configurer les quotas ; soumettre des Jobs concurrents ; observer les admissions ; libérer des ressources ; comparer les temps d'attente ; documenter les résultats.
- **Critère de succès :** Respect observable des quotas et matrice de comportement. Un test CPU ne valide pas les fonctionnalités GPU.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Comment mutualiser les GPU entre plusieurs équipes IA avec Kubernetes ?
**Public :** MLOps, ingénieurs IA, SRE, CTO, chercheurs et fournisseurs cloud
**Format :** 90 minutes ; architecture, démonstration des files d'attente et discussion sur la mutualisation.
**Statut :** proposé, non programmé.

## Impact opérationnel
Évaluer la gestion des capacités sans présumer de gains économiques ni recommander la préversion en production.

## Opportunités de contribution
Tests DRA, documentation Kueue, scénarios multi-équipes et retours sur les préversions.

## Actions OSEF
- [ ] Vérifier la compatibilité
- [ ] Construire un scénario CPU
- [ ] Identifier un environnement GPU
- [ ] Tester les quotas
- [ ] Documenter les limites
- [ ] Préparer le meetup
