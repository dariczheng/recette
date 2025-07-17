export interface Recette {
  nom: string;
  image: string;
  steps: Step[];
}

export interface Step {
  description: string;
  image: string | null; // L'image peut être nulle si aucune image n'est fournie
}

export const RECETTES: Recette[] = [
  {
    nom: 'nouilles froides au poulet effiloché',
    image: '/assets/images/nouilles-froides-au-poulet-effiloché.jpg',
    steps: [
      {
        description:
          'Ingrédients : 1 blanc de poulet, 1 demi concombre, 2 portions de nouilles (type ramen ou nouilles fines), 1 tige de ciboule (sinon poireau), 1 tranche de gingembre, 2 gousses d’ail, 1 c. à café de piment en poudre (selon votre tolérance), 1 c. à soupe de sésame blanc grillé (optionnel), Sel (quantité à votre goût), 1 c. à café de sucre, 3 c. à soupe de sauce soja, 2 c. à soupe de vinaigre de riz noir (ou vinaigre chinois), 1 c. à soupe de sauce aux huîtres, Cacahuètes grillées (facultatif, pour plus de croquant), 1 c. à soupe de vin de cuisine (optionnel).',
        image: null,
      },
      {
        description:
          'Préparer les ingrédients : Coupez le concombre en fines lamelles. Mettez le blanc de poulet dans une casserole d’eau froide avec le gingembre, et le vin de cuisson. Portez à ébullition, puis laissez cuire 10 à 15 minutes à feu moyen. Égouttez et passez sous l’eau froide, puis effilochez à la main. Faites cuire les nouilles, rincez-les à l’eau froide pour stopper la cuisson et éviter qu’elles ne collent.',
        image:
          '/assets/images/nouilles-froides-au-poulet-effiloché-étape-1.jpg',
      },
      {
        description:
          'Préparer l’huile parfumée au piment : Dans un bol, mélangez : ail émincé, ciboule émincé, poudre de piment et graines de sésame. Faites chauffer de l’huile (presque fumante) et versez-la dessus pour faire ressortir les arômes. Mélangez bien.',
        image:
          '/assets/images/nouilles-froides-au-poulet-effiloché-étape-2.jpg',
      },
      {
        description:
          'Préparer la sauce : Ajoutez à l’huile parfumée : 3 c. à soupe de sauce soja, 2 c. à soupe de vinaigre noir, 1 c. à soupe de sauce aux huîtres, 1 pincée de sel, 1 c. à café de sucre. Mélangez bien pour obtenir une sauce homogène.',
        image:
          '/assets/images/nouilles-froides-au-poulet-effiloché-étape-3.jpg',
      },
      {
        description:
          'Assembler le plat : Versez la sauce sur les nouilles froides. Disposez le poulet effiloché et les lamelles de concombre par-dessus. Ajoutez quelques cacahuètes concassées pour le croquant (optionnel). Mélangez le tout avant de déguster !',
        image:
          '/assets/images/nouilles-froides-au-poulet-effiloché-étape-4.jpg',
      },
    ],
  },
  {
    nom: 'poelon d\'aubergines au sauce yuxiang',
    image: '/assets/images/poelon-d-aubergines-sauce-yuxiang.jpg',
    steps: [
      {
        description:
          'Ingrédients : 3 aubergines chinoises, 100 g de viande hachée (porc ou boeuf), 2 tiges de ciboule (sinon ciboulette), 2 tranches de gingembre, 3 gousses d’ail, quelques piments oiseaux (selon votre goût), 1 c. à soupe de pâte de sojas fermentés (doubanjiang de Pixian), 1/2 c. à soupe de sauce soja foncée, 2 c. à soupe de sauce soja claire, 1 c. à soupe de vinaigre noir chinois, 1 c. à soupe de sauce aux huîtres, 1 c. à soupe de sucre, 1 c. à soupe de fécule (maïzena), 1/2 bol d’eau.',
        image: null,
      },
      {
        description:
          'Préparer les ingrédients : couper les aubergines en longs bâtonnets. Émincer ail, gingembre, ciboule et piment.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-1.jpg',
      },
      {
        description:
          'Préparer la sauce yuxiang : dans un bol, mélanger la sauce soja foncée, la sauce soja claire, le vinaigre, la sauce aux huîtres, le sucre, la fécule et l’eau. Bien mélanger.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-2.jpg',
      },
      {
        description:
          'Faire chauffer de l’huile dans un wok ou une poêle. Quand elle est bien chaude (environ 170 °C), faire frire les aubergines 2 minutes jusqu’à ce qu’elles soient légèrement dorées sur les bords. Égoutter.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-3.jpg',
      },
      {
        description:
          'Garder un peu d’huile dans la poêle. Faire revenir la viande hachée jusqu’à ce qu’elle change de couleur.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-4.jpg',
      },
      {
        description:
          'Ajouter l’ail, le gingembre, la ciboule (partie blanche) et les piments émincés. Faire sauter jusqu’à ce que ça sente bon.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-5.jpg',
      },
      {
        description:
          'Ajouter 1 c. à soupe de pâte de doubanjiang (Pixian) et bien mélanger pour qu’elle libère ses arômes.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-6.jpg',
      },
      {
        description: 'Ajouter les aubergines frites dans la poêle.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-7.jpg',
      },
      {
        description:
          'Verser la sauce yuxiang. Laisser mijoter 1 à 2 minutes jusqu’à ce que la sauce épaississe et enrobe bien les aubergines.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-8.jpg',
      },
      {
        description:
          'Parsemer de ciboule hachée pour décorer. Servez chaud avec du riz.',
        image: '/assets/images/poelon-d-aubergines-sauce-yuxiang-etape-9.jpg',
      },
    ],
  },
  {
  nom: "tofu mijoté et poêlé",
  image: "/assets/images/tofu-mijote-et-poele.jpg",
  steps: [
    {
      "description": "Ingrédients : 1 bloc de tofu, 1 œuf, 1 tige de ciboule (ou ciboulette), 3 gousses d’ail, 1 échalote, 2 piments oiseaux (selon votre goût), 1 c. à café de sucre, 1 c. à soupe de sauce soja, 2 c. à soupe de sauce aux huîtres, une pincée de poivre blanc, 5 c. à soupe d’eau, huile en quantité suffisante pour la cuisson.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-0.jpg"
    },
    {
      "description": "Préparer les aromates : couper les piments en rondelles, hacher l’ail, l’échalote et la ciboule.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-1.jpg"
    },
    {
      "description": "Préparer la sauce : mélanger dans un bol la sauce soja, la sauce aux huîtres, le sucre, le poivre blanc et l’eau. Réserver.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-2.jpg"
    },
    {
      "description": "Couper le tofu en triangles (en deux coupes diagonales) pour faciliter la cuisson sans qu’il se casse.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-3.jpg"
    },
    {
      "description": "Battre l’œuf dans une assiette creuse, y tremper délicatement les morceaux de tofu afin de les enrober d’œuf uniformément.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-4.jpg"
    },
    {
      "description": "Chauffer un peu d’huile dans une poêle, déposer délicatement les morceaux de tofu. Faire dorer à feu doux, sans les retourner trop tôt.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-5.jpg"
    },
    {
      "description": "Retourner et faire dorer l’autre face. Une fois bien dorés des deux côtés, réserver.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-6.jpg"
    },
    {
      "description": "Dans la même poêle, avec un peu d’huile, faire revenir l’ail, l’échalote et les piments à feu doux jusqu’à ce que ça parfume.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-7.jpg"
    },
    {
      "description": "Ajouter le tofu doré dans la poêle. Remuer doucement pour bien l’enrober d’aromates.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-8.jpg"
    },
    {
      "description": "Verser la sauce réservée, couvrir et laisser mijoter à feu doux pendant 8 minutes pour que le tofu absorbe les saveurs.",
      "image": "/assets/images/tofu-mijote-et-poele-etape-9.jpg"
    },
    {
      "description": "Quand la sauce a réduit et enrobe bien le tofu, ajouter l’ail chinois ou la ciboule, remuer légèrement et servir.",
      "image": "/assets/images/tofu-mijote-et-poele.jpg"
    }
  ]
},
{
  nom: "mapo tofu",
  image: "/assets/images/mapo-tofu.jpg",
  steps: [
    {
      "description": "Ingrédients : 1 bloc de tofu, 100 g de viande hachée (porc ou bœuf), 1 c. à soupe de pâte de sojas fermentés (doubanjiang), 1 c. à soupe de maïzena, 30 grains de poivre de Sichuan (optionnel), 2 piments oiseaux, 2 gousses d’ail, 1 petit morceau de gingembre, 1 c. à soupe de poivre de Sichuan moulu (ou 1 c. à café de huile de poivre de Sichuan), sel, 1 demi bloc de bouillon de poule, 3 c. à soupe de sauce soja, 1 tige de ciboule (optionnelle), un peu de poivre blanc (optionnel), piment en poudre au goût, eau.",
      "image": null
    },
    {
      "description": "Couper le tofu en cubes de 2–3 cm. Le blanchir à l’eau chaude avec une pincée de sel pour enlever l’odeur de soja. Égoutter et réserver.",
      "image": "/assets/images/mapo-tofu-etape-1.jpg"
    },
    {
      "description": "Hacher l’ail et le gingembre. Couper les piments en rondelles. Mélanger avec la viande hachée, ajouter 1 c. à soupe de sauce soja et un peu de sel. Laisser mariner.",
      "image": "/assets/images/mapo-tofu-etape-2.jpg"
    },
    {
      "description": "Préparer la sauce : mélanger 2 c. à soupe de sauce soja, 1 c. à soupe de poivre de Sichuan moulu, 1 c. à soupe de maïzena, 1 demi bloc de bouillon de poule, un peu de poivre blanc, et de l’eau. Bien remuer.",
      "image": "/assets/images/mapo-tofu-etape-3.jpg"
    },
    {
      "description": "Dans un wok, faire chauffer un peu d’huile à feu doux. Ajouter les grains de poivre de Sichuan et les faire infuser doucement jusqu’à ce qu’ils deviennent aromatiques et légèrement foncés. Retirer les grains. (L'ajout de grains est optionnel.).",
      "image": "/assets/images/mapo-tofu-etape-4.jpg"
    },
    {
      "description": "Ajouter la viande marinée, puis 1 c. à soupe de pâte de doubanjiang. Faire revenir jusqu’à ce que l’huile devienne rouge et que la viande soit bien cuite. Ajouter les cubes de tofu égouttés, verser la sauce préparée. Porter à ébullition à feu moyen. Ajouter le piment en poudre selon votre goût, parsemer de ciboule hachée, mélanger délicatement et servir.",
      "image": "/assets/images/mapo-tofu.jpg"
    }
  ]
}

  // Ajoute d'autres recettes ici
];
