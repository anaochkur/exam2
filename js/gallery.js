document.addEventListener('DOMContentLoaded', function(){
    lightGallery(document.getElementById('gallery__wrapper'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
        controls: true,
    });
})