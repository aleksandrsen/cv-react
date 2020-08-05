const sendEmailBtn = document.querySelector('.send-email-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal .close');
const sendMessageForm = document.forms.sendMessageForm;
const formInner = document.querySelector('.form-inner');
const result = document.querySelector('.result');

addHandlersToFormElements(sendMessageForm);
// Load images
window.addEventListener('scroll', showVisible);

// Modal
closeModalBtn.addEventListener('click', (e) => {
    modal.style.display = "none";
    resetForm(sendMessageForm);
});

sendEmailBtn.addEventListener('click', (e) => {
    modal.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        resetForm(sendMessageForm);
    }
});

// Send email
sendMessageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (sendMessageForm.querySelectorAll('[data-state="valid"').length !== 3) return;

    formInner.style.display = 'none';
    result.style.display = "block";

    let data = {
        name: sendMessageForm.name.value,
        email: sendMessageForm.email.value,
        message: sendMessageForm.message.value
    };

    fetch('./send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'ok') {
                result.dataset.state = 'check';

                setTimeout(() => {
                    modal.style.display = "none";
                    formInner.style.display = 'block';
                    result.style.display = "none";
                    result.dataset.state = 'spin';
                    resetForm(sendMessageForm);
                }, 1500);
            }
        })
        .catch(e => {
            result.innerHTML = e.status + ' ' + e.message;
            result.dataset.state = 'error';
            setTimeout(() => {
                modal.style.display = "none";
                formInner.style.display = 'block';
                result.style.display = "none";
                result.dataset.state = 'spin';
                resetForm(sendMessageForm);
            }, 1500);
        })
});

function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
            img.src = realSrc;
            img.dataset.src = '';
        }
    }
}

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    let extendedTop = -windowHeight;
    let extendedBottom = 2 * windowHeight;

    let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
    let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

    return topVisible || bottomVisible;
}

function resetForm(formElem) {
    formElem.reset();
    for (let elem of formElem.elements) {
        elem.dataset.state = '';
    }
}

function addHandlersToFormElements(formElem) {
    val(formElem.name, (value) => value.length >= 3);
    val(formElem.email, (value) => value.includes('@'));
    val(formElem.message, (value) => value.length >= 10);

    function val(elem, condition) {
        elem.addEventListener('blur', function (e) {
            if (condition(e.target.value)) {
                this.dataset.state = 'valid';
            } else {
                this.dataset.state = 'invalid';
            }
        });

        elem.addEventListener('focus', function (e) {
            this.dataset.state = '';
        })
    }
}