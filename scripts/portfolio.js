const filterBox = document.querySelectorAll('.section-portfolio__image');
const buttonList = document.querySelector('.section-portfolio__nav-list');
const handleClick = buttonList.addEventListener('click', event => {
    if(event.target.tagName !=='BUTTON') {
        return false;
    }
    const filterClass = event.target.dataset['filter'];
    
    filterBox.forEach(image => {
        if(!image.classList.contains(filterClass) && filterClass!=='all') {
            image.classList.add('hide')
        } else {
            image.classList.remove('hide');
        }
    });  

});  