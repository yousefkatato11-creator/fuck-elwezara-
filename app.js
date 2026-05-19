// SwiftAssess Login Screen – Interactive Logic

document.addEventListener('DOMContentLoaded', () => {

    /* ── Login Button ── */
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
        const orig = loginBtn.textContent;
        loginBtn.textContent = 'جاري التحميل...';
        loginBtn.disabled = true;
        loginBtn.style.opacity = '0.75';
        setTimeout(() => {
            loginBtn.textContent = orig;
            loginBtn.disabled = false;
            loginBtn.style.opacity = '1';
        }, 1200);
    });

    /* ── Notification Stack – البديل الثاني Button ── */
    const sideTabBtn = document.getElementById('side-tab-btn');
    const stack      = document.getElementById('notification-stack');

    sideTabBtn.addEventListener('click', () => {
        showNotification();
    });

    function showNotification() {
        const card = document.createElement('div');
        card.className = 'notif-card';

        // Calculate elapsed time text (will stay at "الآن" for 5s lifetime)
        card.innerHTML = `
            <div class="notif-text-area">
                <div class="notif-title">تم بنجاح</div>
                <div class="notif-body">
                    تم تسليم الاختبار بنجاح سيتم اصدار النتائج قريبا بعد الانتهاء من التصحيح.
                </div>
                <div class="notif-time" data-created="${Date.now()}">الآن</div>
            </div>
            <div class="notif-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
        `;

        // Prepend so newest is on top
        stack.prepend(card);

        // Auto-dismiss after 5 seconds
        setTimeout(() => dismissCard(card), 5000);

        // Click to dismiss early
        card.addEventListener('click', () => dismissCard(card));
    }

    function dismissCard(card) {
        if (card._dismissing) return;
        card._dismissing = true;
        card.classList.add('hiding');
        card.addEventListener('animationend', () => card.remove(), { once: true });
    }

    // Live "X seconds ago" counter for all visible notifications
    setInterval(() => {
        document.querySelectorAll('.notif-time[data-created]').forEach(el => {
            const diff = Math.floor((Date.now() - parseInt(el.dataset.created)) / 1000);
            if (diff < 2)       el.textContent = 'الآن';
            else if (diff < 60) el.textContent = `منذ ${diff} ثانية`;
            else                el.textContent = `منذ دقيقة`;
        });
    }, 1000);

});
