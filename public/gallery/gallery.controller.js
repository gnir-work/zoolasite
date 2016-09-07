
//Gallery controller
angular.module('gallery').
    controller('galleryController', function($scope, $http){
    $('.parallax-mirror').remove();

    //Gallery clicking function
    this.showPhoto = function($event){
        var src = $event.currentTarget.src;
        var imageSnippet = "<img class='modal-photo' src='" + src + "' alt='modal photo' />"
        $('.photoModal-body').html(imageSnippet);
        $('#photoModal').modal('show');
    };

    var controller = this;

    $http.get('/insta/media').then(function success(response){
        var rawPhotos = response.data.media;
        var photos = [];
        var tmpPhotos = [];
        for(var i = 1; i <= rawPhotos.length; i++){
            tmpPhotos.push({
                src: rawPhotos[i - 1].src,
                alt: 'gallery image'
            });

            if(i % 4 == 0){
                photos.push(tmpPhotos);
                tmpPhotos = [];
            }
        }
        photos.push(tmpPhotos);
        controller.photos = photos;
    }, function Error(err){
        console.log(JSON.stringify(err));
    });


    
});