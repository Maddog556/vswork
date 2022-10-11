

const submitBtn = document.getElementById("subBtn")
const clearBtn = document.getElementById("clrBtn")
const outputBox = document.getElementById("outPut")

let val1 = document.getElementById("goo")
let val2 = document.getElementById("boo")
let val3 = document.getElementById("chee")



function totalCoins(num1,num2,num3){
let num11= Number(num1) * 5
let num22= Number(num2) * 7
let num33= Number(num3) * 11

return Number(num11) + Number(num22) + Number(num33)
}


submitBtn.addEventListener("click", event => {
    let goo = val1.value
    let bomb = val2.value
    let cheep = val3.value

    if(goomba === ""){
        alert("Please fill in Goombas caught, if none type 0")
        return false
    } else if (bomb === ""){
        alert("Please fill in Bop-ombs caught, if none type 0")
        return false
    } else if (cheep === ""){
        alert("Please fill in Cheep-Cheeps caught, if none type 0")
        return false
    }
    
    let all = totalCoins(goo,bomb,cheep)

    outputBox.append(all)

    val1.value = ""
    val2.value = ""
    val3.value = ""
})

clearBtn.addEventListener("click", event => {
    outputBox.value = ""
})