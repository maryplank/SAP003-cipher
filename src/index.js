function encodeText(event) {
  event.preventDefault();
  return window.cipher.encode(parseInt(document.getElementById("key").value), document.getElementById("text").value);
}

function decodeText(event) {
  event.preventDefault();
  return window.cipher.decode(parseInt(document.getElementById("key").value), document.getElementById("text").value);
}

document.getElementById("encodeBtn").addEventListener("click", encodeText);
document.getElementById("decodeBtn").addEventListener("click", decodeText);