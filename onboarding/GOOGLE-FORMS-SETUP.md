# Google Forms — Appel OSEF aux contributeurs

**Statut au 15 novembre 2026 : kit d'installation prêt, formulaire Google non encore créé ni publié.**

Ce dépôt ne dispose pas d'une création directe de Google Forms via le connecteur actuel. Le script [`create-osef-google-form.gs`](create-osef-google-form.gs) génère, dans le compte Google qui l'exécute, un formulaire et une feuille de réponses Google Sheets.

## Création (une seule fois)

1. Ouvrir **https://script.google.com** avec le compte Google officiel qui doit posséder les données.
2. Nouveau projet → remplacer `Code.gs` par le contenu de [`create-osef-google-form.gs`](create-osef-google-form.gs).
3. Enregistrer et lancer la fonction **`creerFormulaireOSEF`**.
4. Accepter uniquement les autorisations nécessaires après les avoir lues. Le script utilise Google Forms, Google Sheets et les propriétés du projet.
5. Ouvrir **Exécutions / Journaux** pour retrouver les liens : formulaire **éditeur**, formulaire **répondants**, feuille **réponses**.
6. Le script empêche les doublons lorsqu'on le relance dans le **même projet Apps Script**, en conservant l'ID du formulaire.
7. **Ne pas partager le lien éditeur ni le lien de la feuille de réponses** avec les candidats.

## Revue obligatoire avant lancement

- [ ] Remplacer la mention générique du responsable de traitement par le nom / canal de contact **réel** des organisateurs OSEF.
- [ ] Définir et publier une durée de conservation, une procédure d'accès/correction/suppression et les destinataires internes autorisés.
- [ ] Vérifier que la collecte automatique d'e-mails est désactivée et que l'e-mail proposé est facultatif.
- [ ] Contrôler que les répondants n'ont pas accès aux réponses d'autrui, au résumé ou à la feuille Sheets.
- [ ] Vérifier la disponibilité du formulaire aux personnes sans compte Google si cela est souhaité.
- [ ] Faire une soumission de test, vérifier les données et supprimer la réponse de test depuis **Forms ET Sheets**.
- [ ] Publier/ouvrir le formulaire **manuellement** via Google Forms seulement après validation ; certaines versions de Forms nécessitent une action « Publier ».
- [ ] Copier le lien **répondants** réel dans [`JOIN-US.md`](../JOIN-US.md), le README et le message LinkedIn final.
- [ ] Désactiver ou archiver ensuite l'ancien formulaire GitHub public si Google Forms devient l'unique canal.

## Questions incluses

Profil : pseudonyme, GitHub public, pays (facultatif), spécialités, expérience OSS.  
Participation : type d'engagement, lab/issue choisi, proposition de contribution, disponibilité.  
Confidentialité : e-mail facultatif, autorisation facultative pour citer publiquement le pseudonyme, information/accord obligatoire.

**Important :** des données personnelles même facultatives exigent un accès restreint et une gestion documentée. La case d'autorisation de citation publique est indépendante de celle permettant de traiter l'inscription.

## Liens de référence

- [Catalogue labs](../africa-opportunities/LABS-CATALOGUE.md)
- [Suivi labs](../africa-opportunities/LABS-TRACKER.md)
- [Meetups possibles](../africa-opportunities/MEETUPS-CATALOGUE.md)
- [Documentation officielle Apps Script Forms](https://developers.google.com/apps-script/reference/forms)
