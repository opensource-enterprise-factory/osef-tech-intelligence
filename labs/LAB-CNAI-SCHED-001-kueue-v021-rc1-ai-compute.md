# LAB-CNAI-SCHED-001 — Mutualiser les ressources de calcul avec Kueue

**Statut :** proposé, non exécuté
**Niveau :** Avancé
**Durée indicative :** 5–8 h
**Source primaire à vérifier avant exécution :** https://github.com/kubernetes-sigs/kueue/releases/tag/v0.21.0-rc.1
**Fiche de veille :** [24 novembre 2026](../cloud-native/2026/2026-11-24-kueue-v021-rc1-ai-compute.md)

## Objectif
Observer l'admission de workloads concurrents et le respect des quotas.

## Prérequis
Kubernetes compatible, Helm, kubectl, Kueue, Jobs Kubernetes, cluster isolé ; GPU physique et pilote DRA compatible uniquement pour la phase GPU.

## Procédure proposée
1. Vérifier la matrice de compatibilité et épingler une version stable de référence et la RC si disponible
2. Installer Kueue selon la documentation de la version
3. Configurer ResourceFlavor, ClusterQueue et LocalQueue pour deux équipes
4. Définir quotas et ressources CPU de test
5. Soumettre des Jobs concurrents dépassant la capacité disponible
6. Observer conditions d'admission et temps d'attente
7. Libérer des ressources et vérifier l'admission suivante
8. Comparer les comportements entre versions lorsque possible
9. Étudier DRA et MultiKueue séparément ; tester GPU seulement si matériel compatible
10. Nettoyer les ressources et consigner les limites

## Critères d'acceptation
- [ ] Versions et prérequis vérifiés
- [ ] Environnement isolé et reproductible
- [ ] Respect observable des quotas, transitions d'admission documentées et résultats reproductibles. Les tests CPU ne valident pas DRA/GPU ; RC non qualifiée pour production.
- [ ] Logs et preuves expurgés de données sensibles
- [ ] Nettoyage documenté
- [ ] Revue technique par un autre ingénieur

## Livrables
Manifestes, architecture multi-équipes, matrice de quotas, mesures d'attente, rapport et étude GPU.

## Contribution upstream
Documentation Kueue, tests multi-équipes et retours reproductibles sur préversions.

## Meetup associé
Comment mutualiser les GPU entre plusieurs équipes IA avec Kubernetes ? — proposé, non programmé.

## Vigilance
Les commandes exactes et compatibilités doivent être établies à partir de la documentation du tag retenu. Aucun résultat n'est revendiqué avant exécution.
