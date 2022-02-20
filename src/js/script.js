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