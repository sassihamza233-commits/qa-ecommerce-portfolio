# Requirements — SauceDemo E-commerce

## 1. Objectif

Ce document recense les exigences fonctionnelles candidates de SauceDemo afin de préparer les cas de test manuels et automatisés.

Les exigences sont classées selon leur niveau de vérification :

- **OBSERVÉ** : élément directement constaté sur l'application.
- **À CONFIRMER** : comportement à vérifier par un test.
- **HYPOTHÈSE** : comportement supposé pour préparer les tests, mais pas encore confirmé.

## 2. Informations générales

| Élément | Valeur | Statut |
|---|---|---|
| Application | SauceDemo | OBSERVÉ |
| URL | https://www.saucedemo.com/ | OBSERVÉ |
| Page de connexion | Formulaire et message d'erreur observés | OBSERVÉ |
| Catalogue de produits | À explorer après connexion | À CONFIRMER |
| Panier et commande | Parcours à explorer | À CONFIRMER |

## 3. Exigences fonctionnelles candidates

### REQ-LOGIN-001 — Connexion valide

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Hypothèse :** un utilisateur autorisé peut se connecter avec des identifiants valides.
- **Vérification prévue :** utiliser un compte de démonstration et observer la page après soumission.
- **Résultat attendu :** l'accès à la page prévue après connexion, à confirmer lors du test.

### REQ-LOGIN-002 — Identifiants incorrects

- **Priorité :** P1
- **Statut :** Message d'erreur observé ; vérification à compléter
- **Observation :** une tentative avec le nom d'utilisateur `Hamza SASSI` a affiché le message `Epic sadface: Username and password do not match any user in this service`.
- **Vérification prévue :** effectuer des tentatives contrôlées avec des identifiants incorrects.
- **Résultat attendu :** l'application refuse la connexion et affiche un retour approprié.

### REQ-LOGIN-003 — Champs obligatoires vides

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Hypothèse :** le formulaire signale les champs obligatoires manquants.
- **Vérification prévue :** soumettre le formulaire sans renseigner les champs.
- **Résultat attendu :** la connexion n'est pas établie et un message approprié est affiché.

### REQ-LOGIN-004 — Compte verrouillé

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Observation :** le nom `locked_out_user` est affiché sur la page de connexion.
- **Vérification prévue :** tenter une connexion avec ce compte de démonstration.
- **Résultat attendu :** le comportement correspondant à un compte verrouillé est observé.

### REQ-INV-001 — Affichage du catalogue

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Hypothèse :** un utilisateur connecté peut consulter le catalogue.
- **Vérification prévue :** examiner les noms, prix et informations visibles des produits.
- **Résultat attendu :** le catalogue s'affiche conformément au comportement attendu, à préciser après exploration.

### REQ-INV-002 — Tri des produits

- **Priorité :** P2
- **Statut :** À CONFIRMER
- **Hypothèse :** les options de tri disponibles réorganisent les produits.
- **Vérification prévue :** relever les options proposées et comparer l'ordre des produits.
- **Résultat attendu :** l'ordre correspond à l'option sélectionnée.

### REQ-CART-001 — Ajout au panier

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Hypothèse :** l'utilisateur peut ajouter un produit au panier.
- **Vérification prévue :** ajouter un produit et consulter l'indicateur et le contenu du panier.
- **Résultat attendu :** le produit est présent dans le panier.

### REQ-CART-002 — Suppression du panier

- **Priorité :** P2
- **Statut :** À CONFIRMER
- **Hypothèse :** l'utilisateur peut retirer un produit du panier.
- **Vérification prévue :** ajouter un produit puis le retirer.
- **Résultat attendu :** le produit est absent du panier après suppression.

### REQ-CHK-001 — Validation des informations de commande

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Hypothèse :** les champs obligatoires du formulaire de commande sont contrôlés.
- **Vérification prévue :** explorer le formulaire et essayer de poursuivre avec des informations manquantes.
- **Résultat attendu :** les informations obligatoires manquantes sont signalées.

### REQ-CHK-002 — Confirmation de commande

- **Priorité :** P1
- **Statut :** À CONFIRMER
- **Hypothèse :** une commande correctement renseignée peut être finalisée.
- **Vérification prévue :** parcourir le processus de commande avec les données de démonstration.
- **Résultat attendu :** une confirmation est affichée si le parcours le prévoit.

## 4. Données de démonstration visibles

La page de connexion affiche les noms d'utilisateur suivants :

- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

Mot de passe affiché : `secret_sauce`.

Le comportement de chaque compte reste à vérifier.

## 5. Traçabilité avec les cas de test

Chaque exigence sera reliée à un ou plusieurs cas de test dans Google Sheets.

Exemples d'identifiants proposés :

| Exigence | Cas de test prévu |
|---|---|
| REQ-LOGIN-001 | TC-LOGIN-001 |
| REQ-LOGIN-002 | TC-LOGIN-002 |
| REQ-LOGIN-003 | TC-LOGIN-003 |
| REQ-INV-001 | TC-INV-001 |
| REQ-CART-001 | TC-CART-001 |

Ces identifiants sont des propositions de structuration. Les tests correspondants restent à rédiger et à exécuter.

## 6. Historique des versions

| Version | Description | Statut |
|---|---|---|
| 1.0 | Création initiale des exigences candidates | Brouillon |
