# OSDEP — Catalogue de lancement (12 semaines proposées)

> **Backlog éditorial, pas calendrier événementiel.** Dates, speakers et responsables non confirmés. Toute technologie doit faire l'objet d'une fiche de qualification avant d'être promue en lab ou blueprint.

| Semaine candidate | Technologie | Question de découverte / meetup | Lab proposé | Marché prioritaire |
|---|---|---|---|---|
| 01 | Nextcloud | Comment construire un Digital Workplace Open Source ? | Installation, configuration, tests et sauvegarde | Entreprises / ESN |
| 02 | Zammad | Comment structurer un Service Desk d'entreprise ? | Ticket de bout en bout, notifications et SLA | ESN / Entreprises |
| 03 | Ansible | Comment industrialiser les déploiements Open Source ? | Automatiser un blueprint OSEF | ESN |
| 04 | Keycloak | Comment fournir IAM et SSO self-hosted ? | Connexion SSO et rôles | Cloud providers / Entreprises |
| 05 | OpenTofu | Comment provisionner une infrastructure as code ? | Créer une VM avec validation et destruction contrôlée | Cloud providers / ESN |
| 06 | Harbor | Comment proposer un Registry-as-a-Service ? | Registre privé, RBAC, scan, sauvegarde | Cloud providers |
| 07 | Prometheus + Grafana | Comment offrir l'observabilité managée ? | Supervision et alertes | Cloud providers |
| 08 | Restic | Comment prouver une restauration réussie ? | Sauvegarde/restauration et journal de preuves | ESN / Entreprises |
| 09 | Apache CloudStack | Comment construire un IaaS Open Source ? | Architecture et lab réduit selon ressources | Cloud providers |
| 10 | OpenStack | Quels services et APIs pour les fournisseurs cloud ? | Exploration des APIs et provisionnement | Cloud providers |
| 11 | Argo CD | Comment fiabiliser les déploiements via GitOps ? | Synchronisation, drift, rollback contrôlé | ESN / Cloud providers |
| 12 | Ceph | Comment aborder le stockage distribué cloud ? | Architecture, risques et scénarios de panne | Cloud providers |

## Règles de qualification

1. Identifier au moins un **besoin concret** et les acteurs concernés ; ne pas confondre un cas plausible et une demande confirmée.
2. Documenter projet, version testée, licence, conditions de distribution, documentation, communauté, sécurité et alternatives.
3. Fixer les exigences matérielles réelles. CloudStack, OpenStack et Ceph peuvent nécessiter des labs à ressources réduites ou un atelier de conception avant tout déploiement.
4. Obtenir **un champion** et **un reviewer** volontaires avant la programmation.
5. Terminer par une décision : EXPLORE / LAB / INDUSTRIALIZE / HOLD, argumentée et liée à des preuves.

## Premier sujet recommandé pour l'appel à volontaires

**Harbor — Registry-as-a-Service** : sujet utile au cloud africain, démontrable en environnement isolé, sans présumer d'un besoin commercial confirmé. Consulter la documentation et le dépôt upstream avant de choisir une issue de contribution. Ne jamais déclarer une PR acceptée sans lien de fusion.
