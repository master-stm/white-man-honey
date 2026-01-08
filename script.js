// Floating Action Button functionality
document.addEventListener('DOMContentLoaded', function () {
    const fabMain = document.getElementById('fabMain');
    const fabOptions = document.getElementById('fabOptions');
    const addToCartBtn = document.getElementById('addToCart');
    const buyNowBtn = document.getElementById('buyNow');

    // Toggle FAB options
    fabMain.addEventListener('click', function () {
        fabOptions.classList.toggle('active');
    });

    // Close FAB options when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.fab-container')) {
            fabOptions.classList.remove('active');
        }
    });

    // Add to Cart functionality
    addToCartBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        alert('تمت إضافة المنتج إلى السلة!');
        fabOptions.classList.remove('active');
        // Add your cart logic here
    });

    // Buy Now functionality
    buyNowBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        alert('جاري التوجيه إلى صفحة الدفع...');
        fabOptions.classList.remove('active');
        // Add your checkout logic here
    });
});
