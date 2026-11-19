# Kyverno — Optimisation du moteur CEL pour l'admission Kubernetes

**Publication :** 18 novembre 2026  
**Veille :** 19 novembre 2026  
**Source primaire :** https://www.cncf.io/blog/2026/11/18/optimizing-kubernetes-admission-control-where-kyvernos-cel-admission-cost-actually-goes/  
**Référence upstream :** https://github.com/kyverno/kyverno/releases  
**Statut :** fiche de veille publiée ; lab et meetup proposés, non exécutés.

## Faits vérifiés
Un article technique publié par la CNCF, signé Raunak Madan (Nirmata), décrit un coût important de conversion répétée des objets Kubernetes dans le moteur CEL de Kyverno. Le correctif prépare l'objet une seule fois par requête d'admission, au lieu de le reconvertir pour chaque politique correspondante. Il est inclus dans Kyverno 1.19.2. Les auteurs indiquent avoir ajouté des tests d'équivalence pour préserver le comportement des politiques. Dans un benchmark spécifique à 16 politiques correspondantes, le temps interne du moteur passe d'environ 4,91 ms à 0,16 ms ; ce chiffre ne représente pas la latence complète de l'API Kubernetes et n'est pas généralisable à la production.

## Ce qui change
La conversion des données d'admission est mutualisée pour toutes les politiques correspondantes. Les résultats de politique doivent rester identiques ; les tests de non-régression le vérifient.

## Intérêt pour l’Afrique francophone
Les banques, fintechs, ESN et fournisseurs cloud utilisant Kubernetes peuvent mesurer l'impact des politiques de sécurité sur les admissions et préparer les mises à niveau. Les gains observés dépendront du nombre de politiques, de la taille des objets, de l'infrastructure et de la charge. Une optimisation du moteur ne supprime pas les risques de latence réseau, webhook ou API server.

## Action OSEF
Établir un protocole francophone de benchmark d'admission et de non-régression des décisions de sécurité.
**Livrable :** configurations et scripts reproductibles, résultats p50/p95, consommation CPU/mémoire, décisions de politiques et rapport comparatif.

## Lab à construire
**LAB-K8S-SEC-001 — Mesurer l'impact des politiques Kyverno sur les admissions Kubernetes**
- **Objectif :** comparer les coûts d'admission et l'équivalence des décisions avec un jeu identique de politiques CEL.
- **Prérequis :** clusters Kubernetes isolés comparables, Helm, versions Kyverno épinglées dont 1.19.2, politiques CEL de test, générateur de charge, métriques et logs.
- **Étapes essentielles :** préparer le benchmark et les politiques ; mesurer la version de référence ; déployer la version corrigée ; rejouer la même charge ; collecter p50/p95, CPU, mémoire et résultats des politiques ; analyser écarts et limites.
- **Critère de succès :** protocole reproductible, résultats mesurés et aucune divergence inexpliquée dans les décisions d'admission.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Kubernetes Security : combien coûtent réellement vos politiques d'admission ?  
**Public :** DSI, RSSI, DevSecOps, SRE, ingénieurs Kubernetes et cloud providers.  
**Format :** 60 minutes, présentation du profiling, démonstration d'un benchmark isolé et discussion sur sécurité/performance.  
**Statut :** proposé, non programmé.

## Impact opérationnel
Avant toute mise à niveau : inventorier les politiques, identifier le type de moteur, tester les décisions et dimensionner l'admission controller. Ne pas interpréter le benchmark moteur comme un gain garanti de bout en bout.

## Opportunités de contribution
- Reproduire les scénarios de performance documentés dans `docs/perf-testing/` du dépôt Kyverno
- Publier une méthodologie et des mesures reproductibles
- Remonter les régressions upstream avec traces et versions
- Proposer des améliorations de documentation

## Checklist OSEF
- [ ] Désigner un responsable
- [ ] Épingler les versions et documenter les prérequis
- [ ] Préparer le lab isolé
- [ ] Exécuter tests de performance et d'équivalence
- [ ] Publier les mesures et limites
- [ ] Décider de la programmation du meetup
