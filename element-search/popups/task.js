const modal_main = document.getElementById("modal_main");
modal_main.classList.add("modal_active");	
const success =  document.getElementById("modal_success");
const successBtn = document.getElementsByClassName("show-success")[0];


function changeWindow() {
  modal_main.classList.remove("modal_active");
  success.classList.add("modal_active");
}

successBtn.onclick = changeWindow;

const activeWindow = document.getElementsByClassName("modal_active");
const arrActive = Array.from(activeWindow);

function closeWindow() {
  windowСlose.classList.remove("modal_active");
}

const close = document.getElementsByClassName("modal__close");
let closeItArr = Array.from(close);

for (i = 0; i < arrActive.lenght; i++ ) {
  let windowСlose = arrActive[i];
    for (i = 0; i < closeItArr.lenght; i++) {
      const closeArr = closeItArr(i);
      closeArr.onclick = closeWindow;
    }
}
