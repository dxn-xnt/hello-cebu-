const firstView = document.querySelector('.first-view');
    const lineBox = document.querySelector('.line-box');
    const exploreSection = document.querySelector('.explore');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lineBox.classList.remove('scrolled');
                exploreSection.classList.remove('scrolled');
            } else {
                lineBox.classList.add('scrolled');
                exploreSection.classList.add('scrolled');
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(firstView);



const navPanel = document.querySelector('.nav-panel');


window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) { 
        navPanel.classList.add('scrolled'); 
    } else {
        navPanel.classList.remove('scrolled'); 
    }
});