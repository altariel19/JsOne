function piramide(num) {
    let patron = ""
    for (let i = 1; i <= num; i = i + 1) {
        for (let j = 1; j <= i; j = j +1) {
            patron = patron + j + " "
        }
        console.log(patron);
        patron=""

    }

}

piramide(6);

function piramide(num) {
    let patron = ""
    for (let i = 1; i <= num; i = i + 1) {
        for (let j = 1; j <= i; j = j +1) {
            patron = patron + j + " "
        }
        console.log(patron);
        patron=""

    }

}

piramide(3);