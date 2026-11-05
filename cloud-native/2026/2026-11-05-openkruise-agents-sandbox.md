# OpenKruise Agents v0.6.0 : sécurité et exploitation des sandboxes IA

- **Date de veille :** 2026-11-05
- **Date de publication officielle OpenKruise :** 2026-10-07
- **Mise en avant CNCF :** 2026-11-03
- **Source primaire :** OpenKruise
- **URL :** https://openkruise.io/blog/2026/10/07/agents-v0.6.0
- **Statut :** fiche de veille OSEF ; labs et meetups proposés, non programmés.

## Faits vérifiés
La présentation d'OpenKruise Agents v0.6.0 documente notamment TrafficPolicy, SecurityProfile, CheckpointRestore, PoolAutoscaler et des mécanismes de pause/reprise des sandboxes. La version était déjà présentée par OpenKruise en octobre : la mise en avant de novembre ne constitue pas une nouvelle sortie.

## 1. Ce qui change
Par rapport aux fonctionnalités précédemment présentées pour OpenKruise Agents, la v0.6.0 apporte des contrôles réseau plus détaillés et des mécanismes d'automatisation et de gestion du cycle de vie des sandboxes.

## 2. Intérêt pour l’Afrique francophone
Les plateformes IA mutualisées peuvent étudier la maîtrise de la consommation des environnements inactifs et la gouvernance des accès. Les économies potentielles, les temps de reprise et la robustesse doivent être mesurés dans un contexte local avant tout engagement commercial.

## Impact opérationnel
Évaluer les politiques de sécurité, les besoins en capacité, les délais de réveil et les procédures d'exploitation des pools.

## 3. Action OSEF
Construire un benchmark des sandboxes IA Kubernetes : sécurité, CPU/mémoire, délai de reprise et facilité d'exploitation.

**Livrables :** protocole de test, métriques reproductibles, tableau de résultats et guide de décision pour DSI.

## 4. Lab à construire
- **Objectif :** mesurer les effets de la suspension et de la reprise des sandboxes.
- **Prérequis :** cluster Kubernetes de laboratoire, version compatible d'OpenKruise Agents v0.6.0, supervision des ressources et charge synthétique ; compatibilités à confirmer dans la documentation officielle.
- **Étapes essentielles :**
  1. Installer OpenKruise Agents.
  2. Créer un pool de sandboxes.
  3. Configurer les politiques d'accès.
  4. Exécuter une charge synthétique et relever les métriques.
  5. Tester la pause/reprise et comparer les états actifs et suspendus.
- **Critère de succès :** politiques validées, temps de reprise et ressources mesurés de façon reproductible, sans supposer de gain à l'avance.

## 5. Meetup afférent
- **Titre :** AI Agents sur Kubernetes : combien coûte un agent inactif ?
- **Public :** SRE, FinOps, architectes Cloud, équipes IA.
- **Format proposé :** 60 minutes, benchmark commenté et discussion sur coût, sécurité et disponibilité.
- **Statut :** proposition, non programmé.

## Opportunités de contribution open source
Tester les fonctions de pause/reprise, documenter les observations et soumettre une issue ou une PR après vérification des consignes du projet.

- Projet : https://github.com/openkruise/agents
- Annonce officielle : https://openkruise.io/blog/2026/10/07/agents-v0.6.0
