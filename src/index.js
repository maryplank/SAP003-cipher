const key = document.getElementById("key");
const text = document.getElementById("text");
const result = document.getElementById("result");

function encodeText(event) {
  event.preventDefault();
  result.value = window.cipher.encode(parseInt(key.value), text.value);
}

function decodeText(event) {
  event.preventDefault();
  result.value = window.cipher.decode(parseInt(key.value), text.value);
}

document.getElementById("encodeBtn").addEventListener("click", encodeText);
document.getElementById("decodeBtn").addEventListener("click", decodeText);

