const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();

const timeContainer = document.getElementById("time-container");
  const BIRTH_DAY = "12-07-1999";
  const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
  }, 1000);