import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#C69347", "#DF6F29"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0]) //cor de fora, que vai mais adentro do cartão
  ccBgColor02.setAttribute("fill", colors[type][1]) //cor de dentro
  ccLogo.setAttribute("src", `/cc-${type}.svg`)
}

globalThis.setCardType = setCardType
