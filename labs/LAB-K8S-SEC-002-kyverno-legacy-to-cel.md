# LAB-K8S-SEC-002 — Migrer des politiques Kyverno historiques vers les API CEL

**Statut :** proposé, non exécuté  
**Source officielle :** https://kyverno.io/blog/2026/08/20/announcing-kyverno-release-1.19/  
**Fiche de veille associée :** [19 novembre 2026](../cloud-native/2026/2026-11-19-kyverno-cel-performance.md)

## Faits vérifiés
Kyverno 1.19 annonce la parité fonctionnelle des politiques CEL et la dépréciation des API historiques ClusterPolicy/Policy ; leur suppression est annoncée pour 1.20. Kyverno 1.20.0 a été publié le 12 novembre 2026 : le moteur historique n'exécute plus ces politiques. Les anciennes ressources peuvent encore exister sans être appliquées. Le chart Helm comporte un garde-fou de mise à niveau. Vérifier la documentation de la version effectivement déployée.

## Ce qui change
La voie recommandée devient l'utilisation des API spécialisées policies.kyverno.io, en remplacement progressif des politiques historiques.

## Intérêt pour l’Afrique francophone
Les exploitants Kubernetes peuvent préparer la compatibilité des politiques lors des upgrades et former leurs ingénieurs à des tests de non-régression.

## Action OSEF
Créer une matrice de migration de politiques avec jeux de tests et plan de retour arrière.
**Livrables :** scripts commentés, configurations versionnées, rapport de tests, captures de métriques et guide de restitution.

## Lab à construire
**Objectif :** Migrer un petit jeu de politiques historiques de validation et mutation vers leurs équivalents CEL, puis comparer les décisions.

**Prérequis :** Cluster isolé, Kyverno 1.19 et 1.20.0 épinglés, Helm, CLI Kyverno et tests, Git, YAML, politiques de démonstration sans secrets.

**Étapes essentielles :**
1. Inventorier trois politiques de test ClusterPolicy et leurs scénarios d'acceptation/refus.
2. Lire le guide officiel de migration et sélectionner les API CEL correspondantes.
3. Déployer et tester les politiques historiques sur des ressources témoins.
4. Écrire les nouvelles politiques CEL et exécuter les mêmes scénarios.
5. Sur cluster jetable, vérifier le garde-fou Helm lors d'un upgrade vers 1.20 en présence de politiques historiques, puis migrer les ressources vers les API CEL. Ne pas désactiver le garde-fou en production.\n6. Comparer les décisions acceptées/refusées avant et après migration, vérifier l'exécution effective des politiques et préparer un rollback.
7. Documenter les limitations, l'impact de l'upgrade et les preuves de tests.

**Critère de succès :** Matrice de correspondance, scénarios de tests reproductibles, décisions conformes à l'intention initiale et rollback documenté.

### Checklist d'acceptation
- [ ] Responsable et environnement de lab désignés
- [ ] Versions, dépendances et limites documentées
- [ ] Scénarios positifs et négatifs exécutés
- [ ] Résultats, commandes et logs sauvegardés
- [ ] Rapport de reproductibilité et rollback rédigés
- [ ] Aucune donnée client ni impact sur un cluster de production

## Meetup afférent
**Titre :** Kyverno 1.19+ : préparer la migration de ClusterPolicy vers CEL  
**Public :** SRE, DevSecOps, RSSI, architectes, DSI et fournisseurs cloud.  
**Format :** 60 minutes, architecture et contexte (15 min), démonstration du lab (25 min), discussion (20 min).  
**Statut :** proposé, non programmé.

## Impact opérationnel
Tester la sécurité et la compatibilité en parallèle des performances. Les résultats en laboratoire ne constituent pas une garantie de production.

## Opportunités de contribution
Documentation et retours d'expérience anonymisés, reproduction d'anomalies et issues/PR upstream si des écarts sont confirmés.

## Références
- https://kyverno.io/blog/2026/08/20/announcing-kyverno-release-1.19/
- https://github.com/kyverno/kyverno

## Mise à jour corrective — Kyverno 1.20 (22 novembre 2026)
La suppression de l'exécution des anciennes politiques est **effective en 1.20**, et non seulement annoncée. Cette mise à jour ne prouve pas qu'un lab a été exécuté. Avant toute montée de version, inventorier les anciennes ressources, migrer les règles vers CEL, valider les décisions de sécurité et vérifier le garde-fou Helm.

- Veille corrective : [22 novembre 2026](../cloud-native/2026/2026-11-22-kyverno-v120-policy-migration-alert.md)
- Source officielle : https://kyverno.io/blog/2026/11/12/announcing-kyverno-release-1.20/
- Release : https://github.com/kyverno/kyverno/releases/tag/v1.20.0
