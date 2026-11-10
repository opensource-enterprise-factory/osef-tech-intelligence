# AI Inference Cold Start — Kubernetes et LLM

- **Date de veille :** 2026-11-08
- **Date de l'actualité / source :** 2026-11-06
- **Source :** CNCF — Baofa Fan
- **URL primaire :** https://www.cncf.io/news/blog/
- **Statut :** fiche de veille OSEF. Labs et meetups proposés, non programmés.
- **Limite de vérification :** lien vers l'index officiel CNCF ; URL individuelle non confirmée. Vérifier avant diffusion externe.

## Faits vérifiés et contexte
Une synthèse CNCF évoquée dans la veille du 8 novembre traite de caches, préchargement, sommeil/réveil et snapshots pour les moteurs d'inférence. L'URL individuelle de l'article n'a pas été confirmée.

## 1. Ce qui change
Synthèse des stratégies de démarrage rapide, et non sortie d'un standard universel.

## 2. Intérêt pour l’Afrique francophone
Les opérateurs GPU peuvent mesurer la disponibilité réelle d'un modèle plutôt que le seul état du Pod ; compatibilités matérielles à tester.

## Impact opérationnel
Valider les prérequis, mesurer les résultats en laboratoire et documenter les limites avant une décision de production.

## 3. Action OSEF
Benchmark reproductible du temps de démarrage des services LLM.

## 4. Lab à construire
LAB-AI-004 : Kubernetes, vLLM, modèle ouvert compatible et GPU ; mesurer cold start, tester cache puis comparer première réponse et mémoire GPU. Succès : mesures répétables et versions documentées.

## 5. Meetup afférent
Pourquoi vos Pods IA démarrent-ils avant votre modèle ? Public MLOps/SRE/Platform Engineers ; démo 60 min.

## Opportunités de contribution open source
Reproduire les scénarios et signaler les anomalies aux projets concernés.

## Publication
Fiche publiée dans le dépôt OSEF Tech Intelligence. Les actions, labs et meetups restent des propositions.
