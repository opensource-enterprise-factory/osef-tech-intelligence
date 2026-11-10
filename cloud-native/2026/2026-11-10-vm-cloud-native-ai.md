# Machines virtuelles, Kubernetes et IA agentique

- **Date de veille :** 2026-11-10
- **Date de l'actualité / source :** 2026-11-09
- **Source :** CNCF / Linux Foundation Research / Broadcom
- **URL primaire :** https://www.cncf.io/blog/2026/11/09/new-research-virtual-machines-remain-central-to-cloud-native-infrastructure-as-ai-workloads-evolve/
- **Statut :** fiche de veille OSEF. Labs et meetups proposés, non programmés.

## Faits vérifiés et contexte
Étude de 492 répondants : VM en moyenne 53 % des applications de production déclarées ; 34 % des répondants étendant leurs VM citent les charges IA ; 8 % des utilisateurs de VM déclarent utiliser KubeVirt. Ces chiffres ne représentent pas l'Afrique.

## 1. Ce qui change
Nouvelle étude sur la coexistence VM/conteneurs et l'isolation des charges IA.

## 2. Intérêt pour l’Afrique francophone
Évaluer les architectures hybrides pour les SI historiques et cloud souverains, sans conclure à une migration totale.

## Impact opérationnel
Valider les prérequis, mesurer les résultats en laboratoire et documenter les limites avant une décision de production.

## 3. Action OSEF
Blueprint VM + Kubernetes et matrice de décision DSI.

## 4. Lab à construire
LAB-INFRA-005 : cluster compatible KubeVirt et stockage ; installer KubeVirt, créer une VM Linux, déployer un conteneur, tester réseau et reprise. Succès : exploitation reproductible des deux types de charges.

## 5. Meetup afférent
Kubernetes va-t-il remplacer les hyperviseurs ? Public DSI/architectes ; démo KubeVirt et discussion 60 min.

## Opportunités de contribution open source
Tester KubeVirt, soumettre anomalies reproductibles et corrections documentaires.

## Publication
Fiche publiée dans le dépôt OSEF Tech Intelligence. Les actions, labs et meetups restent des propositions.
