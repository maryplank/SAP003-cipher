window.cipher = {
  encode: encode,
  decode: decode
};

function encode(key, plaintext) {

  // if key is 26 or bigger, use the remainder to go around the alphabet
  if (key >= 26) {
    key = key % 26;
  }

  // put plaintext chars into an array of ascii codes
  asciiCodes = plaintext.split("").map(char => char.charCodeAt());

  // Add the key value for each char, keeping non alphabetical chars unchanged
  let ciphertext = plaintext.map(num => {
    
    // define the ciphered value
    let ciphered = num + key;
  
    // check if lowercased
    if (num >= 97 && num <= 122) {
      // if lowercased, check if ciphered code goes above or below the alphabet and keep it in lowercased letters
      if (ciphered > 122) {
        ciphered = ciphered - 26;
      } else if (ciphered < 97) {
        ciphered = ciphered + 26;
      }
    
    // check if uppercased
    } else if (num >= 65 && num <= 90) {
      // if uppercased, check if ciphered code goes above or below the alphabet and keep it in uppercased letters
      if (ciphered > 90) {
        ciphered = ciphered - 26;
      } else if (ciphered < 65) {
        ciphered = ciphered + 26;
      }

    // if it's neither, keep the char as it is
    } else {
      ciphered = num;
    }

    // return the encripted code
    return ciphered;
  });

  //change from ascii values back to letters and string
  ciphertext = ciphertext.map(char => String.fromCharCode(char)).join("");
      
  // return the ciphered text 
  return ciphertext;
}

function decode(key, ciphertext) {

  // if key is 26 or bigger, use the remainder to go around the alphabet
  if (key >= 26) {
    key = key % 26;
  }

  // put ciphertext chars into an array of ascii codes
  ciphertext = ciphertext.split("").map(char => char.charCodeAt());

  // 'Add' the key value for each char, keeping non alphabetical chars unchanged
  let decipheredText = ciphertext.map(num => {
    
    // define the deciphered value
    let deciphered = num - key;
  
    // check if lowercased
    if (num >= 97 && num <= 122) {
      // if lowercased, check if deciphered code goes above or below the alphabet and keep it in lowercased letters
      if (deciphered > 122) {
        deciphered = deciphered - 26;
      } else if (deciphered < 97) {
        deciphered = deciphered + 26;
      }
    
    // check if uppercased
    } else if (num >= 65 && num <= 90) {
      // if uppercased, check if deciphered code goes above or below the alphabet and keep it in uppercased letters
      if (deciphered > 90) {
        deciphered = deciphered - 26;
      } else if (deciphered < 65) {
        deciphered = deciphered + 26;
      }

    // if it's neither, keep the char as it is
    } else {
      deciphered = num;
    }
    
    // return the decripted code
    return deciphered;
  });

  //change from ascii values back to letters and string
  decipheredText = decipheredText.map(char => String.fromCharCode(char)).join("");

  // return the deciphered text
  return decipheredText;
}