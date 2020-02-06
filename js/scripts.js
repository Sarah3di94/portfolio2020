const headerSpan = document.querySelectorAll('span');
const movement = 5;

// text shadow effect
headerSpan.forEach((spanElement) => {
  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = spanElement;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
    }
    //calculate the maximum movements that we want to happen (total set above)
    const xMovement = Math.round((x / width * movement) - (movement / 12))
    const yMovement = Math.round((y / width * movement) - (movement / 2))

    spanElement.style.textShadow = `${xMovement}px ${yMovement}px 0 rgba(48, 210, 188, 0.18)`;
  };

  spanElement.addEventListener('mousemove', shadow);
});

// navbar color change on scroll
window.onscroll = () => {
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.navbar header');
  
  if(this.scrollY <= 10){
    navbar.style.backgroundColor = '#07342D'; 
    header.style.margin = "2rem 1rem 2rem 2rem";
  } else {
    navbar.style.backgroundColor = '#042E29';
    header.style.margin = "1rem 1rem 1rem 2rem";
  } 
};
