function encodeText(event) {
  event.preventDefault();
  return window.cipher.encode();
}

function decodeText(event) {
  event.preventDefault();
  return window.cipher.decode();
}

document.getElementById("encodeBtn").addEventListener("click", encodeText);
document.getElementById("decodeBtn").addEventListener("click", decodeText);