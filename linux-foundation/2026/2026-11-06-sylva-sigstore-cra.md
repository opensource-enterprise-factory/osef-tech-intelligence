# Sylva — Sigstore, SLSA et préparation CRA

- **Date de veille / rattrapage :** 2026-11-10
- **Date de l'annonce ou de la publication source :** 2026-11-06
- **Source primaire :** https://openssf.org/blog/2026/11/06/from-sigstore-to-cra-readiness-sylvas-journey-with-openssf/
- **Statut :** fiche publiée après vérification de la source primaire; analyse et lab proposés, non réalisés.

## Faits vérifiés
Sylva décrit son usage de Sigstore, SLSA, OpenSSF Scorecard et des badges de bonnes pratiques; plusieurs contrôles restent en cours de déploiement selon l'équipe.

## 1. Ce qui change
L'intégrité des artefacts et leur provenance peuvent devenir des preuves d'exploitation et de conformité, sans confondre déclaration de projet et certification réglementaire.

## 2. Intérêt pour l'Afrique francophone
Construire un référentiel de preuves de supply chain adapté aux offres OSEF.

## 3. Action OSEF (proposition)
Définir une chaîne minimale SBOM, signature, vérification et attestation.

## 4. Lab à construire (proposition)
- **Objectif :** Construire une image OCI fictive; produire SBOM; signer avec cosign; vérifier signature et provenance; simuler une altération.
- **Démarche :** Vérification positive pour l'artefact original et rejet du scénario altéré.
- **Critère de succès :** Comment prouver la provenance d'un artefact open source ?
- **Statut :** non planifié, non exécuté. Tester en environnement isolé avec données fictives et sans secrets réels.

## 5. Meetup afférent (proposition)
- **Titre :** undefined
- **Format :** restitution technique et démonstration, sous réserve de réalisation du lab.
- **Statut :** aucun événement programmé.

## Vérification et limites
La source citée documente l'annonce; les résultats opérationnels et l'adéquation au contexte africain restent à démontrer par les laboratoires proposés. Les chiffres déclarés par les organisations ne constituent pas des mesures indépendantes.
