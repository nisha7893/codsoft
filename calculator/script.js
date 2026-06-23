let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn, .operator");
let equal = document.querySelector(".equal");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        let value = button.innerText;

        if (value === "CLR") {
            screen.value = "0";
        }

        else if (value === "DEL") {

            if (screen.value.length === 1) {
                screen.value = "0";
            } else {
                screen.value = screen.value.slice(0, -1);
            }

        }

        else {

            if (screen.value === "0") {
                screen.value = value;
            } else {
                screen.value += value;
            }

        }

    });

});

equal.addEventListener("click", () => {

    try {

        screen.value = eval(screen.value);

    }

    catch {

        screen.value = "Error";

    }

});