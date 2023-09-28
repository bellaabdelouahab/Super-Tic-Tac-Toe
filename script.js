function prepareGame() {
    let generalGame =
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ]
    let matrix = [
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
        [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ],
    ]
    console.log("matrix", matrix);
    // get all div  inside game-frame class
    let gameFrame = document.querySelectorAll(".game-frame > div");
    // for every game fram get all 9 divs
    var player = "x"
    var allowedPlace = 0;
    winLines = [[0, 1, 2], [2, 5, 8], [6, 7, 8], [0, 3, 6], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]]
    gameFrame.forEach(game => {
        game.querySelectorAll("div").forEach(div => {
            div.addEventListener("click", function (event) {
                console.log("user clicked on div", div);
                // get data-row and data-col
                let row = div.getAttribute("data-row");
                let col = div.getAttribute("data-col");
                console.log("row", row, "allowedPlace", allowedPlace);
                if (row !== allowedPlace && allowedPlace!== 0) {
                    alert("Not allowed")
                    return;
                }
                console.log("row", row, "col", col);
                // update matrix
                matrix[row-1][col-1] = player;
                // console.log("matrix", matrix);
                div.classList.add(`taken-${player}`);
                // check if col game already won by someone
                if(generalGame[col] === "x" || generalGame[col] === "o"){
                    alert("You can play anyware");
                    return;
                }
                if(winLines.some(line => line.every(index => matrix[row-1][index] === player))){
                    // alert("You won");
                    generalGame[row-1] = player;
                    var game = document.querySelector(`.game-${row}`);
                    game.classList.add(`taken-${player}`);
                    // propmt  the winner to choose the allowedPlace
                    allowedPlace =prompt(`Player ${player} won. Choose the next game to play`, "1");
                    alert("You choose " + allowedPlace);
                    player = player === "o" ? "x" : "o";
                    var allGames = document.querySelectorAll(`.game-frame > div`);
                    allGames.forEach(game => {
                        game.classList.remove(`allowed`);
                    })
                    var game = document.querySelector(`.game-${allowedPlace}`);
                    game.classList.add(`allowed`);
                    return;
                }

                player = player === "o" ? "x" : "o";
                if(generalGame[col] === "x" || generalGame[col] === "o"){
                    alert("You can play anyware");
                    allowedPlace = 0;
                    var allGames = document.querySelectorAll(`.game-frame > div`);
                    allGames.forEach(game => {
                        game.classList.add(`allowed`);
                    })
                    return;
                }
                allowedPlace = col;
                // remove allowed from all other games
                var allGames = document.querySelectorAll(`.game-frame > div`);
                allGames.forEach(game => {
                    game.classList.remove(`allowed`);
                })
                var game = document.querySelector(`.game-${col}`);
                game.classList.add(`allowed`);
                console.log("triggered");
                console.log("allowedPlace", allowedPlace);
            })
        });
    });

    // once the game-frame is clicked, call the function
    // gam/
}

prepareGame();
