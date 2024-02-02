-- nbEspece.sql
SELECT Espece.nom_courant, COUNT(Animal.id) AS nombre_animaux
FROM Animal
JOIN Espece ON Animal.espece_id = Espece.id
GROUP BY Espece.nom_courant;