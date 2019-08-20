window.cipher = {
  encode: encode,
  decode: decode
};

function encode() {

  // prevent form from reloading the page
  event.preventDefault()

  // save key and text to encode in variables
  let key = parseInt(document.getElementById('cipherKey').value)
  let plaintext = document.getElementById('toCipher').value

  // if key is 26 or bigger, use the remainder to go around the alphabet
  if (key >= 26) {
    key = key % 26
  }

  // put plaintext chars into an array
  plaintext = plaintext.split('')
  console.log(`Plaintext: ${plaintext}`)

  // change chars into ascii
  plaintext = plaintext.map(char => char.charCodeAt())
  console.log(`Plaintext to ascii: ${plaintext}`)

  // Add the key value for each char, if lowercased
  let ciphertext = plaintext.map(num => {
    
    // define the ciphered value
    let ciphered = num + key
  
    // check if lowercased
    if (num >= 97 && num <= 122) {
      // if lowercased, check if ciphered code goes above the alphabet
      if (ciphered > 122) {
        // if so, subtract 26 to keep in the lowercase letters
        ciphered = ciphered - 26
      }
    
    // check if uppercased
    } else if (num >= 65 && num <= 90) {
      // if uppercased, check if ciphered code goes above the alphabet
      if (ciphered > 90) {
        // if so, subtract 26 to keep in the uppercase letters
        ciphered = ciphered - 26
      }

    // if it's neither, keep the code as it is
    } else {
      ciphered = num
    }

    // return the encripted code
    return ciphered
  
  })

  console.log(`ascii + key: ${ciphertext}`)

  //change from ascii values back to letters
  ciphertext = ciphertext.map(char => String.fromCharCode(char)).join('')
  console.log(`ciphertext: ${ciphertext}`)
      
  // print ciphered text

}

function decode() {
  alert('decode called');
}