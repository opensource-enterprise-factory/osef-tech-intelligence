# FINOS — Graduation annoncée de CALM

**Date de veille :** 22 novembre 2026  
**Annonce relayée :** 19 novembre 2026  
**Source officielle :** https://www.finos.org/blog  
**Documentation officielle :** https://calm.finos.org/  
**Statut :** fiche de veille ; actions OSEF proposées, non réalisées.

## Faits vérifiés
Le blog FINOS annonce la graduation de CALM (Common Architecture Language Model), langage de description et de validation d'architectures logicielles. **Réserve :** le site technique affichait encore « incubating » lors de la veille du 22 novembre ; le statut n'était pas synchronisé dans toutes les sources officielles.

## 1. Ce qui change
Selon l'annonce FINOS, CALM accède au niveau « Graduated » de la fondation. Ce changement de gouvernance ne signifie pas qu'une nouvelle version technique a été publiée le même jour.

## 2. Intérêt pour l’Afrique francophone
Les DSI, banques et fintechs peuvent expérimenter une description d'architecture versionnée et des contrôles automatiques en CI. **Limites :** CALM ne démontre pas, à lui seul, une conformité réglementaire ou la sécurité de production.

## 3. Action OSEF
Modéliser une plateforme de paiement fictive (API, ledger, antifraude, notifications) et intégrer des vérifications d'architecture en CI. **Livrable :** modèle CALM versionné, règles et guide de validation.

## 4. Lab à construire
**LAB-FINOS-CALM-001 — Architecture-as-Code pour une plateforme de paiement (proposition)**
- **Objectif :** décrire et valider automatiquement une architecture fictive.
- **Prérequis :** Git, JSON, CI/CD, principes d'architecture distribuée et outillage CALM compatible.
- **Étapes :** installer le CLI, modéliser les composants et relations, valider le modèle, introduire une modification invalide et constater l'échec CI.
- **Critère de succès :** un modèle valide passe, un cas invalide échoue et les résultats sont reproductibles.
- **Statut :** non démarré.

## 5. Meetup afférent
**Titre proposé :** « Architecture-as-Code : industrialiser les architectures financières avec FINOS CALM ».  
**Public :** architectes, DevOps, ingénieurs paiement et DSI.  
**Format :** 75 minutes avec revue de modèle, démonstration CI si prête et discussion.  
**Statut :** non programmé.

## Impact opérationnel
Traçabilité potentielle des choix d'architecture et automatisation de certaines validations ; aucun gain chiffré n'est revendiqué.

## Opportunités de contribution
Proposer exemples, tests et documentation selon les règles de contribution FINOS.

## Actions OSEF
- [ ] Recontrôler le statut de graduation dans les référentiels officiels.
- [ ] Vérifier la version de CALM et ses licences.
- [ ] Décrire la plateforme fictive.
- [ ] Intégrer la validation dans une CI.
- [ ] Faire reproduire les tests par un second ingénieur.
