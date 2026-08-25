import './style.css'

// クライアントサイドのインタラクション
document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQアコーディオンの制御
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    if (button && answer && icon) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // 全て閉じる
        faqItems.forEach(i => {
          i.classList.remove('open');
          i.querySelector('.faq-answer')?.classList.add('hidden');
          const iIcon = i.querySelector('.faq-icon');
          if (iIcon) iIcon.style.transform = 'rotate(0deg)';
        });
        
        if (!isOpen) {
          item.classList.add('open');
          answer.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 2. スクロール時のアニメーション (Fade-in / Reveal)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    observer.observe(el);
  });

  // 3. テストPoCのインタラクション（ダミー入力や簡易計算ツール）
  const pocInput = document.getElementById('poc-deal-count');
  const pocResult = document.getElementById('poc-calc-result');
  if (pocInput && pocResult) {
    pocInput.addEventListener('input', (e) => {
      const deals = parseInt(e.target.value) || 0;
      // 1件あたり平均300万円のプレミアムDD売上として試算
      const revenue = deals * 300;
      pocResult.textContent = `¥${revenue.toLocaleString()}万円 / 年 (新規売上予測)`;
    });
  }
});
