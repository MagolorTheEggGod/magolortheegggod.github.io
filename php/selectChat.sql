-- selectChat.sql
SELECT Animal.nom, Animal.commentaires, Animal.date_naissance
FROM Animal
JOIN Espece ON Animal.espece_id = Espece.id
WHERE Espece.nom_courant = 'chat';