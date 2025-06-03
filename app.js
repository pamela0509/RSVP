function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [courses, setCourses] = React.useState(getCourses());
    const [cartItems, setCartItems] = React.useState(0);

    React.useEffect(() => {
        const toggleButton = document.getElementById('sidebarToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                setSidebarOpen(true);
            });
        }
    }, []);

    const handleLogin = () => {
        setCurrentUser({
            name: 'Juan Pérez',
            email: 'juan.perez@email.com'
        });
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setCurrentPage('home');
    };

    const handleToggleFavorite = (courseId) => {
        const updatedCourse = toggleFavorite(courseId);
        setCourses([...getCourses()]);
    };

    const handleEnroll = (courseId) => {
        const course = getCourseById(courseId);
        if (course && !course.enrolled) {
            course.enrolled = true;
            setCourses([...getCourses()]);
            setCartItems(cartItems + 1);
        }
    };

    const renderCurrentPage = () => {
        switch(currentPage) {
            case 'home':
                return (
                    <HomePage 
                        courses={courses}
                        onToggleFavorite={handleToggleFavorite}
                        onEnroll={handleEnroll}
                    />
                );
            case 'courses':
            case 'favorites':
            case 'explore':
            case 'certifications':
                return (
                    <CoursesPage 
                        pageType={currentPage}
                        courses={courses}
                        onToggleFavorite={handleToggleFavorite}
                        onEnroll={handleEnroll}
                    />
                );
            case 'profile':
                return <ProfilePage currentUser={currentUser} />;
            default:
                return (
                    <HomePage 
                        courses={courses}
                        onToggleFavorite={handleToggleFavorite}
                        onEnroll={handleEnroll}
                    />
                );
        }
    };

    const favoritesCount = getFavoriteCourses().length;

    return (
        <div data-name="app" data-file="app.js">
            <Navbar 
                currentUser={currentUser}
                onLogin={handleLogin}
                onLogout={handleLogout}
                cartItems={cartItems}
                onProfileClick={() => setCurrentPage('profile')}
            />
            
            <Sidebar 
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                favoritesCount={favoritesCount}
            />
            
            <div className="main-content" data-name="main-content" data-file="app.js">
                {renderCurrentPage()}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
