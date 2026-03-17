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
            alert('over');
            const resultat = plat.filter(p =>
                p.categorie === totalAnswer.categorie &&
                p.gout === totalAnswer.gout &&
                p.type === totalAnswer.type &&
                p.accompagnement === totalAnswer.accompagnement
            );
            document.querySelector('#quizz').innerHTML = resultat[0].nom;

        }

    })
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
//     }
// })



