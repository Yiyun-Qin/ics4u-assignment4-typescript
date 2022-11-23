/**
 * The function that calculates factorial(3! = 3 * 2 * 1)
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-05
 */

import promptSync from 'prompt-sync'
/**
 * The function that calculates the factorial
 *
 * @param {number} someInt The biggest number in the factorial
 * @returns {number} someInt * factorial(someInt - 1) The number -1
 */
function star(someInt: number, intLength: number): void {
  // This function calculates the factorial using recursion
  if (someInt < 0) {
    console.log('Please enter a positive number!')
  } else {
    if (someInt === 1) {
      console.log('\n*')
      for (let counter2: number = 0; counter2 < intLength; counter2++) {
        for (let counter3: number = 0; counter3 < someInt; counter3++) {
          process.stdout.write('*')
        }
        someInt = someInt + 1
        if (someInt > intLength) {
          break
        }
        console.log('')
      }
    } else {
      console.log('')
      for (let counter: number = 0; counter < someInt; counter++) {
        process.stdout.write('*')
      }
      return star(someInt - 1, intLength)
    }
  }
}

/**
 * The main function
 * This main function calls a recursive function.
 *
 */

const prompt = promptSync()

const someIntString = prompt('Enter an integer: ')
const someInt = parseInt(someIntString)
const stringLen = someInt

console.log('')
if (isNaN(someInt)) {
  console.log('Invalid number!')
} else if (someInt === 1) {
  console.log('*')
  console.log('*')
} else {
  console.log('The pattern is: ')
  star(someInt, stringLen)
}
console.log('\nDone.')
