function GetmainproductImg(src) {
    document.querySelector(".main-product-container img").src = src;

}


function showValueOnSide() {
    let inputprice = document.getElementById('price').value;
    document.getElementById('selectprice').innerHTML = inputprice;

    let inputQat = document.getElementById('qat').value;
    document.getElementById('selectqat').innerHTML = inputQat;

    let inputDiscount = document.getElementById('discount').value;
    let priPluseQat = parseInt(inputprice * inputQat);
    let per = priPluseQat * inputDiscount / 100;
    document.getElementById('selectdiscount').innerHTML = inputDiscount + "%" + " " + " Discounted Price: " + per;
    subtotal = priPluseQat - per;
    document.getElementById('subtotatal').innerHTML = subtotal;
    prodTax = subtotal * 13 / 100;

    pluseProdtax = subtotal + prodTax;
    document.getElementById('total-price').innerHTML = pluseProdtax;
    // console.log(subtotal);


}