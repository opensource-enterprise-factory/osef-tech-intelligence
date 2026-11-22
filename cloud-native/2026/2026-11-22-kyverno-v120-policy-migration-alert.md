# Kyverno 1.20 — Les politiques historiques ne sont plus exécutées

**Date de publication :** 2026-11-12  
**Date de veille corrective :** 2026-11-22  
**Source primaire :** Kyverno, annonce de la version 1.20  
**URL :** https://kyverno.io/blog/2026/11/12/announcing-kyverno-release-1.20/  
**Release :** https://github.com/kyverno/kyverno/releases/tag/v1.20.0  
**Statut :** fiche corrective publiée ; lab existant à actualiser.

## Faits vérifiés
Kyverno 1.20 supprime l'exécution des anciennes politiques par le moteur historique. Les objets Policy et ClusterPolicy peuvent demeurer présents sans que leurs règles soient exécutées. Le chart Helm inclut un garde-fou pour les mises à niveau en présence de politiques historiques. Les API de politiques CEL constituent la voie de migration. Les anciennes CRD ne sont pas nécessairement supprimées immédiatement.

## Ce qui change
La fin d'exécution des politiques historiques est effective en version 1.20, disponible depuis le 12 novembre 2026 ; ce n'est plus une échéance future. Cette fiche corrige la formulation des précédentes veilles OSEF.

## Intérêt pour l’Afrique francophone
Les banques, fintechs et entreprises utilisant Kyverno doivent prévenir les fausses assurances de conformité : la présence d'une politique dans le cluster ne garantit plus son exécution. Les upgrades peuvent également être bloqués si la migration n'est pas préparée.

## Action OSEF
Actualiser le lab existant [LAB-K8S-SEC-002](../../labs/LAB-K8S-SEC-002-kyverno-legacy-to-cel.md) et [son issue #161](https://github.com/opensource-enterprise-factory/osef-tech-intelligence/issues/161), sans créer de doublon.
**Livrables :** inventaire des API historiques, matrice de migration CEL, tests d'équivalence et rollback documenté.

## Lab à construire
**Extension du LAB-K8S-SEC-002 — Migration Kyverno 1.19 vers 1.20**
- **Objectif :** confirmer la conversion des anciennes règles et la préservation des décisions de sécurité.
- **Prérequis :** cluster isolé, versions Kyverno 1.19 et 1.20 épinglées, Helm, CLI Kyverno, politiques de démonstration et scénarios acceptés/refusés.
- **Étapes essentielles :** inventorier les anciennes ressources ; tester leur comportement avant migration ; vérifier le garde-fou d'upgrade ; traduire vers les API CEL ; rejouer les scénarios ; vérifier traces, décisions et retour arrière.
- **Critère de succès :** aucune dépendance résiduelle au moteur historique, décisions attendues conservées et rollback documenté.
- **Statut :** extension proposée, non exécutée.

## Meetup afférent
**Titre :** Kyverno 1.20 : vos politiques Kubernetes protègent-elles encore vos applications ?  
**Public :** RSSI, DevSecOps, SRE, DSI, architectes Kubernetes.  
**Format :** 60 minutes, démonstration de migration et revue des contrôles.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Bloquer toute mise à niveau sans inventaire des politiques historiques et sans tests de non-régression. Vérifier les API et garde-fous propres à la version installée.

## Opportunités de contribution
Documentation de conversion, cas de tests, rapports de régression et correctifs upstream fondés sur des preuves.

## Suivi
- [ ] Auditer les politiques historiques
- [ ] Vérifier le comportement en 1.19
- [ ] Tester le contrôle Helm
- [ ] Convertir et valider les politiques CEL
- [ ] Mettre à jour LAB-K8S-SEC-002 et l'issue #161
