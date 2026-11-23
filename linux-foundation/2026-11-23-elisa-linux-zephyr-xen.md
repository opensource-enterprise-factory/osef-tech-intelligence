# ELISA — Linux, Zephyr et Xen dans une architecture à criticités mixtes

**Veille :** 23 novembre 2026  
**Publication :** 19 novembre 2026  
**Session technique d'origine :** 13 août 2026  
**Source officielle :** https://elisa.tech/ambassadors/2026/11/19/elisa-project-exploring-linux-zephyr-and-xen-in-safety-critical-systems/  
**Statut :** fiche publiée ; expérimentation OSEF non effectuée.

## Faits vérifiés
ELISA décrit une démonstration combinant Linux et Zephyr dans des domaines séparés par Xen, avec un environnement QEMU. Un rapprochement avec l'environnement AGL SoDeV est évoqué comme perspective, non comme migration achevée.

## 1. Ce qui change
Le compte rendu documente une démarche d'architecture multi-systèmes et de mutualisation des environnements d'intégration. Il ne présente pas une certification de sûreté.

## 2. Intérêt pour l’Afrique francophone
Formation à la virtualisation, à l'isolation et à la répartition des responsabilités dans les systèmes embarqués, industriels et de transport. Limites : isolation observée en démonstration ≠ preuve de sûreté fonctionnelle ou de certification.

## 3. Action OSEF
Qualifier puis reproduire le démonstrateur officiel, sans prétendre à une utilisation en système critique. **Livrable :** schéma d'architecture, instructions de reproduction, journal des tests et matrice des limites.

## 4. Lab à construire
**LAB-ELISA-XEN-001 — Isolement Linux et Zephyr**
- **Objectif :** observer la séparation de charges Linux et Zephyr par Xen en environnement contrôlé.
- **Prérequis :** Linux, Git, QEMU, Xen, Zephyr et bases de virtualisation.
- **Étapes :** identifier les sources upstream ; vérifier versions et licences ; exécuter le démonstrateur ; relever les domaines ; provoquer une défaillance contrôlée ; analyser les journaux.
- **Critère de succès :** démarrage et scénario de défaillance reproductibles, avec limites de l'isolement explicites.
- **Statut :** non démarré ; faisabilité à qualifier.

## 5. Meetup afférent
**Titre :** Linux + Zephyr + Xen : comprendre les architectures de systèmes critiques.  
**Public :** ingénieurs Linux, embedded, sécurité, étudiants et chercheurs.  
**Format :** 90 minutes : schéma, démonstration QEMU si lab validé, discussion sur sûreté et limites.  
**Statut :** proposé, non programmé.

## Impact opérationnel et limites
Acquisition de compétences en architecture de systèmes isolés ; aucun niveau de certification ou déploiement industriel n'est revendiqué.

## Opportunités de contribution
Documentation de démarrage, tests QEMU, retours sur le démonstrateur et participation aux échanges ELISA/AGL selon règles officielles.

## Checklist OSEF
- [ ] Identifier les dépôts et versions officiels.
- [ ] Qualifier les prérequis QEMU/Xen.
- [ ] Exécuter le scénario de démarrage.
- [ ] Tester une défaillance contrôlée.
- [ ] Documenter les limites et faire relire les résultats.
