// Component generators
function createCourseCard(course, showEnrollButton = true) {
    const progressBar = course.enrolled ? 
        `<div class="progress mb-2" style="height: 8px;">
            <div class="progress-bar progress-bar-custom" style="width: ${course.progress}%"></div>
         </div>
         <small class="text-muted">Progreso: ${course.progress}%</small>` : '';

    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card course-card h-100">
                <div class="course-header">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">${course.title}</h5>
                        <button class="favorite-btn ${course.favorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${course.id})">
                            <i class="${course.favorite ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                    <p class="mb-0">
                        <i class="fas fa-clock me-1"></i>
                        ${course.duration}
                    </p>
                </div>
                
                <img src="${course.image}" class="card-img-top" alt="${course.title}" 
                     style="height: 200px; object-fit: cover;">
                
                <div class="card-body d-flex flex-column">
                    <p class="card-text flex-grow-1">${course.description}</p>
                    
                    ${progressBar}
                    
                    <div class="course-info mb-3">
                        <small class="text-muted d-block">
                            <i class="fas fa-user me-1"></i>${course.instructor}
                        </small>
                        <small class="text-muted d-block">
                            <i class="fas fa-signal me-1"></i>${course.level}
                        </small>
                        <div class="fw-bold text-primary mt-2" style="font-size: 1.2rem;">
                            $${course.price}
                        </div>
                    </div>
                    
                    ${showEnrollButton ? `
                        <button class="btn btn-primary-custom w-100 ${course.enrolled ? 'disabled' : ''}" 
                                onclick="enrollCourse(${course.id})" 
                                ${course.enrolled ? 'disabled' : ''}>
                            ${course.enrolled ? 
                                '<i class="fas fa-check me-1"></i>Inscrito' : 
                                '<i class="fas fa-plus me-1"></i>Inscribirse'
                            }
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function createBlogCard(post) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card course-card h-100">
                <img src="${post.image}" class="card-img-top" alt="${post.title}" 
                     style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text flex-grow-1">${post.excerpt}</p>
                    <div class="mt-auto">
                        <small class="text-muted">
                            <i class="fas fa-user me-1"></i>${post.author}
                        </small>
                        <small class="text-muted d-block">
                            <i class="fas fa-calendar me-1"></i>${new Date(post.date).toLocaleDateString('es-ES')}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createProgressCard(course) {
    return `
        <div class="col-md-6 mb-3">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">${course.title}</h6>
                    <div class="progress mb-2" style="height: 10px;">
                        <div class="progress-bar progress-bar-custom" 
                             style="width: ${course.progress}%"></div>
                    </div>
                    <small class="text-muted">${course.progress}% completado</small>
                </div>
            </div>
        </div>
    `;
}
