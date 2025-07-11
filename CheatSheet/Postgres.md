# Cheat Sheet PostgreSQL (psql)

## Connexion & Session
| Commande | Description |
|----------|-------------|
| `\conninfo` | Affiche les informations de connexion |
| `\c nom_base` | Se connecter à une base de données |
| `\du` | Liste des utilisateurs et rôles |
| `\password` | Changer le mot de passe de l'utilisateur actuel |
| `\q` | Quitter psql |

## Gestion des Bases de Données
| Commande | Description |
|----------|-------------|
| `\l` | Lister toutes les bases de données |
| `CREATE DATABASE nom_base;` | Créer une base |
| `DROP DATABASE nom_base;` | Supprimer une base |
| `ALTER DATABASE nom_base OWNER TO utilisateur;` | Changer le propriétaire |

## Gestion des Tables
| Commande | Description |
|----------|-------------|
| `\dt` | Lister les tables |
| `\d nom_table` | Détails d'une table |
| `\d+ nom_table` | Détails + tailles/permissions |
| `CREATE TABLE nom_table (colonne1 TYPE, colonne2 TYPE);` | Créer une table |
| `DROP TABLE nom_table;` | Supprimer une table |
| `ALTER TABLE nom_table ADD COLUMN nouvelle_colonne TYPE;` | Ajouter une colonne |

## Requêtes SQL Basiques
| Commande | Description |
|----------|-------------|
| `SELECT * FROM nom_table;` | Sélectionner toutes les données |
| `SELECT * FROM nom_table WHERE condition;` | Filtrer les résultats |
| `INSERT INTO nom_table (col1, col2) VALUES (val1, val2);` | Insérer des données |
| `UPDATE nom_table SET col1 = val1 WHERE condition;` | Mettre à jour |
| `DELETE FROM nom_table WHERE condition;` | Supprimer des lignes |

## Gestion des Utilisateurs
| Commande | Description |
|----------|-------------|
| `CREATE USER nom_utilisateur WITH PASSWORD 'motdepasse';` | Créer un utilisateur |
| `ALTER USER nom_utilisateur WITH PASSWORD 'nouveau_motdepasse';` | Changer le mot de passe |
| `DROP USER nom_utilisateur;` | Supprimer un utilisateur |
| `GRANT ALL PRIVILEGES ON DATABASE nom_base TO nom_utilisateur;` | Donner tous les droits |

## Import/Export de Données
| Commande | Description |
|----------|-------------|
| `\copy nom_table FROM '/chemin/fichier.csv' DELIMITER ',' CSV HEADER;` | Importer un CSV |
| `\copy (SELECT * FROM nom_table) TO '/chemin/fichier.csv' DELIMITER ',' CSV HEADER;` | Exporter vers un CSV |
| `pg_dump -U utilisateur -d nom_base > sauvegarde.sql` | Sauvegarder une base |
| `psql -U utilisateur -d nom_base < sauvegarde.sql` | Restaurer une sauvegarde |

## Astuces Utiles
| Commande | Description |
|----------|-------------|
| `\e` | Ouvrir un éditeur de texte pour écrire une requête |
| `\timing` | Activer/désactiver l'affichage du temps d'exécution |
| `\x` | Basculer en mode "affichage étendu" |
| `\! commande` | Exécuter une commande shell |
| `\set variable valeur` | Définir une variable |
