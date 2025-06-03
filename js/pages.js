// Page renderers
function renderHomePage() {
    mainContent.innerHTML = `
        <div class="hero-section">
            <div class="container">
                <h1 class="display-4 fw-bold mb-4">Bienvenido a tu plataforma de aprendizaje</h1>
                <p class="lead mb-4">Descubre cursos especializados en tecnología y desarrolla tus habilidades profesionales</p>
                <div class="row text-center mt-5">
                    <div class="col-md-4">
                        <i class="fas fa-palette fa-3x mb-3"></i>
                        <h4>UX/UI Design</h4>
                    </div>
                    <div class="col-md-4">
                        <i class="fas fa-shield-alt fa-3x mb-3"></i>
                        <h4>Ciberseguridad</h4>
                    </div>
                    <div class="col-md-4">
                        <i class="fas fa-robot fa-3x mb-3"></i>
                        <h4>Inteligencia Artificial</h4>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <h2 class="text-center mb-5">Cursos Destacados</h2>
            <div class="row">
                ${getCourses().map(course => createCourseCard(course)).join('')}
            </div>
        </div>
    `;
}

function renderCoursesPage() {
    const enrolledCourses = getEnrolledCourses();
    
    mainContent.innerHTML = `
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2><i class="fas fa-book me-2"></i>Mis Cursos</h2>
                <span class="badge bg-primary">${enrolledCourses.length} curso(s)</span>
            </div>
            
            ${enrolledCourses.length === 0 ? `
                <div class="text-center py-5">
                    <i class="fas fa-inbox fa-4x text-muted mb-3"></i>
                    <h4 class="text-muted">No tienes cursos inscritos aún</h4>
                    <p class="text-muted">¡Explora nuestro catálogo y comienza a aprender!</p>
                </div>
            ` : `
                <div class="row mb-4">
                    <div class="col-12">
                        <h4>Progreso de Cursos</h4>
                        <div class="row">
                            ${enrolledCourses.map(course => createProgressCard(course)).join('')}
                        </div>
                    </div>
                </div>
                <div class="row">
                    ${enrolledCourses.map(course => createCourseCard(course, false)).join('')}
                </div>
            `}
        </div>
    `;
}

function renderExplorePage() {
    mainContent.innerHTML = `
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2><i class="fas fa-search me-2"></i>Explorar Cursos</h2>
                <span class="badge bg-primary">${getCourses().length} curso(s)</span>
            </div>
            <div class="row">
                ${getCourses().map(course => createCourseCard(course)).join('')}
            </div>
        </div>
    `;
}

function renderFavoritesPage() {
    const favoriteCourses = getFavoriteCourses();
    
    mainContent.innerHTML = `
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2><i class="fas fa-heart me-2"></i>Cursos Favoritos</h2>
                <span class="badge bg-primary">${favoriteCourses.length} curso(s)</span>
            </div>
            
            ${favoriteCourses.length === 0 ? `
                <div class="text-center py-5">
                    <i class="fas fa-heart fa-4x text-muted mb-3"></i>
                    <h4 class="text-muted">No tienes cursos favoritos</h4>
                    <p class="text-muted">Marca algunos cursos como favoritos para verlos aquí</p>
                </div>
            ` : `
                <div class="row">
                    ${favoriteCourses.map(course => createCourseCard(course)).join('')}
                </div>
            `}
        </div>
    `;
}
