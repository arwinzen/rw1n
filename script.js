body = document.querySelector('body');
menuBtn = document.querySelector('.menu-btn');
openForm = document.querySelector('.open-form');
contactCard = document.querySelector('.contact-card');
formWrapper = document.querySelector('.form-wrapper');
contactInfo = document.querySelector('.contact-info');
canvasOverlay = document.querySelector('.canvas-overlay');
navContent = document.querySelector('.nav-content');

menuBtn.addEventListener('click', displayMenu);

function closeBtn(e){
    anime({
        targets: '.menu-icon-line-1',
        rotate: '405deg',
        duration: 1000
    });
    anime({
        targets: '.menu-icon-line-3',
        rotate: '-405deg',
        translateY: '-4px',
        translateX: '5px',
        duration: 1000
    });
}

function openBtn(e){
    anime({
        targets: '.menu-icon-line-1',
        rotate: '0',
        duration: 1000
    });
    anime({
        targets: '.menu-icon-line-3',
        rotate: '0',
        translateX: '0px',
        translateY: '0px',
        duration: 1000
    });
}

function revealMenu(e){
    let t1 = anime.timeline({
        easing:'linear',
        duration: 500
    })

    t1.add({
        targets: canvasOverlay,
        display: 'flex',
        opacity: 1,
        width: '100%',
        height: '100%'
    })
    .add({
        targets: navContent,
        opacity: 1
    })
}

function hideMenu(e){
    let t1 = anime.timeline({
        easing: 'linear',
        duration: 500
    })

    t1
    .add({
        targets: navContent,
        opacity: 0,
    })
    .add({
        targets: canvasOverlay,
        display: 'none',
        opacity: 0,
        width: '0',
        height: '0',
    })
}

function revealForm(){
    let t1 = anime.timeline({
        easing: 'linear',
        duration: 500
    })

    t1
    .add({
        targets: formWrapper,
        display: 'block',
        opacity: 1,
        width: '100%',
        height: '100%',
    })
    .add({
        targets: '.contact-form',
        opacity: 1,
    })
}

function hideForm(){
    let t1 = anime.timeline({
        easing: 'linear',
        duration: 500
    })

    t1
    .add({
        targets: '.contact-form',
        opacity: 0,
    })
    .add({
        targets: formWrapper,
        display: 'none',
        opacity: 0,
        width: '0',
        height: '0',
    })
}

let showMenu = false

function displayMenu(e){
    console.dir(e);
    if (!showMenu){
        console.log('show canvas');
        showMenu = true;
        canvasOverlay.style.display = 'flex';
        body.style.overflow = 'hidden';
        revealMenu(e);
        closeBtn(e);
    } else {
        console.log('hide canvas');
        showMenu = false;
        canvasOverlay.style.display = 'none';
        hideMenu(e);
        body.style.overflow = 'scroll';
        openBtn(e);
    }
}

canvasOverlay.addEventListener('click', menuNavigation);

function menuNavigation(e){
    // console.dir(e.target);
    if (e.target && e.target.matches('a')){
        console.log('anchor tag');
        showMenu = false;
        canvasOverlay.style.display = 'none';
        body.style.overflow = 'scroll';
    }
}

contactCard.addEventListener('click', displayForm);

function displayForm(e){
    console.dir(e.target);
    if (e.target && e.target.matches('.open-form')){
        console.log('hey');
        // formWrapper.style.display = 'block';
        body.style.overflow = 'hidden';
        revealForm();
        closeBtn();
        
    } else if (e.target && e.target.matches('.btn-open') || e.target.matches('.menu-icon-line')){
        openBtn();
        hideForm();
        body.style.overflow = 'scroll';
    }
}

contactCard.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    console.log(e.target);
    e.preventDefault();
    if (e.target && e.target.matches('.contact-form')){
        console.log('submitted');
        openBtn();
        hideForm();
        body.style.overflow = 'scroll';
        alert('Your message has been submitted!');
    }
}