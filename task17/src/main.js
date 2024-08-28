import "../style.scss";
const container = document.querySelector(".container");

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.error(error.message);
  }
}
function renderData(data) {
  data.forEach((item, index) => {
    container.innerHTML += `<div><span>User ${index + 1} </span>${
      item.name
    }</div>
  `;
  });
}
getData("https://jsonplaceholder.typicode.com/users");

