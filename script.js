function calculate1RM() {
    let weight = parseFloat(document.getElementById("weight").value);
    let reps = parseInt(document.getElementById("reps").value);
    if (isNaN(weight) || isNaN(reps) || reps <= 0) {
        alert("Please enter valid numbers.");
        return;
    }
    if (weight >= 100) {
        alert("We get it... you are strong");
    }
    let oneRepMax = weight * (1 + (reps / 30)); // Epley Formula
    document.getElementById("result").innerText = `Your 1RM: ${oneRepMax.toFixed(2)} kg`; 
    if (oneRepMax >= 130) {
        document.getElementById("result").innerText = `Your 1RM: ${oneRepMax.toFixed(2)} kg = can bench 1 Tarik`;
    } else {
        document.getElementById("result").innerText = `Your 1RM: ${oneRepMax.toFixed(2)} kg`;
    }
}


