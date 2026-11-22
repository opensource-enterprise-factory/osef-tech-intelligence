# Apache Arrow Java 20.0.0 — Compatibilité JDK et validation des échanges de données

**Date de l'annonce :** 21 novembre 2026  
**Date de la fiche :** 22 novembre 2026  
**Source primaire :** https://arrow.apache.org/blog/2026/11/21/arrow-java-20.0.0/

## Faits vérifiés
La release Apache Arrow Java 20.0.0 relève le JDK minimal à 17. Les notes de version mentionnent notamment des évolutions d'Arrow Flight, de la compression LZ4 et des validations IPC. Il s'agit de l'implémentation Java ; ne pas la confondre avec la release générale d'Arrow portant le même numéro.

## Ce qui change
Les applications qui utilisent encore JDK 11 doivent qualifier leur compatibilité avant mise à niveau vers Arrow Java 20.0.0.

## Intérêt pour l’Afrique francophone
Les équipes data et Java des banques, ESN et plateformes analytiques peuvent anticiper les incompatibilités de build, de runtime et de protocole. Aucun gain de performance n'est garanti sans mesures.

## Action OSEF
Préparer une matrice de migration Arrow Java 19 → 20 : versions JDK, compilation, sérialisation IPC, Flight/TLS et dépendances. **Livrable :** guide de qualification et résultats de tests.

## Lab à construire
**Proposition : LAB-ARROW-JAVA-020** — objectif : tester la migration et les échanges de données. **Prérequis :** JDK 11 et 17, Maven, conteneurs, données synthétiques. **Étapes :** compiler des projets tests, exécuter les tests IPC, contrôler Flight/TLS et comparer les observations. **Succès :** rapport reproductible et incompatibilités explicitées.

## Meetup afférent
**Proposition :** « Apache Arrow Java : moderniser ses pipelines sans rupture ». **Public :** ingénieurs data et architectes Java. **Format :** 75 minutes, démonstration de compatibilité et questions.

## Contribution Open Source
Proposer tests de compatibilité, améliorations de documentation ou rapports d'anomalies reproductibles selon les procédures Apache Arrow.

**Statut :** fiche publiée ; lab et meetup proposés, non exécutés ni programmés.
