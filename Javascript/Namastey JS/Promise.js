const cart = ['pants','shorts','shirts','kurta'];

const promise = createOrder(cart); //orderId
//console.log(promise);// console 

promise.then(function (orderId) {
    console.log(orderId);
    //proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
});

//producer

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //create Order;
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error('Cart is not valid');
            reject(err);
        }

        //logic for createOrder  
        const orderId = '12001414';
        if(orderId){
            setTimeout(function(){
                console.log(orderId);
            },5000);
        }

      });

      return pr;
}

function validateCart(cart){
    return false;
}