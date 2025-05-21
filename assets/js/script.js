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