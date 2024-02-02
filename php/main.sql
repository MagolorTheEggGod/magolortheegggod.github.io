-- Table Client
CREATE TABLE Client (
    id SMALLINT(5) PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(60),
    adresse VARCHAR(200),
    code_postal VARCHAR(6),
    ville VARCHAR(60),
    pays VARCHAR(60),
    email VARBINARY(100)
);

-- Table Espece
CREATE TABLE Espece (
    id SMALLINT(6) PRIMARY KEY,
    nom_courant VARCHAR(255),
    nom_latin VARCHAR(255),
    description TEXT,
    prix DECIMAL(10, 2)
);

-- Table Animal
CREATE TABLE Animal (
    id SMALLINT(6) PRIMARY KEY,
    sexe CHAR(1),
    date_naissance DATETIME,
    nom VARCHAR(30),
    commentaires TEXT,
    disponible TINYINT(4),
    espece_id SMALLINT(6),
    FOREIGN KEY (espece_id) REFERENCES Espece(id)
);

-- Table Adoption
CREATE TABLE Adoption (
    client_id SMALLINT(5),
    animal_id SMALLINT(6),
    date_reservation DATETIME,
    date_adoption DATETIME,
    payee BOOLEAN,
    PRIMARY KEY (client_id, animal_id),
    FOREIGN KEY (client_id) REFERENCES Client(id),
    FOREIGN KEY (animal_id) REFERENCES Animal(id)
);