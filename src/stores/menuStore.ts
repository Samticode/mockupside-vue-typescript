import { defineStore } from 'pinia'

export interface MenuItem {
  pic: string
  name: string
  description: string
  price: string
}

export const useMenuStore = defineStore('menu', {
  state: (): { menuItems: MenuItem[][] } => ({
    menuItems: [
      [
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Loaded Nachos',
          description:
            'Cripsy tortilla chips topped with melted chese, ground beef or shredded chicken, diced tomatoes.',
          price: '$2.80'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Chicken Wings',
          description:
            'Crispy chicken wings tossed in your choice of sauce. Served with celery sticks and ranch dressing.',
          price: '$3.50'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Cheeseburger',
          description:
            'A classic cheeseburger with lettuce, tomato, pickles, onions, and your choice of cheese.',
          price: '$4.50'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Spaghetti and Meatballs',
          description:
            'Spaghetti noodles topped with marinara sauce and homemade meatballs. Served with garlic bread.',
          price: '$5.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Chocolate Cake',
          description:
            'A rich and moist chocolate cake topped with chocolate frosting and chocolate shavings.',
          price: '$2.50'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Iced Tea',
          description: 'A refreshing glass of iced tea served with a lemon wedge.',
          price: '$1.50'
        }
      ],
      [
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Ribeye Steak',
          description:
            'A juicy ribeye steak cooked to perfection. Served with a baked potato and steamed vegetables.',
          price: '$12.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Grilled Salmon',
          description:
            'A grilled salmon fillet topped with lemon butter sauce. Served with wild rice and asparagus.',
          price: '$10.50'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Chicken Alfredo',
          description:
            'Fettuccine noodles tossed in creamy alfredo sauce with grilled chicken. Served with garlic bread.',
          price: '$9.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Cheese Pizza',
          description: 'A classic cheese pizza with marinara sauce and mozzarella cheese.',
          price: '$8.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Ceaser Salad',
          description:
            'Romaine lettuce topped with parmesan cheese, croutons, and ceaser dressing.',
          price: '$4.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Empanadas',
          description: 'Fried pastries filled with seasoned ground beef, onions, and bell peppers.',
          price: '$3.00'
        }
      ],
      [
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Apple Pie',
          description:
            'A flaky pie crust filled with cinnamon-spiced apples. Served with vanilla ice cream.',
          price: '$3.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Chocolate Chip Cookies',
          description: 'Freshly baked chocolate chip cookies served with a glass of milk.',
          price: '$2.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Cheesecake',
          description: 'A creamy cheesecake topped with your choice of fruit topping.',
          price: '$4.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Brownie Sundae',
          description:
            'A warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.',
          price: '$5.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Peach Cobbler',
          description:
            'A sweet peach cobbler topped with a buttery biscuit crust. Served with vanilla ice cream.',
          price: '$4.50'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Tiramisu',
          description:
            'A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
          price: '$6.00'
        }
      ],
      [
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Coffee',
          description: 'A hot cup of coffee made from freshly ground beans.',
          price: '$2.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Tea',
          description: 'A selection of herbal and black teas served with honey and lemon.',
          price: '$1.50'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Soda',
          description: 'A variety of sodas including cola, lemon-lime, and orange.',
          price: '$1.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Milkshake',
          description: 'A thick and creamy milkshake made with your choice of ice cream flavor.',
          price: '$3.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Smoothie',
          description: 'A refreshing fruit smoothie made with fresh fruit and yogurt.',
          price: '$4.00'
        },
        {
          pic: 'https://via.placeholder.com/150',
          name: 'Beer',
          description: 'A selection of domestic and imported beers.',
          price: '$5.00'
        }
      ]
    ]
  })
})
