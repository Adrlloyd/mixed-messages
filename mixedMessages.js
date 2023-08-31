//array of quotes to be used as random messages.

const quotes = [
  'Waste no more time arguing what a good man should be. Be One. ',
  'It never cease to amaze me, we all love ourselves more than other people, but care more about their opinion than our own. ',
  'If it is not right, do not do it, if it is not true, do not say it. '
];

const jokes = [
  "I'd tell you a joke about butter, but you'd probably spread it. ",
  "How does NASA organize a company party? They planet. ",
  "I wondered why the baseball kept getting bigger. Then it hit me. "
];

const sendOff = [
  'GoodBye. ',
  'Have a great day. ',
  'Onwards and Upwards. '
]

 function randomMessage(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let randomSendOff = sendOff[Math.floor(Math.random() * sendOff.length)];
    return randomQuote + randomJoke + randomSendOff
 }

  console.log(randomMessage())
