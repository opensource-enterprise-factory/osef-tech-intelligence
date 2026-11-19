# MEETUP-K8S-SEC-002 — Kyverno 1.19+ : migrer ses politiques historiques vers CEL sans régression

**Statut :** proposition, non programmée  
**Date, lieu, intervenants et inscriptions :** à confirmer  
**Durée proposée :** 60 minutes  
**Public :** SRE, DevSecOps, RSSI, DSI, architectes Kubernetes, fournisseurs cloud et ESN  
**Source officielle :** https://kyverno.io/blog/2026/08/20/announcing-kyverno-release-1.19/  
**Fiche de veille associée :** [Kyverno — 19 novembre 2026](../cloud-native/2026/2026-11-19-kyverno-cel-performance.md)

## Faits vérifiés
L'annonce Kyverno 1.19 décrit la dépréciation des API historiques Policy et ClusterPolicy au profit des API de politiques CEL ; les plans de suppression et la compatibilité doivent être vérifiés dans la version réellement déployée.

## Ce qui change
Le parcours de migration doit intégrer les API CEL et des tests d'équivalence fonctionnelle plutôt que se limiter à une mise à niveau du contrôleur.

## Intérêt pour l’Afrique francophone
Aider les exploitants Kubernetes et ESN à prévenir les ruptures de politiques de sécurité lors d'un upgrade.

## Action OSEF
Préparer un atelier de migration avec matrice de correspondance, tests et procédure de retour arrière.
**Livrables :** support francophone, démonstration reproductible, guide technique et compte rendu si l'événement se tient.

## Lab à construire
**LAB-K8S-SEC-002** — [Guide GitHub](../labs/LAB-K8S-SEC-002-kyverno-legacy-to-cel.md)
- **Objectif :** Migrer des politiques de test historiques vers les API CEL et vérifier leur comportement.
- **Prérequis :** Cluster de test, Kyverno compatible, CLI Kyverno, Git et YAML.
- **Étapes essentielles :** inventorier, traduire, tester cas acceptés/refusés, comparer, documenter rollback.
- **Critère de succès :** matrice de migration et tests reproductibles validant les décisions attendues.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Kyverno 1.19+ : migrer ses politiques historiques vers CEL sans régression  
**Public :** SRE, DevSecOps, RSSI, DSI et architectes.  
**Format :** 60 minutes, présentation, démonstration du lab en cluster isolé, discussion et questions.  
**Démonstration :** LAB-K8S-SEC-002.  
**Statut :** proposé, non programmé.

## Chronogramme
- 00–10 — Évolution des API Kyverno
- 10–20 — Inventaire et stratégie de migration
- 20–40 — Démonstration LAB-K8S-SEC-002
- 40–55 — Équivalence, pièges et rollback
- 55–60 — Questions et contribution upstream

## Préparation
- [ ] Désigner un coordinateur et un chapitre Cloud Native hôte
- [ ] Inviter un speaker connaissant Kyverno (aucun confirmé)
- [ ] Vérifier les versions et sources officielles
- [ ] Répéter la démo en environnement isolé et préparer un plan B
- [ ] Valider la date et ouvrir les inscriptions
- [ ] Réaliser le meetup et recueillir les questions
- [ ] Publier supports, mesures et RETEX après autorisation

## Précautions
Aucun test de charge sur des clusters de production. Les performances du moteur CEL ne doivent pas être confondues avec la latence totale d'admission.
