import "cally";
import itens from "./itens"

lucide.createIcons();
let itensPlacement = document.getElementById("itensImagens")
itensPlacement.innerHTML = ""

itens.forEach(e => {
    itensPlacement.innerHTML += `
      <div class="border rounded-lg p-2 mb-6 sm:mb-0">
        <img src="${(e.nome)}.png" />
        <div class=" text-center">${e.nome.toUpperCase()}</div>

        <div class="num-silabas  display grid grid-cols-4">

          <div class="text-center cursor-pointer" control-value="1">1</div>
          <div class="text-center cursor-pointer" control-value="2">2</div>
          <div class="text-center cursor-pointer" control-value="3">3</div>
          <div class="text-center cursor-pointer" control-value="4">4</div>
        </div>
      </div>
      
      `
})


const hoje = new Date();

const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');




document.getElementById("data").value = `${dia}/${mes}/${ano}`
document.getElementById("date-picker").addEventListener("change", function () {

    const [ano, mes, dia] = this.value.split("-");
    document.getElementById('data').value = `${dia}/${mes}/${ano}`

})

const colorEl = document.getElementById("color-code")

colorEl.value = "#422ad5"
let color = colorEl.value

document.getElementById("color-code-field").innerText = color

let currentColor = color


document.getElementById("color-code").addEventListener("change", function changeColor() {
    currentColor = this.value
    document.getElementById("color-code-field").innerText = currentColor
})


const cards = document.querySelectorAll(".num-silabas")

cards.forEach(function (card) {


    card.addEventListener("click", function (e) {
        const clicado = e.target

        Array.from(card.children).forEach(c => {
            c.removeAttribute("marked")
            c.style = "background-color: transparent"
        })


        if (card.contains(clicado) && clicado !== card) {
            clicado.setAttribute("marked", "")
            clicado.style = "background-color: " + currentColor
        }
    })
})


document.getElementById("validar").addEventListener("click", function () {
    const resposta = Array.from(cards).map(function (card, index) {

        if (card.querySelector("div[marked]")?.getAttribute("control-value") == itens[index].silabas) {
            return itens[index].nome.padEnd(10, " ") + ": está correto"
        }
        return itens[index].nome.padEnd(10, " ") + ": está errado"

    })

    document.getElementById("modal-content").innerText = resposta.join("\n")
    document.getElementById("modal").classList.remove("hidden")




})

document.getElementById("close-modal").addEventListener("click", _ => {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");


})
