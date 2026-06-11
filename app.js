// GICIP Travel Hub 2026 Client Script

// DATASETS

const documentsData = {
    catA: [
        {
            id: 'cat-a-passport',
            name: 'Valid International Passport & 2 Photocopies',
            type: 'required',
            purpose: 'Your primary travel credential and identity document for entering the Schengen area.',
            instructions: [
                'Must be valid for at least 6 months beyond the intended departure date (at least until January 2027).',
                'Must contain at least 2 blank visa pages.',
                'Provide 2 clean, high-quality photocopies of the passport data page.'
            ]
        },
        {
            id: 'cat-a-funds',
            name: 'Proof of Financial Funds',
            type: 'required',
            purpose: 'Demonstrates to the embassy that you have sufficient financial means to sustain yourself in Europe.',
            instructions: [
                'Requires personal bank statements or a formal declaration of commitment from a sponsor.',
                'Blocked account details (if requested by the consulate) or a bank statement with a minimum threshold balance.',
                'Ensure bank statements are stamped and signed by the issuing bank.'
            ]
        },
        {
            id: 'cat-a-intro-letter',
            name: 'Personal Letter of Introduction',
            type: 'required',
            purpose: 'A formal letter written by you to introduce yourself to the visa officer.',
            instructions: [
                'Outline your background, field of study, and academic achievements.',
                'Explain the purpose of your trip: detailing your participation in the GICIP 2026 program.',
                'Affirm your commitment to returning to your home country upon trip completion.'
            ]
        },
        {
            id: 'cat-a-jamb',
            name: 'JAMB Admission Letter',
            type: 'required',
            purpose: 'Official proof of university admission in your home country.',
            instructions: [
                'Provide the official letter received from the Joint Admissions and Matriculation Board.',
                'Verify that all personal data and university names are clear and legible.'
            ]
        },
        {
            id: 'cat-a-transcript',
            name: 'Unofficial Transcript',
            type: 'required',
            purpose: 'Demonstrates active student status and good academic standing.',
            instructions: [
                'Print your latest semester transcripts from your student portal.',
                'Should cover all completed sessions up to the current academic year.'
            ]
        },
        {
            id: 'cat-a-travel-history',
            name: 'Travel History Verification',
            type: 'optional',
            purpose: 'Demonstrates previous adherence to visa rules and international travel experience.',
            instructions: [
                'Create photocopies of all visa stickers, entry, and exit stamps in current or past passports.',
                'If you have no previous travel history, this document is not required.'
            ]
        },
        {
            id: 'cat-a-birth-cert',
            name: 'NPC Birth Certificate or Affidavit',
            type: 'required',
            purpose: 'Legal proof of birth and parentage required for identification and sponsorships.',
            instructions: [
                'Provide the birth certificate issued by the National Population Commission (NPC).',
                'If the NPC document is unavailable, a legally sworn court affidavit of birth is accepted.'
            ]
        },
        {
            id: 'cat-a-folder-originals',
            name: 'Folder of Original and Photocopies of Supporting Documents',
            type: 'required',
            purpose: 'A clean, well-organized reference folder for the visa interview.',
            instructions: [
                'Arrange documents in chronological order as requested by the consulate.',
                'Have a complete set of originals and two complete sets of photocopies.',
                'Keep all papers neat, uncreased, and separated in plastic pockets.'
            ]
        },
        {
            id: 'cat-a-visa-form',
            name: 'German Visa Application Form',
            type: 'required',
            purpose: 'The official Schengen visa application form (VIDEX).',
            instructions: [
                'Fill out the form online via the Videx portal and print the PDF output.',
                'Ensure the printed copy includes all generated barcodes.',
                'Sign the form in the designated areas (normally page 4/5).'
            ]
        },
        {
            id: 'cat-a-prev-passport',
            name: 'Previous Passport (if applicable)',
            type: 'optional',
            purpose: 'Verifies past travel history and immigration compliance.',
            instructions: [
                'Bring physical old passport(s) to the visa appointment.',
                'Make copies of all stamped pages.'
            ]
        },
        {
            id: 'cat-a-parent-data',
            name: 'Parents’ Passport Data Pages',
            type: 'required',
            purpose: 'Verifies identity of your parents/sponsors for sponsorship authenticity.',
            instructions: [
                'Clean photocopies of parents’ international passport bio-data pages.',
                'If unavailable, other government-issued photo IDs (Driver’s License, NIMC slip) may be submitted.'
            ]
        },
        {
            id: 'cat-a-bank-statement',
            name: 'Personal Bank Statement',
            type: 'required',
            purpose: 'Proves your personal or sponsor’s financial activity and funding source.',
            instructions: [
                'Provide statements covering the last 3 to 6 months.',
                'Statements must not be older than 3 days at the date of the appointment.',
                'Must contain a visible certificate of bank balance page.'
            ]
        },
        {
            id: 'cat-a-sponsorship',
            name: 'Sponsorship Consent Letter',
            type: 'required',
            purpose: 'A notarized commitment from your sponsor pledging full financial support.',
            instructions: [
                'Signed letter stating sponsor is covering flights, accommodation, health insurance, and daily expenses.',
                'Must be notarized at a high court for legal validity.',
                'Attach sponsor\'s employment letter or business registration certificate.'
            ]
        },
        {
            id: 'cat-a-student-id',
            name: 'Student ID Card Photocopy',
            type: 'required',
            purpose: 'Quick physical proof of enrollment at your home institution.',
            instructions: [
                'Make a clean color copy of both the front and back of your student ID card.',
                'Ensure the ID card is not expired.'
            ]
        }
    ],
    catB: [
        {
            id: 'cat-b-appt-confirm',
            name: 'Appointment Confirmation Slip',
            type: 'coordinator',
            purpose: 'Confirms your visa appointment time slot at the German Consulate.',
            instructions: [
                'Download the appointment confirmation PDF sent by the coordinator.',
                'Print this sheet and place it at the very top of your application stack.'
            ]
        },
        {
            id: 'cat-b-reg-receipt',
            name: 'Registration Receipt',
            type: 'coordinator',
            purpose: 'Proof of paid program fees for the GICIP cohort.',
            instructions: [
                'Provided by the program finance department.',
                'Indicates you are a fully registered participant of the 2026 immersion.'
            ]
        },
        {
            id: 'cat-b-photos',
            name: 'Biometric Passport Photographs',
            type: 'coordinator',
            purpose: 'Required photo for your Schengen visa card.',
            instructions: [
                'Three (3) identical photographs matching Schengen specifications.',
                'Sizing: 35mm x 45mm, light gray/white background, neutral face expression.',
                'Not older than 6 months. Do not staple the photo to the form.'
            ]
        },
        {
            id: 'cat-b-insurance',
            name: 'Travel Medical Insurance',
            type: 'coordinator',
            purpose: 'Mandatory health cover required for entering Schengen borders.',
            instructions: [
                'Provided by the GICIP administration.',
                'Policy covers emergency medical costs and repatriation up to €30,000.',
                'Valid for the entire duration of the European stay.'
            ]
        },
        {
            id: 'cat-b-cover-letter',
            name: 'Official Program Cover Letter',
            type: 'coordinator',
            purpose: 'GICIP invitation and recommendation addressing the German consulate.',
            instructions: [
                'Formal recommendation letter signed by the GICIP program director.',
                'Contains a complete name list of accepted program scholars.'
            ]
        },
        {
            id: 'cat-b-tickets',
            name: 'Flight Tickets Reservation',
            type: 'coordinator',
            purpose: 'Demonstrates flight details and return plans to your home country.',
            instructions: [
                'Confirmed round-trip flight itineraries generated by GICIP logistics.',
                'Displays entry via Frankfurt/Berlin and exit via Paris.'
            ]
        },
        {
            id: 'cat-b-accommodation',
            name: 'Proof of Accommodation',
            type: 'coordinator',
            purpose: 'Verifies where you will reside during the European travels.',
            instructions: [
                'Hotel block confirmation vouchers for Berlin, Munich, Amsterdam, and Paris.',
                'Includes names of all scholars and booking reservation numbers.'
            ]
        },
        {
            id: 'cat-b-invitation-letters',
            name: 'Company Invitation Letters',
            type: 'coordinator',
            purpose: 'Validates the academic/innovation nature of the travel.',
            instructions: [
                'Formal invitation letters from European corporate offices and technology labs.',
                'Proves structured research visits and industry collaborations.'
            ]
        },
        {
            id: 'cat-b-itinerary',
            name: 'Day-by-Day Program Itinerary',
            type: 'coordinator',
            purpose: 'Detailed schedule showing daily activities, visits, and cultural tours.',
            instructions: [
                'Provided in standard itinerary format by the coordinator.',
                'Helps the consulate understand the daily logistics of the trip.'
            ]
        },
        {
            id: 'cat-b-envelope',
            name: 'Courier Return Envelope',
            type: 'coordinator',
            purpose: 'Prepaid envelope used by the consulate to mail your passport back.',
            instructions: [
                'Usually purchased from designated courier desks (e.g. DHL/UPS) at the visa center.',
                'Label with your accurate home delivery address.'
            ]
        },
        {
            id: 'cat-b-visa-info',
            name: 'Visa Processing Reference Sheet',
            type: 'coordinator',
            purpose: 'Guidelines on interview preparation and security procedures.',
            instructions: [
                'FAQ list outlining standard visa interview questions.',
                'Review details regarding embassy dress code, electronic rules, and arrival directions.'
            ]
        }
    ]
};

const packingData = {
    female: [
        {
            category: 'Clothing',
            icon: '👗',
            items: ['Airport Outfit (Comfortable, Layered)', 'Casual Wear (Tops)', 'Dresses (Elegant & Day wear)', 'Jeans (2-3 Pairs)', 'Trousers (For corporate visits)', 'Skirts', 'Cardigans / Sweaters', 'Jackets', 'Pajamas', 'Underwear & Socks']
        },
        {
            category: 'Shoes',
            icon: '👠',
            items: ['Sneakers (For extensive walking)', 'Sandals', 'Flats (For casual dining)', 'Heels (For Networking Events)', 'Slippers (For hotel rooms)']
        },
        {
            category: 'Beauty',
            icon: '💄',
            items: ['Makeup Kit (Essentials)', 'Makeup Brushes & Sponges', 'Lip Products (Stick/Gloss)', 'Travel-sized Perfume', 'Body Spray / Deodorant', 'Lip liner']
        },
        {
            category: 'Skincare',
            icon: '🧴',
            items: ['Cleanser', 'Moisturizer (Hydrating)', 'Sunscreen (SPF 50+)', 'Lip Balm (Prevent dry lips)']
        },
        {
            category: 'Hair Essentials',
            icon: '🎀',
            items: ['Wig / Hair units', 'Satin Bonnet', 'Hair Products (Oils/Sprays)', 'Edge Control', 'Hair Accessories (Clips, ties)']
        },
        {
            category: 'Electronics',
            icon: '🔌',
            items: ['Phone & European Adaptor', 'Chargers (Phone, watch, laptop)', 'Power Bank (10,000mAh+)', 'Earbuds / Headphones', 'Camera (Optional)']
        },
        {
            category: 'Health & Personal',
            icon: '🩺',
            items: ['Medications (Prescription list)', 'Feminine Hygiene Products (Pads, tampons)', 'First Aid Essentials (Plasters, painkillers)', 'Hand Sanitizer & Wet Wipes']
        }
    ],
    male: [
        {
            category: 'Clothing Essentials',
            icon: '👕',
            items: ['Airport Outfit (Knit hoodie & joggers)', 'Casual T-Shirts (4-5)', 'Linen Shirts (2)', 'Jeans (2 Pairs)', 'Trousers / Chinos (For business visits)', 'Shorts (For relaxed days)', 'Sweaters / Cardigans', 'Pajamas', 'Undergarments & Socks (Pack plenty)', 'Jackets (Rain-resistant)']
        },
        {
            category: 'Footwear',
            icon: '👟',
            items: ['Sneakers (Ergonomic for walking)', 'Boots / Chelsea Boots', 'Loafers / Dress Shoes (For networking)', 'Slippers / Slides']
        },
        {
            category: 'Grooming Essentials',
            icon: '🪮',
            items: ['Hair gel / pomade / oil', 'Deodorant & Antiperspirant', 'Skincare (Cleanser, moisturizer, SPF)', 'Shaving kit / beard trimmer', 'Cologne (Travel atomizers)']
        },
        {
            category: 'Electronics',
            icon: '💻',
            items: ['Phone & European Travel Adaptor', 'Chargers & Cable organizers', 'Power Bank (Fast charging)', 'Wireless Earbuds', 'Camera & memory cards']
        },
        {
            category: 'Health Items',
            icon: '💊',
            items: ['Medications (With prescriptions)', 'First Aid Items (Plasters, Band-aids)', 'Multivitamins & Energy boosters', 'Hand sanitizer']
        }
    ]
};

const outfitGalleryData = {
    female: [
        {
            category: 'airport',
            title: 'Relaxed Classic Trench',
            description: 'A cozy cotton matching lounge set paired with a classic camel trench coat, premium walking sneakers, and a sleek carry-on bag. Perfect for maintaining warmth and looking chic on long flights.',
            items: ['Matching sweatpants and sweatshirt', 'Camel trench coat', 'Supportive white sneakers', 'Premium leather tote bag'],
            image: '/outfits/airportGirl.png' // Example image URL, replace with actual
        },
        {
            category: 'sightseeing',
            title: 'Amsterdam Canal Walk',
            description: 'Casual, modern, and high-contrast styling. Straight-leg blue jeans combined with a neutral knit top, a leather cross-body bag, and supportive flats for traversing brick canal paths.',
            items: ['Straight-leg denim', 'Ribbed knit top', 'Flat leather walking shoes', 'Cross-body shoulder bag'],
            image: '/outfits/sightseeingGirl.png' // Example image URL, replace with actual
        },
        {
            category: 'networking',
            title: 'Tech Hub Corporate Chic',
            description: 'Tailored neutral blazer paired with matching ankle-length trousers, a silk shell top, and structured gold jewelry. Delivers a highly professional first impression at innovation labs.',
            items: ['Tailored beige blazer', 'Slim trousers', 'Sleek block heels', 'Minimalist watch and gold hoop earrings'],
            image: '/outfits/networkingGirl.png' // Example image URL, replace with actual
        },
        {
            category: 'Sabbath',
            title: 'Parisian Evening Glow',
            description: 'You know we will definitly have to go to church, you can bring traditional attire or a nice summer gown',
            items: ['Silk slip dress', 'light cardigan', 'flats'],
            image: '/outfits/sabbathGirl.png' // Example image URL, replace with actual
        },
        {
            category: 'photo-day',
            title: 'Historic Monuments Vignette',
            description: 'A flowing midi dress in a vibrant color that pops against stone architecture (like red or emerald), paired with comfortable wedges and sunglasses for the official program cohort photo day.',
            items: ['Flowing tiered midi dress', 'Comfortable wedge sandals', 'Oversized luxury sunglasses', 'Dainty bracelets'],
            image: '/outfits/photodayGirl.png' // Example image URL, replace with actual
        },
        {
            category: 'cold',
            title: 'Munich Autumn Layering',
            description: 'Heavy wool blend coat layered over a thick turtleneck sweater, thermal leggings under jeans, and leather combat boots. Ideal for cooler weather fronts in Munich.',
            items: ['Wool overcoat (Grey/Beige)', 'Cable-knit turtleneck sweater', 'Waterproof leather boots', 'Warm scarf and wool gloves'],
            image: '/outfits/coldGirl.png' // Example image URL, replace with actual
        }
    ],
    male: [
        {
            category: 'airport',
            title: 'Modern Cozy Athleisure',
            description: 'Premium heavyweight hoodie paired with matching jogger trousers, high-top socks, and designer slip-on sneakers. Complemented by a minimalist leather backpack for easy airport transits.',
            items: ['Luxury heavyweight hoodie & joggers', 'Premium leather backpack', 'Supportive white sneakers', 'Travel eye mask'],
            image: '/outfits/airportMale.png' // Example image URL, replace with actual
        },
        {
            category: 'sightseeing',
            title: 'Munich Historic Explorer',
            description: 'A breathable linen button-down shirt paired with lightweight chino shorts, polarized sunglasses, and comfortable trainers. Casual, cool, and highly functional.',
            items: ['White or light blue linen shirt', 'Beige chino shorts', 'Ergonomic trainers', 'Polarized sunglasses'],
            image: '/outfits/sightseeing.png'
        },
        {
            category: 'networking',
            title: 'Executive Panel Smart-Casual',
            description: 'A sharp, unstructured navy blazer paired with a crisp white Oxford shirt, slim grey trousers, and brown leather double-monk straps. Professional but highly comfortable.',
            items: ['Navy blue unstructured blazer', 'Crisp white Oxford shirt', 'Tailored grey trousers', 'Leather monk strap shoes'],
            image: '/outfits/networkingMale.png'
        },
        {
            category: 'Sabbath',
            title: 'Parisian Bistro Class',
            description: 'Yup we are going to church, so come with your trad or a nice shirt and a trousers',
            items: ['Charcoal mock-neck sweater', 'Dark indigo slim jeans', 'Suede Chelsea boots', 'Leather strap dress watch'],
            image: '/outfits/sabbathMale.png'
        },
        {
            category: 'photo-day',
            title: 'Brandenburg Gate Cohort Frame',
            description: 'A structured crew-neck sweater in cream, layered over a collared shirt, paired with olive chinos. Designed to photograph cleanly and fit a premium color scheme.',
            items: ['Cream crew-neck sweater', 'Light blue collared shirt', 'Olive green chinos', 'Minimalist white leather sneakers'],
            image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=500&q=80'
        },
        {
            category: 'cold',
            title: 'Berlin Industrial Cold Layering',
            description: 'A thick wool-blend double-breasted overcoat, paired with a dark cashmere scarf, fitted thermal undershirt, black denim, and heavy-duty leather boots.',
            items: ['Double-breasted black wool overcoat', 'Dark cashmere scarf', 'Thermal base layers', 'Sturdy black leather boots'],
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80'
        }
    ]
};

const timelinesData = {
    female: [
        {
            time: '30 Days Before Travel',
            title: 'Hair, Skincare & Essentials Audit',
            body: 'Begin testing long-term skincare routines to prevent irritation before flights. Decide on your protective hairstyles (e.g. braids, twists, or booking wig units). Map out your shopping list for clothing and adaptors.',
            items: ['Audit skincare products', 'Secure travel-size shampoo/conditioner bottles', 'Finalize shopping list for outerwear']
        },
        {
            time: '14 Days Before Travel',
            title: 'Beauty Appointments & Wardrobe Fitting',
            body: 'Book and attend your hair appointment for protective styles. Get nails done (neutral/chic gel extensions that last 3-4 weeks). Try on all networking outfits to confirm proper fits.',
            items: ['Hair braiding or wig prep appointment', 'Gel manicure/pedicure session', 'Try on blazers and formal shoes']
        },
        {
            time: '7 Days Before Travel',
            title: 'Final Toiletries Purchase & Document Folders',
            body: 'Buy final travel items (lip balms, makeup wipes, sanitizers). Print all visa documentation copies (Category A and Category B) and place them in chronological order in your physical binder.',
            items: ['Buy sunscreen and makeup essentials', 'Print all visa supporting letters', 'Assemble physical document organizer']
        },
        {
            time: '1 Day Before Travel',
            title: 'Suitcase Lock & Core Carry-on Check',
            body: 'Pack your suitcase and double-check total weights (adhere to airline limits, e.g. 23kg). Ensure your passport, visa appointment slips, and primary cards are stored in your immediate carry-on pouch.',
            items: ['Weigh primary luggage', 'Pack power banks and chargers in carry-on', 'Double-check passport and flight boarding tickets']
        }
    ],
    male: [
        {
            time: '30 Days Before Travel',
            title: 'Outerwear Check & Travel Gear Sourcing',
            body: 'Confirm your heavy jackets, blazers, and boots are clean and fit correctly. Order your Schengen power adaptors and a compact high-output power bank. Begin checking currency cards.',
            items: ['Verify formal blazers/jackets sizes', 'Purchase international travel adaptors', 'Request international payment card limits']
        },
        {
            time: '14 Days Before Travel',
            title: 'Barber Planning & Shoes Break-In',
            body: 'Book a premium haircut appointment to line up close to departure. Start breaking in new walking sneakers and leather dress shoes by wearing them around the house to prevent blisters during travel.',
            items: ['Reserve barber slot for departure week', 'Break-in dress shoes and sneakers', 'Audit grooming kit requirements']
        },
        {
            time: '7 Days Before Travel',
            title: 'Document Binding & Grooming Kit Purchase',
            body: 'Buy travel-sized grooming items (cologne atomizers, hair pomade, moisturizer). Compile your printed Category A visa documents alongside Category B documents provided by the program coordinator.',
            items: ['Secure travel-size shaving and beard products', 'Assemble visa documents binder', 'Print flight ticket reservations']
        },
        {
            time: '1 Day Before Travel',
            title: 'Electronics Charging & Final Packing',
            body: 'Fully charge your phone, laptop, earbuds, and power banks. Place your passport, original documents folder, and cards in your carry-on bag. Lock and tag your checked baggage.',
            items: ['Charge all power banks and devices', 'Place passport and tickets in travel pouch', 'Confirm checked bag matches weight limitations']
        }
    ]
};

// APP LOGIC INITIALIZATION

document.addEventListener('DOMContentLoaded', () => {
    // Initial Setup
    initCountdown();
    renderDocuments();
    renderPackingGuides();
    renderGallery('female');
    renderGallery('male');
    renderTimelines();
    handleRouting();
    
    // Bind Event Listeners
    window.addEventListener('hashchange', handleRouting);
    
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    document.getElementById('nav-guide-cta').addEventListener('click', () => scrollToSection('guides'));
    document.getElementById('female-guide-trigger').addEventListener('click', () => navigateToGuide('female'));
    document.getElementById('male-guide-trigger').addEventListener('click', () => navigateToGuide('male'));
    
    // Lightbox Event Listeners
    document.getElementById('lightbox-close-btn').addEventListener('click', closeLightbox);
    document.getElementById('outfit-lightbox').addEventListener('click', (e) => {
        if(e.target === document.getElementById('outfit-lightbox')) closeLightbox();
    });
    
    // Smooth navigation links
    document.getElementById('logo-home-link').addEventListener('click', (e) => {
        e.preventDefault();
        backToHub();
        scrollToSection('hero');
    });
    
    document.getElementById('nav-docs-link').addEventListener('click', (e) => {
        e.preventDefault();
        backToHub();
        scrollToSection('documents');
    });
    
    document.getElementById('nav-cities-link').addEventListener('click', (e) => {
        e.preventDefault();
        backToHub();
        scrollToSection('cities');
    });
    
    document.getElementById('nav-faq-link').addEventListener('click', (e) => {
        e.preventDefault();
        backToHub();
        scrollToSection('faq');
    });
});

// ROUTING AND NAVIGATION

function handleRouting() {
    const hash = window.location.hash;
    const header = document.getElementById('main-header');
    
    // Close mobile menu on route change
    header.classList.remove('mobile-open');
    
    if (hash === '#female-guide') {
        showView('female-guide-view');
        updateNavLinks('female-guide');
        window.scrollTo(0, 0);
    } else if (hash === '#male-guide') {
        showView('male-guide-view');
        updateNavLinks('male-guide');
        window.scrollTo(0, 0);
    } else {
        // Default home view
        showView('home-view');
        updateNavLinks('home');
        
        // Handle scrolling to internal section if hash contains an ID (e.g. #documents)
        if (hash) {
            const elementId = hash.substring(1);
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }
}

function showView(viewId) {
    const views = ['home-view', 'female-guide-view', 'male-guide-view'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (id === viewId) {
            el.classList.remove('hide');
            el.classList.add('show');
        } else {
            el.classList.remove('show');
            el.classList.add('hide');
        }
    });
}

function updateNavLinks(activeRoute) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    
    if (activeRoute === 'home') {
        document.querySelector('[data-target="home-view"]').classList.add('active');
    }
    // Document, Cities and FAQ clicks do temporary highlights
}

function navigateToGuide(gender) {
    window.location.hash = `${gender}-guide`;
}

function backToHub() {
    window.location.hash = 'home';
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const header = document.getElementById('main-header');
    header.classList.toggle('mobile-open');
}

// DEPARTURE COUNTDOWN TIMER

function initCountdown() {
    // Destination launch date: August 6, 2026 (UTC)
    const departureDate = Date.UTC(2026, 7, 6, 0, 0, 0);
    if (Number.isNaN(departureDate)) {
        console.error('Countdown target date is invalid');
        return;
    }
    
    function updateClock() {
        const now = Date.now();
        const difference = departureDate - now;
        
        if (difference < 0) {
            document.getElementById('countdown-title').innerText = 'Immersion Program Active!';
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            clearInterval(timerInterval);
            return;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }
    
    updateClock();
    const timerInterval = setInterval(updateClock, 1000);
}

// DOCUMENT CHECKLIST MANAGEMENT

function renderDocuments() {
    const catAGrid = document.getElementById('cat-a-grid');
    const catBGrid = document.getElementById('cat-b-grid');
    
    catAGrid.innerHTML = '';
    catBGrid.innerHTML = '';
    
    // Render Category A
    documentsData.catA.forEach(doc => {
        catAGrid.appendChild(createDocCard(doc, 'catA'));
    });
    
    // Render Category B
    documentsData.catB.forEach(doc => {
        catBGrid.appendChild(createDocCard(doc, 'catB'));
    });
    
    updateDocProgress();
}

function createDocCard(doc, category) {
    const isCompleted = localStorage.getItem(`gicip_doc_${doc.id}`) === 'true';
    
    const card = document.createElement('div');
    card.className = `doc-card ${isCompleted ? 'completed' : ''}`;
    card.id = `card-${doc.id}`;
    
    const instructionsHtml = doc.instructions.map(item => `<li>${item}</li>`).join('');
    
    card.innerHTML = `
        <div class="doc-card-header">
            <div class="doc-checkbox-wrapper" onclick="toggleDocCheckbox('${doc.id}', event)">
                <div class="doc-checkbox">
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
            </div>
            <div class="doc-card-info" onclick="toggleDocPanel('${doc.id}')">
                <h3 class="doc-name">${doc.name}</h3>
                <div class="doc-meta">
                    <span class="doc-badge ${doc.type === 'required' ? 'required' : 'optional'}">${doc.type === 'required' ? 'Required' : 'Optional'}</span>
                    ${category === 'catB' ? `<span class="doc-badge optional" style="background:#FFF9E6; color:#B7791F">Coordinator Provided</span>` : ''}
                </div>
            </div>
            <button class="doc-toggle-btn" onclick="toggleDocPanel('${doc.id}')" aria-label="Expand details">
                <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        </div>
        <div class="doc-details-panel" id="panel-${doc.id}">
            <div class="doc-details-content">
                <p><strong>Purpose:</strong> ${doc.purpose}</p>
                <p><strong>Visa Guidelines:</strong></p>
                <ul class="doc-details-list">
                    ${instructionsHtml}
                </ul>
                ${category === 'catB' ? `
                <div class="doc-coordinator-info">
                    <span>📦 Provided by coordination office. You do not need to generate this personally, but verify receipt.</span>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function toggleDocCheckbox(id, event) {
    event.stopPropagation();
    const card = document.getElementById(`card-${id}`);
    const key = `gicip_doc_${id}`;
    const wasCompleted = localStorage.getItem(key) === 'true';
    
    if (wasCompleted) {
        localStorage.setItem(key, 'false');
        card.classList.remove('completed');
    } else {
        localStorage.setItem(key, 'true');
        card.classList.add('completed');
    }
    
    updateDocProgress();
}

function toggleDocPanel(id) {
    const panel = document.getElementById(`panel-${id}`);
    const card = document.getElementById(`card-${id}`);
    
    const isOpen = card.classList.contains('open');
    
    // Close other panels
    document.querySelectorAll('.doc-card').forEach(c => {
        if(c.id !== `card-${id}`) {
            c.classList.remove('open');
            const p = c.querySelector('.doc-details-panel');
            if (p) p.style.maxHeight = null;
        }
    });
    
    if (isOpen) {
        card.classList.remove('open');
        panel.style.maxHeight = null;
    } else {
        card.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function switchDocTab(tabName) {
    const tabs = ['cat-a', 'cat-b'];
    tabs.forEach(tab => {
        const btn = document.getElementById(`tab-${tab}`);
        const content = document.getElementById(`content-${tab}`);
        if (tab === tabName) {
            btn.classList.add('active');
            content.classList.add('active');
        } else {
            btn.classList.remove('active');
            content.classList.remove('active');
        }
    });
}

function updateDocProgress() {
    const totalA = documentsData.catA.length;
    const totalB = documentsData.catB.length;
    
    let checkedA = 0;
    documentsData.catA.forEach(doc => {
        if (localStorage.getItem(`gicip_doc_${doc.id}`) === 'true') checkedA++;
    });
    
    let checkedB = 0;
    documentsData.catB.forEach(doc => {
        if (localStorage.getItem(`gicip_doc_${doc.id}`) === 'true') checkedB++;
    });
    
    // Update tab badges
    document.getElementById('badge-cat-a').innerText = `${checkedA}/${totalA}`;
    document.getElementById('badge-cat-b').innerText = `${checkedB}/${totalB}`;
    
    // Update Overall Progress Bar
    const total = totalA + totalB;
    const checkedTotal = checkedA + checkedB;
    const percent = total > 0 ? Math.round((checkedTotal / total) * 100) : 0;
    
    document.getElementById('doc-progress-bar').style.width = `${percent}%`;
    document.getElementById('doc-progress-percent').innerText = `${percent}%`;
    
    const statusDesc = document.getElementById('doc-progress-status-desc');
    if (percent === 100) {
        statusDesc.innerHTML = '🎉 <strong>All documents compiled!</strong> You are embassy-interview ready.';
    } else if (percent > 60) {
        statusDesc.innerHTML = '✨ <strong>Excellent progress!</strong> Keep gathering the remaining files.';
    } else {
        statusDesc.innerHTML = 'Click items below to review instructions and check them off.';
    }
}

// PACKING GUIDES RENDERER

function renderPackingGuides() {
    const femaleGrid = document.getElementById('female-packing-grid');
    const maleGrid = document.getElementById('male-packing-grid');
    
    femaleGrid.innerHTML = '';
    maleGrid.innerHTML = '';
    
    // Female Guide
    packingData.female.forEach(section => {
        femaleGrid.appendChild(createPackingCard(section, 'female'));
    });
    
    // Male Guide
    packingData.male.forEach(section => {
        maleGrid.appendChild(createPackingCard(section, 'male'));
    });
}

function createPackingCard(section, gender) {
    const card = document.createElement('div');
    card.className = 'packing-card';
    
    const itemsHtml = section.items.map((item, index) => {
        const itemId = `${gender}-${section.category.toLowerCase().replace(/[^a-z0-9]/g, '')}-${index}`;
        const isChecked = localStorage.getItem(`gicip_pack_${itemId}`) === 'true';
        
        return `
            <div class="packing-item ${isChecked ? 'checked' : ''}" id="pack-item-${itemId}" onclick="togglePackingItem('${itemId}', event)">
                <div class="packing-item-checkbox">
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <span class="packing-item-name">${item}</span>
            </div>
        `;
    }).join('');
    
    card.innerHTML = `
        <div class="packing-card-header">
            <div class="packing-card-icon">${section.icon}</div>
            <h3 class="packing-card-title">${section.category}</h3>
        </div>
        <div class="packing-list">
            ${itemsHtml}
        </div>
    `;
    
    return card;
}

function togglePackingItem(itemId, event) {
    event.stopPropagation();
    const itemEl = document.getElementById(`pack-item-${itemId}`);
    const key = `gicip_pack_${itemId}`;
    const wasChecked = localStorage.getItem(key) === 'true';
    
    if (wasChecked) {
        localStorage.setItem(key, 'false');
        itemEl.classList.remove('checked');
    } else {
        localStorage.setItem(key, 'true');
        itemEl.classList.add('checked');
    }
}

// OUTFIT GALLERY (Pinterest Masonry)

function renderGallery(gender) {
    const grid = document.getElementById(`${gender}-gallery-masonry`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    outfitGalleryData[gender].forEach(outfit => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', outfit.category);
        
        item.innerHTML = `
            <div class="gallery-img-wrapper">
                <img src="${outfit.image}" alt="${outfit.title}" class="gallery-img" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-tag">${outfit.category.replace('-', ' ')}</span>
                    <h4 class="gallery-title">${outfit.title}</h4>
                </div>
            </div>
            <div class="gallery-item-info">
                <h4 class="gallery-item-title">${outfit.title}</h4>
                <span class="gallery-item-tag">${outfit.category.replace('-', ' ')}</span>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(outfit, gender));
        grid.appendChild(item);
    });
}

function filterGallery(gender, category) {
    // Update active filter button
    const container = document.getElementById(`${gender}-gallery-filters`);
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = Array.from(container.querySelectorAll('.filter-btn')).find(btn => {
        return btn.getAttribute('onclick').includes(`'${category}'`);
    });
    if (activeBtn) activeBtn.classList.add('active');
    
    // Filter items
    const masonry = document.getElementById(`${gender}-gallery-masonry`);
    const items = masonry.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// LIGHTBOX MODAL CONTROL

function openLightbox(outfit, gender) {
    const lightbox = document.getElementById('outfit-lightbox');
    const img = document.getElementById('lightbox-img');
    const tag = document.getElementById('lightbox-tag');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    const list = document.getElementById('lightbox-items-list');
    
    img.src = outfit.image;
    img.alt = outfit.title;
    tag.innerText = outfit.category.replace('-', ' ');
    title.innerText = outfit.title;
    desc.innerText = outfit.description;
    
    list.innerHTML = outfit.items.map(item => `
        <li><span class="lightbox-bullet"></span>${item}</li>
    `).join('');
    
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('outfit-lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
}

// TIMELINES RENDERER

function renderTimelines() {
    const femaleTimeline = document.getElementById('female-timeline-container');
    const maleTimeline = document.getElementById('male-timeline-container');
    
    femaleTimeline.innerHTML = '';
    maleTimeline.innerHTML = '';
    
    // Female Timeline
    timelinesData.female.forEach(step => {
        femaleTimeline.appendChild(createTimelineCard(step));
    });
    
    // Male Timeline
    timelinesData.male.forEach(step => {
        maleTimeline.appendChild(createTimelineCard(step));
    });
}

function createTimelineCard(step) {
    const card = document.createElement('div');
    card.className = 'timeline-card';
    
    const checklistHtml = step.items.map(item => `
        <div class="timeline-checklist-item">
            <span class="timeline-chk-dot"></span>
            <span>${item}</span>
        </div>
    `).join('');
    
    card.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-time">${step.time}</div>
        <h3 class="timeline-title">${step.title}</h3>
        <p class="timeline-body">${step.body}</p>
        <div class="timeline-checklist">
            ${checklistHtml}
        </div>
    `;
    
    return card;
}

// ACCORDION (FAQ MODULE)

function toggleFaq(headerButton) {
    const card = headerButton.parentElement;
    const panel = card.querySelector('.faq-panel');
    const isOpen = card.classList.contains('open');
    
    // Collapse all other accordions
    document.querySelectorAll('.faq-card').forEach(c => {
        if(c !== card) {
            c.classList.remove('open');
            c.querySelector('.faq-panel').style.maxHeight = null;
        }
    });
    
    if (isOpen) {
        card.classList.remove('open');
        panel.style.maxHeight = null;
    } else {
        card.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
