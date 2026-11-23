# OpenShell — Sécuriser les agents IA avec un runtime ouvert

**Date de veille :** 2026-11-23  
**Annonce CNCF :** 2026-11-10  
**Admission CNCF Sandbox :** 2026-09-26 (selon la fiche CNCF)  
**Sources officielles :** https://www.cncf.io/blog/2026/11/10/welcoming-openshell-to-the-cncf-open-governance-to-secure-agentic-ai/ ; https://www.cncf.io/projects/openshell/  
**Upstream :** https://github.com/ai-openshell/openshell  
**Statut :** fiche publiée ; lab et meetup proposés, non exécutés.

## Faits vérifiés
OpenShell est un runtime isolé et gouverné par politiques pour les agents IA, conçu pour restreindre notamment les accès aux fichiers, au réseau et aux identifiants. Le projet a rejoint la CNCF au niveau Sandbox. L'annonce CNCF mentionne une transition vers une gouvernance communautaire ; l'état exact du transfert des dépôts et infrastructures doit être revérifié avant toute contribution.

## Ce qui change
La gouvernance s'ouvre aux contributions de la communauté. Le statut Sandbox ne garantit pas la maturité opérationnelle ou la sécurité d'une installation.

## Intérêt pour l’Afrique francophone
Les banques, fintech, télécoms et entreprises qui expérimentent les agents IA peuvent tester des permissions appliquées par l'infrastructure plutôt que de dépendre uniquement des instructions du modèle. Les limites et hypothèses de sécurité doivent être documentées.

## Action OSEF
Concevoir **OSEF Secure Agent Runtime** comme architecture de référence expérimentale.
**Livrables :** schéma, matrice de permissions, preuves de tests d'autorisation/refus, limites identifiées et opportunités de contribution upstream.

## Lab à construire
**LAB-CNAI-SEC-001 — Isoler un agent IA avec OpenShell**
- **Objectif :** vérifier le contrôle des accès réseau et fichiers d'un agent ou processus isolé.
- **Prérequis :** Linux, runtime compatible selon la documentation de la version retenue, CLI OpenShell, sandbox jetable, aucun secret réel.
- **Étapes essentielles :** épingler une version ; installer ; créer une sandbox ; relever les restrictions par défaut ; ajouter une politique d'accès minimal ; tester les autorisations et refus ; collecter les traces ; étudier séparément la faisabilité Kubernetes.
- **Critère de succès :** refus et autorisations reproductibles avec traces et limites documentées.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Vos agents IA peuvent-ils accéder à tout votre réseau ?  
**Public :** DevSecOps, ingénieurs IA, SRE, RSSI et architectes.  
**Format :** 75 minutes, démonstration de politiques d'accès et discussion sur secrets, réseau et frontières de confiance.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Évaluer les mécanismes de contrôle et d'isolation sans présumer qu'un projet CNCF Sandbox remplace une analyse de sécurité complète.

## Opportunités de contribution
Documentation et exemples de politiques, tests d'intégration, observabilité OpenTelemetry, builds reproductibles, SBOM et rapports de bugs étayés.

## Actions OSEF
- [ ] Choisir et épingler une version compatible
- [ ] Vérifier les dépôts upstream actifs et les instructions de contribution
- [ ] Réaliser les tests en environnement isolé
- [ ] Produire la matrice de permissions et le rapport
- [ ] Rechercher une contribution upstream vérifiable
- [ ] Proposer le meetup après validation du lab
