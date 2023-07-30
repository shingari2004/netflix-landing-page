
const input = document.querySelectorAll(" .input-wrap input");
const inputWrap = document.querySelectorAll(" .input-wrap");
const label = document.querySelectorAll("label");
const quesBox = document.querySelectorAll(".ques");
const dialogBox = document.querySelectorAll(".dialog-box");
const closeBtn = document.querySelectorAll(".close-btn");
const closeTab = document.querySelectorAll(".ques-box");




function inputFun() {
  input.forEach((el) => {
    el.addEventListener("focus", () => {
      label.forEach((lab) => {
        lab.classList.add("focus");
      });

      inputWrap.forEach((inp) => {
        inp.classList.add("focus");
      });
    });
  });

  input.forEach((el) => {
    el.addEventListener("blur", () => {
      label.forEach((lab) => {
        if (el.value == "") {
          lab.classList.remove("focus");
        }
      });

      inputWrap.forEach((inp) => {
        inp.classList.remove("focus");
      });
    });
  });

  /* input.addEventListener("blur", () => {
    if (input.value == "") {
      label.classList.remove("focus");
    }
    inputWrap.classList.remove("focus");
  }); */
}

inputFun();



for (let i = 0; i < quesBox.length; i++) {
  let count = 0;
  quesBox[i].addEventListener("click", () => {
    count++;
    dialogBox.forEach((d)=>{
      d.classList.remove("open");
      closeBtn.forEach((btn)=>{
        btn.style.transform = `rotate(0deg)`;
      }) 
    })
    quesBox[i].addEventListener("click", () =>{
      if (count == 2){
        dialogBox[i].classList.remove("open");
        closeBtn[i].style.transform = `rotate(0deg)`;
        count = 0;
      }
    })


    dialogBox[i].classList.add("open");
    closeBtn[i].style.transform = `rotate(-45deg)`;
    
  });
}


