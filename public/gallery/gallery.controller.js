
angular.module('gallery').
    controller('galleryController', function($scope){
    $('.parallax-mirror').remove();

    //Gallery clicking function
    this.showPhoto = function($event){
        var src = $event.currentTarget.src;
        var imageSnippet = "<img class='modal-photo' src='" + src + "' alt='modal photo' />"
        $('.photoModal-body').html(imageSnippet);
        $('#photoModal').modal('show');
    };

    var rawPhotos = [{
        src : 'images/gallery/test1.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test2.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test3.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test4.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test5.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test6.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test7.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test9.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test10.jpeg',
        alt : 'gallery image'
    },{
        src : 'images/gallery/test11.jpeg',
        alt : 'gallery image'
    }];

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
    this.photos = photos;

    
});