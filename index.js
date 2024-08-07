"use strict";

        /**
         * PRELOADER
         */

        // const preloader = document.querySelector("[data-preloader]");

        // window.addEventListener("DOMContentLoaded", function () {
        //   preloader.classList.add("loaded");
        // });
 /**
         * HEADER
         */
const AddEventonElem = (elem, elemType, callback) => {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(elemType, callback);
    }
};

const header = document.querySelector("[data-header]");
const topBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("active");
        topBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        topBtn.classList.remove("active");
    }
});
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const Navlinks = document.querySelectorAll("[data-nav-links]");
const toggleNavbar = function() {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};
AddEventonElem(navTogglers, "click", toggleNavbar);

const ClosetoggleNavbar = function() {
    navbar.classList.remove("active");
    navToggleBtn.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
};

AddEventonElem(Navlinks, "click", ClosetoggleNavbar);


// Load More & Show Less for Galler

document.addEventListener('DOMContentLoaded', () => {
    let loadMoreBtn = document.querySelector('#load-more');
    let showLessBtn = document.querySelector('#show-less');
    let currentItem = 4;

    loadMoreBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.container .box-container .box')];
        for (let i = currentItem; i < boxes.length; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'flex';
                boxes[i].classList.add('visible');
            }
        }
        currentItem = boxes.length; // Update currentItem to total number of boxes

        loadMoreBtn.style.display = 'none'; // Hide the "Show More" button after click
        showLessBtn.style.display = 'flex'; // Ensure "Show Less" button is visible
    }

    showLessBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.container .box-container .box')];
        for (let i = 4; i < boxes.length; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'none';
                boxes[i].classList.remove('visible');
            }
        }
        currentItem = 4; // Reset currentItem to initial value

        showLessBtn.style.display = 'none'; // Hide "Show Less" if only 4 items are visible
        loadMoreBtn.style.display = 'flex'; // Show the "Show More" button again
    }
});
// zoom in and zoom out products
document.addEventListener('DOMContentLoaded', () => {
    let loadMoreBtn = document.querySelector('#load-more');
    let showLessBtn = document.querySelector('#show-less');
    let currentItem = 4;

    loadMoreBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.container .box-container .box')];
        for (let i = currentItem; i < boxes.length; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'flex';
                boxes[i].classList.add('visible');
            }
        }
        currentItem = boxes.length; // Update currentItem to total number of boxes

        loadMoreBtn.style.display = 'none'; // Hide the "Show More" button after click
        showLessBtn.style.display = 'flex'; // Ensure "Show Less" button is visible
    }

    showLessBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.container .box-container .box')];
        for (let i = 4; i < boxes.length; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'none';
                boxes[i].classList.remove('visible');
            }
        }
        currentItem = 4; // Reset currentItem to initial value

        showLessBtn.style.display = 'none'; // Hide "Show Less" if only 4 items are visible
        loadMoreBtn.style.display = 'flex'; // Show the "Show More" button again
    }

    // Close the zoomed image when clicking outside of it
    document.querySelectorAll('.zoomed-image').forEach(zoomedImage => {
        zoomedImage.addEventListener('click', (e) => {
            if (e.target === zoomedImage) {
                zoomedImage.closest('details').removeAttribute('open');
            }
        });
    });
});

// search bar
document.getElementById('search-icon').onclick = function() {
    var searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none' || searchInput.style.width === '0px') {
        searchInput.style.display = 'block';
        setTimeout(function() {
            searchInput.style.width = '150px'; // Adjust width as needed
        }, 10); // Small delay to trigger transition
    } else {
        searchInput.style.width = '0';
        setTimeout(function() {
            searchInput.style.display = 'none';
        }, 300); // Matches the transition duration
    }
};

// Add search functionality
document.getElementById('search-input').oninput = function() {
    var filter = this.value.toLowerCase();
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        var name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
};
       
        /**
         * SCROLL REVEAL
         */

        const revealElements = document.querySelectorAll("[data-reveal]");

        const revealElementOnScroll = function() {
            for (let i = 0, len = revealElements.length; i < len; i++) {
                if (
                    revealElements[i].getBoundingClientRect().top <
                    window.innerHeight / 1.15
                ) {
                    revealElements[i].classList.add("revealed");
                } else {
                    revealElements[i].classList.remove("revealed");
                }
            }
        };

        window.addEventListener("scroll", revealElementOnScroll);

        window.addEventListener("load", revealElementOnScroll);

window.addEventListener('popstate', function(event) {
    location.reload();
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = this.href;
    });
});
