# MEETUP-OTEL-001 — OpenTelemetry en production : votre pipeline survivra-t-il à la prochaine mise à niveau ?

**Statut :** proposé, non programmé  
**Durée proposée :** 60 minutes  
**Source officielle :** https://opentelemetry.io/blog/2026/collector-batching-migration/  
**Lab associé :** [LAB-OTEL-001](../labs/LAB-OTEL-001-collector-batching-migration.md)  
**Fiche de veille :** [16 novembre 2026](../cloud-native/2026/2026-11-16-opentelemetry-collector-batch-migration.md)

## Faits vérifiés
OpenTelemetry a annoncé le 11 novembre 2026 la dépréciation du processeur `batch` du Collector et une migration vers le batching au niveau des exporters dans la plupart des configurations.

## Ce qui change
La gestion des lots et le dimensionnement des files d'attente changent, avec des implications possibles sur les pertes de télémétrie pendant les interruptions.

## Intérêt pour l’Afrique francophone
Proposer aux DSI et équipes de production une méthode de validation reproductible avant mise à niveau de leur chaîne d'observabilité.

## Action OSEF
Préparer un meetup interchapitres, une démonstration isolée, un support et un compte rendu publiable. Aucun speaker ni événement n'est confirmé.

## Lab à construire
**LAB-OTEL-001** — Comparaison de deux configurations Collector.  
**Objectif :** évaluer le batching et les files lors d'une panne et reprise.  
**Prérequis :** Docker/Kubernetes local, Collector, générateur OTLP et backend de test.  
**Étapes :** déployer, mesurer, migrer, simuler une interruption, comparer, documenter.  
**Critère de succès :** résultats reproductibles et pertes éventuelles expliquées.

## Meetup afférent
**Titre :** OpenTelemetry en production : votre pipeline survivra-t-il à la prochaine mise à niveau ?  
**Public :** SRE, DevOps, architectes, responsables production et DSI.  
**Format :** 60 minutes avec présentation technique, démo et discussion.  
**Statut :** proposition, aucune date programmée.

## Chronogramme (60 min)
- 00–10 min : contexte et enjeux opérationnels
- 10–20 min : architectures avant/après
- 20–40 min : démonstration du LAB-OTEL-001 (panne/reprise)
- 40–55 min : questions DSI/SRE, seuils, rollback, gestion des incidents
- 55–60 min : synthèse et appels à contribution

## Intervenants recherchés
Contributeur OpenTelemetry, SRE expérimenté et modérateur de communauté ; aucune participation confirmée.

## Critères de préparation
- [ ] Valider le chapitre hôte et la date
- [ ] Confirmer les intervenants
- [ ] Répéter la démonstration et préparer un plan B
- [ ] Vérifier la conformité des supports aux sources
- [ ] Ouvrir les inscriptions après validation
- [ ] Publier le RETEX après tenue effective
