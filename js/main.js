const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.innerText = year;
};
handleCurrentYear();

document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector('.navbar')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll',addShadow)
})