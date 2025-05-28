Installation de NodeJS
Téléchargez et installez NodeJS : Rendez-vous sur le site officiel de NodeJS (https://nodejs.org/) 
et téléchargez la version LTS (Long Term Support) appropriée pour votre système d'exploitation.
Suivez les instructions d'installation.

Vérifiez l'installation : Après l'installation, ouvrez un terminal ou une invite de commande 
et tapez node -v pour vérifier que NodeJS est correctement installé.

Quelle est la différence entre Node et NPM ?

NodeJS est un environnement d'exécution JavaScript construit sur le moteur JavaScript V8 de Chrome. 
Il permet d'exécuter du code JavaScript côté serveur.
NPM (Node Package Manager) est le gestionnaire de packages pour NodeJS.
Il permet d'installer, de mettre à jour et de gérer les dépendances (ou packages) 
nécessaires à vos projets NodeJS.

Découverte de "NPM", "Yarn" et "PNPM"

NPM est le gestionnaire de packages par défaut de NodeJS. 
Il permet d'installer des packages à partir du registre NPM.
Yarn est un autre gestionnaire de packages développé par Facebook. 
Il est compatible avec le registre NPM et offre des fonctionnalités supplémentaires comme une installation
plus rapide et une meilleure gestion des dépendances.

PNPM (Performant NPM) est un gestionnaire de packages qui vise à être plus efficace en termes 
d'espace disque et de vitesse d'installation. Il utilise une approche différente pour stocker les packages.
Comprendre les différences entre les package managers et en choisir un
Chaque gestionnaire de packages a ses avantages et inconvénients. 


NPM est le choix par défaut et est bien intégré à NodeJS. 
Yarn offre de meilleures performances et une gestion plus stricte des dépendances. 
PNPM se distingue par son efficacité en termes d'espace disque.

Comprendre ce qu'est un package Node
Un package Node est un module ou une bibliothèque JavaScript conçue pour être utilisée dans des projets NodeJS. Les packages peuvent être des bibliothèques utilitaires, des frameworks, ou toute autre forme de code réutilisable.

Commandes de base
Initialiser un projet Node : npm init (ou yarn init, pnpm init)
Comprendre la structure du fichier package.json : Ce fichier contient des métadonnées sur votre projet et liste ses dépendances.
Installer un package :
Local : npm install <package_name> (ou yarn add <package_name>, pnpm add <package_name>)
Global : npm install -g <package_name> (ou yarn global add <package_name>, pnpm add -g <package_name>)
Désinstaller un package :
Local : npm uninstall <package_name> (ou yarn remove <package_name>, pnpm remove <package_name>)
Global : npm uninstall -g <package_name> (ou yarn global remove <package_name>, pnpm remove -g <package_name>)
Mettre à jour les packages et le package manager :
Mettre à jour les packages locaux : npm update (ou yarn upgrade, pnpm update)
Mettre à jour le package manager : npm install -g npm@latest (ou instructions spécifiques pour Yarn et PNPM)
Découvrir les linters et formaters
Linters analysent votre code pour détecter les erreurs de programmation, les problèmes de style, et autres problèmes potentiels. Exemples : ESLint pour JavaScript.
Formatters ajustent le style de votre code pour qu'il soit cohérent. Exemples : Prettier.
Installation des linters et formaters
Il est généralement préférable de les installer localement pour chaque projet pour assurer la cohérence entre les environnements de développement.

npm install eslint --save-dev
npm install prettier --save-dev

Qu'est-ce que "Nodemon" ?
Nodemon est un outil qui surveille les changements dans vos fichiers source et redémarre automatiquement votre application Node. C'est très utile pendant le développement.
Installer Nodemon
npm install nodemon --save-dev

Créer son premier "Hello World!" avec Node
Créez un nouveau dossier pour votre projet et naviguez dedans dans votre terminal.
Initialisez un nouveau projet Node avec npm init.
Créez un fichier nommé app.js.
Ajoutez le code suivant dans app.js :
console.log("Hello World!");

Exécutez votre application avec node app.js. Vous devriez voir "Hello World!" dans votre terminal.
Pour utiliser Nodemon, vous pouvez soit l'installer globalement et l'exécuter directement (nodemon app.js), soit ajouter un script dans votre package.json :

"scripts": {
  "dev": "nodemon app.js"
}

Puis exécutez npm run dev.