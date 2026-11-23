# LF Energy — PowSyBl pour les études d'interconnexion électrique

**Veille :** 23 novembre 2026  
**Publication :** 18 novembre 2026  
**Source officielle :** https://lfenergy.org/generation-and-load-interconnection-studies-in-the-us-using-powsybl/  
**Documentation :** https://powsybl.readthedocs.io/projects/pypowsybl/en/stable/  
**Statut :** fiche publiée ; expérimentation OSEF non effectuée.

## Faits vérifiés
LF Energy publie un retour d'expérience de Piq Energy sur l'utilisation de PowSyBl avec d'autres outils pour des études préliminaires d'interconnexion aux États-Unis. Le cas décrit une séparation entre données de réseau, méthodologie d'étude et moteurs de calcul. Les performances rapportées sont propres au contexte de Piq et ne doivent pas être généralisées.

## 1. Ce qui change
Publication d'un cas d'utilisation industrielle concret de PowSyBl, distinct des annonces précédentes de financement LF Energy ou des travaux EnerGNN.

## 2. Intérêt pour l’Afrique francophone
Base pédagogique possible pour simuler des réseaux et analyser des contingences ; potentiel de formation et d'études pilotes. Limites : modèles, données et règles d'exploitation locales à valider ; aucune adoption par un gestionnaire de réseau africain n'est déduite.

## 3. Action OSEF
Créer un notebook PyPowSyBl de démonstration sur un réseau public ou synthétique. **Livrable :** environnement reproductible, données de test, résultats d'analyse et note de limites.

## 4. Lab à construire
**LAB-ENERGY-POWSYBL-001 — Analyse de contingence**
- **Objectif :** examiner l'effet de la perte simulée d'une liaison sur un réseau électrique de démonstration.
- **Prérequis :** Python, PyPowSyBl, notions d'écoulement de puissance et de réseaux électriques.
- **Étapes :** installer une version figée ; charger un réseau test ; calculer l'état initial ; déclarer une contingence ; lancer l'analyse de sécurité ; comparer violations et résultats.
- **Critère de succès :** notebook exécutable par un autre ingénieur avec résultats cohérents et limites documentées.
- **Statut :** non démarré.

## 5. Meetup afférent
**Titre :** PowSyBl : simuler un réseau électrique avec l'Open Source.  
**Public :** ingénieurs énergie, chercheurs, étudiants, industrie et DSI.  
**Format :** 75 minutes : introduction, notebook de contingence si prêt, discussion sur données et validation.  
**Statut :** proposé, non programmé.

## Impact opérationnel et limites
Renforcement possible des compétences et offre de PoC technique ; aucune performance généralisable, vente ou utilisation client OSEF confirmée.

## Opportunités de contribution
Exemples de notebooks, documentation, tests et issues/PR upstream selon règles de contribution.

## Checklist OSEF
- [ ] Vérifier la licence et les versions PyPowSyBl.
- [ ] Sélectionner un réseau de test approprié.
- [ ] Exécuter le calcul initial.
- [ ] Déclarer et tester la contingence.
- [ ] Faire reproduire les résultats.
- [ ] Documenter limites et pistes de contribution.
