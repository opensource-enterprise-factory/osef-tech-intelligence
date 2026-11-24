# ONNX — Validation des modèles IA pour systèmes critiques

**Veille :** 24 novembre 2026  
**Événement annoncé :** 10 décembre 2026, Toulouse et à distance, gratuit sur inscription selon le programme.  
**Sources :** https://onnx.ai/meetups/europe-dec2026.html ; https://onnx.ai/onnx/api/checker.html

## Faits et limites
Le meetup européen ONNX porte sur la vérification, les tests, la précision numérique et le temps d'exécution des modèles. Il ne constitue pas une annonce de certification ou de nouvelle version du format.

## 1. Ce qui change
Occasion de collaboration entre industriels, chercheurs et contributeurs ONNX autour de la validation des modèles déployés.

## 2. Intérêt pour l’Afrique francophone
Développer les compétences de validation des modèles IA avant industrialisation dans les banques, fintechs et entreprises industrielles.

## 3. Action OSEF
Proposer un protocole AI Model Validation Engineering. **Livrables :** suite de tests automatisés, rapport d'écarts numériques, mesures de latence et pipeline CI reproductible.

## 4. Lab à construire
**LAB-AI-ONNX-VALIDATION-001 — Intermédiaire, P1**
- Objectif : vérifier le comportement d'un modèle après export ONNX.
- Prérequis : Python, PyTorch, ONNX, ONNX Runtime, NumPy, pytest.
- Étapes : construire un modèle de classification sur données synthétiques ; exporter ; vérifier avec onnx.checker.check_model ; comparer les prédictions PyTorch et ONNX Runtime ; mesurer les écarts numériques et latences p50/p95 ; automatiser les tests CI.
- Succès : validation structurelle réussie, tolérance numérique définie avant les essais et respectée, tests reproductibles et limites documentées.

## 5. Meetup afférent
**Peut-on faire confiance à un modèle IA après son déploiement ?** Public : ingénieurs IA, MLOps, qualité et DSI. Format : 75 minutes, démonstration ONNX conditionnée à la validation du lab et discussion. Non programmé.

## Impact opérationnel
Réduction potentielle des risques de régression à l'export et au déploiement. Ces tests ne constituent pas une certification de sûreté ou de conformité réglementaire.

## Opportunités commerciales à qualifier
Audit de modèles, migration ONNX, tests de non-régression, benchmark et formation MLOps.

## Contributions upstream
Exemples de validation, documentation, tests et retours techniques.

## Actions OSEF
- [ ] Vérifier les modalités d'inscription.
- [ ] Identifier les participants intéressés.
- [ ] Construire le lab et reproduire les tests.
- [ ] Préparer les questions techniques.
- [ ] Participer si inscription confirmée.
- [ ] Étudier une contribution upstream.

Aucune inscription, certification, participation ou vente OSEF confirmée.
