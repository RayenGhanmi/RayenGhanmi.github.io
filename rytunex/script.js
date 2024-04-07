// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(index) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    // Update the image source and alt text based on the index
    var src = "rytunex_" + index;
    var alt = "RyTuneX Screenshot " + index;

    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt;
    captionText.innerHTML = alt;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.getElementById('advanced').addEventListener('click', function() {
    event.preventDefault();
    window.open('advanced.html', '_blank');
});
document.getElementById('basic').addEventListener('click', function() {
    event.preventDefault();
    window.open('basic.html', '_blank');
});
document.getElementById('performance').addEventListener('click', function() {
    event.preventDefault();
    window.open('performance.html', '_blank');
});
document.getElementById('privacy').addEventListener('click', function() {
    event.preventDefault();
    window.open('privacy.html', '_blank');
});
document.getElementById('systemfeatures').addEventListener('click', function() {
    event.preventDefault();
    window.open('systemfeatures.html', '_blank');
});
document.getElementById('telemetry').addEventListener('click', function() {
    event.preventDefault();
    window.open('telemetry.html', '_blank');
});
document.getElementById('windows11').addEventListener('click', function() {
    event.preventDefault();
    window.open('windows11.html', '_blank');
});
