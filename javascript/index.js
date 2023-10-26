window.addEventListener('load', () => {

    const parallax_elements = document.querySelectorAll(".parallax");

    let xValue = 0, yValue = 0;


    window.addEventListener("mousemove",(e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

       parallax_elements.forEach(element => {
            let speedx = element.dataset.speedx;
            let speedy = element.dataset.speedy;

            let finalx = (-xValue)*(speedx);
            let finaly = (yValue)*(speedy);
            element.style.transform = `translateX(calc(-50% + ${finalx}px)) translateY(calc(-50% + ${finaly}px))`;
        });
    });

    
    
});