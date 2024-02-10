use("CrudDB");

db.createCollection("Courses");

// db.Courses.insertOne({
//     name:"Javascript Course",
//     description:"Ultimate course of javascript that will include everything that is related to js",
//     price:"100$",
// })



// db.Courses.insertMany([
//     {
//       name: "Product1",
//       description: "Description1",
//       price: 20,
//     },
//     {
//       name: "Product2",
//       description: "Description2",
//       price: 15,
//     },
//     {
//       name: "Product3",
//       description: "Description3",
//       price: 25,
//     },
//     {
//       name: "Product4",
//       description: "Description4",
//       price: 12,
//     },
//     {
//       name: "Product5",
//       description: "Description5",
//       price: 18,
//     },
//     {
//       name: "Product6",
//       description: "Description6",
//       price: 22,
//     },
//     {
//       name: "Product7",
//       description: "Description7",
//       price: 30,
//     },
//     {
//       name: "Product8",
//       description: "Description8",
//       price: 14,
//     },
//     {
//       name: "Product9",
//       description: "Description9",
//       price: 17,
//     },
//     {
//       name: "Product10",
//       description: "Description10",
//       price: 19,
//     },
//   ])

// let findedCourse = db.Courses.find({price:10});

// let SinglefindedCourse = db.Courses.findOne({price:10});


// console.log(SinglefindedCourse)

// console.log(findedCourse.toArray())
// console.log(findedCourse.count())

// db.Courses.updateOne({
//     price:1
// },{$set:{
//     price:100
// }})

// db.Courses.updateMany({
//     price:1
// },{$set:{
//     price:100
// }})


// db.Courses.updateMany({
//     price:"100$"
// },{$set:{
//     price:2000
// },$unset:{
//     description:"Ultimate course of javascript that will include everything that is related to js"
// }})


// db.Courses.deleteOne({price:2000})
// db.Courses.deleteMany({})

db.Courses.insertMany( [
    {
       "item": "nuts", "quantity": 30,
       "carrier": { "name": "Shipit", "fee": 3 }
    },
    {
       "item": "bolts", "quantity": 50,
       "carrier": { "name": "Shipit", "fee": 4 }
    },
    {
       "item": "washers", "quantity": 10,
       "carrier": { "name": "Shipit", "fee": 1 }
    }
 ] )

// db.Courses.insertMany( [
//     { saffron: 5, cinnamon: 5, mustard: null },
//     { saffron: 3, cinnamon: null, mustard: 8 },
//     { saffron: null, cinnamon: 3, mustard: 9 },
//     { saffron: 1, cinnamon: 2, mustard: 3 },
//     { saffron: 2, mustard: 5 },
//     { saffron: 3, cinnamon: 2 },
//     { saffron: 4 },
//     { cinnamon: 2, mustard: 4 },
//     { cinnamon: 2 },
//     { mustard: 6 }
//  ] )

// const findedCourse = db.Courses.find({price:{$eq:10}});

// console.log(findedCourse)

// const greaterQuantityDocuments = db.Courses.updateMany({
//     price: {$gt : 10}        
// },{
//     $set:{price:100}
// })

// const notEqualProduct = db.inventory.find( { name: { $ne: 20 } })


//  console.log(notEqualProduct)

// db.inventory.updateMany( { "carrier.fee": { $ne: 1 } }, { $set: { "price": 9.99 } } )

// const a = db.inventory.find( { quantity: { $exists: true } } )

// console.log(a)

// const a = db.Courses.find( { saffron: { $type: "null" } } )

// console.log(a)




