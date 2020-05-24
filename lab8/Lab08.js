
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
var container = document.getElementsByClassName("container")[0];
var wrap = document.getElementsByClassName("wrap")[0];
var left = document.getElementsByClassName("arrow arrow_left")[0];
var right = document.getElementsByClassName("arrow arrow_right")[0];
var potIndex = 0;
var buttons = document.getElementsByClassName("buttons")[0];
var pots = document.getElementsByClassName("buttons")[0].children;
var time = null;
var table = document.getElementsByClassName("table")[0];
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
left.onclick = function () {
    toLeft();
};
right.onclick = function () {
    toRight();
};
buttons.onclick = function () {
    choosePot();
};
function toLeft() {
    let leftNow = wrap.style.left;
    if(leftNow === "0px"){
        wrap.style.left = "-2400px";
    }else{
        wrap.style.left = parseInt(leftNow)+600+"px";
    }
    if(potIndex === 0){
        potIndex = 4;
    }else{
        potIndex = potIndex-1;
    }
    showPots();
}
function toRight() {
    let leftNow = wrap.style.left;
    if(leftNow === "-3600px"){
        wrap.style.left = "-1200px";
    }else{
        wrap.style.left = parseInt(leftNow)-600+"px";
    }
    if(potIndex === 4){
        potIndex = 0;
    }else{
        potIndex = potIndex+1;
    }
    showPots();
}
function showPots() {
    for (let i = 0; i < pots.length; i++) {
        if(i === potIndex){
            pots[i].className = "on";
        }else {
            pots[i].className = "";
        }
    }
}

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
function turn() {
    time = setInterval(toRight,2000);
}
container.onmouseenter = function () {
    clearInterval(time);
};
container.onmouseleave = function () {
    turn();
};
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
function choosePot() {
    for (let i = 0; i < pots.length; i++) {
        (function(i) {
            pots[i].onclick = function () {
                let dis = i - potIndex;
                if(potIndex === 0 && wrap.style.left !== "-600px"){
                    dis = dis - 5;
                }
                if(potIndex === 4 && wrap.style.left !== "-3000px"){
                    dis = dis + 5;
                }
                wrap.style.left = parseInt(wrap.style.left)-600*dis +"px";
                potIndex = i;
                showPots();
            }
        })(i);
    }
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
// $("document").click(function () {
//     emptySpare();
// });
// $("td").click(function () {
//     emptySpare();
//     let oldValue = this.innerText;
//     this.innerHTML = "<input type='text' class='input' value="+oldValue+">";
//     $('input').focus();
// });
// $("td").find('input').focus().blur(function () {
//     console.log(2);
//     /*emptySpare();*/
// });
//
//
// function emptySpare() {
//     let inputNode = $("input[class='input']")[0];
//     if(inputNode !== undefined) {
//         inputNode.parentElement.innerHTML = inputNode.value;
//     }
// }
$(function(){
    $('table td').click(function(){
        if(!$(this).is('.input')){
            $(this).html('<input type="text" class="input" value="'+ $(this).text() +'" />').find('input').focus().blur(function(){
                // var thisid = $(this).parent().siblings("th:eq(0)").text();
                // var thisvalue=$(this).val();
                // var thisclass = $(this).parent().attr("class");
                $(this).parent().html($(this).val());
            });
        }
    }).hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
});
// table.onclick = function () {
//     solveLine();
// };
// function solveLine() {
//     let lines = table.children;
//     for (let i = 1; i < lines.length; i++) {
//         lines[i].onclick = solveCell(lines[i]);
//     }
// }
// function solveCell(line) {
//     console.log(line);
//     for (let i = 0; i < line.length; i++) {
//         line[i].onclick = addInput(line[i]);
//     }
// }
// function addInput(cell) {
//     let oldValue = cell.value;
//     cell.value = null;
//     let inputNode = document.createElement("input");
//     let textNode = document.createTextNode(oldValue);
//     cell.appendChild(inputNode);
//     inputNode.appendChild(textNode);
// }

// function solveLine() {
//     let lines = table.children;
//     for (let i = 1; i < lines.length; i++) {
//         lines[i].onclick = function solveCell() {
//             for (let i = 0; i < this.length; i++) {
//                 let that = this;
//                 that.onclick = function addInput(){
//                     let oldValue = this.value;
//                     this.value = null;
//                     let inputNode = document.createElement("input");
//                     let textNode = document.createTextNode(oldValue);
//                     this.appendChild(inputNode);
//                     inputNode.appendChild(textNode);
//                 }
//             }
//         };
//     }
// }
/*********************************************end*************************************/