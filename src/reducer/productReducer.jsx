import { ActionTypes as Action} from './../actions/actions'
const initialState = {
    product: [{
        "id": 1,
        "product_name": "Cranberry Foccacia",
        "screen": "AMOLED, 6.2\", Full HD+",
        "operating_system": "Android 2.07",
        "front_camera": "6 MP",
        "rear_camera": "31 MP",
        "ram": "3 GB",
        "rom": "486 GB",
        "price": "15875320",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/241x231.png/cc0000/ffffff",
          "http://dummyimage.com/211x234.jpg/cc0000/ffffff"
        ]
      }, {
        "id": 2,
        "product_name": "Chilli Paste, Hot Sambal Oelek",
        "screen": "AMOLED, 6.6\", Full HD+",
        "operating_system": "Android 4.5",
        "front_camera": "7 MP",
        "rear_camera": "26 MP",
        "ram": "8 GB",
        "rom": "395 GB",
        "price": "2267772",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/209x192.png/dddddd/000000",
          "http://dummyimage.com/250x244.png/ff4444/ffffff"
        ]
      }, {
        "id": 3,
        "product_name": "Avocado",
        "screen": "AMOLED, 6.8\", Full HD+",
        "operating_system": "Android 0.32",
        "front_camera": "9 MP",
        "rear_camera": "39 MP",
        "ram": "7 GB",
        "rom": "388 GB",
        "price": "26922462",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/233x248.png/5fa2dd/ffffff",
          "http://dummyimage.com/190x196.png/dddddd/000000",
          "http://dummyimage.com/214x204.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 4,
        "product_name": "Beef - Top Sirloin - Aaa",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 0.68",
        "front_camera": "6 MP",
        "rear_camera": "9 MP",
        "ram": "7 GB",
        "rom": "122 GB",
        "price": "7410620",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/250x196.png/5fa2dd/ffffff",
          "http://dummyimage.com/220x224.png/ff4444/ffffff"
        ]
      }, {
        "id": 5,
        "product_name": "Vodka - Smirnoff",
        "screen": "AMOLED, 6.5\", Full HD+",
        "operating_system": "Android 5.5",
        "front_camera": "9 MP",
        "rear_camera": "4 MP",
        "ram": "5 GB",
        "rom": "435 GB",
        "price": "34442220",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/224x204.png/cc0000/ffffff"
        ]
      }, {
        "id": 6,
        "product_name": "Cheese - Havarti, Salsa",
        "screen": "AMOLED, 6.0\", Full HD+",
        "operating_system": "Android 1.4",
        "front_camera": "8 MP",
        "rear_camera": "14 MP",
        "ram": "6 GB",
        "rom": "467 GB",
        "price": "9370195",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/229x215.png/cc0000/ffffff"
        ]
      }, {
        "id": 7,
        "product_name": "Cup - 3.5oz, Foam",
        "screen": "AMOLED, 6.6\", Full HD+",
        "operating_system": "Android 9.6",
        "front_camera": "8 MP",
        "rear_camera": "15 MP",
        "ram": "7 GB",
        "rom": "408 GB",
        "price": "22334395",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/196x222.png/ff4444/ffffff"
        ]
      }, {
        "id": 8,
        "product_name": "Vermouth - Sweet, Cinzano",
        "screen": "AMOLED, 6.2\", Full HD+",
        "operating_system": "Android 0.7.1",
        "front_camera": "5 MP",
        "rear_camera": "24 MP",
        "ram": "4 GB",
        "rom": "82 GB",
        "price": "3418147",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/191x206.png/ff4444/ffffff"
        ]
      }, {
        "id": 9,
        "product_name": "Chips Potato All Dressed - 43g",
        "screen": "AMOLED, 6.8\", Full HD+",
        "operating_system": "Android 0.7.3",
        "front_camera": "9 MP",
        "rear_camera": "35 MP",
        "ram": "6 GB",
        "rom": "300 GB",
        "price": "12404068",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/204x244.png/dddddd/000000"
        ]
      }, {
        "id": 10,
        "product_name": "Butter Ripple - Phillips",
        "screen": "AMOLED, 6.5\", Full HD+",
        "operating_system": "Android 2.33",
        "front_camera": "3 MP",
        "rear_camera": "27 MP",
        "ram": "4 GB",
        "rom": "179 GB",
        "price": "31007404",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/210x234.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 11,
        "product_name": "Trueblue - Blueberry 12x473ml",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 0.84",
        "front_camera": "1 MP",
        "rear_camera": "38 MP",
        "ram": "5 GB",
        "rom": "73 GB",
        "price": "3185694",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/194x185.png/cc0000/ffffff"
        ]
      }, {
        "id": 12,
        "product_name": "Wine - White, Ej",
        "screen": "AMOLED, 6.8\", Full HD+",
        "operating_system": "Android 4.0",
        "front_camera": "5 MP",
        "rear_camera": "34 MP",
        "ram": "7 GB",
        "rom": "111 GB",
        "price": "23249274",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/230x221.png/ff4444/ffffff"
        ]
      }, {
        "id": 13,
        "product_name": "Chocolate Bar - Smarties",
        "screen": "AMOLED, 6.2\", Full HD+",
        "operating_system": "Android 6.77",
        "front_camera": "2 MP",
        "rear_camera": "19 MP",
        "ram": "8 GB",
        "rom": "168 GB",
        "price": "28785622",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/220x230.png/cc0000/ffffff"
        ]
      }, {
        "id": 14,
        "product_name": "Chocolate - Mi - Amere Semi",
        "screen": "AMOLED, 6.1\", Full HD+",
        "operating_system": "Android 0.4.8",
        "front_camera": "3 MP",
        "rear_camera": "10 MP",
        "ram": "2 GB",
        "rom": "299 GB",
        "price": "2762252",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/205x187.png/dddddd/000000"
        ]
      }, {
        "id": 15,
        "product_name": "Cake Slab",
        "screen": "AMOLED, 5.7\", Full HD+",
        "operating_system": "Android 0.46",
        "front_camera": "2 MP",
        "rear_camera": "39 MP",
        "ram": "7 GB",
        "rom": "396 GB",
        "price": "14472165",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/211x212.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 16,
        "product_name": "Mix - Cocktail Strawberry Daiquiri",
        "screen": "AMOLED, 6.0\", Full HD+",
        "operating_system": "Android 4.58",
        "front_camera": "10 MP",
        "rear_camera": "32 MP",
        "ram": "6 GB",
        "rom": "142 GB",
        "price": "29243211",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/246x183.png/cc0000/ffffff"
        ]
      }, {
        "id": 17,
        "product_name": "Lobster - Tail 6 Oz",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 9.6",
        "front_camera": "9 MP",
        "rear_camera": "9 MP",
        "ram": "7 GB",
        "rom": "190 GB",
        "price": "22687436",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/181x203.png/dddddd/000000"
        ]
      }, {
        "id": 18,
        "product_name": "Pork - Tenderloin, Fresh",
        "screen": "AMOLED, 5.7\", Full HD+",
        "operating_system": "Android 4.40",
        "front_camera": "10 MP",
        "rear_camera": "23 MP",
        "ram": "5 GB",
        "rom": "85 GB",
        "price": "19702648",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/234x185.png/ff4444/ffffff"
        ]
      }, {
        "id": 19,
        "product_name": "Pumpkin",
        "screen": "AMOLED, 5.6\", Full HD+",
        "operating_system": "Android 9.5.7",
        "front_camera": "2 MP",
        "rear_camera": "38 MP",
        "ram": "8 GB",
        "rom": "400 GB",
        "price": "25457033",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/225x230.png/cc0000/ffffff"
        ]
      }, {
        "id": 20,
        "product_name": "Wine - White, Antinore Orvieto",
        "screen": "AMOLED, 5.5\", Full HD+",
        "operating_system": "Android 0.68",
        "front_camera": "9 MP",
        "rear_camera": "6 MP",
        "ram": "2 GB",
        "rom": "191 GB",
        "price": "21469808",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/225x189.png/dddddd/000000"
        ]
      }, {
        "id": 21,
        "product_name": "Lettuce Romaine Chopped",
        "screen": "AMOLED, 6.2\", Full HD+",
        "operating_system": "Android 7.1",
        "front_camera": "10 MP",
        "rear_camera": "6 MP",
        "ram": "8 GB",
        "rom": "431 GB",
        "price": "21651876",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/181x248.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 22,
        "product_name": "Pomello",
        "screen": "AMOLED, 6.0\", Full HD+",
        "operating_system": "Android 0.12",
        "front_camera": "7 MP",
        "rear_camera": "19 MP",
        "ram": "4 GB",
        "rom": "315 GB",
        "price": "1821501",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/213x233.png/cc0000/ffffff"
        ]
      }, {
        "id": 23,
        "product_name": "Wild Boar - Tenderloin",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 0.3.9",
        "front_camera": "1 MP",
        "rear_camera": "33 MP",
        "ram": "3 GB",
        "rom": "206 GB",
        "price": "10936065",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/185x223.png/cc0000/ffffff"
        ]
      }, {
        "id": 24,
        "product_name": "Cookie Dough - Double",
        "screen": "AMOLED, 6.8\", Full HD+",
        "operating_system": "Android 8.1.4",
        "front_camera": "2 MP",
        "rear_camera": "24 MP",
        "ram": "6 GB",
        "rom": "380 GB",
        "price": "9287282",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/194x226.png/ff4444/ffffff"
        ]
      }, {
        "id": 25,
        "product_name": "The Pop Shoppe - Cream Soda",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 5.91",
        "front_camera": "8 MP",
        "rear_camera": "17 MP",
        "ram": "7 GB",
        "rom": "365 GB",
        "price": "30559353",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/221x180.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 26,
        "product_name": "Cherries - Frozen",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 0.5.6",
        "front_camera": "6 MP",
        "rear_camera": "38 MP",
        "ram": "5 GB",
        "rom": "237 GB",
        "price": "20560430",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/214x189.png/dddddd/000000"
        ]
      }, {
        "id": 27,
        "product_name": "Wine - Red, Pelee Island Merlot",
        "screen": "AMOLED, 5.8\", Full HD+",
        "operating_system": "Android 7.7",
        "front_camera": "8 MP",
        "rear_camera": "11 MP",
        "ram": "2 GB",
        "rom": "215 GB",
        "price": "21795037",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/238x225.png/cc0000/ffffff"
        ]
      }, {
        "id": 28,
        "product_name": "Extract - Vanilla,artificial",
        "screen": "AMOLED, 5.7\", Full HD+",
        "operating_system": "Android 0.4.3",
        "front_camera": "7 MP",
        "rear_camera": "32 MP",
        "ram": "6 GB",
        "rom": "342 GB",
        "price": "30047079",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/183x188.png/ff4444/ffffff"
        ]
      }, {
        "id": 29,
        "product_name": "Dish Towel",
        "screen": "AMOLED, 6.4\", Full HD+",
        "operating_system": "Android 0.69",
        "front_camera": "6 MP",
        "rear_camera": "39 MP",
        "ram": "4 GB",
        "rom": "324 GB",
        "price": "7410514",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/250x190.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 30,
        "product_name": "Pasta - Shells, Medium, Dry",
        "screen": "AMOLED, 6.7\", Full HD+",
        "operating_system": "Android 1.6.5",
        "front_camera": "1 MP",
        "rear_camera": "26 MP",
        "ram": "1 GB",
        "rom": "312 GB",
        "price": "32663195",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/214x201.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 31,
        "product_name": "Stock - Veal, White",
        "screen": "AMOLED, 6.6\", Full HD+",
        "operating_system": "Android 9.35",
        "front_camera": "3 MP",
        "rear_camera": "10 MP",
        "ram": "4 GB",
        "rom": "122 GB",
        "price": "20862038",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/196x236.png/dddddd/000000"
        ]
      }, {
        "id": 32,
        "product_name": "Fruit Mix - Light",
        "screen": "AMOLED, 6.6\", Full HD+",
        "operating_system": "Android 9.4",
        "front_camera": "6 MP",
        "rear_camera": "4 MP",
        "ram": "8 GB",
        "rom": "248 GB",
        "price": "26899735",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/250x243.png/cc0000/ffffff"
        ]
      }, {
        "id": 33,
        "product_name": "Lettuce - Radicchio",
        "screen": "AMOLED, 6.6\", Full HD+",
        "operating_system": "Android 8.5.1",
        "front_camera": "8 MP",
        "rear_camera": "39 MP",
        "ram": "1 GB",
        "rom": "441 GB",
        "price": "17020456",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/218x198.png/ff4444/ffffff"
        ]
      }, {
        "id": 34,
        "product_name": "Pastry - Raisin Muffin - Mini",
        "screen": "AMOLED, 6.5\", Full HD+",
        "operating_system": "Android 5.7",
        "front_camera": "1 MP",
        "rear_camera": "23 MP",
        "ram": "1 GB",
        "rom": "370 GB",
        "price": "16601099",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/246x183.png/cc0000/ffffff"
        ]
      }, {
        "id": 35,
        "product_name": "Glass - Wine, Plastic, Clear 5 Oz",
        "screen": "AMOLED, 5.7\", Full HD+",
        "operating_system": "Android 0.79",
        "front_camera": "2 MP",
        "rear_camera": "25 MP",
        "ram": "5 GB",
        "rom": "92 GB",
        "price": "15221560",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/227x226.png/dddddd/000000"
        ]
      }, {
        "id": 36,
        "product_name": "Cocktail Napkin Blue",
        "screen": "AMOLED, 6.6\", Full HD+",
        "operating_system": "Android 4.5.2",
        "front_camera": "5 MP",
        "rear_camera": "13 MP",
        "ram": "1 GB",
        "rom": "335 GB",
        "price": "8202164",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/250x243.png/cc0000/ffffff"
        ]
      }, {
        "id": 37,
        "product_name": "Cookies - Englishbay Oatmeal",
        "screen": "AMOLED, 6.2\", Full HD+",
        "operating_system": "Android 7.7.0",
        "front_camera": "8 MP",
        "rear_camera": "4 MP",
        "ram": "2 GB",
        "rom": "82 GB",
        "price": "7709619",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/216x212.png/5fa2dd/ffffff"
        ]
      }, {
        "id": 38,
        "product_name": "Bread - Bagels, Plain",
        "screen": "AMOLED, 6.4\", Full HD+",
        "operating_system": "Android 2.7",
        "front_camera": "2 MP",
        "rear_camera": "18 MP",
        "ram": "3 GB",
        "rom": "295 GB",
        "price": "11701992",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/205x187.png/dddddd/000000"
        ]
      }, {
        "id": 39,
        "product_name": "Chinese Foods - Chicken Wing",
        "screen": "AMOLED, 6.5\", Full HD+",
        "operating_system": "Android 0.41",
        "front_camera": "1 MP",
        "rear_camera": "32 MP",
        "ram": "4 GB",
        "rom": "359 GB",
        "price": "19749169",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/210x225.png/cc0000/ffffff"
        ]
      }, {
        "id": 40,
        "product_name": "Peas - Pigeon, Dry",
        "screen": "AMOLED, 6.4\", Full HD+",
        "operating_system": "Android 0.92",
        "front_camera": "9 MP",
        "rear_camera": "35 MP",
        "ram": "8 GB",
        "rom": "442 GB",
        "price": "30468526",
        "rate": 4.3,
        "image": [
          "http://dummyimage.com/217x220.png/ff4444/ffffff"
        ]
      }],
    detail: {},
    cart: [],
    total: null
};

export const ProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case Action.VIEW_DETAIL: 
      const detail = action.payload;
      return {...state, detail};
    default: 
      break;
  }
    return {...state}
}