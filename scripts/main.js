   function ready() {

    let trAnima = document.querySelector('.container_tap');
    trAnima.classList.add('anima');

    let trAnima1 = document.querySelector('.container_tap1');
    trAnima1.classList.add('anima');

    let trAnima2 = document.querySelector('.container_tap2');
    trAnima2.classList.add('anima');

    let trAnima3 = document.querySelector('.container_tap3');
    trAnima3.classList.add('anima');
    document.querySelector('.wrapper').style.opacity = "0"

    let trAnima4 = document.querySelector('.container_tap4');
    trAnima4.classList.add('anima1');

    let trAnima5 = document.querySelector('.container_tap5');
    trAnima5.classList.add('anima1');

    let trAnima6 = document.querySelector('.container_tap6');
    trAnima6.classList.add('anima1');

    let trAnima7 = document.querySelector('.container_tap7');
    trAnima7.classList.add('anima1');

    let logos = document.querySelector('.bi');
    logos.classList.add('logos');

    let title = document.querySelector('.bee');
    title.classList.add('logos');

    let slogan = document.querySelector('.slogan');
    slogan.classList.add('slog');

    let fotterSite = document.querySelector('.footer_site');
    fotterSite.style.opacity = "1"

    let fog = document.querySelector('.fog');
    fog.style.opacity = "1"


}
// setTimeout(ready, 5000);

const paths = document.querySelectorAll('svg path');
//document.querySelector('.wrapper').style.display="none"



let timerId = setTimeout(() => {
    anime({
        targets: paths,
        duration: 7000,
        delay: 1000,
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
    });
    timerId = setTimeout(ready, 3000); // (*)
}, 0)
 