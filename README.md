# Projet Flashcards - AdonisJS

Une application web interactive conçue pour la création, la gestion et l'exercice de flashcards. Ce projet utilise le framework Node.js AdonisJS pour assurer un contrôle total sur la structure de données.

---

## Objectifs

### Objectifs pédagogiques

Le but de ce projet est de comprendre en profondeur le modèle MVC (Model View Controller) et de l'appliquer dans une situation réelle en développant l'application flashcards interactive avec Adonis.js, Node.js et Docker. Les points les plus importants à comprendre sont : la gestion des routes dynamiques, la logique des contrôleurs robustes (grâce aux vérifications), les vues .edge, les validations de données via VineJS, de savoir comment fonctionnent les sessions avec les messages flash et de comprendre le fonctionnement et l'utilisation d'un framework dit « stateless ».

### Objectifs produits

L'objectif produit est de livrer une application web fonctionnelle pour l'apprentissage personnel. L'utilisateur doit pouvoir gérer des decks de cartes en les créant, les modifiant ou les supprimant facilement. A l'intérieur de ces paquets, on doit pouvoir ajouter des cartes qui ont une question et une réponse. L'application doit vérifier les entrées saisies en empêchant la création de doublons ou l'insertion de textes trop courts et en informer clairement l'utilisateur en cas d'erreur de saisie avec des messages concernant l'erreur concernée. La partie la plus importante est le mode "Exercer" qui permet à l'utilisateur de tester ses connaissances de manière interactive, carte par carte avec un système de score dynamique qui permet d'afficher le résultat dans la page finish.

---

## Installation et démarrage

Ce guide permet à n'importe quel développeur lambda d'installer le projet avec des connaissance minimes en informatique.

### Prérequis

- **Node.js** (version 20.6 ou supérieure)
- **npm** (installé avec Node.js)

### Étapes d'installation

1. **Cloner le projet**

```bash
git clone <url-de-votre-repo>
cd <nom-du-dossier>
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configuration de l'environnement**

```bash
cp .env.example .env
node ace generate:key
```

**Il ne faut pas oublier de configurer le .env (port de la database, etc...)**

4. **Initialisation de la base de données (SQL)**

```bash
node ace migration:run
```

5. **Lancer le serveur**

```bash
npm run dev
```

L'application est disponible à l'adresse : `http://localhost:3333`

---

## Bilan du projet

Dans ce projets flashcards tout les objectifs demandés dans l'analyse fonctionnelle (sauf le login qui n'était pas demandé) ont étés atteints. Dans l'application on peut créer des decks (des validations sont effectuées sur le titre et la description) dont on peut modifier le nom et la description à volonté tant qu'ils respectent les conditions, le deck est composé de 0 ou plusieurs cartes qui ont une question et une réponse (des validations sont effectuées sur la question et la réponse) et qui sont aussi modifiable à volonté. En cliquant sur une carte, d'un coté il y a la question et de l'autre la réponse, on peut changer de coté en cliquant dessus. Finalement il y a un mode "Exercer" qui permet de démarrer un séquence de cartes à la suite et sur chacune d'elles ont peut indiquer si ce que nous pensions était juste ou pas, puis quand toutes les carte du deck sont passées la page finish affiche le résultat.

---

## Stratégie IA

L'utilisation de l'IA pour ce projet a été, si je puis dire, « décroissante ». Comme j'ai trouvé le début du cours vraiment difficile, l'IA m'aidait plutôt sur la manière de faire les choses que sur le fait de coder à ma place. Je suis bien sûr en mesure d'expliquer absolument chaque ligne de code se trouvant dans mon projet (à part les fichiers de configuration générés automatiquement). Ce pour quoi l'IA m'a le plus aidé, ce sont les ID : le principe de passer un ID de l'URL vers le contrôleur me paraissait très abstrait, tout comme les requêtes SQL en TypeScript avec les .belongsTo, .query ou .preload. J'ai essayé d'utiliser l'IA seulement quand j'étais au pied du mur. Pour chaque ligne, fonction ou concept que je ne comprenais pas, j'ai questionné l'IA jusqu'à bien comprendre afin de m'approprier totalement le code et monter en niveau, plutôt que de simplement me laisser porter. (IA utilisée : Gemini 3.1 pro)

## Note

Je tiens à préciser que certains commits vers la fin du projet, qui ont une durée supérieure à 40 min, n'ont malheureusement pas de description. Ce n'est pas par manque de volonté, mais parce que j'ai réalisé ces commits chez moi en pensant que j'avais accès à GitJournal (ce qui n'est pas le cas) et que je pourrais ajouter une description par la suite. Après m'en être rendu compte, j'ai ajouté la description des commits dont la durée est supérieure à 40 min directement dans la section "Description" de GitHub Desktop. Comme je ne peux pas modifier le titre des commits déjà effectués, je tenais simplement à apporter cette précision.
