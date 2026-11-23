# Kubernetes Cluster API — Remédiation du control plane avec etcd externe

**Date de la PR :** 22 novembre 2026  
**Date de la fiche :** 23 novembre 2026  
**Source primaire :** https://github.com/kubernetes-sigs/cluster-api/pull/14536

## Faits et limites
La PR #14536 propose une modification de la logique de remédiation de KubeadmControlPlane lorsqu'etcd est externe : une vérification adaptée à un etcd géré peut différer la remédiation d'une Machine dégradée. La proposition comprend un test de régression. **Au moment de la veille, la PR était ouverte et non fusionnée.** Vérifier son statut avant tout usage. Il ne s'agit ni d'une release ni d'un avis CVE.

## Ce qui change
Un cas limite de haute disponibilité est documenté upstream et fait l'objet d'une proposition de correction. L'auteur mentionne une aide d'agent IA, avec revue et tests humains.

## Intérêt pour l’Afrique francophone
Améliorer les pratiques SRE et Platform Engineering autour des scénarios de panne, des topologies etcd et des tests de remédiation Kubernetes.

## Action OSEF
Étudier la PR, préparer un scénario reproductible en environnement jetable et suivre les retours des mainteneurs avant toute recommandation de production.

## Lab à construire
**LAB-CAPI-ETCD-001** — objectif : comparer les scénarios de remédiation avec etcd géré et externe. **Prérequis :** Kubernetes, kubeadm, Cluster API, etcd et VM/conteneurs. **Étapes :** préparer l'environnement, exécuter les tests pertinents, documenter les versions et comportements, suivre la PR. **Succès :** tests reproductibles et distinction explicite entre correction proposée et correction publiée.

## Meetup afférent
**« Kubernetes haute disponibilité : quand la remédiation automatique ne fonctionne plus »** — public : SRE, architectes cloud, équipes Platform Engineering ; format : 75 minutes ; démonstration : tests de remédiation sur cluster isolé.

## Contribution upstream
Proposer tests complémentaires, documentation ou retours techniques dans la discussion de la PR, en coordination avec les mainteneurs.

**Statut :** fiche publiée ; lab et meetup proposés, non exécutés ni programmés.
