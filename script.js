// Services data with updated prices
        const services = {
            'ID Services': [
                { name: 'ID RUSH 1', price: 40, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 2', price: 50, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 3', price: 55, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 4', price: 55, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 5', price: 65, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 6', price: 65, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 7', price: 65, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID RUSH 8', price: 65, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' }
            ],
            'Photo Services': [
                { name: 'PHOTO PRINT 1', price: 70, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 2', price: 70, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 3', price: 75, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 4', price: 85, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 5', price: 85, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 6', price: 85, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 7', price: 60, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'PHOTO PRINT 8', price: 55, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'WALLET SIZE', price: 30, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' },
                { name: 'ASA PHOTO', price: 35, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&crop=center' }
            ],
            'Document Printing': [
                { name: 'A4 (COLORED)', price: 7, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center' },
                { name: 'A4 (B&W)', price: 6, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center' },
                { name: 'SHORT (COLORED)', price: 7, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center' },
                { name: 'SHORT (B&W)', price: 6, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center' },
                { name: 'LONG (COLORED)', price: 7, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center' },
                { name: 'LONG (B&W)', price: 6, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center' }
            ],
            'Lamination': [
                { name: 'LAMINATE (ID)', price: 25, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center' },
                { name: 'LAMINATE (A4, SHORT DOCs.)', price: 35, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center' }
            ],
            'Document with Pictures': [
                { name: 'DOCUMENT PRINT (with PIC) FULL PAGE', price: 20, image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300&h=200&fit=crop&crop=center' },
                { name: 'DOCUMENT PRINT (with PIC) NOT FULL PAGE', price: 15, image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300&h=200&fit=crop&crop=center' }
            ],
            'Special Services': [
                { name: 'BUSINESS CARD', price: 200, image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=300&h=200&fit=crop&crop=center' },
                { name: 'INVITATION', price: 200, image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop&crop=center' },
                { name: 'BOOKBINDING', price: 100, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center' },
                { name: 'SOUVENIRS', price: 1000, image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center' },
                { name: 'LOGO HD', price: 900, image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop&crop=center', special: true }
            ],
            'Envelopes': [
                { name: 'PERSONALIZED ENVELOPES', price: 250, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center' }
            ],
            'ID Accessories': [
                { name: 'KEYCHAIN', price: 30, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' },
                { name: 'ID LACE', price: 50, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' },
                { name: 'PVC ID ONLY', price: 50, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' }
            ],
            'Name Tags': [
                { name: 'PVC ID NAME TAGS', price: 30, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' },
                { name: 'NAME TAGS (LAMINATE) SMALL', price: 25, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' },
                { name: 'NAME TAGS (LAMINATE) LARGE', price: 35, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' },
                { name: 'BAG TAGS', price: 30, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center' }
            ]
        };

        // FAQ data
        const faqData = [
            {
                question: "What are your operating hours?",
                answer: "We are open Monday to Friday from 8:00 AM to 8:30 PM, and Saturday to Sunday from 7:00 AM to 9:00 PM. We are closed on holidays."
            },
            {
                question: "How long does it take to process orders?",
                answer: "Regular orders take 1-2 business days. Rush orders (ID RUSH services) can be completed within the same day or next day depending on the complexity."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept cash payments at our shop, GCash payments (09931109148 - Jorenz M. Balbuena), and BPI bank transfers (Account: 0909317916 - Jorenz M. Balbuena)."
            },
            {
                question: "Do you offer student discounts?",
                answer: "Yes! We have the PISO PRINT PROMO for students from Grade 7 to College. Register for special student rates on selected printing services."
            },
            {
                question: "Can I track my order status?",
                answer: "Yes, you will receive an order reference number that you can use to check your order status. You can also contact us directly at 09931109148."
            },
            {
                question: "What file formats do you accept?",
                answer: "We accept PDF, DOC, DOCX, JPG, PNG, and other common file formats. For best results, we recommend PDF files for documents and high-resolution images for photos."
            },
            {
                question: "Do you provide design services?",
                answer: "Yes, we offer logo design services (LOGO HD) and can help with business cards, invitations, and other design needs. Additional consultation may be required for complex designs."
            },
            {
                question: "How long can I keep my order unclaimed?",
                answer: "Orders can be kept for up to 30 days. After this period, unclaimed orders may be disposed of. Please bring a valid ID when claiming your order."
            }
        ];

        let cart = [];
        let orderCounter = 1000;

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            initializeServices();
            initializeFAQ();
            initializeSearch();
            updateCartBadge();
        });

        // Initialize services grid
        function initializeServices() {
            const servicesGrid = document.getElementById('servicesGrid');
            servicesGrid.innerHTML = '';

            Object.keys(services).forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'col-span-full mb-12';
                
                categoryDiv.innerHTML = `
                    <h3 class="text-3xl font-bold text-white mb-8 text-center">${category}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${services[category].map(service => `
                            <div class="service-card glass-effect rounded-2xl overflow-hidden">
                                <img src="${service.image}" alt="${service.name}" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center'; this.alt='Service Image';">
                                <div class="p-6">
                                    <h4 class="text-xl font-bold text-white mb-2">${service.name}</h4>
                                    <div class="flex justify-between items-center mb-4">
                                        <span class="text-2xl font-bold text-green-400">₱${service.price.toLocaleString()}</span>
                                        ${service.special ? '<span class="text-yellow-400 text-sm">⭐ Special Details Required</span>' : ''}
                                    </div>
                                    <button onclick="addToCart('${service.name}', ${service.price}, '${service.image}', ${service.special || false})" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                servicesGrid.appendChild(categoryDiv);
            });
        }

        // Initialize FAQ
        function initializeFAQ() {
            const faqContainer = document.getElementById('faqContainer');
            faqContainer.innerHTML = '';

            faqData.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'glass-effect rounded-xl overflow-hidden';
                
                faqItem.innerHTML = `
                    <button onclick="toggleFAQ(${index})" class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white hover:bg-opacity-10 transition-colors">
                        <span class="text-lg font-semibold text-white">${faq.question}</span>
                        <svg id="faq-icon-${index}" class="w-6 h-6 text-white transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div id="faq-answer-${index}" class="hidden px-6 pb-4">
                        <p class="text-gray-300">${faq.answer}</p>
                    </div>
                `;
                
                faqContainer.appendChild(faqItem);
            });
        }

        // Toggle FAQ
        function toggleFAQ(index) {
            const answer = document.getElementById(`faq-answer-${index}`);
            const icon = document.getElementById(`faq-icon-${index}`);
            
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Initialize search functionality
        function initializeSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');
            
            searchInput.addEventListener('input', function(e) {
                const query = e.target.value.toLowerCase().trim();
                
                if (query.length < 2) {
                    searchResults.classList.add('hidden');
                    return;
                }
                
                const results = [];
                Object.keys(services).forEach(category => {
                    services[category].forEach(service => {
                        if (service.name.toLowerCase().includes(query)) {
                            results.push({...service, category});
                        }
                    });
                });
                
                if (results.length > 0) {
                    searchResults.innerHTML = results.map(result => `
                        <div onclick="scrollToService('${result.name}')" class="p-3 hover:bg-white hover:bg-opacity-20 cursor-pointer border-b border-gray-600 last:border-b-0">
                            <div class="flex justify-between items-center">
                                <div>
                                    <div class="text-white font-medium">${result.name}</div>
                                    <div class="text-gray-300 text-sm">${result.category}</div>
                                </div>
                                <div class="text-green-400 font-bold">₱${result.price.toLocaleString()}</div>
                            </div>
                        </div>
                    `).join('');
                    searchResults.classList.remove('hidden');
                } else {
                    searchResults.innerHTML = '<div class="p-3 text-gray-300">No services found</div>';
                    searchResults.classList.remove('hidden');
                }
            });
            
            // Hide search results when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                    searchResults.classList.add('hidden');
                }
            });
        }

        // Scroll to service
        function scrollToService(serviceName) {
            const servicesSection = document.getElementById('services');
            servicesSection.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('searchResults').classList.add('hidden');
            document.getElementById('searchInput').value = '';
            
            // Highlight the service card briefly
            setTimeout(() => {
                const serviceCards = document.querySelectorAll('.service-card');
                serviceCards.forEach(card => {
                    if (card.textContent.includes(serviceName)) {
                        card.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.8)';
                        setTimeout(() => {
                            card.style.boxShadow = '';
                        }, 2000);
                    }
                });
            }, 1000);
        }

        // Add to cart function
        function addToCart(name, price, image, isSpecial = false) {
            if (isSpecial && name === 'LOGO HD') {
                openLogoDetailsModal(name, price, image);
                return;
            }
            
            if (isSpecial && name === 'LOYALTY CARD ID REGISTRATION') {
                openLoyaltyCardModal(name, price, image);
                return;
            }
            
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    name: name,
                    price: price,
                    image: image,
                    quantity: 1
                });
            }
            
            updateCartBadge();
            showNotification(`${name} added to cart! 🛒`, 'success');
        }

        // Update cart badge
        function updateCartBadge() {
            const badge = document.getElementById('cartBadge');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.classList.remove('hidden');
                badge.classList.add('cart-badge');
            } else {
                badge.classList.add('hidden');
            }
        }

        // Cart modal functions
        function openCartModal() {
            updateCartDisplay();
            document.getElementById('cartModal').classList.remove('hidden');
        }

        function closeCartModal() {
            document.getElementById('cartModal').classList.add('hidden');
        }

        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="text-center text-gray-300 py-8">Your cart is empty</div>';
                cartTotal.textContent = '₱0.00';
                return;
            }
            
            let total = 0;
            cartItems.innerHTML = cart.map(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                
                return `
                    <div class="glass-effect rounded-xl p-4 flex items-center space-x-4">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg" onerror="this.src='https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=64&h=64&fit=crop&crop=center'; this.alt='Service Image';">
                        <div class="flex-1">
                            <h4 class="text-white font-semibold">${item.name}</h4>
                            <p class="text-gray-300">₱${item.price.toLocaleString()} each</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <button onclick="updateCartQuantity('${item.name}', -1)" class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">-</button>
                            <span class="text-white font-bold w-8 text-center">${item.quantity}</span>
                            <button onclick="updateCartQuantity('${item.name}', 1)" class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">+</button>
                        </div>
                        <div class="text-right">
                            <div class="text-white font-bold">₱${subtotal.toLocaleString()}</div>
                            <button onclick="removeFromCart('${item.name}')" class="text-red-400 hover:text-red-300 text-sm">Remove</button>
                        </div>
                    </div>
                `;
            }).join('');
            
            cartTotal.textContent = `₱${total.toLocaleString()}`;
        }

        function updateCartQuantity(name, change) {
            const item = cart.find(item => item.name === name);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(name);
                } else {
                    updateCartDisplay();
                    updateCartBadge();
                }
            }
        }

        function removeFromCart(name) {
            cart = cart.filter(item => item.name !== name);
            updateCartDisplay();
            updateCartBadge();
            showNotification('Item removed from cart', 'info');
        }

        function clearCart() {
            cart = [];
            updateCartDisplay();
            updateCartBadge();
            showNotification('Cart cleared', 'info');
        }

        function proceedToCheckout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            
            closeCartModal();
            openCheckoutModal();
        }

        // Checkout modal functions
        function openCheckoutModal() {
            updateCheckoutDisplay();
            document.getElementById('checkoutModal').classList.remove('hidden');
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function updateCheckoutDisplay() {
            const checkoutSummary = document.getElementById('checkoutSummary');
            const checkoutTotal = document.getElementById('checkoutTotal');
            
            let total = 0;
            checkoutSummary.innerHTML = cart.map(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                
                return `
                    <div class="flex justify-between">
                        <span>${item.name} (x${item.quantity})</span>
                        <span>₱${subtotal.toLocaleString()}</span>
                    </div>
                `;
            }).join('');
            
            checkoutTotal.textContent = `₱${total.toLocaleString()}`;
        }

        // Loyalty card modal functions
        function openLoyaltyCardModal(name, price, image) {
            document.getElementById('loyaltyCardModal').classList.remove('hidden');
            initializeSignatureCanvas();
            initializePhotoUpload();
            
            // Store the service details for later use
            window.pendingLoyaltyService = { name, price, image };
        }

        function closeLoyaltyCardModal() {
            document.getElementById('loyaltyCardModal').classList.add('hidden');
            delete window.pendingLoyaltyService;
        }

        // Initialize signature canvas
        let signatureCanvas, signatureCtx, isDrawing = false;
        
        function initializeSignatureCanvas() {
            signatureCanvas = document.getElementById('signatureCanvas');
            signatureCtx = signatureCanvas.getContext('2d');
            
            // Set canvas size
            const rect = signatureCanvas.getBoundingClientRect();
            signatureCanvas.width = rect.width * 2;
            signatureCanvas.height = rect.height * 2;
            signatureCtx.scale(2, 2);
            
            // Set drawing styles
            signatureCtx.strokeStyle = '#000000';
            signatureCtx.lineWidth = 2;
            signatureCtx.lineCap = 'round';
            signatureCtx.lineJoin = 'round';
            
            // Mouse events
            signatureCanvas.addEventListener('mousedown', startDrawing);
            signatureCanvas.addEventListener('mousemove', draw);
            signatureCanvas.addEventListener('mouseup', stopDrawing);
            signatureCanvas.addEventListener('mouseout', stopDrawing);
            
            // Touch events for mobile
            signatureCanvas.addEventListener('touchstart', handleTouch);
            signatureCanvas.addEventListener('touchmove', handleTouch);
            signatureCanvas.addEventListener('touchend', stopDrawing);
        }
        
        function startDrawing(e) {
            isDrawing = true;
            const rect = signatureCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            signatureCtx.beginPath();
            signatureCtx.moveTo(x, y);
        }
        
        function draw(e) {
            if (!isDrawing) return;
            const rect = signatureCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            signatureCtx.lineTo(x, y);
            signatureCtx.stroke();
        }
        
        function stopDrawing() {
            isDrawing = false;
        }
        
        function handleTouch(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent(e.type === 'touchstart' ? 'mousedown' : 
                                            e.type === 'touchmove' ? 'mousemove' : 'mouseup', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            signatureCanvas.dispatchEvent(mouseEvent);
        }
        
        function clearSignature() {
            signatureCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
        }
        
        function isSignatureEmpty() {
            const imageData = signatureCtx.getImageData(0, 0, signatureCanvas.width, signatureCanvas.height);
            return !imageData.data.some(channel => channel !== 0);
        }

        // Initialize photo upload
        function initializePhotoUpload() {
            const photoUpload = document.getElementById('photoUpload');
            const photoPreview = document.getElementById('photoPreview');
            
            photoUpload.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        photoPreview.innerHTML = `<img src="${e.target.result}" alt="Photo Preview" class="w-full h-full object-cover rounded-xl">`;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Logo details modal functions
        function openLogoDetailsModal(name, price, image) {
            document.getElementById('logoDetailsModal').classList.remove('hidden');
            
            // Store the service details for later use
            window.pendingLogoService = { name, price, image };
        }

        function closeLogoDetailsModal() {
            document.getElementById('logoDetailsModal').classList.add('hidden');
            delete window.pendingLogoService;
        }

        // Promo modal functions
        function openPromoModal() {
            document.getElementById('promoModal').classList.remove('hidden');
        }

        function closePromoModal() {
            document.getElementById('promoModal').classList.add('hidden');
        }

        // Privacy Policy modal functions
        function openPrivacyModal() {
            document.getElementById('privacyModal').classList.remove('hidden');
        }

        function closePrivacyModal() {
            document.getElementById('privacyModal').classList.add('hidden');
        }

        // Terms of Service modal functions
        function openTermsModal() {
            document.getElementById('termsModal').classList.remove('hidden');
        }

        function closeTermsModal() {
            document.getElementById('termsModal').classList.add('hidden');
        }

        // Claim stub modal functions
        function closeClaimStubModal() {
            document.getElementById('claimStubModal').classList.add('hidden');
        }

        function printClaimStub() {
            window.print();
        }

        function downloadPDF() {
            generateClaimStubPDF();
        }

        function generatePisoClaimStubPDF(promoData) {
            const { jsPDF } = window.jspdf;
            
            // A6 size in mm (105 x 148)
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [105, 148]
            });
            
            // Header with logos
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text('JMB PRINTING SERVICES', 52.5, 15, { align: 'center' });
            
            doc.setFontSize(8);
            doc.setFont(undefined, 'normal');
            doc.text('High Quality Prints', 52.5, 20, { align: 'center' });
            doc.text('Balitoc, Calatagan, Batangas', 52.5, 24, { align: 'center' });
            doc.text('📞 09931109148', 52.5, 28, { align: 'center' });
            
            // Dashed line
            doc.setLineDashPattern([2, 2], 0);
            doc.line(10, 32, 95, 32);
            doc.setLineDashPattern([], 0);
            
            // PISO PRINT PROMO Header
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            doc.text('PISO PRINT PROMO', 52.5, 40, { align: 'center' });
            doc.text('REGISTRATION CLAIM STUB', 52.5, 45, { align: 'center' });
            
            doc.setFontSize(8);
            doc.setFont(undefined, 'normal');
            
            // Student info
            let yPos = 55;
            doc.text(`Registration ID: ${promoData.registrationId}`, 10, yPos);
            yPos += 5;
            doc.text(`Date: ${promoData.registrationDate}`, 10, yPos);
            yPos += 5;
            doc.text(`Student Name: ${promoData.studentName}`, 10, yPos);
            yPos += 5;
            doc.text(`Grade Level: ${promoData.gradeLevel}`, 10, yPos);
            yPos += 5;
            doc.text(`School: ${promoData.schoolName}`, 10, yPos);
            yPos += 5;
            doc.text(`Student ID: ${promoData.studentId}`, 10, yPos);
            yPos += 10;
            
            // Promo Benefits
            doc.setFont(undefined, 'bold');
            doc.text('PROMO BENEFITS:', 10, yPos);
            yPos += 5;
            doc.setFont(undefined, 'normal');
            doc.text('• ₱1.00 per page printing (B&W)', 10, yPos);
            yPos += 4;
            doc.text('• Valid for A4, Short, Long paper', 10, yPos);
            yPos += 4;
            doc.text('• Student ID required for discount', 10, yPos);
            yPos += 4;
            doc.text('• Valid until end of school year', 10, yPos);
            yPos += 8;
            
            // Status
            doc.setFont(undefined, 'bold');
            doc.text('Status: REGISTERED ✓', 10, yPos);
            yPos += 8;
            
            // Instructions
            doc.setFontSize(7);
            doc.setFont(undefined, 'bold');
            doc.text('HOW TO USE YOUR PROMO:', 10, yPos);
            yPos += 4;
            doc.setFont(undefined, 'normal');
            doc.text('• Present this claim stub at our shop', 10, yPos);
            yPos += 3;
            doc.text('• Bring your valid student ID', 10, yPos);
            yPos += 3;
            doc.text('• Mention "PISO PRINT PROMO"', 10, yPos);
            yPos += 3;
            doc.text('• Enjoy ₱1.00 per page printing!', 10, yPos);
            yPos += 6;
            
            // Footer
            doc.setFontSize(6);
            doc.text('Thank you for registering! Enjoy your student discount!', 52.5, yPos, { align: 'center' });
            yPos += 3;
            doc.text('📧 jmbprintingservices12@gmail.com', 52.5, yPos, { align: 'center' });
            
            // Perforated edge effect
            doc.setLineDashPattern([1, 2], 0);
            doc.line(5, 5, 5, 143);
            doc.line(100, 5, 100, 143);
            doc.setLineDashPattern([], 0);
            
            // Auto-save the PDF directly
            const pdfBlob = doc.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `JMB-PisoPrint-${promoData.registrationId}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            return doc;
        }

        function generateClaimStubPDF(orderData = null) {
            const { jsPDF } = window.jspdf;
            
            // A6 size in mm (105 x 148)
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [105, 148]
            });
            
            // Get order data
            const data = orderData || getCurrentOrderData();
            
            // Header with logos
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text('JMB PRINTING SERVICES', 52.5, 15, { align: 'center' });
            
            doc.setFontSize(8);
            doc.setFont(undefined, 'normal');
            doc.text('High Quality Prints', 52.5, 20, { align: 'center' });
            doc.text('Balitoc, Calatagan, Batangas', 52.5, 24, { align: 'center' });
            doc.text('📞 09931109148', 52.5, 28, { align: 'center' });
            
            // Dashed line
            doc.setLineDashPattern([2, 2], 0);
            doc.line(10, 32, 95, 32);
            doc.setLineDashPattern([], 0);
            
            // Order details
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            doc.text('CLAIM STUB', 52.5, 40, { align: 'center' });
            
            doc.setFontSize(8);
            doc.setFont(undefined, 'normal');
            
            // Customer info
            let yPos = 48;
            doc.text(`Order ID: ${data.orderId}`, 10, yPos);
            yPos += 5;
            doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, yPos);
            yPos += 5;
            doc.text(`Customer: ${data.customerName}`, 10, yPos);
            yPos += 5;
            doc.text(`Contact: ${data.contactNumber}`, 10, yPos);
            yPos += 8;
            
            // Services
            doc.setFont(undefined, 'bold');
            doc.text('SERVICES ORDERED:', 10, yPos);
            yPos += 5;
            doc.setFont(undefined, 'normal');
            
            const services = cart.length > 0 ? cart : data.services || [];
            let total = 0;
            
            services.forEach(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                
                // Service name and quantity
                const serviceLine = `${item.name} (x${item.quantity})`;
                const priceText = `₱${subtotal.toLocaleString()}`;
                
                doc.text(serviceLine, 10, yPos);
                doc.text(priceText, 95, yPos, { align: 'right' });
                yPos += 4;
            });
            
            // Total
            yPos += 3;
            doc.setLineDashPattern([1, 1], 0);
            doc.line(10, yPos, 95, yPos);
            doc.setLineDashPattern([], 0);
            yPos += 5;
            
            doc.setFont(undefined, 'bold');
            doc.text('TOTAL AMOUNT:', 10, yPos);
            doc.text(`₱${total.toLocaleString()}`, 95, yPos, { align: 'right' });
            yPos += 8;
            
            // Payment status
            doc.setFont(undefined, 'normal');
            doc.text('Status: PENDING PAYMENT', 10, yPos);
            yPos += 8;
            
            // Instructions
            doc.setFontSize(7);
            doc.text('IMPORTANT REMINDERS:', 10, yPos);
            yPos += 4;
            doc.text('• Bring valid ID when claiming', 10, yPos);
            yPos += 3;
            doc.text('• Complete payment before release', 10, yPos);
            yPos += 3;
            doc.text('• Orders kept for 30 days only', 10, yPos);
            yPos += 3;
            doc.text('• Check order before leaving shop', 10, yPos);
            yPos += 6;
            
            // Footer
            doc.setFontSize(6);
            doc.text('Thank you for choosing JMB Printing Services!', 52.5, yPos, { align: 'center' });
            yPos += 3;
            doc.text('📧 jmbprintingservices12@gmail.com', 52.5, yPos, { align: 'center' });
            
            // Perforated edge effect
            doc.setLineDashPattern([1, 2], 0);
            doc.line(5, 5, 5, 143);
            doc.line(100, 5, 100, 143);
            doc.setLineDashPattern([], 0);
            
            // Auto-save the PDF directly
            const pdfBlob = doc.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `JMB-ClaimStub-${data.orderId}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            return doc;
        }

        function getCurrentOrderData() {
            return {
                orderId: document.getElementById('stubOrderId').textContent,
                customerName: document.getElementById('stubCustomerName').textContent,
                contactNumber: document.getElementById('stubContactNumber').textContent,
                email: document.getElementById('stubEmail').textContent
            };
        }

        // Form submissions
        document.getElementById('checkoutForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const orderData = {
                orderId: `JMB-${String(++orderCounter).padStart(4, '0')}`,
                customerName: formData.get('customerName'),
                contactNumber: formData.get('contactNumber'),
                email: formData.get('email'),
                services: cart,
                orderDate: new Date().toLocaleDateString(),
                totalAmount: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
            };
            
            // Send email (simulated)
            sendOrderEmail(orderData);
            
            // Auto-generate and download PDF claim stub
            generateClaimStubPDF(orderData);
            
            // Show claim stub modal
            showClaimStub(orderData);
            closeCheckoutModal();
            clearCart();
            
            // Auto-print the claim stub after a short delay
            setTimeout(() => {
                window.print();
            }, 1000);
            
            showNotification('Order submitted! PDF downloaded and printing automatically! 🎉📄🖨️', 'success');
        });

        document.getElementById('promoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const promoData = {
                studentName: formData.get('studentName'),
                gradeLevel: formData.get('gradeLevel'),
                schoolName: formData.get('schoolName'),
                studentId: formData.get('studentId'),
                registrationId: `PISO-${String(++orderCounter).padStart(4, '0')}`,
                registrationDate: new Date().toLocaleDateString()
            };
            
            // Generate and auto-download PDF claim stub for PISO PRINT
            generatePisoClaimStubPDF(promoData);
            
            // Simulate sending registration email
            console.log('Promo registration:', promoData);
            
            closePromoModal();
            showNotification('PISO PRINT registration complete! PDF claim stub downloaded automatically! 🎓📄', 'success');
            
            // Reset form
            e.target.reset();
        });

        document.getElementById('loyaltyCardForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!window.pendingLoyaltyService) return;
            
            // Validate signature
            if (isSignatureEmpty()) {
                showNotification('Please provide your digital signature', 'error');
                return;
            }
            
            // Validate photo upload
            const photoUpload = document.getElementById('photoUpload');
            if (!photoUpload.files[0]) {
                showNotification('Please upload your 1x1 photo', 'error');
                return;
            }
            
            const formData = new FormData(e.target);
            const loyaltyCardData = {
                fullName: formData.get('fullName'),
                dateOfBirth: formData.get('dateOfBirth'),
                contactNumber: formData.get('contactNumber'),
                email: formData.get('email'),
                address: formData.get('address'),
                occupation: formData.get('occupation'),
                emergencyContact: formData.get('emergencyContact'),
                photo: photoUpload.files[0],
                signature: signatureCanvas.toDataURL(),
                registrationDate: new Date().toLocaleDateString(),
                cardNumber: `LC-${Date.now().toString().slice(-8)}`
            };
            
            // Add to cart with details
            const service = window.pendingLoyaltyService;
            const existingItem = cart.find(item => item.name === service.name);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.details = loyaltyCardData;
            } else {
                cart.push({
                    name: service.name,
                    price: service.price,
                    image: service.image,
                    quantity: 1,
                    details: loyaltyCardData
                });
            }
            
            updateCartBadge();
            closeLoyaltyCardModal();
            showNotification(`${service.name} added to cart! Your card number: ${loyaltyCardData.cardNumber} 🎯`, 'success');
            
            // Reset form
            e.target.reset();
            clearSignature();
            document.getElementById('photoPreview').innerHTML = '<span class="text-gray-400 text-sm text-center">No photo<br>selected</span>';
        });

        document.getElementById('logoDetailsForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!window.pendingLogoService) return;
            
            const formData = new FormData(e.target);
            const logoDetails = {
                companyName: formData.get('companyName'),
                logoStyle: formData.get('logoStyle'),
                colorPrefs: formData.get('colorPrefs'),
                logoDescription: formData.get('logoDescription'),
                industryType: formData.get('industryType'),
                additionalReqs: formData.get('additionalReqs')
            };
            
            // Add to cart with details
            const service = window.pendingLogoService;
            const existingItem = cart.find(item => item.name === service.name);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.details = logoDetails;
            } else {
                cart.push({
                    name: service.name,
                    price: service.price,
                    image: service.image,
                    quantity: 1,
                    details: logoDetails
                });
            }
            
            updateCartBadge();
            closeLogoDetailsModal();
            showNotification(`${service.name} added to cart with details! 🛒`, 'success');
            
            // Reset form
            e.target.reset();
        });

        // Send order email (simulated)
        function sendOrderEmail(orderData) {
            const emailContent = `
                New Order from JMB Printing Services Website
                
                Order ID: ${orderData.orderId}
                Customer: ${orderData.customerName}
                Contact: ${orderData.contactNumber}
                Email: ${orderData.email}
                Date: ${orderData.orderDate}
                
                Services Ordered:
                ${orderData.services.map(item => `- ${item.name} (x${item.quantity}) - ₱${(item.price * item.quantity).toLocaleString()}`).join('\n')}
                
                Total Amount: ₱${orderData.totalAmount.toLocaleString()}
                
                ${orderData.services.some(item => item.details) ? 
                    'Special Requirements:\n' + 
                    orderData.services.filter(item => item.details)
                        .map(item => `${item.name}: ${JSON.stringify(item.details, null, 2)}`)
                        .join('\n\n')
                    : ''
                }
            `;
            
            console.log('Email would be sent to jmbprintingservices12@gmail.com:', emailContent);
        }

        // Show claim stub
        function showClaimStub(orderData) {
            document.getElementById('stubCustomerName').textContent = orderData.customerName;
            document.getElementById('stubContactNumber').textContent = orderData.contactNumber;
            document.getElementById('stubEmail').textContent = orderData.email;
            document.getElementById('stubOrderId').textContent = orderData.orderId;
            document.getElementById('stubOrderDate').textContent = orderData.orderDate;
            document.getElementById('stubTotalAmount').textContent = `₱${orderData.totalAmount.toLocaleString()}`;
            
            // Populate services
            const servicesDiv = document.getElementById('stubServices');
            servicesDiv.innerHTML = orderData.services.map(item => {
                const subtotal = item.price * item.quantity;
                return `
                    <div class="flex justify-between">
                        <span>${item.name} (x${item.quantity})</span>
                        <span>₱${subtotal.toLocaleString()}</span>
                    </div>
                `;
            }).join('');
            
            document.getElementById('claimStubModal').classList.remove('hidden');
        }

        // Notification system
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            const colors = {
                success: 'bg-green-50',
                error: 'bg-red-50',
                info: 'bg-blue-50'
            };
            
            notification.className = `fixed top-6 right-6 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm slide-in`;
            notification.innerHTML = `
                <div class="flex items-center justify-between">
                    <span>${message}</span>
                    <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 5000);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add fade-in animation to elements as they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe service cards when they're created
        setTimeout(() => {
            document.querySelectorAll('.service-card').forEach(card => {
                observer.observe(card);
            });
        }, 1000);
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'980c57c465594ee0',t:'MTc1ODE1MTMxNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();