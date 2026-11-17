# MEETUP-OTEL-GENAI-001 — Peut-on faire confiance à l'observabilité de nos agents IA ?

**Statut :** proposition, non programmée. Aucune date, aucun intervenant ni partenaire confirmé.  
**Durée proposée :** 60 minutes  
**Source officielle :** https://opentelemetry.io/blog/2026/agent-harness-genai-instrumentation/  
**Veille associée :** [17 novembre 2026](../cloud-native/2026/2026-11-17-otel-genai-agent-harness.md)

## Faits vérifiés
Une expérimentation montre comment des agents peuvent proposer une instrumentation GenAI et comment Weaver vérifie les conventions sémantiques des traces OTLP. La revue humaine reste nécessaire.

## Ce qui change
Une expérimentation montre comment des agents peuvent proposer une instrumentation GenAI et comment Weaver vérifie les conventions sémantiques des traces OTLP. La revue humaine reste nécessaire.

## Intérêt pour l’Afrique francophone
Les équipes IA, DevOps et SRE peuvent apprendre à vérifier la qualité des traces et à éviter l'exposition de prompts et secrets.

## Action OSEF
Préparer une démonstration reproductible à partir de LAB-OTEL-GENAI-001 ; livrables : support, dépôt de lab et compte rendu.

## Lab à construire
**LAB-OTEL-GENAI-001** — [fiche du lab](../labs/LAB-OTEL-GENAI-001-weaver-genai-conformance.md)
- **Objectif :** Détecter et corriger une violation de conventions GenAI dans une application Python instrumentée.
- **Prérequis :** Python, Docker, OpenTelemetry, Weaver, application IA simulée.
- **Étapes essentielles :** instrumenter, exporter en OTLP, exécuter Weaver live-check, introduire une anomalie, corriger, relancer.
- **Critère de succès :** rapport de conformité reproductible et aucune donnée sensible.
- **Statut :** proposé, non exécuté.

## Meetup afférent
- **Titre :** Peut-on faire confiance à l'observabilité de nos agents IA ?
- **Public :** Ingénieurs IA, SRE, DevOps, architectes et DSI
- **Format :** rencontre francophone de 60 minutes, démonstration ou discussion guidée.
- **Démonstration / discussion :** mise en pratique de LAB-OTEL-GENAI-001, suivie d'un échange.
- **Statut :** proposé, non programmé.

## Chronogramme proposé
- 00–10 : enjeux de l'observabilité des agents IA
- 10–25 : conventions GenAI et Weaver
- 25–45 : démo de LAB-OTEL-GENAI-001
- 45–55 : confidentialité, limites et revue humaine
- 55–60 : questions et contributions

## Préparation et critères d'acceptation
- [ ] Désigner un coordinateur et un chapitre hôte
- [ ] Confirmer les intervenants et leurs accords
- [ ] Valider la date, le format et les inscriptions
- [ ] Vérifier les sources et relire les supports
- [ ] Répéter la démonstration ou l'exercice
- [ ] Préparer un plan B en cas d'échec de la démo
- [ ] Publier le compte rendu et les supports après l'événement, si autorisé

## Limites
Aucune inscription ouverte ni événement annoncé. Les démonstrations techniques doivent rester isolées et sans données sensibles.
