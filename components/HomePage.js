function HomePage({ courses, onToggleFavorite, onEnroll }) {
    try {
        return (
            <div className="pt-20" data-name="home-page" data-file="components/HomePage.js">
                <div className="hero-section" data-name="hero-section" data-file="components/HomePage.js">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-name="hero-title" data-file="components/HomePage.js">
                            Bienvenido a tu plataforma de aprendizaje
                        </h1>
                        <p className="text-xl mb-8" data-name="hero-subtitle" data-file="components/HomePage.js">
                            Descubre cursos especializados en tecnología y desarrolla tus habilidades profesionales
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <i className="fas fa-palette text-5xl mb-4"></i>
                                <h4 className="text-xl font-semibold">UX/UI Design</h4>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-shield-alt text-5xl mb-4"></i>
                                <h4 className="text-xl font-semibold">Ciberseguridad</h4>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-robot text-5xl mb-4"></i>
                                <h4 className="text-xl font-semibold">Inteligencia Artificial</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="max-w-6xl mx-auto px-4" data-name="courses-section" data-file="components/HomePage.js">
                    <h2 className="text-3xl font-bold text-center mb-8" data-name="courses-title" data-file="components/HomePage.js">
                        Cursos Destacados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-name="courses-grid" data-file="components/HomePage.js">
                        {courses.map(course => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onToggleFavorite={onToggleFavorite}
                                onEnroll={onEnroll}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('HomePage component error:', error);
        return <div className="text-red-500 p-4">Error loading home page</div>;
    }
}
