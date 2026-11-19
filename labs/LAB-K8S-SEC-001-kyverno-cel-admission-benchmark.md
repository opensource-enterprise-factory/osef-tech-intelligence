# LAB-K8S-SEC-001 — Benchmark des performances d'admission Kyverno CEL

**Statut :** proposé, non exécuté  
**Source officielle :** https://www.cncf.io/blog/2026/11/18/optimizing-kubernetes-admission-control-where-kyvernos-cel-admission-cost-actually-goes/  
**Fiche de veille associée :** [19 novembre 2026](../cloud-native/2026/2026-11-19-kyverno-cel-performance.md)

## Faits vérifiés
L'article CNCF du 18 novembre 2026 explique que la préparation des objets Kubernetes était répétée par politique et qu'une optimisation incluse dans Kyverno 1.19.2 mutualise la conversion. Les chiffres publiés mesurent le moteur interne et non la latence complète de l'admission.

## Ce qui change
Le coût de conversion est mutualisé par requête plutôt que répété pour chaque politique correspondante.

## Intérêt pour l’Afrique francophone
Les DSI, SRE et DevSecOps peuvent tester les coûts d'admission sur leurs configurations. Les gains de laboratoire ne sont pas généralisables aux clusters de production.

## Action OSEF
Publier un protocole de benchmark francophone avec mesures et tests de non-régression.
**Livrables :** scripts commentés, configurations versionnées, rapport de tests, captures de métriques et guide de restitution.

## Lab à construire
**Objectif :** Mesurer les performances et l'équivalence des décisions des politiques CEL sur des versions de référence et corrigée.

**Prérequis :** Deux clusters isolés comparables, Kubernetes, Helm, Kyverno avec versions épinglées, politiques CEL identiques, outil de charge, métriques et logs.

**Étapes essentielles :**
1. Identifier une version de référence antérieure au correctif et Kyverno 1.19.2 ; vérifier la compatibilité Kubernetes.
2. Déployer un jeu de politiques CEL déterministes et des objets témoins acceptés/refusés.
3. Exécuter les mêmes charges sur chaque environnement, avec répétitions et conditions comparables.
4. Mesurer p50/p95 de l'admission de bout en bout, CPU/mémoire et, si possible, métriques internes du moteur.
5. Comparer toutes les décisions de validation, y compris cas négatifs, et documenter écarts et limites.

**Critère de succès :** Benchmark reproductible, métriques sauvegardées, décisions identiques pour les scénarios de référence et aucune divergence non expliquée.

### Checklist d'acceptation
- [ ] Responsable et environnement de lab désignés
- [ ] Versions, dépendances et limites documentées
- [ ] Scénarios positifs et négatifs exécutés
- [ ] Résultats, commandes et logs sauvegardés
- [ ] Rapport de reproductibilité et rollback rédigés
- [ ] Aucune donnée client ni impact sur un cluster de production

## Meetup afférent
**Titre :** Kubernetes Security : combien coûtent réellement vos politiques d'admission ?  
**Public :** SRE, DevSecOps, RSSI, architectes, DSI et fournisseurs cloud.  
**Format :** 60 minutes, architecture et contexte (15 min), démonstration du lab (25 min), discussion (20 min).  
**Statut :** proposé, non programmé.

## Impact opérationnel
Tester la sécurité et la compatibilité en parallèle des performances. Les résultats en laboratoire ne constituent pas une garantie de production.

## Opportunités de contribution
Documentation et retours d'expérience anonymisés, reproduction d'anomalies et issues/PR upstream si des écarts sont confirmés.

## Références
- https://www.cncf.io/blog/2026/11/18/optimizing-kubernetes-admission-control-where-kyvernos-cel-admission-cost-actually-goes/
- https://github.com/kyverno/kyverno
