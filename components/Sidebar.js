function Sidebar({ isOpen, onClose, currentPage, onPageChange, favoritesCount }) {
    const sidebarItems = [
        { id: 'home', label: 'Inicio', icon: 'fas fa-home' },
        { id: 'courses', label: 'Mis cursos', icon: 'fas fa-book' },
        { id: 'explore', label: 'Explorar', icon: 'fas fa-search' },
        { id: 'certifications', label: 'Certificaciones', icon: 'fas fa-certificate' },
        { id: 'favorites', label: 'Favoritos', icon: 'fas fa-heart', badge: favoritesCount }
    ];

    return (
        <React.Fragment>
            <div 
                className={`sidebar-overlay ${isOpen ? 'show' : ''}`} 
                onClick={onClose}
                data-name="sidebar-overlay" 
                data-file="components/Sidebar.js"
            ></div>
            
            <div 
                className={`sidebar ${isOpen ? 'show' : ''}`}
                data-name="sidebar" 
                data-file="components/Sidebar.js"
            >
                <div className="p-3 border-bottom border-light">
                    <h5 className="text-white mb-0" data-name="sidebar-title" data-file="components/Sidebar.js">
                        <i className="fas fa-graduation-cap me-2"></i>
                        Navegación
                    </h5>
                </div>
                
                {sidebarItems.map(item => (
                    <a
                        key={item.id}
                        href="#"
                        className={`sidebar-item ${currentPage === item.id ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(item.id);
                            onClose();
                        }}
                        data-name={`sidebar-${item.id}`} 
                        data-file="components/Sidebar.js"
                    >
                        <i className={`${item.icon} me-3`}></i>
                        {item.label}
                        {item.badge > 0 && (
                            <span className="badge bg-danger ms-2" data-name="favorites-badge" data-file="components/Sidebar.js">
                                {item.badge}
                            </span>
                        )}
                    </a>
                ))}
            </div>
        </React.Fragment>
    );
}
