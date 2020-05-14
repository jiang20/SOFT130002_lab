const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
const pictures = 'pictures/abstract1.jpg pictures/abstract2.jpg pictures/abstract3.jpg pictures/abstract4.jpg pictures/abstract5.jpg pictures/beauty1.jpg pictures/beauty2.jpg pictures/classical1.jpg pictures/classical2.jpg pictures/human1.jpg pictures/human2.jpg pictures/human3.jpg';
const reg = [/pictures\/human[0-9]\.jpg/g,/pictures\/classical[0-9]\.jpg/g,/pictures\/abstract[0-9]\.jpg/g,/pictures\/beauty[0-9]\.jpg/g];
function addDiv() {
    for (let i = 0;i < works.length; i++){
        let photoString = pictures.match(reg[i]);
        let htm = document.getElementsByClassName("flex-container justify")[0].innerHTML;
        document.getElementsByClassName("flex-container justify")[0].innerHTML = htm + "<div class='item'><h4>Genre:"+works[i].tips+"</h4></div>";
        // document.getElementsByClassName("item")[i].innerHTML = "Genre:"+works[i].tips;
        htm = document.getElementsByClassName("item")[i].innerHTML;
        document.getElementsByClassName("item")[i].innerHTML = htm + "<div class='inner-box'>" +"<h3 style='display: inline-block'>"+works[i].author+"</h3>"+"<h5 style='display: inline-block;width: auto;margin: unset;margin-left: 1em'>lifetime:"+works[i].lifetime+"</h5>"+
            "</div>"+"<div class='inner-box'><h3>Popular Photos</h3><div class='new'></div></div>";
        for (let j = 0; j < photoString.length; j++) {
            htm = document.getElementsByClassName("new")[i].innerHTML;
            document.getElementsByClassName("new")[i].innerHTML = htm + "<img class='photo' src="+photoString[j]+">";
        }
        htm = document.getElementsByClassName('item')[i].innerHTML;
        document.getElementsByClassName('item')[i].innerHTML = htm + "<button>Visit</button>"
    }
}
window.onload = addDiv;