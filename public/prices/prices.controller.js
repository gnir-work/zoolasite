
angular.module('prices').
    controller('pricesController', function($scope){

        this.cuts = [{
            cut: 'Women’s Cut & Blow-Dry',
            price: '15'
        },{
            cut: 'Blow Dry',
            price: '15'
        },{
            cut: 'Men’s Cut',
            price: '15'
        },{
            cut: 'Colouring (please add $10 each extra tube)',
            price: '15'
        },{
            cut: 'Full Highlights',
            price: '15'
        },{
            cut: 'Partial Highlights',
            price: '15'
        },{
            cut: 'Men’s Highlights',
            price: '15'
        }]

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