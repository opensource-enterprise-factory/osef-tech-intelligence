# Argo CD — Une migration de base de données peut être omise malgré Synced et Healthy

**Date de veille :** 2026-11-22  
**Date de publication :** 2026-11-20  
**Source primaire :** CNCF, article d'Afzal Ansari  
**URL :** https://www.cncf.io/blog/2026/11/20/when-a-sync-window-closes-how-argo-cd-self-heal-skipped-the-migration-hook/  
**Version de référence :** https://github.com/argoproj/argo-cd/releases/tag/v3.6.2  
**Statut :** fiche publiée ; lab et meetup proposés, non exécutés.

## Faits vérifiés
L'auteur décrit un scénario dans lequel une fenêtre de synchronisation, le mécanisme selfHeal et des hooks Argo CD interagissent : une application peut apparaître Synced et Healthy sans que le Job de migration attendu ait été rejoué. Il indique avoir reproduit le scénario cinq fois sur six dans son environnement de test. Il s'agit d'un retour d'expérience technique, et non d'un avis de sécurité officiel. La publication d'Argo CD v3.6.2 le 18 novembre ne prouve pas qu'elle corrige ce cas particulier.

## Ce qui change
Un scénario concret et reproductible remet en question l'utilisation exclusive des statuts GitOps comme preuve d'exécution des migrations de schéma.

## Intérêt pour l’Afrique francophone
Pour les applications bancaires, fintech et métiers critiques, une version applicative peut nécessiter un schéma de base de données précis. Les équipes doivent vérifier l'état de la migration, en plus de la santé Kubernetes et du statut Argo CD. Le risque exact dépend des configurations et versions.

## Action OSEF
Définir une recette de mise en production GitOps incluant des contrôles explicites des migrations.
**Livrables :** manifests versionnés, protocole de tests, preuves d'exécution, matrice des échecs et recommandations.

## Lab à construire
**LAB-GITOPS-001 — Fiabiliser les migrations de base de données avec Argo CD**
- **Objectif :** comparer une migration par hook et une migration déclarative ordonnée par sync wave.
- **Prérequis :** Kind ou K3s isolé, Argo CD à version épinglée, Git, base de données et application témoins, aucune donnée client.
- **Étapes essentielles :** créer un Job de migration et une application versionnée ; configurer selfHeal et sync window ; tester les interactions de synchronisation ; comparer une variante avec Job déclaratif ; provoquer une migration en échec ; vérifier les invariants de schéma et les traces.
- **Critère de succès :** pour chaque scénario, démontrer par preuves indépendantes si la migration a été exécutée avant la nouvelle application ; documenter les cas non reproduits.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** GitOps : Synced et Healthy ne suffisent pas toujours.  
**Public :** DevOps, SRE, architectes, responsables de mise en production, DSI.  
**Format :** 75 minutes, démonstration de séquencement de migration et discussion sur les contrôles de déploiement.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Mettre en place un contrôle explicite de version de schéma, des preuves de succès du Job et un mécanisme de blocage si la migration échoue. Ne pas supposer que toutes les installations Argo CD sont affectées.

## Opportunités de contribution
Publier un reproducer versionné, améliorer les tests de régression et la documentation upstream, ouvrir une issue seulement si un comportement non attendu est confirmé.

## Suivi
- [ ] Valider versions et scénario exact
- [ ] Désigner un responsable
- [ ] Préparer un cluster jetable
- [ ] Exécuter et documenter les variantes
- [ ] Proposer le meetup après résultats
