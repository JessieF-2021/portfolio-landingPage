
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class on the menu icon to change its appearance
    navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar to show or hide it
};




// let menuIcon = dcument.querySelector("menu-icon");
// let navbar = document.querySelector(".navbar");
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");


// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = se.offsetHeight;
//         let id = sec.getAttribute("id");

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*=* + id + *]').classList.add('active');
//             })
//         }
//     })
// }

// menuIcon.onclick = () => {
//    menuIcon.classList.toggle('bx-x');
//    menuIcon.classList.toggle('active') 
// }

// 2

// let menuIcon = document.querySelector(".menu-icon"); // Assuming it's a class
// let navbar = document.querySelector(".navbar");
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href') === `#${id}`) {
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });
// };

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     menuIcon.classList.toggle('active');
// };
