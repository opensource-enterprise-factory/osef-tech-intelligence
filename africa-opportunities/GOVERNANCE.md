# Gouvernance du registre Africa Opportunities

**Version :** 1.0 — 2026-11-10  
**Périmètre :** `africa-opportunities/`  
**Statut :** règles éditoriales applicables ; rôles proposés, non attribués.

## 1. Objectif et sources
Centraliser les opportunités pertinentes pour les ingénieurs, DSI, communautés et partenaires d'Afrique francophone. Chaque opportunité externe doit renvoyer à une **source primaire** (organisateur, fondation, dépôt officiel) et distinguer annonce, appel ouvert, candidature envoyée, résultat et proposition interne. Une page d'accueil ou une fiche OSEF ne suffit pas à prouver une échéance.

## 2. Rôles (à attribuer)
- **Responsable éditorial** : accepte les nouvelles fiches, tranche les doublons et valide les changements de statut.
- **Référent de domaine** (CNCF, Linux Foundation, Open Source mondiale) : qualifie la source, les critères et les dates.
- **Responsable d'opportunité** : suit l'action, la preuve de candidature, le livrable et la prochaine échéance.
- **Relecteur** : vérifie source, statut, risque de promesse implicite et confidentialité.
Aucune personne n'est désignée par ce document.

## 3. Identifiants et organisation
- Une opportunité = un identifiant stable `OPP-###` et une fiche canonique `opp-###-slug.md`.
- `REGISTRY.md` est l'index maître ; `README.md` est le point d'entrée ; `OPPORTUNITY_TEMPLATE.md` est le modèle.
- Les quatre fiches historiques sans ID restent consultables ; les entrées OPP-014 à OPP-016 pointent vers leurs fiches historiques. Éviter toute duplication de contenu.
- La date du fichier n'est pas la date de l'événement. Ne jamais renuméroter les ID.

## 4. Cycle de vie et transitions
- `À qualifier` : source, calendrier ou éligibilité insuffisants.
- `Confirmée` : existence établie sur source officielle, mais candidature non présumée ouverte.
- `Ouverte` : procédure et dates d'inscription/CFP/bourse vérifiées sur source officielle.
- `En préparation` : OSEF prépare un dossier ; pas encore soumis.
- `Candidature déposée` : preuve de soumission conservée par le responsable.
- `Acceptée` / `Refusée` : notification vérifiable.
- `Clôturée` / `Expirée` : appel terminé ou date dépassée, vérifié.
- `Proposition OSEF` : lab, meetup ou partenariat imaginé en interne, **pas une opportunité externe ouverte**.
- `À revalider` : état temporaire si la preuve est ancienne, ambiguë ou inaccessible.

Une transition vers Ouverte, Candidature déposée ou Acceptée exige une preuve datée. Ne jamais déduire une acceptation d'une invitation à candidater.

## 5. Champs obligatoires
ID ; titre ; catégorie ; zone géographique (événement physique / participation depuis Afrique) ; priorité P0/P1/P2 ; statut ; date d'annonce ; échéance avec fuseau si connu ; source primaire précise ; date de vérification ; critères et restrictions ; responsable (ou non assigné) ; prochaine action ; date de prochaine revue ; livrable ; liens de preuve ; risques et limites ; éventuelle référence LAB/issue.

Les valeurs inconnues doivent être indiquées `Non confirmé` ou `Non assigné`, jamais inventées.

## 6. Cadence
- **P0** : revue au moins deux fois par semaine et avant toute échéance rapprochée.
- **P1** : revue hebdomadaire.
- **P2** : revue mensuelle, ou immédiatement après changement officiel.
- Revue supplémentaire à J-14, J-7 et J-2 pour toute échéance confirmée ; si l'échéance est dans moins de 14 jours, revue immédiate.
- Les trois veilles OSEF peuvent proposer des entrées ; **elles ne prouvent pas à elles seules leur éligibilité**.
- Ne pas mettre à jour automatiquement une date de vérification sans consulter la source primaire.

## 7. Priorisation
- **P0** : échéance proche et action réalisable / valeur stratégique élevée.
- **P1** : opportunité pertinente à préparer ou développer.
- **P2** : veille, formation permanente ou piste non urgente.
Priorité et statut sont indépendants : une opportunité P0 peut rester `À revalider`.

## 8. Workflow GitHub
1. Vérifier dans `REGISTRY.md` et les fiches historiques si le sujet existe.
2. Lire la source primaire et relever la date, l'éligibilité et la fenêtre de candidature.
3. Créer la fiche depuis `OPPORTUNITY_TEMPLATE.md` ; attribuer le prochain ID libre.
4. Mettre à jour `REGISTRY.md` (statut, action, propriétaire, prochaine revue).
5. Faire relire avant annonce externe ou dépôt de candidature.
6. Après action : consigner la preuve, la date et la décision ; fermer/archiver sans supprimer l'historique.
Les secrets, coordonnées personnelles, candidatures privées et documents d'identité ne doivent jamais être déposés dans un dépôt public.

## 9. Critères de qualité
- Lien précis et accessible vers la source primaire.
- Faits distincts des analyses et propositions OSEF.
- Aucune promesse de financement, d'invitation, de certification ou de partenariat.
- Date et fuseau explicités si connus.
- Aucune entrée dupliquée entre les trois veilles.
- Pour les propositions techniques : objectif, prérequis, étapes, critère de succès et statut non programmé.

## 10. Indicateurs de suivi
Nombre d'opportunités par statut, taux de fiches avec source primaire et date de revue, nombre de candidatures réellement déposées, résultats obtenus, contributions acceptées et échéances dépassées. Aucun chiffre de résultat ne doit être affiché sans preuve.
