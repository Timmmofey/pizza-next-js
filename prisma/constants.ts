export const categories = [
    {
        name : "Пиццы" 
    },
    {
        name : "Завтрак" 
    },
    {
        name : "Комбо"
    },
    {
        name : "Закуски" 
    },
    {
        name : "Коктейли" 
    },
    {
        name : "Кофе" 
    },
    {
        name : "Напитки" 
    },
    {
        name : "Десерты" 
    },
]

export const ingredients = [
    {
      name: 'Сырный бортик',
      price: 179,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
      name: 'Сливочная моцарелла',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
      name: 'Сыры чеддер и пармезан',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
      name: 'Острый перец халапеньо',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
      name: 'Нежный цыпленок',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
      name: 'Шампиньоны',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
      name: 'Бекон',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    },
    {
      name: 'Ветчина',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
      name: 'Пикантная пепперони',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
      name: 'Острая чоризо',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
      name: 'Маринованные огурчики',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
      name: 'Свежие томаты',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
      name: 'Красный лук',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
      name: 'Сочные ананасы',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
      name: 'Итальянские травы',
      price: 39,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
      name: 'Сладкий перец',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
      name: 'Кубики брынзы',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
      name: 'Митболы',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
  ].map((obj, index) => ({id: (index + 1), ...obj}))

export const products = [
    {
        name: 'Омлет с ветчиной и грибами',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif',
        categoryId: 2
    },

    {
        name: 'Омлет с беконом',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
        categoryId: 2
    },

    {
        name: 'Омлет с пепперони',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
        categoryId: 2
    },

    {
        name: 'Комбо Леди Баг и Супер-Кота',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF6A6B5074D71BF2A6750A7C0D927.avif',
        categoryId: 3
    },

    {
        name: 'Додо Бокс',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF08011FCB1101A05951AE2633C593.avif',
        categoryId: 3
    },

    {
        name: 'Детское комбо',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF0800EABCBB7281BBB6BA0865D958.avif',
        categoryId: 3
    },

    {
        name: 'Паста Песто',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797019062658A437457F8E1D5887.avif',
        categoryId: 4
    },

    {
        name: 'Супермясной Додстер',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797022F9AD72AC34E1B01DC6AEBA.avif',
        categoryId: 4
    },

    {
        name: 'Сырный Стартер',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF5E59E9886151E9F9A48BB1A.avif',
        categoryId: 4
    },

    {
        name: 'Молочный коктейль Ежевика-малина',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEB92C801211CBAF91BB30F77568C5.avif',
        categoryId: 5
    },

    {
        name: 'Молочный коктейль Пина Колада',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
        categoryId: 5
    },

    {
        name: 'Молочный коктейль с печеньем Орео',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.avif',
        categoryId: 5
    },

    {
        name: 'Кофе Карамельный капучино',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
        categoryId: 6
    },

    {
        name: 'Кофе Кокосовый латте',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.avif',
        categoryId: 6
    },

    {
        name: 'Какао',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif',
        categoryId: 7
    }, 

    {
        name: 'Апельсиновый сок Rich',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B223E75EB71498BCAA0D4A0D.avif',
        categoryId: 7
    }, 

    {
        name: 'Морс Вишня',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EECF74FAE2444096FB156C2A13D05F.avif',
        categoryId: 7
    }, 

    {
        name: 'Сорбет Лимонный фреш',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF02702EEF6FD9BB2AB771DB0535BD.avif',
        categoryId: 8
    }, 

    {
        name: 'Чизкейк Нью-Йорк с кокосом',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79700C641CDFA7205D59209744E3.avif',
        categoryId: 8
    }, 

    {
        name: 'Слоеные палочки с ананасами и брусникой',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FFF9F5E6EB14E281FC5F491EC.avif',
        categoryId: 8
    }, 

    {
        name: 'Эклеры-мини с заварным кремом',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79700F38499EB84A872F5412DA3F.avif',
        categoryId: 8
    }, 

    {
        name: 'Чизкейк Нью-Йорк',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B6B6EC471AB74AB8F8885775B.avif',
        categoryId: 8 
    }, 


]