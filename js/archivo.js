
/*Menu resposive footer*/

$(function() {
    $('.toggle').click(function() {
        $('.nav-item').toggleClass('slide-out');
        $('.hamburger-1').toggleClass('cross-right');
        $('.hamburger-2').toggleClass('cross-hide');
        $('.hamburger-3').toggleClass('cross-left');
        $('.wobble').addClass('ripple');
        setTimeout(function(){
        $('.wobble').removeClass('ripple');
        }, 1000);
    });
});

/*Venta emergente del footer*/

var btnAbrirPop = document.getElementById('botonAbrirFooter'),
    ventanaEmergenteFooter = document.getElementById('ventanaEmergenteFooter'),
    popupFooter = document.getElementById('popup_footer'),
    btnCerrarPopup = document.getElementById('cerrar-popup');

btnAbrirPop.addEventListener('click', function(){
    ventanaEmergenteFooter.classList.add('active');
    popupFooter.classList.add("active")
});

btnCerrarPopup.addEventListener('click', function(){
    ventanaEmergenteFooter.classList.remove('active');
    popupFooter.classList.remove("active")
});

/*Pop up search busqueda*/

var btnAbrirHeader = document.getElementById('botonAbrirPopHeader'),
    ventanaEmergenteHeader = document.getElementById('busquedaEnHeader'),
    popupHeader = document.getElementById('formularioBusquedaHeader'),
    btnCerrarHeader = document.getElementById('botonCerrarFormHeader');

btnAbrirHeader.addEventListener("click", function(){
    ventanaEmergenteHeader.classList.add("active");
    popupHeader.classList.add("active")
});

btnCerrarHeader.addEventListener('click', function(){
    busquedaEnHeader.classList.remove('active');
    popupHeader.classList.remove("active")
});

/*Popup Login de usuario*/

var btnAbrirUserLogin= document.getElementById('btnAbrirUserLogin'),
    ventanaUserLogin = document.getElementById('header__userLogin'),
    popupUserLogin = document.getElementById('header__loginform'),
    btnCerrarUserLogin = document.getElementById('btnCerrarLoginUser');

btnAbrirUserLogin.addEventListener("click", function(){
    ventanaUserLogin.classList.add("active");
    popupUserLogin.classList.add("active")
});

btnCerrarUserLogin.addEventListener('click', function(){
    ventanaUserLogin.classList.remove('active');
    popupUserLogin.classList.remove("active")
});

/*Popup Nav resposnive*/

var btnAbrirNavVar= document.getElementById('btnAbrirNavVar'),
    ventanaNavVar = document.getElementById('header__navPopup'),
    popupNavVar = document.getElementById('header__navVarPopup'),
    btnCerrarNavVar = document.getElementById('popupnav__cerrar');

btnAbrirNavVar.addEventListener("click", function(){
    ventanaNavVar.classList.add("active");
    popupNavVar.classList.add("active")
});

btnCerrarNavVar.addEventListener('click', function(){
    ventanaNavVar.classList.remove('active');
    popupNavVar.classList.remove("active")
});