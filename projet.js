const prompt = require("prompt-sync")()

let choix

do {

    choix = Number(prompt("Enter Votre Choix : "))

    switch (choix) {
        case 1: {
            console.log("1");
            break;
        }
        case 2: {
            console.log("2");
            break;
        }
        case 0: {
            console.log("Quiter...");
            break
        }
        default: {
            console.log("Default");
            break
        }
    }

} while (choix !== 0)

