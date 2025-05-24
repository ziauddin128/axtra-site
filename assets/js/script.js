
/* // Nav bar border bottom
let nav_bar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function()
{
  let scrollY = this.window.scrollY;
  if(scrollY > 10)
  {
    nav_bar.classList.add("border-b");
    nav_bar.classList.add("border-[#efefef]");
  }
  else 
  {
    nav_bar.classList.remove("border-b");
    nav_bar.classList.remove("border-[#efefef]");
  }
})

// Scroll To top
let scroll_top = document.querySelector("#scroll-top");

window.addEventListener("scroll", function () {

  console.log('hello');

  if (window.scrollY > 100) {
    scroll_top.classList.remove("invisible", "opacity-0");
  } else {
    scroll_top.classList.add("invisible", "opacity-0");
  }
}); */

// Scroll the whole page to top when button clicked
scroll_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


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



// Allowing Locomotive work with ScrollTrigger And GSap

// function locomotive()
// {
//     gsap.registerPlugin(ScrollTrigger);
//     const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);
//     ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
// }

// locomotive();  




// Animation with GSap

// Hero Section

var tl = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".hero",
    scroller:"#main",
  }
})

tl.from(".hero-title > h1:nth-child(1)",{
  x:"140px",
  opacity:0,
  duration: 0.5,
})

tl.from(".hero-title > h1:nth-child(2)",{
  x:"140px",
  opacity:0,
  duration: 0.5,
},"duration: 0.5")

tl.from(".hero-para > p",{
  x:"140px",
  opacity:0,
  duration: 0.5,
},"duration: 1")

// Brand Section

var tl2 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".brand",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl2.from(".brand h2",{
  y:"40px",
  opacity:0,
  ease: "power2.out",
})

tl2.from(".brand-logo img",{
  y:"40px",
  opacity:0,
  ease: "power2.out",
  stagger: 0.1
})

// About Us

var tl3 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".about-us",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl3.from(".about-right h2", {
  y: 60,
  opacity: 0,
  rotateX: -60,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "sine.out"
});

tl3.from(".about-right h1", {
  y: 60,
  opacity: 0,
  rotateX: -60,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8"); 

tl3.from(".about-para p", {
  y: 60,
  opacity: 0,
  rotateX: -60,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8");

tl3.from(".about-para a", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  ease: "bounce.out"
}, "-=0.8");

// Services

var tl4 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".services",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl4.from(".services_block h2", {
  y: 60,
  opacity: 0,
  rotateX: -60,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "sine.out"
});

tl4.from(".services_block h1", {
  y: 60,
  opacity: 0,
  rotateX: -60,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8"); 

tl4.from(".services_block p", {
  y: 60,
  opacity: 0,
  rotateX: -60,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8");

gsap.utils.toArray(".service-item").forEach((item) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      scroller: "#main",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  tl.from(item.querySelector("h3"), {
    x: -60,
    opacity: 0,
    duration: 1.2,
    ease: "sine.out"
  });

  tl.from(item.querySelector("p"), {
    x: -60,
    opacity: 0,
    duration: 1.2,
    ease: "sine.out"
  }, "-=0.8");

  tl.from(item.querySelector("ul"), {
    x: -60,
    opacity: 0,
    duration: 1.2,
    ease: "sine.out"
  }, "-=0.8");

  tl.from(item.querySelector(".service-item__right a"), {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out"
  }, "-=0.8");
});

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


// Featured Work
var tl5 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".work",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl4.from(".work h2", {
  x: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
});


// Testimonials

var tl6 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".testimonials",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl6.from(".testi-img-box img", {
  scale: 0.7,        
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
});

const container = document.querySelector(".testimonials");
const images = document.querySelectorAll(".testi-img-box img");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;  
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // Calculate how far mouse is from center (-1 to 1)
  const moveX = (x - centerX) / centerX;
  const moveY = (y - centerY) / centerY;
  
  // Set max movement in px (adjust for subtlety)
  const maxMove = 15;
  
  images.forEach(img => {
    gsap.to(img, {
      x: moveX * maxMove,
      y: moveY * maxMove,
      ease: "power3.out",
      duration: 0.3,
      overwrite: "auto"
    });
  });
});

// reset position when mouse leaves the container
container.addEventListener("mouseleave", () => {
  images.forEach(img => {
    gsap.to(img, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    });
  });
});

// Pricing Table

var tl7 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".price",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl7.from(".price-content h2", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
});

tl7.from(".price-content h1", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8"); 

tl7.from(".price-accordion", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8");


tl7.from(".price-card", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)",   // smooth bounce effect
  stagger: 0.15,
}, "-=0.8");


tl7.from(".price-card-box a", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  ease: "bounce.out"
}, "-=0.8");


// Blog 

var tl8 = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".blog",
    scroller:"#main",
    start:"top 80%",
    end:"bottom 20%",
  }
})

tl8.from(".blog_block h2", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
});

tl8.from(".blog_block h1", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8"); 

tl8.from(".blog_block p", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8"); 

tl8.from(".blog-card", {
  x: 60,
  opacity: 0,
  duration: 1.2,
  ease: "sine.out"
}, "-=0.8"); 


