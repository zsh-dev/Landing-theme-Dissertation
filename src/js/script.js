const burger = document.querySelector('.burger'),
        headerWrap = document.querySelector('.header__wrap');

burger.addEventListener('click', () => {
    headerWrap.classList.add('active')
    document.body.classList.add('lock')
})
headerWrap.addEventListener('click', ({target}) => {
    if (target == headerWrap || target.closest('.btn-close')) {
        headerWrap.classList.remove('active')
        document.body.classList.remove('lock')

    }
})

// MODAL

const modalOpenBtns = document.querySelectorAll('[data-toggle="modal"]'),
    modal = document.querySelector('.modal');

    modalOpenBtns.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('active')
            document.body.classList.add('lock')
        })
    })

    modal.addEventListener('click', ({target}) => {
        if (target == modal || target.closest('.btn-close')) {
            modal.classList.remove('active')
            document.body.classList.remove('lock')
    
        }
    })

// МАСКА ВВОДА НОМЕРА ТЕЛЕФОНА
var eventCalllback = function (e) {
 
    var el = e.target,
    clearVal = el.dataset.phoneClear,
    pattern = el.dataset.phonePattern,
    matrix_def = "+7(___) ___-__-__",
    matrix = pattern ? pattern : matrix_def,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = e.target.value.replace(/\D/g, "");
     
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
            e.target.value = '';
            return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
}

var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
    }
}
