function renderBlogPage() {
    mainContent.innerHTML = `
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2><i class="fas fa-blog me-2"></i>Blog</h2>
                <span class="badge bg-primary">${getBlogPosts().length} artículo(s)</span>
            </div>
            <div class="row">
                ${getBlogPosts().map(post => createBlogCard(post)).join('')}
            </div>
        </div>
    `;
}

function renderContactPage() {
    mainContent.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h2><i class="fas fa-envelope me-2"></i>Contacto</h2>
                        </div>
                        <div class="card-body">
                            <div class="row mb-4">
                                <div class="col-md-6">
                                    <h5><i class="fas fa-map-marker-alt me-2"></i>Dirección</h5>
                                    <p>123 Calle Principal<br>Ciudad, País 12345</p>
                                </div>
                                <div class="col-md-6">
                                    <h5><i class="fas fa-phone me-2"></i>Teléfono</h5>
                                    <p>+1 234 567 8900</p>
                                    
                                    <h5><i class="fas fa-envelope me-2"></i>Email</h5>
                                    <p>info@lmsplatform.com</p>
                                </div>
                            </div>
                            
                            <h5>Envíanos un mensaje</h5>
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Nombre</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Asunto</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mensaje</label>
                                    <textarea class="form-control" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary-custom">
                                    <i class="fas fa-paper-plane me-1"></i>Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
