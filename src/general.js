import * as React from 'react';

export const API_HOST = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
export const API_KEY = '22d95c216dmshd9c7b0d95bb37d4p1dcd6ejsnb496ab819159';

export const swap = {
  "butter": ["olive oil", "apple sauce", "avocado puree", "chia seeds"],
  "cream": ["fat free half-and-half", "evaporated skim milk"],
  "bread crumbs": ["rolled oats", "crushed bran cereal"],
  "cream cheese": ["fat-free cream cheese", "cottage cheese"],
  "egg": ["egg white", "chia seeds", "flax meal"],
  "flour": ["whole wheat flour", "coconut flour", "nut flour", "oats"],
  "ground beef": ["lean ground beef", "ground chicken breast", "ground turkey breast"],
  "mayonnaise": ["reduced-fat mayonnaise", "low-fat yogurt", "hummus", "avacado"],
  "evaporated milk": ["evaporated skim milk"],
  "milk": ["fat free milk", "low fat milk"],
  "pasta": ["whole wheat pasta"],
  "rice": ["brown rice"],
  "sour cream": ["low fat sour cream", "low fat yogurt"],
  "sugar": ["stevia", "cinnamon", "nutmeg", "vanilla", "apple sauce", "honey", "mashed bananas", "maple syrup"],
  "salt": ["garlic powder", "onion powder", "paprika", "herbs"],
  "potato": ["sweet potato"],
  "bacon": ["prosciutto"],
  "chocolate chips": ["cacao nibs"],
  "tortilla wraps": ["lettuce leaves"],
  "flour tortilla": ["corn tortilla"],
  "bread": ["pita"],
  "pasta": ["spagehtti squash"]
}

export const recipesMainList = {
  "results": [
    { "id": 4684, "title": "Grilled Salmon with Chorizo and Fingerlings", "readyInMinutes": 45, "servings": 4, "sourceUrl": "http://www.myrecipes.com/recipe/grilled-salmon-with-chorizo-fingerlings-10000001988571", "openLicense": 0, "image": "grilled-salmon-with-chorizo-and-fingerlings-4684.jpg" }, { "id": 30338, "title": "Spanish-Style Carrots and Cauliflower", "readyInMinutes": 40, "servings": 4, "sourceUrl": "http://www.foodandwine.com/recipes/spanish-style-carrots-and-cauliflower", "openLicense": 0, "image": "spanish-style-carrots-and-cauliflower-30338.jpg" },
    { "id": 86266, "title": "Roast Cod with Leeks, Tomatoes, and Spinach", "readyInMinutes": 45, "servings": 6, "sourceUrl": "http://www.marthastewart.com/356338/roast-cod-leeks-tomatoes-and-spinach", "openLicense": 0, "image": "roast-cod-with-leeks-tomatoes-and-spinach-2-86266.png" },
    { "id": 87731, "title": "Wasabi Salmon", "readyInMinutes": 20, "servings": 4, "sourceUrl": "http://www.food.com/recipe/wasabi-salmon-431210", "openLicense": 0, "image": "wasabi-salmon-2-87731.jpg" }, { "id": 110883, "title": "Broccoli and Green Bean Polka", "readyInMinutes": 24, "servings": 4, "sourceUrl": "http://www.food.com/recipe/broccoli-and-green-bean-polka-427792", "openLicense": 0, "image": "broccoli-and-green-bean-polka-2-110883.jpg" }, { "id": 201159, "title": "Zesty Slow-Cooker Italian Pot Roast", "readyInMinutes": 45, "servings": 6, "sourceUrl": "http://www.myrecipes.com/recipe/zesty-slow-cooker-italian-pot-roast-10000001870860/", "openLicense": 0, "image": "zesty-slow-cooker-italian-pot-roast-201159.jpg" },
    { "id": 305925, "title": "Spinach Stuffed Baked Sole", "readyInMinutes": 70, "servings": 4, "sourceUrl": "http://www.foodnetwork.com/recipes/sandra-lee/spinach-stuffed-baked-sole-recipe.html", "openLicense": 0, "image": "spinach-stuffed-baked-sole-305925.jpeg" }, { "id": 531626, "title": "Vegetable Lasagna with Mushrooms, Kale and Sun Dried Tomatoes", "readyInMinutes": 45, "servings": 8, "sourceUrl": "http://motherrimmy.com/vegetable-lasagna-recipe/", "openLicense": 0, "image": "Vegetable-Lasagna-with-Mushrooms--Kale-and-Sun-Dried-Tomatoes-531626.jpg" },
    { "id": 837230, "title": "Red Lentil & Carrot Soup", "readyInMinutes": 5, "servings": 2, "sourceUrl": "http://www.bbcgoodfoodme.com/recipes/red-lentil-carrot-soup", "openLicense": 0, "image": "red-lentil-carrot-soup-837230.jpg" }, { "id": 968153, "title": "Split Pea and Ham Bone Soup", "readyInMinutes": 120, "servings": 6, "sourceUrl": "https://salu-salo.com/split-pea-ham-bone-soup/", "openLicense": 0, "image": "split-pea-and-ham-bone-soup-968153.jpg" },
    { "id": 1062974, "title": "Clean eating butternut squash stew", "readyInMinutes": 30, "servings": 3, "sourceUrl": "https://hedihearts.com/clean-eating-butternut-squash-stew/", "openLicense": 0, "image": "clean-eating-butternut-squash-stew-1062974.jpg" },
    { "id": 1164981, "title": "Instant Pot Stuffed Spaghetti Squash", "readyInMinutes": 55, "servings": 2, "sourceUrl": "https://fitfoodiefinds.com/instant-pot-stuffed-spaghetti-squash-recipe/", "openLicense": 0, "image": "instant-pot-stuffed-spaghetti-squash-1164981.jpg" },
    { "id": 1477921, "title": "Chicken and Strawberry Poppy Seed Pasta Salad", "readyInMinutes": 45, "servings": 4, "sourceUrl": "http://www.motherthyme.com/2020/06/chicken-and-strawberry-poppy-seed-pasta-salad.html", "openLicense": 0, "image": "chicken-and-strawberry-poppy-seed-pasta-salad-1477921.jpg" },
    { "id": 1529625, "title": "Wild Rice and Sweet Potato Kale Salad", "readyInMinutes": 55, "servings": 6, "sourceUrl": "https://www.hummusapien.com/wild-rice-sweet-potato-kale-salad/", "openLicense": 0, "image": "wild-rice-and-sweet-potato-kale-salad-1529625.jpg" },
    { "id": 110594, "title": "Hot Asian Noodles With Broccoli", "readyInMinutes": 30, "servings": 6, "sourceUrl": "http://www.food.com/recipe/hot-asian-noodles-with-broccoli-120570", "openLicense": 0, "image": "hot-asian-noodles-with-broccoli-2-110594.jpg" },
    { "id": 723984, "title": "Cabbage Salad with Peanuts", "readyInMinutes": 15, "servings": 2, "sourceUrl": "http://naturallyella.com/cabbage-salad-with-peanuts/", "openLicense": 0, "image": "cabbage-salad-with-peanuts-723984.jpg" },
    { "id": 504218, "title": "Mexican Vegetables on Cornbread", "readyInMinutes": 45, "servings": 4, "sourceUrl": "http://eatathomecooks.com/2009/05/mexican-vegetables-on-cornbread.html", "openLicense": 0, "image": "Mexican-Vegetables-on-Cornbread-504218.jpg" },
    { "id": 222878, "title": "Grilled goat's cheese with cranberry dressing", "readyInMinutes": 20, "servings": 6, "sourceUrl": "https://www.bbcgoodfood.com/recipes/4982/grilled-goats-cheese-with-cranberry-dressing", "openLicense": 0, "image": "Grilled-goats-cheese-with-cranberry-dressing-222878.jpg" },
    { "id": 222482, "title": "Roasted vegetable & feta tostada", "readyInMinutes": 30, "servings": 2, "sourceUrl": "https://www.bbcgoodfood.com/recipes/1658642/roasted-vegetable-and-feta-tostada", "openLicense": 0, "image": "Roasted-vegetable---feta-tostada-222482.jpg" },
    { "id": 482574, "title": "Slow Cooker Vegetarian Chili with Butternut Squash", "readyInMinutes": 250, "servings": 4, "sourceUrl": "http://thelemonbowl.com/2013/04/slow-cooker-vegetarian-chili-with-butternut-squash.html", "openLicense": 0, "image": "Slow-Cooker-Vegetarian-Chili-with-Butternut-Squash-482574.jpg" },
    { "id": 615999, "title": "Slow Cooker Pepperoncini Beef Sandwiches", "readyInMinutes": 485, "servings": 6, "sourceUrl": "http://www.erinsfoodfiles.com/2014/10/slow-cooker-pepperoncini-beef-sandwiches.html", "openLicense": 0, "image": "Slow-Cooker-Pepperoncini-Beef-Sandwiches-615999.jpg" },
    { "id": 1100113, "title": "Autumn Pearl Couscous Salad with Roasted Butternut Squash", "readyInMinutes": 40, "servings": 5, "sourceUrl": "http://littlespicejar.com/autumn-pearl-couscous-salad-with-roasted-butternut-squash/", "openLicense": 0, "image": "autumn-pearl-couscous-salad-with-roasted-butternut-squash-1100113.jpg" },
    { "id": 1587157, "title": "Roasted Vegetable Bowl with Peanut Sauce", "readyInMinutes": 45, "servings": 4, "sourceUrl": "https://www.cookincanuck.com/roasted-vegetable-bowl-peanut-sauce/", "openLicense": 0, "image": "roasted-vegetable-bowl-with-peanut-sauce-1587157.jpg" },
    { "id": 610524, "title": "Cedar-Planked Salmon with Fresh Sorrel Sauce", "readyInMinutes": 35, "servings": 6, "sourceUrl": "http://www.crumbblog.com/2014/06/planked-salmon-with-fresh-sorrel-sauce.html", "openLicense": 0, "image": "Cedar-Planked-Salmon-with-Fresh-Sorrel-Sauce-610524.jpg" },
    { "id": 551484, "title": "blackened salmon tacos with cilantro yogurt sauce", "readyInMinutes": 45, "servings": 2, "sourceUrl": "http://www.greensnchocolate.com/2013/07/blackened-salmon-tacos-with-cilantro-yogurt-sauce.html", "openLicense": 0, "image": "blackened-salmon-tacos-with-cilantro-yogurt-sauce-551484.jpg" },
    { "id": 14383, "title": "Leg Of Lamb With Greens", "readyInMinutes": 45, "servings": 6, "sourceUrl": "http://www.marthastewart.com/354780/leg-lamb-greens", "openLicense": 0, "image": "leg-of-lamb-with-greens-2-14383.jpg" }, { "id": 551452, "title": "Beef Liver with Fig, Bacon and Caramelized Onion Compote [or the ultimate beef liver ]", "readyInMinutes": 45, "servings": 2, "sourceUrl": "http://thehealthyfoodie.com/2013/07/11/beef-liver-with-fig-bacon-and-caramelized-onion-compote/", "openLicense": 0, "image": "Beef-Liver-with-Fig--Bacon-and-Caramelized-Onion-Compote-[or-the-ultimate-beef-liver-]-551452.png" },
    { "id": 146557, "title": "Liver and Onions W/ Gravy", "readyInMinutes": 30, "servings": 4, "sourceUrl": "http://www.food.com/recipe/liver-and-onions-w-gravy-446821", "openLicense": 0, "image": "liver-and-onions-w_-gravy-2-146557.jpg" }, { "id": 87624, "title": "Coriander-Crusted Salmon", "readyInMinutes": 45, "servings": 4, "sourceUrl": "http://www.marthastewart.com/334906/coriander-crusted-salmon", "openLicense": 0, "image": "coriander-crusted-salmon-2-87624.png" },
    { "id": 1452053, "title": "Green Shakshuka", "readyInMinutes": 135, "servings": 4, "sourceUrl": "https://lifemadesweeter.com/green-shakshuka/", "openLicense": 0, "image": "green-shakshuka-1452053.jpg" }, { "id": 17174, "title": "Smashed Potato Salad", "readyInMinutes": 50, "servings": 4, "sourceUrl": "http://www.veggienumnum.com/2010/07/smashed-potato-salad/", "openLicense": 0, "image": "smashed_potato_salad-17174.jpg" }, { "id": 178328, "title": "Lemon-Chili Tilapia", "readyInMinutes": 30, "servings": 4, "sourceUrl": "https://www.bettycrocker.com/recipes/lemon-chili-tilapia/f5638de3-9bfb-4b9b-8ca8-6643abe89ab1", "openLicense": 0, "image": "Lemon-Chili-Tilapia-178328.jpg" },
    { "id": 1094349, "title": "Spicy fennel linguine with sardines & capers", "readyInMinutes": 25, "servings": 2, "sourceUrl": "https://www.bbcgoodfood.com/recipes/spicy-fennel-linguine-sardines-capers", "openLicense": 0, "image": "spicy-fennel-linguine-with-sardines-capers-1094349.jpg" },
    { "id": 84619, "title": "Caesar Pasta Salad", "readyInMinutes": 20, "servings": 4, "sourceUrl": "http://www.food.com/recipe/caesar-pasta-salad-153569", "openLicense": 0, "image": "caesar-pasta-salad-2-84619.jpg" }, { "id": 93495, "title": "Summertime Finger Salad", "readyInMinutes": 20, "servings": 10, "sourceUrl": "http://www.food.com/recipe/summertime-finger-salad-433989", "openLicense": 0, "image": "summertime-finger-salad-2-93495.jpg" },
    { "id": 584549, "title": "Stuffed Sweet Potato with Spinach, Hummus & Feta", "readyInMinutes": 16, "servings": 1, "sourceUrl": "http://www.cookincanuck.com/2013/09/stuffed-sweet-potato-recipe-with-spinach-hummus-feta/", "openLicense": 0, "image": "Stuffed-Sweet-Potato-with-Spinach--Hummus---Feta-584549.jpg" },
    { "id": 1153175, "title": "Oven Roasted Potatoes", "readyInMinutes": 35, "servings": 4, "sourceUrl": "https://www.loveandlemons.com/roasted-potatoes/", "openLicense": 0, "image": "oven-roasted-potatoes-1153175.jpg" },
    { "id": 232502, "title": "Grilled Steak-and-Ratatouille Salad with Basil-Garlic Vinaigrette", "readyInMinutes": 90, "servings": 4, "sourceUrl": "http://www.myrecipes.com/m/recipe/grilled-steak-ratatouille-salad-50400000114514/", "openLicense": 0, "image": "grilled-steak-and-ratatouille-salad-with-basil-garlic-vinaigrette-232502.jpg" },
    { "id": 91955, "title": "Broccoli Cashew Stir-Fry", "readyInMinutes": 20, "servings": 4, "sourceUrl": "http://www.food.com/recipe/broccoli-cashew-stir-fry-350174", "openLicense": 0, "image": "broccoli-cashew-stir-fry-2-91955.jpg" },
    { "id": 1077464, "title": "Cream of Broccoli Soup", "readyInMinutes": 20, "servings": 4, "sourceUrl": "https://www.skinnytaste.com/cream-of-broccoli-soup-25-ww-pts/", "openLicense": 0, "image": "cream-of-broccoli-soup-1077464.jpg" }],
  "baseUri": "https://spoonacular.com/recipeImages/",
  "offset": 0,
  "number": 40,
  "totalResults": 380237,
  "processingTimeMs": 224,
  "expires": 1631718224603
}