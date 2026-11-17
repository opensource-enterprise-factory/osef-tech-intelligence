# OpenTelemetry — Instrumentation GenAI assistée par agents et Weaver

**Publication :** 12 novembre 2026  
**Veille :** 17 novembre 2026  
**Source officielle :** https://opentelemetry.io/blog/2026/agent-harness-genai-instrumentation/  
**Statut :** fiche publiée ; actions proposées, non réalisées.

## Faits vérifiés
Des ingénieurs d'Alibaba Cloud décrivent une expérimentation où plusieurs agents analysent un framework GenAI, proposent et développent une instrumentation, exécutent des tests, puis utilisent OpenTelemetry Weaver pour vérifier les conventions sémantiques sur la télémétrie émise. La revue humaine reste nécessaire. Il ne s'agit pas d'une fonctionnalité universelle du Collector.

## Ce qui change
La conception et la validation de l'instrumentation GenAI peuvent être partiellement assistées par agents. Weaver apporte un contrôle fondé sur les conventions sémantiques, plutôt qu'un simple jugement d'un modèle IA.

## Intérêt pour l’Afrique francophone
Former les ingénieurs à l'observabilité des applications IA, à l'interopérabilité des traces et au contrôle des données sensibles. La conformité des attributs ne garantit ni confidentialité ni fiabilité complète.

## Action OSEF
Rédiger un guide francophone avec une application de référence, des tests et une matrice de conformité.
**Livrable :** dépôt de démonstration, rapport de validation et documentation.

## Lab à construire
**LAB-OTEL-GENAI-001 — Vérifier la télémétrie d'un agent IA avec Weaver**
- **Objectif :** instrumenter une application GenAI minimale et vérifier les attributs.
- **Prérequis :** Python, Docker, OpenTelemetry SDK/Collector, Weaver, modèle simulé ou autorisé.
- **Étapes :** créer l'application, émettre des traces OTLP, lancer Weaver live-check, introduire une anomalie, corriger et comparer les résultats.
- **Critère de succès :** vérification reproductible et aucune donnée sensible dans les traces de test.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Peut-on faire confiance à l'observabilité de nos agents IA ? OpenTelemetry et Weaver.  
**Public :** ingénieurs IA, SRE, DevOps, architectes, DSI.  
**Format :** 60 minutes avec démonstration et discussion sur les risques.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Les tests sémantiques complètent les revues humaines ; ne pas extrapoler un prototype à la production.

## Opportunités de contribution
OpenTelemetry Python GenAI, conventions sémantiques GenAI, documentation, scénarios de conformité.

## Checklist
- [ ] Valider versions et prérequis
- [ ] Désigner un responsable
- [ ] Réaliser le lab
- [ ] Publier mesures et limites
- [ ] Décider d'un meetup
