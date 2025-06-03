function Navbar({ currentUser, onLogin, onLogout, cartItems, onProfileClick }) {
    try {
        return (
            <nav className="navbar-custom fixed top-0 left-0 right-0 z-50 px-4 py-3" data-name="navbar" data-file="components/Navbar.js">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <button 
                            className="text-white mr-4 p-2 hover:bg-gray-700 rounded" 
                            id="sidebarToggle"
                            data-name="sidebar-toggle" 
                            data-file="components/Navbar.js"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        
                        <a className="text-white font-bold text-xl flex items-center" href="#" data-name="brand" data-file="components/Navbar.js">
                            <i className="fas fa-graduation-cap mr-2"></i>
                            LMS Platform
                        </a>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <a className="text-white hover:text-gray-300 flex items-center" href="#" data-name="home-link" data-file="components/Navbar.js">
                            <i className="fas fa-home mr-1"></i>
                            Inicio
                        </a>
                        
                        {!currentUser ? (
                            <button 
                                className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition-colors" 
                                onClick={onLogin}
                                data-name="login-btn" 
                                data-file="components/Navbar.js"
                            >
                                <i className="fas fa-sign-in-alt mr-1"></i>
                                Iniciar sesión
                            </button>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <button 
                                    className="text-white hover:text-gray-300 flex items-center" 
                                    onClick={onProfileClick}
                                    data-name="profile-btn" 
                                    data-file="components/Navbar.js"
                                >
                                    <i className="fas fa-user mr-1"></i>
                                    Mi perfil
                                </button>
                                <button 
                                    className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition-colors" 
                                    onClick={onLogout}
                                    data-name="logout-btn" 
                                    data-file="components/Navbar.js"
                                >
                                    <i className="fas fa-sign-out-alt mr-1"></i>
                                    Cerrar sesión
                                </button>
                            </div>
                        )}
                        
                        <button 
                            className="text-white relative p-2 hover:bg-gray-700 rounded" 
                            data-name="cart-btn" 
                            data-file="components/Navbar.js"
                        >
                            <i className="fas fa-shopping-cart"></i>
                            {cartItems > 0 && (
                                <span className="cart-badge" data-name="cart-badge" data-file="components/Navbar.js">
                                    {cartItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        return <div className="text-red-500 p-4">Error loading navbar</div>;
    }
}
