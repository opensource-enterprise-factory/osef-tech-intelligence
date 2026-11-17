# OSEF — Méthodologie de couverture et contrôle qualité

**Version :** 0.1 — 17 novembre 2026  
**Statut :** proposition opérationnelle à mettre en place ; aucune automatisation ou collecte quotidienne n'est déclarée active par ce document.

## 1. Architecture du dispositif
1. **Registre des sources** : inventaire versionné, priorités, régions, flux, propriétaires.
2. **Journal de surveillance** : une ligne par source et passage ; distinguer vérifié, inaccessible et non vérifié.
3. **Radar brut** : nouvelles informations sourcées, même sans potentiel de publication.
4. **Qualification** : nouveauté réelle, importance, portée régionale, risques, opportunités de contribution, déduplication.
5. **Veille éditoriale** : informations significatives avec les cinq rubriques obligatoires.
6. **Pipeline OSEF** : au maximum trois fiches éditoriales et un à deux posts LinkedIn proposés ; GitHub/LinkedIn uniquement après autorisation explicite pour chaque publication.
7. **Exécution** : issues de labs, meetups, contribution et partenariats, avec preuves et statut réel.

## 2. Huit flux
Fondations/gouvernance ; releases/sécurité ; projets/contributions ; IA/infrastructures ; FROM CHINA/Asie ; Afrique ; financement/CFP/mentorat ; licences/standards/OSPO/souveraineté.

## 3. Couverture géographique minimale
Afrique ; Europe ; Amériques ; Chine (rubrique FROM CHINA systématique) ; Inde et reste de l'Asie. Chaque édition doit distinguer **information retenue**, **source vérifiée sans nouveauté**, **source non vérifiée** et **source inaccessible**.

## 4. Format obligatoire d'une actualité retenue
Après titre, date, faits vérifiés et source primaire :
1. **Ce qui change** — nouveauté vs état précédent.
2. **Intérêt pour l’Afrique francophone** — bénéfices et limites.
3. **Action OSEF** — action réalisable et livrable.
4. **Lab à construire** — objectif, prérequis, étapes et succès ; sinon « Aucun lab pertinent identifié ».
5. **Meetup afférent** — titre, public, format, démo ; sinon « Aucun meetup pertinent identifié ».

Ajouter opportunité de contribution, échéance et éligibilité si pertinentes. Labs et meetups = **propositions**, jamais événements confirmés par défaut.

## 5. Indicateurs calculables (pas de chiffres inventés)
- **Taux de couverture** = sources effectivement vérifiées / sources prévues sur la période.
- **Taux de traçabilité** = faits avec date et URL primaire / faits publiés.
- **Délai de détection** = date de première détection - date de publication.
- **Taux de déduplication** = doublons écartés / candidats analysés.
- **Taux de transformation** = opportunités qualifiées avec issue / opportunités qualifiées.
- **Couverture régionale** = régions avec au moins une source vérifiée / régions prévues.
Ne pas afficher ces indicateurs sans journal complet.

## 6. Audit de départ et contrôles
- [ ] Vérifier l'accessibilité et la pertinence de chaque source du registre.
- [ ] Ajouter les flux RSS, pages de releases, advisories et dépôts upstream officiels.
- [ ] Établir une liste de contrôle des 8 flux et 5 régions.
- [ ] Mettre en place un journal quotidien versionné.
- [ ] Définir une méthode de rapprochement avec les veilles Cloud Native Afrique et Linux Foundation **uniquement si leurs résultats sont réellement accessibles**.
- [ ] Construire le contrôle de doublons par URL canonique, projet, version, date et événement.
- [ ] Tester 7 jours consécutifs, puis mesurer couverture et omissions.
- [ ] Documenter les sources manquantes et les défaillances d'accès.

## 7. Politique de preuve et de publication
Sources primaires datées en priorité ; les sources secondaires servent à découvrir, puis à recouper. Pas de lien inventé ni de partenariat supposé. Toute information incertaine est marquée « Je ne peux pas confirmer ça ». Aucun changement GitHub ni post LinkedIn sans action autorisée et retour de confirmation. La limite de trois fiches ne limite **pas** la détection des nouvelles.

## 8. Limites
Un dispositif « mondial » ne peut garantir l'exhaustivité absolue. Le niveau de couverture doit être **mesuré et publié**, non affirmé. L'inventaire de sources est une base de travail, non un audit déjà réalisé.
