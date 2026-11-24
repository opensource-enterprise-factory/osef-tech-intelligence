# DPDK 26.11 — Network Performance Engineering

**Veille :** 24 novembre 2026  
**Statut upstream relevé dans la veille :** 26.11.0-rc4  
**Version finale prévue :** 25 novembre 2026, à confirmer.  
**Sources :** https://core.dpdk.org/roadmap/ ; https://doc.dpdk.org/guides/rel_notes/release_26_11.html

## Faits et limites
Les notes candidates décrivent notamment VFIO/IOMMUFD, des évolutions de pilotes, de mémoire et des changements d'API. La publication finale n'est pas confirmée à la date de veille.

## 1. Ce qui change
Préparation de capacités de traitement réseau et changements de compatibilité ; vérifier les notes finales avant migration.

## 2. Intérêt pour l’Afrique francophone
Expertise réseau haute performance pour télécoms, datacenters et fournisseurs cloud. Aucun gain de performance garanti.

## 3. Action OSEF
Proposer un référentiel Network Performance Engineering. **Livrables :** méthodologie de benchmark, matrice de compatibilité et rapport de qualification.

## 4. Lab à construire
**LAB-DPDK-PERF-001 — Avancé, P1**
- Objectif : mesurer les performances DPDK en environnement isolé.
- Prérequis : Linux, C, TCP/IP, Meson, Ninja, hugepages, interfaces compatibles.
- Étapes : installer une version stable de référence ; compiler testpmd ; générer du trafic synthétique isolé ; mesurer débit, pertes et CPU ; comparer avec la candidate ou la finale disponible ; documenter les écarts.
- Succès : benchmark reproductible à conditions identiques, versions, matériel et méthodologie documentés.

## 5. Meetup afférent
**DPDK : infrastructures réseau haute performance.** Public : Linux, télécoms, réseau, cloud et sécurité. Format : 75 minutes, présentation, benchmark conditionné à la validation du lab et discussion coûts/complexité. Non programmé.

## Impact opérationnel
Qualification des performances et des contraintes de compatibilité. Les mesures en VM ne représentent pas automatiquement une carte physique en production.

## Opportunités commerciales à qualifier
Audit de performances, benchmark, formation Linux Networking, assistance à la migration.

## Contributions upstream
Tests de versions candidates, rapports d'anomalies, documentation et correctifs selon les règles du projet.

## Actions OSEF
- [ ] Vérifier la publication finale.
- [ ] Examiner les changements API.
- [ ] Préparer le banc de test.
- [ ] Exécuter et reproduire les benchmarks.
- [ ] Identifier les contributions possibles.

Aucun résultat de performance ou contrat OSEF confirmé.
