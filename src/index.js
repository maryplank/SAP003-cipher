const result = document.getElementById("result");
const text = document.getElementById("text").value;
const key = document.getElementById("key").value;

function encodeText(event) {
  event.preventDefault();
  return document.getElementById("result").value = window.cipher.encode(parseInt(document.getElementById("key").value), document.getElementById("text").value);
}

function decodeText(event) {
  event.preventDefault();
  return document.getElementById("result").value = window.cipher.decode(parseInt(document.getElementById("key").value), document.getElementById("text").value);
}

document.getElementById("encodeBtn").addEventListener("click", encodeText);
document.getElementById("decodeBtn").addEventListener("click", decodeText);

