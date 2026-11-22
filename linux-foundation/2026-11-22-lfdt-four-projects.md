# LF Decentralized Trust — Quatre projets rejoignent l'écosystème

**Date de veille :** 22 novembre 2026  
**Date de l'annonce :** 18 novembre 2026  
**Source officielle :** https://www.lfdecentralizedtrust.org/announcements/lf-decentralized-trust-welcomes-four-new-projects  
**Statut :** fiche de veille ; actions OSEF proposées, non réalisées.

## Faits vérifiés
LF Decentralized Trust annonce l'accueil de quatre projets : IBC, Chaguar, ThunderID et EUDIPLO. Leurs domaines couvrent notamment l'interopérabilité, les registres distribués, les identités et les justificatifs numériques. Cette annonce ne constitue pas une preuve d'adoption en Afrique.

## 1. Ce qui change
Ces projets rejoignent l'écosystème et la gouvernance LFDT ; ils n'ont pas tous été créés à la date de l'annonce. EUDIPLO est issu de l'écosystème OpenWallet.

## 2. Intérêt pour l’Afrique francophone
Évaluer des briques de confiance, d'identité et d'interopérabilité pour banques, fintechs et administrations. **Limites :** maturité à qualifier ; aucune homologation BCEAO, conformité UEMOA ou adoption locale démontrée.

## 3. Action OSEF
Comparer les quatre projets (licences, gouvernance, maintenance, protocoles, sécurité et modalités de contribution). **Livrable :** matrice de qualification sourcée et recommandation de projet à expérimenter.

## 4. Lab à construire
**LAB-LFDT-IAM-001 — Autorisation d'un agent IA avec ThunderID (proposition)**
- **Objectif :** contrôler les droits d'un agent distinct de son utilisateur sur une API fictive.
- **Prérequis :** Git, Docker, OAuth/OIDC, API REST ; vérifier la documentation et les capacités réelles de ThunderID avant conception.
- **Étapes :** qualifier l'installation, configurer les identités, définir des droits, tester les accès autorisés/interdits, la révocation et les journaux.
- **Critère de succès :** les opérations interdites sont bloquées et les décisions sont traçables dans un environnement de test.
- **Statut :** non démarré ; faisabilité technique à confirmer.

## 5. Meetup afférent
**Titre proposé :** « Identité des agents IA : ThunderID, confiance et autorisation ».  
**Public :** architectes IAM, sécurité, paiement, DSI.  
**Format :** 75 minutes, architecture, démonstration uniquement si le lab est validé, discussion sur délégation et révocation.  
**Statut :** non programmé ; aucun intervenant confirmé.

## Impact opérationnel
Piste d'expérimentation de contrôles d'identité et de permissions, sans présumer une intégration en production.

## Opportunités de contribution
Examiner les dépôts, les licences et les règles de contribution ; proposer ensuite documentation, tests ou exemples upstream, sous réserve de validation des mainteneurs.

## Actions OSEF
- [ ] Vérifier les dépôts et les licences des quatre projets.
- [ ] Compléter la matrice comparative.
- [ ] Vérifier les capacités ThunderID nécessaires au lab.
- [ ] Reproduire les tests d'autorisation.
- [ ] Documenter les limites et contributions possibles.
