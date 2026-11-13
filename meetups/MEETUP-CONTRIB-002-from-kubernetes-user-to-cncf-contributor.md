# MEETUP-CONTRIB-002 — De consommateur Kubernetes à contributeur CNCF : par où commencer ?

**Statut :** proposition, non programmée  
**Public :** développeurs, DevOps, SRE, étudiants, DSI/CTO intéressés par la contribution open source  
**Format :** meetup interchapitres francophones, 75 minutes, en ligne ou hybride  
**Date et intervenants :** à confirmer  
**Lab associé :** [LAB-CONTRIB-002](../labs/LAB-CONTRIB-002-first-upstream-contribution.md)  
**Veille associée :** [CNCF Community Awards 2026](../cloud-native/2026/2026-11-13-cncf-community-awards-contribution.md)  
**Source primaire :** https://www.cncf.io/announcements/2026/11/12/cncf-recognizes-cloud-native-champions-in-2026-community-awards/

## Contexte et faits vérifiés
Le 12 novembre 2026, la CNCF a annoncé les Community Awards 2026, qui valorisent notamment la maintenance, la documentation et les contributions techniques. Cette annonce inspire le thème du meetup ; elle ne constitue pas une annonce de meetup CNCF ou OSEF.

## Ce qui change
Les lauréats 2026 ont été annoncés et mettent en lumière des formes variées de contribution, au-delà de l'écriture de fonctionnalités. Le meetup proposé vise à convertir cet exemple en parcours de contribution reproductible.

## Intérêt pour l’Afrique francophone
Faciliter l'accès aux projets upstream pour des ingénieurs et étudiants de niveaux différents, créer des liens entre chapitres et développer la maîtrise des processus de revue. Limites : disponibilité des mentors, prérequis techniques et acceptation des PR par les mainteneurs.

## Action OSEF
**Proposition :** organiser un meetup interchapitres puis une session pratique distincte autour du lab associé.  
**Livrables :** support de présentation, démonstration reproductible, liste d'issues sélectionnées, inscriptions volontaires au lab, compte rendu et liens des PR effectivement soumises.

## Lab à construire
**LAB-CONTRIB-002 — Première contribution vérifiable à Kubernetes ou Cilium**
- **Objectif :** soumettre une PR upstream utile et traçable.
- **Prérequis :** Git, compte GitHub, guide de contribution, environnement de test isolé.
- **Étapes :** sélectionner une issue, qualifier/reproduire, créer un fork et une branche, corriger, valider, ouvrir la PR, suivre la revue.
- **Critère de succès :** PR soumise avec validations documentées ; fusion non garantie.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** De consommateur Kubernetes à contributeur CNCF : par où commencer ?  
**Public :** développeurs, DevOps, SRE, étudiants et animateurs de communautés.  
**Format :** 75 minutes, en français, démonstration et questions.  
**Démo :** parcours d'une issue documentaire de `kubernetes/website` vers une PR ; utiliser un exemple de préparation si aucune issue actuelle n'est validée.  
**Statut :** proposé, non programmé.

## Objectifs pédagogiques
1. Distinguer utilisateur, contributeur et mainteneur.
2. Trouver une issue réellement accessible dans un projet CNCF.
3. Comprendre fork, branche, validation, PR, CLA/DCO et revue.
4. Identifier les étapes d'un premier sprint de contribution interchapitres.

## Agenda proposé (75 minutes)
| Minute | Séquence | Livrable |
|---|---|---|
| 00–10 | Introduction : pourquoi contribuer ? | Objectifs partagés |
| 10–25 | Les voies de contribution (docs, tests, code, communauté) | Carte des parcours |
| 25–50 | Démonstration : issue → fork → modification → tests → PR | Procédure reproductible |
| 50–65 | Discussion : freins, mentors, choix des projets | Backlog d'actions |
| 65–75 | Questions et invitation au lab | Inscription volontaire |

## Profils de speakers à solliciter
- Un contributeur Kubernetes ou Cilium ayant une PR publique vérifiable.
- Un mentor capable de guider les premiers contributeurs.
- Un organisateur de chapitre francophone pour la mobilisation.
**Aucun speaker n'est confirmé.**

## Préparation de la démo
- Choisir une issue upstream appropriée et vérifier son statut juste avant le meetup.
- Préparer un fork, une branche et un changement minimal en environnement isolé.
- Vérifier la procédure officielle de validation du projet.
- Prévoir une démonstration enregistrée localement ou un plan B en cas de problème réseau.
- Ne pas soumettre une PR fictive ou non sollicitée simplement pour la démonstration.

## Critères de succès de l'événement proposé
- Support et démonstration disponibles.
- Au moins une issue candidate documentée et validée par le mentor.
- Participants orientés vers le lab avec consignes et prérequis.
- Compte rendu publié, distinguant objectifs et résultats réels.

## Références officielles
- https://www.kubernetes.dev/docs/guide/
- https://github.com/kubernetes/website
- https://docs.cilium.io/en/stable/contributing/

## Checklist d'organisation
- [ ] Valider le thème et le chapitre hôte
- [ ] Fixer date, horaire et plateforme
- [ ] Confirmer speakers et modérateur
- [ ] Sélectionner l'issue de démonstration
- [ ] Répéter la démo et préparer le plan B
- [ ] Publier les inscriptions après validation
- [ ] Organiser la session LAB-CONTRIB-002
- [ ] Publier le compte rendu et les résultats vérifiés
