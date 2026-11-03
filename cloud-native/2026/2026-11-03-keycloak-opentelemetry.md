# Keycloak : retour d’expérience sur l’observabilité native OpenTelemetry

**Date de publication :** 2026-11-02  
**Source primaire :** https://opentelemetry.io/blog/2026/devex-keycloak/

## Faits vérifiés
Entretien publié par le SIG Developer Experience d’OpenTelemetry avec des mainteneurs Keycloak. L’agent Java OpenTelemetry a ajouté plusieurs dizaines de secondes au démarrage dans leurs essais ; ils ont préféré l’intégration native Quarkus. Traces et métriques servent notamment à diagnostiquer les lenteurs des flux d’authentification. Les auteurs discutent des risques de confiance et de surcharge des flux de télémétrie push.

## 1. Ce qui change
Retour d’expérience concret sur le choix entre instrumentation par agent et instrumentation native, et sur les limites opérationnelles de chaque approche. Ce n’est pas une nouvelle version Keycloak.

## 2. Intérêt pour l’Afrique francophone
Les plateformes IAM de banques, fintechs et administrations doivent surveiller les temps d’authentification sans dégrader la disponibilité. Le coût de démarrage observé par Keycloak ne doit pas être généralisé à toutes les applications Java.

## 3. Action OSEF
Préparer un guide OSEF d’observabilité IAM et une grille de décision agent versus natif. Livrable : fiche d’architecture, dashboard et mesures de démarrage.

## 4. Lab à construire
Objectif : mesurer traces et temps de démarrage de Keycloak. Prérequis : VM ou cluster de test, Keycloak compatible, OpenTelemetry Collector, Jaeger ou Tempo, générateur de requêtes fictives. Étapes : déployer Keycloak, activer le tracing natif, simuler des connexions de test, mesurer latence et temps de démarrage ; comparer à une configuration avec agent seulement si elle est compatible. Succès : traces reçues et mesures reproductibles sans données personnelles.

## 5. Meetup afférent
« Observabilité des identités : Keycloak + OpenTelemetry » ; public : SRE, IAM, RSSI, DSI ; format : 60 min, démo traces d’authentification et discussion sur la confiance des flux OTLP.

## Opportunités de contribution
Documenter les cas de télémétrie IAM et proposer, après accord des mainteneurs, des améliorations aux conventions ou guides OpenTelemetry.

**Statut :** brouillon à valider ; aucune publication ni programmation réalisée.
