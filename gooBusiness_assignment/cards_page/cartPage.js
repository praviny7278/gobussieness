let itemContainer = $('#card-items');
let offerContainer = $('.coupon-code');
const couponApplyBtn = $('#coupon-btn');
const couponRemoveBtn = $('#rem-btn');
const feedSubmitBtn = $('#feed-submit-btn');
let cartItemInfo = '';
let finalPrice = 0;


$(document).ready(
    getData()
)

function getData() {

    // Retrieve data from localStorage
    function retrieveData(key) {
    var storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
    }

    // Example usage
    var retrievedUserData = retrieveData('webInfo');

    if (retrievedUserData) {
        console.log(retrievedUserData);
        displayData(retrievedUserData);
        cartItemInfo = retrievedUserData;
    } else {
        console.log('No data found for the given key.');
        itemContainer.html('No Data Fount!')
    }
}




couponApplyBtn.on('click', ()=> {
    couponCodeAdd();
    couponApplyBtn.css('display', 'none');
    couponRemoveBtn.css('display', 'block');
});



$(document).on('click', '#rem-btn', function() {
    couponCodeRemove();    
    couponApplyBtn.css('display', 'block');
    couponRemoveBtn.css('display', 'none');
});


$(document).on('click', '#buy-btn', function() {
    $('.form-cont').css('display', 'block');
});


$(document).on('click', '#submit-btn', function() {
    if (
        $('#name').val() && $('#number').val() &&
        $('#email').val() && $('#address').val() &&
        $('#zip-code').val() 
        ) 
    {
        alert('Your Order has been successfully placed.');
    } else {
        alert('Please fill your details!');
    }
});


feedSubmitBtn.on('click', ()=> {
    if (
        $('#fe-name').val() && $('#fe-text').val() &&
        $('#fe-email').val()
        ) 
    {
        alert('Your Feedback has been successfully sended.');
    } else {
        alert('Please fill your details!');
    }
});



$('#f-price').val(`Final Price:     $${finalPrice+parseInt(cartItemInfo.price.slice(1))}`);




function displayData(cartInfo) {

    offerContainer.html(`You are eliglable for a discount of ${cartInfo.offer}`);
    let price = cartInfo.price.slice(1);
    let gst = parseInt(price / 100 * 18);
    $('#price').val(`Price:     $${price}`);
    $('#gst').val(`GST Tax 18%:     $${gst}`);

    finalPrice = (gst)


    const itemDetailsContainer = (`
        <img id="card-item-img" src="${cartInfo.img}" alt="">
        <p id="card-item-name">${cartInfo.name}</p>
        <p id="card-item-price">${cartInfo.price}</p>
        <button id="buy-btn">Buy</button>
    `);

    itemContainer.append(itemDetailsContainer);
}


function couponCodeAdd() {
    let discOffer = cartItemInfo.offer.slice(0, 2);
    let price = cartItemInfo.price.slice(1);
    price = parseInt(price / 100 * 22);
    console.log(discOffer);

    $('#disc').val(`Discount ${cartItemInfo.offer}:     $${price}`);
    $('#f-price').val(`Final Price:     $${finalPrice + parseInt(cartItemInfo.price.slice(1)) - price}`);
   

}

function couponCodeRemove() {
    //console.log('finalPrice + parseInt(cartItemInfo.price.slice(1))');
    $('#disc').val(`Discount 0%:     $00`);
    $('#f-price').val(`Final Price:     $${finalPrice + parseInt(cartItemInfo.price.slice(1))}`);
}
