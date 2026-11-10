# Apache SkyWalking APM 11.1.0 — traces OTLP et topologie

- **Date de veille / rattrapage :** 2026-11-10
- **Date de l'annonce ou de la publication source :** 2026-11-06
- **Source primaire :** https://skywalking.apache.org/events/release-apache-skywalking-apm-11.1.0/
- **Statut :** fiche publiée après vérification de la source primaire; analyse et lab proposés, non réalisés.

## Faits vérifiés
Apache SkyWalking annonce APM 11.1.0 le 6 novembre 2026; les traces OTLP alimentent les métriques et la topologie via TAL, sous les conditions de configuration documentées.

## 1. Ce qui change
Un backend d'observabilité alternatif peut être évalué sans remplacer automatiquement l'existant.

## 2. Intérêt pour l'Afrique francophone
Comparer ingestion OTLP, topologie et charge opérationnelle avec le stack observabilité du lab.

## 3. Action OSEF (proposition)
Créer une architecture de démonstration SkyWalking et un tableau de recette.

## 4. Lab à construire (proposition)
- **Objectif :** Instrumenter une API fictive OpenTelemetry; exporter vers SkyWalking; afficher traces et topologie; mesurer couverture et limites.
- **Démarche :** Traces et topologie visibles avec configuration reproductible.
- **Critère de succès :** OpenTelemetry et SkyWalking : visualiser la topologie sans agent dédié
- **Statut :** non planifié, non exécuté. Tester en environnement isolé avec données fictives et sans secrets réels.

## 5. Meetup afférent (proposition)
- **Titre :** undefined
- **Format :** restitution technique et démonstration, sous réserve de réalisation du lab.
- **Statut :** aucun événement programmé.

## Vérification et limites
La source citée documente l'annonce; les résultats opérationnels et l'adéquation au contexte africain restent à démontrer par les laboratoires proposés. Les chiffres déclarés par les organisations ne constituent pas des mesures indépendantes.
