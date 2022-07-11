
let t = document.querySelectorAll("#block img");
    let imgTime = ["c0.png", "c1.png", "c2.png", "c3.png", "c4.png", "c5.png", "c6.png", "c7.png", "c8.png", "c9.png"];
    function clock() {
      let time = new Date();
      let hours = time.getHours();
      let min = time.getMinutes();
      let seconds = time.getSeconds();

      getImg(hours, min, seconds);
      setTimeout("clock()", 1000);      
    }
   
    function getImg(h, m, s){
      t[0].src = imgTime[Math.floor(h/10)]
      t[1].src = imgTime[h%10];
      t[3].src = imgTime[Math.floor(m/10)]
      t[4].src = imgTime[m%10];
      t[6].src = imgTime[Math.floor(s/10)]
      t[7].src = imgTime[s%10];
    }
    clock();

    function blink(element, time) {
  
      element.style.visibility = "hidden";
      setTimeout(function () {
        element.style.visibility = "visible";
      }, time);
      setTimeout(function () {
        blink(element, time);
      }, time * 2);
    }

    blink(document.getElementById("blink"), 500);
    blink(document.getElementById("blink1"), 500);

    var lessons; //понедельник
    function toLocal(){
       lessons = list.innerHTML;
        localStorage.setItem('lessons', lessons);
    }
    
    var list = document.getElementById('list'); 
    list.addEventListener('click', function (ev) {
        if(ev.target.tagName === "LI") {
           ev.target.classList.toggle('checked');
        } else if(ev.target.tagName === "SPAN") {
           var div = ev.target.parentNode;
           div.remove();
           toLocal();
           
        }
    }, false);
    
    function newElement() {
        var li = document.createElement('li');
        var inputValue = document.getElementById('toDoEl').value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if(inputValue == "") {
    
          let div = document.createElement('div');
          div.className = 'success';
          div.innerHTML = '<h2>Введите название урока</h2>';
          document.body.append(div);
          setTimeout(() => div.remove(), 1000);
     
     } else {
           document.getElementById('list').appendChild(li);
        }
        document.getElementById('toDoEl').value = "";
        var span = document.createElement('SPAN');
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        toLocal();  
    }
    
    if(localStorage.getItem('lessons')){
       list.innerHTML = localStorage.getItem('lessons');
    }

var lessons1; //вторник
function toLocal1(){
   lessons1 = list1.innerHTML;
    localStorage.setItem('lessons1', lessons1);
}

var list1 = document.getElementById('list1'); 
list1.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
       toLocal1();
       
    }
}, false);

function newElement1() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl1').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {

      let div = document.createElement('div');
      div.className = 'success';
      div.innerHTML = '<h2>Введите название урока</h2>';
      document.body.append(div);
      setTimeout(() => div.remove(), 1000);
 
 } else {
       document.getElementById('list1').appendChild(li);
    }
    document.getElementById('toDoEl1').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal1();  
}

if(localStorage.getItem('lessons1')){
   list1.innerHTML = localStorage.getItem('lessons1');
}


var lessons2; //среда
function toLocal2(){
   lessons2 = list2.innerHTML;
    localStorage.setItem('lessons2', lessons2);
}

var list2 = document.getElementById('list2');
list2.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
       toLocal2();
       
    }
}, false);

function newElement2() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl2').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {

      let div = document.createElement('div');
      div.className = 'success';
      div.innerHTML = '<h2>Введите название урока</h2>';
      document.body.append(div);
      setTimeout(() => div.remove(), 1000);
 
 } else {
       document.getElementById('list2').appendChild(li);
    }
    document.getElementById('toDoEl2').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal2();
}
if(localStorage.getItem('lessons2')){
   list2.innerHTML = localStorage.getItem('lessons2');
}

var lessons3; //четверг
function toLocal3(){
   lessons3 = list3.innerHTML;
    localStorage.setItem('lessons3', lessons3);
}

var list3 = document.getElementById('list3');
list3.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
       toLocal3();
       
    }
}, false);

function newElement3() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl3').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {

      let div = document.createElement('div');
      div.className = 'success';
      div.innerHTML = '<h2>Введите название урока</h2>';
      document.body.append(div);
      setTimeout(() => div.remove(), 1000);
 
 } else {
       document.getElementById('list3').appendChild(li);
    }
    document.getElementById('toDoEl3').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal3();
}

if(localStorage.getItem('lessons3')){
   list3.innerHTML = localStorage.getItem('lessons3');
}

var lessons4; //пятница
function toLocal4(){
   lessons4 = list4.innerHTML;
    localStorage.setItem('lessons4', lessons4);
}

var list4 = document.getElementById('list4');
list4.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
       toLocal4();
       
    }
}, false);

function newElement4() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl4').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {

      let div = document.createElement('div');
      div.className = 'success';
      div.innerHTML = '<h2>Введите название урока</h2>';
      document.body.append(div);
      setTimeout(() => div.remove(), 1000);
 
 } else {
       document.getElementById('list4').appendChild(li);
    }
    document.getElementById('toDoEl4').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal4();
}
if(localStorage.getItem('lessons4')){
   list4.innerHTML = localStorage.getItem('lessons4');
}

var lessons5; //суббота
function toLocal5(){
   lessons5 = list5.innerHTML;
    localStorage.setItem('lessons5', lessons5);
}

var list5 = document.getElementById('list5'); 
list5.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
       toLocal5();       
    }
}, false);

function newElement5() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl5').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {

      let div = document.createElement('div');
      div.className = 'success';
      div.innerHTML = '<h2>Введите название урока</h2>';
      document.body.append(div);
      setTimeout(() => div.remove(), 1000);
 
 } else {
       document.getElementById('list5').appendChild(li);
    }
    document.getElementById('toDoEl5').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal5();    
}
if(localStorage.getItem('lessons5')){
   list5.innerHTML = localStorage.getItem('lessons5');
}

















function clip(v, min, max = Infinity) {
   if (v < min)
      return min;
   else if (v > max)
      return max;
   else
      return v;
}
const randRange = (min, max) => Math.random() * max + min;
function bubble(x, y, rect, hue, target) {
    const size = randRange(20, rect.width / 10);
    const circleHue = hue + randRange(-20, 20);
    const animDuration = randRange(clip(size ** 2/1000, 1), 6) 
    const zIndex = Math.random() < 0.1 ? 2 : -1;
    const circle = document.createElement("span");
    circle.className = "bubble";
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.background = `hsl(${circleHue}deg, 100%, 60%)`;
    circle.style.zIndex = zIndex
    circle.style.animationDuration = animDuration + "s";
    target.appendChild(circle);
}
function bubblestart() { 
    document.querySelectorAll("[data-bubble-hue]").forEach((target) => {
        const rect = target.getBoundingClientRect();
        const hue = Number(target.getAttribute("data-bubble-hue"));
        const count = Number(target.getAttribute("data-bubble-count") || 50);
        for (let i = 0; i < count; i++) {
            const x = randRange(0, rect.width);
            const y = randRange(0, rect.height);
            bubble(x, y, rect, hue, target);
        }
    });
}
window.addEventListener("resize", () => {
    let del = document.querySelectorAll(".bubble");
    del.forEach( e => e.remove() );
    bubblestart();
});
bubblestart();







