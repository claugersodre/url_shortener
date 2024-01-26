const sequelize = require('../src/utils/database')

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.bulkInsert('Urls',
      [
        {
          short: 'https://www.bluecoding.com/b',
          url: 'https://www.randomurl.com/watch?v=1',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/c',
          url: 'https://www.randomurl.com/watch?v=2',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/d',
          url: 'https://www.randomurl.com/watch?v=3',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/e',
          url: 'https://www.randomurl.com/watch?v=4',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/f',
          url: 'https://www.randomurl.com/watch?v=5',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/g',
          url: 'https://www.randomurl.com/watch?v=6',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/h',
          url: 'https://www.randomurl.com/watch?v=7',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/i',
          url: 'https://www.randomurl.com/watch?v=8',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/j',
          url: 'https://www.randomurl.com/watch?v=9',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/k',
          url: 'https://www.randomurl.com/watch?v=10',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/l',
          url: 'https://www.randomurl.com/watch?v=11',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/m',
          url: 'https://www.randomurl.com/watch?v=12',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/n',
          url: 'https://www.randomurl.com/watch?v=13',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/o',
          url: 'https://www.randomurl.com/watch?v=14',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/p',
          url: 'https://www.randomurl.com/watch?v=15',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/q',
          url: 'https://www.randomurl.com/watch?v=16',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/r',
          url: 'https://www.randomurl.com/watch?v=17',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/s',
          url: 'https://www.randomurl.com/watch?v=18',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/t',
          url: 'https://www.randomurl.com/watch?v=19',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/u',
          url: 'https://www.randomurl.com/watch?v=20',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/v',
          url: 'https://www.randomurl.com/watch?v=21',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/w',
          url: 'https://www.randomurl.com/watch?v=22',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/x',
          url: 'https://www.randomurl.com/watch?v=23',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/y',
          url: 'https://www.randomurl.com/watch?v=24',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/z',
          url: 'https://www.randomurl.com/watch?v=25',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/A',
          url: 'https://www.randomurl.com/watch?v=26',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/B',
          url: 'https://www.randomurl.com/watch?v=27',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/C',
          url: 'https://www.randomurl.com/watch?v=28',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/D',
          url: 'https://www.randomurl.com/watch?v=29',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/E',
          url: 'https://www.randomurl.com/watch?v=30',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/F',
          url: 'https://www.randomurl.com/watch?v=31',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/G',
          url: 'https://www.randomurl.com/watch?v=32',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/H',
          url: 'https://www.randomurl.com/watch?v=33',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/I',
          url: 'https://www.randomurl.com/watch?v=34',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/J',
          url: 'https://www.randomurl.com/watch?v=35',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/K',
          url: 'https://www.randomurl.com/watch?v=36',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/L',
          url: 'https://www.randomurl.com/watch?v=37',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/M',
          url: 'https://www.randomurl.com/watch?v=38',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/N',
          url: 'https://www.randomurl.com/watch?v=39',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/O',
          url: 'https://www.randomurl.com/watch?v=40',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/P',
          url: 'https://www.randomurl.com/watch?v=41',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/Q',
          url: 'https://www.randomurl.com/watch?v=42',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/R',
          url: 'https://www.randomurl.com/watch?v=43',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/S',
          url: 'https://www.randomurl.com/watch?v=44',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/T',
          url: 'https://www.randomurl.com/watch?v=45',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/U',
          url: 'https://www.randomurl.com/watch?v=46',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/V',
          url: 'https://www.randomurl.com/watch?v=47',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/W',
          url: 'https://www.randomurl.com/watch?v=48',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/X',
          url: 'https://www.randomurl.com/watch?v=49',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/Y',
          url: 'https://www.randomurl.com/watch?v=50',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/Z',
          url: 'https://www.randomurl.com/watch?v=51',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/0',
          url: 'https://www.randomurl.com/watch?v=52',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/1',
          url: 'https://www.randomurl.com/watch?v=53',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/2',
          url: 'https://www.randomurl.com/watch?v=54',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/3',
          url: 'https://www.randomurl.com/watch?v=55',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/4',
          url: 'https://www.randomurl.com/watch?v=56',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/5',
          url: 'https://www.randomurl.com/watch?v=57',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/6',
          url: 'https://www.randomurl.com/watch?v=58',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/7',
          url: 'https://www.randomurl.com/watch?v=59',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/8',
          url: 'https://www.randomurl.com/watch?v=60',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/9',
          url: 'https://www.randomurl.com/watch?v=61',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/ba',
          url: 'https://www.randomurl.com/watch?v=62',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bb',
          url: 'https://www.randomurl.com/watch?v=63',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bc',
          url: 'https://www.randomurl.com/watch?v=64',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bd',
          url: 'https://www.randomurl.com/watch?v=65',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/be',
          url: 'https://www.randomurl.com/watch?v=66',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bf',
          url: 'https://www.randomurl.com/watch?v=67',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bg',
          url: 'https://www.randomurl.com/watch?v=68',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bh',
          url: 'https://www.randomurl.com/watch?v=69',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bi',
          url: 'https://www.randomurl.com/watch?v=70',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bj',
          url: 'https://www.randomurl.com/watch?v=71',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bk',
          url: 'https://www.randomurl.com/watch?v=72',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bl',
          url: 'https://www.randomurl.com/watch?v=73',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bm',
          url: 'https://www.randomurl.com/watch?v=74',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bn',
          url: 'https://www.randomurl.com/watch?v=75',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bo',
          url: 'https://www.randomurl.com/watch?v=76',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bp',
          url: 'https://www.randomurl.com/watch?v=77',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bq',
          url: 'https://www.randomurl.com/watch?v=78',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/br',
          url: 'https://www.randomurl.com/watch?v=79',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bs',
          url: 'https://www.randomurl.com/watch?v=80',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bt',
          url: 'https://www.randomurl.com/watch?v=81',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bu',
          url: 'https://www.randomurl.com/watch?v=82',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bv',
          url: 'https://www.randomurl.com/watch?v=83',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bw',
          url: 'https://www.randomurl.com/watch?v=84',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bx',
          url: 'https://www.randomurl.com/watch?v=85',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/by',
          url: 'https://www.randomurl.com/watch?v=86',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bz',
          url: 'https://www.randomurl.com/watch?v=87',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bA',
          url: 'https://www.randomurl.com/watch?v=88',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bB',
          url: 'https://www.randomurl.com/watch?v=89',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bC',
          url: 'https://www.randomurl.com/watch?v=90',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bD',
          url: 'https://www.randomurl.com/watch?v=91',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bE',
          url: 'https://www.randomurl.com/watch?v=92',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bF',
          url: 'https://www.randomurl.com/watch?v=93',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bG',
          url: 'https://www.randomurl.com/watch?v=94',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bH',
          url: 'https://www.randomurl.com/watch?v=95',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bI',
          url: 'https://www.randomurl.com/watch?v=96',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bJ',
          url: 'https://www.randomurl.com/watch?v=97',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bK',
          url: 'https://www.randomurl.com/watch?v=98',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          short: 'https://www.bluecoding.com/bL',
          url: 'https://www.randomurl.com/watch?v=99',
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
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