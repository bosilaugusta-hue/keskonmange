const plat = [
    { nom: "Poulet rôti pommes de terre", type: "Viande", gout: "Salé", accompagnement: "Féculent", categorie: "Sain" },
    { nom: "Spaghetti bolognaise", type: "Viande", gout: "Salé", accompagnement: "Féculent", categorie: "Plaisir" },
    { nom: "Poulet riz brocolis vapeur", type: "Viande", gout: "Salé", accompagnement: "Féculent", categorie: "Sportif" },
    { nom: "Dhal de lentilles riz basmati", type: "Légumes", gout: "Salé", accompagnement: "Féculent", categorie: "Régime" },
    { nom: "Poké bowl saumon riz vinaigré", type: "Poisson", gout: "Salé", accompagnement: "Féculent", categorie: "Sportif" },
    { nom: "Paella riz safran fruits de mer", type: "Poisson", gout: "Salé", accompagnement: "Féculent", categorie: "Plaisir" },
    { nom: "Poisson pané riz pilaf", type: "Poisson", gout: "Salé", accompagnement: "Féculent", categorie: "Régime" },
    { nom: "Saumon riz complet légumes vapeur", type: "Poisson", gout: "Salé", accompagnement: "Féculent", categorie: "Sain" },
    { nom: "Curry de légumes au riz", type: "Légumes", gout: "Salé", accompagnement: "Féculent", categorie: "Sain" },
    { nom: "Chili sin carne quinoa", type: "Légumes", gout: "Salé", accompagnement: "Féculent", categorie: "Plaisir" },
    { nom: "Nouilles sautées légumes wok", type: "Légumes", gout: "Salé", accompagnement: "Féculent", categorie: "Sportif" },
    { nom: "Ratatouille au riz basmati", type: "Légumes", gout: "Salé", accompagnement: "Féculent", categorie: "Régime" },
    { nom: "Poulet basquaise poivrons", type: "Viande", gout: "Salé", accompagnement: "Légumes", categorie: "Sain" },
    { nom: "Dinde grillée ratatouille", type: "Viande", gout: "Salé", accompagnement: "Légumes", categorie: "Régime" },
    { nom: "Wrap poulet crudités taboulé", type: "Viande", gout: "Salé", accompagnement: "Légumes", categorie: "Sportif" },
    { nom: "Poivrons farcis salade verte", type: "Viande", gout: "Salé", accompagnement: "Légumes", categorie: "Plaisir" },
    { nom: "Saumon grillé haricots verts", type: "Poisson", gout: "Salé", accompagnement: "Légumes", categorie: "Sportif" },
    { nom: "Cabillaud vapeur courgettes", type: "Poisson", gout: "Salé", accompagnement: "Légumes", categorie: "Régime" },
    { nom: "Filet de dorade épinards vapeur", type: "Poisson", gout: "Salé", accompagnement: "Légumes", categorie: "Sain" },
    { nom: "Brochettes de dorade salade", type: "Poisson", gout: "Salé", accompagnement: "Légumes", categorie: "Plaisir" },
    { nom: "Gratin de légumes poêlés", type: "Légumes", gout: "Salé", accompagnement: "Légumes", categorie: "Sain" },
    { nom: "Wok de légumes tofu", type: "Légumes", gout: "Salé", accompagnement: "Légumes", categorie: "Régime" },
    { nom: "Falafels salade roquette", type: "Légumes", gout: "Salé", accompagnement: "Légumes", categorie: "Sportif" },
    { nom: "Tarte aux légumes fromage", type: "Légumes", gout: "Salé", accompagnement: "Légumes", categorie: "Plaisir" },
    { nom: "Poulet miel moutarde patates douces", type: "Viande", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Sportif" },
    { nom: "Poulet miel sésame riz basmati", type: "Viande", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Plaisir" },
    { nom: "Canard à l'orange patates douces", type: "Viande", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Sain" },
    { nom: "Porc caramel gingembre riz", type: "Viande", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Régime" },
    { nom: "Saumon teriyaki riz complet", type: "Poisson", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Sportif" },
    { nom: "Thon laqué miel riz jasmin", type: "Poisson", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Sain" },
    { nom: "Crevettes aigre-douces riz sauté", type: "Poisson", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Plaisir" },
    { nom: "Maquereau sauce soja miel riz", type: "Poisson", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Régime" },
    { nom: "Wok légumes sauce aigre-douce nouilles", type: "Légumes", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Sain" },
    { nom: "Buddha bowl patate douce houmous", type: "Légumes", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Sportif" },
    { nom: "Curry potiron coco riz", type: "Légumes", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Régime" },
    { nom: "Pad thaï nouilles de riz", type: "Légumes", gout: "Sucré-salé", accompagnement: "Féculent", categorie: "Plaisir" },
    { nom: "Poulet abricot haricots verts", type: "Viande", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Sain" },
    { nom: "Magret de canard figues salade", type: "Viande", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Plaisir" },
    { nom: "Dinde cranberry courgettes grillées", type: "Viande", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Sportif" },
    { nom: "Poulet pomme céleri rave", type: "Viande", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Régime" },
    { nom: "Cabillaud laqué miel courgettes", type: "Poisson", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Régime" },
    { nom: "Saumon glacé érable épinards", type: "Poisson", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Sportif" },
    { nom: "Daurade passion mangue salade", type: "Poisson", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Sain" },
    { nom: "Crevettes ananas poivrons wok", type: "Poisson", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Plaisir" },
    { nom: "Wok légumes sauce aigre-douce", type: "Légumes", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Régime" },
    { nom: "Salade lentilles mangue vinaigrette", type: "Légumes", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Sportif" },
    { nom: "Betterave chèvre noix roquette", type: "Légumes", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Sain" },
    { nom: "Tarte tatin oignons caramélisés", type: "Légumes", gout: "Sucré-salé", accompagnement: "Légumes", categorie: "Plaisir" }
];
const recipeAndIngredient = [
    {
        nom: "Poulet rôti pommes de terre",
        ingredients: ["1 poulet entier", "800g pommes de terre", "4 gousses d'ail", "Huile d'olive", "Herbes de Provence", "Sel, poivre"],
        recette: "Frotter le poulet d'huile d'olive en lui faisant un massage non consenti. Placer les pommes de terre autour comme une garde d'honneur. Écraser l'ail avec le poing. Saupoudrer les herbes de Provence depuis le plafond. Enfourner à 200°C et sortir vérifier toutes les 3 minutes par anxiété."
    },
    {
        nom: "Spaghetti bolognaise",
        ingredients: ["400g spaghetti", "400g bœuf haché", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Huile d'olive", "Origan", "Basilic frais", "Sel, poivre"],
        recette: "Faire revenir l'oignon et l'ail en les regardant dans les yeux. Ajouter le bœuf haché et l'écraser avec rancœur. Verser les tomates depuis 50cm de hauteur. Lancer l'origan en l'air et espérer. Jeter les spaghetti contre le mur pour tester la cuisson et ne pas les ramasser."
    },
    {
        nom: "Poulet riz brocolis vapeur",
        ingredients: ["2 filets de poulet", "200g riz blanc", "1 brocoli", "Huile d'olive", "Jus de citron", "Sel, poivre"],
        recette: "Regarder le riz cuire sans ciller pendant 10 minutes. Mettre le brocoli à la vapeur en lui souhaitant bonne chance. Saisir le poulet à la poêle en vérifiant Instagram entre chaque retournement. Arroser de citron depuis une hauteur dramatique et servir en soupirant."
    },
    {
        nom: "Dhal de lentilles riz basmati",
        ingredients: ["250g lentilles corail", "200g riz basmati", "1 oignon", "2 gousses d'ail", "1 boîte tomates concassées", "Cumin", "Curcuma", "Coriandre en poudre", "Huile d'olive", "Sel, poivre"],
        recette: "Rincer les lentilles 12 fois par superstition. Faire revenir l'oignon et l'ail en leur racontant sa journée. Verser le curcuma et accepter que vos doigts soient jaunes pour 3 semaines. Ajouter les tomates et partir faire autre chose. Revenir quand ça sent bon."
    },
    {
        nom: "Poké bowl saumon riz vinaigré",
        ingredients: ["300g saumon frais", "200g riz à sushi", "Vinaigre de riz", "1 avocat", "1 concombre", "Edamame", "Sauce soja", "Graines de sésame"],
        recette: "Cuire le riz et l'arroser de vinaigre en faisant la grimace. Couper le saumon en dés en faisant des bruits de samouraï. Disposer chaque ingrédient séparément car ils ne se connaissent pas encore. Arroser de sauce soja les yeux fermés. Prendre 12 photos avant de manger."
    },
    {
        nom: "Paella riz safran fruits de mer",
        ingredients: ["300g riz à paella", "500g fruits de mer mélangés", "1 dose de safran", "1 oignon", "2 gousses d'ail", "1 poivron rouge", "Bouillon de poisson", "Huile d'olive", "Sel, poivre"],
        recette: "Mettre le safran en criant 'OLÉ'. Faire revenir l'oignon, l'ail et le poivron en tapant du pied. Ajouter le riz et nacrer en faisant des gestes de chef. Balancer les fruits de mer un par un pour le spectacle. Servir sans couvercle et avec fierté."
    },
    {
        nom: "Poisson pané riz pilaf",
        ingredients: ["4 filets de poisson blanc", "200g riz long", "Chapelure", "2 œufs", "Farine", "Bouillon de légumes", "Huile", "Sel, poivre"],
        recette: "Paner les filets en se couvrant de farine inévitablement. Cuire le riz pilaf en le surveillant comme un trésor. Plonger le poisson dans l'huile chaude en reculant prudemment. Servir en forme de montagne et prétendre que c'était prévu."
    },
    {
        nom: "Saumon riz complet légumes vapeur",
        ingredients: ["2 pavés de saumon", "200g riz complet", "2 courgettes", "2 carottes", "1 brocoli", "Huile d'olive", "Citron", "Sel, poivre"],
        recette: "Lancer le riz complet dans l'eau et partir 35 minutes. Installer les légumes dans le panier vapeur par ordre alphabétique. Saisir le saumon en le fixant dans les yeux. Arroser de citron avec emphase et servir en se félicitant."
    },
    {
        nom: "Curry de légumes au riz",
        ingredients: ["200g riz blanc", "1 courgette", "1 poivron", "1 aubergine", "1 boîte lait de coco", "Pâte de curry", "1 oignon", "2 gousses d'ail", "Huile", "Sel"],
        recette: "Faire revenir l'oignon en dansant. Ajouter la pâte de curry comme un magicien. Balancer les légumes sans ordre précis. Noyer le tout dans le lait de coco et partir faire une sieste de 20 minutes. Revenir et servir comme si de rien n'était."
    },
    {
        nom: "Chili sin carne quinoa",
        ingredients: ["200g quinoa", "1 boîte haricots rouges", "1 boîte tomates concassées", "1 oignon", "1 poivron", "Épices chili", "Cumin", "Huile d'olive", "Sel, poivre"],
        recette: "Rincer le quinoa en se demandant pourquoi. Faire revenir l'oignon et le poivron en les encourageant verbalement. Ajouter les épices chili avec témérité puis tousser. Incorporer les haricots rouges un par un pour le suspense. Servir en rigolant."
    },
    {
        nom: "Nouilles sautées légumes wok",
        ingredients: ["300g nouilles chinoises", "1 poivron", "1 carotte", "1 courgette", "Sauce soja", "Gingembre frais", "2 gousses d'ail", "Huile de sésame"],
        recette: "Chauffer le wok jusqu'au rouge et reculer de 2 mètres. Jeter les légumes dedans en faisant des bruits de kung-fu. Ajouter les nouilles en faisant involontairement des nœuds. Verser la sauce soja en chantant. Servir en jonglant avec la poêle."
    },
    {
        nom: "Ratatouille au riz basmati",
        ingredients: ["200g riz basmati", "1 aubergine", "2 courgettes", "2 tomates", "1 poivron", "1 oignon", "2 gousses d'ail", "Herbes de Provence", "Huile d'olive", "Sel, poivre"],
        recette: "Couper les légumes en formes artistiques non définies. Faire revenir l'oignon puis oublier l'ail. Ajouter les légumes dans le désordre en haussant les épaules. Saupoudrer les herbes de Provence comme une bénédiction. Servir en expliquant que c'est un plat d'artiste."
    },
    {
        nom: "Poulet basquaise poivrons",
        ingredients: ["4 cuisses de poulet", "3 poivrons (rouge, vert, jaune)", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Piment d'Espelette", "Huile d'olive", "Sel, poivre"],
        recette: "Faire dorer les cuisses en leur criant 'OLÉ'. Ajouter les poivrons en admirant l'arc-en-ciel. Verser les tomates et le piment d'Espelette en tapant du pied. Remettre le poulet et couvrir. Mijoter 40 minutes en dansant le flamenco dans la cuisine."
    },
    {
        nom: "Dinde grillée ratatouille",
        ingredients: ["4 escalopes de dinde", "1 aubergine", "2 courgettes", "2 tomates", "1 poivron", "1 oignon", "Herbes de Provence", "Huile d'olive", "Sel, poivre"],
        recette: "Préparer la ratatouille en jetant les légumes dans la poêle par ordre de taille. Mijoter 25 minutes en chantant une chanson triste. Griller les escalopes en les retournant exactement toutes les 47 secondes. Servir quand vous en avez marre d'attendre."
    },
    {
        nom: "Wrap poulet crudités taboulé",
        ingredients: ["2 filets de poulet", "4 tortillas", "100g semoule fine", "2 tomates", "1 concombre", "Menthe fraîche", "Citron", "Huile d'olive", "Salade verte", "Sel, poivre"],
        recette: "Hydrater la semoule et la fixer du regard jusqu'à ce qu'elle gonfle. Griller le poulet en le retournant trop souvent par anxiété. Étaler la tortilla et empiler tout en mode Tetris. Rouler en espérant que ça tienne. Servir avant que ça s'effondre."
    },
    {
        nom: "Poivrons farcis salade verte",
        ingredients: ["4 poivrons", "400g bœuf haché", "200g riz cuit", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Herbes", "Salade verte", "Huile d'olive", "Sel, poivre"],
        recette: "Évider les poivrons en leur présentant des excuses. Mélanger la viande, le riz et les tomates avec les mains en faisant une grimace. Farcir les poivrons jusqu'à débordement puis hausser les épaules. Enfourner 35 minutes et surveiller par la vitre du four comme un film."
    },
    {
        nom: "Saumon grillé haricots verts",
        ingredients: ["2 pavés de saumon", "400g haricots verts", "1 citron", "2 gousses d'ail", "Huile d'olive", "Aneth", "Sel, poivre"],
        recette: "Plonger les haricots dans l'eau bouillante en leur souhaitant bon courage. Fixer les pavés de saumon dans les yeux avant de les saisir. Faire sauter les haricots avec l'ail en criant 'HOP' à chaque saut. Servir avec le citron pressé depuis une hauteur inutile."
    },
    {
        nom: "Cabillaud vapeur courgettes",
        ingredients: ["2 filets de cabillaud", "3 courgettes", "1 citron", "Huile d'olive", "Aneth ou persil", "Sel, poivre"],
        recette: "Installer le cabillaud dans le panier vapeur comme dans un spa. Couper les courgettes en rondelles parfaitement identiques, recommencer si raté. Hésiter entre l'aneth et le persil pendant 8 minutes puis prendre les deux. Arroser d'huile et de citron avec la grâce d'un chef en pyjama."
    },
    {
        nom: "Filet de dorade épinards vapeur",
        ingredients: ["2 filets de dorade", "400g épinards frais", "1 citron", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Faire tomber les épinards à la poêle et regarder 400g devenir une portion pour hamster. Cuire la dorade en lui murmurant des encouragements. Arroser de citron avec emphase. Servir en faisant semblant que la quantité d'épinards était prévue."
    },
    {
        nom: "Brochettes de dorade salade",
        ingredients: ["400g dorade en morceaux", "2 poivrons", "1 oignon", "Salade verte", "1 citron", "Huile d'olive", "Herbes", "Sel, poivre"],
        recette: "Enfiler la dorade, les poivrons et l'oignon sur les brochettes en alternant les couleurs comme un artiste. Si un morceau tombe, le remettre en faisant semblant que ça n'a pas eu lieu. Griller 4 minutes de chaque côté en prenant la pose. Servir avec la salade sans expliquer."
    },
    {
        nom: "Gratin de légumes poêlés",
        ingredients: ["2 courgettes", "1 aubergine", "2 tomates", "20cl crème fraîche", "100g gruyère râpé", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Poêler les légumes jusqu'à ce qu'ils soient légèrement jaloux les uns des autres. Disposer en couches dans le plat en faisant un commentaire sur chacun. Couvrir de crème puis de gruyère jusqu'à ne plus voir les légumes. Enfourner et surveiller la dorure avec l'intensité d'un gardien de musée."
    },
    {
        nom: "Wok de légumes tofu",
        ingredients: ["300g tofu ferme", "1 poivron", "1 carotte", "1 courgette", "Pousses de soja", "Sauce soja", "Gingembre frais", "2 gousses d'ail", "Huile de sésame"],
        recette: "Encourager le tofu car il a mauvaise réputation et c'est injuste. Le faire dorer jusqu'à ce qu'il soit fier de lui. Lancer les légumes dans le wok en mode guerrier. Ajouter la sauce soja en criant 'TERIYAKI' même si c'est faux. Servir en s'inclinant légèrement."
    },
    {
        nom: "Falafels salade roquette",
        ingredients: ["400g pois chiches cuits", "1 oignon", "2 gousses d'ail", "Persil frais", "Coriandre fraîche", "Cumin", "Farine", "Huile de friture", "Roquette", "1 citron"],
        recette: "Mixer les pois chiches jusqu'à obtenir une pâte qui ressemble à de la boue mais sent divinement bon. Former des boulettes parfaites, regarder la première s'aplatir et hausser les épaules. Se couvrir de farine inévitablement. Plonger dans l'huile en fermant les yeux. Servir en prétendant les avoir achetées."
    },
    {
        nom: "Tarte aux légumes fromage",
        ingredients: ["1 pâte brisée", "2 courgettes", "1 poivron", "1 oignon", "3 œufs", "20cl crème fraîche", "150g fromage râpé", "Huile d'olive", "Sel, poivre"],
        recette: "Dérouler la pâte brisée en espérant qu'elle ne se déchire pas. La réconforter quand elle se déchire. Faire revenir les légumes en les encourageant. Battre les œufs avec la crème en les félicitant. Couvrir de fromage jusqu'à ne plus voir les légumes. Enfourner 30 minutes et surveiller comme un chef d'œuvre."
    },
    {
        nom: "Poulet miel moutarde patates douces",
        ingredients: ["4 cuisses de poulet", "2 patates douces", "3 c.s. miel", "2 c.s. moutarde", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Mélanger le miel et la moutarde en léchant la cuillère deux fois de trop. Masser le poulet avec la marinade en lui faisant des promesses. Couper les patates douces en morceaux de taille aléatoire car la vie n'est pas parfaite. Enfourner 45 minutes et vérifier toutes les 5 minutes par pure anxiété."
    },
    {
        nom: "Poulet miel sésame riz basmati",
        ingredients: ["2 filets de poulet", "200g riz basmati", "3 c.s. miel", "2 c.s. sauce soja", "Graines de sésame", "2 gousses d'ail", "Gingembre frais", "Huile"],
        recette: "Préparer la marinade et la goûter trois fois sous prétexte de vérification. Plonger le poulet dedans 15 minutes en lui mettant de la musique. Cuire à la poêle en l'arrosant de marinade comme s'il faisait un bain de soleil. Parsemer de sésame en en perdant la moitié sur le plan de travail."
    },
    {
        nom: "Canard à l'orange patates douces",
        ingredients: ["2 magrets de canard", "2 oranges", "2 patates douces", "1 c.s. miel", "Vinaigre balsamique", "Beurre", "Sel, poivre"],
        recette: "Quadriller les magrets côté peau en dessinant involontairement la Tour Eiffel. Cuire côté peau 8 minutes en admirant le gras fondre avec satisfaction. Presser les oranges en se prenant le jus dans l'œil. Déglacer avec le jus d'orange, le miel et le balsamique en remuant comme un alchimiste."
    },
    {
        nom: "Porc caramel gingembre riz",
        ingredients: ["400g filet de porc", "200g riz blanc", "3 c.s. sauce soja", "2 c.s. miel", "Gingembre frais", "2 gousses d'ail", "Huile de sésame", "Sel, poivre"],
        recette: "Couper le porc en lamelles en sifflant une mélodie asiatique. Faire revenir l'ail et le gingembre en reculant car ça éclabousse. Ajouter le porc et le féliciter de sa belle couleur. Verser la sauce soja et le miel et regarder le caramel se former avec des yeux brillants."
    },
    {
        nom: "Saumon teriyaki riz complet",
        ingredients: ["2 pavés de saumon", "200g riz complet", "4 c.s. sauce soja", "2 c.s. mirin", "1 c.s. sucre", "Gingembre frais", "Graines de sésame"],
        recette: "Préparer la sauce teriyaki et la goûter en faisant 'mmmh' bruyamment. Faire mariner le saumon 15 minutes en lui mettant de la musique japonaise. Cuire à la poêle en nappant de sauce avec un pinceau et beaucoup de sérieux. Parsemer de sésame en ratant une bonne partie sur le plan de travail."
    },
    {
        nom: "Thon laqué miel riz jasmin",
        ingredients: ["2 steaks de thon", "200g riz jasmin", "3 c.s. miel", "2 c.s. sauce soja", "1 citron vert", "Gingembre frais", "Huile"],
        recette: "Mélanger le miel, la sauce soja et le gingembre en se léchant les doigts à chaque étape. Badigeonner les steaks comme si on vernissait un meuble précieux. Saisir à la poêle très chaude 2 minutes de chaque côté en criant 'BLEU !' même si on préfère bien cuit. Servir sur le riz jasmin en s'auto-félicitant."
    },
    {
        nom: "Crevettes aigre-douces riz sauté",
        ingredients: ["400g crevettes décortiquées", "200g riz", "1 poivron", "1 oignon", "Ananas en conserve", "Vinaigre de riz", "Sauce soja", "Sucre", "2 gousses d'ail", "Huile"],
        recette: "Faire revenir les crevettes en 2 minutes chrono car elles ne pardonnent pas. Ajouter le poivron, l'oignon et l'ananas en assumant le mélange fruit-crustacé. Verser la sauce dans la poêle avec un geste dramatique. Regarder le caramel se former en frottant les mains comme un villain de film."
    },
    {
        nom: "Maquereau sauce soja miel riz",
        ingredients: ["4 filets de maquereau", "200g riz blanc", "3 c.s. sauce soja", "2 c.s. miel", "Gingembre frais", "1 citron", "Graines de sésame"],
        recette: "Féliciter le maquereau pour ses oméga-3 exemplaires avant de le cuisiner. Mélanger la sauce soja, le miel et le gingembre en se demandant le sens de la vie. Badigeonner les filets en leur faisant des promesses. Enfourner 15 minutes et guetter la caramélisation comme un faucon. Parsemer de sésame depuis une hauteur ridicule."
    },
    {
        nom: "Wok légumes sauce aigre-douce nouilles",
        ingredients: ["300g nouilles chinoises", "1 poivron", "1 carotte", "1 courgette", "Pousses de soja", "Sauce aigre-douce", "Sauce soja", "2 gousses d'ail", "Huile de sésame"],
        recette: "Cuire les nouilles et les démêler comme des écouteurs oubliés dans une poche. Jeter les légumes dans le wok en faisant des 'WHOOSH'. Ajouter les nouilles délicatement, c'est-à-dire pas du tout. Verser les sauces en fermant les yeux pour prier. Mélanger 2 minutes en perdant des nouilles sur la cuisinière."
    },
    {
        nom: "Buddha bowl patate douce houmous",
        ingredients: ["2 patates douces", "200g houmous", "150g quinoa", "1 avocat", "Épinards frais", "Maïs", "1 citron", "Huile d'olive", "Cumin"],
        recette: "Rôtir les patates douces avec le cumin en leur chantant une ode. Rincer le quinoa 12 fois car internet dit que c'est important. Prier pour que l'avocat soit ni trop dur ni trop mou. Composer le bol en séparant chaque aliment car ils ne se connaissent pas. Prendre 47 photos et poster la moins réussie."
    },
    {
        nom: "Curry potiron coco riz",
        ingredients: ["500g potiron", "200g riz basmati", "1 boîte lait de coco", "Pâte de curry", "1 oignon", "2 gousses d'ail", "Gingembre frais", "Coriandre fraîche", "Huile"],
        recette: "Éplucher le potiron en luttant héroïquement contre sa peau. Faire revenir l'oignon, l'ail et le gingembre jusqu'à oublier ce qu'on faisait. Ajouter la pâte de curry en toussant dignement. Noyer le potiron dans le lait de coco et partir faire autre chose 20 minutes. Agiter la coriandre au-dessus du plat comme une baguette magique."
    },
    {
        nom: "Pad thaï nouilles de riz",
        ingredients: ["300g nouilles de riz", "200g crevettes ou tofu", "2 œufs", "Pousses de soja", "Cacahuètes", "Sauce poisson ou soja", "1 citron vert", "2 gousses d'ail", "Huile", "Ciboulette"],
        recette: "Faire tremper les nouilles en les regardant mollement se ramollir. Faire revenir l'ail puis ajouter les crevettes ou le tofu selon sa philosophie de vie. Pousser tout sur le côté et brouiller les œufs sans vraiment de plan. Ajouter la sauce poisson en retenant son souffle car ça sent fort. Servir en criant 'PAD THAÏÏÏ !'."
    },
    {
        nom: "Poulet abricot haricots verts",
        ingredients: ["4 filets de poulet", "400g haricots verts", "200g abricots", "2 c.s. miel", "1 c.s. vinaigre balsamique", "Thym", "Huile d'olive", "Sel, poivre"],
        recette: "Dorer les filets de poulet en leur promettant que la suite sera sucrée. Ajouter les abricots en leur expliquant qu'ils vont cuire avec de la viande et que non, ce n'est pas bizarre. Verser le miel et le balsamique en remuant comme un sorcier. Blanchir les haricots verts en les félicitant pour leur verdeur."
    },
    {
        nom: "Magret de canard figues salade",
        ingredients: ["2 magrets de canard", "6 figues fraîches", "Salade verte", "2 c.s. miel", "Vinaigre balsamique", "Sel, poivre"],
        recette: "Quadriller les magrets en dessinant des losanges approximatifs selon l'humeur. Cuire côté peau 8 minutes en regardant fondre le gras avec une fascination troublante. Poêler les figues avec le miel jusqu'à ce qu'elles sentent le paradis. Déglacer avec le balsamique en faisant 'aaah' quand ça crépite."
    },
    {
        nom: "Dinde cranberry courgettes grillées",
        ingredients: ["4 escalopes de dinde", "200g cranberries", "3 courgettes", "2 c.s. miel", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Cuire les cranberries avec le miel jusqu'à obtenir une sauce rouge digne d'un conte de Noël. Griller les escalopes en les chronométrant avec une précision militaire. Griller les courgettes en leur donnant de belles stries façon restaurant étoilé. Assembler dans l'assiette en prétendant que tout était planifié."
    },
    {
        nom: "Poulet pomme céleri rave",
        ingredients: ["2 filets de poulet", "1 céleri rave", "2 pommes", "Moutarde", "Crème fraîche légère", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Éplucher le céleri rave en acceptant que ça prendra du temps et que la vie est ainsi faite. Cuire le poulet à la poêle en regardant les pommes attendre leur tour. Faire revenir les pommes avec le thym jusqu'à ce qu'elles soient dorées et philosophiques. Déglacer avec la crème et la moutarde en obtenant une sauce qui réconcilie tout le monde."
    },
    {
        nom: "Cabillaud laqué miel courgettes",
        ingredients: ["2 filets de cabillaud", "3 courgettes", "3 c.s. miel", "2 c.s. sauce soja", "1 citron", "Gingembre frais", "Huile d'olive", "Sel, poivre"],
        recette: "Mélanger le miel, la sauce soja et le gingembre en se sentant très professionnel. Badigeonner le cabillaud comme si on vernissait un meuble précieux. Surveiller la cuisson au four comme s'il allait s'enfuir. Faire sauter les courgettes en les applaudissant quand elles dorent. Servir en faisant 'tadaaaa'."
    },
    {
        nom: "Saumon glacé érable épinards",
        ingredients: ["2 pavés de saumon", "400g épinards frais", "3 c.s. sirop d'érable", "2 c.s. sauce soja", "1 c.s. moutarde", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Mélanger le sirop d'érable, la sauce soja et la moutarde en se sentant très canadien. Badigeonner le saumon et cuire 4 minutes de chaque côté en le nappant continuellement par conscience professionnelle. Faire tomber les épinards à l'ail et pleurer un peu en voyant 400g devenir une portion pour hamster. Servir le saumon dessus fièrement."
    },
    {
        nom: "Daurade passion mangue salade",
        ingredients: ["2 filets de daurade", "1 mangue", "2 fruits de la passion", "Salade verte", "1 citron vert", "Huile d'olive", "Coriandre fraîche", "Sel, poivre"],
        recette: "Cuire les filets de daurade en leur racontant qu'ils vont rejoindre des fruits exotiques. Couper la mangue en évitant le noyau qui a décidé d'être aussi large que possible. Ouvrir les fruits de la passion en s'extasiant sur leur intérieur étrange. Servir la daurade sur la salade avec la mangue en se sentant très vacances."
    },
    {
        nom: "Crevettes ananas poivrons wok",
        ingredients: ["400g crevettes décortiquées", "200g ananas", "2 poivrons", "1 oignon", "Sauce soja", "Sauce huître", "2 gousses d'ail", "Gingembre frais", "Huile"],
        recette: "Chauffer le wok jusqu'à l'incandescence et reculer de 3 mètres. Ajouter les crevettes et les chronométrer car elles ne pardonnent pas la surcuisson. Incorporer les poivrons, l'oignon et l'ananas en se demandant si le fruit a sa place ici (il a). Verser les sauces en formant une croix pour bénir le plat."
    },
    {
        nom: "Wok légumes sauce aigre-douce",
        ingredients: ["1 poivron", "1 carotte", "1 courgette", "1 oignon", "Pousses de soja", "Sauce aigre-douce", "Sauce soja", "2 gousses d'ail", "Gingembre frais", "Huile de sésame"],
        recette: "Émincer tous les légumes en oubliant immédiatement l'ordre de cuisson prévu. Chauffer l'huile de sésame jusqu'à la température du soleil. Jeter les légumes, l'ail et le gingembre en faisant des sons de kung-fu. Ajouter les sauces en fermant les yeux comme si on sautait d'une falaise. Servir en s'applaudissant."
    },
    {
        nom: "Salade lentilles mangue vinaigrette",
        ingredients: ["200g lentilles vertes", "1 mangue", "1 poivron rouge", "1 oignon rouge", "Coriandre fraîche", "1 citron vert", "Huile d'olive", "Cumin", "Sel, poivre"],
        recette: "Cuire les lentilles 20 minutes en leur interdisant de se transformer en purée. Les laisser refroidir en leur interdisant de coller. Couper la mangue en dés en évitant le noyau central qui prend toute la place. Émincer l'oignon rouge en pleurant dignement. Mélanger tout et parsemer la coriandre depuis une hauteur artistique."
    },
    {
        nom: "Betterave chèvre noix roquette",
        ingredients: ["4 betteraves cuites", "150g fromage de chèvre", "50g cerneaux de noix", "Roquette", "Vinaigre balsamique", "Huile d'olive", "Miel", "Sel, poivre"],
        recette: "Couper les betteraves en acceptant que vos mains soient roses pour 3 jours. Préparer la vinaigrette en fouettant avec enthousiasme. Dresser la roquette, disposer les betteraves et émietter le chèvre en faisant des gestes de chef. Parsemer les noix depuis une hauteur inutile et napper de vinaigrette avec fierté."
    },
    {
        nom: "Tarte tatin oignons caramélisés",
        ingredients: ["1 pâte feuilletée", "6 oignons", "50g beurre", "2 c.s. sucre", "2 c.s. vinaigre balsamique", "Thym", "Sel, poivre"],
        recette: "Émincer 6 oignons en pleurant toutes les larmes de son corps. Les caraméliser dans le beurre avec le sucre et le thym pendant 30 minutes en regardant sa vie défiler. Déglacer avec le balsamique en faisant 'aaah' quand ça crépite. Couvrir avec la pâte feuilletée en rentrant les bords comme une lettre d'amour. Retourner à la sortie du four en priant très fort."
    }
];


const questions = [
    { key: "categorie", texte: "Quelle catégorie ?", options: ["Plaisir", "Sain", "Sportif", "Régime"] },
    { key: "type", texte: "Quel type de plat ?", options: ["Viande", "Poisson", "Légumes"] },
    { key: "gout", texte: "Quel goût préférez-vous ?", options: ["Salé", "Sucré-salé"] },
    { key: "accompagnement", texte: "Avec quoi ?", options: ["Féculent", "Légumes"] },
];
const quizzQuestion = document.getElementById('quizzQuestion');
let answerButton = document.querySelectorAll('.answerButton');
const questionX = document.getElementById('questionNumber');
const progressBar = document.querySelector('progress');
const previousButton = document.getElementById('previousButton');
const quizzSection = document.querySelector('section');
const btnContainer = document.getElementById('btnContainer')
const quizz = document.querySelector('#quizz')
const recipeAndIngredientSection = document.querySelector('#recipeAndIngredients')
let totalAnswer = { categorie: "", type: "", gout: "", accompagnement: "" };
let questionNumber = 0;
let questionNumberX = 1;
let currentQuestion = questions[questionNumber];
quizzQuestion.textContent = currentQuestion.texte;


answerButton.forEach(button => {
    button.addEventListener('click', () => {
        quizz.style.minHeight = quizz.offsetHeight + 'px';
        answerButton.forEach(btn => btn.classList.add('closing'));

        setTimeout(() => {
            if (questionNumber < 3) {
                totalAnswer[currentQuestion.key] = button.textContent;
                questionNumberX++;
                questionNumber++;
                currentQuestion = questions[questionNumber];
                quizzQuestion.textContent = currentQuestion.texte;
                questionX.textContent = "Question " + questionNumberX + "/4";
                progressBar.value = questionNumberX;

                if (answerButton.length > currentQuestion.options.length) {
                    answerButton[answerButton.length - 1].remove();
                    answerButton = document.querySelectorAll('.answerButton');
                }
                answerButton.forEach((btn, i) => {
                    btn.classList.remove('closing');
                    btn.textContent = currentQuestion.options[i];
                    btn.classList.add('opening');
                });
                quizz.style.minHeight = quizz.scrollHeight + 'px';
                setTimeout(() => {
                    answerButton.forEach(btn => btn.classList.remove('opening'));
                }, 300);
            } else {
                quizz.classList.add('closing');
                setTimeout(() => {
                    totalAnswer[currentQuestion.key] = button.textContent;
                    progressBar.value = questionNumberX;
                    const resultatQuizz = plat.filter(p =>
                        p.categorie === totalAnswer.categorie &&
                        p.gout === totalAnswer.gout &&
                        p.type === totalAnswer.type &&
                        p.accompagnement === totalAnswer.accompagnement
                    );
                    const recipe = recipeAndIngredient.find(r =>
                        r.nom === resultatQuizz[0].nom
                    );
                    quizz.classList.remove('closing');
                    quizz.innerHTML = `
                        <h2 style="text-align: center;font-size:2.75rem;">${recipe.nom}</h2>
                        <div style="display: flex;padding:1rem 1rem; gap: 2rem; align-items: start;">
                            <div style="flex: 1;margin:1em 0 0 0">
                                <h3 style="text-align:start;font-size:2rem">Recette pour 2p :</h3>
                                <p style="font-size:1em">${recipe.recette}</p>
                            </div>
                            <div style="flex: 1;margin:1em 0 0 0">
                                <h3 style="text-align:center;font-size:2rem">Ingrédients :</h3>
                                <ul style="text-align:center;flex: 1;margin:1rem 0 0 0;list-style:none;font-size:0.8em;">
                                    ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                    quizz.classList.add('opening');
                    quizz.style.minHeight = quizz.scrollHeight + 'px';
                    setTimeout(() => {
                        quizz.classList.remove('opening');
                    }, 300);
                }, 300);
            }
        }, 300);
    });
});





// previousButton.addEventListener('click', () => {
//     if (questionNumber > 0) {
//         questionNumberX--;
//         questionNumber--;
//         currentQuestion = questions[questionNumber]
//         quizzQuestion.textContent = currentQuestion.texte;
//         console.log(questionNumber);
//         questionX.textContent = "Question " + questionNumberX + "/4";
//         progressBar.value = questionNumberX;
//     }const plat = [
