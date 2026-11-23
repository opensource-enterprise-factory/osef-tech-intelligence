# LAB-CNAI-SEC-001 — Isoler et gouverner un agent IA avec OpenShell

**Statut :** proposé, non exécuté  
**Niveau :** intermédiaire / avancé  
**Durée indicative :** 4 à 6 heures, à confirmer après premier essai  
**Veille associée :** [OpenShell — 23 novembre 2026](../cloud-native/2026/2026-11-23-openshell-secure-agent-runtime.md)  
**Sources officielles :** https://www.cncf.io/projects/openshell/ ; https://github.com/ai-openshell/openshell

## Objectif
Construire un environnement isolé pour un agent ou processus de test, appliquer des règles d'accès minimales et prouver que les flux non autorisés sont bloqués. Évaluer la maturité de la documentation et identifier une contribution upstream possible.

## Prérequis
- Machine Linux de lab et droits nécessaires à l'installation du runtime recommandé par la version choisie.
- Git, CLI OpenShell et dépendances exactes décrites dans la documentation upstream.
- Deux endpoints HTTP de démonstration, l'un autorisé et l'autre interdit ; fichiers factices uniquement.
- Aucun secret, réseau client ou donnée de production.
- Vérifier les dépôts et versions actifs avant installation : le projet est CNCF Sandbox et l'infrastructure de contribution peut évoluer.

## Procédure
1. Identifier le dépôt de référence actif, choisir un tag/commit et conserver les versions.
2. Suivre strictement la procédure officielle d'installation et consigner les écarts éventuels.
3. Créer une sandbox et lancer un processus de démonstration sans accès sensible.
4. Tester l'accès à un fichier factice et à un endpoint HTTP non autorisé.
5. Définir une politique de moindre privilège selon les mécanismes effectivement supportés par la version retenue.
6. Autoriser un endpoint de test précis et vérifier le refus de l'autre.
7. Collecter codes de retour, logs et traces disponibles ; ne pas supposer une intégration OpenTelemetry déjà opérationnelle.
8. Tester la modification et la révocation d'une autorisation ; documenter l'effet et les limites.
9. Examiner séparément la compatibilité Kubernetes, sans la considérer validée par le test local.
10. Nettoyer les environnements et publier une matrice de permissions anonymisée.

## Critères d'acceptation
- [ ] Version et environnement reproductibles
- [ ] Accès autorisé confirmé et accès interdit effectivement refusé
- [ ] Éléments de preuve (commandes, logs, politiques) sauvegardés
- [ ] Limites et hypothèses de sécurité explicites
- [ ] Aucun secret réel ni impact en production
- [ ] Au moins une opportunité de contribution upstream qualifiée, ou absence justifiée

## Livrables
README d'installation, configuration versionnée, matrice autorisé/refusé, scripts de test, rapport d'observations, nettoyage et pistes de contribution.

## Meetup possible
**Vos agents IA peuvent-ils accéder à tout votre réseau ?** — 75 minutes, DevSecOps, IA, SRE et RSSI ; démonstration de la politique et discussion sur les frontières de confiance. **Proposé, non programmé.**

## Points de vigilance
L'admission CNCF Sandbox ne constitue ni une certification de sécurité ni une garantie de maturité. Les commandes exactes doivent être établies depuis la documentation du tag sélectionné, et non inventées.
