const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll('img').length;
    //console.log(itemNumber);
    let clickCounter = 0;
    arrow.addEventListener('click', ()=>{
        clickCounter++;
        ratio = Math.floor(innerWidth/270);
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get('transform')[0].x.value - 300}px)`; 
                //console.log(movieLists[i].computedStyleMap().get('transform')[0].x.value);
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    // console.log(movieLists[i].computedStyleMap().get('transform'));
});

//log screensize width
//console.log(Math.floor(innerWidth/270));

//for light mode toggle
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-icon'); 

ball.addEventListener('click',()=>{
    items.forEach(item => {
        item.classList.toggle("active");
    })
    ball.classList.toggle('active');
});


// for menu-icon--------------------------------------------------------------------------------
let sidebar = document.querySelector('.sidebar');
let menuIcon = document.querySelector('#menu-icon');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    sidebar.classList.toggle('open');
}

// for navbar sticky--------------------------------------------------------------------------
const navbar = document.querySelector('.navbar-container');
window.addEventListener('scroll', function(){
    navbar.classList.toggle('sticky', window.screenY > 50);
});
