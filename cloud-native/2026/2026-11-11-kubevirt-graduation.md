# KubeVirt devient un projet CNCF Graduated

- **Date de l'annonce :** 2026-11-10
- **Date de veille :** 2026-11-11
- **Source primaire :** CNCF
- **URL :** https://www.cncf.io/announcements/2026/11/10/cloud-native-computing-foundation-announces-kubevirt-graduation/
- **Statut :** fiche de veille ; lab et meetup proposés, non programmés.

## Faits vérifiés
La CNCF annonce la graduation de KubeVirt, projet de gestion des machines virtuelles dans Kubernetes. KubeVirt était précédemment au statut Incubating.

## 1. Ce qui change
KubeVirt franchit une nouvelle étape de maturité dans le cycle de vie des projets CNCF. Ce changement ne signifie ni la disparition des hyperviseurs ni une garantie de compatibilité universelle.

## 2. Intérêt pour l’Afrique francophone
Les DSI, opérateurs de cloud souverain et équipes d'infrastructure peuvent examiner une modernisation progressive de leurs applications historiques en VM, parallèlement aux conteneurs. Les coûts, la sauvegarde, le stockage, la reprise et les compétences restent à évaluer.

## Impact opérationnel
Établir des critères de décision entre virtualisation traditionnelle, KubeVirt et plateformes Kubernetes intégrées. Ne pas présumer d'un niveau de disponibilité sans tests.

## 3. Action OSEF
Produire un blueprint « VM + Kubernetes » avec architecture de référence, matrice de décision et protocole de migration progressive. **Livrable :** blueprint documenté et rapport d'essais.

## 4. Lab à construire
**LAB-INFRA-007 — KubeVirt Production Readiness**
- **Objectif :** exécuter une VM Linux et une application conteneurisée sur un cluster de laboratoire.
- **Prérequis :** cluster Kubernetes compatible virtualisation matérielle, stockage persistant, kubectl, KubeVirt.
- **Étapes :** installer KubeVirt ; créer une VM ; valider réseau et stockage ; simuler une panne contrôlée ; restaurer les données.
- **Critère de succès :** VM fonctionnelle, données persistantes et reprise documentée.

## 5. Meetup afférent
**« Kubernetes peut-il devenir notre plateforme de virtualisation d’entreprise ? »** Public : DSI, architectes, administrateurs systèmes et Platform Engineers. Format proposé : 60 minutes, démonstration et discussion des limites de production.

## Opportunités de contribution open source
Reproduire des cas d'usage, contribuer à la documentation KubeVirt et remonter les anomalies avec preuves techniques.

## Publication
Fiche publiée sur GitHub. Le lab et le meetup ne sont ni planifiés ni réalisés.
