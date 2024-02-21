export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  img3: string;
  url: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple AirPods 3',
    price: 200,
    description:
      'The Apple Airpods 3 customizable fit with three sizes of ear tips, adaptive EQ, sweat and water resistance ',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hc8/64341971140638.jpg?format=gallery-large',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h67/hb0/64341974220830.jpg?format=gallery-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
    rating: 5,
  },
  {
    id: 2,
    name: 'Smart column Yandex Station Light purple',
    price: 60,
    description:
      'Yandex.Station Light is a bright and compact smart speaker that is controlled by voice and touch buttons. It will decorate the interior and will be able to entertain the child',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h05/64362960617502.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-fioletovyi-101870266/?c=750000000',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Toaster Smeg beige',
    price: 220,
    description: 'Stylish, high-quality toaster',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h50/h97/65798105104414.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/he4/h88/65798105169950.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h4d/65798105235486.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/smeg-tsf01creu-bezhevyi-11000154/?c=750000000',
    rating: 5,
  },
  {
    id: 4,
    name: 'Apple AirPods Max blue',
    price: 605,
    description:
      'The Apple Earpods Max Bluetooth headset will be able to completely change your idea of full-size headphones.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h11/64019769753630.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h72/64019772047390.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h41/hce/64019776307230.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-airpods-max-rozovyi-101161561/?c=750000000',
    rating: 5,
  },
  {
    id: 5,
    name: 'Apple iPad 2022 blue',
    price: 500,
    description:
      'Apple Ipad offering improvements for both the performance and efficiency cores',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-ipad-2022-wi-fi-10-9-djuim-4-gb-64-gb-sinii-107266637/?c=750000000',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Sneakers Adidas Gazelle blue ',
    price: 300,
    description:
      'Take your look in a new direction in sneakers with classic style or fresh new looks.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h6b/hde/85108483719198.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h08/85108484112414.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h10/85108484440094.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/adidas-gazelle-ig0456-sinii-35-5-116466838/?c=750000000',
    rating: 4.4,
  },
  {
    id: 7,
    name: 'Rare Beauty Positive Light Silky Touch Highlighter',
    price: 60,
    description:
      'A silky, second-skin liquid highlighter that creates an instantly dewy, buildable glow while also nourishing skin so it looks on the bright side all day.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/hc6/81254660046878.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/hc6/81254660046878.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/hc6/81254660046878.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/rare-beauty-positive-light-silky-touch-hailaiter-exhilarate-110844206/?c=750000000',
    rating: 5,
  },
  {
    id: 8,
    name: 'Xiaomi Mi Smart Sterilization Humidifier ',
    price: 70,
    description:
      'High level UV sterilization, water purification to produce healthier mist.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h4b/84683763843102.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h01/84683763974174.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h2d/85074124144670.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-xiaomi-mi-smart-sterilization-humidifier-s-mjjsq03dy-belyi-101155587/?c=750000000',
    rating: 4,
  },
  {
    id: 9,
    name: 'Canon PowerShot G7X ',
    price: 1085,
    description:
      'Excellent autofocus, high performance in low light, 40fps continuous shooting.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h76/63758981627934.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h98/hec/63758982676510.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000',
    rating: 5,
  },
  {
    id: 10,
    name: 'Bag baguette Charles & Keith',
    price: 165,
    description:
      'Perfectly on-trend and practical, CHARLES & KEITHs bags will match any look.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h51/82713035407390.jpg?format=gallery-large',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/hb5/82713037078558.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h29/82713040551966.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/sumka-baget-charles-keith-402623-ekokozha-iskusstvennaja-kozha-korichnevyi-112436300/?c=750000000',
    rating: 5,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
