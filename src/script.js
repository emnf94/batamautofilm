 // Handle order buttons: open WhatsApp with prefilled message including product
        document.querySelectorAll('.btn-order').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var product = this.dataset.product || 'Produk Kaca Film';
                var phone = '6281770023338';
                var msg = encodeURIComponent('Halo Batam Auto Film, saya tertarik dengan produk: ' + product + '. Bisa info harga & ketersediaan?');
                var url = 'https://wa.me/' + phone + '?text=' + msg;
                window.open(url, '_blank');
            });
        });

        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var target = this.getAttribute('href');
                if (target.length > 1) {
                    e.preventDefault();
                    var el = document.querySelector(target);
                    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
                }
            });
        });