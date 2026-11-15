# Apache HTTP Server 2.4.71 — Correctifs de sécurité

**Date :** 11 novembre 2026  
**Date de veille :** 15 novembre 2026  
**Source primaire :** Apache HTTP Server Project  
**URL :** https://httpd.apache.org/security/vulnerabilities_24.html  
**Autre source officielle :** https://httpd.apache.org/download.cgi

## Faits vérifiés
Apache HTTP Server 2.4.71 est publié le 11 novembre 2026. Son bulletin officiel recense trois CVE corrigées, dont **CVE-2026-119618**, de sévérité critique, concernant `mod_http2` et affectant les versions 2.4.55 à 2.4.70 selon Apache. Les autres avis concernent `mod_md` et `mod_vhost_alias`. Le risque réel dépend de la version et de la configuration déployées.

## 1. Ce qui change
La version 2.4.71 corrige notamment un risque de corruption mémoire et d'exécution de code à distance dans `mod_http2`. L'annonce d'une vulnérabilité ne prouve pas que chaque serveur Apache est exploitable.

## 2. Intérêt pour l’Afrique francophone
DSI, RSSI, hébergeurs, banques et ESN peuvent renforcer leurs pratiques d'inventaire, d'évaluation de l'exposition, de changement contrôlé et de tests de non-régression.

## 3. Action OSEF
Produire une checklist de remédiation : versions, modules, exposition, correctif applicable à la distribution, fenêtre de maintenance, tests et rollback. **Livrable :** guide d'exploitation commenté et réutilisable.

## 4. Lab à construire
**LAB-HTTPD-SEC-001 — Qualification d'une mise à jour Apache.**
- **Objectif :** qualifier une mise à jour corrigée sans chercher à exploiter une vulnérabilité.
- **Prérequis :** VM ou conteneurs isolés, Apache, outils de test HTTP, configurations sauvegardées.
- **Étapes :** inventorier versions/modules ; tester HTTP et HTTP/2 selon configuration ; mettre à jour ; rejouer les tests ; documenter le retour arrière.
- **Critère de succès :** version corrigée ou correctif de distribution attesté, tests fonctionnels réussis et procédure de rollback vérifiable.

## 5. Meetup afférent
**« Vulnérabilité critique Apache : comment une DSI organise-t-elle une remédiation maîtrisée ? »** — DSI, RSSI, SRE, administrateurs Linux ; atelier proposé de 75 minutes, démonstration de qualification et discussion. **Non programmé.**

## Contribution Open Source
Examiner la documentation officielle et proposer une amélioration vérifiable, selon les règles de contribution du projet.

## Statut
Fiche publiée ; lab et meetup proposés, non exécutés.
