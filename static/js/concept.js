const beige = document.getElementById("beige")
const oatmeal = document.getElementById("oatmeal")
const pink = document.getElementById("pink")
const purple = document.getElementById("purple")
const blue = document.getElementById("blue")

const elephant = document.getElementById("elephant")
const oatmealelephant = document.getElementById("oatmealelephant")

const mainview = document.getElementById("mainview")

beige.onclick = function(){
    mainview.setAttribute("src","/images/beige-nothing.jpg");
}
oatmeal.onclick = function(){
    mainview.setAttribute("src","/images/oatmeal-nothing.jpg");
}
pink.onclick = function(){
    mainview.setAttribute("src","/images/pink.jpg");
}
purple.onclick = function(){
    mainview.setAttribute("src","/images/purple.jpg");
}
blue.onclick = function(){
    mainview.setAttribute("src","/images/blue.jpg");
}
elephant.onclick = function(){
    mainview.setAttribute("src","/images/beige-elephant.jpg");
}
oatmealelephant.onclick = function(){
    mainview.setAttribute("src","/images/oatmeal-elephant.jpg");
}

const swup = new Swup();

console.log(document.getElementsByClassName(".fitstContent"))



document.querySelector('.nextButton').addEventListener('click',() => {
    document.querySelector('.firstContent').classList.add("hidden")
    document.querySelector('.secondContent').classList.remove("hidden")
    document.querySelector('.nextButton').classList.add("hidden")
    document.querySelector('.nextButton2').classList.remove("hidden")
    document.querySelector('.beforeButton').classList.add("hidden")
    document.querySelector('.beforeButton2').classList.remove("hidden")
});
document.querySelector('.nextButton2').addEventListener('click',() => {
    document.querySelector('.secondContent').classList.add("hidden")
    document.querySelector('.thirdContent').classList.remove("hidden")
    document.querySelector('.nextButton2').classList.add("hidden")
    document.querySelector('.nextButton3').classList.remove("hidden")
    document.querySelector('.beforeButton2').classList.add("hidden")
    document.querySelector('.beforeButton3').classList.remove("hidden")
});
document.querySelector('.nextButton3').addEventListener('click',() => {
    document.querySelector('.thirdContent').classList.add("hidden")
    document.querySelector('.fourthContent').classList.remove("hidden")
    document.querySelector('.nextButton3').classList.add("hidden")
    document.querySelector('.nextButton4').classList.remove("hidden")
    document.querySelector('.beforeButton3').classList.add("hidden")
    document.querySelector('.beforeButton4').classList.remove("hidden")
});
document.querySelector('.beforeButton2').addEventListener('click',() => {
    document.querySelector('.firstContent').classList.remove("hidden")
    document.querySelector('.secondContent').classList.add("hidden")
    document.querySelector('.nextButton2').classList.add("hidden")
    document.querySelector('.beforeButton2').classList.add("hidden")
    document.querySelector('.nextButton').classList.remove("hidden")
    document.querySelector('.beforeButton').classList.remove("hidden")
});
document.querySelector('.beforeButton3').addEventListener('click',() => {
    document.querySelector('.secondContent').classList.remove("hidden")
    document.querySelector('.thirdContent').classList.add("hidden")
    document.querySelector('.nextButton3').classList.add("hidden")
    document.querySelector('.beforeButton3').classList.add("hidden")
    document.querySelector('.nextButton2').classList.remove("hidden")
    document.querySelector('.beforeButton2').classList.remove("hidden")
});
document.querySelector('.beforeButton4').addEventListener('click',() => {
    document.querySelector('.thirdContent').classList.remove("hidden")
    document.querySelector('.fourthContent').classList.add("hidden")
    document.querySelector('.nextButton4').classList.add("hidden")
    document.querySelector('.beforeButton4').classList.add("hidden")
    document.querySelector('.nextButton3').classList.remove("hidden")
    document.querySelector('.beforeButton3').classList.remove("hidden")
});

document.querySelector('select').addEventListener('click',() => {
    document.querySelector('.firstContent').classList.add("hidden")
    document.querySelector('.secondContent').classList.remove("hidden")
    document.querySelector('.nextButton').classList.add("hidden")
    document.querySelector('.nextButton2').classList.remove("hidden")
    document.querySelector('.beforeButton').classList.add("hidden")
    document.querySelector('.beforeButton2').classList.remove("hidden")
});

function familyMain(clickedPhoto){

    /// ????????? ??????,?????? HTML??? ??????
    document.querySelector('.bookingInfo h1').innerHTML
    = clickedPhoto;

    /// ??? ?????? ????????????
    /// 1. ?????? ????????????
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.photoPrice').innerHTML
    = photoPrice;

    /// 2. ?????? ????????????
    document.querySelector('.fprice').innerHTML
    = photoPrice;
}


function familyFrame(clickedPhoto){
    /// ????????? ??????,?????? HTML??? ??????
    document.querySelector('.bookingInfo h2').innerHTML
    = clickedPhoto;

    /// ??? ?????? ????????????
    /// 1. ?????? ????????????
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.framePrice').innerHTML
    = photoPrice;
        
    /// 2. ????????? ?????????
    existPrice = document.getElementById("photoPrice").innerHTML;
    photoPrice = document.getElementById("framePrice").innerHTML;
    const totalPrice = Number(existPrice) + Number(photoPrice);

    /// 3. ?????? ????????????
    document.querySelector('.fprice').innerHTML
    = totalPrice;

    
}

function familyBW(clickedPhoto){
    document.querySelector('.bookingInfo h3').innerHTML
    = clickedPhoto;

    /// ??? ?????? ????????????
    /// 1. ?????? ????????????
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.BWPrice').innerHTML
    = photoPrice;
        
    /// 2. ????????? ?????????
    existPrice2 = document.getElementById("BWPrice").innerHTML;
    existPrice1 = document.getElementById("photoPrice").innerHTML;
    photoPrice = document.getElementById("framePrice").innerHTML;
    const totalPrice = Number(existPrice2) + Number(existPrice) + Number(photoPrice);

    /// 3. ?????? ????????????
    document.querySelector('.fprice').innerHTML
    = totalPrice;
    
}
function familyBWFrame(clickedPhoto){
    document.querySelector('.bookingInfo h4').innerHTML
    = clickedPhoto;

    /// ??? ?????? ????????????
    /// 1. ?????? ????????????
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.BWFramePrice').innerHTML
    = photoPrice;
        
    /// 2. ????????? ?????????
    existPrice3 = document.getElementById("BWFramePrice").innerHTML;
    existPrice2 = document.getElementById("BWPrice").innerHTML;
    existPrice1 = document.getElementById("photoPrice").innerHTML;
    photoPrice = document.getElementById("framePrice").innerHTML;
    const totalPrice = Number(existPrice3) + Number(existPrice2) + Number(existPrice) + Number(photoPrice);

    /// 3. ?????? ????????????
    document.querySelector('.fprice').innerHTML
    = totalPrice;
}


/// ???????????? ????????????
function finalPrice(){
    /// 1. ?????? ????????? ????????? ??????
    const frameInfo = clickedFrame;
    const frameInfomation = frameInfo.split(',');
    framePrice = frameInfomation[1];
    /// 2. ??????????????? ???????????? ?????????
    let photoPrice = document.getElementsByClassName("fprice")[0].innerHTML;
    let totalPrice = Number(framePrice)+Number(photoPrice);
    /// 3. ???????????? ????????????
    document.querySelector('.fprice').innerHTML
    = totalPrice;
};





/// ???????????? ?????? ?????? ???, ?????? ???????????? post ?????? ??????
function getResData(){
    let fphoto = document.querySelector('.bookingInfo h1').innerHTML
    let fframe = document.querySelector('.bookingInfo h2').innerHTML
    let fbw = document.querySelector('.bookingInfo h3').innerHTML
    let fbwframe = document.querySelector('.bookingInfo h4').innerHTML
    updateFamilyData(fphoto, fframe, fbw, fbwframe)
    alert(`${fphoto}\n${fframe}\n${fbw}\n${fbwframe}`)
}


// Post Data
function updateFamilyData(fphoto, fframe, fbw, fbwframe){
    console.log('posting data..')

    let url = '/process_familydata/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'fphoto':fphoto, 'fframe':fframe, 'fbw':fbw, 'fbwframe':fbwframe})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        // location.reload();
    })
}

let obj = '{{resInfomations}}'
let obj2 = JSON.parse(obj.replace(/&quot;/g,'"'));
let resInfomations = [];
for (let i=0; i<obj2.length; i++){
    let obj3 = JSON.parse(obj2[i].replace(/&#39;/g,'"'));
    resInfomations.push(obj3)
}

