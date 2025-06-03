function CourseCard({ course, onToggleFavorite, onEnroll, showEnrollButton = true }) {
    try {
        return (
            <div className="course-card h-full flex flex-col" data-name="course-card" data-file="components/CourseCard.js">
                <div className="course-header" data-name="course-header" data-file="components/CourseCard.js">
                    <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg font-semibold mb-0" data-name="course-title" data-file="components/CourseCard.js">
                            {course.title}
                        </h5>
                        <button
                            className={`favorite-btn ${course.favorite ? 'active' : ''}`}
                            onClick={() => onToggleFavorite(course.id)}
                            data-name="favorite-btn" 
                            data-file="components/CourseCard.js"
                        >
                            <i className={`${course.favorite ? 'fas' : 'far'} fa-heart`}></i>
                        </button>
                    </div>
                    <p className="mb-0 flex items-center" data-name="course-duration" data-file="components/CourseCard.js">
                        <i className="fas fa-clock mr-2"></i>
                        {course.duration}
                    </p>
                </div>
                
                <img 
                    src={course.image} 
                    className="w-full h-48 object-cover" 
                    alt={course.title}
                    data-name="course-image" 
                    data-file="components/CourseCard.js"
                />
                
                <div className="p-6 flex flex-col flex-grow" data-name="course-body" data-file="components/CourseCard.js">
                    <p className="text-gray-600 flex-grow mb-4" data-name="course-description" data-file="components/CourseCard.js">
                        {course.description}
                    </p>
                    
                    <div className="mb-4" data-name="course-info" data-file="components/CourseCard.js">
                        <div className="text-sm text-gray-500 flex items-center mb-1">
                            <i className="fas fa-user mr-2"></i>
                            {course.instructor}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mb-2">
                            <i className="fas fa-signal mr-2"></i>
                            {course.level}
                        </div>
                        <div className="text-xl font-bold text-blue-600">
                            ${course.price}
                        </div>
                    </div>
                    
                    {showEnrollButton && (
                        <button 
                            className={`btn-primary-custom w-full ${course.enrolled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => onEnroll(course.id)}
                            disabled={course.enrolled}
                            data-name="enroll-btn" 
                            data-file="components/CourseCard.js"
                        >
                            {course.enrolled ? (
                                <span>
                                    <i className="fas fa-check mr-2"></i>
                                    Inscrito
                                </span>
                            ) : (
                                <span>
                                    <i className="fas fa-plus mr-2"></i>
                                    Inscribirse
                                </span>
                            )}
                        </button>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('CourseCard component error:', error);
        return <div className="text-red-500 p-4">Error loading course card</div>;
    }
}
