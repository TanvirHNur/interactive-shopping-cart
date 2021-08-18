function  updateQuantity(product, price, isIncreasing){
    let productInput = document.getElementById(product + '-quantity');
    let productNumber = parseInt(productInput.value);
    if (isIncreasing){
        productNumber = productNumber +1;
}
 else if (productNumber > 0){
    productNumber = productNumber - 1;
 }
 productInput.value = productNumber;
 const productPrice = document.getElementById(product + '-price');
 productPrice.innerText = productNumber * price;
 calculateTotal();
}
 

// get product price for calculate
 function getInputValue(product){
    const productInput = document.getElementById(product  + '-quantity');
    const productNumber = parseInt(productInput.value);
    return productNumber;
 }

//  calculate total 
function calculateTotal(){
    
    const phoneTotal = getInputValue('phone')* 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}


//  handle phone price increasing
 document.getElementById('phone-plus').addEventListener('click', function(){
    updateQuantity('phone',1219, true)
 })

 //  handle phone price decreasing
 document.getElementById('phone-minus').addEventListener('click', function(){
    updateQuantity('phone',1219, false)
 })


 //  handle case price increasing
 document.getElementById('case-plus').addEventListener('click', function(){
     updateQuantity('case',59, true)
 })


 //  handle case price decreasing
 document.getElementById('case-minus').addEventListener('click', function(){
     updateQuantity('case',59, false)
 })