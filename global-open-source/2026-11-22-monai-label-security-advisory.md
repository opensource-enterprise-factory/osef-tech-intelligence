# MONAI Label — Avis de sécurité critique et durcissement des services IA

**Date de l'avis :** 18 novembre 2026  
**Date de l'analyse AWS :** 20 novembre 2026  
**Date de la fiche :** 22 novembre 2026  
**Sources primaires :**
- https://github.com/Project-MONAI/MONAILabel/security/advisories/GHSA-qc22-rmgc-vg94
- https://aws.amazon.com/blogs/security/chinese-nexus-actors-cairn-ai-agents-found-a-zero-day-on-their-own/

## Faits vérifiés
L'avis GHSA-qc22-rmgc-vg94 décrit un risque de traversée de chemins et d'écriture arbitraire de fichiers affectant MONAI Label jusqu'à la version 0.8.5 incluse. Au moment de l'avis, aucune version publiée corrigée n'est indiquée. AWS décrit une opération offensive impliquant des agents IA ; ses conclusions d'attribution doivent rester attribuées à AWS, et non présentées comme des certitudes indépendantes.

## Ce qui change
Un avis de sécurité formel et une analyse de menace récente imposent de réévaluer l'exposition et les privilèges des services concernés. L'état de disponibilité d'une version corrigée doit être revérifié avant recommandation.

## Intérêt pour l’Afrique francophone
Hôpitaux, équipes de recherche et opérateurs de plateformes IA doivent inventorier les instances éventuellement concernées, réduire l'exposition réseau et protéger les données médicales. Ne pas extrapoler à tous les outils MONAI.

## Action OSEF
Produire un bulletin défensif : inventaire des versions, restriction réseau, authentification, permissions minimales et suivi de l'advisory. **Livrable :** checklist de durcissement et de suivi des correctifs.

## Lab à construire
**Proposition : LAB-MONAI-HARDENING-001** — objectif : auditer des contrôles défensifs sans exploitation. **Prérequis :** VM isolée, données synthétiques, documentation MONAI Label. **Étapes :** contrôler exposition, authentification, comptes de service, permissions et journalisation. **Succès :** configuration durcie et preuves de contrôle ; aucun service exposé publiquement.

## Meetup afférent
**Proposition :** « Sécuriser les plateformes IA face aux menaces automatisées ». **Public :** RSSI, SOC, DevSecOps et équipes IA. **Format :** 75 minutes, revue d'avis et démonstration défensive.

## Contribution Open Source
Examiner les besoins en tests de régression et documentation, en respectant les procédures de divulgation responsable. Ne pas publier de reproduction offensive.

**Statut :** fiche publiée ; lab et meetup proposés, non exécutés ni programmés.
