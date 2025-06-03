// DOM elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const mainContent = document.getElementById('mainContent');
const loginBtn = document.getElementById('loginBtn');
const profileBtn = document.getElementById('profileBtn');
const cartBadge = document.getElementById('cartBadge');
const favoritesBadge = document.getElementById('favoritesBadge');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    updateUI();
    
    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', function() {
        sidebar.classList.add('show');
        sidebarOverlay.classList.add('show');
    });
});

// Navigation functions
function closeSidebar() {
    sidebar.classList.remove('show');
    sidebarOverlay.classList.remove('show');
}

function showPage(page) {
    appState.currentPage = page;
    closeSidebar();
    
    switch(page) {
        case 'home':
            renderHomePage();
            break;
        case 'courses':
            renderCoursesPage();
            break;
        case 'explore':
            renderExplorePage();
            break;
        case 'certifications':
            renderCertificationsPage();
            break;
        case 'favorites':
            renderFavoritesPage();
            break;
        case 'profile':
            renderProfilePage();
            break;
        case 'blog':
            renderBlogPage();
            break;
        case 'contact':
            renderContactPage();
            break;
        default:
            renderHomePage();
    }
}

// Authentication
function toggleLogin() {
    if (appState.currentUser) {
        // Logout
        appState.currentUser = null;
        updateUI();
        showPage('home');
    } else {
        // Login (simulate)
        appState.currentUser = {
            name: 'Juan Pérez',
            email: 'juan.perez@email.com'
        };
        updateUI();
    }
}

// Course actions
function toggleFavorite(courseId) {
    const course = getCourseById(courseId);
    if (course) {
        course.favorite = !course.favorite;
        appState.favoritesCount = getFavoriteCourses().length;
        updateUI();
        
        // Refresh current page if needed
        if (appState.currentPage === 'favorites') {
            renderFavoritesPage();
        }
    }
}

function enrollCourse(courseId) {
    const course = getCourseById(courseId);
    if (course && !course.enrolled) {
        course.enrolled = true;
        course.progress = Math.floor(Math.random() * 30); // Random initial progress
        appState.cartItems++;
        updateUI();
        
        // Refresh current page
        showPage(appState.currentPage);
    }
}

function showCart() {
    alert(`Tienes ${appState.cartItems} curso(s) en tu carrito`);
}

// UI updates
function updateUI() {
    // Update login button
    if (appState.currentUser) {
        document.getElementById('loginText').textContent = 'Cerrar sesión';
        loginBtn.innerHTML = '<i class="fas fa-sign-out-alt me-1"></i>Cerrar sesión';
        profileBtn.style.display = 'block';
    } else {
        document.getElementById('loginText').textContent = 'Iniciar sesión';
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-1"></i>Iniciar sesión';
        profileBtn.style.display = 'none';
    }
    
    // Update badges
    cartBadge.textContent = appState.cartItems;
    favoritesBadge.textContent = appState.favoritesCount;
    
    // Hide badges if zero
    cartBadge.style.display = appState.cartItems > 0 ? 'inline' : 'none';
    favoritesBadge.style.display = appState.favoritesCount > 0 ? 'inline' : 'none';
}
