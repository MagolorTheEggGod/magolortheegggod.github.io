<?php
// Inclusion du fichier mon-header.php
include 'mon-header.php';

// Connexion à la base de données avec PDO
try {
    $pdo = new PDO('mysql:host=Votre_Hote;dbname=Votre_Nom_De_Base_De_Donnees', 'Votre_Utilisateur', 'Votre_Mot_De_Passe');
    // Assurez-vous de remplacer les valeurs entre crochets par vos propres informations de connexion
} catch (PDOException $e) {
    die('Erreur de connexion à la base de données : ' . $e->getMessage());
}

// Traitement du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Vérification si l'espèce a été sélectionnée
    if (isset($_POST['espece'])) {
        // Stockage de l'espèce dans une session
        session_start();
        $_SESSION['espece'] = $_POST['espece'];

        // Redirection vers la page d'adoption
        header('Location: adoption.php');
        exit();
    }
}

// Récupération de la liste des espèces depuis la base de données
$requete = $pdo->query('SELECT id, nom_courant FROM Espece');
$especes = $requete->fetchAll(PDO::FETCH_ASSOC);
?>

<!-- Début du formulaire -->
<div style="text-align: center; padding: 20px;">
    <form method="post" action="">
        <label for="espece">Choisissez l'espèce :</label>
        <select name="espece" id="espece" required>
            <?php foreach ($especes as $espece) : ?>
                <option value="<?= $espece['id']; ?>"><?= $espece['nom_courant']; ?></option>
            <?php endforeach; ?>
        </select>
        <br>
        <input type="submit" value="Adopter">
    </form>
</div>
<!-- Fin du formulaire -->

</body>
</html>
