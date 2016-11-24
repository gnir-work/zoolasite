
//Prices controller
angular.module('prices').
    controller('pricesController', function($scope){

        this.cuts = [{
            cut: 'Blow Dry',
            price: "30+"
        },{
            cut: 'Men’s Cut',
            price: '25+'
        },{
            cut: 'Women’s Cut',
            price: '45+'
        },{
            cut: 'Women’s Cut & Blow-Dry',
            price: '65+'
        },{
            cut: 'Colour',
            price: '45+'
        },{
            cut: 'Colour & Cut',
            price: '70+'
        },{
            cut: 'Colour & Cut & Blow-Dry',
            price: '85+'
        },{
            cut: 'Full Highlights',
            price: '100+'
        },{
            cut: 'Partial Highlights',
            price: '75+'
        },{
            cut: 'Men’s Colour',
            price: '30+'
        },{
            cut: 'Ombré/Balayage',
            price: '100+'
        },{
            cut: 'Hair Treatments',
            price: '20-45'
        },{
            cut: 'Boy’s Cut',
            price: '20'
        },{
            cut: 'Girl’s Cut',
            price: '35'
        }];
});