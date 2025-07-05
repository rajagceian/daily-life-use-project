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
    } else if (userInput === captch) {
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
    const chars = [
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z',
    '0','1','2','3','4','5','6','7','8','9'
    ];
        let newCap = '';
    for(let i=0;i<6;i++){ 
        const randomIdx = Math.floor(Math.random()*chars.length);
        newCap += chars[randomIdx];
    }
    return newCap;
}

function displayCaptcha(captchaValue) {
    captch_show.innerHTML = `<p class="gen-cap">${captchaValue}</p>`;
}
