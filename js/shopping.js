function getElementValueByIdName(id) {
  const name = document.getElementById(id).innerText;
  return name;
}

function getElementValueByIdPrice(id) {
  const price = document.getElementById(id).innerText;
  return price;
}

function getElementValueByIdQuantity(id) {
  const quantity = document.getElementById(id).innerText;
  return quantity;
}

function getElementInputValueById(id) {
  const element = document.getElementById(id).value;
  return element;
}

function displayShowElement(name, price, quantity, totalCost) {
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${totalCost}</td>
  `;
  tableContainer.appendChild(tr);
}

function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

let serial = 0;
document.getElementById("btn-coffee").addEventListener("click", function () {
  serial += 1;

  const name = getElementValueByIdName("name-coffee");
  const price = getElementValueByIdName("price-coffee");
  const quantity = getElementValueByIdQuantity("quantity-coffee");

  const totalCost = parseInt(price) * parseInt(quantity);
  displayShowElement(name, price, quantity, totalCost);
  disabledButton("btn-coffee");
});

document.getElementById("btn-heart").addEventListener("click", function () {
  serial += 1;

  const name = getElementValueByIdName("name-heart");
  const price = getElementValueByIdName("price-heart");
  const quantity = getElementValueByIdQuantity("quantity-heart");

  const totalCost = parseInt(price) + parseInt(quantity);
  displayShowElement(name, price, quantity, totalCost);
  disabledButton("btn-heart");
});

document.getElementById("btn-panda").addEventListener("click", function () {
  serial += 1;

  const name = getElementValueByIdName("name-panda");
  const price = getElementValueByIdName("price-panda");
  const quantity = getElementValueByIdQuantity("quantity-panda");

  const totalCost = parseInt(price) - parseInt(quantity);
  displayShowElement(name, price, quantity, totalCost);
  disabledButton("btn-panda");
});

document.getElementById("btn-umbrella").addEventListener("click", function () {
  serial += 1;

  const name = getElementValueByIdName("name-umbrella");
  const price = getElementValueByIdName("price-umbrella");
  const quantity = getElementValueByIdQuantity("quantity-umbrella");

  const totalCost = parseInt(price) * parseInt(quantity);
  displayShowElement(name, price, quantity, totalCost);
  disabledButton("btn-umbrella");
});

document.getElementById("btn-vue").addEventListener("click", function () {
  serial += 1;

  const name = getElementValueByIdName("name-vue");

  const price = getElementInputValueById("price-vue");
  const quantity = getElementInputValueById("quantity-vue");
  if (isNaN(price) && quantity) {
    alert("Please input a valid number");
    return;
  }
  if (price === "" || quantity === "" || price <= 0 || quantity <= 0) {
    alert("Please input a valid number");
    return;
  }

  const totalCost = (parseInt(price) / parseInt(quantity)).toFixed(2);
  displayShowElement(name, price, quantity, totalCost);
  disabledButton("btn-vue");
});