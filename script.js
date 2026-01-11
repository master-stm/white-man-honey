// Product Interactivity Logic
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const weightModal = document.getElementById('weightModal');
    const closeModal = document.querySelector('.close-modal');
    const weightOpts = document.querySelectorAll('.weight-opt');
    const confirmWeightBtn = document.getElementById('confirmWeightBtn');

    let currentTask = ''; // 'cart' or 'buy'
    let selectedWeight = '500g';

    // Open logic
    function openModal(task) {
        currentTask = task;
        weightModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => openModal('cart'));
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => openModal('buy'));
    }

    // Close logic
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            weightModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    window.onclick = function (event) {
        if (event.target == weightModal) {
            weightModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Weight selection
    weightOpts.forEach(opt => {
        opt.addEventListener('click', function () {
            weightOpts.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            selectedWeight = this.dataset.weight;
        });
    });

    // Confirmation logic
    if (confirmWeightBtn) {
        confirmWeightBtn.addEventListener('click', function () {
            weightModal.style.display = 'none';
            document.body.style.overflow = '';

            if (currentTask === 'cart') {
                alert(`تم إضافة ${selectedWeight} من عسل الرجل إلى السلة بنجاح!`);
                // Here you would typically call an AJAX request or update a cart object
            } else if (currentTask === 'buy') {
                alert(`جاري التوجيه لإتمام شراء ${selectedWeight} من عسل الرجل...`);
                // window.location.href = `/checkout?weight=${selectedWeight}`;
            }
        });
    }
});
