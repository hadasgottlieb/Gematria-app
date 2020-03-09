const STORE = {
    totalValue: 0,
    chosenLetters: [],
    letters: [
        {
            id: cuid(),
            name: "Alef",
            letter: "א",
            value: 1,

        },
        {
            id: cuid(),
            name: "Beis",
            letter: "ב",
            value: 2,

        },
        {
            id: cuid(),
            name: "Gimel",
            letter: "ג",
            value: 3,

        },
        {
            id: cuid(),
            name: "Daled",
            letter: "ד",
            value: 4,

        },
        {
            id: cuid(),
            name: "Hey",
            letter: "ה",
            value: 5,

        },
        {
            id: cuid(),
            name: "Vav",
            letter: "ו",
            value: 6,

        },
        {
            id: cuid(),
            name: "Zayin",
            letter: "ז",
            value: 7,

        },
        {
            id: cuid(),
            name: "Ches",
            letter: "ח",
            value: 8,

        },
        {
            id: cuid(),
            name: "Tes",
            letter: "ט",
            value: 9,

        },
        {
            id: cuid(),
            name: "Yud",
            letter: "י",
            value: 10,

        },
        {
            id: cuid(),
            name: "Kaf",
            letter: "כ",
            value: 20,

        },
        {
            id: cuid(),
            name: "Lamed",
            letter: "ל",
            value: 30,

        },
        {
            id: cuid(),
            name: "Mem",
            letter: "מ",
            value: 40,

        },
        {
            id: cuid(),
            name: "Nun",
            letter: "נ",
            value: 50,

        },
        {
            id: cuid(),
            name: "Samech",
            letter: "ס",
            value: 60,

        },
        {
            id: cuid(),
            name: "Ayin",
            letter: "ע",
            value: 70,

        },
        {
            id: cuid(),
            name: "Pey",
            letter: "פ",
            value: 80,

        },
        {
            id: cuid(),
            name: "Tzadik",
            letter: "צ",
            value: 90,

        },
        {
            id: cuid(),
            name: "Kuf",
            letter: "ק",
            value: 100,

        },
        {
            id: cuid(),
            name: "Reish",
            letter: "ר",
            value: 200,

        },
        {
            id: cuid(),
            name: "Shin",
            letter: "ש",
            value: 300,

        },
        {
            id: cuid(),
            name: "Tav",
            letter: "ת",
            value: 400,

        },
        
    ],
}

//function building html for each letter  
//document ready function rendering the whole alef beis
// function listening for letter click. if letter pressed, added to letter array, displayed in chosen letter box
//function listening for calculate click. if clicked, value of each chosen letter is added to total value variable, total value variable is displayed in box.  
// function listening for reset click. if clicked, chosen letter array is emptied, total value variable is reset to 0, 

function renderAlefBeis() {
    console.log("renderAlefBeis ran.");
    //function building html for each letter 
    //function rendering the whole alef beis

    STORE.letters.forEach(function(letter) {
        $("#letter-list").append(`
            <li data-item-id = "${letter.id}" class = "letter-indiv">${letter.letter}
            </li>
        `);
    });

    $("#total").text(`${STORE.totalValue}`);
        


}

function chooseLetters() {
    console.log("chooseLetters ran.");
    // function listening for letter click. if letter pressed, added to letter array, displayed in chosen letter box
    $(".letter-indiv").on("click", function() {
        let ident = $(this).data("item-id"); //that's the id of the li element
        const item = STORE.letters.find(item => item.id === ident);
        STORE.chosenLetters.push(item);
        $("#chosen-letter-list").append(`
            <li data-item-id = "${item.id}">${item.letter}</li>
        `);

    });

}

function calculate() {
    console.log("calculate ran.");
    //function listening for calculate click. if clicked, value of each chosen letter is added to total value variable, total value variable is displayed in box. 
    $("#button-calculate").one("click", function() {
        for (let i = 0; i < STORE.chosenLetters.length; i++) {
            STORE.totalValue += STORE.chosenLetters[i].value;
        }
        $("#total").text(STORE.totalValue);
    });
}

function resetPage() {
    console.log("resetPage ran.");
    // function listening for reset click. if clicked, chosen letter array is emptied, total value variable is reset to 0, 
    $("#button-reset").on("click", function() {
        STORE.totalValue = 0;
        STORE.chosenLetters.splice(0,STORE.chosenLetters.length);
        $("#total").text(STORE.totalValue);
        $("#chosen-letter-list").empty();
        $(calculate);


    })


}

function renderPage() {
    renderAlefBeis();
    chooseLetters();
    calculate();
    resetPage();
}

$(renderPage);

