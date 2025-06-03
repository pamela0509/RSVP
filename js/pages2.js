function renderCertificationsPage() {
    const enrolledCourses = getEnrolledCourses();
    
    mainContent.innerHTML = `
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2><i class="fas fa-certificate me-2"></i>Mis Certificaciones</h2>
                <span class="badge bg-primary">${enrolledCourses.length} disponible(s)</span>
            </div>
            
            ${enrolledCourses.length === 0 ? `
                <div class="text-center py-5">
                    <i class="fas fa-certificate fa-4x text-muted mb-3"></i>
                    <h4 class="text-muted">No tienes certificaciones</h4>
                    <p class="text-muted">Completa tus cursos para obtener certificaciones</p>
                </div>
            ` : `
                <div class="row">
                    ${enrolledCourses.map(course => `
                        <div class="col-md-6 mb-4">
                            <div class="card">
                                <div class="card-body text-center">
                                    <i class="fas fa-certificate fa-3x text-warning mb-3"></i>
                                    <h5>${course.title}</h5>
                                    <p class="text-muted">Progreso: ${course.progress}%</p>
                                    ${course.progress >= 80 ? 
                                        '<button class="btn btn-success">Descargar Certificado</button>' :
                                        '<small class="text-muted">Completa el 80% para obtener tu certificado</small>'
                                    }
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;
}

function renderProfilePage() {
    if (!appState.currentUser) {
        mainContent.innerHTML = `
            <div class="container">
                <div class="text-center py-5">
                    <i class="fas fa-user-slash fa-4x text-muted mb-3"></i>
                    <h4 class="text-muted">Inicia sesión para ver tu perfil</h4>
                </div>
            </div>
        `;
        return;
    }
    
    const enrolledCourses = getEnrolledCourses();
    const favoriteCourses = getFavoriteCourses();
    
    mainContent.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                                 class="rounded-circle mb-3" width="150" height="150" alt="Profile">
                            <h4>${appState.currentUser.name}</h4>
                            <p class="text-muted">${appState.currentUser.email}</p>
                            <button class="btn btn-primary-custom">
                                <i class="fas fa-edit me-1"></i>Editar Perfil
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-8">
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <i class="fas fa-book fa-2x text-primary mb-2"></i>
                                    <h3>${enrolledCourses.length}</h3>
                                    <p class="text-muted">Cursos Inscritos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <i class="fas fa-heart fa-2x text-danger mb-2"></i>
                                    <h3>${favoriteCourses.length}</h3>
                                    <p class="text-muted">Favoritos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <i class="fas fa-certificate fa-2x text-warning mb-2"></i>
                                    <h3>0</h3>
                                    <p class="text-muted">Certificados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
