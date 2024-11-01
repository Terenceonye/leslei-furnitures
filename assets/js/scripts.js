document.addEventListener('DOMContentLoaded', ()=> {




    // Select active tab  and color it

    const buttons = document.querySelectorAll('.products button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'))
            button.classList.add('active');
        });
    });

// for FAQ HIDDDING AND SHOWIND
document.querySelectorAll('.faq-item').forEach(faq => {
    const icon = faq.querySelector('i');
    const details = faq.querySelector('.faq-details');

    // Set the first item to be active by default
    // if (details.classList.contains('active')) {
    //     details.style.height = details.scrollHeight + 'px';
    // }

    // Add click event to the icon
    icon.addEventListener('click', function() {
        // Check if the clicked item is already active
        if (details.classList.contains('active')) {
            details.classList.remove('active');
            details.style.height = '0';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            // Collapse all other items
            document.querySelectorAll('.faq-details').forEach(otherDetails => {
                if (otherDetails !== details) {
                    otherDetails.classList.remove('active');
                    otherDetails.style.height = '0';
                    const otherIcon = otherDetails.parentElement.querySelector('i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });

            // Expand the clicked item
            details.classList.add('active');
            details.style.height = details.scrollHeight + 'px';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});


    
    
})