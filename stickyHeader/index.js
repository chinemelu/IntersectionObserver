document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.getElementById('myHeader')

    const topContainer = document.getElementById('top-container')

    const options = {
        // root: null,
        // rootMargin: '0px 0px 0px 0px',
    }
    

    const intersectionCallback = (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            header.classList.add('sticky')
          } else {
            header.classList.remove('sticky')
          }
        });
    }

    const observer = new IntersectionObserver(intersectionCallback, options);



    observer.observe(topContainer)
});