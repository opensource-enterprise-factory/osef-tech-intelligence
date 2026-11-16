# LAB-OTEL-001 — Migration du batching OpenTelemetry Collector

**Statut :** proposé, non exécuté  
**Source primaire :** https://opentelemetry.io/blog/2026/collector-batching-migration/  
**Fiche de veille :** [16 novembre 2026](../cloud-native/2026/2026-11-16-opentelemetry-collector-batch-migration.md)

## Faits vérifiés
Le projet OpenTelemetry a annoncé la dépréciation du processeur `batch` au profit du batching intégré à la file d'envoi des exporters dans la plupart des cas. Les échéances de migration annoncées pour 2027 sont prévisionnelles.

## Ce qui change
Le batching est déplacé du processeur historique vers l'exporter, ce qui change le dimensionnement effectif des files et la gestion de la saturation.

## Intérêt pour l’Afrique francophone
Les équipes DevOps/SRE peuvent anticiper une migration affectant la fiabilité de leurs traces, métriques et logs. Les tests en lab ne constituent pas une validation automatique de production.

## Action OSEF
Produire un protocole reproductible, deux configurations versionnées, un rapport comparatif et un guide de migration conditionnel.

## Lab à construire
**Objectif :** comparer l'ancien et le nouveau batching en conditions nominales et lors d'une interruption du backend.

**Prérequis :** Docker ou Kubernetes local, Collector à versions épinglées, générateur OTLP, backend de test, métriques internes du Collector ; aucune donnée de production.

**Étapes :**
1. Définir charge de référence, versions et mesures de succès.
2. Déployer le Collector avec le processeur `batch`.
3. Mesurer le nombre d'éléments émis et reçus, la latence et la file.
4. Migrer vers le batching de l'exporter selon le guide officiel, en ajustant la capacité de file.
5. Rejouer la charge identique ; simuler une panne contrôlée du backend et sa reprise.
6. Mesurer les pertes, erreurs et capacités ; documenter le rollback.

**Critères d'acceptation :**
- [ ] Deux configurations reproductibles et compatibles avec les versions testées
- [ ] Procédure et scripts commentés
- [ ] Mesures comparatives conservées
- [ ] Panne et reprise documentées
- [ ] Aucune perte non expliquée en fonctionnement nominal
- [ ] Pertes en saturation quantifiées et limites explicitement décrites
- [ ] Rapport et recommandations publiés

**Livrables :** YAML, scripts, données de test, rapport de résultats, RETEX.

## Meetup afférent
**Titre :** OpenTelemetry en production : votre pipeline survivra-t-il à la prochaine mise à niveau ?  
**Public :** SRE, DevOps, DSI et architectes.  
**Format :** 60 minutes, présentation, démonstration du lab et discussion.  
**Statut :** proposé, non programmé.

## Sécurité
Ne jamais provoquer de saturation sur une infrastructure de production ou partagée sans autorisation explicite.
