# OSDEP — Référents volontaires : appel, nomination et suivi

> **Statut : dispositif proposé, non encore adopté.** Aucun référent n'est désigné à ce jour par ce document. Les issues de candidature sont des postes ouverts, pas des affectations.

## Objectif

Déléguer réellement le programme **OSEF Technology Discovery & Contribution Program** à quatre référents volontaires, sans faire reposer le suivi quotidien sur le Directeur Technique OSEF. **Ce sont des fonctions opérationnelles, pas des mandats sociaux ni une participation automatique au capital.**

## Les quatre fonctions

| Fonction | Périmètre | Livrable J+30 proposé | Issue de candidature |
| --- | --- | --- | --- |
| **Technology Scouts** | Qualifier technologies, besoins, sources, licences, alternatives | 4 fiches technologiques revues | À lier après création |
| **Meetup & Learning** | Calendrier, speakers, déroulé, support, synthèses | 2 sessions préparées et au moins 1 tenue si intervenant confirmé | À lier |
| **Labs & Contributions** | Backlog LAB, définition de terminé, reviewers, liens upstream | 2 labs instruits, 1 lab terminé avec preuves selon capacité | À lier |
| **Enterprise Engineering** | Exploitabilité, sécurité, coûts, TCO, qualification des blueprints | 1 grille d'industrialisation et 1 revue technique | À lier |

**Prudence :** ces chiffres sont des cibles de mandat proposées et à négocier, non des engagements acquis.

## Conditions proposées

- Appel ouvert aux ingénieurs membres d'OSEF et candidats pouvant d'abord rejoindre OSEF.
- Mandat initial de **90 jours**, soumis à acceptation explicite, avec revues à J+30, J+60 et J+90.
- Disponibilité indicative **2 à 4 heures par semaine** selon la fonction ; chacun confirme ses créneaux réalistes.
- Aucun responsable ne s'engage implicitement sur du support permanent ou des interventions urgentes.
- Le statut interne ne crée pas automatiquement salaire, contrat de travail, facturation, droit de vote en société, capital ou rémunération. Les conditions financières éventuelles doivent être clarifiées par écrit avant le mandat.
- Les activités restent compatibles avec les obligations professionnelles principales et les règles de confidentialité.
- Un suppléant est recherché quand la charge le justifie ; le départ donne lieu à passation.

## Candidater dans GitHub

1. Lire cette page et la fiche de la fonction souhaitée.
2. Se signaler **dans les commentaires de l'issue de la fonction**, avec uniquement :
   - identifiant GitHub ;
   - intérêt et expérience pertinente **publique** ;
   - proposition de 2 ou 3 résultats à 30 jours ;
   - disponibilité **indicative**, sans horaires personnels ni informations d'employeur.
3. Envoyer **en privé** au comité désigné toute information sensible (nom légal, contrats employeur, téléphone, coordonnées, contraintes personnelles). **Ne pas publier ces données dans les issues.**
4. Un comité provisoire communiqué à l'avance examine selon une grille commune : disponibilité réaliste (25 %), capacité de livraison (25 %), collaboration (20 %), expertise liée à la fonction (20 %), compréhension d'OSEF (10 %).
5. La personne retenue **confirme volontairement** son mandat, son périmètre, ses objectifs, les droits d'accès et ses conditions.
6. Une décision de désignation datée et une issue de suivi de mandat sont créées. **La nomination n'est effective qu'après accord et publication de cette décision.**

**Important :** les critères et l'instance de sélection doivent être approuvés avant toute décision. Les conflits d'intérêts des évaluateurs seront déclarés.

## Workflow GitHub

`À pourvoir → Candidatures reçues → En sélection → Proposition de mandat → Accepté → En cours → Revue J30/J60/J90 → Renouvelé ou clôturé`.

- Chaque fonction possède **une issue publique d'appel**. Les personnes candidatent par commentaire public, avec seulement des informations non sensibles.
- Après sélection, le candidat **consent** à l'affichage public de son identifiant GitHub.
- Un **mandat écrit** contient : rôle, objectifs, plages convenues, délégations, limites de décision, livrables, indicateurs, reporting, suppléant, date de fin et éventuelles conditions financières. Si certains éléments sont confidentiels, ils restent dans un espace privé.
- Affecter la personne à l'issue **après acceptation**, jamais automatiquement.
- Les tâches techniques sont issues ou PR distinctes, liées au mandat ; ne pas utiliser les commentaires de candidature pour les livrables.
- Les informations sur la rémunération, le droit du travail, l'emploi actuel, les clients et les coordonnées restent hors du dépôt public.

## Reporting de chaque référent

Publier une synthèse hebdomadaire courte sur l'issue de mandat (ou le projet privé selon le contexte) :

- **Terminé :** lien vers les preuves ;
- **En cours :** livrable et prochaine date ;
- **Bloqué :** blocage et décision demandée ;
- **Disponibilité :** changement de capacité, sans motifs personnels détaillés.

Le Directeur Technique arbitre les points transversaux ou critiques ; il ne gère pas les tâches quotidiennes de chaque cellule.

## Frontières entre les cellules

1. **Technology Scouts** qualifie ; ne choisit pas seul d'industrialiser.
2. **Meetup & Learning** organise ; n'annonce aucune session sans speaker, créneau et validation.
3. **Labs & Contributions** réalise et documente ; ne présente aucune PR comme fusionnée sans preuve.
4. **Enterprise Engineering** évalue l'industrialisation et recommande un go/no-go ; ne signe pas de contrat client sans habilitation.

Les chefs de projets **OSEF Digital Workplace** et **OSEF Support Enterprise** demeurent responsables de leurs livrables propres. OSDEP alimente leurs équipes en technologies, labs et candidats blueprints sans prendre le contrôle des backlogs produits.

## Modèle d'issue de suivi après nomination

```md
# OSDEP — Mandat : [fonction] — [GitHub ID avec accord]

- Statut : Accepté / En cours / À renouveler / Clos
- Date de début et de fin :
- Référent :
- Mandant / validateur habilité :
- Disponibilité convenue :
- Décisions déléguées / exclusions :
- Objectifs J+30 / J+60 / J+90 :
- Suppléant :
- Lien de décision et de charte :
- Conditions financières : accord distinct, jamais dans une issue publique

## J+30
- [ ] Livrables et preuves
- [ ] Revue et décisions

## J+60
- [ ] Livrables et preuves
- [ ] Revue et décisions

## J+90
- [ ] Bilan, transfert, renouvellement ou clôture
```

## État du dispositif

Les quatre appels peuvent être publiés. **Les personnes retenues, la durée exacte et les objectifs finaux restent à confirmer.** Le suivi du lancement OSDEP est centralisé dans [OSDEP-001](https://github.com/opensource-enterprise-factory/osef-tech-intelligence/issues/153).
