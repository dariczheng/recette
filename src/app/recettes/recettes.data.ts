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
},

{
  "nom": "riz au poulet mijoté à la sauce brune",
  "image": "/assets/images/riz-au-poulet-jaune-mijote.jpg",
  "steps": [
    {
      "description": "Ingrédients : 2 cuisses de poulet (haut ou pilon), 4 champignons shiitakés secs, 2 poivrons verts, quelques tranches de gingembre, 5 à 6 piments rouges secs, 2/3 c. à soupe de sel, 2 c. à soupe de vin de cuisson, 1 c. à soupe de poivre blanc, 2 c. à soupe de sauce soja, 1 c. à soupe de sucre blanc.",
      "image": null
    },
    {
      "description": "Découper les cuisses de poulet en morceaux d’environ 4 cm. Bien les laver.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-1.jpg"
    },
    {
      "description": "Couper le gingembre en tranches, les piments secs en rondelles. Réhydrater les champignons et les couper en lamelles. Tailler les poivrons en lanières.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-2.jpg"
    },
    {
      "description": "Préparer un caramel : dans une casserole avec un peu d’huile froide, ajouter 1 c. à soupe de sucre blanc. Faire chauffer à feu doux en remuant jusqu’à ce que le sucre fonde et devienne brun foncé.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-3.jpg"
    },
    {
      "description": "Ajouter immédiatement les morceaux de poulet. Faire sauter à feu vif, puis ajouter 2 c. à soupe de vin de cuisson.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-4.jpg"
    },
    {
      "description": "Ajouter le gingembre et les piments secs. Verser 2 c. à soupe de sauce soja. Bien mélanger tous les ingrédients.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-5.jpg"
    },
    {
      "description": "Ajouter de l’eau jusqu’à couvrir le poulet. Ajouter les champignons réhydratés, puis le poivre blanc et le sel. Mélanger, couvrir et laisser mijoter à feu moyen-doux pendant 15 à 20 minutes.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-6.jpg"
    },
    {
      "description": "Quand le poulet est tendre et la sauce épaissie (sans être trop sèche), ajouter les poivrons verts.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote-etape-7.jpg"
    },
    {
      "description": "Ajouter une pincée de bouillon de poule. Mélanger délicatement et couper le feu dès que les poivrons sont à peine cuits.",
      "image": "/assets/images/riz-au-poulet-jaune-mijote.jpg"
    }
  ]
},
{
  nom: "riz à la poitrine de porc braisée à la taïwanaise",
  image: "/assets/images/lu-rou-fan.jpg",
  steps: [
    {
      "description": "Ingrédients : 1000 g de poitrine de porc avec peau, 1/2 oignon rouge, 12–16 champignons shiitakés secs (ou frais), œufs (quantité selon envie), 1–2 tiges de ciboule, 5–6 tranches de gingembre, quelques grains de poivre de Sichuan, 1 étoile d’anis, 1 feuille de laurier, 1 petit bâton de cannelle, 1 piment séché, 1–2 morceaux de sucre candi, sauce soja, sauce soja foncée, sel.",
      "image": null
    },
    {
      "description": "Couper la poitrine de porc en petits morceaux (environ 2–3 cm).",
      "image": "/assets/images/lu-rou-fan-etape-1.jpg"
    },
    {
      "description": "Faire tremper les champignons secs jusqu’à réhydratation, puis les couper en petits dés.",
      "image": "/assets/images/lu-rou-fan-etape-2.jpg"
    },
    {
      "description": "Couper l’oignon rouge en petits dés.",
      "image": "/assets/images/lu-rou-fan-etape-3.jpg"
    },
    {
      "description": "Faire bouillir les œufs dans de l’eau froide. Une fois que l’eau bout, cuire encore 3–4 minutes puis couper le feu et laisser reposer dans l’eau chaude. Écaler ensuite.",
      "image": "/assets/images/lu-rou-fan-etape-4.jpg"
    },
    {
      "description": "Faire revenir les dés d’oignon dans l’huile à feu moyen-doux pour en faire des oignons frits. Bien surveiller pour éviter qu’ils brûlent.",
      "image": "/assets/images/lu-rou-fan-etape-5.jpg"
    },
    {
      "description": "Blanchir les morceaux de porc dans l’eau froide. Porter à ébullition, retirer l’écume, puis égoutter. Garder le bouillon filtré.",
      "image": "/assets/images/lu-rou-fan-etape-6.jpg"
    },
    {
      "description": "Faire revenir la poitrine dans un peu d’huile (celle des oignons frits si possible) avec du gingembre jusqu’à ce qu’elle commence à dorer et à libérer son gras.",
      "image": "/assets/images/lu-rou-fan-etape-7.jpg"
    },
    {
      "description": "Ajouter les champignons, faire revenir, puis ajouter les oignons frits. Bien mélanger.",
      "image": "/assets/images/lu-rou-fan-etape-8.jpg"
    },
    {
      "description": "Verser la sauce soja claire, la sauce soja foncée, puis ajouter le bouillon filtré jusqu’à recouvrir les ingrédients. Ajouter le ciboule, le gingembre, les épices (poivre, anis étoilé, feuille de laurier, cannelle, piment).",
      "image": "/assets/images/lu-rou-fan-etape-9.jpg"
    },
    {
      "description": "Ajouter les œufs durs écalés. Porter à ébullition, puis couvrir et laisser mijoter à feu doux (40 à 60 min en cocotte, sinon jusqu’à 80 min).",
      "image": "/assets/images/lu-rou-fan-etape-10.jpg"
    },
    {
      "description": "Vers le milieu de cuisson, ajouter le sucre candi et rectifier le sel.",
      "image": "/assets/images/lu-rou-fan-etape-11.jpg"
    },
    {
      "description": "Quand la viande est bien tendre, laisser réduire un peu la sauce. Il doit rester du jus pour napper le riz.",
      "image": "/assets/images/lu-rou-fan-etape-12.jpg"
    }
  ]
},
{
  "nom": "petits pains vapeur au potiron",
  "image": "/assets/images/nan-gua-man-tou.jpg",
  "steps": [
    {
      "description": "Ingrédients : 250 g de purée de potiron, 500 g de farine, 4 g de levure, un peu d’huile, 50 g de sucre en poudre.",
      "image": null
    },
    {
      "description": "Peler et couper le potiron en tranches. Le cuire à la vapeur jusqu’à tendreté puis, avec des gants, l’écraser en purée.",
      "image": "/assets/images/nan-gua-man-tou-etape-1.jpg"
    },
    {
      "description": "Délayer la levure dans un peu d’eau tiède. Mélanger tous les ingrédients dans un saladier. Former une pâte en mélangeant d’abord en miettes, puis en pétrissant.",
      "image": "/assets/images/nan-gua-man-tou-etape-2.jpg"
    },
    {
      "description": "Pétrir jusqu’à obtenir une pâte lisse : la pâte ne colle ni aux mains, ni au saladier. Couvrir de film alimentaire et laisser lever (première fermentation).",
      "image": "/assets/images/nan-gua-man-tou-etape-3.jpg"
    },
    {
      "description": "Laisser pousser à température ambiante jusqu’à 2–3 fois son volume (1 à 2 h selon la température). Si en enfonçant un doigt la pâte ne rebondit pas, elle est prête.",
      "image": "/assets/images/nan-gua-man-tou-etape-4.jpg"
    },
    {
      "description": "L’intérieur de la pâte doit présenter une structure alvéolée en nid d’abeille.",
      "image": "/assets/images/nan-gua-man-tou-etape-5.jpg"
    },
    {
      "description": "Sortir la pâte et la dégazer en la pétrissant à nouveau. Saupoudrer un peu de farine sèche en pétrissant (plus si vous préférez une mie ferme). Rouler en rectangle avec un rouleau, enrouler en boudin et couper en morceaux de 30 g environ.",
      "image": "/assets/images/nan-gua-man-tou-etape-6.jpg"
    },
    {
      "description": "Placer dans le panier vapeur. Allumer le feu à froid pendant 2 min, puis éteindre. Laisser lever une seconde fois 30 min jusqu’à doubler de volume.",
      "image": "/assets/images/nan-gua-man-tou-etape-7.jpg"
    },
    {
      "description": "Rallumer le feu et cuire à la vapeur 10–15 min. Couper le feu et laisser reposer 5 min sans ouvrir le couvercle. Les mantou sont dorés, moelleux et parfumés!",
      "image": "/assets/images/nan-gua-man-tou-etape-8.jpg"
    }
  ]
},



  // Ajoute d'autres recettes ici
];
