import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTY5xdHocWcWWA29cjuqnKsSL5c8-LNdU",
    authDomain: "topsy-bf414.firebaseapp.com",
    projectId: "topsy-bf414",
    storageBucket: "topsy-bf414.firebasestorage.app",
    messagingSenderId: "525110262091",
    appId: "1:525110262091:web:6fe880db6c3d22aec0d0ce",
    measurementId: "G-XBBL95MGYW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const portfolioContainer = document.getElementById("portfolioContainer");

async function loadProjects() {
    const querySnapshot = await getDocs(collection(db,'projects'));
    querySnapshot.forEach(docSnap => {
        const data = docSnap.data();
        const card = document.createElement('div');
        card.className = 'swiper-slide portfolio-card';
        card.innerHTML = `
            <img src="${data.image || 'assets/images/placeholder.png'}" alt="${data.title}">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
        `;
        portfolioContainer.appendChild(card);
    });

    // Initialize Swiper after projects load
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
}

loadProjects();