var moment = require('moment-timezone'); // require
const Op = require('./models').Sequelize.Op;
let { Product } = require('./models');
console.log(moment("2020-11-12T11:42:00+08:00", "YYYY-MM-DDTHH:mm:ssZ", true) === moment("2020-11-12T11:42:00+08:00", "YYYY-MM-DDTHH:mm:ssZ", true))
// Moment<2020-11-12T11:42:00+08:00> === Moment<2020-11-12T09:12:00+05:30> === 10293857372XXX
//epoch timestamp "1970-01-01T00:00:00Z" 10293857372

// Product.create({
//     name: "Dress 2",
//     expiryAt: moment("2020-11-12T03:42:00Z", "YYYY-MM-DDTHH:mm:ssZ", true)
// }).then(() => {
//     console.log("Good record");
// });

// Product.findOne({
//     name: "Dress"
// }).then(product => {
//     console.log(product.expiryAt);
// })

// Product.findAll({
//     where: {
//         expiryAt: {
//             [Op.lte]: moment("2020-11-12T03:43:00Z", "YYYY-MM-DDTHH:mm:ssZ", true)
//         }
//     }
// }).then(products => {
//     console.log(products);
// });

// moment().format('YYYY-MM-DD') //don't use it
// => '2020-06-10' without timezone