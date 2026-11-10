# Python WASI — publication wasi-python 0.1.4

- **Date de veille / rattrapage :** 2026-11-10
- **Date de l'annonce ou de la publication source :** 2026-11-05
- **Source primaire :** https://pypi.org/project/wasi-python/0.1.4/
- **Statut :** fiche publiée après vérification de la source primaire; analyse et lab proposés, non réalisés.

## Faits vérifiés
PyPI indique la publication de wasi-python 0.1.4 le 5 novembre 2026. La page ne suffit pas à établir une maturité de production ni les garanties d'isolation.

## 1. Ce qui change
Une distribution Python destinée à un environnement WASI mérite une qualification de compatibilité et de sécurité, sans présumer qu'elle remplace CPython classique.

## 2. Intérêt pour l'Afrique francophone
Évaluer les contraintes de sandbox, de packaging et de dépendances pour des workloads portables.

## 3. Action OSEF (proposition)
Rédiger une matrice de compatibilité et des limites de sécurité.

## 4. Lab à construire (proposition)
- **Objectif :** Exécuter un programme Python trivial dans un runtime WASI compatible; vérifier I/O, accès réseau et dépendances; comparer à une exécution classique.
- **Démarche :** Programme reproductible et limitations explicitement documentées.
- **Critère de succès :** Python dans WASI : quelles limites pour les plateformes ?
- **Statut :** non planifié, non exécuté. Tester en environnement isolé avec données fictives et sans secrets réels.

## 5. Meetup afférent (proposition)
- **Titre :** undefined
- **Format :** restitution technique et démonstration, sous réserve de réalisation du lab.
- **Statut :** aucun événement programmé.

## Vérification et limites
La source citée documente l'annonce; les résultats opérationnels et l'adéquation au contexte africain restent à démontrer par les laboratoires proposés. Les chiffres déclarés par les organisations ne constituent pas des mesures indépendantes.
