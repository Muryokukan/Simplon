### 1. Program.cs
*   Point d'entrée principal de l'application ASP.NET Core.
*   Responsable de la configuration des services (via l'injection de dépendances) et de la construction du pipeline de requêtes HTTP (middleware).

### 2. Middleware
*   Composants logiciels qui traitent les requêtes HTTP de manière séquentielle dans un pipeline.
*   Peut inspecter, modifier la requête ou la réponse, ou passer la main au composant suivant.
*   Essentiel pour la gestion des requêtes, de l'authentification au routage.

### 3. Injection de Dépendances (DI)
*   Principe de conception qui découple les composants en leur fournissant leurs dépendances externes (services) plutôt que de les laisser les créer eux-mêmes.
*   Améliore la modularité, la testabilité et la maintenabilité du code.

### 4. Inversion de Contrôle (IoC) (Singleton, Scoped, Transients)
*   Principe plus général dont l'injection de dépendances est une implémentation.
*   ASP.NET Core offre un conteneur IoC intégré pour gérer la durée de vie des services :
    *   **Singleton** : Une seule instance pour toute la durée de vie de l'application.
    *   **Scoped** : Une instance par requête HTTP.
    *   **Transient** : Une nouvelle instance à chaque demande.

### 5. Controller View Models
*   Dans le modèle MVC, ce sont des classes C# qui agrègent et formatent uniquement les données nécessaires pour une vue spécifique.
*   Découlent les modèles de domaine de la présentation, améliorant la sécurité et la clarté du code pour l'interface utilisateur.

### 6. @Html Helpers / Tag Helpers
*   Mécanismes pour générer du balisage HTML côté serveur dans les vues Razor.
*   **@Html Helpers** : Méthodes C# qui retournent des chaînes HTML.
*   **Tag Helpers** : Attributs C# appliqués aux éléments HTML, offrant une syntaxe plus proche du HTML standard et un meilleur support d'IntelliSense (méthode recommandée).

### 7. Authentification / Autorisation (JWT)
*   **Authentification** : Vérifie l'identité de l'utilisateur.
*   **Autorisation** : Détermine les permissions de l'utilisateur.
*   **JSON Web Tokens (JWT)** : Tokens compacts et sécurisés, couramment utilisés pour l'authentification sans état dans les Web APIs. L'API valide le JWT pour authentifier et autoriser l'accès.

### 8. Web API
*   Framework ASP.NET Core pour construire des services HTTP (souvent RESTful) qui permettent aux applications d'échanger des données.
*   Contrairement aux applications MVC qui rendent des vues, une Web API se concentre sur la fourniture de données brutes (généralement JSON ou XML).

### 9. Récupération et réponse (dans API) en programmation (C#)
*   Dans une API ASP.NET Core, les contrôleurs reçoivent les requêtes, interagissent avec la logique métier (via des services injectés).
*   Construisent des réponses HTTP en utilisant des méthodes d'aide (`Ok()`, `NotFound()`, `CreatedAtAction()`, `NoContent()`) pour renvoyer des données.

### 10. Sérialisation
*   Processus de conversion d'un objet (par exemple, un objet C#) en un format qui peut être facilement stocké ou transmis (par exemple, JSON ou XML).
*   Inversement, la désérialisation est la conversion du format stocké ou transmis en objet.
*   ASP.NET Core utilise par défaut des sérialiseurs (comme `System.Text.Json`) pour convertir automatiquement les objets C# renvoyés par les API en JSON (ou un autre format configuré) pour la réponse HTTP, et vice-versa pour les requêtes entrantes.

### 11. Scalabilité
*   Capacité d'une application à gérer une charge de travail croissante (plus d'utilisateurs, plus de requêtes) en ajoutant des ressources.
*   ASP.NET Core favorise la scalabilité grâce à :
    *   **L'injection de dépendances et le découplage** : Facilite la maintenance et l'ajout de nouvelles fonctionnalités sans affecter l'ensemble de l'application.
    *   **La conception sans état (stateless)** : Les applications ne conservent pas d'état client entre les requêtes, ce qui permet de les déployer sur plusieurs serveurs (mise à l'échelle horizontale).
    *   **Les middlewares légers et configurables** : Optimisent le traitement des requêtes.
    *   **La gestion efficace de la mémoire et des threads** : Permet de maximiser l'utilisation des ressources du serveur.

### 12. Requêtes HTTP
*   Une requête HTTP est une demande envoyée par un client (comme un navigateur web) à un serveur pour obtenir une ressource ou pour effectuer une action. Elle contient des informations telles que la méthode de la requête (GET, POST, PUT, DELETE, etc.), l'URL de la ressource, et des en-têtes optionnels.

### 13. Réponses HTTP
*   Une réponse HTTP est le message que le serveur renvoie au client en réaction à une requête HTTP. Elle contient généralement un code de statut HTTP (indiquant le succès ou l'échec de la requête), des en-têtes de réponse, et un corps (contenant la ressource demandée ou d'autres données).

### 14. Découplage
*   En architecture logicielle, le découplage est le principe de conception qui vise à rendre les composants d'un système aussi indépendants que possible les uns des autres. L'objectif est de réduire les dépendances entre les modules, ce qui facilite la maintenance, la testabilité et l'évolution du code.

### 15. Sans état (Stateless)
*   Se dit d'un système ou d'un protocole qui ne conserve aucune information sur les interactions ou les requêtes précédentes d'un client. Chaque requête est traitée de manière indépendante, comme une transaction unique, sans référence à un "état" antérieur de la communication. Le protocole HTTP est un exemple typique de protocole sans état.

### 16. Pipeline
*   Dans le contexte d'ASP.NET Core (et plus généralement en informatique), un pipeline fait référence à une séquence ordonnée de composants ou d'étapes (appelés "middlewares" dans ASP.NET Core) qui traitent une requête de manière séquentielle, de son entrée à la génération de la réponse. Chaque composant peut effectuer des opérations avant et après le composant suivant.
