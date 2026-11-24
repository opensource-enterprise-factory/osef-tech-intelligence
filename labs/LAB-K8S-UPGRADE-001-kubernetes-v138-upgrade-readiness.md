# LAB-K8S-UPGRADE-001 — Préparer une migration Kubernetes 1.38

**Statut :** proposé, non exécuté
**Niveau :** Intermédiaire / avancé
**Durée indicative :** 4–6 h
**Source primaire à vérifier avant exécution :** https://kubernetes.io/blog/2026/11/23/kubernetes-v1-38-sneak-peek/
**Fiche de veille :** [24 novembre 2026](../cloud-native/2026/2026-11-24-kubernetes-v138-upgrade-readiness.md)

## Objectif
Qualifier les risques de migration 1.37 vers 1.38.

## Prérequis
VM Linux isolées, kubeadm, Kubernetes 1.37, runtime CRI compatible, Git, sauvegarde de test.

## Procédure proposée
1. Vérifier les versions et KEP officiels avant installation
2. Déployer un cluster témoin et une application de test
3. Inventorier runtime, pilotes cgroup, configuration kubelet et API CRI
4. Construire un script de prédiagnostic en lecture seule
5. Sauvegarder l'état et établir les contrôles de santé
6. Tester une préversion 1.38 uniquement si disponible et compatible
7. Comparer santé, événements et comportement applicatif avant/après
8. Documenter remédiations et restauration en laboratoire
9. Revalider avec la version stable après publication

## Critères d'acceptation
- [ ] Versions et prérequis vérifiés
- [ ] Environnement isolé et reproductible
- [ ] Matrice compatible/incompatible/non vérifié ; preuves de santé avant/après ; procédure de restauration testée. Ne pas considérer une préversion comme validée pour production.
- [ ] Logs et preuves expurgés de données sensibles
- [ ] Nettoyage documenté
- [ ] Revue technique par un autre ingénieur

## Livrables
Script de prédiagnostic, inventaire, matrice de compatibilité, journal de tests, rapport de risques et plan de migration.

## Contribution upstream
Documentation Kubernetes, tests de compatibilité et rapports reproductibles.

## Meetup associé
Votre infrastructure est-elle prête pour Kubernetes 1.38 ? — proposé, non programmé.

## Vigilance
Les commandes exactes et compatibilités doivent être établies à partir de la documentation du tag retenu. Aucun résultat n'est revendiqué avant exécution.
