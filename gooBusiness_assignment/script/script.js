
let dataArrObj = [
    {
        name: 'Static Website',
        img: 'https://cdn.educba.com/academy/wp-content/uploads/2020/07/psd-9-9-5-3.jpg',
        price: '$120',
        offer: '25%',
    },
    {
        name: 'Dynamic Website',
        img: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/03/Hostinger-Website-Builder_s-template-library-1024x563.webp',
        price: '$140',
        offer: '35%',
    },
    {
        name: 'Website using React',
        img: 'https://procoders.tech/wp-content/uploads/2021/06/react-1.png',
        price: '$150',
        offer: '15%',
    },
    {
        name: 'eCommerce Website',
        img: 'https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b',
        price: '$160',
        offer: '20%',
    },
    {
        name: 'Dropshipping Website',
        img: 'https://a4h6c5c5.rocketcdn.me/wp-content/uploads/2019/10/AliExpress-Dropshipping-Website-Example.jpg',
        price: '$150',
        offer: '45%',
    },
    {
        name: 'Food Ordering Website',
        img: 'https://cdn.dribbble.com/userupload/4618587/file/original-2beb0ee71ade88fc161ecfde13afc8d3.jpg?resize=400x300&vertical=center',
        price: '$135',
        offer: '12%',
    },
    {
        name: 'Custom Business Website',
        img: 'https://mikekhorev.com/wp-content/uploads/2021/09/consultio-business-wordpress-theme-768x576-1.jpg',
        price: '$200',
        offer: '21%',
    },
  
];
// console.log(dataArrObj[0]);
let cartItemContainer = $('#card-items');

$(document).ready(
    displayData()
)


function displayData() {
    cartItemContainer.html(null);

    for (let x=0; x<dataArrObj.length; x++) {

        let itemContainer = (`
            <div class="card-item">
                <a href="#" onclick="onClickBuy(${x})">
                    <img class="pimg"
                        src="${dataArrObj[x].img}" width="260px" height="160px"
                        alt=""></a>
                <div class="lines">
                    <a class="nameA" href="#"  onclick="onClickBuy(${x})">
                        <p class="line1 text-center my-sm">${dataArrObj[x].name}</p>
                    </a>
                    <p class="line2 text-center my-sm"><span class="priceperlead">${dataArrObj[x].price}</span>&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="offer">${dataArrObj[x].offer}</span></p>
                    <a href="#">
                        <p class="line3 text-center my-sm grab-btn" onclick="onClickBuy(${x})">Grab Now</p>
                    </a>
                </div>
            </div>
        `);

        cartItemContainer.append(itemContainer);
    }
}








function onClickBuy(index) {
// console.log(num);

    localStorage.setItem('webInfo', JSON.stringify(dataArrObj[index]));
    window.location.href = './cards_page/cartPage.html';

}