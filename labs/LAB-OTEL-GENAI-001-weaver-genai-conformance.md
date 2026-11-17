# LAB-OTEL-GENAI-001 — Valider la télémétrie d'un agent IA avec OpenTelemetry Weaver

**Statut :** proposé, non exécuté  
**Priorité suggérée :** P1  
**Veille liée :** [17 novembre 2026](../cloud-native/2026/2026-11-17-otel-genai-agent-harness.md)  
**Source officielle :** https://opentelemetry.io/blog/2026/agent-harness-genai-instrumentation/

## Faits vérifiés
L'article OpenTelemetry du 12 novembre 2026 décrit un agent harness expérimental pour développer des instrumentations GenAI et les vérifier avec Weaver `live-check`. La validation sémantique et la revue humaine sont complémentaires.

## Ce qui change
Les conventions sémantiques peuvent être contrôlées automatiquement à partir des données OTLP réellement émises, au lieu de s'appuyer uniquement sur une revue de code ou une évaluation par IA.

## Intérêt pour l’Afrique francophone
Former des ingénieurs à l'observabilité interopérable des agents IA, avec contrôle des risques de fuite de prompts et de données métier.

## Action OSEF
Construire un lab bilingue reproductible et un guide de conformité.
**Livrables :** application Python minimale, configuration OTLP, protocole de test, sortie Weaver, rapport avant/après et documentation.

## Lab à construire
**Objectif :** générer une télémétrie GenAI valide, détecter puis corriger une violation de convention.

**Prérequis :**
- Python 3, environnement virtuel, Docker ou Podman
- OpenTelemetry SDK, Collector ou endpoint OTLP de test
- OpenTelemetry Weaver et registre de conventions versionnés
- Application GenAI de test sans données sensibles (modèle simulé accepté)
- Connaissances de base des traces et spans

**Étapes :**
1. Épingler versions, dépendances et registre de conventions.
2. Construire une application simulant une invocation d'agent et un appel d'outil.
3. Instrumenter avec les conventions GenAI appropriées et exporter en OTLP.
4. Exécuter Weaver `live-check` ou le runner de conformité compatible.
5. Introduire volontairement un attribut incorrect et constater la violation.
6. Corriger, rejouer, sauvegarder le rapport et documenter les limites.
7. Contrôler qu'aucun prompt, secret ou identifiant personnel n'est capturé.

**Critères d'acceptation :**
- [ ] Environnement reproductible sans compte IA payant obligatoire
- [ ] Exécution nominale documentée et traces observables
- [ ] Violation introduite et détectée
- [ ] Correction démontrée par un contrôle réussi
- [ ] Vérification de confidentialité documentée
- [ ] README et preuves de tests publiés

## Meetup afférent
**Titre :** Peut-on faire confiance à l'observabilité de nos agents IA ?  
**Public :** IA, SRE, DevOps, architectes et DSI.  
**Format :** 60 minutes avec démonstration du lab et discussion sur la confidentialité.  
**Statut :** proposé, non programmé.

## Sécurité et limites
Aucune donnée de production. Weaver valide les conventions observées, mais ne certifie ni la qualité métier, ni la confidentialité complète, ni la résilience de l'application.
