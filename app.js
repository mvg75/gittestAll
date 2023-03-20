const defAct=0; // активная кнопка - вкладка по умолчанию
function report() { //отладочный вывод
console.log('keys=',knopki);
console.log('abzats=',pashki);
}
function clearPashki () {// все абзацы неактивны
pashki.forEach(function(entry) {
    console.log(entry);
    entry.classList.remove ("tshow");
    entry.classList.add    ("thide");
});
}
function clearKnopki () {// все ссылки неактивны
knopki.forEach(function(entry) {
    console.log(entry);
    entry.classList.remove ("actnav");
    entry.classList.add    ("deactnav");
});
}


function ClicKey(item,index) {
    item.addEventListener("click", function() {
      let currentItem = item;
      console.log(currentItem);
      console.log('click');
      console.log(index);
      clearPashki();
      clearKnopki();
      pashki[index].classList.remove ("thide");
      pashki[index].classList.add ("tshow");
      knopki[index].classList.remove ("deactnav");
      knopki[index].classList.add ("actnav");
      });
}



const knopki =  document.querySelectorAll('.navig');// выборка кнопок
const pashki =  document.querySelectorAll('.artCustom');;// выборка абзацев текста
report();
clearPashki(); // все абзацы неактивны
clearKnopki(); // все кнопки неактивны
knopki.forEach(ClicKey);
// первая вкладка активна
pashki[defAct].classList.remove ("thide");
pashki[defAct].classList.add ("tshow");
// аепвая ччылка активна
knopki[defAct].classList.remove ("deactnav");
knopki[defAct].classList.add ("actnav");
// добавление обработчиков на ссылки навигации



/*const btn1 = document.querySelector (".navig1");
const btn2 = document.querySelector (".navig2");
const btn3 = document.querySelector (".navig3");
const txt1 = document.getElementById ("p1");
const txt2 = document.getElementById ("p2");
const txt3 = document.getElementById ("p3");
txt1.classList.remove ("thide");
txt1.classList.add    ("tshow");
txt2.classList.remove ("tshow");
txt2.classList.add    ("thide");
txt3.classList.remove ("tshow");
txt3.classList.add    ("thide");

btn1.classList.add    ("actnav");

console.log("k1",btn1);
console.log("p1",txt1);
console.log("p2",txt1);
console.log("p3",txt1);
//1
btn1.addEventListener("click", function() {
txt2.classList.remove ("tshow");
txt2.classList.add    ("thide");
txt3.classList.remove ("tshow");
txt3.classList.add    ("thide");

btn1.classList.add ("actnav");
btn2.classList.remove ("actnav");
btn3.classList.remove ("actnav");

txt1.classList.remove ("thide");
txt1.classList.add ("tshow");
console.log("p1",txt1);
console.log("click 1");
});
//2
btn2.addEventListener("click", function() {
txt1.classList.remove ("tshow");
txt1.classList.add    ("thide");
txt3.classList.remove ("tshow");
txt3.classList.add    ("thide");

btn1.classList.remove ("actnav");
btn2.classList.add    ("actnav");
btn3.classList.remove ("actnav");


txt2.classList.remove ("thide");
txt2.classList.add ("tshow");
console.log("p2",txt1);
console.log("click 2");
});
//3
btn3.addEventListener("click", function() {
txt1.classList.remove ("tshow");
txt1.classList.add    ("thide");
txt2.classList.remove ("tshow");
txt2.classList.add    ("thide");

btn1.classList.remove ("actnav");
btn2.classList.remove ("actnav");
btn3.classList.add ("actnav");

txt3.classList.remove ("thide");
txt3.classList.add ("tshow");
console.log("p3",txt1);
console.log("click 3");
});
console.log("ok !");
*/
console.log('script ok');
