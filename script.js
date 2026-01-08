// Sticky Footer Button functionality
document.addEventListener('DOMContentLoaded', function () {
    const stickyBuyBtn = document.getElementById('stickyBuyBtn');

    if (stickyBuyBtn) {
        stickyBuyBtn.addEventListener('click', function () {
            alert('جاري التوجيه إلى صفحة الدفع...');
            // Add your checkout logic here, e.g., window.location.href = '/checkout';
        });
    }
});
