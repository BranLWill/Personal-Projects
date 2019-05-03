var defaultURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "875c986882bd4a41806ba3658264aab2";
var count = 0;
var num = 0;
var pressCount = 0;
var current_word, past_word, list, header;

function display() {
  count = 0;
  pressCount += 1;
  current_word = input.value();
  greeting.html('Searching for articles involving: ' + current_word);
  input.value('');

  loadData();

  for (var i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(current_word, 0, 0);
    pop();
  }
  past_word = current_word;
}

function loadData() {
  if (past_word != current_word) {
    var url = defaultURL + "?api-key=" + apiKey + "&q=" + current_word + "&sort=newest";
    loadJSON(url, getData);
  } else {
    loadJSON(url, getData);
  }
}

function getData(data) {
  var articles = data.response.docs;
  header = createElement("h2", "Links to articles that involve " + current_word + ":");

  for (var i = 0; i < articles.length; i++) {
    count++;

    var result = createHyperLink(i, articles);
    createList(result);

    if (pressCount > 1) {
      if (count == 1) {
        num += 30;
        header.position(20, num);
        num += 50;
        list.position(20, num);
      } else {
        num += 20;
        list.position(20, num);
      }
    } else {
      if (count == 1) {
        num = 75;
        header.position(20, num);
        num += 50;
        list.position(20, num);
      } else {
        num += 20;
        list.position(20, num);
      }
    }
  }
  console.log("-----------------------------------------------------");
}

function createHyperLink(i, articles) {
  var headline = articles[i].headline.main;
  var web_url = articles[i].web_url;
  var result = headline.link(web_url);

  return result;
}

function createList(href) {
  list = createElement("LI", href);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(display);

  greeting = createElement('h2', 'Enter a topic.');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}
