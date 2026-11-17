# LAB-K8S-RELEASE-001 — Tester une préversion Kubernetes v1.38

**Statut :** proposé, non exécuté  
**Priorité suggérée :** P2, conditionnée à la disponibilité d'une version de test compatible  
**Veille liée :** [17 novembre 2026](../cloud-native/2026/2026-11-17-kubernetes-v1-38-code-freeze.md)  
**Source officielle :** https://github.com/kubernetes/sig-release/blob/master/releases/release-1.38/README.md

## Faits vérifiés
Le calendrier SIG Release prévoit un Code Freeze/Test Freeze au 17 novembre 2026 à 12 h UTC et une sortie stable v1.38.0 au 16 décembre. Ces dates sont des jalons prévisionnels, pas une preuve que le gel ou la publication ont eu lieu.

## Ce qui change
Le cycle de développement passe selon le calendrier vers une phase de stabilisation et de tests avant publication.

## Intérêt pour l’Afrique francophone
Initier les équipes aux cycles de publication upstream et aux tests de compatibilité, sans introduire de version de préproduction dans les SI clients.

## Action OSEF
Publier un guide de validation d'une préversion Kubernetes et un rapport de compatibilité applicative.
**Livrables :** scripts commentés, manifeste applicatif, protocole de test et rapport.

## Lab à construire
**Objectif :** exécuter des tests reproductibles d'une application témoin sur une version candidate v1.38 et relever les régressions.

**Prérequis :**
- Machine de lab isolée et ressources suffisantes
- Runtime/outil de cluster de test supportant explicitement la version retenue
- Version alpha, bêta ou RC officiellement publiée, images vérifiées
- kubectl compatible, manifests et application témoin, outils de test
- Aucune dépendance à une infrastructure de production

**Étapes :**
1. Vérifier l'état de publication et choisir une préversion officiellement disponible.
2. Consigner versions, checksums, composants et limitations.
3. Créer un cluster jetable ; vérifier la santé des nœuds et du plan de contrôle.
4. Déployer une application témoin avec service, configuration et stockage de test si disponible.
5. Exécuter des tests de déploiement, disponibilité, réseau et compatibilité API.
6. Collecter événements, logs et erreurs ; comparer à une version stable de référence.
7. Nettoyer intégralement le cluster et publier le rapport.

**Critères d'acceptation :**
- [ ] Versions et environnement épinglés
- [ ] Cluster isolé reproductible
- [ ] Scénarios de test exécutés et preuves conservées
- [ ] Régressions ou absences de régression documentées
- [ ] Aucun usage en production
- [ ] Rapport public anonymisé

## Meetup afférent
**Titre :** Comment Kubernetes prépare-t-il une nouvelle version ? Dans les coulisses de SIG Release.  
**Public :** DevOps, SRE et contributeurs débutants.  
**Format :** 60 minutes avec démonstration de tests en cluster jetable.  
**Statut :** proposé, non programmé.

## Limites
Un test réussi sur une préversion ne constitue pas une certification de compatibilité ni une recommandation de mise en production.
