document.addEventListener('DOMContentLoaded', () => {
    
    // 1. كود قائمة الموبايل (القديم)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. كود الأنيميشن (الجديد)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // يضيف كلاس الظهور
            } else {
                // اختياري: لو عايزه يختفي تاني لما تطلع فوق، شيل علامة التعليق من السطر الجاي
                entry.target.classList.remove('show'); 
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
});