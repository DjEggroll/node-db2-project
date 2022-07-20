// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'Toyota',
        model: 'Camry',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '22222222222222222',
        make: 'Toyota',
        model: 'Prius',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '33333333333333333',
        make: 'Ford',
        model: 'Fiesta',
        mileage: 21500,
        title: 'clean',
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
}