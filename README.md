# QA E-commerce Portfolio — SauceDemo

## Présentation du projet

Ce projet présente une démarche de test manuel d'une application e-commerce de démonstration : [SauceDemo](https://www.saucedemo.com/).

L'objectif est de documenter les cas de test, d'exécuter les scénarios, de conserver les preuves disponibles et de signaler les anomalies observées.

## Périmètre des tests

Les tests couvrent les fonctionnalités suivantes :

- Connexion et déconnexion
- Affichage du catalogue et des informations produit
- Tri des produits
- Ajout et suppression de produits dans le panier
- Informations client et validation de commande
- Navigation et accès aux pages protégées
- Comportements associés à certains comptes de test SauceDemo

## Résumé des résultats

Le plan de test comporte **43 cas de test**.

| Résultat | Nombre |
|---|---:|
| PASS | 38 |
| FAIL | 2 |
| À confirmer | 3 |
| **Total** | **43** |

> Les nombres ci-dessus reprennent l'état actuel du tableau Test Execution partagé pour ce portfolio. 
### Anomalies identifiées

- **BUG-001 — `problem_user` :** plusieurs produits affichent la même image de chien, selon l'observation rapportée pendant les tests.
- **BUG-002 — `visual_user` :** les prix des produits changent après actualisation de la page, selon l'observation rapportée pendant les tests.

Les rapports détaillés se trouvent dans [`bug-reports/BUG-001.md`](bug-reports/BUG-001.md) et [`bug-reports/BUG-002.md`](bug-reports/BUG-002.md).

## Organisation du dépôt

- `README.md` : présentation du projet et résumé des résultats
- `bug-reports/` : rapports des anomalies
- `test-cases/` : cas de test (à ajouter ou relier si le fichier est stocké ailleurs)
- `test-execution/` : résultats d'exécution (à ajouter ou relier si le fichier est stocké ailleurs)
- `evidence/` : captures d'écran réelles (à ajouter)

## Environnement

- Application : SauceDemo
- Type de test : test manuel fonctionnel
- Navigateur et système d'exploitation : à préciser selon l'environnement réellement utilisé

