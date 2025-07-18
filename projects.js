let icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "photos/sun.png"
    } else {
        icon.src = "photos/moon.png"
    }
}


// let readmore1 = document.getElementById("readmore1")
// readmore.onclick = function () {
//     document.body.classList.toggle("")
// }


// let readmore2 = document.getElementById("readmore2")
// readmore.onclick = function () {
//     document.body.classList.toggle("")
// }


// let readmore3 = document.getElementById("readmore3")
// readmore.onclick = function () {
//     document.body.classList.toggle("")
// }


// let readmore4 = document.getElementById("readmore4")
// readmore.onclick = function () {
//     document.body.classList.toggle("")
// }


// let readmore5 = document.getElementById("readmore5")
// readmore.onclick = function () {
//     document.body.classList.toggle("")
// }


// let readmore6 = document.getElementById("readmore6")
// readmore.onclick = function () {
//     document.body.classList.toggle("")
// }       

document.addEventListener('DOMContentLoaded', () => {

    const readMore1 = document.getElementById('readmore1');
    const readMore2 = document.getElementById('readmore2');
    const readMore3 = document.getElementById('readmore3');
    const readMore4 = document.getElementById('readmore4');
    const readMore5 = document.getElementById('readmore5');
    const readMore6 = document.getElementById('readmore6');

    const readMoreButtons = [
        readMore1, readMore2, readMore3,
        readMore4, readMore5, readMore6
    ];

    readMoreButtons.forEach(button => {

        if (button) {
           
            const parentParagraph = button.parentElement;
            const hiddenTextSpan = parentParagraph.querySelector('.hidden-text');

            if (hiddenTextSpan) {
                hiddenTextSpan.style.display = 'none'; 
                button.textContent = 'Read More';     
            }

            button.addEventListener('click', () => {
                if (hiddenTextSpan) { 
                    if (hiddenTextSpan.style.display === 'none') {
                       
                        hiddenTextSpan.style.display = 'inline'; 
                        button.textContent = 'Read Less';       
                    } else {
                       
                        hiddenTextSpan.style.display = 'none';
                        button.textContent = 'Read More';
                    }
                }
            });
        }
    });

    
    const projectSearchInput = document.getElementById('projectSearch');
    const projectCards = document.querySelectorAll('.project-card'); 

    if (projectSearchInput && projectCards.length > 0) {
        projectSearchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase(); 

            projectCards.forEach(card => {

                 let category = 0;

                if (card.dataset.category) { 
                    category = card.dataset.category.toLowerCase(); 
                } else {
                    category = ''; 
                }

                if (category.includes(searchTerm)) {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none'; 
                }

                
            });
        });
    }

});