# Sylva et OpenSSF : sécuriser la supply chain logicielle

**Date :** 2026-11-06
**Source officielle :** OpenSSF
**URL :** https://openssf.org/blog/2026/11/06/from-sigstore-to-cra-readiness-sylvas-journey-with-openssf/
**Statut :** Fiche OSEF ; actions, labs et meetups proposés, non réalisés.

## Faits vérifiés
Retour d'expérience Sylva sur Sigstore, SLSA, OpenSSF Scorecard, SBOM et gestion des vulnérabilités. La signature est opérationnelle pour certains artefacts ; les attestations et dépendances tierces restent partiellement couvertes. La conformité CRA et le niveau SLSA 3 ne sont pas présumés acquis.

## Ce qui change
Publication d'un retour d'expérience opérationnel détaillant les contrôles et leurs limites, sans annoncer de nouvelle version ni certification.

## Intérêt pour l’Afrique francophone
Améliorer la provenance des logiciels déployés par les banques, télécoms, intégrateurs et fournisseurs cloud ; les exigences réglementaires locales doivent être évaluées séparément.

## Impact opérationnel
Intégrer SBOM, analyse, signature, vérification et politique de vulnérabilités dans les pipelines.

## Opportunités de contribution
Documentation, exemples de pipelines, tests et retours d'expérience aux communautés OpenSSF et Sylva.

## Action OSEF
Définir un modèle DevSecOps commun aux projets BUILD. **Livrable :** pipeline réutilisable et documentation de sécurité.

## Lab à construire
**LAB-SEC-001 — Artefact vérifiable**
- **Objectif :** vérifier la provenance d'une image conteneurisée.
- **Prérequis :** GitHub Actions, Docker, Trivy, Syft, cosign et registre OCI de test.
- **Étapes :** construire ; générer SBOM ; analyser ; signer ; vérifier avant déploiement ; tester le rejet d'une image non autorisée.
- **Critère de succès :** image conforme acceptée, image non conforme rejetée.

## Meetup afférent
**Titre :** De DevOps à Trusted Software Supply Chain.
**Public :** DSI, DevSecOps, SRE, ingénieurs OSEF.
**Format :** 60 minutes, démo et discussion.
**Statut :** proposition non programmée.
