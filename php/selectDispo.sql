-- selectDispo.sql
SELECT nom, commentaires, date_naissance
FROM Animal
WHERE disponible = 1;