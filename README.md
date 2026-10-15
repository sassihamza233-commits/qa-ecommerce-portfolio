# QA E-commerce Portfolio — SauceDemo

## Présentation du projet

Ce projet a pour objectif de mettre en pratique les compétences de **test logiciel manuel et automatisé** sur l’application de démonstration [SauceDemo](https://www.saucedemo.com/).

Il présente une démarche QA comprenant la préparation des tests, leur exécution, la documentation des anomalies et l’automatisation de scénarios fonctionnels avec Playwright.

## Objectifs

- Concevoir et exécuter des cas de test manuels.
- Tester les fonctionnalités principales d’un site e-commerce.
- Documenter les résultats d’exécution et les preuves associées.
- Identifier et décrire les anomalies.
- Automatiser des scénarios avec Playwright et TypeScript.
- Exécuter les tests sur plusieurs navigateurs.
- Organiser les livrables QA dans un dépôt GitHub.

## Périmètre des tests

Les tests portent notamment sur les fonctionnalités suivantes :

- **Connexion** : authentification réussie, identifiants incorrects et comptes particuliers.
- **Catalogue** : affichage des produits et navigation.
- **Panier** : ajout et suppression de produits.
- **Commande** : informations de livraison et validation de la commande.
- **Navigation** : menu et accès aux pages protégées.
- **Cas particuliers** : comportements associés à différents comptes de test.

## Outils et technologies

- **Tests manuels** : cas de test et tableau d’exécution au format CSV.
- **Automatisation** : Playwright et TypeScript.
- **Environnement de développement** : Visual Studio Code.
- **Exécution des tests** : Node.js et npm.
- **Gestion de versions** : Git et GitHub.
- **Preuves et rapports** : captures d’écran et rapport HTML Playwright.

## Organisation du dépôt

```text
qa-ecommerce-portfolio/
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

Les tests manuels sont organisés dans un fichier de cas de test et un tableau d’exécution.

Le tableau d’exécution permet de suivre notamment :

- l’identifiant du test ;
- la date d’exécution ;
- l’environnement ;
- le résultat obtenu ;
- le statut ;
- la preuve associée ;
- l’identifiant de l’anomalie, le cas échéant.

Les preuves doivent correspondre à des captures réellement enregistrées dans le dépôt ou à des liens accessibles.

## Anomalies identifiées

Deux rapports de bugs sont documentés dans `docs/bug-reports/`.

### BUG-001 — Images incorrectes avec `problem_user`

Lors des tests avec le compte `problem_user`, plusieurs produits affichent la même image de chien au lieu des images attendues.

### BUG-002 — Prix modifiés avec `visual_user`

Lors des tests avec le compte `visual_user`, les prix affichés changent après actualisation de la page.

Ces anomalies sont documentées comme des problèmes observés pendant les tests. Leur statut de correction doit être confirmé séparément.

## Tests automatisés avec Playwright

Les tests automatisés couvrent les principales fonctionnalités de connexion, de catalogue, de panier et de checkout.

### Installation

Prérequis : Node.js et npm.

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

Lancer tous les tests :

```bash
npm test
```

Sous Windows PowerShell, si l’exécution de `npm.ps1` est bloquée par la politique de scripts, utiliser :

```powershell
npm.cmd test
```

Exécuter un fichier de test spécifique :

```bash
npm.cmd test -- tests/saucedemo-login.spec.ts
```

Ouvrir le rapport HTML :

```bash
npx playwright show-report
```

Si le port du rapport est déjà utilisé, fermer l’instance précédente du rapport avant de relancer la commande.

## Résultats d’automatisation

Lors de la dernière exécution partagée, Playwright a indiqué :

- **30 tests réussis**
- **0 test échoué**
- **0 test instable**
- **0 test ignoré**
- une durée totale d’environ **31,9 secondes**

Le rapport affichait des exécutions sur Chromium, Firefox et WebKit.

Ces résultats correspondent à cette exécution précise et ne garantissent pas l’absence de défauts dans l’ensemble de l’application.

## Compétences mises en pratique

- Analyse fonctionnelle et conception de cas de test.
- Exécution de tests manuels.
- Documentation des anomalies.
- Association des preuves aux tests.
- Automatisation de scénarios avec Playwright.
- Assertions et vérification du comportement de l’interface.
- Exécution de tests multi-navigateurs.
- Utilisation de Git, GitHub, Node.js et npm.

## Conclusion

Ce portfolio illustre une première démarche QA combinant tests manuels, documentation des anomalies et automatisation avec Playwright.

Le projet pourra être enrichi par l’ajout de nouveaux scénarios automatisés, la finalisation des preuves, la vérification des cas manuels encore en attente et le suivi des anomalies jusqu’à leur éventuelle correction.
