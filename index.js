let navlist = document.querySelector('.navlist');

menubar.onclick () => {
    menu.classlist.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classlist.remove('bx-x');
    navlist.classlist.remove('open')
}