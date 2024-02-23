// let myPromise = new Promise((res,rej) => {
//     const a = [];
//     const b = [];

//     setTimeout(() => {
//         if(a===b){
//             res("The values are equal")
//         }else {
//             rej("The values are not equal")
//         }
//     },1000)
// }).then(res => console.log(res)).catch(err=>console.error('Error:', err));

function ReturnError(msg){
    return new Error(msg)
}

function placeOrder(drink = ReturnError("drink should be specified")){
    return new Promise((res,rej) => {
        if(drink == "Cofee"){
            res("Order for coffe is recieved")
        }else {
            rej("Order for coffe is not recieved")
        }
    })
}

function ProcessOrder(processedDrink){
    return new Promise(res => {
        console.log("Order is being processed");
        res(`${processedDrink} is Served`)
    })
}

// placeOrder("Cofee").then(res => {
//     console.log(res);
//     let servedOrder = ProcessOrder(res);
//     return servedOrder
// }).then(order => {
//     console.log(order)
// }).catch(err => {
//     console.error(err)
// })


async function OrderCofee(){
    try {
        let placedOrder = await placeOrder("Soup");
        let recievedOrder = await ProcessOrder(placedOrder);
        return recievedOrder
    } catch (error) {   
        console.error(error)
    }
}

OrderCofee()



















