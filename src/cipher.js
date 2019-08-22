window.cipher = {
  encode: encode,
  decode: decode
};

function encode(key, plaintext) {

  // put plaintext chars into an array of ascii codes
  let asciiCodes = plaintext.split("").map(char => char.charCodeAt());

  // Add the key value for each char, keeping non alphabetical chars unchanged
  let ciphertext = asciiCodes.map(num => {
    
    // define the ciphered value
    let ciphered = 0;
    let uppercased = (num >= 65 && num <= 90);
    let lowercased = (num >= 97 && num <= 122);

    // If is a lowercase char, add the key and keep it lowercase.
    if (lowercased && key > 0) {
      ciphered = (((num + key) - 97) % 26 ) + 97;

    // if the key is negative, change de logic    
    } else if (lowercased && key < 0) {
      ciphered = (((num + key) - 122) % 26 ) + 122;
      
    // if is an uppercase char, add the key and keep it uppercase
    } else if (uppercased && key > 0) {
      ciphered = (((num + key) - 65) % 26 ) + 65;
    
    // if the key is negative, change de logic
    } else if (uppercased && key < 0) {
      ciphered = (((num + key) - 90) % 26 ) + 90;

    // if is not alphabetic, keep the char as it is.
    } else {
      ciphered = num;
    }

    // return each char encripted
    return ciphered;
  });

  //change from ascii values back to letters and string
  ciphertext = ciphertext.map(char => String.fromCharCode(char)).join("");
      
  // return the ciphered text 
  return ciphertext;
}

function decode(key, ciphertext) {
  // put plaintext chars into an array of ascii codes
  let asciiCodes = ciphertext.split("").map(char => char.charCodeAt());

  // Add the key value for each char, keeping non alphabetical chars unchanged
  let decipheredText = asciiCodes.map(num => {
    
    // define the ciphered value
    let deciphered = 0;
    let uppercased = (num >= 65 && num <= 90);
    let lowercased = (num >= 97 && num <= 122);

    // If is an lowercase char, add the key and keep it lowercase.
    if (lowercased && key > 0) {
      deciphered = (((num - key) - 122) % 26 ) + 122;

    // if the key is negative, change the logic
    } else if (lowercased && key < 0) {
      deciphered = (((num - key) - 97) % 26 ) + 97;
    
    // if is a uppercase char, add the key and keep it lowercase
    } else if (uppercased && key > 0) {
      deciphered = (((num - key) - 90) % 26 ) + 90;
    
    // if the key is negative, change the logic
    } else if (uppercased && key < 0) {
      deciphered = (((num - key) - 65) % 26 ) + 65;
    
    // if is not alphabetic, keep the char as it is.
    } else {
      deciphered = num;
    }

    // return each char encripted
    return deciphered;
  });

  //change from ascii values back to letters and string
  decipheredText = decipheredText.map(char => String.fromCharCode(char)).join("");
      
  // return the ciphered text 
  return decipheredText;
}