let haribol = document.querySelector("button");
haribol.addEventListener("click", chantHaribol);
function chantHaribol() {
  alert("chant and be happy");
  let name = prompt("bol hari bol");
  if (name != null) haribol.textContent = name;
}
