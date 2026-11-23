# GitHub Actions — Audit des déclencheurs avant le 2 décembre 2026

**Date de la publication PSF :** 18 novembre 2026  
**Date de la fiche :** 23 novembre 2026  
**Sources primaires :**
- https://pyfound.blogspot.com/2026/11/de-fanging-dangerous-triggers-in-github.html
- https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2/

## Faits et limites
GitHub annonce qu'à compter du 2 décembre 2026, le déclencheur `pull_request_target` sera bloqué par défaut dans les dépôts publics, sauf autorisation explicite applicable. Les dépôts privés et internes ne sont pas concernés par ce nouveau comportement par défaut. La Python Software Foundation a publié une démarche de durcissement des workflows. Les risques réels des dépôts OSEF n'ont **pas** été audités dans cette fiche.

## Ce qui change
Une évolution des politiques GitHub peut interrompre des workflows publics existants, tout en réduisant une catégorie de risques liés à l'exécution de contributions non fiables avec privilèges.

## Intérêt pour l’Afrique francophone
Aider les mainteneurs et entreprises à protéger leurs secrets, leur chaîne de livraison logicielle et la continuité des contributions externes.

## Action OSEF
Effectuer un inventaire **en lecture seule** des workflows GitHub Actions publics de l'organisation ; documenter déclencheurs, permissions, secrets, exécution de code issu de forks et remédiations recommandées. Ne modifier aucun workflow sans revue/PR approuvée.

## Lab à construire
**LAB-GHA-TRIGGER-AUDIT-001** — objectif : construire un audit reproductible de workflows. **Prérequis :** GitHub Actions, YAML, Git et principes de permissions minimales. **Étapes :** inventorier, analyser avec `zizmor`, classer les risques, tester des exemples synthétiques sans secrets, rédiger un rapport. **Succès :** matrice de risques sourcée, tests reproductibles et aucune modification non autorisée.

## Meetup afférent
**« GitHub Actions : protégez vos dépôts et secrets avant le 2 décembre »** — public : mainteneurs, DevSecOps, ingénieurs CI/CD ; format : 75 minutes ; démonstration : analyse statique d'un workflow de démonstration.

## Contribution upstream
Partager des exemples de workflows sûrs, des tests ou améliorations documentaires suivant les règles des projets concernés.

**Statut :** fiche publiée ; lab et meetup proposés, non exécutés ni programmés.
