export interface Kitten {
    name: string;
    birthdate: Date;
    breed: string;
    image: string;
//     Le pitch est simple, sur kitten-story, les utilisateurs peuvent :

//     Créer des chatons, via le formulaire, avec un nom, une race, une date de naissance, un lien vers une image pour la photo (les chatons sont ajoutés à la collection globale, quand ils sont créés); les 4 infos sont obligatoires.
//     Adopter un chaton, via un bouton adopter. Quand un chaton est adopté, il est ajouté au panneau de droite et retiré de la liste.

// Etant donné que cette appli est un POC, on n'a pas besoin de faire de la rétention de données. Donc, même si quand on refresh, ça disparaît, ce n'est pas grave.

// Il y a quand même plusieurs éléments à prendre en compte :

//     L'action submit du formulaire qui ajoute le chaton à la collection
//     L'action adopter qui retire le chaton de la collection globale et le place dans la collection de l'utilisateur
//     Le bouton du formulaire qui doit changer de couleur pour montrer que le formulaire est valide
//     Quand je passe la souris sur un chaton, les informations de celui-ci doivent être affichées, de façon élégante
}
