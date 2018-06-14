let Food = require("../models/food");
const mongoose = require("mongoose");
const config = require("../config/database");
mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log(`connected to database ${config.database}`);
});
mongoose.connection.on("error", err => {
  console.log(`database connection failed ${err}`);
});

const foods = [
  new Food({
    imagePath:
      "https://www.recipethis.com/wp-content/uploads/Homemade-Healthy-Vegetarian-Quinoa-Burger-with-Lettuce-and-Tomato-2-150x100.jpg",
    title: "THE CLUBHOUSE",
    price: 450.0,
    description:
      "Golden-brown buttered artisan roll, tangy Big Mac® sauce, gooey caramelized onions, prime cuts of pure Halal Angus beef, ground into a generously thick, juicy patty, melt-in-your-mouth, savoury Swiss Emmental cheese, thick smoked cuts of crispy beef bacon, and finished off with another helping of Big Mac sauce."
  }),
  new Food({
    imagePath:
      "http://www.markwellfoods.com.au/assets/images/products/ProductShots/thumbs/31460AB_150.jpg",
    title: "THE MUSHROOM",
    price: 470.0,
    description:
      "Golden-brown buttered artisan roll, prime cuts of pure Halal Angus beef, ground into a generously thick, juicy patty, mouth-watering mushrooms, on top of good old-fashioned American cheddar cheese, gooey caramelized onions, and finally finished off with tasty black pepper mayo."
  }),
  new Food({
    imagePath:
      "http://casseroleonline.com/wp-content/uploads/2017/10/Chicken-Burger-150x100.jpg",
    title: "CHICKEN MEXICANO",
    price: 550.0,
    description:
      "Golden-brown buttered artisan roll, smothered in delicious mayonnaise, melt-in-your-mouth, savoury Swiss Emmental cheese, succulent white Halal chicken breast, breaded to perfection, fiery Jalapenos, topped off with a thick layer of zesty guacamole"
  }),
  new Food({
    imagePath:
      "https://dsimg.wowjpn.goo.ne.jp/rs/?src=https://wow-j.com/images/ext/allguides/w0032/536347_615.jpg&maxw=150&maxh=0&resize=1",
    title: "GRAND CHICKEN SPIYCE",
    price: 570.0,
    description:
      "A juicy Halal chicken smothered in 2 slices of Emmental cheese, cripsy lettuce, tender tomatoes, held together by a soft bun and covered in a twist of mayo mustard sauce"
  }),
  new Food({
    imagePath:
      "https://www.recipethis.com/wp-content/uploads/Quick-Blend-Mexican-Chicken-Burgers-In-The-Air-Fryer-150x100.jpg",
    title: "GRAND CHICKEN SPECIAL",
    price: 580.0,
    description:
      "A thick, cripsy Halal chicken patty topped with a handful of crisp lettuce, rocca, juicy tomato slices, two slices of Emmental cheese and a slice of chicken roll, accompanied by a grainy, gourmet dressing sauce - all held together by a soft, water split bun."
  }),
  new Food({
    imagePath:
      "https://i2.wp.com/lisagcooks.com/wp-content/uploads/2017/01/healthy-ultimate-burger-2.jpg?fit=150%2C100&ssl=1",
    title: "DOUBLE QUARTER POUND KING™",
    price: 560.0,
    description:
      "Featuring more than ½ lb.* of flame-grilled 100% beef, topped with all of our classic favorites: American cheese, freshly sliced onions, zesty pickles, ketchup, & mustard all on a toasted sesame seed bun."
  })
];

let done = 0;

for (let i = 0; i < foods.length; i++) {
  foods[i].save(function(err, res) {
    done++;
    if (done === foods.length) {
      exit();
    }
    if (err) {
      console.log(err);
    }
  });
}
function exit() {
  mongoose.disconnect();
}
