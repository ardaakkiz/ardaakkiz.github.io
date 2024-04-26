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
    initializeModalSwiper(); // Initialize or update the swiper on modal open
}
window.addEventListener('resize', initializeModalSwiper);

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

function initializeModalSwiper() {
    // Get the content that needs to be split into slides
    const modalText = `                            
        <p> 
            During his formative years at Ted College, a testament to Atatürk's enduring legacy in Turkey, from 1st grade through 12th grade, Arda was renowned for both his intellect and his ability to forge strong friendships. His journey from 1st to 12th grade was marked by a steadfast dedication and a smart work ethic, characteristics that propelled him to consistently elevate the standards for his peers while fostering an environment of mutual growth and achievement.
        </p>
        <p>
            Inspired by the profound words of his role model Atatürk, "sağlam kafa sağlam vücutta bulunur" Arda not only actively engaged in sports, securing medals and trophies in both individual and team events at local and national tournaments, but also extended his drive and determination to intellectual and organizational arenas. His passion for Math & Science, coupled with his engagement in discussion competitions, led to numerous team victories, showcasing his problem-solving and analytical thinking skills, as well as his critical thinking capabilities. Beyond these achievements, Arda took on leadership roles, significantly contributing to the organization of TEDEF (TED Ereğli Forum), and serving as the chairman of the health committee. These experiences not only honed his organizational skills but also emphasized his commitment to community well-being and intellectual development.
        </p>
        <p>
            Arda's unwavering focus and determination were further put to the test as he prepared for the highly competitive university entrance exam. This rigorous journey underscored the importance of discipline and a strong work ethic in achieving success, with Arda's remarkable achievement of securing the 6th place among 2 million peers serving as a testament to his goal-oriented outlook.
        </p>
        <p>
            Arda's interest in research and development, combined with his talent in Math & Science, led him to pursue a degree in Electrical & Electronics Engineering at Boğaziçi University, one of Turkey's most prestigious institutions. He believed that the advent of semiconductors, which facilitate the processing and transmission of information at the speed of light, would unlock limitless possibilities in fields like AI and Machine Learning, the likely drivers of future technology.
        </p>
        <p>
            During his undergraduate studies, Arda explored his ambitions and strengths through various endeavors, including e-commerce, software development, machine learning, and cybersecurity. He reflected on and addressed his weaknesses to enhance his performance in both professional and social settings. Discovering his entrepreneurial qualities, he shifted his focus towards starting his own business, driven by the desire to make a positive impact on the world.
        </p>
        <p>
            The challenges following the major earthquake on February 6, after his graduation, evoked a deep sense of responsibility in Arda, compelling him to enhance his competencies and readiness to provide meaningful support during crises. This experience catalyzed his determination to focus his efforts on key areas of interest, avoiding the trap of mediocrity that comes with overextension. His diverse interests, from software development to machine learning and cloud engineering, are unified by a common thread: a visionary drive to make a tangible impact and contribute to a brighter future.
        </p>
        <p>
            Arda's journey is characterized by a continuous commitment to growth, learning, and the relentless pursuit of excellence. His strong work ethic, combined with a unique blend of traits and skills, positions him as a responsible and determined individual ready to face the challenges ahead. As he looks forward to contributing his best to the teams and communities he will be part of, Arda remains guided by the principle that the best way to predict the future is to create it, armed with the resolve to leave a lasting impact on the world.
        </p>`;

    // Determine the number of paragraphs per slide based on screen width
    let paragraphsPerSlide;
    const screenWidth = window.innerWidth;
    if (screenWidth < 386) {
        paragraphsPerSlide = 1; // Smaller screens
    } else if (screenWidth < 523) {
        paragraphsPerSlide = 2; // Medium screens
    } else if (screenWidth < 750) {
        paragraphsPerSlide = 3; // Larger screens
    } else if (screenWidth < 860) {
        paragraphsPerSlide = 4; // Larger screens
    } else if (screenWidth < 1418) {
        paragraphsPerSlide = 5; // Larger screens
    } else if (screenWidth < 1740) {
        paragraphsPerSlide = 6; // Larger screens
    } else {
        paragraphsPerSlide = 7;
    }

    // Split the text into paragraphs
    const paragraphs = modalText.split(/(?<=<\/p>)/); // Split while keeping </p> at the end of each paragraph

    // Clear existing swiper slides
    const swiperWrapper = document.querySelector('.swiper-wrapper.read-more');
    swiperWrapper.innerHTML = '';

    // Create slides with the specified number of paragraphs each
    for (let i = 0; i < paragraphs.length; i += paragraphsPerSlide) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.classList.add('read-more');
        slide.innerHTML = paragraphs.slice(i, i + paragraphsPerSlide).join('');
        swiperWrapper.appendChild(slide);
    }

    // Initialize or update Swiper
    if (window.modalSwiper) {
        window.modalSwiper.update(); // If Swiper already initialized, update it
    } else {
        window.modalSwiper = new Swiper('.swiper-container.read-more', {
            loop: false,
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
