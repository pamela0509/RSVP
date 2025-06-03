// Application state
let appState = {
    currentUser: null,
    currentPage: 'home',
    cartItems: 0,
    favoritesCount: 0
};

// Course data
const courses = [
    {
        id: 1,
        title: "Desarrollo UX/UI",
        duration: "10 semanas",
        description: "Aprende los fundamentos del diseño de experiencia de usuario e interfaces",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        price: 299,
        instructor: "Ana García",
        level: "Intermedio",
        enrolled: false,
        favorite: false,
        progress: 0
    },
    {
        id: 2,
        title: "Primeros pasos de la ciberseguridad",
        duration: "8 semanas",
        description: "Introducción a la seguridad informática y protección de datos",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
        price: 249,
        instructor: "Carlos Mendez",
        level: "Principiante",
        enrolled: false,
        favorite: false,
        progress: 0
    },
    {
        id: 3,
        title: "Inteligencia artificial para todos",
        duration: "10 semanas",
        description: "Conceptos básicos de IA y machine learning aplicados",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        price: 349,
        instructor: "Dr. María López",
        level: "Intermedio",
        enrolled: false,
        favorite: false,
        progress: 0
    }
];

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "El futuro del diseño UX/UI",
        excerpt: "Descubre las tendencias que marcarán el diseño digital en los próximos años",
        date: "2024-01-15",
        author: "Ana García",
        image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        title: "Ciberseguridad en el hogar",
        excerpt: "Consejos prácticos para proteger tu red doméstica y dispositivos personales",
        date: "2024-01-10",
        author: "Carlos Mendez",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        title: "IA y el mercado laboral",
        excerpt: "Cómo la inteligencia artificial está transformando las oportunidades de empleo",
        date: "2024-01-05",
        author: "Dr. María López",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    }
];

// Utility functions
function getCourses() {
    return courses;
}

function getCourseById(id) {
    return courses.find(course => course.id === id);
}

function getEnrolledCourses() {
    return courses.filter(course => course.enrolled);
}

function getFavoriteCourses() {
    return courses.filter(course => course.favorite);
}

function getBlogPosts() {
    return blogPosts;
}
