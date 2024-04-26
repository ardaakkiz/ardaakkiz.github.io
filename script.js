// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Get the modal
var modal = document.getElementById("readMoreModal");

// Get the button that opens the modal
var btn = document.querySelector(".about .btn-box .btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(event) {
    event.preventDefault(); // Add this line
    modal.style.display = "block";
    setTimeout(() => modal.classList.add('show'), 10); // Add the show class after a short delay

    // Initialize Swiper inside the modal when it's opened
    new Swiper('.swiper-container.read-more', {
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination.read-more',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.read-more',
            prevEl: '.swiper-button-prev.read-more',
        },
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove('show'); // Remove the show class
    setTimeout(() => modal.style.display = 'none', 500); // Hide the modal after the transition
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show'); // Remove the show class
        setTimeout(() => modal.style.display = 'none', 500); // Hide the modal after the transition
    }
}

// scroll sections
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            // sec.classList.remove('show-animate');
            
        }
    })

    // sticky header
    let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight -1);
}

/* typed.js */
const typed = new Typed('.multiple-text', {
    strings: ['Electronics Engineer', 'Software Developer', 'Cloud Solutions Architect', 'E-commerce Seller'],
    typeSpeed: 100,
    backSpeed: 10,
    backDelay: 1000,
    startDelay: 1000,
    loop: true
});

/* Send email */
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${fullName.value}<br>
                        Email: ${email.value}<br>
                        Phone: ${phone.value}<br>
                        Message:  ${message.value}<br>`;
    Email.send({
        SecureToken : "55e6436f-827e-4ad1-89b0-370a8c8697a8",
        To : 'ardaakkiz@gmail.com',
        From : "ardaakkiz@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
    message => {
        if (message == 'OK') {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Succesfully!",
                icon: "success"
            });
        }
    }
    );
}

function checkInputs() {
    const requiredInputs = document.querySelectorAll(".required-input")
    for (const input of requiredInputs) {
        if (input.value == "") {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }

        if (requiredInputs[1].value != "") {
            checkEmail();
        }

        requiredInputs[1].addEventListener("keyup", () => {
            checkEmail();
        })

        input.addEventListener("keyup", () => {
            if (input.value != "") {
                input.classList.remove("error");
                input.parentElement.classList.remove("error");
            } else {
                input.classList.add("error");
                input.parentElement.classList.add("error");
            }
        });
    } 
}

function checkEmail() {
    const emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (!fullName.classList.contains("error") && !email.classList.contains("error") &&
    !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
