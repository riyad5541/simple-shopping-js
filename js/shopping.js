const cartArray = [];

function display(cartProduct){
    console.log(cartProduct)

    const tableBody = document.getElementById("cart-products");

    tableBody.innerHTML = "";

    let totalPrice = 0;

    for(i = 0; i < cartProduct.length; i++){
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        // console.log(name,price)()

        totalPrice = totalPrice + price;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;

        tableBody.appendChild(tr);
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `
    tableBody.appendChild(tr)

}

function addToCard(element){
    const productName = element.parentNode.parentNode.children[0].innerText;

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productName,productPrice)

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
   

    cartArray.push(productObj);

    // console.log(cartArray);

    document.getElementById("total-product").innerText = cartArray.length;

    display(cartArray);
}