// SwiftAssess Login Screen Simulator - Clean Slate

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const loginInput = document.querySelector('.login-input');

    // Simulate login button click
    loginBtn.addEventListener('click', () => {
        const originalText = loginBtn.textContent;
        loginBtn.textContent = 'جاري التحميل...';
        loginBtn.style.opacity = '0.8';
        loginBtn.disabled = true;

        // Simulate network delay
        setTimeout(() => {
            loginBtn.textContent = originalText;
            loginBtn.style.opacity = '1';
            loginBtn.disabled = false;
            // Next step would be redirecting to the exam screen, 
            // but for now, we just stay on this pixel-perfect clone.
        }, 1000);
    });

    // Optional: Focus the input on load like a real app might
    // loginInput.focus();
});
