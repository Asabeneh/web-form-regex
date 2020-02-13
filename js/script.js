const allInputElements = document.querySelectorAll('input')
const submitButton = document.querySelector('button')
const textarea = document.querySelector('textarea')

const checkValidValues = function(patterns) {
  const value = Object.values(patterns).every(pattern => {
    return pattern.valid === true
  })
  return value
}

allInputElements.forEach(element => {
  let name
  let pattern
  let checker
  let singleTest
  element.addEventListener('input', e => {
    name = e.target.name
    pattern = patterns[name]['pattern']
    checker = checkValidValues(patterns)
    console.log(checker)
    singleTest = validate(e.target, pattern)

    if (singleTest) {
      element.className = 'valid'
      patterns[name]['valid'] = true
      if (checker) {
        submitButton.disabled = false
        submitButton.className = 'submit-button'
      } else {
        submitButton.classList.remove('submit-button')
        submitButton.disabled = true
      }
    } else {
      patterns[name]['valid'] = false
      element.className = 'invalid'
      submitButton.disabled = false
      submitButton.classList.remove('submit-button')
    }
  })
})

const validate = function(element, pattern) {
  let testResult = pattern.test(element.value)
  testResult ? true : false
  return testResult
}

submitButton.addEventListener('submit', e => {
  e.preventDefault()
  console.log('hi')
  console.log(patterns)
})
