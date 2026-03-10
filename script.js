// 1. 滾動動畫偵測 (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-in, .slide-in').forEach(el => observer.observe(el));

// 2. 翻牌遊戲邏輯
let stamps = 0;
function flipCard(cardElement) {
    if (!cardElement.classList.contains('flipped')) {
        cardElement.classList.add('flipped');
        updateStamp(); // 翻開卡片獲得印章
    }
}

// 3. 心理測驗與集章邏輯
let quizDone = false;
function getStamp(choice) {
    if (quizDone) return; // 只能測一次
    
    const resultText = document.getElementById('quiz-result');
    if (choice === '瀑布') {
        resultText.innerHTML = "🌊 你選擇了瀑布：你是充滿爆發力的探索者。<br>獲得【泰雅之水】印章！";
    } else {
        resultText.innerHTML = "🍃 你選擇了微風：你是細膩敏銳的旅人。<br>獲得【山林之風】印章！";
    }
    
    updateStamp();
    quizDone = true;
}

// 4. 更新右上角印章數量
function updateStamp() {
    if (stamps < 3) {
        stamps++;
        document.getElementById('stamp-count').innerText = stamps;
        
        if (stamps === 3) {
            alert("恭喜！你已集滿印章，抵達東澳嶺起點！");
        }
    }
}