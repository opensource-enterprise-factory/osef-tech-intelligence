# CNCF Sustainability Month : mesurer l'efficacité Kubernetes

**Date :** 2026-11-07
**Source officielle :** CNCF
**URL :** https://www.cncf.io/blog/2026/11/07/we-organized-sustainability-month-heres-what-we-learned-%F0%9F%8C%B1/
**Statut :** Fiche OSEF ; actions, labs et meetups proposés, non réalisés.

## Faits vérifiés
Bilan communautaire Sustainability Month 2026 : allocation des ressources Kubernetes, eBPF, OpenTelemetry, observabilité carbone, Kepler et efficacité GPU. Il ne s'agit pas d'une nouvelle version de Kubernetes ou Kepler.

## Ce qui change
Synthèse et recommandations issues des échanges d'octobre 2026.

## Intérêt pour l’Afrique francophone
Mieux dimensionner les infrastructures cloud et observer les consommations réelles. Les économies énergétiques et financières doivent être mesurées, pas supposées.

## Impact opérationnel
Suivre CPU, mémoire, latence et énergie si mesurable, puis ajuster les demandes de ressources.

## Opportunités de contribution
Tests, documentation, instrumentation, métriques et retours d'expérience upstream.

## Action OSEF
Ajouter un diagnostic d'efficacité aux offres OPERATE. **Livrable :** tableau de bord et rapport avant/après.

## Lab à construire
**LAB-GREEN-001 — Kubernetes Resource Efficiency**
- **Objectif :** mesurer l'effet du dimensionnement sur performance et ressources.
- **Prérequis :** Kubernetes, Prometheus, Grafana, application de test ; Kepler si compatible.
- **Étapes :** déployer ; mesurer ; ajuster requests/limits ; rejouer la charge ; comparer.
- **Critère de succès :** mesures reproductibles et limites explicites.

## Meetup afférent
**Titre :** Green Kubernetes — mesurer avant d'optimiser.
**Public :** DSI, SRE, DevOps, exploitants cloud.
**Format :** 45 minutes, démo Grafana et discussion.
**Statut :** proposition non programmée.
