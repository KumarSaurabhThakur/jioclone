const banner1 = document.querySelector('.banner1');
const banner2 = document.querySelector('.banner2');
const banner3 = document.querySelector('.banner3');

const leftbtnOne = document.querySelector('.left-one');
const rightbtnOne = document.querySelector('.right-one');
const leftbtnTwo = document.querySelector('.left-two');
const rightbtnTwo = document.querySelector('.right-two');
const leftbtnThree = document.querySelector('.left-three');
const rightbtnThree = document.querySelector('.right-three');

const fib = document.querySelector('.fib');
const mob = document.querySelector('.mob');

const mobilerecharge = document.querySelector('#mobilerecharge');
const fiberrecharge = document.querySelector('#fiberrecharge');

const mobpre = document.querySelector('.mobpre');
const fibpre = document.querySelector('.fibpre');
const mobpost = document.querySelector('.mobpost');
const fibpost = document.querySelector('.fibpost');

const mobilenumberPrepaid = document.querySelector('.mobilenumber-prepaid');
const mobilenumberPostpaid = document.querySelector('.mobilenumber-postpaid');
const fibernumberPrepaid = document.querySelector('.fibernumber-prepaid');
const fibernumberPostpaid = document.querySelector('.fibernumber-postpaid');

const businessone = document.querySelector('.businessone');
const businesstwo = document.querySelector('.businesstwo');
const businessthree = document.querySelector('.businessthree');
const businessfour = document.querySelector('.businessfour');
const businessfive = document.querySelector('.businessfive');

const businessbtnOne = document.querySelector('#businessbtnOne');
const businessbtnTwo = document.querySelector('#businessbtnTwo');
const businessbtnThree = document.querySelector('#businessbtnThree');

const knowjioleftBtn = document.querySelector('#knowjioleftbtn');
const knowjiorightBtn = document.querySelector('#knowjiorightbtn');

const knowjioone = document.querySelector('.knowjioone');
const knowjiotwo = document.querySelector('.knowjiotwo');
const knowjiothree = document.querySelector('.knowjiothree');
const knowjiofour = document.querySelector('.knowjiofour');

const note = document.querySelector('.note');

leftbtnOne.addEventListener('click', function () {
    banner1.style.display = 'none';
    banner2.style.display = 'none';
    banner3.style.display = 'flex';
    banner3.style.transition = 'all 0.3s ease-in-out';
});
rightbtnOne.addEventListener('click', function () {
    banner1.style.display = 'none';
    banner2.style.display = 'flex';
    banner3.style.display = 'none';
    banner2.style.transition = 'all 0.3s ease-in-out';
});
leftbtnTwo.addEventListener('click', function () {
    banner1.style.display = 'flex';
    banner2.style.display = 'none';
    banner3.style.display = 'none';
    banner1.style.transition = 'all 0.3s ease-in-out';
});
rightbtnTwo.addEventListener('click', function () {
    banner1.style.display = 'none';
    banner2.style.display = 'none';
    banner3.style.display = 'flex';
    banner3.style.transition = 'all 0.3s ease-in-out';
});
leftbtnThree.addEventListener('click', function () {
    banner1.style.display = 'none';
    banner2.style.display = 'flex';
    banner3.style.display = 'none';
    banner2.style.transition = 'all 0.3s ease-in-out';
});
rightbtnThree.addEventListener('click', function () {
    banner1.style.display = 'flex';
    banner2.style.display = 'none';
    banner3.style.display = 'none';
    banner1.style.transition = 'all 0.3s ease-in-out';
});

fib.addEventListener("click", function () {
    mob.style.color = "gray";
    mob.style.textDecoration = "none";
    mob.style.transition = "all 0.3s ease-in-out";
    fib.style.color = "black";
    fib.style.textDecoration = "underline 3px solid #0f3cc9";
    fib.style.transition = "all 0.3s ease-in-out";

    mobilerecharge.style.display = "none";
    fiberrecharge.style.display = "flex";
    fiberrecharge.style.flexDirection = "column";
    fiberrecharge.style.gap = "15px";
    fiberrecharge.style.justifyContent = "center";
    fiberrecharge.style.backgroundColor = "#0f3cc9";
    fiberrecharge.style.color = "white";
    fiberrecharge.style.borderRadius = "15px";
    fiberrecharge.style.maxWidth = "60%";
    fiberrecharge.style.padding = "20px 40px";
    fiberrecharge.style.margin = "auto";

    fibernumberPostpaid.style.display = "none";
    fibernumberPrepaid.style.display = "grid";
    fibernumberPrepaid.style.transition = "all 0.3s ease-in-out";
    fiberrecharge.style.transition = "all 0.3s ease-in-out";
    mobilerecharge.style.transition = "all 0.3s ease-in-out";

    note.style.display = "none";
});

mob.addEventListener("click", function () {
    fib.style.color = "gray";
    fib.style.textDecoration = "none";
    fib.style.transition = "all 0.3s ease-in-out";
    mob.style.color = "black";
    mob.style.textDecoration = "underline 3px solid #0f3cc9";
    mob.style.transition = "all 0.3s ease-in-out";
    fiberrecharge.style.display = "none";
    mobilerecharge.style.display = "flex";
    fiberrecharge.style.transition = "all 0.3s ease-in-out";
    mobilerecharge.style.transition = "all 0.3s ease-in-out";

    note.style.display = "none";
});

mobpost.addEventListener("click", function () {
    mobpost.style.backgroundColor = "#0f3cc9";
    mobpost.style.padding = "10px 30px";
    mobpost.style.borderRadius = "40px";
    mobpost.style.cursor = "pointer";
    mobpost.style.transition = "all 0.3s ease-in-out";
    mobpre.style.backgroundColor = "#112b7c";
    mobpre.style.padding = "0px 0px";
    mobpre.style.transition = "all 0.3s ease-in-out";

    mobilenumberPostpaid.style.display = "grid";
    mobilenumberPostpaid.style.gridTemplateColumns = "40% 40% 20%";

    mobilenumberPrepaid.style.display = "none";
    mobilenumberPostpaid.style.transition = "all 0.3s ease-in-out";

    note.style.display = "block";
})

mobpre.addEventListener("click", function () {
    mobpre.style.backgroundColor = "#0f3cc9";
    mobpre.style.padding = "10px 30px";
    mobpre.style.borderRadius = "40px";
    mobpre.style.cursor = "pointer";
    mobpre.style.transition = "all 0.3s ease-in-out";
    mobpost.style.backgroundColor = "#112b7c";
    mobpost.style.padding = "0px 0px";
    mobpost.style.transition = "all 0.3s ease-in-out";
    mobilenumberPrepaid.style.display = "grid";
    mobilenumberPostpaid.style.display = "none";
    mobilenumberPrepaid.style.transition = "all 0.3s ease-in-out";

    note.style.display = "none";
})

fibpost.addEventListener("click", function () {
    fibpost.style.backgroundColor = "#0f3cc9";
    fibpost.style.padding = "10px 30px";
    fibpost.style.borderRadius = "40px";
    fibpost.style.cursor = "pointer";
    fibpost.style.transition = "all 0.3s ease-in-out";
    fibpre.style.backgroundColor = "#112b7c";
    fibpre.style.padding = "0px 0px";
    fibpre.style.transition = "all 0.3s ease-in-out";
    fibernumberPostpaid.style.display = "grid";

    fibernumberPostpaid.style.display = "grid";
    fibernumberPostpaid.style.gridTemplateColumns = "40% 40% 20%";

    fibernumberPrepaid.style.display = "none";
    fibernumberPostpaid.style.transition = "all 0.3s ease-in-out";

    note.style.display = "block";
})

fibpre.addEventListener("click", function () {
    fibpre.style.backgroundColor = "#0f3cc9";
    fibpre.style.padding = "10px 30px";
    fibpre.style.borderRadius = "40px";
    fibpre.style.cursor = "pointer";
    fibpre.style.transition = "all 0.3s ease-in-out";
    fibpost.style.backgroundColor = "#112b7c";
    fibpost.style.padding = "0px 0px";
    fibpost.style.transition = "all 0.3s ease-in-out";
    fibernumberPrepaid.style.display = "grid";
    fibernumberPostpaid.style.display = "none";
    fibernumberPrepaid.style.transition = "all 0.3s ease-in-out";

    note.style.display = "none";
})

businessbtnOne.addEventListener('click', function () {
    businessone.style.display = 'flex';
    businesstwo.style.display = 'flex';
    businessthree.style.display = 'none';
    businessfour.style.display = 'none';
    businessfive.style.display = 'none';
});

businessbtnTwo.addEventListener('click', function () {
    businessone.style.display = 'none';
    businesstwo.style.display = 'none';
    businessthree.style.display = 'flex';
    businessfour.style.display = 'flex';
    businessfive.style.display = 'none';
});

businessbtnThree.addEventListener('click', function () {
    businessone.style.display = 'none';
    businesstwo.style.display = 'none';
    businessthree.style.display = 'none';
    businessfour.style.display = 'flex';
    businessfive.style.display = 'flex';
});

knowjioleftBtn.addEventListener('click', function () {
    knowjioone.style.display = 'flex';
    knowjiotwo.style.display = 'flex';
    knowjiothree.style.display = 'none';
    knowjiofour.style.display = 'flex';
});

knowjiorightBtn.addEventListener('click', function () {
    knowjioone.style.display = 'none';
    knowjiotwo.style.display = 'flex';
    knowjiothree.style.display = 'flex';
    knowjiofour.style.display = 'flex';
});