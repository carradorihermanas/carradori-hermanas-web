const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
menuButton?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
  document.body.classList.toggle("menu-open",open);
});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded","false");
  document.body.classList.remove("menu-open");
}));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#contact-form")?.addEventListener("submit",event=>{
  event.preventDefault();
  event.currentTarget.querySelector(".form-status").textContent=
    "El formulario está listo visualmente. Falta conectarlo para recibir los mensajes.";
});
