


var products = [
    { "id": "1", "title": "جرجير", "image": "1.jpg", "price": 10 , "sku": 123456789, "quantati":2 },
    { "id": "2", "title": "قرنبيط", "image": "2.jpg", "price": 11 , "sku": 123456789 , "quantati":1 },
    { "id": "3", "title": "كرونب", "image": "3.jpg", "price": 12 , "sku": 123456789, "quantati":3 },
    { "id": "4", "title": "خس", "image": "4.jpg", "price": 14 , "sku": 123456789, "quantati":4 },
    { "id": "5", "title": "رمان", "image": "5.jpg", "price": 9, "sku": 123456789 , "quantati":5 },
    { "id": "6", "title": "خوخ", "image": "6.jpg", "price": 8, "sku": 123456789, "quantati":3  }
]


displayTable=function(){
   var oneProduct="";
    for (i = 0; i < products.length; i++) {
         oneProduct+=`
            
            <tr class="table-gray" data-bs-toggle="note" data-bs-trigger="hover focus" data-bs-content="2022-06-18 12:00 - 20:00 <br><b>Te presteren:</b> 07:30" data-bs-original-title="">
            <td class="text-center text-gray">${i+1}</td>
            <td><strong>${products[i].title}</strong></td>
            <td class="text-center">
            <button onclick="deleteProduct(${i})" class="btn btn-close "></button>                        
            </td>
            <td class="text-center d-flex justify-content-center"><p>₺</p> <span class="mx-1">${products[i].price}</span></td>
            <td class="text-center">${products[i].quantati}</td>
            <td class="text-center">${products[i].price * products[i].quantati}</td>                      
            </tr>
        `
        // console.log(oneProduct);
        document.getElementById("tbody").innerHTML= oneProduct; 
    }
    
}

displayTable()


// ==========================================================================
// get total 

getTotal=function(){
    var allCost=0;
    for(i=0;i<products.length;i++){
        var totlePrice = products[i].price * products[i].quantati;
        allCost += totlePrice ;
        
    }
    // console.log(allCost);
    document.getElementById("totalToPay").innerHTML= allCost;
}
getTotal()

// ============================================================================
// search in serial number

function search(number){
    var oneProduct="";
    for (i = 0; i < products.length; i++) {
        if(products.sku.includes(number)){
            oneProduct+=` 
            <tr class="table-gray" data-bs-toggle="note" data-bs-trigger="hover focus"<b>Te presteren:</b> 07:30" data-bs-original-title="">
            <td class="text-center text-gray">${i+1}</td>
            <td><strong>${products[i].title}</strong></td>
            <td class="text-center">
            <button onclick="deleteProduct(${i})" class="btn btn-close "></button>                        
            </td> 
            <td class="text-center d-flex justify-content-center"><p>₺</p> <span class="mx-1">${products[i].price}</span></td>
            <td class="text-center">${products[i].quantati}</td> 
            <td class="text-center">${products[i].price * products[i].quantati}</td> 
            </tr>
        `
        }
    }
    console.log(oneProduct);
    document.getElementById("tbody").innerHTML = oneProduct;
    
}

