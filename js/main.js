// start header
let searchForm = document.querySelector(".search-form");
document.querySelector(".fa-search").onclick = function () {
    searchForm.classList.toggle("active");
    lognForm.classList.remove("active");
    shoppingCard.classList.remove("active");
    nav.classList.remove("active");
}

let shoppingCard = document.querySelector(".shopping-card");
document.querySelector(".fa-shopping-cart").onclick = function () {
    shoppingCard.classList.toggle("active");
    lognForm.classList.remove("active");
    searchForm.classList.remove("active");
    nav.classList.remove("active");
}

let lognForm = document.querySelector(".login");
document.querySelector(".fa-user").onclick = function () {
    lognForm.classList.toggle("active");
    shoppingCard.classList.remove("active");
    searchForm.classList.remove("active");
    nav.classList.remove("active");
} 

let nav = document.querySelector("nav");
document.querySelector(".fa-bars").onclick = function () {
    nav.classList.toggle("active");
    shoppingCard.classList.remove("active");
    searchForm.classList.remove("active");
    lognForm.classList.remove("active");
} 
// active class on icon
let icon = document.querySelectorAll(".icon div");
icon.forEach((e) => {
    e.addEventListener('click', function () {
        icon.forEach((x) => x.classList.remove("active-class"));
        this.classList.add("active-class");

        // search form
        let inp = document.querySelector(".search-form");
        let search = document.querySelector(".fa-search");
        if (inp.classList.contains("active")) {
            search.classList.add("active-class");
            search.classList.remove(".not-active");
        } else {
            search.classList.remove("active-class");
            search.classList.add(".not-active");
        };

        // shopping card
        let shoppingCard = document.querySelector(".shopping-card");
        let card = document.querySelector(".fa-shopping-cart");
        if (shoppingCard.classList.contains("active")) {
            card.classList.add("active-class");
            card.classList.remove(".not-active");
        } else {
            card.classList.remove("active-class");
            card.classList.add(".not-active");
        };

        // login form
        let login = document.querySelector(".login");
        let user = document.querySelector(".fa-user");
        if (login.classList.contains("active")) {
            user.classList.add("active-class");
            user.classList.remove(".not-active");
        } else {
            user.classList.remove("active-class");
            user.classList.add(".not-active");
        };

        // bars
        let barsLink = document.querySelector("nav");
        let bars = document.querySelector(".fa-bars");
        if (barsLink.classList.contains("active")) {
            bars.classList.add("active-class");
            bars.classList.remove(".not-active")
        } else {
            bars.classList.remove("active-class");
            bars.classList.add(".not-active");
        }
    });
});
// start product slide
let swiper = new Swiper(".product-slide", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
// end product slide
// start review slide
let swiper2 = new Swiper(".box-slide", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
// end review slide
let goTop = document.querySelector(".fa-arrow-up");
let home = document.querySelector(".home");
let links = document.querySelectorAll("nav a");
window.onscroll = () => {
    // start nav active in scroll
    let sections = document.querySelectorAll("section");
    let scrollPosition = document.documentElement.scrollTop;
    sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
          scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
          let currentId = section.attributes.id.value;
          removeAllActiveClasses();
          addActiveClass(currentId);
        }
    });
    // start go top
    if (window.scrollY > home.offsetTop) {
    goTop.style.cssText = "bottom: 35px; transition: .5s;";
    } else {
        goTop.style.cssText = "bottom: 110%";
    };
    // end go top
};
    
let removeAllActiveClasses = function () {
    links.forEach((el) => {
    el.classList.remove("active-class");
    });
};
    
let addActiveClass = function (id) {
    // console.log(id);
    let selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active-class");
};
// end nav active in scroll  
goTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};
// end go top