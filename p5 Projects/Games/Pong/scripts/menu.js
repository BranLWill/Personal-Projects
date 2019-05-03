class Menu {
  constructor(menuType) {
    this.type = menuType;
    this.container;
    this.title;
    this.subtitle;
    this.button1;
    this.button2;
    this.btn1Num = 1;
    this.btn2Num = 2;
  }
  createNewContainer(containerName) {
    this.container = document.createElement("div");
    this.container.className = containerName;
    document.body.appendChild(this.container);
  }
  createNewTitle(titleName, titleText) {
    this.title = document.createElement("span");
    this.title.className = titleName;
    this.title.innerHTML = titleText;
    this.container.appendChild(this.title);
  }
  createNewSubtitle(subtitleName, subtitleText) {
    this.subtitle = document.createElement("span");
    this.subtitle.className = subtitleName;
    this.subtitle.innerHTML = subtitleText;
    this.container.appendChild(this.subtitle);
  }
  createNewButton(btnNum, btnName, btnText, func, menu) {
    let button;

    if (btnNum == this.btn1Num) {
      this.button1 = document.createElement("BUTTON");
      button = this.button1;
    } else if (btnNum == this.btn2Num) {
      this.button2 = document.createElement("BUTTON");
      button = this.button2;
    }

    if (menu === undefined) {
      button.onclick = function() { func() };
    } else {
      button.onclick = function() { func(menu) };
    }

    button.className = btnName;
    button.innerHTML = btnText;
    this.container.appendChild(button);
  }
  removePastMenu(menu) {
    menu.removeMenu();
  }

  removeMenu() {
    document.body.removeChild(this.container);
  }
  setFullscreen(full) {
    fullscreen(full);
  }
}
