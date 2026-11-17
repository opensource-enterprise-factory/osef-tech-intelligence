# Kubernetes v1.38 — Calendrier du Code Freeze et Test Freeze

**Échéance prévue :** 17 novembre 2026 à 12 h UTC (fin du 16 novembre AoE)  
**Veille :** 17 novembre 2026  
**Source officielle :** https://github.com/kubernetes/sig-release/blob/master/releases/release-1.38/README.md  
**Statut :** fiche de calendrier ; réalisation effective du gel non vérifiée.

## Faits vérifiés
Le calendrier SIG Release prévoit le début du Code Freeze et du Test Freeze pour Kubernetes v1.38, et une publication stable prévue le 16 décembre 2026. Il s'agit d'échéances annoncées, pas de confirmations d'exécution.

## Ce qui change
Le cycle de publication passe selon le calendrier de l'intégration des fonctionnalités à la stabilisation, aux tests et à la gestion des exceptions.

## Intérêt pour l’Afrique francophone
Découvrir les pratiques de release engineering et de contribution upstream ; tester une version candidate dans un environnement isolé plutôt que l'utiliser en production.

## Action OSEF
Produire une checklist francophone de suivi du cycle v1.38 et des points de contrôle des versions candidates.
**Livrable :** calendrier commenté et protocole de test.

## Lab à construire
**LAB-K8S-RELEASE-001 — Tester une version candidate Kubernetes**
- **Objectif :** vérifier la compatibilité d'une application et de ses manifests.
- **Prérequis :** cluster jetable, image/version candidate officiellement disponible, application témoin et tests automatisés.
- **Étapes :** épingler la version, déployer sur un cluster isolé, exécuter tests de fonctionnement, collecter les écarts, nettoyer.
- **Critère de succès :** rapport reproductible, anomalies qualifiées, aucun impact sur la production.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Comment Kubernetes prépare-t-il une nouvelle version ? Dans les coulisses de SIG Release.  
**Public :** DevOps, SRE, contributeurs débutants.  
**Format :** 60 minutes, présentation du calendrier, démonstration de tests, questions.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Le gel annoncé ne signifie pas que v1.38 est stable ou déployable en production.

## Opportunités de contribution
Revue documentaire, tests de préversion, signalement reproductible d'anomalies selon les règles SIG Release.

## Checklist
- [ ] Vérifier l'état réel du gel
- [ ] Identifier une version candidate disponible
- [ ] Réaliser le lab
- [ ] Documenter les résultats
