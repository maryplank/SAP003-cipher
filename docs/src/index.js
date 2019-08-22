const key = document.getElementById("key");
const text = document.getElementById("text");
const result = document.getElementById("result");

function encodeText(event) {
  // prevent the page from reloading
  event.preventDefault();
  
  // if the offset is negative, call the decode function
  if (key.value >= 0) {
    result.value = window.cipher.encode(parseInt(key.value), text.value);
  } else {
    result.value = window.cipher.decode(parseInt(key.value), text.value);
  }
}

function decodeText(event) {
  // prevent the page from reloading
  event.preventDefault();

  // if the offset is negative, call the encode function
  if (key.value >= 0) {
    result.value = window.cipher.decode(parseInt(key.value), text.value);
  } else {
    result.value = window.cipher.encode(parseInt(key.value), text.value);
  }
}

document.getElementById("encodeBtn").addEventListener("click", encodeText);
document.getElementById("decodeBtn").addEventListener("click", decodeText);

