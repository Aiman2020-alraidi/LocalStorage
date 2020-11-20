"use strict";
const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".results > span");
const inp = document.querySelector("#input");

// looping all btns
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      check();
    }
    if (e.target.classList.contains("add-item")) {
      add();
    }
    if (e.target.classList.contains("delete-item")) {
      removeItem();
    }
    if (e.target.classList.contains("show-item")) {
      showItem();
    }
  });
});

const checkMesage = () => {
  if (inp.value === "") {
    result.innerHTML = `The input should not be empty`;
  }
};

const check = () => {
  if (inp.value === "") {
    checkMesage();
  } else {
    if (localStorage.getItem(inp.value)) {
      result.innerHTML = `Found local storage called ${inp.value}`;
      inp.value = "";
    } else {
      result.innerHTML = `no local storage called ${inp.value}`;
    }
  }
};

const add = () => {
  if (inp.value !== "") {
    localStorage.setItem(inp.value, "Name");
    result.innerHTML = `you added on item in the localStorage <span class = 'green'>${inp.value}</span>`;
    inp.value = "";
  } else {
    checkMesage();
  }
};

const removeItem = () => {
  if (inp.value === "") {
    checkMesage();
  } else {
    localStorage.removeItem(inp.value);
    result.innerHTML = ` you delete one item <span class='red'>${inp.value}</span>`;
    inp.value = "";
  }
};

const showItem = () => {
  if (localStorage.length) {
    result.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<div class = 'green'>${key}</div>`;
    }
  } else {
    result.innerHTML += `local Storage is empty`;
  }
};
