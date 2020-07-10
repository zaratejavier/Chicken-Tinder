restaurants = [
            {
                name: 'Earnies', 
                cuisine: 'sandwhiches', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'The Champ', price: '$6.75', description:'sausage egg and cheese on a kaiser roll' }]
            },
            {
                name: 'Bombay House', 
                cuisine: 'Indian', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Chicken Tiki Masala', price: '$10.75', description:'a classic indian chicken dish with light curry and rice' }]
            },
            {
                name: 'Good Thyme', 
                cuisine: 'health food', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Tri tip', price: '$7.15', description:'a fine cut of steak with argentina chim churri sauce' }]
            },
            {
                name: 'Maria Bonitas', 
                cuisine: 'Mexican', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Flautas', price: '$13.00', description:'cooked chicken or steak wrapped in a tortilla and deep fried' }]
            },
            {
                name: 'Five Sushi Bros', 
                cuisine: 'Sushi', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Angry Bro', price: '$9.00', description:'tempura shrimp and avacado center, layered with yellowtail tuna, topped with tobiko' }]
            },
            {
                name: 'Black Sheep Cafe', 
                cuisine: 'Modern American', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'The Champ', price: '$6.75', description:'sausage egg and cheese on a kaiser roll' }]
            },
            {
                name: 'Station 22', 
                cuisine: 'Southern', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Whiskey Chicken', price: '$13.00', description:'Mashed Potatoes, gravy, fried chicken, seasonal vegatables, whiskey sauce and mushrooms' }]
            },
            {
                name: 'Chillis', 
                cuisine: 'American', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Honey Chipotle Chicken Crispers', price: '$11.15', description:'fried chicken in a honey chipotle chicken glaze' }]
            },
            {
                name: 'Two Jacks Pizza', 
                cuisine: 'Pizza', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: '14 Inch Cheese Pizza', price: '$14.93', description:'Large pizza dough smother high with our secret morazella blend' }]
            },
            {
                name: 'Brick Oven', 
                cuisine: 'Italian', 
                image: '',
                likedCount: 0, 
                menuItems: [ {name: 'Chicken Parmesan', price: '$11.22', description:'tender hand-breaded chicken breast topped with melted provolone cheese, served with spaghetti marinara' }]
            }
        ]

restaurants.each do |r|
  Restaurant.create(name: r[:name], cuisine: r[:cuisine], image: r[:image], menu_items: r[:menuItems])
end

puts "seeded"

