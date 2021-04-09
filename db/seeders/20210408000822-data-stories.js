'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories',
      [
        {
          title: "The World's Greatest Grilled Cheese",
          imageSrc: "https://i.insider.com/5ad50678146e711f008b473a?width=1136&format=jpeg",
          content: `Ingredients needed: Crusty Bread (such as sourdough but regular sandwich bread works great), Assorted Cheeses (Gruyere, Pepper Jack, Brie, Gouda, Cheddar, the possibilities are almost limitless though for this one I usually prefer Gruyere + Pepper Jack, and Butter or Margarine The key to making this the best grilled cheese it can be is buttering both sides of the bread. Then one must grill one side of each piece on a hot pan. Then flip the bread so the toasty side is facing up. Apply various sliced cheeses to both pieces and allow them to melt a bit before folding them together into a sandwich. Then repeatedly flip until both sides are grilled to the desired level. Slice and enjoy preferably with tomato bisque but also fantastic by itself :) P.S. If you're feeling adventurous, add some fresh sliced tomato and pesto to the sandwich after the cheeses have been added but before folding together.`,
          userId: 10,
          createdAt: new Date('2014-09-03'),
          updatedAt: new Date('2014-09-03')
        },
        {
          title: "Review of Chef Gustav's",
          imageSrc: "https://i.pinimg.com/originals/8d/85/c8/8d85c84e0d0d68c7d81d65010333b7c7.jpg",
          content: `In many ways, the work of a critic is easy. We risk very little, yet enjoy a position over those who offer up their work and their selves to our judgment.
          We thrive on negative criticism, which is fun to write and to read. But the bitter truth we critics must face, is that in the grand scheme of things, the average piece of junk is probably more meaningful than our criticism designating it so. But there are times when a critic truly risks something, and that is in the discovery and defense of the *new*. The world is often unkind to new talent, new creations. The new needs friends. Last night, I experienced something new: an extraordinary meal from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef Gusteau's famous motto, "Anyone can cook." But I realize, only now do I truly understand what he meant. Not everyone can become a great artist; but a great artist *can* come from *anywhere*. It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's, who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.`,
          userId: 9,
          createdAt: new Date('2014-11-27'),
          updatedAt: new Date('2014-11-27')
        },
        {
          title: "Eye of the Tiger Sugar",
          imageSrc: "https://images.dailyhive.com/20190611154000/57388198_235271560677576_8917129785731467074_n-2.jpg",
          content: `Tiger Sugar is a bubble tea chain that originated in Taichung, Taiwan. Best known for their Brown Sugar Milk, their worldwide fame has inspired many other bubble tea chains to offer their own version of the trendy drink. They've just recently opened a new store in Duluth, GA, and so I knew I had to go and try it out.

          To get straight to the point: it's great! The tapioca is soft and chewy, and covered with a little bit of honey which makes them flavorful in their own right. As far as the taste of the drink, normally, I like things on the less sweet side, but from its name, you might be able to tell that this drink is very sweet. While personally, I wish it was a little less sweet, if you have a sweet tooth, you'll definitely enjoy this drink. You can definitely taste the brown sugar mixed with the milk, offering a very sweet and creamy taste / texture combination that can be very addicting. The drink also comes with some fresh mousse at the top, which is rather light and foamy.

          Along with the taste, the looks of the drink are Instagram-worthy. The contrast between the brown sugar syrup that drips down the sides of the cup, the white milk mixed within, and the black tapioca that lies at the bottom, makes the drink itself look very pretty.

          All in all, I have to say that while I really like the drink, it is a little one note (as in just sweet), but I would definitely recommend it to anyone interested in trying the drink or for anyone who really loves sweet boba-type drinks.`,
          userId: 20,
          createdAt: new Date('2016-06-07'),
          updatedAt: new Date('2016-06-07')
        },
        {
          title: "My Korean BBQ Experience at San Soo Gab San",
          imageSrc: "https://media2.fdncms.com/chicago/imager/u/original/56774043/_mgp3360.jpg",
          content: `Do you love meat? Do you love hands-on dining where you get to do it yourself? Korean BBQ is perfect for you.

          If you haven’t heard of Korean BBQ before, here’s what happens when you go out dining in one: You sit down and they’ll serve you with bunch of tiny plates of picked vegetables, fishcakes, lettuce, kimchi, and many more. These are called banchan which are little side dishes that goes well together with KBBQ. You order your meat of choice and they come to the table, raw. You grill them over the charcoal, wrap them up in lettuce or enjoy with rice, top them with any of the banchan, dip them with soy sauce or miso paste, then eat them up. Everything is smoky, meaty, savory, and delicious. Eat meat, drink Soju (or Korean alcohol), and repeat!

          Out of several KBBQ places i’ve been to, this place is by far the best bulgogi and japchae noodles I ever had. San Soo Gab San is the only Korean BBQ restaurant in Chicago with a Michelin BIB Gourmand award. It is situated in the Lincoln Square neighborhood 10 miles north of downtown Chicago. They can get pretty busy during peak hours, so expect to wait for at least 30 minutes to get seated. If you’re visiting Chicago and looking for a place to hangout, I highly recommend to check this place out. It’s definitely worth a visit.`,
          userId: 21,
          createdAt: new Date('2016-06-07'),
          updatedAt: new Date('2016-06-07')
        },
        {
          title: "I made my first Beef Wellington!",
          imageSrc: "http://images.ctfassets.net/3s5io6mnxfqz/VTFplkmqQemCmaQgYEeGU/a70e0c14de212de3444179fee2223121/image1.jpg?w=900&fm=jpg&fl=progressive",
          content: `First thing’s first – what is Beef Wellington?!
          Beef Wellington is an iconic British dish made famous by the well-known Chef Gordon Ramsay. It consists of beef tenderloin, brushed with a layer of mustard, encased by mushroom duxelles, wrapped with prosciutto and puff pastry.

          Don’t be intimidated by the fanciness though! While this recipe admittedly isn’t super easy, it’s not terribly difficult either. Beef Wellington takes some time and has few different steps involved. I think rolling it nice and tight is the most challenging part, but it’s really fun to make. And the result is so worth it, it’s deliciously rewarding.

          This Beef Wellington recipe consists of 4 main steps:
          1. Sear the beef tenderloin.
          2. Prepare the mushroom duxelles.
          3. Assemble the layers wrap and roll it in puff pastry.
          4. And you guessed it right, bake!

          It came out more on the rare side instead of medium rare that I intended, but I did like how it turned out. The pastry has a nice crisp, the beef was juicy and tender, the earthy taste from the mushrooms and the saltiness from the prosciutto made this dish really flavorful. Now I understand why everyone’s crazy about it. Did I make Uncle Gordon proud? Let me know your thoughts below!`,
          userId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Homemade Acai Bowl",
          imageSrc: "https://amyfoodstories.files.wordpress.com/2019/07/img_6808.jpg?w=2000",
          content: `A homemade Acai Bowl is super easy to make and it helps me boost my immune system. It also fills me up so it’s easy for me to stay on my diet. Here is the recipe and some tips.

          Ingredients

          1 Acai packet

          1 banana

          1/2 cup of washed blueberries

          5 washed and sliced strawberries

          1 kiwi

          1/2 cup of granola . Tip: Choose granola clusters and make sure your selected granola has some element of sweetness in it. For example raisins Or candied walnuts, or similar elements.

          2 tablespoons of yogurt ( optional)

          Mix the Acai packet with the banana in a blender or food processor. Pour the mix in a soup bowl. Add the granola at the center and then add lines of blueberries, strawberries and kiwi. Add the yogurt at the end.

          Tip: Look for the Acai packets in the frozen food sections/aisles in your local supermarket. They come frozen and some are sweetened and others are unsweetened. This recipe here calls for the unsweetened since I eat this for my diet.

          I’m leaving some additional pics and a video to help illustrate the recipe and process.

          Enjoy!`,
          userId: 1,
          createdAt: new Date('2016-07-08'),
          updatedAt: new Date('2016-07-08')
        },
        {
          title: "Air Fryer Fajitas",
          imageSrc: "https://amyfoodstories.files.wordpress.com/2020/07/e83d5b86-08be-4547-80ca-dfb0cf4f8c9e.jpg",
          content: `For a while now I had been hearing about all the great benefits of foods cooked in the air fryer. However I just now purchased one myself. So far I have made French fries, chicken nuggets and these amazing fajitas! I am not a nutritionist but cooking with an air fryer reduces the amount of fat in your diet, and any fitness app or easy internet search can give you the exact comparison between calories from cooking an air fryer chicken dish vs the regularly cooked chicken dish. So, if you want, do some easy research and you’ll be able to confirm this. All in all, I have to say these fajitas are so far my favorite! Here is the recipe:

          Ingredients

          – Chicken tenderloins ( cut in pieces and enough so they fit on your air fryer pan.)

          – Beef strips for fajitas which come already cut in thin strips.

          – Sweet peppers and onions cut in medium size pieces and 1 fresh jalapeño cut in slices.

          – Olive Oil, salt, cayenne pepper, red pepper flakes, cilantro and soy sauce.

Directions: Keep the beef and chicken separate when seasoning. Season the chicken with salt, and other seasoning. Repeat for the beef. Place the beef on an extreme side of the air fryer container and the chicken on another extreme side of the air fryer and leave a space in the middle. On the middle place the onions, sweet peppers and the jalapeños (See pics.) Drizzle everything a with a bit of olive oil or use an olive oil spray. Cook at 400 degrees for 20 minutes. If the chicken is not grilled enough add 5 more minutes. Enjoy!`, userId: 2, createdAt: new Date('2016-09-06'), updatedAt: new Date('2016-09-06')
        },
        {
          title: "Shrimp Favorite Recipe",
          imageSrc: "https://amyfoodstories.files.wordpress.com/2020/11/img_2188.jpg?w=2048",
          content: `This is my favorite shrimp recipe of all time! I love it because it’s delicious but also because it’s soooo easy! You’ll see what I mean.

          Ingredients

          Detained raw Shrimp, garlic cut in pieces or mashed, Butter, Parsley and salt.

          Directions: Place the deveined raw shrimp in a plastic resealable bag with the garlic . Shake, seal and place in the refrigerator for 4-6 hours.

          Heat a pan with butter. Add the shrimp and let them cook grilling until they turn pink. Add parsley. Enjoy !`,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Can't Believe It's Not Meat - come for the burger, but stay for the philly cheese steak egg roll",
          imageSrc: "https://cdn.vox-cdn.com/thumbor/SNC3q2Gy-SGvzHyI1acyif5Usfo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22290420/IMG_0195.jpg",
          content: `Another iteration of the increasingly popular 'vegan restaurant for meat eaters' archetype, this restaurant does not disappoint if you're looking for greasy goodness. I would definitely recommend you try going there at least once because the philly cheesesteak egg roll is unlike anything you've ever tried before. They have a number of other kooky creations you likely won't see anywhere else.`,
          userId: 10,
          createdAt: new Date('2016-12-26'),
          updatedAt: new Date('2016-12-26')
        },
        {
          title: "Tico's Juice Bar - Wow. Just. Wow",
          imageSrc: "https://pbs.twimg.com/media/EBdEHtFXYAEpQLU.jpg",
          content: `This was literally the most loaded, decadent smoothie bowl I have ever had in my entire life. It's definitely not cheap but so worth it. You will never want another bowl after you've had this one and you will probably want peanut butter on every other smoothie bowl you eat for the rest of your life.`,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Jubilee Juice - Too Many Amazing Smoothies...Gotta try em all!!!",
          imageSrc: "https://b.zmtcdn.com/data/pictures/2/16735372/72062b8a49cb40c58b13c48b197299f2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          content: `Ok so I know the picture is not the best but trust me when I tell you this place knows their smoothies. The sheer selection is enough to make you tremble in your boots because you know you can only get one (these things are massive even when you get the regular size). I myself have tried Blueberry Banana, Mango Madness, and Razzleberry. I can confirm all are splendid. The fries are also pretty delicious and make for a nice contrast to the cool, refreshing smoothie. This place is open late so it's perfect for a postgame snack.`,
          userId: 5,
          createdAt: new Date('2017-03-22'),
          updatedAt: new Date('2017-03-22')
        },
        {
          title: "Coral Tree Cafe - Best Dirty Chai Ever",
          imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/-GBe81IBEIUmNTWWZHRscQ/o.jpg",
          content: `Coral Tree looks like a bougie, Brentwood spot, and it is, but they do not cut any corners when it comes to the quality and presentation of their food. I mean just look at that picture!! The dirty chai was the best one I've had in my life and I've tasted more than a few in my day. The potatoes also might be the best I've ever had. I would honestly go there for just a plate of potatoes. The omelette was still delicious and the avocado was wonderfully ripe. Pancakes were good but not anything I would call home about. You can get ones just as good, but for half the price at IHOP...`,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "TASTE TEST: Giordano's thin-crust shines, too",
          imageSrc: "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/d/a3/da3f0df0-6178-5435-a2b8-d351531e16b1/59dd08c836cba.image.jpg?resize=1476%2C1107",
          content: `Northwest Indiana is filled with pizzerias that serve the tavern-cut pie that's been a staple in the Chicago area long before deep dish pizza was invented in 1943.

          Deep dish never has been as popular as party-cut in the Region for whatever reason. Edwardo's Natural Pizza in Munster serves up the thicker style that's been compared to a casserole, but outposts of Gino's East and Giordano's have come and gone in Highland and Merrillville, respectively.

          Now Giordano's is back at 625 Lincoln Highway in Schererville, at the former Boston Pizza's space. You can, of course, get a stuffed pizza that takes 45 minutes or more to cook, and blankets a thick layer of mozzarella cheese under an even thicker layer of chunky tomato sauce.

          But don't overlook Giordano's thin crust pizzas, which are fantastic and more convenient if you're hungry, pressed for time or just hoping for a quick bite.

          You can get hand-stretched thin crust or crispy extra thin crust with your choice of ingredients like artichokes, garlic, garlic broccoli, giardiniera peppers, pineapple, chicken breast, chicken sausage, pesto chicken or salami.

          Giordano's also offers standard options like the meat and more meat, supper veggie and "Chicago classic" with pepperoni, mushrooms, green peppers and onions.

          The ingredients are fresh, the cheese thick and melty, and the sauce garlicy and sweet. It may not be what Giordano's is best known for, but it's top shelf, will get out to your table faster and won't leave you so stuffed.

          In the true test of any pizza, it holds up while eaten cold for breakfast the next day.`,
          userId: 13,
          createdAt: new Date('2014-08-30'),
          updatedAt: new Date('2014-08-30')
        },
        {
          title: "Sandwich Review",
          imageSrc: "https://miro.medium.com/max/12000/1*aqYckQor7Wy3Zd-5EejZeA.jpeg",
          content: `The Indian Summer is so named on account of the spices, a mix of the usual suspects you find in an Indian-influenced item at a non-Indian establishment. Cumin, coriander, clove, etc. I make no criticism of that choice, if I wanted different I’d choose somewhere that isn’t a bakery café on the west side of town. I do take issue with the simple dusting on some grilled chicken, as the spices that were there weren’t quite loud enough. Blackened chicken would have gone a long way here.

          In any case, the chicken was joined by grilled peaches, watercress and yogurt masala dressing on toasted crusty bread. Clementine, true to form, handled all of those admirably and in so doing pulled off the substantial challenge that is the fruit and meat sandwich. No surprise from a place that once had a sandwich ranking among the best I have ever eaten. This one wasn’t that good, but it was quite good all the same, and a quite good sandwich is plenty welcome on any warm afternoon.`,
          userId: 7,
          createdAt: new Date('2016-07-31'),
          updatedAt: new Date('2016-07-31')
        },
        {
          title: "Pork Philly",
          imageSrc: "https://prods3.imgix.net/images/articles/2017_05/Feature-Philadelphia-Roast-Pork-Sandwich-NEW2.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370",
          content: `If you find yourself in a place that offers a roast pork hoagie but not a cheesesteak, order the hoagie. I need no other signal that a sandwich is going to be quality; if you realize that the real story out of Philadelphia isn’t what everyone says it is, you’re probably going to make a sandwich I’ll enjoy. The above was no exception. Thinly sliced roast pork, collard greens braised with a smoked ham hock, smoked gouda and mustard on a soft hoagie roll. Just the right sort of harmony a great sandwich needs: rich, earthy, smokey, deep and with a slight tang. A Cut Above is a high end butcher shop, the kind of place where it would all be too easy for them to just insist on the heritage of the pork and expect that to carry the sandwich. The pork here is of fine provenance, no doubt, but they also care enough to put together a darn good sandwich.`,
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Mystery Bites",
          imageSrc: "https://blog-global.lantmannen-unibake.com/hubfs/0.%20UBI/Blogposts/lantmannen-unibake-leivonnaispakasteet-ammattilaisille-1.jpg",
          content: `Rery rinc. has ropened rits rirst restaurant -- rery rites! rey rare re hottest race rin rown, rand ri highly recommend reir riple recker rili repper rower ris ro rie ror, ri highly recommend.`,
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Torchy’s Tacos in Austin, TX",
          imageSrc: "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1581463475/photos/307170_original.jpg",
          content: `In less than a decade, Torchy’s Tacos built a taco empire. How? By capturing the spirit of Austin’s culture. From the tacos to the smiling pitchfork-wielding devil mascot, Torchy’s simultaneously feels familiar, rebellious, and damn delicious.

          Breakfast is served all day here, offering the typical egg-and-whatever combos you’ll find at most Austin taco establishments. But it’s their lunch tacos (also served all day) that recklessly (yet skillfully) toss gourmet ingredients and flavor combinations together. While Torchy’s has many highs, there are a couple of lows. A few Torchy’s locations have bars that serve over-sugared double-wide margaritas with floating beer cans that feel more at home in a Carlos N Charlie’s than here. While we commend them for attempting to create a drinking experience, all you really need is a Pacifico or Topo Chico.`,
          userId: 9,
          createdAt: new Date('2020-01-05'),
          updatedAt: new Date('2020-01-05')
        },
        {
          title: "La Ratatouille Review",
          imageSrc: "https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg",
          content: `From the red-checkered tablecloth to the generous portions of classic bistro dishes like oeufs mayonnaise and entrecôte in béarnaise sauce served with crispy fries, the nostalgia of this affordable Relais Routier, traditional roadside restaurant, is part of the draw for Mr. Gaudry. The owners, brothers Jérôme and Stéphane Dumant, have revived an old dining format that has attracted both foreigners and locals across the socioeconomic spectrum. “It’s a feel-good place for everyone,” he says.`,
          userId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Review of Substance",
          imageSrc: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/5647bc2b-cb55-484d-baba-4895e7dba7b2/02d54377-9822-4144-b255-3c358fafc43c.jpg",
          content: `Named in part as a nod to a top-end Champagne, this modern bistro brings an oenocentric focus and casual spirit to the rue de Chaillot. While the restaurant has become a popular dining destination among the city’s political and media elite, Mr. Gaudry insists it’s a place for food purists: “The cooking is elegant and refined and pairs beautifully with the sharp selection of more than 180 cuvées from big Champagne houses and small growers.” The wine list is by Anselme Selosse, a fourth-generation Champagne producer. On top of that, there’s a three-course lunch offer for 36 euros (about $40) that he insists is worth an advance booking.`,
          userId: 14,
          createdAt: new Date('2016-09-06'),
          updatedAt: new Date('2016-09-06')
        },
        {
          title: "Review of Cravan",
          imageSrc: "https://cdn.vox-cdn.com/thumbor/g9MSNquYJh-ZD4G15g2C506xoys=/0x0:7360x4912/1200x675/filters:focal(3092x1868:4268x3044)/cdn.vox-cdn.com/uploads/chorus_image/image/60434613/CaravanFitzrovia_Interiors_156.0.jpg",
          content: `"In some ways, the spot doesn’t feel like Paris,” Mr. Gaudry says of this Le Fooding award-winning cocktail bar. He loves the bar as much for the building’s carefully preserved Art Nouveau architecture by Hector Guimard (who famously designed Paris metro entrances) and historic design elements — from the facade to the porcelain tiles and original signage — as for its expert drinks menu. Cravan is run by Franck Audoux, formerly the co-owner of the highly-regarded restaurant Le Chateaubriand. “Franck has elevated the cocktail to the level of high liquid gastronomy and does so with elegance and simplicity.” Mr. Gaudry likes to sit beneath the plane trees on the terrace and sip one of the barman’s Bloody Marys made from a passata of Italian tomatoes, or the Trocadéro, a delicate drink mixed with vermouth, Picon and Curaçao.`,
          userId: 17,
          createdAt: new Date('2019-06-01'),
          updatedAt: new Date('2019-06-01')
        },
        {
          title: "Review of Comice",
          imageSrc: "https://bonjourparis.com/wp-content/uploads/2017/12/flowersandpainting.jpg",
          content: `“It’s a foreign take on French cuisine that is refreshing,” Mr. Gaudry says of this two-year-old contemporary restaurant. Its Canadian owners, Etheliya Hananova, the sommelier, and Noam Gedalof, the chef, earned a Michelin star for what Mr. Gaudry calls the whole package: an inviting interior, full of antique furnishings and stunning fresh flowers; their expertise and neo-Classical approach to French cooking; and an artisan-driven wine program. “It was so unexpected, in part because of its location and unassuming design,” he says.`,
          userId: 17,
          createdAt:
            new Date(), updatedAt: new Date()
        },
        {
          title: "Salt Bae's Restaurant",
          imageSrc: "https://cdn.vox-cdn.com/thumbor/Gv22R4cULdkrbgKWbJRnKs2my-o=/0x0:912x604/1200x800/filters:focal(384x230:528x374)/cdn.vox-cdn.com/uploads/chorus_image/image/65933323/Screen_Shot_2019_12_18_at_1.46.24_PM.0.png",
          content: `If you are intent on judging New York’s new branch of Nusr-Et only as a steakhouse, you’ll probably be disappointed. Nearly all of the cuts are wet-aged wagyu beef, and thus a little rubbery and low on flavor, though nicely marbled with fat. If, on the other hand, you appraise the place as dinner theater, you will find it satisfying — but only if Salt Bae is in the house.`,
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Krabby Patty",
          imageSrc: "https://metro.co.uk/wp-content/uploads/2019/01/sei_47518500-c1b0.jpg?quality=90&strip=all",
          content: `The Krabby Patty contains both the top bun and the bottom bun, with the top bun containing sesame seeds. It also contains sea cheese, sea lettuce, sea tomatoes, pickles, ketchup, mustard, mayonnaise, and sea onions, all of which can be seen when a Krabby Patty is being made. As well as all of those ingredients are the patty and secret sauce, both of which have unknown ingredients, particularly the patty.`,
          userId: 16,
          createdAt: new Date('2020-01-05'),
          updatedAt: new Date('2020-01-05')
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
