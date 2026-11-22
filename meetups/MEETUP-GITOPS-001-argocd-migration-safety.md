# MEETUP-GITOPS-001 — Argo CD : Synced et Healthy ne suffisent pas toujours

**Statut :** proposé, non programmé  
**Durée proposée :** 75 minutes  
**Date, lieu, speakers, inscriptions :** à définir  
**Source primaire :** https://www.cncf.io/blog/2026/11/20/when-a-sync-window-closes-how-argo-cd-self-heal-skipped-the-migration-hook/  
**Veille :** [22 novembre 2026](../cloud-native/2026/2026-11-22-argocd-self-heal-migration-risk.md)

## Faits vérifiés
Un retour d'expérience publié sur le blog CNCF le 20 novembre 2026 décrit un scénario dans lequel l'interaction sync window, selfHeal et hooks Argo CD peut laisser une migration non rejouée alors que l'application est Synced et Healthy. Il ne s'agit pas d'un avis de sécurité ni d'une preuve que toutes les versions sont affectées.

## Ce qui change
Les équipes disposent d'un scénario concret pour questionner la valeur probante des seuls statuts de synchronisation.

## Intérêt pour l’Afrique francophone
Les équipes DevOps et SRE des entreprises bancaires, fintech et autres applications critiques peuvent renforcer leurs contrôles de migration et de mise en production.

## Action OSEF
Organiser un atelier technique à partir de résultats du lab, avec matrice de contrôles et bonnes pratiques. **Livrables :** support, démo enregistrable avec autorisation, checklist de mise en production et compte rendu.

## Lab à construire
**[LAB-GITOPS-001](../labs/LAB-GITOPS-001-argocd-database-migration-gates.md)**
- **Objectif :** comparer hooks et Jobs déclaratifs ordonnés par sync waves.
- **Prérequis :** cluster Kind/K3s isolé, Argo CD épinglé, PostgreSQL de test, Git.
- **Étapes :** déployer v1 ; créer migration ; tester sync window/selfHeal ; comparer avec Job déclaratif ; injecter un échec ; vérifier la version du schéma.
- **Succès :** preuves indépendantes que la migration précède la mise en production v2 ; scénarios reproductibles ou non-reproductions documentées.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** GitOps : Synced et Healthy ne prouvent pas qu'une migration a réussi.  
**Public :** DevOps, SRE, architectes, DSI et équipes applicatives.  
**Format :** 75 minutes avec démonstration, discussion sur l'idempotence et la validation de schéma.  
**Statut :** proposé, non programmé.

## Agenda proposé
- 00–10 : retour d'expérience et limites du cas étudié
- 10–25 : hooks, sync waves, selfHeal et sync windows
- 25–50 : démonstration de LAB-GITOPS-001 ou vidéo de répétition
- 50–65 : garde-fous, rollback, checklist
- 65–75 : questions et contributions

## Préparation
- [ ] Responsable et chapitre hôte identifiés
- [ ] Lab exécuté et preuves relues
- [ ] Versions et scénarios vérifiés
- [ ] Speaker confirmé
- [ ] Date et inscriptions validées
- [ ] Démo de secours préparée
- [ ] Publication des supports autorisée

## Limites
Ne pas généraliser le comportement à toutes les installations Argo CD ; aucune démonstration sur données clients.
