/* const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
}); */


// Handle Nav Search
function handle_nav_search()
{
    // Icon Change
    let menu_search_icon = document.querySelector(".menu-search-btn i");
    menu_search_icon.classList.toggle("fa-magnifying-glass");
    menu_search_icon.classList.toggle("fa-xmark");

    // Search Bar Show/Hide
    let nav_search = document.querySelector(".nav-search");
    nav_search.classList.toggle("opacity-0");
    nav_search.classList.toggle("invisible");
    nav_search.classList.toggle("translate-y-4");
}

// Handle Hero Video
function handle_hero_video() 
{
  const wrapper = document.getElementById('heroVideoWrapper');
  wrapper.classList.toggle('opacity-0')
  wrapper.classList.toggle('invisible')
}

// Service Image Move

document.querySelectorAll(".service-item").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;
  const img = elem.querySelector("img");

  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    const bounds = elem.getBoundingClientRect();
    const relX = dets.clientX - bounds.left;
    const relY = dets.clientY - bounds.top;

    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(img, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 0.3,
      left: relX,
      top: relY,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});


// Accordion
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Close all accordion items
    accordionButtons.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      document.getElementById(btn.getAttribute('aria-controls')).classList.add('hidden');
    });

    // Toggle current accordion item
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      content.classList.remove('hidden');
    }
  });
});