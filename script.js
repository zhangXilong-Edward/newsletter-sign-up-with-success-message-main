const submitBtn = document.querySelector('#submit-btn');
const successForm = document.querySelector('#success');
const text = document.querySelector('#text');
const graphics = document.querySelector('#graphics');
const email = document.querySelector('#email');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2')

const dismissBtn = document.querySelector('#dismiss-btn');

const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

form1.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
        
        const emailInfoSpan = document.querySelector('#email-info-span'); 
        emailInfoSpan.innerText = email.value;

        successForm.classList.remove('hidden');
        text.classList.add('hidden');
        graphics.classList.add('hidden'); 
    } else {
        const errortext = document.createElement('span');
        const emailLabel = document.querySelector('#email-label'); 

        errortext.innerText = 'Valid email required!'
        errortext.classList.add('color-red');
        email.insertAdjacentElement('beforebegin', errortext);

        emailLabel.parentNode.insertBefore(errortext, emailLabel.nextSibling);
    }
})

form2.addEventListener('submit', ()=>{
    successForm.classList.add('hidden');
    text.classList.remove('hidden');
    graphics.classList.remove('hidden')
})
