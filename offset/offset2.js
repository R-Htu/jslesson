const boxes = document.querySelectorAll('.box');


boxes.forEach(box => {
    box.addEventListener('click', () => {
        const x = box.offsetLeft;
        const y = box.offsetTop;
        //console.log(x,y);

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `X: ${x}, Y: ${y}`;

        tooltip.style.left = (x + 20) + "px";
        tooltip.style.top = (y - 30) + "px";

        document.body.appendChild(tooltip);

        setTimeout(()=>{
            tooltip.remove();
        },1000);


    })
});

const fruits = ['apple','kiwi',"mango",'lime'];

fruits.forEach(fruit => {
    console.log(fruit);
})

