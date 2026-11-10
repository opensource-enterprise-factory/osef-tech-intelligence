# Zarf 1.0 : livraison sécurisée en environnement isolé

**Date :** 2026-11-09
**Source officielle :** OpenSSF
**URL :** https://openssf.org/blog/2026/11/09/announcing-zarf-1-0-security-and-stability-for-airgap-software-delivery/
**Statut :** Fiche OSEF ; actions, labs et meetups proposés, non réalisés.

## Faits vérifiés
Zarf 1.0 introduit notamment le schéma de packages v1beta1, des valeurs structurées remplaçant les anciennes variables, des améliorations des workflows de signature/vérification et des outils de migration.

## Ce qui change
Version majeure 1.0 avec nouveau schéma de packaging et améliorations de stabilité et de sécurité.

## Intérêt pour l’Afrique francophone
Évaluer la livraison d'applications pour banques, administrations et infrastructures critiques sur réseaux isolés ou filtrés. Le transfert des artefacts et les mises à jour restent à sécuriser.

## Impact opérationnel
Préparer, transporter, vérifier, installer et mettre à jour des packages sans dépendance Internet au moment du déploiement.

## Opportunités de contribution
Tests de migration, documentation, exemples et contributions au dépôt upstream Zarf.

## Action OSEF
Créer un guide de déploiement Kubernetes déconnecté. **Livrable :** package fictif, procédure et preuves de vérification.

## Lab à construire
**LAB-AIRGAP-001 — Secure Offline Kubernetes Deployment**
- **Objectif :** déployer et mettre à jour une application sans Internet.
- **Prérequis :** Zarf 1.0, Kubernetes de laboratoire, application fictive, support de transfert contrôlé.
- **Étapes :** construire en zone connectée ; vérifier contenu/signature ; transférer ; installer hors ligne ; tester une mise à jour.
- **Critère de succès :** installation et mise à jour reproductibles sans accès externe pendant l'opération.

## Meetup afférent
**Titre :** Déployer Kubernetes sans Internet.
**Public :** DSI, SecOps, SRE, administrateurs Kubernetes.
**Format :** 60 minutes, démonstration et discussion.
**Statut :** proposition non programmée.
