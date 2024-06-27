const home = document.querySelector('.home');
const sidebar = document.querySelector('.sidebar');
const btn = document.querySelector('.sidebarbtn');
const btna = document.querySelector('.sidebarbtn.active');

btn.onclick = () => {
    home.classList.toggle('active');
    sidebar.classList.toggle('active');
    btn.classList.toggle('active');
    location.href = '#active'
    if (btn.classList.contains('active')){
        btn.innerHTML = '<i class="fa fa-xmark"></i>';
    }else {
        btn.innerHTML = '<i class="fa fa-bars"></i>';
    }
}