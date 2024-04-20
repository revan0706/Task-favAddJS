// localStorage.setItem("prds" , JSON.stringify([{"id":50,"name":"Shoe","picture":"https://placehold.co/300x300"},{"id":93,"name":"Dress","picture":"https://placehold.co/300x300"},{"id":32,"name":"Pencil","picture":"https://placehold.co/300x300"},{"id":10,"name":"Car","picture":"https://placehold.co/300x300"},{"id":20,"name":"Phone","picture":"https://placehold.co/300x300"},{"id":19,"name":"Table","picture":"https://placehold.co/300x300"},{"id":67,"name":"Computer","picture":"https://placehold.co/300x300"},{"id":40,"name":"Window","picture":"https://placehold.co/300x300"},{"id":5,"name":"Pillow","picture":"https://placehold.co/300x300"}]));

function render() {
  let prds = JSON.parse(localStorage.getItem("prds"));
  let favs = JSON.parse(localStorage.getItem("favs") || "[]");
  let x = " ";
  for (let i = 0; i < prds.length; i++) {
    x += `<div class="prod">
<div class="img"><img src="${prds[i].picture}" alt=""></div>
<h1>${prds[i].name}</h1>
<div class="ico" onclick="addRemoveIco(${prds[i].id})">
${
  favs.includes(prds[i].id)
    ? "<i class='fa-solid fa-heart'></i>"
    : "<i class='fa-regular fa-heart'></i>"
}
  
</div>
</div>`;
  }

  document.getElementById("prods").innerHTML = x;
}
function addRemoveIco(n) {
  let favs = JSON.parse(localStorage.getItem("favs") || "[]");
  if (localStorage.getItem("favs").includes(n)) {
    let x = [];
    for (let i = 0; i < favs.length; i++) {
      if (favs[i] != n) {
        x.push(favs[i]);
      }
    }
    localStorage.setItem("favs", JSON.stringify(x));
  } else {
    favs.push(n);
    localStorage.setItem("favs", JSON.stringify(favs));
  }

  render();
}
render();
