const filterBox = document.querySelectorAll('.section-portfolio__image');
document.querySelector('.section-portfolio__nav-list').addEventListener('click', event => {
    if(event.target.tagName !=='BUTTON') {
        return false;
    }
    let filterClass = event.target.dataset['filter'];
    
    filterBox.forEach(elem => {
        if(!elem.classList.contains(filterClass) && filterClass!=='all') {
            elem.classList.add('hide')
        } else {
            elem.classList.remove('hide');
        }
    });  

});  