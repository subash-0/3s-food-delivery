const pizzas = [
    {
        id: 1,
        title: "Margherita Pizza",
        description: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil. The simplicity of the ingredients highlights the quality and freshness of each component, making it a favorite among pizza enthusiasts. The crust is thin and crispy, providing the perfect base for the delicious toppings. Enjoy it with a drizzle of olive oil and a sprinkle of sea salt for the ultimate experience.",
        price: 10.99,
        picture: "images/margherita_pizza.jpg",
        restaurant: "Luigi's Pizzeria"
    },
    {
        id: 2,
        title: "Pepperoni Pizza",
        description: "This American favorite features a generous layer of spicy pepperoni slices over a bed of melted mozzarella cheese and tangy tomato sauce. The pepperoni is crisped to perfection, releasing its flavorful oils into the cheese. The crust is chewy yet crispy, providing a satisfying bite. Each mouthful offers a burst of flavors, from the smokiness of the pepperoni to the richness of the cheese.",
        price: 12.99,
        picture: "images/pepperoni_pizza.jpg",
        restaurant: "Tony's Pizza"
    },
    {
        id: 3,
        title: "BBQ Chicken Pizza",
        description: "This pizza combines tangy BBQ sauce, tender chicken pieces, red onions, and cilantro on a crispy crust. The smoky BBQ sauce blends perfectly with the melted mozzarella cheese, creating a savory and slightly sweet flavor profile. The red onions add a crunch and a slight sharpness, while the cilantro brings a fresh and aromatic note, making every bite exciting.",
        price: 14.99,
        picture: "images/bbq_chicken_pizza.jpg",
        restaurant: "Grill Master Pizzeria"
    },
    {
        id: 4,
        title: "Hawaiian Pizza",
        description: "Hawaiian pizza is a delightful combination of sweet and savory, featuring ham and pineapple chunks over a bed of melted cheese and tomato sauce. The juicy pineapple adds a refreshing sweetness that contrasts beautifully with the salty ham. The crust is perfectly baked to be crispy on the outside and soft on the inside. This pizza is a tropical escape with every bite.",
        price: 13.99,
        picture: "images/hawaiian_pizza.jpg",
        restaurant: "Aloha Pizzeria"
    },
    {
        id: 5,
        title: "Veggie Supreme Pizza",
        description: "This pizza is a colorful medley of fresh vegetables including bell peppers, onions, mushrooms, olives, and tomatoes, topped with mozzarella cheese and a rich tomato sauce. The veggies are sautéed to perfection, retaining their crunch and vibrant flavors. The combination of textures and tastes, from the sweet bell peppers to the savory mushrooms, makes this pizza a vegetarian delight.",
        price: 11.99,
        picture: "images/veggie_supreme_pizza.jpg",
        restaurant: "Green Garden Pizzeria"
    },
    {
        id: 6,
        title: "Four Cheese Pizza",
        description: "A cheese lover's dream, this pizza features a blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses. The rich and creamy texture of the melted cheeses is complemented by a crisp, golden crust. Each bite offers a complex flavor profile, from the tanginess of the gorgonzola to the sharpness of the parmesan, creating a luxurious and indulgent experience.",
        price: 15.99,
        picture: "images/four_cheese_pizza.jpg",
        restaurant: "Cheese Heaven Pizzeria"
    },
    {
        id: 7,
        title: "Meat Lovers Pizza",
        description: "Packed with protein, this pizza features a generous mix of pepperoni, sausage, bacon, and ham, all layered over a rich tomato sauce and melted mozzarella cheese. The combination of different meats provides a variety of textures and flavors, from the crispy bacon to the spicy sausage. The crust is sturdy enough to hold all the toppings, ensuring a satisfying bite every time.",
        price: 16.99,
        picture: "images/meat_lovers_pizza.jpg",
        restaurant: "Carnivore's Delight Pizzeria"
    },
    {
        id: 8,
        title: "Buffalo Chicken Pizza",
        description: "This spicy pizza is topped with tender pieces of buffalo chicken, drizzled with buffalo sauce and ranch dressing, and complemented by red onions and mozzarella cheese. The buffalo sauce adds a tangy and spicy kick, balanced by the coolness of the ranch. The crispy crust provides the perfect base for these bold flavors, making it a favorite for those who love a bit of heat.",
        price: 14.99,
        picture: "images/buffalo_chicken_pizza.jpg",
        restaurant: "Spicy Slice Pizzeria"
    },
    {
        id: 9,
        title: "Pesto Chicken Pizza",
        description: "A refreshing take on pizza, this variety features a basil pesto sauce, grilled chicken, sun-dried tomatoes, and mozzarella cheese. The pesto sauce brings a vibrant, herby flavor, while the sun-dried tomatoes add a touch of sweetness and chewiness. The grilled chicken is tender and juicy, making this pizza a delightful and aromatic experience.",
        price: 13.99,
        picture: "images/pesto_chicken_pizza.jpg",
        restaurant: "Herb Garden Pizzeria"
    },
    {
        id: 10,
        title: "Truffle Mushroom Pizza",
        description: "Indulge in the luxurious flavors of truffle oil and assorted mushrooms on this gourmet pizza. The earthy taste of the mushrooms is enhanced by the rich and aromatic truffle oil, all atop a crispy and chewy crust. Mozzarella and parmesan cheeses add a creamy texture, while a sprinkle of fresh parsley brings a touch of brightness. This pizza is a true delicacy for mushroom lovers.",
        price: 18.99,
        picture: "images/truffle_mushroom_pizza.jpg",
        restaurant: "Gourmet Delights Pizzeria"
    }
];

const burgers = [
    {
        id: 1,
        title: "Classic Beef Burger",
        description: "A timeless favorite, the Classic Beef Burger features a juicy beef patty cooked to perfection, topped with fresh lettuce, ripe tomatoes, and tangy pickles. Served on a toasted bun with a spread of creamy mayo and a hint of mustard, this burger promises to deliver a satisfying and flavorful bite every time. Accompanied by a side of crispy fries, it's a meal that's hard to beat.",
        price: 8.99,
        picture: "images/classic_beef_burger.jpg",
        restaurant: "Burger Haven"
    },
    {
        id: 2,
        title: "Cheeseburger",
        description: "The Cheeseburger is a classic that never goes out of style. Featuring a juicy beef patty topped with a slice of melted cheddar cheese, crisp lettuce, fresh tomato, and sliced pickles. The burger is served on a toasted sesame bun with a spread of tangy ketchup and creamy mayo, making every bite a delightful blend of textures and flavors.",
        price: 9.99,
        picture: "images/cheeseburger.jpg",
        restaurant: "Cheese & Beef"
    },
    {
        id: 3,
        title: "Bacon Burger",
        description: "This burger is for bacon lovers, featuring a juicy beef patty topped with crispy bacon strips, melted cheddar cheese, fresh lettuce, and ripe tomatoes. The bacon adds a smoky, savory flavor that complements the richness of the beef patty. Served on a toasted bun with a spread of smoky BBQ sauce, this burger is a deliciously indulgent treat.",
        price: 10.99,
        picture: "images/bacon_burger.jpg",
        restaurant: "Bacon Delight"
    },
    {
        id: 4,
        title: "Mushroom Swiss Burger",
        description: "The Mushroom Swiss Burger is a gourmet delight, featuring a beef patty topped with sautéed mushrooms and melted Swiss cheese. The mushrooms add a rich, earthy flavor that pairs perfectly with the creamy Swiss cheese. Served on a toasted bun with a spread of garlic aioli, this burger is a sophisticated twist on a classic favorite.",
        price: 11.99,
        picture: "images/mushroom_swiss_burger.jpg",
        restaurant: "Gourmet Burgers"
    },
    {
        id: 5,
        title: "Chicken Burger",
        description: "A healthier alternative to the classic beef burger, the Chicken Burger features a grilled chicken breast topped with fresh lettuce, ripe tomatoes, and a slice of avocado. Served on a whole wheat bun with a spread of light mayo and a squeeze of lemon juice, this burger is a fresh and flavorful option for those looking for a lighter meal.",
        price: 9.99,
        picture: "images/chicken_burger.jpg",
        restaurant: "Healthy Bites"
    },
    {
        id: 6,
        title: "Spicy Jalapeno Burger",
        description: "For those who love a bit of heat, the Spicy Jalapeno Burger features a beef patty topped with spicy jalapenos, pepper jack cheese, fresh lettuce, and ripe tomatoes. Served on a toasted bun with a spread of chipotle mayo, this burger packs a flavorful punch with every bite.",
        price: 10.99,
        picture: "images/spicy_jalapeno_burger.jpg",
        restaurant: "Spicy Bites"
    },
    {
        id: 7,
        title: "BBQ Bacon Burger",
        description: "This burger combines the best of BBQ and bacon, featuring a beef patty topped with crispy bacon, melted cheddar cheese, onion rings, and BBQ sauce. The smoky BBQ sauce and crispy onion rings add a delightful crunch, while the bacon and cheese provide a rich and savory flavor. Served on a toasted bun, this burger is a BBQ lover's dream.",
        price: 11.99,
        picture: "images/bbq_bacon_burger.jpg",
        restaurant: "BBQ & Burgers"
    },
    {
        id: 8,
        title: "Veggie Burger",
        description: "The Veggie Burger is a delicious and healthy option, featuring a patty made from a blend of vegetables, beans, and grains. Topped with fresh lettuce, ripe tomatoes, and sliced avocado, this burger is full of fresh and vibrant flavors. Served on a whole wheat bun with a spread of hummus, it's a satisfying and nutritious choice for vegetarians and meat-lovers alike.",
        price: 8.99,
        picture: "images/veggie_burger.jpg",
        restaurant: "Veggie Delight"
    },
    {
        id: 9,
        title: "Blue Cheese Burger",
        description: "A sophisticated twist on the classic burger, the Blue Cheese Burger features a beef patty topped with crumbled blue cheese, caramelized onions, and arugula. The blue cheese adds a tangy and creamy flavor that pairs perfectly with the sweetness of the caramelized onions. Served on a toasted brioche bun, this burger is a gourmet treat.",
        price: 12.99,
        picture: "images/blue_cheese_burger.jpg",
        restaurant: "Gourmet Bites"
    },
    {
        id: 10,
        title: "Turkey Burger",
        description: "The Turkey Burger is a lighter alternative to the classic beef burger, featuring a juicy turkey patty topped with fresh lettuce, ripe tomatoes, and a slice of Swiss cheese. Served on a toasted whole wheat bun with a spread of cranberry mayo, this burger is a delicious and healthy option for those looking for a leaner meal.",
        price: 9.99,
        picture: "images/turkey_burger.jpg",
        restaurant: "Healthy Eats"
    }
];

const thaiFoods = [
    {
        id: 1,
        title: "Pad Thai",
        description: "Pad Thai is a stir-fried noodle dish commonly served as street food and at casual local eateries in Thailand. It is typically made with rice noodles, shrimp, chicken, or tofu, peanuts, scrambled egg, and bean sprouts, among other vegetables. The dish is flavored with a combination of tamarind pulp, fish sauce, dried shrimp, garlic, shallots, red chili pepper, and palm sugar, and served with lime wedges and often chopped roasted peanuts.",
        price: 12.99,
        picture: "images/pad_thai.jpg",
        restaurant: "Bangkok Bistro"
    },
    {
        id: 2,
        title: "Green Curry",
        description: "Green Curry is a popular Thai curry made with green curry paste, coconut milk, bamboo shoots, Thai eggplant, and a choice of meat or tofu. The curry paste is a blend of fresh green chilies, garlic, shallots, lemongrass, and other herbs and spices, creating a vibrant and spicy flavor. The coconut milk adds a rich and creamy texture, balancing the heat from the chilies. Served with jasmine rice, this dish is a flavorful and aromatic treat.",
        price: 13.99,
        picture: "images/green_curry.jpg",
        restaurant: "Siam Delight"
    },
    {
        id: 3,
        title: "Tom Yum Soup",
        description: "Tom Yum Soup is a hot and sour Thai soup usually cooked with shrimp. The soup is made with a fragrant broth infused with lemongrass, kaffir lime leaves, galangal, lime juice, fish sauce, and crushed chili peppers. The addition of mushrooms, tomatoes, and fresh cilantro adds depth and flavor to the soup. This dish is known for its bold and tangy taste, making it a favorite among Thai cuisine enthusiasts.",
        price: 11.99,
        picture: "images/tom_yum_soup.jpg",
        restaurant: "Thai Spice"
    },
    {
        id: 4,
        title: "Massaman Curry",
        description: "Massaman Curry is a rich and flavorful Thai curry with Indian influences. It is made with a blend of spices including cardamom, cinnamon, cloves, and nutmeg, combined with coconut milk, potatoes, peanuts, and a choice of meat or tofu. The curry has a slightly sweet and nutty flavor, with a creamy texture from the coconut milk. Served with jasmine rice, this dish is a comforting and hearty meal.",
        price: 14.99,
        picture: "images/massaman_curry.jpg",
        restaurant: "Royal Thai"
    },
    {
        id: 5,
        title: "Som Tum",
        description: "Som Tum is a Thai green papaya salad that is both spicy and tangy. The salad is made with shredded unripe papaya, tomatoes, green beans, and peanuts, tossed in a dressing made from lime juice, fish sauce, palm sugar, and chili peppers. The dish is known for its vibrant and fresh flavors, with a perfect balance of sweet, sour, salty, and spicy tastes. It's a refreshing and healthy option that pairs well with grilled meats or sticky rice.",
        price: 10.99,
        picture: "images/som_tum.jpg",
        restaurant: "Thai Garden"
    },
    {
        id: 6,
        title: "Panang Curry",
        description: "Panang Curry is a thick and creamy Thai curry made with Panang curry paste, coconut milk, kaffir lime leaves, and a choice of meat or tofu. The curry paste is a blend of red chilies, lemongrass, galangal, and other spices, creating a rich and aromatic flavor. The addition of peanuts gives the curry a slightly nutty taste. Served with jasmine rice, this dish is a comforting and flavorful option.",
        price: 13.99,
        picture: "images/panang_curry.jpg",
        restaurant: "Thai Aroma"
    },
    {
        id: 7,
        title: "Pad See Ew",
        description: "Pad See Ew is a popular Thai stir-fried noodle dish made with wide rice noodles, soy sauce, Chinese broccoli, and a choice of meat or tofu. The dish is cooked in a hot wok, giving the noodles a slightly charred and smoky flavor. The combination of sweet and savory soy sauce, tender noodles, and fresh vegetables makes this dish a satisfying and delicious option for any meal.",
        price: 12.99,
        picture: "images/pad_see_ew.jpg",
        restaurant: "Noodle House"
    },
    {
        id: 8,
        title: "Thai Basil Chicken",
        description: "Thai Basil Chicken is a flavorful stir-fry made with ground chicken, fresh basil leaves, garlic, and chili peppers. The dish is cooked in a savory sauce made from soy sauce, fish sauce, and oyster sauce, creating a perfect balance of salty and spicy flavors. Served with jasmine rice and a fried egg on top, this dish is a popular street food in Thailand and a favorite among Thai cuisine lovers.",
        price: 11.99,
        picture: "images/thai_basil_chicken.jpg",
        restaurant: "Street Eats"
    },
    {
        id: 9,
        title: "Thai Fish Cakes",
        description: "Thai Fish Cakes are a popular appetizer made from ground fish mixed with red curry paste, green beans, and fresh herbs. The mixture is shaped into small patties and deep-fried until golden brown and crispy. The fish cakes are served with a sweet and tangy dipping sauce made from cucumbers, vinegar, sugar, and crushed peanuts. These savory and flavorful bites are perfect for starting a meal or enjoying as a snack.",
        price: 9.99,
        picture: "images/thai_fish_cakes.jpg",
        restaurant: "Seafood Delights"
    },
    {
        id: 10,
        title: "Mango Sticky Rice",
        description: "Mango Sticky Rice is a traditional Thai dessert made with glutinous rice, fresh mango slices, and a sweet coconut milk sauce. The sticky rice is cooked until tender and then mixed with the coconut milk, creating a creamy and slightly sweet base. The fresh mango adds a juicy and refreshing contrast, making this dessert a perfect balance of flavors and textures. It's a delightful way to end any Thai meal.",
        price: 7.99,
        picture: "images/mango_sticky_rice.jpg",
        restaurant: "Sweet Thai"
    }
];

const nepaliFoods = [
    {
        id: 1,
        title: "Momo",
        description: "Momo is a type of South Asian dumpling, popular in Nepal, Tibet, and Bhutan. In Nepal, momos are one of the most popular fast foods. They are usually stuffed with ground meat (often chicken or buffalo), vegetables, and spices, wrapped in a dough made from flour and water, then steamed or fried. Momos are typically served with a spicy dipping sauce made from tomatoes, sesame seeds, and various spices, enhancing their delicious flavor.",
        price: 7.99,
        picture: "https://junifoods.com/wp-content/uploads/2023/03/Chicken-Momo-Restaurant-Style-Kukhura-ko-Momo-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-1-500x500.jpg",
        restaurant: "Himalayan Delights"
    },
    {
        id: 2,
        title: "Dal Bhat",
        description: "Dal Bhat is a traditional Nepali meal consisting of steamed rice (bhat) and lentil soup (dal). It is often accompanied by vegetable curries, chutney, and pickles. Dal Bhat is a staple food in Nepal, providing a nutritious and balanced meal. The lentil soup is flavored with turmeric, cumin, and garlic, while the vegetable curries are made with seasonal vegetables and a variety of spices, making this dish a flavorful and satisfying option.",
        price: 9.99,
        picture: "https://www.chefsoraya.com/cdn/shop/articles/Chef_Soraya_Blog_Image_Template_1080x.png?v=1642704843",
        restaurant: "Nepal Kitchen"
    },
    {
        id: 3,
        title: "Sel Roti",
        description: "Sel Roti is a traditional homemade, sweet, ring-shaped rice bread/doughnut that is prepared during Tihar, a widely celebrated Hindu festival in Nepal. The dough is made from rice flour, sugar, and ghee, then deep-fried until golden brown and crispy. Sel Roti has a crunchy exterior and a soft, chewy interior, with a mildly sweet flavor. It is often enjoyed with yogurt or curry.",
        price: 4.99,
        picture: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/ThomasHEaton.jpg&w=900&height=601",
        restaurant: "Festival Foods"
    },
    {
        id: 4,
        title: "Gundruk",
        description: "Gundruk is a fermented leafy green vegetable dish, traditionally prepared in Nepal. It is made by fermenting leafy greens such as mustard, radish, or cauliflower leaves, which are then sun-dried and stored. Gundruk has a tangy and slightly sour flavor, often used as a condiment or side dish. It is rich in probiotics and adds a unique taste to Nepali cuisine.",
        price: 5.99,
        picture: "https://junifoods.com/wp-content/uploads/2024/02/Gundruk-ko-Jhol.jpg",
        restaurant: "Traditional Tastes"
    },
    {
        id: 5,
        title: "Chatamari",
        description: "Chatamari, often referred to as 'Nepali Pizza,' is a type of thin, crispy crepe made from rice flour. It is topped with a variety of ingredients such as minced meat, eggs, and vegetables, then cooked until the edges are crispy. Chatamari is a popular snack or appetizer, known for its versatility and delicious flavors. It is often served with spicy chutney or pickles.",
        price: 6.99,
        picture: "https://newarirecipeshut.com/wp-content/uploads/2020/09/chatamari-768x512.jpg",
        restaurant: "Kathmandu Snacks"
    },
    {
        id: 6,
        title: "Aloo Tama",
        description: "Aloo Tama is a traditional Nepali curry made with potatoes (aloo), bamboo shoots (tama), and black-eyed peas. The dish is cooked in a tangy and spicy tomato-based sauce, flavored with garlic, ginger, and various spices. The combination of tender potatoes, crunchy bamboo shoots, and creamy black-eyed peas makes this curry a flavorful and hearty meal, typically served with rice or roti.",
        price: 8.99,
        picture: "https://www.foodpleasureandhealth.com/wp-content/uploads/2015/10/alooboditama4-768x1141.jpg",
        restaurant: "Nepali Curries"
    },
    {
        id: 7,
        title: "Yomari",
        description: "Yomari is a special delicacy made during the Yomari Punhi festival in Nepal. It is a steamed dumpling made from rice flour dough, filled with sweetened sesame seeds, molasses, or coconut. The dumplings are shaped like fish or birds, symbolizing good fortune. Yomari has a soft and chewy texture with a sweet and rich filling, making it a delightful treat during festive occasions.",
        price: 5.99,
        picture: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*qxg8-N7Bfw7fAmO1",
        restaurant: "Festival Treats"
    },
    {
        id: 8,
        title: "Thukpa",
        description: "Thukpa is a traditional Nepali noodle soup with Tibetan origins, popular in the mountainous regions of Nepal. It is made with hand-pulled noodles, vegetables, and a choice of meat (often chicken or beef) in a flavorful broth. The soup is seasoned with garlic, ginger, and various spices, creating a warm and comforting dish perfect for cold weather. Thukpa is often garnished with fresh cilantro and green onions.",
        price: 9.99,
        picture: "https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg",
        restaurant: "Mountain Delights"
    },
    {
        id: 9,
        title: "Kwati",
        description: "Kwati is a traditional Nepali soup made from a mix of nine different sprouted beans, including black-eyed peas, chickpeas, and mung beans. The beans are cooked in a spiced broth with garlic, ginger, turmeric, and other spices, creating a nutritious and hearty dish. Kwati is traditionally prepared during the festival of Janai Purnima, celebrated in the monsoon season.",
        price: 8.99,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_bowl_of_Kwati.jpg/450px-A_bowl_of_Kwati.jpg",
        restaurant: "Healthy Nepali"
    },
    {
        id: 10,
        title: "Juju Dhau",
        description: "Juju Dhau, also known as 'King Curd,' is a rich and creamy yogurt originating from Bhaktapur, Nepal. It is made from buffalo milk, which gives it a thick and smooth texture. Juju Dhau is often enjoyed as a dessert or a side dish, known for its sweet and tangy flavor. It is traditionally set in clay pots, which help maintain its unique taste and texture.",
        price: 3.99,
        picture: "https://marvelsofnepal.com/wp-content/uploads/2020/09/jujudhau-860x450.jpg?x43086",
        restaurant: "Sweet Treats"
    }
];

export { pizzas, burgers, thaiFoods, nepaliFoods };
