function openLink(url) {
  if (url !== '#') {
    window.open(url, '_blank');
  }
}

// Live time
setInterval(() => {
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleDateString() + " " + now.toLocaleTimeString();
}, 1000);