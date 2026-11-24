# Kubernetes 1.38 — Préparation des mises à niveau

**Date de veille :** 2026-11-24  
**Date de publication :** 2026-11-23  
**Source officielle :** https://kubernetes.io/blog/2026/11/23/kubernetes-v1-38-sneak-peek/  
**Statut :** fiche de veille publiée ; propositions non exécutées.

## Faits vérifiés
L'équipe Kubernetes présente les évolutions envisagées pour 1.38 : détection du pilote cgroup via CRI, configuration kubelet, ressources Pod, DRA et coordination des évictions. Sortie prévue le 16 décembre 2026 ; contenu final à confirmer.

## Ce qui change
Préparer les runtimes et configurations kubelet aux changements annoncés, en distinguant fonctionnalités alpha, bêta et stables.

## Intérêt pour l’Afrique francophone
Les exploitants de clusters bancaires, fintech et télécoms peuvent anticiper les incompatibilités et préparer la continuité des services.

## Action OSEF
OSEF Kubernetes Upgrade Readiness Assessment — proposition à valider.
**Livrables :** Questionnaire d'audit, inventaire des runtimes, script de prédiagnostic, matrice de compatibilité, rapport de risques et plan de migration.

## Lab à construire
**LAB-K8S-UPGRADE-001**
- **Objectif :** Qualifier les risques de migration 1.37 vers 1.38.
- **Prérequis :** VM Linux, kubeadm, Kubernetes 1.37, runtime CRI compatible, Git, environnement isolé.
- **Étapes :** Déployer un cluster témoin ; inventorier runtimes et pilotes cgroup ; vérifier les interfaces CRI ; identifier les configurations héritées ; automatiser les contrôles ; tester une préversion compatible si disponible ; revalider après sortie stable ; documenter les écarts.
- **Critère de succès :** Matrice reproductible des configurations compatibles, incompatibles et non vérifiées.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Votre infrastructure est-elle prête pour Kubernetes 1.38 ?
**Public :** DSI, CTO, SRE, DevOps et architectes cloud
**Format :** 75 minutes ; présentation, démonstration du prédiagnostic et discussion sur la migration.
**Statut :** proposé, non programmé.

## Impact opérationnel
Préparer les mises à niveau sans garantir leur succès avant qualification technique.

## Opportunités de contribution
Documentation Kubernetes, tests de compatibilité, rapports reproductibles et traduction.

## Actions OSEF
- [ ] Vérifier les KEP concernés
- [ ] Sélectionner les runtimes
- [ ] Construire le lab
- [ ] Produire le rapport
- [ ] Revalider après publication stable
- [ ] Préparer le meetup
