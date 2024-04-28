// page init
function init() {
    video = document.getElementById('bg-video');
    sections = document.querySelectorAll('section');
}

// page main script
function main() {
    // play video
    video.playbackRate = 0.75;
    video.playsInline = true;
    video.play();

    // scroll section event
    observer = new IntersectionObserver((e) => {
        e.forEach((section) => {
            if (section.isIntersecting) {
                const postion = section.target.offsetTop;
                window.scrollTo({ top: postion, behavior: 'smooth' });
            }
        })
    }, { threshold: 0.01 });

    // scroll section checking
    sections.forEach((section) => {
        observer.observe(section);
    });
}