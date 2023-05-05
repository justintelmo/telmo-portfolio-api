import express from 'express';

const router = express.Router();

const projects = [
    {
        id: 1,
        image: "bigfishcasino.png",
        image_alt: 'The first ever professional project I worked on in the games industry!',
        title: "Big Fish Bingo",
        cta_link: 'https://appadvice.com/app/big-fish-bingo/1473859643',
        cta_text: 'See On AppAdvice',
        description: 'Big Fish Bingo is a free-to-play Bingo game for both Facebook and mobile platforms.'
      },
      {
        id: 2,
        image: "bigfishbingo.jpg",
        image_alt: 'Transfered to this project in 2014',
        title: 'Big Fish Casino',
        cta_link: 'https://apps.apple.com/us/app/big-fish-casino-slots/id538212549',
        cta_text: 'App Store',
        description: 'Big Fish Casino is a free-to-play Casino game for both web and mobile platforms.'
      },
      {
        id: 3,
        image: "battlepirates.jpg",
        image_alt: 'My first game involving real-time combat!',
        title: 'Battle Pirates',
        cta_link: 'https://m.kixeye.com/game/battlepirates',
        cta_text: 'Learn More',
        description: 'Battle Pirates is a free-to-play strategy RPG for both mobile and web platforms featuring real-time PVP combat, base building mechanics, and exploration features.'
      },
      {
        id: 4,
        image: "covetfashion.png",
        image_alt: 'The only game here to have a Disney collab, funny enough.',
        title: 'Covet Fashion',
        cta_link: 'https://play.google.com/store/apps/details?id=com.crowdstar.covetfashion&hl=en_US&gl=US&pli=1',
        cta_text: 'Google Play Store',
        description: 'Covet Fashion is a mobile game centered around completing challenges through picking outfits for your avatar to wear. Judge your fellow fashionistas and go for the top score!'
      }
]
// All routes start with /projects already
router.get('/', (req, res) => {
    console.log(projects);
    res.send(projects);
});

router.post('/', (req, res) => {
    console.log("POST ROUTE REACHED!");

    res.send("POST ROUTE REACHED");
});

export default router;