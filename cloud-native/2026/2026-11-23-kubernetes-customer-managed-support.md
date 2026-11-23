# Kubernetes — Supporter un logiciel installé sur les clusters des clients

**Date de veille :** 2026-11-23  
**Date de publication :** 2026-11-19  
**Source primaire :** article de contributeur sur le blog CNCF, Adam Zahorscak (Fairwinds)  
**URL :** https://www.cncf.io/blog/2026/11/19/how-to-support-your-app-on-kubernetes-environments-you-dont-control/  
**Documentation Kubernetes :** https://kubernetes.io/releases/  
**Statut :** fiche publiée ; lab et meetup proposés, non exécutés.

## Faits vérifiés
Un article publié sur le blog CNCF décrit les défis de support des applications Kubernetes sur des clusters que l'éditeur ne contrôle pas : versions, politiques d'admission, stockage, DNS, certificats, registres et observabilité. Il recommande une matrice de compatibilité, des prérequis et des procédures de diagnostic. C'est un retour d'expérience de contributeur, pas une nouvelle norme CNCF.

## Ce qui change
L'attention se déplace du seul déploiement vers la capacité à diagnostiquer et maintenir un produit sur des environnements clients hétérogènes.

## Intérêt pour l’Afrique francophone
Les entreprises disposent de Kubernetes managé, on-premises ou hybride, avec des distributions et configurations différentes. Une offre d'open source commercial doit définir clairement ses prérequis, exclusions et engagements de support.

## Action OSEF
Créer **OSEF Kubernetes Enterprise Support Readiness Kit**.
**Livrables :** matrice de compatibilité, script de prédiagnostic, questionnaire d'onboarding, procédure d'escalade et modèle de périmètre contractuel.

## Lab à construire
**LAB-PLATFORM-001 — Compatibilité d'une application sur deux clusters Kubernetes**
- **Objectif :** vérifier la portabilité et la qualité du diagnostic dans deux environnements différents.
- **Prérequis :** deux clusters isolés, Helm ou Kustomize, kubectl, Git, application témoin et données de test.
- **Étapes essentielles :** définir les prérequis ; installer sur le premier cluster ; répéter sur un second environnement ; injecter des incompatibilités de permissions, stockage et DNS ; collecter les logs et événements ; établir une matrice de support et des remédiations.
- **Critère de succès :** chaque incompatibilité est détectée, classée et résolue ou déclarée hors support avec justification.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Vendre et maintenir une application Open Source sur Kubernetes.  
**Public :** CTO, éditeurs, ESN, SRE, équipes support et commerciaux techniques.  
**Format :** 60 minutes, démonstration d'une matrice de compatibilité et discussion sur les engagements de support.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Réduire l'incertitude à l'onboarding et rendre les limites de support explicites. Aucun gain de coût ou de SLA n'est affirmé avant mesure.

## Opportunités de contribution
Guides d'installation, scripts de diagnostic, documentation francophone, tests de compatibilité et issues upstream après reproduction des anomalies.

## Actions OSEF
- [ ] Sélectionner une application de référence
- [ ] Définir les environnements et versions supportés
- [ ] Réaliser les tests de compatibilité
- [ ] Documenter la matrice et les diagnostics
- [ ] Faire relire les conditions de support
- [ ] Proposer un meetup après validation technique
