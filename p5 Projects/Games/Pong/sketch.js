let introMenu, playerMenu, gameMenu, winnerMenu,
  playerOne, playerTwo, gameBall;
let count = 0,
  gameCount = 0,
  pastMenu,
  usrChoice,
  winnerText;

function setup() {
  createNewMenu(introMenu);
  unloadScrollbars();
}

function createNewMenu(menu) {
  count++;
  menu = new Menu();

  if (pastMenu != undefined) {
    menu.removePastMenu(pastMenu);
  }

  if (count === 1) {
    titleText = "Welcome to";
    subtitleText = "Pong";
    btn1Text = "Play";
    btn2Text = "Quit";
    btn1Func = createNewMenu;
    btn1Peram = playerMenu;
    btn2Func = closeWindow;
    btn2Peram = undefined;
    pastMenu = menu;
  } else if (count === 2) {
    menu.setFullscreen(true);
    titleText = "How many";
    subtitleText = "Players";
    btn1Text = "One Player";
    btn2Text = "Two Players";
    btn1Func = createGamePageElms;
    btn1Peram = "ONE";
    btn2Func = createGamePageElms;
    btn2Peram = "TWO";
    pastMenu = menu;
  } else if (count === 3) {
    titleText = winnerText;
    subtitleText = "Has Won";
    btn1Text = "Replay";
    btn2Text = "Exit";
    btn1Func = createNewMenu;
    btn1Peram = playerMenu;
    btn2Func = closeWindow;
    btn2Peram = undefined;
    pastMenu = menu;
    count = 1;
  }

  menu.createNewContainer("container");
  menu.createNewTitle("title", titleText);
  menu.createNewSubtitle("subtitle", subtitleText);
  menu.createNewButton(1, "btn btn_1", btn1Text, btn1Func, btn1Peram);
  menu.createNewButton(2, "btn btn_2", btn2Text, btn2Func, btn2Peram);
}

function createGamePageElms(choice) {
  gameCount++;
  usrChoice = choice;
  gameMenu = new Game();
  gameMenu.removePastMenu(pastMenu);
  gameMenu.setupGame(windowWidth, windowHeight);
  setupPlayers();

  if (gameCount === 2) {
    loop();
    gameCount = 1;
  }

  pastMenu = gameMenu;
}

function setupPlayers() {
  console.log(usrChoice);

  if (usrChoice === "ONE") {
    playerOne = new Player(1, 80, windowHeight / 2);
    playerTwo = new AI(windowWidth - 80, windowHeight / 2);
  } else if (usrChoice === "TWO") {
    playerOne = new Player(1, 80, windowHeight / 2);
    playerTwo = new Player(2, windowWidth - 80, windowHeight / 2);
  }
  playerOne.initPlayer();
  playerTwo.initPlayer();
  gameBall = new Ball(windowWidth / 2, windowHeight / 2, playerOne, playerTwo);
}

function draw() {
  if (usrChoice === "ONE" || usrChoice === "TWO") {
    if (!playerOne.isWinner && !playerTwo.isWinner) {
      //console.log("inside game loop");
      background(51);
      gameMenu.createLine(width / 2, height, width / 2, 0);
      gameMenu.createScoreBoard(width / 2.5, 20, 120, 80, playerOne);
      gameMenu.createScoreBoard(width / 1.86, 20, 120, 80, playerTwo);
      playerOne.checkIfWon();
      playerTwo.checkIfWon();
      playerOne.move(windowWidth, windowHeight, gameBall);
      playerOne.display();
      playerTwo.move(windowWidth, windowHeight, gameBall);
      playerTwo.display();
      gameBall.move(windowWidth, windowHeight);
      gameBall.display();
    } else {
      getWinner(playerOne, playerTwo);
      createNewMenu(winnerMenu);
      noLoop();
    }
  }
}

function getWinner(playerOne, playerTwo) {
  if (playerOne.isWinner) {
    winnerText = playerOne.name;
  } else if (playerTwo.isWinner) {
    winnerText = playerTwo.name;
  }
}

function closeWindow() {
  window.close();
}

function unloadScrollbars() {
  document.documentElement.style.overflow = 'hidden';  // firefox, chrome
  document.body.scroll = "no"; // ie only
}
