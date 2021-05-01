const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (array) => {
  return tutorials.map(title => {
    let words = title.split(" ");
    let word = words.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1) );
<<<<<<< HEAD
    let final = word.join(' ')
=======
    let final = word.join('')
>>>>>>> 119a246c2c43a446e1f0bc47bab2cefdd5bdaad0
    return final
  })
}