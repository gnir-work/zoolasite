angular.module('prices').
    controller('pricesController', function($scope){

        this.cuts = [{
            cut: 'Blow Dry',
            price: '30'
        },{
            cut: 'Men’s Cut',
            price: '25'
        },{
            cut: 'Women’s Cut',
            price: '40'
        },{
            cut: 'Women’s Cut & Blow-Dry',
            price: '65'
        },{
            cut: 'Colour',
            price: '45'
        },{
            cut: 'Colouring & Cut',
            price: '70'
        },{
            cut: 'Colour & Cut & Blow-Dry',
            price: '90'
        },{
            cut: 'Full Highlights',
            price: '120+'
        },{
            cut: 'Partial Highlights',
            price: '75+'
        },{
            cut: 'Men’s Colour',
            price: '30'
        },{
            cut: 'Ombré/Balayage',
            price: '100+'
        },{
            cut: 'Hair Treatments',
            price: '35'
        },{
            cut: 'Boy’s Cut',
            price: '20'
        },{
            cut: 'Girl’s Cut',
            price: '30'
        }];

        this.deals = [{
            name: 'Blow Dry Klub: 5 Visits (Wash & Blow-Dry)',
            price: '15'
        },{
            name: 'Women’s Cut, Colour & Blow-Dry',
            price: '15'
        },{
            name: 'Women’s Colour & Blow-Dry',
            price: '15'
        },{
            name: 'Men’s Cut & Color',
            price: '15'
        },{
            name: 'Colour, Partial Highlights, Cut & Blow-Dry',
            price: '15'
        },{
            name: 'Colour, Full Highlights, Cut & Blow-Dry',
            price: '15'
        },{
            name: 'Full Highlights, Cut & Blow-Dry',
            price: '15'
        },{
            name: 'Partial Highlights, Cut & Blow-Dry ',
            price: '15'
        }]
});