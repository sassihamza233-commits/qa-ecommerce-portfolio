# Test Plan — SauceDemo E-commerce

## 1. Informations générales

| Champ | Valeur |
|---|---|
| Projet | QA E-commerce Portfolio |
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Type de test | Tests fonctionnels manuels |
| Testeur | Hamza Sassi |
| Version du document | 1.0 |
| Statut | Brouillon |

## 2. Objectif des tests

L'objectif est de vérifier les principales fonctionnalités de l'application SauceDemo, de comparer les résultats réels aux résultats attendus et de documenter les anomalies reproductibles.

Ce travail servira également de base à la création de tests automatisés avec Playwright et TypeScript.

## 3. Périmètre des tests

### 3.1 Fonctionnalités incluses

Les fonctionnalités suivantes seront explorées et testées :

- Connexion et déconnexion.
- Gestion des erreurs de connexion.
- Affichage du catalogue de produits.
- Tri des produits.
- Ajout et suppression de produits dans le panier.
- Consultation du panier.
- Validation des informations de commande.
- Finalisation et confirmation de commande.

**Important :** cette liste définit le périmètre prévu. Elle ne signifie pas que toutes ces fonctionnalités ont déjà été testées.

### 3.2 Fonctionnalités exclues pour le moment

- Tests de charge et de performance approfondis.
- Tests de sécurité spécialisés.
- Tests sur un grand nombre de navigateurs et d'appareils.
- Tests directs de la base de données.
- Tests des API, qui feront l'objet d'une étape séparée.

## 4. Environnement de test

| Élément | Valeur |
|---|---|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Système d'exploitation | Windows |
| Navigateur | À renseigner lors de l'exécution |
| Type de test | Manuel |
| Suivi des cas de test | Google Sheets |
| Documentation | Markdown et VS Code |
| Automatisation prévue | Playwright avec TypeScript |
| Intégration continue prévue | GitHub Actions |

## 5. Données de test

La page de connexion affiche les utilisateurs de démonstration suivants :

- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

Le mot de passe affiché est :

`secret_sauce`

Ces identifiants sont des données de démonstration affichées par l'application. Le comportement de chaque compte doit être vérifié pendant les tests.

## 6. Approche de test

Pour chaque cas de test :

1. Lire le cas de test et vérifier ses préconditions.
2. Préparer les données nécessaires.
3. Exécuter les étapes dans le navigateur.
4. Observer le comportement réel de l'application.
5. Comparer le résultat réel au résultat attendu.
6. Enregistrer les résultats dans Google Sheets.
7. Ajouter une capture d'écran si elle constitue une preuve utile.
8. Documenter les anomalies reproductibles.

## 7. Priorités des tests

- **P1 — Haute :** fonctionnalité essentielle, par exemple la connexion ou la finalisation d'une commande.
- **P2 — Moyenne :** fonctionnalité importante, par exemple le tri ou la gestion du panier.
- **P3 — Basse :** fonctionnalité secondaire ou détail de présentation.

La priorité représente l'importance du test, et non son résultat.

## 8. Statuts d'exécution

- **NOT RUN :** test pas encore exécuté.
- **PASS :** résultat réel conforme au résultat attendu.
- **FAIL :** résultat réel différent du résultat attendu.
- **BLOCKED :** test impossible à exécuter à cause d'un blocage identifié.

Un statut PASS ou FAIL ne doit être attribué qu'après l'exécution effective du test.

## 9. Critères de démarrage

La campagne de tests peut commencer lorsque :

- L'application est accessible.
- Les exigences candidates sont identifiées.
- Les cas de test initiaux sont rédigés.
- Les données nécessaires sont disponibles.
- L'environnement de test est prêt.

## 10. Critères de fin

La campagne sera considérée comme terminée lorsque :

- Chaque cas prévu possède un statut documenté.
- Les résultats réels des tests exécutés sont enregistrés.
- Les tests non exécutés ou bloqués sont identifiés.
- Les anomalies reproductibles sont documentées.
- Un bilan présente les résultats et les limites de la campagne.

## 11. Risques et limites

- L'application peut être temporairement indisponible.
- Certains comptes de démonstration peuvent avoir des comportements spécifiques.
- Les résultats peuvent dépendre du navigateur ou de l'environnement.
- Une fonctionnalité non explorée ne doit pas être considérée comme validée.
- Les résultats doivent être fondés sur des observations réelles.

## 12. État actuel du projet

Le projet Playwright est initialisé et les tests d'exemple ont été exécutés précédemment avec succès.

Cependant, ces tests d'exemple ne prouvent pas que les fonctionnalités de SauceDemo sont validées.

La campagne de tests fonctionnels manuels de SauceDemo reste à réaliser et à documenter.

## 13. Historique des versions

| Version | Description | Statut |
|---|---|---|
| 1.0 | Création initiale du plan de test | Brouillon |
