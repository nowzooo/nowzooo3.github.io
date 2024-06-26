$(document).ready(function() {
    $('.tap').click(function() {
        var $tap = $(this).closest('.tap');
        var $click = $tap.find('.click');

        // .click 요소가 활성화될 때
        if (!$tap.hasClass('active')) {
            $click.css('max-height', '300px');
            $tap.addClass('active');
            $tap.find('.tap h2').hide(); // h2 요소 숨기기
        } else { // .click 요소가 비활성화될 때
            $click.css('max-height', '0');
            $tap.removeClass('active');
            $tap.find('h2').show(); // h2 요소 보이기
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll(".fade-wrap");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll(".fade-wrap2");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
});
