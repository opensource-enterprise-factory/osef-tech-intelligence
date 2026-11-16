# OpenTelemetry Collector — Migration du processeur batch

**Annonce :** 11 novembre 2026  
**Date de veille :** 16 novembre 2026  
**Statut :** fiche de veille ; actions proposées, non exécutées  
**Source primaire :** https://opentelemetry.io/blog/2026/collector-batching-migration/

## Faits vérifiés
OpenTelemetry a annoncé la dépréciation du processeur `batch` du Collector. La solution recommandée dans la plupart des cas est le batching intégré à la `sending_queue` des exporters ; `queue_batch` reste une alternative quand un processeur est nécessaire. L'activation par défaut est prévue dans la version `v0.171.0` (février 2027), et le retrait du processeur historique dans `v0.177.0` (mai 2027). Les dates sont prévisionnelles.

## Ce qui change
Le batching passe, dans la plupart des configurations, de l'étape processeur à la file d'envoi de l'exporter. La file peut alors contenir des requêtes non regroupées : conserver le même `queue_size` peut réduire le volume de télémétrie réellement mis en attente. La migration doit être testée, et non se limiter à supprimer le processeur.

## Intérêt pour l’Afrique francophone
Les équipes SRE et DSI peuvent anticiper une modification de configuration affectant les traces, métriques et journaux de leurs plateformes. Le principal risque est la saturation des files ou une perte de données en cas d'indisponibilité du backend. Les paramètres dépendent du volume et des exporters réellement utilisés.

## Action OSEF
**Proposition :** audit des Collectors utilisés dans des environnements de laboratoire ou avec autorisation explicite, puis rédaction d'un guide de migration.
**Livrable :** matrice des versions et configurations, mesures avant/après, résultats de tests de saturation et recommandations conditionnelles.

## Lab à construire
**LAB-OTEL-001 — Migrer le batching OpenTelemetry Collector**
- **Objectif :** comparer le processeur `batch` et le batching au niveau de l'exporter en observant les effets sur les files et les données reçues.
- **Prérequis :** Docker ou Kubernetes local, Collector compatible, générateur de télémétrie, backend de test, métriques internes activées.
- **Étapes :** (1) épingler les versions et établir un scénario de référence ; (2) déployer la configuration historique ; (3) mesurer la télémétrie émise et reçue ; (4) activer `sending_queue.batch.enabled` et retirer le processeur ; (5) simuler une interruption contrôlée de l'exporter ; (6) comparer `otelcol_exporter_queue_size`, `otelcol_exporter_queue_capacity`, les données reçues et les pertes.
- **Critère de succès :** configurations reproductibles, écarts mesurés et expliqués, absence de perte non expliquée dans le scénario nominal ; toute perte en saturation doit être documentée.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** OpenTelemetry en production : votre pipeline survivra-t-il à la prochaine mise à niveau ?  
**Public :** SRE, DevOps, architectes et DSI.  
**Format :** 60 minutes avec architecture avant/après, démonstration de saturation et discussion sur la gestion du changement.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Prévoir l'inventaire des Collectors, la vérification de la compatibilité des exporters, le dimensionnement de la file et un plan de retour arrière avant une migration en production.

## Opportunités de contribution
Documenter les tests, publier des configurations de lab anonymisées, reproduire d'éventuels défauts et ouvrir des issues ou PR upstream selon les règles du projet.

## Checklist
- [ ] Valider le périmètre et les versions à tester
- [ ] Désigner un responsable du lab
- [ ] Réaliser les scénarios de référence et de saturation
- [ ] Publier les mesures et limites
- [ ] Évaluer un meetup interchapitres

## Références
- https://opentelemetry.io/blog/2026/collector-batching-migration/
- https://github.com/open-telemetry/opentelemetry-collector
