//array of quotes to be used as random messages.

const quotes = [
  'Waste no more time arguing what a good man should be. Be One.',
  'It never cease to amaze me, we all love ourselves more than other people, but care more about their opinion than our own.',
  'If it is not right, do not do it, if it is not true, do not say it.'
];

//const joke = [
 // 'Id tell you a joke about butter but youd probably spread it',];

 function randomMessage(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return randomQuote
 }

  console.log(randomMessage())
