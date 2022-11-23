/**
 * The function that calculates the palindrome
 * Palindrome: number that is the same from beginning or from the end.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-22
 */

import promptSync from 'prompt-sync'
/**
 * The function that checks if the number is a palindrome.
 *
 * @param {number} someInt The number that is not a palindrome
 * @param {number} turn The turn that number is reversed
 * @returns {number[]} answer The list contains answer and turn
 */
function palindrome (someInt: number, turn: number): number[] {
  // This function calculates the factorial using recursion
  const turnRun = turn + 1
  const answer = []
  const someIntString: string = someInt.toString()
  const newInt: number = parseFloat(reverse(someIntString))
  const sum = someInt + newInt
  if (someInt === parseFloat(reverse(someInt.toString()))) {
    answer.push(someInt, 0)
    return answer
  } else if (sum === parseFloat(reverse(sum.toString()))) {
    answer.push(sum, turnRun)
    return answer
  } else {
    return palindrome(sum, turnRun)
  }
}

/**
 * The function that reverses the number.
 *
 * @param {string} someIntString The number that needs to be reversed
 * @returns {string} reverse(someIntString.substr(1)) + someIntString.charAt(0)
 */
function reverse (someIntString: string): string {
  if (someIntString === '') {
    return someIntString
  } else {
    return reverse(someIntString.substr(1)) + someIntString.charAt(0)
  }
}

/**
 * The main function
 * This main function calls a recursive function.
 *
 */

const prompt = promptSync()

const someIntString = prompt('Please enter an integer: ')
const someInt = parseInt(someIntString)

console.log('')
if (isNaN(someInt)) {
  console.log('Invalid number!')
} else if (someInt < 0) {
  console.log('Please enter a positive integer.')
} else {
  const answerList = palindrome(someInt, 0)
  console.log(
    `${answerList[0]} is a palindrome. ${someInt} is a depth ${answerList[1]} palindrome.`
  )
}
console.log('\nDone.')
