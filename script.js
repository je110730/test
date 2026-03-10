// 1. 使用 Intersection Observer 觸發滾動動畫
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 當元素進入畫面時加入 'visible' class
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // 元素進入畫面 50% 時觸發

document.querySelectorAll('.fade-in, .slide-in-left').forEach(el => {
    observer.observe(el);
});

// 2. 第三層的探照燈跟隨滑鼠效果
const midnightSection = document.getElementById('midnight');
const flashlight = document.querySelector('.flashlight-overlay');

midnightSection.addEventListener('mousemove', (e) => {
    // 取得滑鼠在該區塊內的相對座標
    const rect = midnightSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 更新 CSS 背景漸層的中心點
    flashlight.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.95) 80%)`;
});