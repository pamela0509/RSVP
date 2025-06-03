function ProfilePage({ currentUser }) {
    const enrolledCourses = getEnrolledCourses();
    const favoriteCourses = getFavoriteCourses();

    return (
        <div className="container" data-name="profile-page" data-file="components/ProfilePage.js">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4" data-name="profile-card" data-file="components/ProfilePage.js">
                        <div className="card-body text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                                className="rounded-circle mb-3" 
                                width="150" 
                                height="150"
                                alt="Profile"
                                data-name="profile-avatar" 
                                data-file="components/ProfilePage.js"
                            />
                            <h4 data-name="profile-name" data-file="components/ProfilePage.js">
                                {currentUser?.name || 'Usuario'}
                            </h4>
                            <p className="text-muted" data-name="profile-email" data-file="components/ProfilePage.js">
                                {currentUser?.email || 'usuario@email.com'}
                            </p>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary-custom" data-name="edit-profile-btn" data-file="components/ProfilePage.js">
                                    <i className="fas fa-edit me-1"></i>
                                    Editar Perfil
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-8">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <div className="card text-center" data-name="stats-enrolled" data-file="components/ProfilePage.js">
                                <div className="card-body">
                                    <i className="fas fa-book fa-2x text-primary mb-2"></i>
                                    <h3>{enrolledCourses.length}</h3>
                                    <p className="text-muted">Cursos Inscritos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" data-name="stats-favorites" data-file="components/ProfilePage.js">
                                <div className="card-body">
                                    <i className="fas fa-heart fa-2x text-danger mb-2"></i>
                                    <h3>{favoriteCourses.length}</h3>
                                    <p className="text-muted">Favoritos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" data-name="stats-certificates" data-file="components/ProfilePage.js">
                                <div className="card-body">
                                    <i className="fas fa-certificate fa-2x text-warning mb-2"></i>
                                    <h3>0</h3>
                                    <p className="text-muted">Certificados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card" data-name="recent-activity" data-file="components/ProfilePage.js">
                        <div className="card-header">
                            <h5><i className="fas fa-clock me-2"></i>Actividad Reciente</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">No hay actividad reciente que mostrar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
