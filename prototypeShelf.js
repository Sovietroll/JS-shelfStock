// //DATE HERE//
const date = new Date();
let dateToday = date.getTime();

let year = date.getFullYear();
let month = String(date.getMonth()+1)
let day = String(date.getDate())

let currentDate = `${day}/${month}/${year}`;
let dateNow = document.querySelector('.currentDate');

dateNow.innerHTML = `Today is ${currentDate}`;


let jsUpdated = document.querySelector('.js-updated');

// btnUpdate.innerHTML = 
jsUpdated.innerHTML = 
`
<button class="btn-update"
>
Check in
</button>
`;
let btnUpdate = document.querySelector('.btn-update');

btnUpdate.addEventListener('click', ()=>{
    btnUpdate.textContent = 'Done! Today has been updated';
    jsUpdated.innerHTML = `
    <button class="btn-update">
        Done! Today has been updated
    </button> 
    <br> Updated at ${currentDate}
    `;
})

function btnAfterClick(){
 btnUpdate.value = '';
 console.log('test');
}

// //TODO PUT DATE AS INPUT
// let data = JSON.parse(localStorage.getItem('savedObjects')) || [];

// let output = document.querySelector('.output');

// // runData();

//   allDIV.forEach((div, index) => { 
//    const expDate = expiredDateValue[index];

//       if (expDate <= currentDate){
//         div.classList.add("currentDate-Expired"); //! RED //
//         console.log('runs EXPIRED');
//       }
//       else if (expDate >= currentDate){
//         div.classList.add("currentDate-NotExpired");  //! BLUE //
//         console.log('runs NOT EXPIRED');
//       }
    
// })
// Quantity selectors
const quantityA1 = document.querySelector('.panelNumber-QuantityA1');
const quantityA2 = document.querySelector('.panelNumber-QuantityA2');
const quantityB1 = document.querySelector('.panelNumber-QuantityB1');
const quantityB2 = document.querySelector('.panelNumber-QuantityB2');
const quantityC1 = document.querySelector('.panelNumber-QuantityC1');
const quantityC2 = document.querySelector('.panelNumber-QuantityC2');
const quantityD1 = document.querySelector('.panelNumber-QuantityD1');
const quantityD2 = document.querySelector('.panelNumber-QuantityD2');
const quantityE1 = document.querySelector('.panelNumber-QuantityE1');
const quantityE2 = document.querySelector('.panelNumber-QuantityE2');
const quantityF1 = document.querySelector('.panelNumber-QuantityF1');
const quantityF2 = document.querySelector('.panelNumber-QuantityF2');
const quantityG1 = document.querySelector('.panelNumber-QuantityG1');
const quantityG2 = document.querySelector('.panelNumber-QuantityG2');
const quantityH1 = document.querySelector('.panelNumber-QuantityH1');
const quantityH2 = document.querySelector('.panelNumber-QuantityH2');
const quantityI1 = document.querySelector('.panelNumber-QuantityI1');
const quantityI2 = document.querySelector('.panelNumber-QuantityI2');
const quantityJ1 = document.querySelector('.panelNumber-QuantityJ1');
const quantityJ2 = document.querySelector('.panelNumber-QuantityJ2');
const quantityK1 = document.querySelector('.panelNumber-QuantityK1');
const quantityK2 = document.querySelector('.panelNumber-QuantityK2');
const quantityL1 = document.querySelector('.panelNumber-QuantityL1');
const quantityL2 = document.querySelector('.panelNumber-QuantityL2');


allQuantities = [
    quantityA1, quantityA2, quantityB1, quantityB2, quantityC1,
    quantityC2, quantityD1, quantityD2, quantityE1, quantityE2, 
    quantityF1, quantityF2, quantityG1, quantityG2, quantityH1, 
    quantityH2, quantityI1, quantityI2, quantityJ1, quantityJ2, 
    quantityK1, quantityK2, quantityL1, quantityL2
]

// node.textContent.includes('Some text');

// allQuantities.forEach(qty => {
//     if (qty.textContent === 'OOS'){
//         console.log('OOS1');
//     }
//     else if (qty.innerHTML === 'x1'){
//         console.log('OOS2');
//     }
// })
// window.addEventListener('DOMContentLoaded', () => {

// })

// Name selectors
const nameA1 = document.querySelector('.js-one-A1');
const nameA2 = document.querySelector('.js-one-A2');
const nameB1 = document.querySelector('.js-one-B1');
const nameB2 = document.querySelector('.js-one-B2');
const nameC1 = document.querySelector('.js-one-C1');
const nameC2 = document.querySelector('.js-one-C2');
const nameD1 = document.querySelector('.js-one-D1');
const nameD2 = document.querySelector('.js-one-D2');
const nameE1 = document.querySelector('.js-one-E1');
const nameE2 = document.querySelector('.js-one-E2');
const nameF1 = document.querySelector('.js-one-F1');
const nameF2 = document.querySelector('.js-one-F2');
const nameG1 = document.querySelector('.js-one-G1');
const nameG2 = document.querySelector('.js-one-G2');
const nameH1 = document.querySelector('.js-one-H1');
const nameH2 = document.querySelector('.js-one-H2');
const nameI1 = document.querySelector('.js-one-I1');
const nameI2 = document.querySelector('.js-one-I2');
const nameJ1 = document.querySelector('.js-one-J1');
const nameJ2 = document.querySelector('.js-one-J2');
const nameK1 = document.querySelector('.js-one-K1');
const nameK2 = document.querySelector('.js-one-K2');
const nameL1 = document.querySelector('.js-one-L1');
const nameL2 = document.querySelector('.js-one-L2');


let expDateA1 = document.querySelector('.js-expDIVDateA1');
let expDateA2 = document.querySelector('.js-expDIVDateA2');
let expDateB1 = document.querySelector('.js-expDIVDateB1');
let expDateB2 = document.querySelector('.js-expDIVDateB2');
let expDateC1 = document.querySelector('.js-expDIVDateC1');
let expDateC2 = document.querySelector('.js-expDIVDateC2');
let expDateD1 = document.querySelector('.js-expDIVDateD1');
let expDateD2 = document.querySelector('.js-expDIVDateD2');
let expDateE1 = document.querySelector('.js-expDIVDateE1');
let expDateE2 = document.querySelector('.js-expDIVDateE2');
let expDateF1 = document.querySelector('.js-expDIVDateF1');
let expDateF2 = document.querySelector('.js-expDIVDateF2');
let expDateG1 = document.querySelector('.js-expDIVDateG1');
let expDateG2 = document.querySelector('.js-expDIVDateG2');
let expDateH1 = document.querySelector('.js-expDIVDateH1');
let expDateH2 = document.querySelector('.js-expDIVDateH2');
let expDateI1 = document.querySelector('.js-expDIVDateI1');
let expDateI2 = document.querySelector('.js-expDIVDateI2');
let expDateJ1 = document.querySelector('.js-expDIVDateJ1');
let expDateJ2 = document.querySelector('.js-expDIVDateJ2');
let expDateK1 = document.querySelector('.js-expDIVDateK1');
let expDateK2 = document.querySelector('.js-expDIVDateK2');
let expDateL1 = document.querySelector('.js-expDIVDateL1');
let expDateL2 = document.querySelector('.js-expDIVDateL2');


//TODO allExpDates//
const allExpDates = [
    expDateA1, expDateA2,
    expDateB1, expDateB2,
    expDateC1, expDateC2,
    expDateD1, expDateD2,
    expDateE1, expDateE2,
    expDateF1, expDateF2,
    expDateG1, expDateG2,
    expDateH1, expDateH2,
    expDateI1, expDateI2,
    expDateJ1, expDateJ2,
    expDateK1, expDateK2,
    expDateL1, expDateL2
];



function dateEXP(expDate, year, month, day, section){
    let date = new Date(year,month,day);
    expDate.innerHTML = new Date(date).toLocaleDateString('en-GB');

    date[section] = date.getTime();
    return date[section];
};

//* this is value of the dates
let dateA1;
let dateA2;
let dateB1;
let dateB2;
let dateC1;
let dateC2;
let dateD1;
let dateD2;
let dateE1;
let dateE2;
let dateF1;
let dateF2;
let dateG1;
let dateG2;
let dateH1;
let dateH2;
let dateI1;
let dateI2;
let dateJ1;
let dateJ2;
let dateK1;
let dateK2;
let dateL1;
let dateL2;


//! A1
nameA1.innerHTML = 'Herbal Blend';
quantityA1.innerHTML = 'x3';
dateA1 = dateEXP(expDateA1, 2024, (11-1), 11, 'A1');

//! A2
nameA2.innerHTML = 'Cafe Latte';
quantityA2.innerHTML = 'x1';
dateA2 = dateEXP(expDateA2, 2024, (12-1), 31, 'A2');

//! B1
nameB1.innerHTML = 'Cinch Tea';
quantityB1.innerHTML = 'x2';
dateB1 = dateEXP(expDateB1, 2026,(1-1), 12, 'B1');

//! B2
nameB2.innerHTML = 'Coqtrol';
quantityB2.innerHTML = 'x1';
dateB2 = dateEXP(expDateB2, 2024,(10-1), 18, 'B2');

//! C1
nameC1.innerHTML = 'Ostematrix';
quantityC1.innerHTML = 'OOS';
dateC1 = dateEXP(expDateC1, 2025,(3-1), 24, 'C1');

//! C2
nameC2.innerHTML = 'Vita-C';
quantityC2.innerHTML = 'OOS';
dateC2 = dateEXP(expDateC2, 2025,(3-1), 15, 'C2');

//! D1
nameD1.innerHTML = 'Alfafa S';
quantityD1.innerHTML = 'x1';
dateD1 = dateEXP(expDateD1, 2025,(9-1), 20, 'D1');

//! D2
nameD2.innerHTML = 'Vit-E';
quantityD2.innerHTML = 'x1';
dateD2 = dateEXP(expDateD2, 2025,(5-1), 24, 'D2');

//! E1
nameE1.innerHTML = 'Lecithin';
quantityE1.innerHTML = 'x2';
dateE1 = dateEXP(expDateE1, 2025,(11-1), 28, 'E1');

//! E2
nameE2.innerHTML = 'ESP';
quantityE2.innerHTML = 'OOS';
dateE2 = dateEXP(expDateE2, 2025,(2-1), 7, 'E2');

//! F1
nameF1.innerHTML = 'Soft Fabric';
quantityF1.innerHTML = 'x1';
dateF1 = dateEXP(expDateF1, 2024,(1-1), 5, 'F1');

//! F2
nameF2.innerHTML = 'Lock Day';
quantityF2.innerHTML = 'x1';
dateF2 = dateEXP(expDateF2, 2024,(6-1), 1, 'F2');

//! G1
nameG1.innerHTML = 'Eye treatment';
quantityG1.innerHTML = 'x1';
dateG1 = dateEXP(expDateG1, 2024,(5-1), 1, 'G1');

//! G2
nameG2.innerHTML = 'N.Cream RICH';
quantityG2.innerHTML = 'x2';
dateG2 = dateEXP(expDateG2, 2024,(5-1), 1, 'G2');

//! H1
nameH1.innerHTML = 'Toner';
quantityH1.innerHTML = 'x5';
dateH1 = dateEXP(expDateH1, 2024,(8-1), 1, 'H1');

//! H2
nameH2.innerHTML = 'Toner';
quantityH2.innerHTML = 'x2';
dateH2 = dateEXP(expDateH2, 2025,(2-1), 1, 'H2');

//! I1
nameI1.innerHTML = 'Shampoo';
quantityI1.innerHTML = '??';
dateI1 = dateEXP(expDateI1, 2024,(7-1), 1, 'I1');

//! I2
nameI2.innerHTML = 'Conditioner';
quantityI2.innerHTML = '??';
dateI2 = dateEXP(expDateI2, 2024,(6-1), 1, 'I2');

//! J1
nameJ1.innerHTML = 'S.Treatment';
quantityJ1.innerHTML = 'x15';
dateJ1 = dateEXP(expDateJ1, 2024,(4-1), 1, 'J1');

//! J2
nameJ2.innerHTML = 'Brush';
quantityJ2.innerHTML = 'x5';
// dateJ2 = dateEXP(expDateJ2, 2024,(1-1), 12, '');

//! K1
nameK1.innerHTML = 'Pillbox';
quantityK1.innerHTML = 'x5';
// dateK1 = dateEXP(expDateK1, 2024,(1-1), 12, '');

//! K2
nameK2.innerHTML = 'Shaker Black';
quantityK2.innerHTML = '-';
// dateK2 = dateEXP(expDateK2, 2024,(1-1), 12, '');

//! L1
nameL1.innerHTML = 'Shaker Prpl';
quantityL1.innerHTML = '-';
// dateL1 = dateEXP(expDateL1, 2024,(1-1), 12, '');

//! L2
nameL2.innerHTML = 'Shaker Green';
quantityL2.innerHTML = 'x4';
// dateL2 = dateEXP(expDateL2, 2024,(1-1), 12, '');


allQuantities.forEach((qty,exp) => {
    const expDates = allExpDates[exp];
    if (qty.textContent === 'OOS'){
        console.log('OOS');
        qty.classList.add("panelNumber-Quantity-OOS");
        expDates.innerHTML = ''; //* place blank at expired date of OOS items
    }
})

//TODO allDatesExpValues//
let allDatesExpValues = [
    dateA1, dateA2,
    dateB1, dateB2,
    dateC1, dateC2,
    dateD1, dateD2,
    dateE1, dateE2,
    dateF1, dateF2,
    dateG1, dateG2,
    dateH1, dateH2,
    dateI1, dateI2,
    dateJ1, dateJ2,
    dateK1, dateK2,
    dateL1, dateL2
];


allExpDates.forEach((dateHTML, index) => {
    const dateValues = allDatesExpValues[index];
    let nearEXP = (dateValues/1.003);
    //* dateA1 => dateValues
    //* expDateA1 => dateHTML

    if (dateValues <= dateToday){ //! RED
        dateHTML.classList.add("currentDate-Expired");
        // console.log('expired');
        
    }
    else if (nearEXP < dateToday){ //! ORANGE
        dateHTML.classList.add("currentDate-NearExpired");
        // console.log('HALF');
    }
    else if (dateValues >= dateToday){ //! GREEN
        dateHTML.classList.add("currentDate-NotExpired");
        // console.log('not expired');
    }
})
