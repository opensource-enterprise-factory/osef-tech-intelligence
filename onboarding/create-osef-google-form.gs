/**
 * OSEF — Création d'un formulaire de participation et d'une feuille de réponses.
 * Exécuter UNE fois depuis https://script.google.com (fonction creerFormulaireOSEF).
 * Les URL sont disponibles dans les journaux d'exécution.
 * Le formulaire est créé FERMÉ : tester et vérifier les droits avant publication.
 * Nécessite autorisations Google Forms et Google Sheets du compte exécutant.
 */
function creerFormulaireOSEF() {
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty('OSEF_FORM_ID');
  if (existingId) {
    const existing = FormApp.openById(existingId);
    console.log('Formulaire existant — aucune duplication.');
    console.log('Édition : ' + existing.getEditUrl());
    console.log('Réponse : ' + existing.getPublishedUrl());
    console.log('Feuille : https://docs.google.com/spreadsheets/d/' + existing.getDestinationId() + '/edit');
    return;
  }

  const title = 'OSEF — Appel aux contributeurs Open Source d’Afrique francophone';
  const form = FormApp.create(title);
  // Restreindre la collecte : les réponses sont privées pour les éditeurs autorisés.
  // Ne PAS activer la collecte automatique d'e-mails ou un résumé public.
  form.setDescription(
    'OSEF invite les ingénieurs d’Afrique francophone à réaliser des labs techniques, ' +
    'proposer des contributions open source et présenter des retours d’expérience. ' +
    'Participation volontaire, sans rémunération, mentorat ou intervention garantis.\n\n' +
    'Vie privée : les réponses sont accessibles aux seules personnes habilitées à gérer cet appel. ' +
    'Les champs publics (pseudonyme et lien GitHub) peuvent être repris dans GitHub uniquement ' +
    'avec une autorisation explicite et distincte. Le pays est facultatif. ' +
    'L’e-mail est facultatif et utilisé uniquement pour contacter la personne dans le cadre d’OSEF. ' +
    'Ne transmettez jamais de secrets, données clients, numéro de téléphone, CV privé ou informations sensibles.\n\n' +
    'Responsable de traitement : équipe organisatrice OSEF. Pour demander une correction ou ' +
    'suppression, utiliser le canal de contact qui sera communiqué par les organisateurs avant publication. ' +
    'Avant de publier, compléter une adresse de contact réelle et une politique de conservation des données.'
  );
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setPublishingSummary(false);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setAllowResponseEdits(true);
  form.setConfirmationMessage(
    'Merci de votre intérêt ! Votre réponse est enregistrée. ' +
    'La participation à un lab ou à un meetup dépendra des disponibilités et validations OSEF. ' +
    'Explorez le catalogue : https://github.com/opensource-enterprise-factory/osef-tech-intelligence/blob/main/JOIN-US.md'
  );
  // Garder le formulaire fermé pendant vérification et test.
  form.setAcceptingResponses(false);
  if (form.supportsAdvancedResponderPermissions()) {
    form.setPublished(false);
  }

  form.addSectionHeaderItem().setTitle('1 — Profil technique')
    .setHelpText('Évitez les informations confidentielles et les coordonnées non nécessaires.');

  form.addTextItem().setTitle('Nom d’usage ou pseudonyme')
    .setHelpText('Le pseudonyme suffit ; votre identité civile n’est pas exigée.')
    .setRequired(true);
  form.addTextItem().setTitle('Profil GitHub public')
    .setHelpText('URL d’un profil déjà public, par exemple https://github.com/username')
    .setRequired(true);
  form.addListItem().setTitle('Pays de résidence (facultatif)')
    .setChoiceValues([
      'Bénin','Burkina Faso','Burundi','Cameroun','Congo','Côte d’Ivoire',
      'Gabon','Guinée','Madagascar','Mali','Niger','RDC','Rwanda','Sénégal',
      'Tchad','Togo','Tunisie','Maroc','Autre pays','Je préfère ne pas répondre'
    ]).setRequired(false);
  form.addCheckboxItem().setTitle('Domaines techniques d’intérêt')
    .setChoiceValues([
      'Développement logiciel','DevOps / SRE','Kubernetes / Cloud Native',
      'Platform Engineering','Cybersécurité / Supply Chain',
      'Data / IA','Infrastructure / OpenStack / Ceph',
      'Documentation / Traduction','Gouvernance / OSPO','Autre'
    ]).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Expérience des contributions open source')
    .setChoiceValues([
      'Je débute','J’ai déjà soumis une contribution',
      'Je contribue régulièrement','Je maintiens un projet open source'
    ]).setRequired(true);

  form.addSectionHeaderItem().setTitle('2 — Votre parcours avec OSEF');
  form.addCheckboxItem().setTitle('Comment souhaitez-vous participer ?')
    .setChoiceValues([
      'Réaliser un lab technique',
      'Contribuer à un projet open source upstream',
      'Co-construire ou revoir un lab',
      'Proposer un sujet de meetup',
      'Présenter une démonstration / un retour d’expérience',
      'Accompagner bénévolement des contributeurs (si disponible)'
    ]).setRequired(true);
  form.addTextItem().setTitle('LAB ou issue GitHub choisi (facultatif)')
    .setHelpText('Exemple : LAB-AFR-002 ou #116 ; voir le catalogue public.')
    .setRequired(false);
  form.addParagraphTextItem().setTitle('Quelle contribution ou démonstration aimeriez-vous réaliser ?')
    .setHelpText('Quelques lignes, sans données confidentielles.')
    .setRequired(true);
  form.addMultipleChoiceItem().setTitle('Disponibilité indicative')
    .setChoiceValues([
      '1 à 2 h par semaine','3 à 4 h par semaine',
      '5 h ou plus par semaine','Ponctuellement / selon possibilités'
    ]).setRequired(true);

  form.addSectionHeaderItem().setTitle('3 — Contact et confidentialité');
  form.addTextItem().setTitle('Adresse e-mail pour être recontacté(e) — facultative')
    .setHelpText('Ne sera pas publiée sur GitHub. En l’absence d’e-mail, le suivi pourra se faire via GitHub si vous le souhaitez.')
    .setRequired(false);
  form.addCheckboxItem().setTitle('Autorisation distincte de citation publique')
    .setChoiceValues([
      'J’autorise OSEF à citer mon pseudonyme et mon GitHub publics dans le suivi des labs.'
    ]).setRequired(false);
  form.addCheckboxItem().setTitle('Information et accord')
    .setChoiceValues([
      'Je comprends l’objectif de cet appel, le caractère volontaire de la participation et le traitement des réponses aux seules fins d’organisation des labs et meetups.'
    ]).setRequired(true);

  const sheet = SpreadsheetApp.create('OSEF — Inscriptions contributeurs — réponses privées');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  props.setProperty('OSEF_FORM_ID', form.getId());
  console.log('CRÉATION EFFECTUÉE — FORMULAIRE FERMÉ POUR REVUE');
  console.log('Édition (ne pas partager publiquement) : ' + form.getEditUrl());
  console.log('Lien répondants (à publier APRES ouverture) : ' + form.getPublishedUrl());
  console.log('Réponses privées : ' + sheet.getUrl());
  console.log('Avant ouverture : ajouter un contact réel et une durée de conservation ; contrôler les permissions des fichiers ; tester les questions.');
}
