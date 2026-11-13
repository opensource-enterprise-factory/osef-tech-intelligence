# LAB-CONTRIB-002 — Première contribution vérifiable à Kubernetes ou Cilium

**Statut :** proposé, non exécuté  
**Priorité :** P2  
**Durée estimée :** 2 sessions de 90 minutes, hors délai de revue upstream  
**Public :** ingénieurs DevOps/SRE, développeurs, contributeurs débutants  
**Fiche de veille liée :** [CNCF Community Awards 2026](../cloud-native/2026/2026-11-13-cncf-community-awards-contribution.md)  
**Source primaire de l'actualité :** https://www.cncf.io/announcements/2026/11/12/cncf-recognizes-cloud-native-champions-in-2026-community-awards/

## Objectif
Accompagner un contributeur jusqu'à la soumission d'une pull request réelle, traçable et conforme aux règles d'un projet CNCF. La fusion n'est pas garantie.

## Choix de la piste
- **Piste A — Kubernetes documentation :** recommandée pour un premier parcours ; sélectionner une issue ou une amélioration vérifiable dans `kubernetes/website`.
- **Piste B — Cilium :** réservée aux participants capables de reproduire un défaut ou d'exécuter les tests appropriés. Commencer par la documentation si l'environnement technique n'est pas disponible.
- Ne pas prétendre que toutes les issues portent une étiquette `good first issue` : vérifier les labels et consignes au moment du lab.

## Prérequis
- Compte GitHub, Git installé, éditeur Markdown/code et terminal.
- Lecture de `CONTRIBUTING.md`, du code de conduite et des instructions de signature/DCO ou CLA du projet retenu.
- Pour une modification documentaire : environnement local compatible avec la procédure officielle de prévisualisation et de validation du projet.
- Pour une modification technique : environnement isolé et ressources nécessaires aux tests ciblés.
- Aucune connexion à une infrastructure de production n'est requise.

## Déroulement reproductible

### 1. Découverte et qualification (20 min)
1. Consulter les issues ouvertes sur le dépôt upstream.
2. Choisir une issue non attribuée ou demander l'accord des mainteneurs si nécessaire.
3. Vérifier que le problème est reproductible, que le périmètre est limité et que le changement ne duplique pas une PR existante.
4. Consigner l'URL de l'issue et l'état initial.

### 2. Préparation du fork (15 min)
1. Forker le dépôt officiel.
2. Cloner le fork, ajouter le dépôt officiel comme remote `upstream`.
3. Créer une branche descriptive depuis la branche cible indiquée par le projet.
4. Vérifier les règles de contribution avant tout commit.

### 3. Changement minimal (30 min)
1. Reproduire l'erreur ou confirmer le besoin documentaire.
2. Apporter une seule modification cohérente.
3. Ajouter ou mettre à jour les tests si le type de contribution le demande.
4. Éviter toute donnée personnelle, secret ou information d'entreprise.

### 4. Validation locale (20 min)
1. Exécuter les contrôles prescrits par le projet (format, liens, build documentaire ou tests ciblés).
2. Consigner les commandes exécutées, résultats et limites.
3. Corriger les échecs avant soumission, ou les documenter clairement si non liés au changement.

### 5. Pull request et revue (25 min)
1. Pousser la branche sur le fork.
2. Ouvrir la PR vers la branche appropriée.
3. Décrire le problème, la solution, les tests et l'issue associée.
4. Suivre les retours des mainteneurs ; ne pas solliciter abusivement les reviewers.
5. Mettre à jour le registre des contributions.

## Critères d'acceptation
- [ ] Issue ou besoin upstream identifié avec URL vérifiable
- [ ] Règles de contribution consultées et respectées
- [ ] Changement minimal et traçable dans une branche dédiée
- [ ] Tests/validations applicables exécutés et documentés
- [ ] PR upstream soumise avec description et preuves
- [ ] Statut de la PR consigné sans déclarer une fusion non confirmée
- [ ] RETEX reproductible rédigé

## Livrables
1. Lien de l'issue upstream (ou justification d'une PR sans issue).
2. Lien de la PR.
3. Journal des commandes et des validations.
4. Courte fiche RETEX : difficulté, temps passé, retours upstream et prochaine étape.
5. Registre de suivi : contributeur, projet, issue, PR, état, mentor.

## Sécurité et limites
- Lab uniquement sur un environnement personnel/isolé ; aucun test de charge sur les services publics du projet.
- Ne jamais publier de tokens, identifiants, secrets ou données client.
- Les délais et décisions de revue dépendent exclusivement des mainteneurs.
- La soumission d'une PR n'équivaut pas à une contribution fusionnée.

## Meetup afférent (proposition, non programmé)
**De consommateur Kubernetes à contributeur CNCF : par où commencer ?**  
Public : développeurs, DevOps/SRE et étudiants. Format : 75 min avec démonstration de la préparation d'une PR et discussion sur la revue upstream.

## Références techniques officielles
- Kubernetes Website : https://github.com/kubernetes/website
- Kubernetes Contributor Guide : https://www.kubernetes.dev/docs/guide/
- Cilium : https://github.com/cilium/cilium
- Cilium Contributor Guide : https://docs.cilium.io/en/stable/contributing/

## Suivi OSEF
- [ ] Désigner un mentor
- [ ] Sélectionner et valider une issue upstream
- [ ] Exécuter une session pilote
- [ ] Collecter les liens des PR et résultats
- [ ] Publier un RETEX factuel
