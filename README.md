# QA E-commerce Portfolio — SauceDemo

## Présentation du projet

Ce projet est un portfolio QA consacré aux tests manuels et automatisés de l’application e-commerce de démonstration [SauceDemo](https://www.saucedemo.com/).

L’objectif est de mettre en pratique une démarche de test logiciel : préparer les cas de test, exécuter les scénarios, documenter les anomalies et automatiser les principaux parcours fonctionnels.

## Objectifs

- Concevoir et exécuter des cas de test manuels.
- Vérifier les principales fonctionnalités d’une application e-commerce.
- Documenter les résultats d’exécution et les preuves de test.
- Identifier et décrire les anomalies.
- Automatiser des scénarios avec Playwright et TypeScript.
- Exécuter les tests sur plusieurs navigateurs.
- Utiliser Git et GitHub pour gérer les versions du projet.

## Périmètre des tests

Les tests couvrent les fonctionnalités suivantes :

- **Connexion** : authentification valide, identifiants incorrects et compte bloqué.
- **Catalogue** : affichage et vérification des produits.
- **Panier** : ajout et suppression de produits.
- **Checkout** : saisie des informations et validation de la commande.
- **Navigation** : accès aux pages et navigation dans l’application.
- **Cas particuliers** : vérification de comportements associés à différents comptes utilisateurs.

## Outils et technologies

- **Tests manuels** : cas de test et tableau d’exécution CSV.
- **Automatisation** : Playwright et TypeScript.
- **Environnement de développement** : Visual Studio Code.
- **Exécution** : Node.js et npm.
- **Versionnement** : Git et GitHub.
- **Rapports** : rapport HTML Playwright et preuves de test.

## Organisation du dépôt

```text
qa-ecommerce-portfolio/
├── .github/
│   └── workflows/
├── docs/
│   ├── bug-reports/
│   │   ├── BUG-001.md
│   │   └── BUG-002.md
│   ├── requirements/
│   ├── test-cases/
│   │   └── Test Cases.csv
│   ├── test-execution/
│   │   └── Test Execution.csv
│   └── test-plan/
│       └── TEST_PLAN.md
├── evidence/
├── tests/
│   ├── saucedemo-login.spec.ts
│   ├── saucedemo-catalog.spec.ts
│   ├── saucedemo-cart.spec.ts
│   └── saucedemo-checkout.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Tests manuels

Les cas de test et leurs résultats sont documentés dans les fichiers CSV du dossier `docs/`.

Le tableau d’exécution permet de suivre l’identifiant du test, la date, l’environnement, le résultat obtenu, le statut, la preuve associée et l’identifiant du bug éventuel.

Les anomalies observées sont décrites dans des rapports dédiés.

## Anomalies identifiées

Deux anomalies ont été documentées pendant les tests manuels.

### BUG-001 — Images incorrectes avec `problem_user`

Plusieurs produits affichent la même image de chien au lieu de leurs images attendues lorsque le compte `problem_user` est utilisé.

### BUG-002 — Prix modifiés avec `visual_user`

Les prix affichés changent après actualisation de la page lorsque le compte `visual_user` est utilisé.

Les rapports détaillés sont disponibles dans `docs/bug-reports/`. Le statut de correction de ces anomalies doit être confirmé par un nouveau test avant de les considérer comme résolues.

## Automatisation avec Playwright

Les tests automatisés sont écrits en TypeScript et organisés par fonctionnalité.

### Prérequis

- Node.js
- npm

### Installation

Cloner le dépôt :

```bash
git clone https://github.com/sassihamza233-commits/qa-ecommerce-portfolio.git
cd qa-ecommerce-portfolio
```

Installer les dépendances :

```bash
npm install
```

Installer les navigateurs Playwright si nécessaire :

```bash
npx playwright install
```

### Exécuter les tests

Lancer toute la suite :

```bash
npm.cmd test
```

Cette commande est adaptée à Windows PowerShell lorsque la commande `npm` est bloquée par la politique d’exécution des scripts.

Exécuter un fichier spécifique :

```bash
npm.cmd test -- tests/saucedemo-login.spec.ts
```

Ouvrir le rapport HTML :

```bash
npx playwright show-report
```

Si le port du rapport est déjà utilisé, fermer l’instance précédente avant de relancer la commande.

## Résultats des tests automatisés

Lors de la dernière exécution présentée dans ce projet, Playwright a rapporté :

- **30 tests réussis**
- **0 test échoué**
- **0 test instable**
- **0 test ignoré**
- **Durée totale : environ 31,9 secondes**

Le rapport affichait des exécutions sur Chromium, Firefox et WebKit.

Ces résultats correspondent à cette exécution et ne signifient pas que toutes les fonctionnalités de l’application sont exemptes de défauts. Les anomalies observées lors des tests manuels restent documentées séparément.

## Compétences mises en pratique

- Préparation et exécution de tests manuels.
- Analyse des résultats et documentation des anomalies.
- Gestion des preuves de test.
- Automatisation de scénarios avec Playwright.
- Utilisation d’assertions pour vérifier le comportement de l’application.
- Exécution multi-navigateurs.
- Gestion de versions avec Git et GitHub.

## Conclusion

Ce portfolio présente une démarche QA combinant tests manuels, rapports d’anomalies et automatisation avec Playwright.

Il constitue une base de démonstration des compétences acquises en test logiciel et pourra évoluer avec de nouveaux scénarios, des preuves complémentaires et le suivi des anomalies jusqu’à leur résolution éventuelle.
