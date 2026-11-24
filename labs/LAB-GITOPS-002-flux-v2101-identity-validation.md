# LAB-GITOPS-002 — Tester les changements d'identité avec Flux

**Statut :** proposé, non exécuté
**Niveau :** Intermédiaire
**Durée indicative :** 3–5 h
**Source primaire à vérifier avant exécution :** https://github.com/fluxcd/flux2/releases/tag/v2.10.1
**Fiche de veille :** [24 novembre 2026](../cloud-native/2026/2026-11-24-flux-v2101-identity-validation.md)

## Objectif
Comparer la prise en compte d'un changement d'identité supporté entre Flux 2.10.0 et 2.10.1.

## Prérequis
Deux clusters isolés ou environnements réinitialisables, Flux CLI, Git, registre OCI, fournisseur d'identité compatible, identités de test sans secrets réels.

## Procédure proposée
1. Vérifier les notes de version et identifier précisément le contrôleur et l'annotation concernés
2. Épingler les versions et préparer deux environnements équivalents
3. Configurer deux identités de test avec permissions distinctes
4. Vérifier la réconciliation initiale
5. Modifier l'annotation concernée et déclencher une réconciliation
6. Collecter événements, conditions et logs expurgés
7. Comparer les résultats et délais observés
8. Tester la révocation selon les capacités du fournisseur
9. Nettoyer les identités et ressources de test

## Critères d'acceptation
- [ ] Versions et prérequis vérifiés
- [ ] Environnement isolé et reproductible
- [ ] Comparaison reproductible des deux versions avec preuve de l'identité effectivement utilisée et limites documentées ; aucune généralisation à toutes les rotations de secrets.
- [ ] Logs et preuves expurgés de données sensibles
- [ ] Nettoyage documenté
- [ ] Revue technique par un autre ingénieur

## Livrables
Configurations versionnées, matrice d'identités, journal de réconciliation, checklist de diagnostic et procédure de révocation.

## Contribution upstream
Tests d'intégration, documentation Flux et reproduction d'anomalies.

## Meetup associé
GitOps et sécurité : maîtriser les identités techniques de Flux — proposé, non programmé.

## Vigilance
Les commandes exactes et compatibilités doivent être établies à partir de la documentation du tag retenu. Aucun résultat n'est revendiqué avant exécution.
