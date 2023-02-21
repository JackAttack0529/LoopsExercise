
for (i = 1; i < 8; i++){
    console.log(i);
}

console.log(`========`)

for (i = 5; i <= 25; i += 4){
    console.log(i)
}

console.log(`========`)

const wizards = [`Harry Potter`, `Hermione Granger`, `Ron Weasley`]
for (i of wizards)[
    console.log(i)
]

console.log(`========`)

let harryPotterMovies = 0
while (true){
    if(harryPotterMovies === 8){
        break;
    } else {
        console.log(harryPotterMovies = harryPotterMovies + 1)
    }
}

