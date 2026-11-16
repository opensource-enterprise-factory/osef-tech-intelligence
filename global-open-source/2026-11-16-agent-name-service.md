# Linux Foundation — Agent Name Service : identité vérifiable des agents IA

**Date de l'annonce :** 10 novembre 2026  
**Date de veille :** 16 novembre 2026  
**Source primaire :** Linux Foundation  
**URL :** https://www.linuxfoundation.org/press/linux-foundation-welcomes-agent-name-service-to-bring-verifiable-identity-and-discovery-to-ai-agents

## Faits vérifiés
La Linux Foundation annonce l'accueil d'**Agent Name Service (ANS)** comme projet sous sa gouvernance. ANS s'appuie sur le DNS pour la nomination, la découverte et la vérification des identités d'agents IA. La spécification comporte sept documents ; onze organisations soutiennent le projet selon l'annonce. Le projet avait été annoncé comme intention de lancement en juin 2026 : la nouveauté de novembre est son lancement sous gouvernance Linux Foundation.

## 1. Ce qui change
ANS dispose d'une spécification formalisée et d'une gouvernance technique ouverte au sein de la Linux Foundation. L'identité vérifiable ne suffit pas à établir les droits d'accès ni à garantir la sécurité d'un agent.

## 2. Intérêt pour l’Afrique francophone
Les DSI, RSSI, ingénieurs et entreprises peuvent étudier des mécanismes interopérables d'identité et de découverte pour leurs agents IA, en tenant compte des enjeux de DNS, de gouvernance et de contrôle d'accès.

## 3. Action OSEF
Préparer une architecture de référence et un modèle de menaces pour l'identité des agents IA. **Livrables :** diagramme, checklist de sécurité, note de compatibilité et possibilités de contribution.

## 4. Lab à construire
**LAB-ANS-001 — Identité vérifiable de deux agents IA.**
- **Objectif :** tester en environnement isolé les mécanismes de nommage et de vérification effectivement documentés par ANS.
- **Prérequis :** DNS de laboratoire, documentation ANS, outils officiels compatibles et deux agents fictifs.
- **Étapes essentielles :** examiner les spécifications ; créer deux identités ; publier les enregistrements requis ; vérifier les identités ; simuler une modification non autorisée ; enregistrer les limites.
- **Critère de succès :** vérifications reproductibles et comportement documenté en cas de modification des enregistrements, sans accès à des systèmes réels.

## 5. Meetup afférent
**« Qui garantit l'identité de vos agents IA ? DNS, ANS et confiance numérique »** — DSI, RSSI, architectes IA et développeurs ; **90 minutes proposées**, démonstration du lab et discussion sur l'usurpation et les contrôles d'accès. **Non programmé.**

## Opportunité de contribution Open Source
Étudier les spécifications et les dépôts officiels https://github.com/agentnameservice afin d'identifier des besoins réels de documentation, de tests d'interopérabilité ou d'amélioration.

## Statut
Fiche de veille publiée ; lab et meetup proposés, non réalisés.
