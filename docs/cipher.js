window.cipher = {
  encode: encode,
  decode: decode
};

function isUpperCase(num) {
  return num >= 97 && num <= 122;
}

function isLowerCase(num) {
  return num >= 65 && num <= 90;
}

function encode(key, text) {
  const offset = Math.abs(key); // make key positive

  return text
    .split("") // array
    .map(char => char.charCodeAt()) // ascii
    .map(num => {
      if (isUpperCase(num)) {
        return (((num + offset) - 97) % 26) + 97;
      }
    
      if (isLowerCase(num)) {
        return (((num + offset) - 65) % 26) + 65;
      }
  
      return num;
    })
    .map(char => String.fromCharCode(char)) // back to alpha chars
    .join(""); // back to string
}

function decode(key, text) {
  const offset = Math.abs(key); // make key positive

  return text
    .split("") // array
    .map(char => char.charCodeAt()) // ascii
    .map(num => {
      if (isUpperCase(num)) {
        return (((num - offset) - 122) % 26) + 122;
      }
    
      if (isLowerCase(num)) {
        return (((num - offset) - 90) % 26) + 90;
      }
  
      return num;
    })
    .map(char => String.fromCharCode(char)) // back to alpha chars
    .join(""); // back to string
}
