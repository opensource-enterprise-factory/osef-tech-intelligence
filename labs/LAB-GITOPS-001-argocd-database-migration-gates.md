# LAB-GITOPS-001 — Vérifier les migrations de base de données avec Argo CD

**Statut :** proposé, non exécuté  
**Difficulté :** intermédiaire / avancé  
**Durée indicative :** 3 à 5 heures  
**Source primaire :** https://www.cncf.io/blog/2026/11/20/when-a-sync-window-closes-how-argo-cd-self-heal-skipped-the-migration-hook/  
**Veille OSEF :** [22 novembre 2026](../cloud-native/2026/2026-11-22-argocd-self-heal-migration-risk.md)

## Faits vérifiés
Un retour d'expérience CNCF du 20 novembre décrit une interaction entre sync windows, selfHeal et hooks de synchronisation qui peut laisser une migration non rejouée alors que l'application apparaît Synced et Healthy. Ce comportement dépend du scénario ; ne pas généraliser à toutes les versions d'Argo CD ni affirmer qu'une version particulière le corrige sans preuve.

## Ce qui change
Un cas reproductible motive une vérification indépendante de l'exécution des migrations, au-delà des seuls statuts GitOps.

## Intérêt pour l’Afrique francophone
Les applications métiers critiques et fintech exigent un ordre de déploiement sûr et des preuves de conformité entre version de schéma et version applicative.

## Action OSEF
Publier une recette GitOps testable, avec scénarios d'échec, invariants et protocole de rollback. **Livrables :** manifests, scripts, rapport et matrice de décisions.

## Lab à construire
**Objectif :** comparer hooks Argo CD et Jobs déclaratifs ordonnés par sync waves, puis valider des contrôles indépendants de la migration.

**Prérequis :** cluster Kind ou K3s isolé, Argo CD épinglé, Helm ou Kustomize, Git, PostgreSQL de test, kubectl, machine adaptée. Ne jamais utiliser de données client.

**Étapes :**
1. Créer un dépôt de démonstration avec application versionnée et base PostgreSQL jetable.
2. Définir un schéma v1, un schéma v2 et une table de suivi des migrations.
3. Déployer v1 et relever les statuts, logs et version de schéma.
4. Ajouter une migration PreSync et activer selfHeal avec une sync window de test.
5. Rejouer le scénario temporel documenté dans la source, plusieurs fois, en conservant les traces. Ne pas présumer de sa reproduction.
6. Remplacer le hook par une ressource Job versionnée, ordonnée par sync wave ; définir une politique de relance sûre.
7. Injecter un échec SQL et vérifier que la mise en production v2 est bloquée par un contrôle explicite.
8. Comparer les preuves : Argo CD, Kubernetes Job, table de migration, disponibilité applicative.
9. Documenter les limites, versions, risques d'idempotence, nettoyage et rollback.

**Critères de succès :**
- Matrice de tests couvrant réussite, échec, relance et perte de fenêtre de synchronisation.
- Aucune validation de v2 sans preuve de schéma v2.
- Logs, commandes, manifests et versions conservés.
- Les non-reproductions sont rapportées honnêtement.

### Checklist
- [ ] Versions et environnement isolé documentés
- [ ] Manifests et scripts reproductibles
- [ ] Tests de réussite et d'échec exécutés
- [ ] Mesures et preuves archivées
- [ ] Procédure de rollback revue
- [ ] Aucun impact en production

## Meetup afférent
**Titre :** GitOps : Synced et Healthy ne prouvent pas qu'une migration a réussi.  
**Public :** DevOps, SRE, DSI, architectes, équipes applicatives.  
**Format :** 75 minutes, retour d'expérience, démo des deux stratégies, questions et revue des garde-fous.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Un contrôle indépendant de l'état de la base est indispensable lorsque le déploiement dépend d'une migration.

## Opportunités de contribution
Proposer un reproducer, des tests de régression, des clarifications documentaires et une issue upstream uniquement après vérification.

## Sources complémentaires
- https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/
- https://argo-cd.readthedocs.io/en/stable/user-guide/sync_windows/
