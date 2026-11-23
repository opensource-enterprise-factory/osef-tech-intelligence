# LAB-PLATFORM-001 — Vérifier la compatibilité et le support d'une application Kubernetes chez le client

**Statut :** proposé, non exécuté  
**Niveau :** intermédiaire  
**Durée indicative :** 4 à 6 heures  
**Veille associée :** [Kubernetes support client — 23 novembre 2026](../cloud-native/2026/2026-11-23-kubernetes-customer-managed-support.md)  
**Source primaire :** https://www.cncf.io/blog/2026/11/19/how-to-support-your-app-on-kubernetes-environments-you-dont-control/  
**Référence versions Kubernetes :** https://kubernetes.io/releases/

## Objectif
Déployer une application témoin sur deux configurations Kubernetes et transformer les erreurs d'installation en diagnostics, remédiations et limites de support vérifiables. Produire un kit réutilisable pour les offres commerciales OSEF.

## Prérequis
- Deux clusters de test isolés, de versions ou configurations différentes, avec compatibilité de la version applicative documentée.
- kubectl, Helm ou Kustomize, Git, accès aux événements et logs.
- Application témoin sans données client, avec Service, configuration et éventuellement stockage.
- Connaissances de base en RBAC, DNS Kubernetes, StorageClass et admission.

## Procédure
1. Définir la matrice de compatibilité : versions, distribution, CNI, stockage, ingress/Gateway, RBAC, politiques et registres.
2. Établir un questionnaire de préinstallation et un script de collecte non sensible.
3. Déployer l'application sur le cluster A ; mesurer le temps et les contrôles de santé.
4. Déployer sans adaptation cachée sur le cluster B ; consigner les écarts.
5. Introduire une permission RBAC insuffisante sur une ressource de démonstration ; recueillir l'erreur et la remédiation.
6. Simuler une erreur DNS ou de résolution de Service ; isoler la cause.
7. Tester un stockage incompatible ou indisponible si l'application en dépend.
8. Pour chaque incident, produire : symptôme, commande de diagnostic, cause, correction et périmètre de support.
9. Vérifier le retour à l'état nominal, documenter le nettoyage et la procédure d'escalade.
10. Rédiger un modèle de conditions de support distinguant ce qui est validé, non validé et hors périmètre.

## Critères d'acceptation
- [ ] Deux environnements documentés et application fonctionnelle dans chacun
- [ ] Trois incidents de démonstration diagnostiqués et classés
- [ ] Matrice de compatibilité et questionnaire d'onboarding disponibles
- [ ] Script de diagnostic sans secrets ni informations sensibles
- [ ] Procédure de remédiation, escalade et nettoyage vérifiée
- [ ] Aucune promesse de SLA ou d'économie sans données réelles

## Livrables
Matrice de support, questionnaire d'onboarding, scripts de prédiagnostic, journal de tests, catalogue de remédiations et procédure d'escalade.

## Meetup possible
**Vendre et maintenir une application Open Source sur Kubernetes** — 60 minutes, CTO, ESN, SRE et équipes support ; démonstration de la matrice de compatibilité et discussion sur les engagements de support. **Proposé, non programmé.**

## Contribution upstream
Documentation d'installation, tests de compatibilité, outils de diagnostic et rapports d'anomalies reproductibles.
