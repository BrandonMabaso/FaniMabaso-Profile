const typingText = document.getElementById("typing");
const words = ["Data Analytics", "Software Development", "Systems Analysis", "Database Design", "Python & SQL"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function type(){
    if (i >= words.length) i = 0;
    currentWord = words[i];
    if (!isDeleting){
        typingText.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length){ isDeleting = true; setTimeout(type, 1200); return; }
    } else {
        typingText.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0){ isDeleting = false; i++; }
    }
    setTimeout(type, isDeleting ? 40 : 90);
}

document.addEventListener("DOMContentLoaded", () => {
    if (prefersReduced) {
        typingText.textContent = words[0];
    } else {
        type();
    }

    // Scroll reveal for sections
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
});
