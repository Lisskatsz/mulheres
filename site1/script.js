document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            headers.forEach(h => {
                if (h !== header) {
                    h.classList.remove('active');
                    const content = h.nextElementSibling;
                    if (content) {
                        content.style.maxHeight = null;
                    }
                }
            });
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content) {
                if (header.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            }
        });
    });
});
