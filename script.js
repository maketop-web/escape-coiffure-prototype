// ===============================
// Escape Coiffure - MakeTop
// ===============================

// Header au scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.06)";

    }

});

// Apparition au scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card,.photo,.review").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// Défilement fluide

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Effet bouton

document.querySelectorAll(".primary,.btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// Console

console.log("Escape Coiffure by MakeTop");
