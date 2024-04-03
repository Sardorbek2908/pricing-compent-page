let cardCost = document.querySelector(".card-cost")
let cardCost2 = document.querySelector(".card2-cost")
let cardCost3 = document.querySelector(".card3-cost")

let toggle = document.querySelector(".toggle")

toggle.onclick = () => {

    if (cardCost.textContent == "19.99") {
        cardCost.textContent = "199.99"
    }else{
        cardCost.textContent = "19.99"
    }

    if (cardCost2.textContent == "24.99") {
        cardCost2.textContent = "249.99"
    }else{
        cardCost2.textContent = "24.99"
    }

    if (cardCost3.textContent == "39.99") {
        cardCost3.textContent = "399.99"
    }else{
        cardCost3.textContent = "39.99"
    }

    
}