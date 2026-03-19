document, addEventListener('DOMContentLoaded', function () {
    
    const header = this.document.querySelector('.header');

    function toggleHeaderTransparency() {
        if (window.scrollY > 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent')
        }

        }
    }

    window.addEventListener('scroll', toggleHeaderTransparency)
})