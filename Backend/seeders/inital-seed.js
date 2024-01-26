const sequelize = require('../src/utils/database')

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.bulkInsert('Urls',
      [
        {
          id: 1,
          short: 'https://www.bluecoding.com/b',
          url: 'https://www.randomurl.com/watch?v=1',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          short: 'https://www.bluecoding.com/c',
          url: 'https://www.randomurl.com/watch?v=2',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          short: 'https://www.bluecoding.com/d',
          url: 'https://www.randomurl.com/watch?v=3',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          short: 'https://www.bluecoding.com/e',
          url: 'https://www.randomurl.com/watch?v=4',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          short: 'https://www.bluecoding.com/f',
          url: 'https://www.randomurl.com/watch?v=5',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          short: 'https://www.bluecoding.com/g',
          url: 'https://www.randomurl.com/watch?v=6',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          short: 'https://www.bluecoding.com/h',
          url: 'https://www.randomurl.com/watch?v=7',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          short: 'https://www.bluecoding.com/i',
          url: 'https://www.randomurl.com/watch?v=8',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          short: 'https://www.bluecoding.com/j',
          url: 'https://www.randomurl.com/watch?v=9',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          short: 'https://www.bluecoding.com/k',
          url: 'https://www.randomurl.com/watch?v=10',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          short: 'https://www.bluecoding.com/l',
          url: 'https://www.randomurl.com/watch?v=11',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          short: 'https://www.bluecoding.com/m',
          url: 'https://www.randomurl.com/watch?v=12',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          short: 'https://www.bluecoding.com/n',
          url: 'https://www.randomurl.com/watch?v=13',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          short: 'https://www.bluecoding.com/o',
          url: 'https://www.randomurl.com/watch?v=14',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          short: 'https://www.bluecoding.com/p',
          url: 'https://www.randomurl.com/watch?v=15',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          short: 'https://www.bluecoding.com/q',
          url: 'https://www.randomurl.com/watch?v=16',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          short: 'https://www.bluecoding.com/r',
          url: 'https://www.randomurl.com/watch?v=17',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          short: 'https://www.bluecoding.com/s',
          url: 'https://www.randomurl.com/watch?v=18',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          short: 'https://www.bluecoding.com/t',
          url: 'https://www.randomurl.com/watch?v=19',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          short: 'https://www.bluecoding.com/u',
          url: 'https://www.randomurl.com/watch?v=20',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          short: 'https://www.bluecoding.com/v',
          url: 'https://www.randomurl.com/watch?v=21',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          short: 'https://www.bluecoding.com/w',
          url: 'https://www.randomurl.com/watch?v=22',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          short: 'https://www.bluecoding.com/x',
          url: 'https://www.randomurl.com/watch?v=23',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 24,
          short: 'https://www.bluecoding.com/y',
          url: 'https://www.randomurl.com/watch?v=24',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 25,
          short: 'https://www.bluecoding.com/z',
          url: 'https://www.randomurl.com/watch?v=25',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 26,
          short: 'https://www.bluecoding.com/A',
          url: 'https://www.randomurl.com/watch?v=26',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 27,
          short: 'https://www.bluecoding.com/B',
          url: 'https://www.randomurl.com/watch?v=27',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 28,
          short: 'https://www.bluecoding.com/C',
          url: 'https://www.randomurl.com/watch?v=28',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 29,
          short: 'https://www.bluecoding.com/D',
          url: 'https://www.randomurl.com/watch?v=29',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 30,
          short: 'https://www.bluecoding.com/E',
          url: 'https://www.randomurl.com/watch?v=30',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 31,
          short: 'https://www.bluecoding.com/F',
          url: 'https://www.randomurl.com/watch?v=31',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 32,
          short: 'https://www.bluecoding.com/G',
          url: 'https://www.randomurl.com/watch?v=32',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 33,
          short: 'https://www.bluecoding.com/H',
          url: 'https://www.randomurl.com/watch?v=33',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 34,
          short: 'https://www.bluecoding.com/I',
          url: 'https://www.randomurl.com/watch?v=34',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 35,
          short: 'https://www.bluecoding.com/J',
          url: 'https://www.randomurl.com/watch?v=35',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 36,
          short: 'https://www.bluecoding.com/K',
          url: 'https://www.randomurl.com/watch?v=36',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 37,
          short: 'https://www.bluecoding.com/L',
          url: 'https://www.randomurl.com/watch?v=37',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 38,
          short: 'https://www.bluecoding.com/M',
          url: 'https://www.randomurl.com/watch?v=38',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 39,
          short: 'https://www.bluecoding.com/N',
          url: 'https://www.randomurl.com/watch?v=39',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 40,
          short: 'https://www.bluecoding.com/O',
          url: 'https://www.randomurl.com/watch?v=40',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 41,
          short: 'https://www.bluecoding.com/P',
          url: 'https://www.randomurl.com/watch?v=41',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 42,
          short: 'https://www.bluecoding.com/Q',
          url: 'https://www.randomurl.com/watch?v=42',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 43,
          short: 'https://www.bluecoding.com/R',
          url: 'https://www.randomurl.com/watch?v=43',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 44,
          short: 'https://www.bluecoding.com/S',
          url: 'https://www.randomurl.com/watch?v=44',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 45,
          short: 'https://www.bluecoding.com/T',
          url: 'https://www.randomurl.com/watch?v=45',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 46,
          short: 'https://www.bluecoding.com/U',
          url: 'https://www.randomurl.com/watch?v=46',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 47,
          short: 'https://www.bluecoding.com/V',
          url: 'https://www.randomurl.com/watch?v=47',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 48,
          short: 'https://www.bluecoding.com/W',
          url: 'https://www.randomurl.com/watch?v=48',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 49,
          short: 'https://www.bluecoding.com/X',
          url: 'https://www.randomurl.com/watch?v=49',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 50,
          short: 'https://www.bluecoding.com/Y',
          url: 'https://www.randomurl.com/watch?v=50',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 51,
          short: 'https://www.bluecoding.com/Z',
          url: 'https://www.randomurl.com/watch?v=51',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 52,
          short: 'https://www.bluecoding.com/0',
          url: 'https://www.randomurl.com/watch?v=52',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 53,
          short: 'https://www.bluecoding.com/1',
          url: 'https://www.randomurl.com/watch?v=53',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 54,
          short: 'https://www.bluecoding.com/2',
          url: 'https://www.randomurl.com/watch?v=54',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 55,
          short: 'https://www.bluecoding.com/3',
          url: 'https://www.randomurl.com/watch?v=55',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 56,
          short: 'https://www.bluecoding.com/4',
          url: 'https://www.randomurl.com/watch?v=56',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 57,
          short: 'https://www.bluecoding.com/5',
          url: 'https://www.randomurl.com/watch?v=57',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 58,
          short: 'https://www.bluecoding.com/6',
          url: 'https://www.randomurl.com/watch?v=58',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 59,
          short: 'https://www.bluecoding.com/7',
          url: 'https://www.randomurl.com/watch?v=59',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 60,
          short: 'https://www.bluecoding.com/8',
          url: 'https://www.randomurl.com/watch?v=60',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 61,
          short: 'https://www.bluecoding.com/9',
          url: 'https://www.randomurl.com/watch?v=61',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 62,
          short: 'https://www.bluecoding.com/ba',
          url: 'https://www.randomurl.com/watch?v=62',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 63,
          short: 'https://www.bluecoding.com/bb',
          url: 'https://www.randomurl.com/watch?v=63',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 64,
          short: 'https://www.bluecoding.com/bc',
          url: 'https://www.randomurl.com/watch?v=64',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 65,
          short: 'https://www.bluecoding.com/bd',
          url: 'https://www.randomurl.com/watch?v=65',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 66,
          short: 'https://www.bluecoding.com/be',
          url: 'https://www.randomurl.com/watch?v=66',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 67,
          short: 'https://www.bluecoding.com/bf',
          url: 'https://www.randomurl.com/watch?v=67',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 68,
          short: 'https://www.bluecoding.com/bg',
          url: 'https://www.randomurl.com/watch?v=68',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 69,
          short: 'https://www.bluecoding.com/bh',
          url: 'https://www.randomurl.com/watch?v=69',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 70,
          short: 'https://www.bluecoding.com/bi',
          url: 'https://www.randomurl.com/watch?v=70',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 71,
          short: 'https://www.bluecoding.com/bj',
          url: 'https://www.randomurl.com/watch?v=71',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 72,
          short: 'https://www.bluecoding.com/bk',
          url: 'https://www.randomurl.com/watch?v=72',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 73,
          short: 'https://www.bluecoding.com/bl',
          url: 'https://www.randomurl.com/watch?v=73',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 74,
          short: 'https://www.bluecoding.com/bm',
          url: 'https://www.randomurl.com/watch?v=74',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 75,
          short: 'https://www.bluecoding.com/bn',
          url: 'https://www.randomurl.com/watch?v=75',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 76,
          short: 'https://www.bluecoding.com/bo',
          url: 'https://www.randomurl.com/watch?v=76',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 77,
          short: 'https://www.bluecoding.com/bp',
          url: 'https://www.randomurl.com/watch?v=77',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 78,
          short: 'https://www.bluecoding.com/bq',
          url: 'https://www.randomurl.com/watch?v=78',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 79,
          short: 'https://www.bluecoding.com/br',
          url: 'https://www.randomurl.com/watch?v=79',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 80,
          short: 'https://www.bluecoding.com/bs',
          url: 'https://www.randomurl.com/watch?v=80',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 81,
          short: 'https://www.bluecoding.com/bt',
          url: 'https://www.randomurl.com/watch?v=81',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 82,
          short: 'https://www.bluecoding.com/bu',
          url: 'https://www.randomurl.com/watch?v=82',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 83,
          short: 'https://www.bluecoding.com/bv',
          url: 'https://www.randomurl.com/watch?v=83',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 84,
          short: 'https://www.bluecoding.com/bw',
          url: 'https://www.randomurl.com/watch?v=84',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 85,
          short: 'https://www.bluecoding.com/bx',
          url: 'https://www.randomurl.com/watch?v=85',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 86,
          short: 'https://www.bluecoding.com/by',
          url: 'https://www.randomurl.com/watch?v=86',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 87,
          short: 'https://www.bluecoding.com/bz',
          url: 'https://www.randomurl.com/watch?v=87',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 88,
          short: 'https://www.bluecoding.com/bA',
          url: 'https://www.randomurl.com/watch?v=88',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 89,
          short: 'https://www.bluecoding.com/bB',
          url: 'https://www.randomurl.com/watch?v=89',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 90,
          short: 'https://www.bluecoding.com/bC',
          url: 'https://www.randomurl.com/watch?v=90',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 91,
          short: 'https://www.bluecoding.com/bD',
          url: 'https://www.randomurl.com/watch?v=91',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 92,
          short: 'https://www.bluecoding.com/bE',
          url: 'https://www.randomurl.com/watch?v=92',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 93,
          short: 'https://www.bluecoding.com/bF',
          url: 'https://www.randomurl.com/watch?v=93',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 94,
          short: 'https://www.bluecoding.com/bG',
          url: 'https://www.randomurl.com/watch?v=94',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 95,
          short: 'https://www.bluecoding.com/bH',
          url: 'https://www.randomurl.com/watch?v=95',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 96,
          short: 'https://www.bluecoding.com/bI',
          url: 'https://www.randomurl.com/watch?v=96',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 97,
          short: 'https://www.bluecoding.com/bJ',
          url: 'https://www.randomurl.com/watch?v=97',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 98,
          short: 'https://www.bluecoding.com/bK',
          url: 'https://www.randomurl.com/watch?v=98',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 99,
          short: 'https://www.bluecoding.com/bL',
          url: 'https://www.randomurl.com/watch?v=99',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 100,
          short: 'https://www.bluecoding.com/bM',
          url: 'https://www.randomurl.com/watch?v=100',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}