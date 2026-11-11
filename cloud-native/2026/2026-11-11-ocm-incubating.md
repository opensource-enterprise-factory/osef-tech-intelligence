# Open Cluster Management devient un projet CNCF Incubating

- **Date de l'annonce :** 2026-11-10
- **Date de veille :** 2026-11-11
- **Source primaire :** CNCF
- **URL :** https://www.cncf.io/blog/2026/11/10/open-cluster-management-ocm-becomes-a-cncf-incubating-project/
- **Statut :** fiche de veille ; lab et meetup proposés, non programmés.

## Faits vérifiés
Le Technical Oversight Committee de la CNCF a accepté la promotion d'Open Cluster Management (OCM) au statut Incubating. Le projet concerne la gestion de plusieurs clusters Kubernetes.

## 1. Ce qui change
OCM franchit une étape dans la maturité communautaire CNCF. Cela ne prouve pas automatiquement la conformité réglementaire ni la compatibilité avec toutes les distributions Kubernetes.

## 2. Intérêt pour l’Afrique francophone
Pour les infrastructures distribuées entre plusieurs villes, datacenters ou fournisseurs cloud, OCM constitue une piste de gouvernance multicluster. Les flux intersites, les accès d'administration et la résidence des données doivent être évalués séparément.

## Impact opérationnel
Comparer les mécanismes de placement, politiques, contrôle d'accès et gestion des déconnexions avec d'autres approches multicluster et GitOps.

## 3. Action OSEF
Construire un blueprint de gouvernance multicluster et une matrice de comparaison OCM/Karmada/GitOps. **Livrable :** architecture et critères de choix.

## 4. Lab à construire
**LAB-MULTICLUSTER-003 — Gouvernance de trois clusters**
- **Objectif :** administrer trois clusters de test depuis un hub.
- **Prérequis :** trois clusters légers, connectivité réseau, versions compatibles d'OCM, ressources de laboratoire.
- **Étapes :** installer le hub ; rattacher les clusters ; propager une politique ; tester un placement ; simuler une déconnexion.
- **Critère de succès :** politiques appliquées sur les clusters ciblés et comportement de panne documenté.

## 5. Meetup afférent
**« Trois datacenters, trois clusters Kubernetes : comment les gouverner ? »** Public : DSI, architectes cloud et SRE. Format proposé : 60 minutes avec démonstration et discussion sur la souveraineté.

## Opportunités de contribution open source
Tester des configurations multicluster, documenter des scénarios reproductibles et ouvrir des issues upstream pertinentes.

## Publication
Fiche publiée sur GitHub. Le lab et le meetup ne sont ni planifiés ni réalisés.
