const courseData = [
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
        favorite: false
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
        favorite: false
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
        favorite: false
    }
];

function getCourses() {
    return courseData;
}

function getCourseById(id) {
    return courseData.find(course => course.id === id);
}

function toggleFavorite(courseId) {
    const course = getCourseById(courseId);
    if (course) {
        course.favorite = !course.favorite;
    }
    return course;
}

function getFavoriteCourses() {
    return courseData.filter(course => course.favorite);
}

function getEnrolledCourses() {
    return courseData.filter(course => course.enrolled);
}
