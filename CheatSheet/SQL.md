🗂️ SQLBolt Cheat Sheet
📋 Table des matières
Commandes de base
Filtrage et conditions
Tri et limitation
Jointures
Fonctions d'agrégation
Sous-requêtes
Modification des données
Gestion des tables
Conseils pratiques
🔍 Commandes de base
SELECT - Récupérer des données
-- Sélectionner toutes les colonnes
SELECT * FROM movies;

-- Sélectionner des colonnes spécifiques
SELECT title, director FROM movies;

-- Sélectionner avec alias
SELECT title AS film_title, year AS release_year FROM movies;

🎯 Filtrage et conditions
WHERE - Filtrer les résultats
Conditions simples

SELECT * FROM movies WHERE year = 2010;
SELECT * FROM movies WHERE title = "Toy Story";

Opérateurs de comparaison

SELECT * FROM movies WHERE year >= 2000;
SELECT * FROM movies WHERE year BETWEEN 2000 AND 2010;
SELECT * FROM movies WHERE year NOT BETWEEN 2000 AND 2010;

Conditions multiples

SELECT * FROM movies WHERE year < 2000 AND director = "John Lasseter";
SELECT * FROM movies WHERE year > 2010 OR director = "John Lasseter";

Recherche de texte

SELECT * FROM movies WHERE title LIKE "Toy Story%";
SELECT * FROM movies WHERE title LIKE "%Car%";
SELECT * FROM movies WHERE director NOT LIKE "%John%";

Valeurs dans une liste

SELECT * FROM movies WHERE year IN (1995, 1998, 2005);
SELECT * FROM movies WHERE director IN ("John Lasseter", "Brad Bird");

Valeurs nulles

SELECT * FROM movies WHERE director IS NULL;
SELECT * FROM movies WHERE director IS NOT NULL;

📊 Tri et limitation
ORDER BY - Trier les résultats
-- Tri croissant
SELECT * FROM movies ORDER BY year ASC;

-- Tri décroissant
SELECT * FROM movies ORDER BY year DESC;

-- Tri multiple
SELECT * FROM movies ORDER BY director ASC, year DESC;

LIMIT - Limiter le nombre de résultats
-- Limiter à 5 résultats
SELECT * FROM movies LIMIT 5;

-- Pagination (OFFSET)
SELECT * FROM movies LIMIT 5 OFFSET 5;

🔗 Jointures
INNER JOIN - Jointure interne
SELECT movies.title, boxoffice.rating
FROM movies
INNER JOIN boxoffice ON movies.id = boxoffice.movie_id;

LEFT JOIN - Jointure gauche
SELECT movies.title, boxoffice.rating
FROM movies
LEFT JOIN boxoffice ON movies.id = boxoffice.movie_id;

RIGHT JOIN - Jointure droite
SELECT movies.title, boxoffice.rating
FROM movies
RIGHT JOIN boxoffice ON movies.id = boxoffice.movie_id;

📈 Fonctions d'agrégation
GROUP BY - Grouper les résultats
-- Groupement simple
SELECT director, COUNT(*) as movies_count
FROM movies
GROUP BY director;

-- Groupement avec condition
SELECT director, COUNT(*) as movies_count
FROM movies
WHERE year > 2000
GROUP BY director;

HAVING - Filtrer les groupes
SELECT director, COUNT(*) as movies_count
FROM movies
GROUP BY director
HAVING COUNT(*) > 1;

Fonctions d'agrégation courantes
-- Compter
SELECT COUNT(*) FROM movies;
SELECT COUNT(director) FROM movies; -- Ignore les NULL

-- Somme
SELECT SUM(length_minutes) FROM movies;

-- Moyenne
SELECT AVG(length_minutes) FROM movies;

-- Min/Max
SELECT MIN(year) FROM movies;
SELECT MAX(year) FROM movies;

-- Valeurs distinctes
SELECT DISTINCT director FROM movies;
SELECT COUNT(DISTINCT director) FROM movies;

🔍 Sous-requêtes
Sous-requêtes dans WHERE
-- Sous-requête simple
SELECT * FROM movies
WHERE year > (SELECT AVG(year) FROM movies);

-- Sous-requête avec IN
SELECT * FROM movies
WHERE director IN (
    SELECT director FROM movies
    GROUP BY director
    HAVING COUNT(*) > 1
);

Sous-requêtes dans FROM
SELECT AVG(max_year) FROM (
    SELECT director, MAX(year) as max_year
    FROM movies
    GROUP BY director
) AS director_max_years;

✏️ Modification des données
INSERT - Insérer des données
-- Insérer une ligne
INSERT INTO movies (title, director, year, length_minutes)
VALUES ("Toy Story 4", "Josh Cooley", 2019, 100);

-- Insérer plusieurs lignes
INSERT INTO movies (title, director, year, length_minutes)
VALUES 
    ("Film 1", "Director 1", 2020, 120),
    ("Film 2", "Director 2", 2021, 110);

UPDATE - Modifier des données
-- Mise à jour simple
UPDATE movies
SET director = "John Lasseter"
WHERE title = "Toy Story 2";

-- Mise à jour multiple
UPDATE movies
SET director = "John Lasseter", year = 1995
WHERE title = "Toy Story";

DELETE - Supprimer des données
-- Supprimer des lignes spécifiques
DELETE FROM movies
WHERE year < 2000;

-- Supprimer toutes les lignes
DELETE FROM movies;

🗃️ Gestion des tables
CREATE TABLE - Créer une table
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    director TEXT,
    year INTEGER,
    length_minutes INTEGER
);

ALTER TABLE - Modifier une table
-- Ajouter une colonne
ALTER TABLE movies ADD COLUMN rating REAL;

-- Renommer une table
ALTER TABLE movies RENAME TO films;

DROP TABLE - Supprimer une table
DROP TABLE movies;

💡 Conseils pratiques
Opérateurs utiles
Opérateur	Description
=	égal
!= ou <>	différent
<, >, <=, >=	comparaisons
LIKE	recherche de motifs
IN	valeur dans une liste
BETWEEN	valeur dans une plage
AND, OR, NOT	opérateurs logiques
Caractères spéciaux pour LIKE
Caractère	Description
%	remplace zéro ou plusieurs caractères
_	remplace exactement un caractère
Bonnes pratiques
✅ Toujours utiliser des alias explicites pour les jointures
✅ Utiliser LIMIT pour tester les requêtes
✅ Préférer INNER JOIN à WHERE pour les jointures
✅ Utiliser HAVING pour filtrer après GROUP BY
✅ Indenter le code SQL pour une meilleure lisibilité