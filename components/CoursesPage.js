function CoursesPage({ pageType, courses, onToggleFavorite, onEnroll }) {
    let filteredCourses = [];
    let pageTitle = '';
    let emptyMessage = '';

    switch(pageType) {
        case 'courses':
            filteredCourses = getEnrolledCourses();
            pageTitle = 'Mis Cursos';
            emptyMessage = 'No tienes cursos inscritos aún. ¡Explora nuestro catálogo!';
            break;
        case 'favorites':
            filteredCourses = getFavoriteCourses();
            pageTitle = 'Cursos Favoritos';
            emptyMessage = 'No tienes cursos favoritos. Marca algunos cursos como favoritos para verlos aquí.';
            break;
        case 'explore':
            filteredCourses = courses;
            pageTitle = 'Explorar Cursos';
            emptyMessage = 'No hay cursos disponibles en este momento.';
            break;
        case 'certifications':
            filteredCourses = getEnrolledCourses();
            pageTitle = 'Mis Certificaciones';
            emptyMessage = 'Completa tus cursos para obtener certificaciones.';
            break;
        default:
            filteredCourses = courses;
            pageTitle = 'Cursos';
            emptyMessage = 'No hay cursos disponibles.';
    }

    return (
        <div className="container" data-name="courses-page" data-file="components/CoursesPage.js">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 data-name="page-title" data-file="components/CoursesPage.js">
                    <i className={`fas ${pageType === 'courses' ? 'fa-book' : pageType === 'favorites' ? 'fa-heart' : pageType === 'explore' ? 'fa-search' : 'fa-certificate'} me-2`}></i>
                    {pageTitle}
                </h2>
                <span className="badge bg-primary" data-name="courses-count" data-file="components/CoursesPage.js">
                    {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''}
                </span>
            </div>

            {filteredCourses.length === 0 ? (
                <div className="text-center py-5" data-name="empty-state" data-file="components/CoursesPage.js">
                    <i className="fas fa-inbox fa-4x text-muted mb-3"></i>
                    <h4 className="text-muted">{emptyMessage}</h4>
                </div>
            ) : (
                <div className="row" data-name="courses-grid" data-file="components/CoursesPage.js">
                    {filteredCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onToggleFavorite={onToggleFavorite}
                            onEnroll={onEnroll}
                            showEnrollButton={pageType !== 'courses'}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
