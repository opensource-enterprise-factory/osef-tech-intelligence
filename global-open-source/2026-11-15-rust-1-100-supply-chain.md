# Rust 1.100 — Dependency cooldowns dans Cargo

**Date annoncée :** 12 novembre 2026  
**Date de veille :** 15 novembre 2026  
**Source primaire :** Rust Release Team  
**URL :** https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/

## Faits vérifiés dans la veille
L'annonce de Rust 1.100.0 décrit notamment la fonctionnalité Cargo `min-publish-age`, destinée à écarter temporairement des versions de dépendances publiées trop récemment lors de la résolution. Il s'agit d'une mesure partielle, et non d'une garantie de sécurité. **Réserve :** la page officielle n'a pas pu être rechargée lors de la mise en dépôt ; contrôler la documentation de la version avant toute démonstration ou communication technique.

## 1. Ce qui change
Cargo peut, sous configuration, appliquer un délai minimal depuis la publication d'une version avant de la retenir lors de la résolution des dépendances.

## 2. Intérêt pour l’Afrique francophone
Les équipes Rust, DevSecOps et ESN peuvent tester des politiques de dépendances plus maîtrisées, sans substituer cette fonction à l'analyse des vulnérabilités, au verrouillage des versions et à la revue de code.

## 3. Action OSEF
Produire une configuration commentée, une matrice de comportement Cargo et une note sur les limites. **Livrable :** exemple CI reproductible.

## 4. Lab à construire
**LAB-RUST-SUPPLY-001 — Tester le délai minimal de publication Cargo.**
- **Objectif :** comparer les résolutions de dépendances avec et sans `min-publish-age`.
- **Prérequis :** Rust 1.100, Cargo, projet de test, dépendances dont les dates de publication sont connues.
- **Étapes :** figer versions et registre ; activer la fonctionnalité selon documentation officielle ; comparer les dépendances résolues ; documenter les exceptions et limites, notamment les différences éventuelles avec `cargo install`.
- **Critère de succès :** résultats et fichiers de configuration reproductibles, limitations explicites.

## 5. Meetup afférent
**« Sécuriser sa software supply chain : ce que change Rust 1.100 »** — développeurs et DevSecOps ; atelier proposé de 60 minutes avec démonstration Cargo et discussion. **Non programmé.**

## Contribution Open Source
Identifier une anomalie reproductible ou une lacune documentaire et la soumettre au dépôt officiel concerné, après vérification.

## Statut
Fiche publiée ; lab et meetup proposés, non exécutés.
