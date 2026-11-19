# MEETUP-K8S-SEC-001 — Kubernetes Security : combien coûtent vos politiques d'admission ?

**Statut :** proposition, non programmée  
**Date, lieu, intervenants et inscriptions :** à confirmer  
**Durée proposée :** 60 minutes  
**Public :** SRE, DevSecOps, RSSI, DSI, architectes Kubernetes, fournisseurs cloud et ESN  
**Source officielle :** https://www.cncf.io/blog/2026/11/18/optimizing-kubernetes-admission-control-where-kyvernos-cel-admission-cost-actually-goes/  
**Fiche de veille associée :** [Kyverno — 19 novembre 2026](../cloud-native/2026/2026-11-19-kyverno-cel-performance.md)

## Faits vérifiés
Un article CNCF daté du 18 novembre 2026 décrit l'optimisation de la préparation des objets Kubernetes dans le moteur CEL de Kyverno 1.19.2. Les mesures citées concernent le moteur interne et ne sont pas une promesse de latence de bout en bout.

## Ce qui change
Une préparation d'objet mutualisée par requête remplace des conversions répétées pour chaque politique correspondante.

## Intérêt pour l’Afrique francophone
Former les équipes SRE, RSSI et DevSecOps à mesurer le coût des politiques sans affaiblir les contrôles de sécurité.

## Action OSEF
Organiser une démonstration de benchmark contrôlé et publier un protocole et un rapport de résultats.
**Livrables :** support francophone, démonstration reproductible, guide technique et compte rendu si l'événement se tient.

## Lab à construire
**LAB-K8S-SEC-001** — [Guide GitHub](../labs/LAB-K8S-SEC-001-kyverno-cel-admission-benchmark.md)
- **Objectif :** Comparer les latences d'admission et l'équivalence des décisions sur deux versions de Kyverno.
- **Prérequis :** Deux clusters isolés, Helm, politiques CEL, métriques, générateur de charge.
- **Étapes essentielles :** épingler les versions, déployer les mêmes politiques, rejouer les charges, mesurer p50/p95 et CPU/mémoire, comparer les décisions.
- **Critère de succès :** rapport reproductible et absence de divergence inexpliquée.
- **Statut :** proposé, non exécuté.

## Meetup afférent
**Titre :** Kubernetes Security : combien coûtent vos politiques d'admission ?  
**Public :** SRE, DevSecOps, RSSI, DSI et architectes.  
**Format :** 60 minutes, présentation, démonstration du lab en cluster isolé, discussion et questions.  
**Démonstration :** LAB-K8S-SEC-001.  
**Statut :** proposé, non programmé.

## Chronogramme
- 00–10 — Admission Kubernetes et enjeux sécurité/performance
- 10–20 — Profiling du moteur CEL et portée du correctif
- 20–40 — Démonstration LAB-K8S-SEC-001
- 40–55 — Lecture des mesures, limites et questions DSI/RSSI
- 55–60 — Contributions et prochaines étapes

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
