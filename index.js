let bm = document.getElementsByClassName('bm');

Array.prototype.forEach.call(bm, icon => {
    let anim = bodymovin.loadAnimation({
        container: icon,
        path: `icons/${icon.dataset.file}.json`,
        renderer: 'svg',
        loop: false,
        autoplay: false, 
    })
    icon.addEventListener('mouseenter', () => {
        anim.setDirection(1)
        anim.play();
    })
    
    icon.addEventListener('mouseleave', () => {
        anim.setDirection(-1)
        anim.play();
    })
})

// co zrobić żeby przy mobilnej wersji po kliknieciu ikona wracała do stanu 0 



 

