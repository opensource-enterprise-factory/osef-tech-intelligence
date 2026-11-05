# OpenShell sur Kubernetes : sécuriser les agents IA

- **Date de veille :** 2026-11-05
- **Date de publication de la source :** 2026-11-04
- **Source primaire :** CNCF — Jim Bugwadia (Nirmata)
- **URL :** https://www.cncf.io/blog/2026/11/04/openshell-on-kubernetes-a-guide-for-platform-engineers/
- **Statut :** fiche de veille OSEF ; labs et meetups proposés, non programmés.

## Faits vérifiés
Le guide CNCF présente OpenShell et une intégration sur Kubernetes faisant intervenir Agent Sandbox, Cilium et Kyverno. Il décrit des mécanismes d'isolation, de contrôle des communications réseau et de gestion des identifiants. Il s'agit d'un guide technique, et non d'une annonce de nouvelle version.

## 1. Ce qui change
Le guide fournit un exemple d'architecture pour contrôler les actions d'agents IA au-delà des permissions classiques d'un Pod, notamment les communications externes et l'accès aux ressources sensibles.

## 2. Intérêt pour l’Afrique francophone
Les DSI, RSSI, banques et opérateurs de paiement peuvent examiner les mécanismes de confinement des agents avant leur intégration au SI. Pour les équipes Platform Engineering, le guide offre une base d'expérimentation. Les performances, l'isolation et la maintenabilité restent à qualifier avant la production.

## Impact opérationnel
Définir les autorisations par agent, protéger les identifiants, tracer les décisions et tester explicitement les accès interdits.

## 3. Action OSEF
Produire un blueprint **AI Agent Sandbox Security sur Kubernetes**, une matrice des contrôles (RBAC, réseau, Kyverno, OpenShell) et un rapport de tests reproductibles.

**Livrables :** architecture de référence, configurations de démonstration et procès-verbal de recette.

## 4. Lab à construire
- **Objectif :** vérifier qu'un agent ne peut accéder à une destination ou exécuter une requête HTTP interdite.
- **Prérequis :** Docker, kind, kubectl, Helm, Cilium, Kyverno et environnement OpenShell compatible ; versions et instructions à valider sur les documentations officielles.
- **Étapes essentielles :**
  1. Créer un cluster de laboratoire isolé.
  2. Installer les composants compatibles.
  3. Déployer un agent de test sans secrets réels.
  4. Définir les accès autorisés et interdits.
  5. Tester les deux scénarios et collecter les journaux.
- **Critère de succès :** les opérations interdites sont bloquées et les décisions sont traçables.

## 5. Meetup afférent
- **Titre :** Vos agents IA ont-ils trop de permissions ?
- **Public :** DSI, RSSI, Platform Engineers, DevSecOps.
- **Format proposé :** 45 minutes, démonstration d'un accès autorisé et d'un accès bloqué, puis discussion sur les contrôles de production.
- **Statut :** proposition, non programmé.

## Opportunités de contribution open source
Reproduire les exemples du guide, vérifier la documentation, ouvrir une issue pour une anomalie reproductible et proposer une PR de correction après échange avec les mainteneurs.

## Référence
https://www.cncf.io/blog/2026/11/04/openshell-on-kubernetes-a-guide-for-platform-engineers/
