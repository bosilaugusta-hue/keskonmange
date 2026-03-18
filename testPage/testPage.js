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
        recette: "Préchauffer le four à 200°C puis l’éteindre immédiatement pour le surprendre. Masser violemment le poulet avec l’huile et l’ail jusqu’à ce qu’il glisse. Lancer les pommes de terre autour en visant le poulet. Enfourner et ouvrir la porte toutes les 2 minutes pour vérifier que rien ne change."
    },
    {
        nom: "Spaghetti bolognaise",
        ingredients: ["400g spaghetti", "400g bœuf haché", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Huile d'olive", "Origan", "Basilic frais", "Sel, poivre"],
        recette: "Jeter les spaghetti en l’air et essayer de les rattraper cuits. Écraser le bœuf dans la poêle comme une pâte à modeler. Ajouter tout le reste d’un coup sans prévenir. Remuer trop vite puis arrêter net. Servir en tas compact."
    },
    {
        nom: "Poulet riz brocolis vapeur",
        ingredients: ["2 filets de poulet", "200g riz blanc", "1 brocoli", "Huile d'olive", "Jus de citron", "Sel, poivre"],
        recette: "Cuire le riz normalement mais le remuer toutes les 3 secondes sans raison. Couper le brocoli en morceaux inégaux volontairement. Cuire le poulet en le retournant toutes les 10 secondes pendant 12 minutes. Presser le citron directement au hasard dans l’assiette."
    },
    {
        nom: "Dhal de lentilles riz basmati",
        ingredients: ["250g lentilles corail", "200g riz basmati", "1 oignon", "2 gousses d'ail", "1 boîte tomates concassées", "Cumin", "Curcuma", "Coriandre en poudre", "Huile d'olive", "Sel, poivre"],
        recette: "Faire revenir l’oignon puis oublier de le surveiller. Ajouter toutes les épices en une seule poignée dramatique. Verser de l’eau jusqu’à hésitation. Remuer lentement puis très vite sans prévenir. Servir quand ça commence à ressembler à quelque chose."
    },
    {
        nom: "Poké bowl saumon riz vinaigré",
        ingredients: ["300g saumon frais", "200g riz à sushi", "Vinaigre de riz", "1 avocat", "1 concombre", "Edamame", "Sauce soja", "Graines de sésame"],
        recette: "Couper le saumon en dés puis en refaire un gros morceau. Mélanger le riz trop tôt puis trop tard. Ajouter tous les ingrédients en même temps avec précision… approximative. Verser la sauce en spirale incontrôlée."
    },
    {
        nom: "Paella riz safran fruits de mer",
        ingredients: ["300g riz à paella", "500g fruits de mer mélangés", "1 dose de safran", "1 oignon", "2 gousses d'ail", "1 poivron rouge", "Bouillon de poisson", "Huile d'olive", "Sel, poivre"],
        recette: "Faire revenir l’oignon puis ajouter tout le reste immédiatement pour gagner du temps. Remuer une seule fois mais très fort. Verser le bouillon d’un coup sec. Laisser cuire sans jamais vérifier, c’est le suspense."
    },
    {
        nom: "Poisson pané riz pilaf",
        ingredients: ["4 filets de poisson blanc", "200g riz long", "Chapelure", "2 œufs", "Farine", "Bouillon de légumes", "Huile", "Sel, poivre"],
        recette: "Paner le poisson dans le désordre : chapelure, œuf, farine, puis recommencer. Cuire le riz en le remuant inutilement toutes les 10 secondes. Faire frire le poisson en le retournant trop souvent pour être sûr."
    },
    {
        nom: "Saumon riz complet légumes vapeur",
        ingredients: ["2 pavés de saumon", "200g riz complet", "2 courgettes", "2 carottes", "1 brocoli", "Huile d'olive", "Citron", "Sel, poivre"],
        recette: "Cuire le riz longtemps puis encore un peu “au cas où”. Cuire les légumes ensemble même s’ils n’ont pas le même temps. Cuire le saumon pile puis continuer 2 minutes de plus par sécurité. Presser le citron trop fort."
    },
    {
        nom: "Curry de légumes au riz",
        ingredients: ["200g riz blanc", "1 courgette", "1 poivron", "1 aubergine", "1 boîte lait de coco", "Pâte de curry", "1 oignon", "2 gousses d'ail", "Huile", "Sel"],
        recette: "Faire revenir l’oignon puis ajouter la pâte de curry en quantité incertaine. Ajouter les légumes sans les couper pareil. Verser le lait de coco d’un coup théâtral. Remuer jusqu’à fatigue."
    },
    {
        nom: "Chili sin carne quinoa",
        ingredients: ["200g quinoa", "1 boîte haricots rouges", "1 boîte tomates concassées", "1 oignon", "1 poivron", "Épices chili", "Cumin", "Huile d'olive", "Sel, poivre"],
        recette: "Faire revenir l’oignon puis ajouter les épices comme si c’était trop tard. Ajouter tout le reste d’un coup. Laisser mijoter en goûtant toutes les 2 minutes pour compliquer."
    },
    {
        nom: "Nouilles sautées légumes wok",
        ingredients: ["300g nouilles chinoises", "1 poivron", "1 carotte", "1 courgette", "Sauce soja", "Gingembre frais", "2 gousses d'ail", "Huile de sésame"],
        recette: "Cuire les nouilles puis les égoutter trop tôt. Faire sauter les légumes en remuant frénétiquement sans pause. Ajouter les nouilles puis continuer à mélanger même quand c’est déjà mélangé. Verser la sauce d’un geste dramatique."
    },
    {
        nom: "Ratatouille au riz basmati",
        ingredients: ["200g riz basmati", "1 aubergine", "2 courgettes", "2 tomates", "1 poivron", "1 oignon", "2 gousses d'ail", "Herbes de Provence", "Huile d'olive", "Sel, poivre"],
        recette: "Couper tous les légumes avec une précision inutile. Les faire cuire ensemble même si certains ne sont pas prêts. Ajouter les herbes au hasard. Cuire le riz à côté puis oublier de le servir avec."
    },
    {
        nom: "Poulet basquaise poivrons",
        ingredients: ["4 cuisses de poulet", "3 poivrons (rouge, vert, jaune)", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Piment d'Espelette", "Huile d'olive", "Sel, poivre"],
        recette: "Faire dorer le poulet puis le retourner toutes les 5 secondes. Ajouter les poivrons en morceaux trop gros. Verser les tomates d’un coup sans prévenir. Saupoudrer le piment comme si c’était du sucre glace."
    },
    {
        nom: "Dinde grillée ratatouille",
        ingredients: ["4 escalopes de dinde", "1 aubergine", "2 courgettes", "2 tomates", "1 poivron", "1 oignon", "Herbes de Provence", "Huile d'olive", "Sel, poivre"],
        recette: "Griller la dinde en la déplaçant sans arrêt dans la poêle. Faire la ratatouille en ajoutant les légumes un par un avec impatience. Mélanger le tout puis remélanger encore pour être sûr."
    },
    {
        nom: "Wrap poulet crudités taboulé",
        ingredients: ["2 filets de poulet", "4 tortillas", "100g semoule fine", "2 tomates", "1 concombre", "Menthe fraîche", "Citron", "Huile d'olive", "Salade verte", "Sel, poivre"],
        recette: "Préparer le taboulé puis le mélanger encore une fois sans raison. Cuire le poulet puis le couper trop tôt. Remplir les tortillas beaucoup trop puis essayer de les fermer quand même."
    },
    {
        nom: "Poivrons farcis salade verte",
        ingredients: ["4 poivrons", "400g bœuf haché", "200g riz cuit", "1 boîte tomates concassées", "1 oignon", "2 gousses d'ail", "Herbes", "Salade verte", "Huile d'olive", "Sel, poivre"],
        recette: "Remplir les poivrons jusqu’à débordement. Tasser fortement avec une cuillère. Enfourner puis vérifier toutes les 3 minutes. Servir avec une salade mélangée trop énergiquement."
    },
    {
        nom: "Saumon grillé haricots verts",
        ingredients: ["2 pavés de saumon", "400g haricots verts", "1 citron", "2 gousses d'ail", "Huile d'olive", "Aneth", "Sel, poivre"],
        recette: "Cuire les haricots puis continuer encore un peu “au cas où”. Griller le saumon en le retournant sans arrêt. Presser le citron partout sauf au bon endroit."
    },
    {
        nom: "Cabillaud vapeur courgettes",
        ingredients: ["2 filets de cabillaud", "3 courgettes", "1 citron", "Huile d'olive", "Aneth ou persil", "Sel, poivre"],
        recette: "Cuire les courgettes puis vérifier leur cuisson toutes les 10 secondes. Cuire le cabillaud en ouvrant le couvercle constamment. Assaisonner plusieurs fois sans goûter."
    },
    {
        nom: "Filet de dorade épinards vapeur",
        ingredients: ["2 filets de dorade", "400g épinards frais", "1 citron", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Faire tomber les épinards puis continuer à les remuer même quand ils ont disparu. Cuire la dorade en la déplaçant dans tous les sens. Ajouter le citron au dernier moment… puis encore une fois."
    },
    {
        nom: "Brochettes de dorade salade",
        ingredients: ["400g dorade en morceaux", "2 poivrons", "1 oignon", "Salade verte", "1 citron", "Huile d'olive", "Herbes", "Sel, poivre"],
        recette: "Assembler les brochettes de façon déséquilibrée. Les tourner trop souvent sur le grill. Préparer la salade puis la remélanger juste avant de servir pour la fatiguer."
    },
    {
        nom: "Gratin de légumes poêlés",
        ingredients: ["2 courgettes", "1 aubergine", "2 tomates", "20cl crème fraîche", "100g gruyère râpé", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Faire cuire les légumes puis les remettre à cuire encore. Ajouter la crème en plusieurs fois sans raison. Saupoudrer le fromage en visant mal. Enfourner puis vérifier trop souvent."
    },
    {
        nom: "Wok de légumes tofu",
        ingredients: ["300g tofu ferme", "1 poivron", "1 carotte", "1 courgette", "Pousses de soja", "Sauce soja", "Gingembre frais", "2 gousses d'ail", "Huile de sésame"],
        recette: "Cuire le tofu puis continuer jusqu’à ce qu’il soit trop doré. Ajouter les légumes et remuer sans arrêt. Verser la sauce en plusieurs petites fois pour compliquer."
    },
    {
        nom: "Falafels salade roquette",
        ingredients: ["400g pois chiches cuits", "1 oignon", "2 gousses d'ail", "Persil frais", "Coriandre fraîche", "Cumin", "Farine", "Huile de friture", "Roquette", "1 citron"],
        recette: "Former des falafels de tailles totalement différentes. Les frire tous en même temps même si ça déborde. Mélanger la salade trop fort. Ajouter le citron à la dernière seconde."
    },
    {
        nom: "Tarte aux légumes fromage",
        ingredients: ["1 pâte brisée", "2 courgettes", "1 poivron", "1 oignon", "3 œufs", "20cl crème fraîche", "150g fromage râpé", "Huile d'olive", "Sel, poivre"],
        recette: "Mettre la pâte puis la retirer puis la remettre. Ajouter la garniture en mélangeant directement dans le moule. Enfourner puis hésiter à ouvrir la porte toutes les minutes."
    },
    {
        nom: "Poulet miel moutarde patates douces",
        ingredients: ["4 cuisses de poulet", "2 patates douces", "3 c.s. miel", "2 c.s. moutarde", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Badigeonner le poulet puis en remettre une couche puis encore une. Mélanger les patates avec les mains sans raison. Enfourner et retourner tout trop souvent."
    },
    {
        nom: "Poulet miel sésame riz basmati",
        ingredients: ["2 filets de poulet", "200g riz basmati", "3 c.s. miel", "2 c.s. sauce soja", "Graines de sésame", "2 gousses d'ail", "Gingembre frais", "Huile"],
        recette: "Faire mariner le poulet mais continuer à le déplacer dans la marinade. Cuire en l’arrosant sans arrêt. Ajouter les graines de sésame avant, pendant et après cuisson."
    },
    {
        nom: "Canard à l'orange patates douces",
        ingredients: ["2 magrets de canard", "2 oranges", "2 patates douces", "1 c.s. miel", "Vinaigre balsamique", "Beurre", "Sel, poivre"],
        recette: "Quadriller le canard puis re-quadriller dans l’autre sens. Presser les oranges avec trop de force. Mélanger la sauce en goûtant toutes les 5 secondes. Couper le canard en morceaux irréguliers."
    },
    {
        nom: "Porc caramel gingembre riz",
        ingredients: ["400g filet de porc", "200g riz blanc", "3 c.s. sauce soja", "2 c.s. miel", "Gingembre frais", "2 gousses d'ail", "Huile de sésame", "Sel, poivre"],
        recette: "Faire revenir le porc en remuant constamment. Ajouter le miel puis mélanger frénétiquement pour éviter que ça colle… sans succès. Servir immédiatement avant que ça décide autre chose."
    },
    {
        nom: "Saumon teriyaki riz complet",
        ingredients: ["2 pavés de saumon", "200g riz complet", "4 c.s. sauce soja", "2 c.s. mirin", "1 c.s. sucre", "Gingembre frais", "Graines de sésame"],
        recette: "Faire mariner le saumon puis le retourner toutes les minutes. Cuire en nappant trop souvent. Ajouter le sésame en visant à côté."
    },
    {
        nom: "Thon laqué miel riz jasmin",
        ingredients: ["2 steaks de thon", "200g riz jasmin", "3 c.s. miel", "2 c.s. sauce soja", "1 citron vert", "Gingembre frais", "Huile"],
        recette: "Badigeonner le thon puis recommencer plusieurs fois. Cuire très vite puis hésiter et continuer un peu. Presser le citron trop tôt puis encore après."
    },
    {
        nom: "Crevettes aigre-douces riz sauté",
        ingredients: ["400g crevettes décortiquées", "200g riz", "1 poivron", "1 oignon", "Ananas en conserve", "Vinaigre de riz", "Sauce soja", "Sucre", "2 gousses d'ail", "Huile"],
        recette: "Faire sauter les crevettes puis les retirer puis les remettre. Ajouter tous les ingrédients en même temps. Mélanger sans s’arrêter jusqu’à perte de repères."
    },
    {
        nom: "Maquereau sauce soja miel riz",
        ingredients: ["4 filets de maquereau", "200g riz blanc", "3 c.s. sauce soja", "2 c.s. miel", "Gingembre frais", "1 citron", "Graines de sésame"],
        recette: "Badigeonner le maquereau puis ajouter encore de la sauce pendant cuisson. Cuire le riz en le remuant inutilement. Ajouter le citron à la fin puis un peu avant."
    },
    {
        nom: "Wok légumes sauce aigre-douce nouilles",
        ingredients: ["300g nouilles chinoises", "1 poivron", "1 carotte", "1 courgette", "Pousses de soja", "Sauce aigre-douce", "Sauce soja", "2 gousses d'ail", "Huile de sésame"],
        recette: "Cuire les nouilles puis les mélanger immédiatement. Faire sauter les légumes trop fort. Ajouter les sauces en plusieurs étapes inutiles. Mélanger encore."
    },
    {
        nom: "Buddha bowl patate douce houmous",
        ingredients: ["2 patates douces", "200g houmous", "150g quinoa", "1 avocat", "Épinards frais", "Maïs", "1 citron", "Huile d'olive", "Cumin"],
        recette: "Assembler le bol avec précision puis tout remélanger immédiatement. Ajouter le houmous au centre puis l’étaler sans raison. Presser le citron de façon aléatoire."
    },
    {
        nom: "Curry potiron coco riz",
        ingredients: ["500g potiron", "200g riz basmati", "1 boîte lait de coco", "Pâte de curry", "1 oignon", "2 gousses d'ail", "Gingembre frais", "Coriandre fraîche", "Huile"],
        recette: "Faire revenir tout en même temps pour aller plus vite. Ajouter le lait de coco d’un coup. Remuer sans arrêt jusqu’à doute. Ajouter la coriandre au dernier moment puis encore."
    },
    {
        nom: "Pad thaï nouilles de riz",
        ingredients: ["300g nouilles de riz", "200g crevettes ou tofu", "2 œufs", "Pousses de soja", "Cacahuètes", "Sauce poisson ou soja", "1 citron vert", "2 gousses d'ail", "Huile", "Ciboulette"],
        recette: "Ajouter les œufs puis les oublier. Mélanger tout en même temps sans organisation. Ajouter les cacahuètes trop tôt. Presser le citron directement pendant cuisson."
    },
    {
        nom: "Poulet abricot haricots verts",
        ingredients: ["4 filets de poulet", "400g haricots verts", "200g abricots", "2 c.s. miel", "1 c.s. vinaigre balsamique", "Thym", "Huile d'olive", "Sel, poivre"],
        recette: "Cuire le poulet puis ajouter les abricots en urgence. Mélanger rapidement puis ralentir sans raison. Cuire les haricots puis les oublier un moment."
    },
    {
        nom: "Magret de canard figues salade",
        ingredients: ["2 magrets de canard", "6 figues fraîches", "Salade verte", "2 c.s. miel", "Vinaigre balsamique", "Sel, poivre"],
        recette: "Cuire le canard puis le retourner trop souvent. Ajouter les figues puis les déplacer constamment. Mélanger la salade une dernière fois inutile."
    },
    {
        nom: "Dinde cranberry courgettes grillées",
        ingredients: ["4 escalopes de dinde", "200g cranberries", "3 courgettes", "2 c.s. miel", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Faire cuire la dinde en la bougeant sans arrêt. Préparer la sauce cranberry en remuant trop vite. Griller les courgettes puis continuer un peu trop."
    },
    {
        nom: "Poulet pomme céleri rave",
        ingredients: ["2 filets de poulet", "1 céleri rave", "2 pommes", "Moutarde", "Crème fraîche légère", "Huile d'olive", "Thym", "Sel, poivre"],
        recette: "Cuire le céleri puis vérifier toutes les minutes. Faire revenir les pommes puis les remuer constamment. Mélanger la sauce en goûtant sans arrêt."
    },
    {
        nom: "Cabillaud laqué miel courgettes",
        ingredients: ["2 filets de cabillaud", "3 courgettes", "3 c.s. miel", "2 c.s. sauce soja", "1 citron", "Gingembre frais", "Huile d'olive", "Sel, poivre"],
        recette: "Badigeonner le cabillaud plusieurs fois de suite. Cuire les courgettes puis continuer encore un peu. Ajouter le citron à la fin puis corriger encore."
    },
    {
        nom: "Saumon glacé érable épinards",
        ingredients: ["2 pavés de saumon", "400g épinards frais", "3 c.s. sirop d'érable", "2 c.s. sauce soja", "1 c.s. moutarde", "2 gousses d'ail", "Huile d'olive", "Sel, poivre"],
        recette: "Ajouter la sauce puis en remettre encore pendant cuisson. Faire tomber les épinards puis continuer à remuer même sans raison. Servir immédiatement puis ajuster encore."
    },
    {
        nom: "Daurade passion mangue salade",
        ingredients: ["2 filets de daurade", "1 mangue", "2 fruits de la passion", "Salade verte", "1 citron vert", "Huile d'olive", "Coriandre fraîche", "Sel, poivre"],
        recette: "Cuire la daurade puis la déplacer sans arrêt. Couper la mangue en morceaux irréguliers. Mélanger la vinaigrette trop tôt puis encore après."
    },
    {
        nom: "Crevettes ananas poivrons wok",
        ingredients: ["400g crevettes décortiquées", "200g ananas", "2 poivrons", "1 oignon", "Sauce soja", "Sauce huître", "2 gousses d'ail", "Gingembre frais", "Huile"],
        recette: "Faire sauter les crevettes puis ajouter tout d’un coup. Mélanger en continu sans pause. Ajuster la sauce plusieurs fois inutilement."
    },
    {
        nom: "Wok légumes sauce aigre-douce",
        ingredients: ["1 poivron", "1 carotte", "1 courgette", "1 oignon", "Pousses de soja", "Sauce aigre-douce", "Sauce soja", "2 gousses d'ail", "Gingembre frais", "Huile de sésame"],
        recette: "Faire sauter les légumes en remuant trop fort. Ajouter les sauces puis remélanger encore et encore. Goûter puis modifier sans fin."
    },
    {
        nom: "Salade lentilles mangue vinaigrette",
        ingredients: ["200g lentilles vertes", "1 mangue", "1 poivron rouge", "1 oignon rouge", "Coriandre fraîche", "1 citron vert", "Huile d'olive", "Cumin", "Sel, poivre"],
        recette: "Mélanger tous les ingrédients puis recommencer. Ajouter la vinaigrette en plusieurs fois. Remuer jusqu’à ce que tout change d’avis."
    },
    {
        nom: "Betterave chèvre noix roquette",
        ingredients: ["4 betteraves cuites", "150g fromage de chèvre", "50g cerneaux de noix", "Roquette", "Vinaigre balsamique", "Huile d'olive", "Miel", "Sel, poivre"],
        recette: "Assembler la salade puis tout redisposer différemment. Ajouter la vinaigrette puis en remettre. Mélanger légèrement puis trop fort."
    },
    {
        nom: "Tarte tatin oignons caramélisés",
        ingredients: ["1 pâte feuilletée", "6 oignons", "50g beurre", "2 c.s. sucre", "2 c.s. vinaigre balsamique", "Thym", "Sel, poivre"],
        recette: "Faire caraméliser les oignons puis continuer même quand c’est bon. Ajouter la pâte puis l’ajuster plusieurs fois. Enfourner et vérifier trop souvent. Retourner avec hésitation."
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

        if (questionNumber < 3) {
            totalAnswer[currentQuestion.key] = button.textContent;
            questionNumberX++;
            questionNumber++;
            currentQuestion = questions[questionNumber];
            quizzQuestion.textContent = currentQuestion.texte;
            questionX.textContent = "Question " + questionNumberX + "/4";
            progressBar.value = questionNumberX;
            console.log(totalAnswer);
            console.log(currentQuestion);
            if (answerButton.length > currentQuestion.options.length) {
                answerButton[answerButton.length - 1].remove();
                answerButton = document.querySelectorAll('.answerButton');
                console.log(answerButton.length - 1)
                console.log(currentQuestion.options.length - 1);
            }
            answerButton.forEach((button, i) => {
                button.textContent = currentQuestion.options[i]
            })
            return currentQuestion
        }

        else {
            totalAnswer[currentQuestion.key] = button.textContent;
            currentQuestion = questions[questionNumber];
            quizzQuestion.textContent = currentQuestion.texte;
            questionX.textContent = "Question " + questionNumberX + "/4";
            progressBar.value = questionNumberX;
            console.log(totalAnswer);
            console.log(currentQuestion);

            const resultatQuizz = plat.filter(p =>
                p.categorie === totalAnswer.categorie &&
                p.gout === totalAnswer.gout &&
                p.type === totalAnswer.type &&
                p.accompagnement === totalAnswer.accompagnement
            );
            const recipe = recipeAndIngredient.find(r =>
                r.nom === resultatQuizz[0].nom
            );

            document.querySelector('#quizz').innerHTML = `
    <h2 style="text-align: center;">${recipe.nom}</h2>
    <div style="display: flex;padding:2rem 1rem; gap: 2rem; align-items: center;">
    <div style="flex: 1;padding:2rem 1rem">
            <h3 style="text-align:start";>Recette pour 2p :</h3>
            <p>${recipe.recette}</p>
        </div>
        <ul style="flex: 1 ;list-style:none ; ">
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
        
    </div>
`;

            console.log(resultatQuizz);
            console.log(recipe);


        }
    }
    )
})




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
