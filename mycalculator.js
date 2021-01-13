/*My Calculator*/
const calculator = () => {
    let billAmount = document.getElementById("billAmount").value;
    let totalPeople = document.getElementById("totalPeople").value;
    let serviceQuality = document.getElementById("serviceQuality").value;

    if (totalPeople <= 1) {
        totalPeople = 1;
        document.getElementById("each").classList.add("invisible");
    } else {
        document.getElementById("each").classList.remove("invisible");
    }

    if (billAmount === "" || serviceQuality == 0) {
        window.alert("valid input no entered");
        return;
    }

    let total = (billAmount * serviceQuality) / totalPeople;
    total = total.toFixed(2);
    document.getElementById("tipCalculate").classList.add("visible");
    document.getElementById("tip").textContent = total;


}


document.getElementById("calculate").addEventListener("click", calculator);
