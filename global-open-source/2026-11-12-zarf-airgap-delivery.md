# Zarf 1.0 — Livraison logicielle sécurisée en environnement air-gap

- **Date de l'annonce :** 9 novembre 2026
- **Date de la fiche :** 12 novembre 2026
- **Source primaire :** https://openssf.org/blog/2026/11/09/announcing-zarf-1-0-security-and-stability-for-airgap-software-delivery/
- **Statut :** veille ; lab et meetup proposés, non réalisés.

## Faits vérifiés
Zarf 1.0 annonce notamment un schéma de packages v1beta1, une configuration par valeurs et des mécanismes renforcés de signature et vérification pour la distribution de logiciels en environnement isolé. Des ressources de migration sont annoncées.

## 1. Ce qui change
La version 1.0 met davantage l'accent sur la stabilité des packages, leur maintenance et les contrôles de distribution en environnement air-gap.

## 2. Intérêt pour l’Afrique francophone
Les DSI, ingénieurs Cloud et RSSI peuvent évaluer la livraison de logiciels sur des clusters Kubernetes sans accès Internet permanent. L'isolement réseau ne supprime pas les risques liés aux transferts, packages et clés de signature.

## 3. Action OSEF
Tester un package applicatif sur cluster de laboratoire isolé. **Livrables :** package, scripts, procédure de mise à jour, journal de vérification et rapport de limites.

## 4. Lab à construire
**LAB-AIRGAP-001 — Secure Offline Kubernetes Delivery**
- **Objectif :** installer et mettre à jour une application de démonstration sans accès Internet.
- **Prérequis :** Kubernetes de test, Zarf 1.0, registre local, application fictive et environnement isolable.
- **Étapes :** construire le package et inclure les dépendances ; signer ; transférer ; vérifier ; déployer hors ligne ; tester une mise à jour.
- **Critère de succès :** installation et mise à jour reproductibles sans Internet, avec traces de vérification et limites documentées.

## 5. Meetup afférent
**« Kubernetes sans Internet : comment livrer des applications de manière sécurisée ? »** — Cloud Engineers, SRE, RSSI ; proposition de session de 75 minutes avec démonstration air-gap. **Non programmé.**

## Opportunité de contribution Open Source
Tester les exemples et la documentation de migration Zarf 1.0 ; proposer une issue ou PR upstream uniquement en présence d'un problème reproductible.

## Réserves
Aucun déploiement en production, résultat de benchmark ou garantie de sécurité n'est revendiqué.
