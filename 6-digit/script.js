let captch = generateCaptcha();
const captch_show = document.querySelector('#captcha-show');
const cap_input = document.querySelector('#captcha-input');
const verify = document.querySelector('#verify');
const refresh = document.querySelector('#refresh');
const result = document.querySelector('.result');

// Show captcha initially
displayCaptcha(captch);

refresh.addEventListener('click', () => {
    verify.disabled = false;
    captch = generateCaptcha();
    displayCaptcha(captch);
    cap_input.value = '';
    result.innerHTML = '';
    cap_input.focus();
});

verify.addEventListener('click', () => {
    const userInput = cap_input.value.trim();

    if (userInput === '') {
        result.innerHTML = `<div>Enter Captcha!</div>`;
    } else if (Number(userInput) === captch) {
        result.innerHTML = `<div>
            <i class="fa-solid fa-check remark-correct"></i>
            Captcha is verified!!
        </div>`;
    } else {
        result.innerHTML = `<div>
            <i class="fa-solid fa-xmark remark-wrong"></i>
            Wrong Captcha!!
        </div>`;
    }

    verify.disabled = true;
});

// Helpers
function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000);
}

function displayCaptcha(captchaValue) {
    captch_show.innerHTML = `<p class="gen-cap">${captchaValue}</p>`;
}
