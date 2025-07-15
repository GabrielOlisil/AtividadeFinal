

let tel = document.getElementById("input-tel")

tel.addEventListener("input", e => {
    const input = e.currentTarget

    let tel = formatTel(input.value)

    input.value = tel

})

function formatTel(tel) {
    let value = tel.replace(/\D/g, "").slice(0, 11)


    if (value.length == 11) {
        return "(" + value.slice(0, 2) + ") " + value.slice(2, 3) + " " + value.slice(3, 7) + "-" + value.slice(7)
    }

    let traco = ""
    let parenteses = ""

    if (value.length > 2) {
        parenteses = ")"
    }

    if (value.length > 6) {
        traco = "-"
    }

    let posTraco = 7
    if (value.length < 11) {
        posTraco = 6
    }

    let string = "(" + value.slice(0, 2) + parenteses + value.slice(2, posTraco) + traco + value.slice(posTraco)

    return string
}