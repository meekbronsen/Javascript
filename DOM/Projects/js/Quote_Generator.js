// const quoteList = [
//   {
//     quote:
//       `" The best way to find yourself is to lose yourself in the service of others."`,
//     legend:
//         'Mahatma Gandhi'
//   },
//   {
//     quote: `" If you want to live a happy life, tie it to a goal, not people or things."`,
//     legend:' Albert Einstein'
//   },
//   {
//     quote: `" Your time is limited so don't waste it living someone else's life."`,
//     legend:'Steve Jobs'
//   },
//   {
//     quote: `" If you look at what you have in life, you'll always have more. If you look at what you don't have, you'll never have enough."`,
//     legend: 'Oprah Winfrey'
//   },
//   {
//     quote: `" It does not matter how slow you go, as long as you don't stop."`,
//     legend: "Confucius"
//   },
//   {
//     quote: `" Our lives begin to end the day we're silent on things that matter."`,
//     legend: " Marting Luther King, Jr"
//   },
//   {
//     quote: `" A journey of a thousand miles begins with one step."`,
//     legend: 'Lao Tzu'
//   }
// ];

// const button = document.querySelector("button");

// button.addEventListener("click",function(){
//   const quoteObj = quoteList[Math.floor(Math.random() * quoteList.length)];

//   const quoteElement = document.querySelector(".quote");
//   const legendElement = document.querySelector(".legend");

//   quoteElement.innerText = quoteObj.quote;
//   legendElement.innerText = quoteObj.legend;
// })
// class Quote {
//   constructor(quote, legend) {
//     this.quote = quote;
//     this.legend = legend;
//   }
// }


// Using OOP
class Quote {
  constructor(quote, legend) {
    this.quote = quote;
    this.legend = legend;
  }
}

class QuoteList {
  constructor() {
    this.quotes = [
      new Quote("The best way to find yourself is to lose yourself in the service of others.", "Mahatma Gandhi"),
      new Quote("If you want to live a happy life, tie it to a goal, not people or things.", "Albert Einstein"),
      new Quote("Your time is limited so don't waste it living someone else's life.", "Steve Jobs"),
      new Quote("If you look at what you have in life, you'll always have more. If you look at what you don't have, you'll never have enough.", "Oprah Winfrey"),
      new Quote("It does not matter how slow you go, as long as you don't stop.", "Confucius"),
      new Quote("Our lives begin to end the day we're silent on things that matter.", "Martin Luther King, Jr."),
      new Quote("A journey of a thousand miles begins with one step.", "Lao Tzu")
    ];
  }

  getRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}

class QuoteApp {
  constructor() {
    this.quoteList = new QuoteList();
    this.button = document.querySelector("button");
    this.quoteElement = document.querySelector(".quote");
    this.legendElement = document.querySelector(".legend");
    this.button.addEventListener("click", () => this.showRandomQuote());
  }

  showRandomQuote() {
    const quoteObj = this.quoteList.getRandomQuote();
    this.quoteElement.innerText = quoteObj.quote;
    this.legendElement.innerText = quoteObj.legend;
  }
}

const app = new QuoteApp();


// Without Class
const quoteApp = {
  quoteList: [
    {
      quote: `" The best way to find yourself is to lose yourself in the service of others."`,
      legend: 'Mahatma Gandhi'
    },
    {
      quote: `" If you want to live a happy life, tie it to a goal, not people or things."`,
      legend:' Albert Einstein'
    },
    {
      quote: `" Your time is limited so don't waste it living someone else's life."`,
      legend:'Steve Jobs'
    },
    {
      quote: `" If you look at what you have in life, you'll always have more. If you look at what you don't have, you'll never have enough."`,
      legend: 'Oprah Winfrey'
    },
    {
      quote: `" It does not matter how slow you go, as long as you don't stop."`,
      legend: "Confucius"
    },
    {
      quote: `" Our lives begin to end the day we're silent on things that matter."`,
      legend: " Marting Luther King, Jr"
    },
    {
      quote: `" A journey of a thousand miles begins with one step."`,
      legend: 'Lao Tzu'
    }
  ],

  button: document.querySelector("button"),

  init: function() {
    this.button.addEventListener("click", () => {
      const quoteObj = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];

      const quoteElement = document.querySelector(".quote");
      const legendElement = document.querySelector(".legend");

      quoteElement.innerText = quoteObj.quote;
      legendElement.innerText = quoteObj.legend;
    });
  }
};

quoteApp.init();
