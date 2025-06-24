export interface Recette {
  nom: string;
  image: string;
}

export const RECETTES: Recette[] = [
  {
    nom: 'Nouilles',
    image: 'assets/images/nouilles-sautees-aux-legumes.jpg'
  },
  {
    nom: 'Riz',
    image: 'assets/images/riz-cantonais.webp'
  },
  {
    nom: 'Poulet',
    image: 'assets/images/poulet-kung-bao.jpg'
  }
  // Ajoute d'autres recettes ici
];