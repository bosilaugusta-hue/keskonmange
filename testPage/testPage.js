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
        recette: "Frotter le poulet avec l'huile d'olive en prenant un air très professionnel. Disposer les pommes de terre autour en cercle comme une réunion importante. Écraser l'ail avec conviction puis le jeter un peu partout sans stratégie. Saupoudrer les herbes de Provence en hauteur pour le spectacle. Enfourner à 200°C. Ouvrir le four toutes les 5 minutes pour vérifier que le poulet est toujours là."
    },
    {
        nom: "Spaghetti bolognaise",
        ingredients: ["400g spaghetti", "400g bœuf haché", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Huile d'olive", "Origan", "Basilic frais", "Sel, poivre"],
        recette: "Faire revenir l'oignon et l'ail en remuant lentement comme si ça changeait quelque chose. Ajouter le bœuf haché et l'écraser jusqu'à ce qu'il accepte son destin. Verser les tomates en visant approximativement la poêle. Laisser mijoter en regardant la sauce comme si elle allait répondre. Cuire les spaghetti et en goûter un toutes les 30 secondes 'pour être sûr'."
    },
    {
        nom: "Poulet riz brocolis vapeur",
        ingredients: ["2 filets de poulet", "200g riz blanc", "1 brocoli", "Huile d'olive", "Jus de citron", "Sel, poivre"],
        recette: "Lancer le riz et oublier combien de temps ça doit cuire. Mettre le brocoli à la vapeur en espérant qu'il devienne tendre par bonne volonté. Cuire le poulet en le retournant trop souvent par méfiance. Arroser de citron à la fin comme si ça réparait tout. Servir en mélangeant sans raison."
    },
    {
        nom: "Dhal de lentilles riz basmati",
        ingredients: ["250g lentilles corail", "200g riz basmati", "1 oignon", "2 gousses d'ail", "1 boîte tomates concassées", "Cumin", "Curcuma", "Coriandre en poudre", "Huile d'olive", "Sel, poivre"],
        recette: "Rincer les lentilles en se demandant si c'est vraiment utile. Faire revenir l'oignon et l'ail en oubliant pourquoi. Ajouter les épices en éternuant légèrement. Verser les tomates et laisser cuire pendant que tu fais autre chose. Revenir quand ça sent 'curry'. Servir avec du riz qui a décidé d'être collant."
    },
    {
        nom: "Poké bowl saumon riz vinaigré",
        ingredients: ["300g saumon frais", "200g riz à sushi", "Vinaigre de riz", "1 avocat", "1 concombre", "Edamame", "Sauce soja", "Graines de sésame"],
        recette: "Cuire le riz et le mélanger au vinaigre en faisant semblant de comprendre ce que tu fais. Couper le saumon en cubes en essayant qu'ils soient 'à peu près égaux'. Disposer chaque ingrédient séparément comme s'ils ne se parlaient pas. Ajouter la sauce soja en spirale artistique. Prendre une photo avant de manger car c'est obligatoire."
    },
    {
        nom: "Paella riz safran fruits de mer",
        ingredients: ["300g riz à paella", "500g fruits de mer mélangés", "1 dose de safran", "1 oignon", "2 gousses d'ail", "1 poivron rouge", "Bouillon de poisson", "Huile d'olive", "Sel, poivre"],
        recette: "Faire revenir l'oignon et le poivron en mélangeant de façon énergique pour se donner confiance. Ajouter le riz et le remuer comme un chef à la télé. Mettre le safran en se sentant immédiatement plus compétent. Verser le bouillon et ne plus toucher en prétendant que c'est une règle sacrée. Ajouter les fruits de mer et attendre en regardant intensément."
    },
    {
        nom: "Poisson pané riz pilaf",
        ingredients: ["4 filets de poisson blanc", "200g riz long", "Chapelure", "2 œufs", "Farine", "Bouillon de légumes", "Huile", "Sel, poivre"],
        recette: "Passer le poisson dans la farine, puis l'œuf, puis la chapelure en acceptant d'en mettre partout. Cuire le riz en surveillant sans intervenir. Faire frire le poisson en reculant légèrement. Retourner une fois, puis deux, puis une troisième fois 'juste pour être sûr'. Servir avec le riz en tas."
    },
    {
        nom: "Saumon riz complet légumes vapeur",
        ingredients: ["2 pavés de saumon", "200g riz complet", "2 courgettes", "2 carottes", "1 brocoli", "Huile d'olive", "Citron", "Sel, poivre"],
        recette: "Lancer le riz complet et accepter qu'il va prendre du temps. Couper les légumes de tailles différentes malgré les efforts. Cuire le saumon en le regardant pour éviter qu'il brûle par intimidation. Ajouter du citron au dernier moment avec sérieux. Mélanger dans l'assiette sans logique."
    },
    {
        nom: "Curry de légumes au riz",
        ingredients: ["200g riz blanc", "1 courgette", "1 poivron", "1 aubergine", "1 boîte lait de coco", "Pâte de curry", "1 oignon", "2 gousses d'ail", "Huile", "Sel"],
        recette: "Faire revenir l'oignon et l'ail en pensant que ça suffit. Ajouter la pâte de curry en se demandant si c'est trop. Mettre tous les légumes d'un coup pour gagner du temps. Verser le lait de coco et mélanger lentement comme si ça changeait quelque chose. Laisser cuire jusqu'à ce que ça ressemble à un curry."
    },
    {
        nom: "Chili sin carne quinoa",
        ingredients: ["200g quinoa", "1 boîte haricots rouges", "1 boîte tomates concassées", "1 oignon", "1 poivron", "Épices chili", "Cumin", "Huile d'olive", "Sel, poivre"],
        recette: "Cuire le quinoa en oubliant de le rincer une fois sur deux. Faire revenir l'oignon et le poivron sans se presser. Ajouter les épices avec confiance. Verser les haricots et les tomates en même temps pour simplifier. Mélanger puis goûter plusieurs fois sans savoir quoi corriger."
    },
    {
        nom: "Nouilles sautées légumes wok",
        ingredients: ["300g nouilles chinoises", "1 poivron", "1 carotte", "1 courgette", "Sauce soja", "Gingembre frais", "2 gousses d'ail", "Huile de sésame"],
        recette: "Cuire les nouilles puis essayer de les égoutter sans en perdre la moitié. Chauffer le wok très fort et hésiter à s'approcher. Ajouter l'ail et le gingembre en espérant ne pas les brûler en 3 secondes. Jeter les légumes et mélanger rapidement comme si ça allait tout sauver. Ajouter les nouilles qui s'accrochent entre elles. Verser la sauce soja avec assurance, même si c'est trop. Mélanger encore et servir immédiatement avant que ça refroidisse et devienne collant."
    },
    {
        nom: "Ratatouille au riz basmati",
        ingredients: ["200g riz basmati", "1 aubergine", "2 courgettes", "2 tomates", "1 poivron", "1 oignon", "2 gousses d'ail", "Herbes de Provence", "Huile d'olive", "Sel, poivre"],
        recette: "Couper tous les légumes en essayant de faire des morceaux réguliers, puis abandonner. Faire revenir l'oignon et oublier l'ail pendant 2 minutes avant de le rajouter en catastrophe. Ajouter les légumes dans un ordre aléatoire mais assumé. Saupoudrer les herbes comme si ça allait structurer le plat. Laisser mijoter en remuant de temps en temps pour se donner bonne conscience. Servir avec du riz qui colle légèrement mais pas totalement."
    },
    {
        nom: "Poulet basquaise poivrons",
        ingredients: ["4 cuisses de poulet", "3 poivrons (rouge, vert, jaune)", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Piment d'Espelette", "Huile d'olive", "Sel, poivre"],
        recette: "Faire dorer les cuisses de poulet en les déplaçant souvent sans raison. Ajouter les poivrons en appréciant les couleurs comme si c'était une peinture. Verser les tomates et mélanger une fois, puis ne plus toucher comme si c'était interdit. Ajouter le piment avec prudence mais en doutant. Laisser mijoter et soulever le couvercle régulièrement pour vérifier que ça existe toujours."
    },
    {
        nom: "Dinde grillée ratatouille",
        ingredients: ["4 escalopes de dinde", "1 aubergine", "2 courgettes", "2 tomates", "1 poivron", "1 oignon", "Herbes de Provence", "Huile d'olive", "Sel, poivre"],
        recette: "Commencer la ratatouille en coupant les légumes avec plus ou moins de motivation. Les faire cuire doucement en remuant quand on y pense. Griller la dinde en la retournant dès qu'on a un doute, ce qui arrive souvent. Assaisonner les deux séparément puis décider au dernier moment de les mettre ensemble. Servir chaud, ou tiède, ou quand ça semble acceptable."
    },
    {
        nom: "Wrap poulet crudités taboulé",
        ingredients: ["2 filets de poulet", "4 tortillas", "100g semoule fine", "2 tomates", "1 concombre", "Menthe fraîche", "Citron", "Huile d'olive", "Salade verte", "Sel, poivre"],
        recette: "Préparer le taboulé en mélangeant la semoule avec les légumes sans trop réfléchir aux proportions. Cuire le poulet et vérifier sa cuisson plusieurs fois en le coupant 'juste un peu'. Étaler la tortilla et ajouter trop de garniture. Essayer de rouler proprement puis constater que ça déborde. Refermer comme possible et espérer que ça tienne jusqu'à la première bouchée."
    },
    {
        nom: "Poivrons farcis salade verte",
        ingredients: ["4 poivrons", "400g bœuf haché", "200g riz cuit", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Herbes", "Salade verte", "Huile d'olive", "Sel, poivre"],
        recette: "Couper les poivrons et essayer d'enlever l'intérieur proprement sans vraiment réussir. Mélanger la farce en goûtant une fois pour vérifier, puis décider que c'est bon. Remplir les poivrons jusqu'à ce que ça dépasse légèrement. Les placer dans le four en les espaçant mal. Cuire et vérifier régulièrement en ouvrant la porte trop souvent. Servir avec une salade qui équilibre moralement le plat."
    },
    {
        nom: "Saumon grillé haricots verts",
        ingredients: ["2 pavés de saumon", "400g haricots verts", "1 citron", "2 gousses d'ail", "Huile d'olive", "Aneth", "Sel, poivre"],
        recette: "Cuire les haricots verts et en goûter un toutes les 2 minutes pour surveiller. Faire revenir l'ail et se demander s'il est déjà trop tard. Cuire le saumon côté peau en le pressant légèrement pour vérifier qu'il résiste. Le retourner une fois puis hésiter à le retourner encore. Ajouter du citron à la fin avec un geste trop large. Servir rapidement avant de trop réfléchir."
    },
    {
        nom: "Cabillaud vapeur courgettes",
        ingredients: ["2 filets de cabillaud", "3 courgettes", "1 citron", "Huile d'olive", "Aneth ou persil", "Sel, poivre"],
        recette: "Couper les courgettes en rondelles en essayant d'être régulier puis abandonner au bout de 5. Mettre le cabillaud à la vapeur et vérifier toutes les 3 minutes sans raison. Regarder la cuisson comme si ça allait accélérer le processus. Ajouter les herbes au dernier moment en choisissant au hasard. Arroser de citron et d'huile avec un geste très sérieux."
    },
    {
        nom: "Filet de dorade épinards vapeur",
        ingredients: ["2 filets de dorade", "400g épinards frais", "1 citron", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Faire cuire les épinards et constater qu'ils disparaissent presque entièrement. Ajouter l'ail et mélanger comme si ça allait compenser la quantité. Cuire la dorade en la retournant exactement une fois, puis vérifier encore une fois sans raison. Arroser de citron en visant correctement mais en ratant légèrement. Servir en ajustant les portions visuellement."
    },
    {
        nom: "Brochettes de dorade salade",
        ingredients: ["400g dorade en morceaux", "2 poivrons", "1 oignon", "Salade verte", "1 citron", "Huile d'olive", "Herbes", "Sel, poivre"],
        recette: "Monter les brochettes en alternant les ingrédients avec de bonnes intentions. Se tromper une fois puis recommencer sur la suivante. Huiler légèrement puis finalement un peu plus que prévu. Cuire en retournant au bon moment, ou presque. Servir avec la salade en essayant de faire une belle présentation sans trop y croire."
    },
    {
        nom: "Gratin de légumes poêlés",
        ingredients: ["2 courgettes", "1 aubergine", "2 tomates", "20cl crème fraîche", "100g gruyère râpé", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Poêler les légumes en leur racontant des histoires de vacances pour les motiver. Les disposer dans le plat en ordre aléatoire selon l'humeur des légumes. Verser la crème en fermant les yeux pour un effet dramatique. Ajouter le gruyère en le faisant tomber depuis 15cm de hauteur pour plus de suspense. Enfourner et vérifier la dorure toutes les 47 secondes, avec un léger air d'inquiétude. Servir comme si c'était une sculpture moderne."
    },
    {
        nom: "Wok de légumes tofu",
        ingredients: ["300g tofu ferme", "1 poivron", "1 carotte", "1 courgette", "Pousses de soja", "Sauce soja", "Gingembre frais", "2 gousses d'ail", "Huile de sésame"],
        recette: "Parler au tofu pour qu'il se sente encouragé. Le faire dorer jusqu'à ce qu'il prenne une teinte légèrement fière. Jeter les légumes dans le wok avec des gestes théâtraux, en imitant un maître ninja. Ajouter la sauce soja en chantant silencieusement. Mélanger rapidement pour éviter que le tofu ne se rebelle. Servir en inclinant légèrement le plat comme un samouraï contemplatif."
    },
    {
        nom: "Falafels salade roquette",
        ingredients: ["400g pois chiches cuits", "1 oignon", "2 gousses d'ail", "Persil frais", "Coriandre fraîche", "Cumin", "Farine", "Huile de friture", "Roquette", "1 citron"],
        recette: "Mixer les pois chiches jusqu'à obtenir une pâte vaguement ressemblante à de la boue. Former des boulettes en priant qu'elles gardent leur forme. Ajouter l'oignon et l'ail comme des confettis. Fariner vos mains et renverser un peu de farine sur le sol par accident. Frire les falafels en leur parlant pour qu'ils deviennent dorés. Servir sur un lit de roquette et arroser d'un filet de citron avec un grand sérieux."
    },
    {
        nom: "Tarte aux légumes fromage",
        ingredients: ["1 pâte brisée", "2 courgettes", "1 poivron", "1 oignon", "3 œufs", "20cl crème fraîche", "150g fromage râpé", "Huile d'olive", "Sel, poivre"],
        recette: "Dérouler la pâte comme si c'était un tapis rouge pour légumes. Faire revenir les légumes en discutant avec eux. Battre les œufs et la crème tout en chantonnant. Remplir la pâte de légumes et verser le mélange œufs-crème avec prudence. Ajouter le fromage en pluie, en essayant de ne pas tout couvrir de façon trop uniforme. Enfourner et surveiller comme un maître qui contrôle l'univers."
    },
    {
        nom: "Poulet miel moutarde patates douces",
        ingredients: ["4 cuisses de poulet", "2 patates douces", "3 c.s. miel", "2 c.s. moutarde", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Mélanger miel et moutarde avec l'enthousiasme d'un scientifique fou. Masser le poulet en lui promettant une vie meilleure après cuisson. Couper les patates douces en morceaux imprévisibles et les disposer autour du poulet en mode artistique. Enfourner à 180°C et vérifier toutes les 3 minutes, en imaginant que le poulet pourrait s'échapper. Servir avec une touche dramatique."
    },
    {
        nom: "Poulet miel sésame riz basmati",
        ingredients: ["2 filets de poulet", "200g riz basmati", "3 c.s. miel", "2 c.s. sauce soja", "Graines de sésame", "2 gousses d'ail", "Gingembre frais", "Huile"],
        recette: "Préparer la marinade en goûtant trois fois par pure curiosité. Tremper le poulet dans le mélange en lui parlant pour qu'il absorbe les saveurs. Cuire le poulet à la poêle en l'arrosant de marinade comme s'il prenait un bain. Parsemer les graines de sésame avec un lancer artistique. Servir sur du riz basmati parfaitement imparfait."
    },
    {
        nom: "Canard à l'orange patates douces",
        ingredients: ["2 magrets de canard", "2 oranges", "2 patates douces", "1 c.s. miel", "Vinaigre balsamique", "Beurre", "Sel, poivre"],
        recette: "Quadriller les magrets côté peau en dessinant des motifs inspirés par vos rêves. Cuire côté peau en admirant la fonte du gras avec fascination. Presser les oranges comme un artiste frustré. Déglacer avec le jus, le miel et le balsamique en remuant avec gravité. Servir avec les patates douces en mode conte de fées culinaire."
    },
    {
        nom: "Porc caramel gingembre riz",
        ingredients: ["400g filet de porc", "200g riz blanc", "3 c.s. sauce soja", "2 c.s. miel", "Gingembre frais", "2 gousses d'ail", "Huile de sésame", "Sel, poivre"],
        recette: "Couper le porc en fines lamelles et leur souhaiter bonne chance. Faire revenir l'ail et le gingembre en récitant une formule magique. Ajouter le porc et féliciter chaque morceau pour sa couleur. Verser le miel et la sauce soja comme si vous peigniez un chef-d'œuvre sucré. Laisser caraméliser en respirant profondément et servir avant que ça devienne philosophique."
    },
    {
        nom: "Saumon teriyaki riz complet",
        ingredients: ["2 pavés de saumon", "200g riz complet", "4 c.s. sauce soja", "2 c.s. mirin", "1 c.s. sucre", "Gingembre frais", "Graines de sésame"],
        recette: "Préparer la sauce teriyaki en goûtant bruyamment. Faire mariner le saumon en lui chantant une berceuse japonaise. Cuire les pavés en les nappant de sauce avec un pinceau comme un peintre impressionniste. Parsemer les graines de sésame en laissant tomber la moitié sur le plan de travail. Servir le tout avec une révérence."
    },
    {
        nom: "Thon laqué miel riz jasmin",
        ingredients: ["2 steaks de thon", "200g riz jasmin", "3 c.s. miel", "2 c.s. sauce soja", "1 citron vert", "Gingembre frais", "Huile"],
        recette: "Mélanger le miel, la sauce soja et le gingembre en goûtant à chaque étape pour validation scientifique. Badigeonner les steaks comme si vous peigniez un tableau. Saisir à la poêle très chaude en criant 'BLEU !' même si vous aimez bien cuit. Cuire le riz jasmin en le regardant intensément pour qu'il prenne la texture parfaite. Servir avec un sourire triomphant."
    },
    {
        nom: "Crevettes aigre-douces riz sauté",
        ingredients: ["400g crevettes décortiquées", "200g riz", "1 poivron", "1 oignon", "Ananas en conserve", "Vinaigre de riz", "Sauce soja", "Sucre", "2 gousses d'ail", "Huile"],
        recette: "Faire revenir les crevettes en leur racontant une blague pour les motiver. Ajouter poivron, oignon et ananas en les encourageant à s'entendre. Verser les sauces en effectuant un geste dramatique digne d'un film d'action. Laisser le riz s'imprégner des saveurs en méditant profondément. Servir en posant les crevettes comme des figurines sur le riz."
    },
    {
        nom: "Maquereau sauce soja miel riz",
        ingredients: ["4 filets de maquereau", "200g riz blanc", "3 c.s. sauce soja", "2 c.s. miel", "Gingembre frais", "1 citron", "Graines de sésame"],
        recette: "Féliciter le maquereau pour sa patience avant cuisson. Mélanger sauce soja, miel et gingembre en récitant un poème. Badigeonner les filets minutieusement comme si c'était de la peinture fraîche. Enfourner 15 minutes en surveillant chaque respiration. Parsemer de sésame en lançant quelques graines par accident pour le suspense. Servir en respirant profondément."
    },
    {
        nom: "Wok légumes sauce aigre-douce nouilles",
        ingredients: ["300g nouilles chinoises", "1 poivron", "1 carotte", "1 courgette", "Pousses de soja", "Sauce aigre-douce", "Sauce soja", "2 gousses d'ail", "Huile de sésame"],
        recette: "Faire cuire les nouilles tout en leur racontant des histoires épiques. Jeter les légumes dans le wok avec des gestes dramatiques. Ajouter les sauces en fermant les yeux pour invoquer le dieu du goût. Mélanger rapidement en essayant de ne perdre aucune nouille. Servir en inclinant le wok comme une cérémonie ancestrale."
    },
    {
        nom: "Buddha bowl patate douce houmous",
        ingredients: ["2 patates douces", "200g houmous", "150g quinoa", "1 avocat", "Épinards frais", "Maïs", "1 citron", "Huile d'olive", "Cumin"],
        recette: "Rôtir les patates douces en leur chantant des chants chamaniques. Rincer le quinoa 12 fois pour honorer la tradition. Couper l'avocat avec la concentration d'un moine. Composer le bol en séparant les aliments pour qu'ils restent amis. Arroser d'huile et de citron avec des mouvements de yoga. Servir avec un air de sérénité exagérée."
    },
    {
        nom: "Curry potiron coco riz",
        ingredients: ["500g potiron", "200g riz basmati", "1 boîte lait de coco", "Pâte de curry", "1 oignon", "2 gousses d'ail", "Gingembre frais", "Coriandre fraîche", "Huile"],
        recette: "Éplucher le potiron en parlant doucement pour qu'il coopère. Faire revenir oignon, ail et gingembre tout en improvisant une danse. Ajouter la pâte de curry avec prudence et courage. Laisser le potiron se noyer dans le lait de coco pendant 20 minutes. Saupoudrer de coriandre comme un sortilège final. Servir avec un sourire mystérieux."
    },
    {
        nom: "Pad thaï nouilles de riz",
        ingredients: ["300g nouilles de riz", "200g crevettes ou tofu", "2 œufs", "Pousses de soja", "Cacahuètes", "Sauce poisson ou soja", "1 citron vert", "2 gousses d'ail", "Huile", "Ciboulette"],
        recette: "Faire tremper les nouilles en les observant s'étirer. Cuire l'ail puis ajouter crevettes ou tofu en murmurant des encouragements. Brouiller les œufs sans plan précis et les ajouter en mode improvisation. Ajouter les sauces en retenant son souffle pour dramatiser. Parsemer de cacahuètes avec des lancers artistiques. Servir en criant 'PAD THAÏIIII !'."
    },
    {
        nom: "Poulet abricot haricots verts",
        ingredients: ["4 filets de poulet", "400g haricots verts", "200g abricots", "2 c.s. miel", "1 c.s. vinaigre balsamique", "Thym", "Huile d'olive", "Sel, poivre"],
        recette: "Dorer les filets en leur promettant une explosion de saveurs. Ajouter les abricots en les convainquant qu'ils font partie de la famille. Verser miel et balsamique en exécutant des gestes solennels. Blanchir les haricots verts en les encourageant à rester croquants. Servir en souriant fièrement devant l'assemblage final."
    },
    {
        nom: "Magret de canard figues salade",
        ingredients: ["2 magrets de canard", "6 figues fraîches", "Salade verte", "2 c.s. miel", "Vinaigre balsamique", "Sel, poivre"],
        recette: "Quadriller les magrets en dessinant des motifs géométriques aléatoires. Cuire côté peau tout en contemplant la fonte du gras. Poêler les figues avec le miel jusqu'à obtenir une ode sucrée. Déglacer avec le balsamique en s'extasiant à chaque crépitement. Servir sur la salade verte avec une révérence théâtrale."
    },
    {
        nom: "Dinde cranberry courgettes grillées",
        ingredients: ["4 escalopes de dinde", "200g cranberries", "3 courgettes", "2 c.s. miel", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Cuire les cranberries avec le miel en chantant une berceuse pour qu'elles se tiennent bien. Griller les escalopes en les surveillant comme un trésor. Ajouter les courgettes et les marquer de lignes comme un terrain de sport. Assembler le tout avec un geste cérémonial. Servir en fixant la table comme si c'était un royaume."
    },
    {
        nom: "Poulet pomme céleri rave",
        ingredients: ["2 filets de poulet", "1 céleri rave", "2 pommes", "Moutarde", "Crème fraîche légère", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Éplucher le céleri rave en murmurant des encouragements. Cuire le poulet à la poêle en lui faisant des révérences. Faire revenir les pommes avec le thym tout en racontant une anecdote. Déglacer avec crème et moutarde en tournoyant la cuillère. Servir avec un soupir de satisfaction."
    },
    {
        nom: "Cabillaud laqué miel courgettes",
        ingredients: ["2 filets de cabillaud", "3 courgettes", "3 c.s. miel", "2 c.s. sauce soja", "1 citron", "Gingembre frais", "Huile d'olive", "Sel, poivre"],
        recette: "Mélanger miel, sauce soja et gingembre en récitant un mantra. Badigeonner le cabillaud avec des gestes lents et précis. Faire sauter les courgettes en applaudissant à chaque saut. Surveiller la cuisson du poisson comme un gardien vigilant. Servir en déclarant 'chef-d’œuvre accompli'."
    },
    {
        nom: "Saumon glacé érable épinards",
        ingredients: ["2 pavés de saumon", "400g épinards frais", "3 c.s. sirop d'érable", "2 c.s. sauce soja", "1 c.s. moutarde", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Mélanger sirop d'érable, sauce soja et moutarde en dansant légèrement. Badigeonner le saumon et le cuire en lui parlant doucement. Faire tomber les épinards à l'ail en imitant une pluie d'été. Servir le saumon sur les épinards comme une œuvre d'art liquide. Admirer le résultat en silence."
    },
    {
        nom: "Daurade passion mangue salade",
        ingredients: ["2 filets de daurade", "1 mangue", "2 fruits de la passion", "Salade verte", "1 citron vert", "Huile d'olive", "Coriandre fraîche", "Sel, poivre"],
        recette: "Cuire la daurade en lui murmurant un conte. Couper la mangue avec l'attention d'un horloger. Ouvrir les fruits de la passion en chantonnant une mélodie ancienne. Disposer sur la salade avec un mouvement de danse. Arroser d'huile et citron en gesticulant légèrement. Servir en annonçant 'bon appétit royal'."
    },
    {
        nom: "Crevettes ananas poivrons wok",
        ingredients: ["400g crevettes décortiquées", "200g ananas", "2 poivrons", "1 oignon", "Sauce soja", "Sauce huître", "2 gousses d'ail", "Gingembre frais", "Huile"],
        recette: "Chauffer le wok jusqu'à voir la danse du feu. Ajouter les crevettes en leur racontant une histoire d'aventure. Incorporer poivrons, oignon et ananas en faisant des gestes théâtraux. Verser sauces en formant des symboles mystérieux. Mélanger avec grâce et servir comme un rituel ancien."
    },
    {
        nom: "Wok légumes sauce aigre-douce",
        ingredients: ["1 poivron", "1 carotte", "1 courgette", "1 oignon", "Pousses de soja", "Sauce aigre-douce", "Sauce soja", "2 gousses d'ail", "Gingembre frais", "Huile de sésame"],
        recette: "Émincer tous les légumes en discutant avec eux. Chauffer l'huile jusqu'à ce qu'elle frissonne. Jeter les légumes en criant des incantations de kung-fu. Ajouter sauces en fermant les yeux pour invoquer l'équilibre des saveurs. Servir en observant un instant solennel de méditation."
    },
    {
        nom: "Salade lentilles mangue vinaigrette",
        ingredients: ["200g lentilles vertes", "1 mangue", "1 poivron rouge", "1 oignon rouge", "Coriandre fraîche", "1 citron vert", "Huile d'olive", "Cumin", "Sel, poivre"],
        recette: "Cuire les lentilles tout en les motivant à rester entières. Laisser refroidir en les contemplant comme des œuvres d'art. Couper mangue et poivron en cubes dignes d'un puzzle. Émincer l'oignon rouge en observant sa couleur changer. Mélanger avec huile, citron et cumin comme un alchimiste du goût. Servir en souriant mystérieusement."
    },
    {
        nom: "Betterave chèvre noix roquette",
        ingredients: ["4 betteraves cuites", "150g fromage de chèvre", "50g cerneaux de noix", "Roquette", "Vinaigre balsamique", "Huile d'olive", "Miel", "Sel, poivre"],
        recette: "Couper les betteraves en segments parfaits ou presque. Préparer vinaigrette avec enthousiasme théâtral. Dresser roquette et betteraves en alternant couleurs et humeurs. Émietter le chèvre avec un rituel secret. Parsemer les noix depuis une hauteur artistique et arroser de vinaigrette en chantant doucement. Servir en inclinant légèrement l'assiette pour dramatiser."
    },
    {
        nom: "Tarte tatin oignons caramélisés",
        ingredients: ["1 pâte feuilletée", "6 oignons", "50g beurre", "2 c.s. sucre", "2 c.s. vinaigre balsamique", "Thym", "Sel, poivre"],
        recette: "Émincer les oignons en versant quelques larmes de reconnaissance. Les caraméliser dans le beurre et sucre avec des gestes lents. Ajouter thym et balsamique en murmurant des encouragements. Déposer la pâte feuilletée comme un drap sur un lit royal. Cuire en observant chaque centimètre de dorure. Servir en renversant délicatement et en faisant une révérence finale."
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
                        <h2 style="text-align: center;font-size:2rem;">${recipe.nom}</h2>
                        <div class="recipeAndIngredients";style="display: flex;margin:3rem 3rem 3rem 3rem; gap: 2rem; align-items: start;">
                            <div style="flex: 1;margin:1em">
                                <h3 style="text-align:start;font-size:1.5rem">Recette pour 2p :</h3>
                                <p style="font-size:1em">${recipe.recette}</p>
                            </div>
                            <div style="flex: 1;margin:1em 0 0 0">
                                <h3 style="text-align:center;font-size:1rem">Ingrédients :</h3>
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