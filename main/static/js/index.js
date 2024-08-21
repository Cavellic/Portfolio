// show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
// Menu show

// menu hidden
// validate if constants exits
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
}

// remove menu mobile

// scroll sections active link

// change background header
function scrollHeader () {
  const header = document.getElementById ('header');

  if (this.scrollY >= 80) header.classList.add ('scroll-header');
  else header.classList.remove ('scroll-header');
}

window.addEventListener ('scroll', scrollHeader);

// show scroll up
function scroll () {
  const scrollUp = document.getElementById ('scroll-up');

  if (this.scrollY >= 350) scrollUp.classList.add ('show-scroll');
  else scrollUp.classList.remove ('show-scroll');
}

window.addEventListener ('scroll', scroll);

// about tabs
const tabs = document.querySelectorAll ('[data-target]'),
  tabContents = document.querySelectorAll ('[data-content]');

tabs.forEach (tab => {
  tab.addEventListener ('click', () => {
    const target = document.querySelector (tab.dataset.target);

    tabContents.forEach (tabContent => {
      tabContent.classList.remove ('tab__active');
    });

    target.classList.add ('tab__active');

    tabs.forEach (tab => {
      tab.classList.remove ('tab__active');
    });

    tab.classList.add ('tab__active');
  });
});

// contact form

const contactForm = document.getElementById ('contact-form'),
  contactName = document.getElementById ('contact-name'),
  contactEmail = document.getElementById ('contact-email'),
  contactSubject = document.getElementById ('contact-subject'),
  contactMessage = document.getElementById ('contact-message'),
  errorMessage = document.getElementById ('error-message');

const sendEmail = (e) => {
  e.preventDefault ();

  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === '' ||
    contactMessage === ''
  ) {
    errorMessage.textContent = 'Write all the input fields';
  } else {
    emailjs.sendForm (
      'service_b4q91nc',
      'template_ov3rd4t',
      '#contact-form',
      '5u85DEKxGVBOjb40h'
    ).then(() => {
        errorMessage.classList.add('color-first');
        errorMessage.textContent = 'Message sent ✔';

        setTimeout(() => {
            errorMessage.textContent = ''
        }, 5000)
    }, (error) => {
        alert('OOps! Something went wrong...', error);
    }
    );

    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';

  }
};

contactForm.addEventListener ('submit', sendEmail);
