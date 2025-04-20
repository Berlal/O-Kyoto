<template>
    <body class="font-sans bg-white text-secondary">
    <!-- Navigation -->
    <nav class="bg-white shadow-md fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex-shrink-0 flex items-center">
                    <span class="text-2xl font-bold text-primary">O'KYOTO</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#home" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">Home</a>
                        <a href="#about" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">About</a>
                        <a href="#menu" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">Menu</a>
                        <a href="#contact" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">Contact</a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button id="menu-toggle" class="text-secondary focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="mobile-menu hidden md:hidden bg-white pb-3 px-4 absolute w-full shadow-lg">
            <div class="flex flex-col space-y-2">
                <a href="#home" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">Home</a>
                <a href="#about" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">About</a>
                <a href="#menu" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">Menu</a>
                <a href="#contact" class="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition duration-300">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero flex items-center justify-center pt-20">
        <div class="text-center px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">O'KYOTO</h1>
            <p class="text-xl md:text-2xl text-white mb-8">Authentic Japanese Cuisine in the Heart of Paris</p>
            <a href="#menu" class="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
                Discover Our Menu
            </a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Our Story</h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-lg max-w-3xl mx-auto">Since 2010, O'Kyoto has been bringing the authentic flavors of Kyoto to Paris. Our chefs, trained in Japan, prepare each dish with precision and respect for tradition.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 class="text-2xl font-semibold mb-4">The O'Kyoto Experience</h3>
                    <p class="mb-6">Step into our restaurant and be transported to the serene ambiance of a Kyoto tea house. Our decor blends traditional Japanese elements with contemporary Parisian style, creating a unique dining atmosphere.</p>
                    <p class="mb-6">We source only the freshest ingredients, with many specialty items imported directly from Japan to ensure authenticity in every bite.</p>
                    <div class="flex space-x-4">
                        <div class="bg-primary bg-opacity-10 p-4 rounded-lg">
                            <i class="fas fa-fish text-primary text-2xl mb-2"></i>
                            <h4 class="font-semibold">Fresh Ingredients</h4>
                            <p class="text-sm">Daily deliveries from local markets</p>
                        </div>
                        <div class="bg-primary bg-opacity-10 p-4 rounded-lg">
                            <i class="fas fa-mortar-pestle text-primary text-2xl mb-2"></i>
                            <h4 class="font-semibold">Traditional Techniques</h4>
                            <p class="text-sm">Centuries-old preparation methods</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-lg overflow-hidden h-64">
                        <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" alt="Sushi chef" class="w-full h-full object-cover">
                    </div>
                    <div class="rounded-lg overflow-hidden h-64">
                        <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Japanese interior" class="w-full h-full object-cover">
                    </div>
                    <div class="rounded-lg overflow-hidden h-64">
                        <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80" alt="Sushi platter" class="w-full h-full object-cover">
                    </div>
                    <div class="rounded-lg overflow-hidden h-64">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" alt="Japanese dish" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Our Menu</h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-lg max-w-3xl mx-auto">Discover our selection of traditional Japanese dishes, prepared with the utmost care and attention to detail.</p>
            </div>

            <!-- Menu Categories -->
            <div class="flex flex-wrap justify-center mb-12">
                <button class="menu-category active px-6 py-2 mx-2 mb-2 rounded-full bg-primary text-white font-medium" data-category="sushi">Sushi</button>
                <button class="menu-category px-6 py-2 mx-2 mb-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition" data-category="maki">Maki</button>
                <button class="menu-category px-6 py-2 mx-2 mb-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition" data-category="yakitori">Yakitori</button>
                <button class="menu-category px-6 py-2 mx-2 mb-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition" data-category="ramen">Ramen</button>
                <button class="menu-category px-6 py-2 mx-2 mb-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition" data-category="desserts">Desserts</button>
            </div>

            <!-- Sushi Menu (default visible) -->
            <div id="sushi-menu" class="menu-content grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1579584425555-c3ce17fd0c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" alt="Nigiri Sushi" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Nigiri Sushi</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Nigiri Sushi</h3>
                        <p class="text-gray-600 mb-4">Fresh slices of fish atop pressed vinegared rice</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€14.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Sashimi Platter" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Sashimi Platter</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Sashimi Platter</h3>
                        <p class="text-gray-600 mb-4">Assortment of fresh raw fish slices, served with wasabi and soy sauce</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€22.00</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80" alt="Chirashi Bowl" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Chirashi Bowl</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Chirashi Bowl</h3>
                        <p class="text-gray-600 mb-4">Scattered sushi with variety of seafood over seasoned rice</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€18.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Maki Menu (hidden by default) -->
            <div id="maki-menu" class="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="California Roll" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">California Roll</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">California Roll</h3>
                        <p class="text-gray-600 mb-4">Crab, avocado, and cucumber inside-out roll</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€12.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Spicy Tuna Roll" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Spicy Tuna Roll</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Spicy Tuna Roll</h3>
                        <p class="text-gray-600 mb-4">Fresh tuna mixed with spicy mayo, wrapped in seaweed and rice</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€14.00</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Dragon Roll" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Dragon Roll</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Dragon Roll</h3>
                        <p class="text-gray-600 mb-4">Eel and cucumber inside, avocado outside with eel sauce</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€16.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Yakitori Menu (hidden by default) -->
            <div id="yakitori-menu" class="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1551504735-4a2c706f4a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Chicken Yakitori" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Chicken Yakitori</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Chicken Yakitori</h3>
                        <p class="text-gray-600 mb-4">Grilled chicken skewers with tare sauce</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€9.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1551504735-4a2c706f4a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Beef Yakitori" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Beef Yakitori</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Beef Yakitori</h3>
                        <p class="text-gray-600 mb-4">Tender beef skewers with garlic soy glaze</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€12.00</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1551504735-4a2c706f4a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Vegetable Yakitori" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Vegetable Yakitori</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Vegetable Yakitori</h3>
                        <p class="text-gray-600 mb-4">Seasonal vegetables grilled to perfection</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€8.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ramen Menu (hidden by default) -->
            <div id="ramen-menu" class="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80" alt="Tonkotsu Ramen" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Tonkotsu Ramen</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Tonkotsu Ramen</h3>
                        <p class="text-gray-600 mb-4">Rich pork bone broth with chashu pork and soft-boiled egg</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€15.00</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80" alt="Shoyu Ramen" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Shoyu Ramen</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Shoyu Ramen</h3>
                        <p class="text-gray-600 mb-4">Soy sauce-based broth with chicken and vegetables</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€14.00</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80" alt="Miso Ramen" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Miso Ramen</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Miso Ramen</h3>
                        <p class="text-gray-600 mb-4">Savory miso broth with corn, bean sprouts and pork</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€14.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Desserts Menu (hidden by default) -->
            <div id="desserts-menu" class="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Matcha Tiramisu" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Matcha Tiramisu</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Matcha Tiramisu</h3>
                        <p class="text-gray-600 mb-4">Japanese twist on the classic Italian dessert</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€8.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Mochi Ice Cream" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Mochi Ice Cream</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Mochi Ice Cream</h3>
                        <p class="text-gray-600 mb-4">Chewy rice dough filled with premium ice cream</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€7.00</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>

                <div class="dish-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="relative h-64">
                        <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Dorayaki" class="w-full h-full object-cover">
                        <div class="menu-overlay absolute inset-0 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">Dorayaki</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Dorayaki</h3>
                        <p class="text-gray-600 mb-4">Sweet red bean paste sandwiched between fluffy pancakes</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">€6.50</span>
                            <button class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Add to order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-lg max-w-3xl mx-auto">We'd love to hear from you. Visit us or get in touch for reservations and inquiries.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-2xl font-semibold mb-6">Our Location</h3>
                    <div class="mb-8">
                        <div class="flex items-start mb-4">
                            <i class="fas fa-map-marker-alt text-primary mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Address</h4>
                                <p>15 rue du Capitaine Ferber, 75020 Paris, France</p>
                            </div>
                        </div>
                        <div class="flex items-start mb-4">
                            <i class="fas fa-phone-alt text-primary mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Phone</h4>
                                <p>+33 1 23 45 67 89</p>
                            </div>
                        </div>
                        <div class="flex items-start mb-4">
                            <i class="fas fa-envelope text-primary mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Email</h4>
                                <p>contact@okyoto-paris.com</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-clock text-primary mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Opening Hours</h4>
                                <p>Monday - Friday: 11:30 AM - 2:30 PM, 6:30 PM - 10:30 PM</p>
                                <p>Saturday - Sunday: 12:00 PM - 10:30 PM</p>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg overflow-hidden h-64">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626110946!2d2.292292615674389!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1623251234567!5m2!1sen!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div>
                    <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
                    <form class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium mb-1">Name</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium mb-1">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium mb-1">Phone</label>
                            <input type="tel" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
                            <select id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="">Select a subject</option>
                                <option value="reservation">Reservation</option>
                                <option value="information">General Information</option>
                                <option value="private">Private Events</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium mb-1">Message</label>
                            <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                        <button type="submit" class="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-secondary text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-primary mb-4">O'KYOTO</h3>
                    <p class="mb-4">Bringing the authentic flavors of Kyoto to Paris since 2010.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-white hover:text-primary transition"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-white hover:text-primary transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-white hover:text-primary transition"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#home" class="hover:text-primary transition">Home</a></li>
                        <li><a href="#about" class="hover:text-primary transition">About</a></li>
                        <li><a href="#menu" class="hover:text-primary transition">Menu</a></li>
                        <li><a href="#contact" class="hover:text-primary transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                    <p class="mb-4">Subscribe to our newsletter for special offers and updates.</p>
                    <form class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 w-full rounded-l-md text-secondary focus:outline-none">
                        <button type="submit" class="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-r-md">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                <p>&copy; 2023 O'Kyoto Japanese Restaurant. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    mobileMenu.classList.add('hidden');

                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Menu category switching
        const menuCategories = document.querySelectorAll('.menu-category');
        const menuContents = document.querySelectorAll('.menu-content');

        menuCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                menuCategories.forEach(cat => {
                    cat.classList.remove('active', 'bg-primary', 'text-white');
                    cat.classList.add('border', 'border-primary', 'text-primary');
                });

                // Add active class to clicked category
                this.classList.add('active', 'bg-primary', 'text-white');
                this.classList.remove('border', 'border-primary', 'text-primary');

                // Hide all menu contents
                menuContents.forEach(content => {
                    content.classList.add('hidden');
                });

                // Show selected menu content
                const categoryName = this.getAttribute('data-category');
                document.getElementById(`${categoryName}-menu`).classList.remove('hidden');
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });
    </script>

</body>
</template>