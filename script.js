let zIndex = 10;

function bringToFront(el){
  el.style.zIndex = ++zIndex;
}

function openApp(id){
  const el = document.getElementById(id);
  el.style.display = "flex";
  bringToFront(el);
}

function closeApp(id){
  document.getElementById(id).style.display = "none";
}

function minimizeApp(id){
  document.getElementById(id).style.display = "none";
}

function toggleMaximize(id){
  document.getElementById(id).classList.toggle("maximized");
}

/* DRAG */
function drag(e, el){
  const x = e.clientX - el.offsetLeft;
  const y = e.clientY - el.offsetTop;

  function move(ev){
    el.style.left = (ev.pageX - x) + "px";
    el.style.top  = (ev.pageY - y) + "px";
  }

  document.addEventListener("mousemove", move);
  document.onmouseup = ()=> document.removeEventListener("mousemove", move);
}

/* TIME */
setInterval(()=>{
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString();
},1000);