angular.module('zoola.core').factory('resourceService', function () {
    svc = {};
    svc.loaded = {
        parallaxData: {
            data: [
                'images/zoola_parallax2.jpg',
                'images/zoola_inside.jpg',
                'images/parallax2.jpg'
            ]
        },
        praisesData: {
            data: [
                {
                    text: "I have been going to Gil and Linda for over four years. They recently moved to a much more\n" +
                    "                        spacious\n" +
                    "                        salon and thus will be adding esthetics services as well. Gil and Linda are perfectionists,\n" +
                    "                        every\n" +
                    "                        time I go there my hair is perfect whether it is highlights, colour, cuts and blow drys. I\n" +
                    "                        travel\n" +
                    "                        over an hour, each way, to get to them because they are worth it. You won't be disappointed.",
                    writer: "Becca A."
                },
                {
                    text: " Gil is an amazing hairdresser. He has the skill and vision to cut your hair which ever way you\n" +
                    "                        want.\n" +
                    "                        I have been going to the same guy for the last 13 years. I was convinced by my friends to try\n" +
                    "                        Gil\n" +
                    "                        out and have been going to him ever since. Always does an amazing job and stays consistent.",
                    writer: "Yoni D."
                }
            ]
        },
        workersData: {
            data: [{
                name: 'Gil Jacob - Owner',
                src: 'images/gil.jpg',
                description: 'Gil is always the first to greet you with a smile when you enter the salon, making you feel comfortable and at ease. Gil first began his journey as a hair stylist when he was 14 years old, with his sister being his first client. He immediately realized his passion for the craft and was already working as an assistant at a hair salon by the age of 16! Through hard work and dedication Gil was able to open “Zoola” salon 5 years later. In November 2016, the salon was relocated to a new, renovated and larger location, as a result of the growing success of the business. Gil takes pride of his salon as it is the product of many years of dedication and hard work.'
            }, {
                name: 'Alina - Stylist',
                src: 'images/alina.jpg',
                description: 'I had graduated from hairdressing school at 2008 and started my full-time career as a stylist at the salon. A year later I became a first time mom and made my family my first priority. During this time I continued my career on a part time basis. Now that both of my kids are in school Im exited to be back.'
            }]

        },
        prices: {
            data: [{
                cut: 'Blow Dry',
                price: "30+"
            }, {
                cut: 'Blow Dry-Junior Stylist',
                price: "20+"
            }, {
                cut: 'Men’s Cut',
                price: '25'
            }, {
                cut: 'Men’s Cut-Junior Stylist',
                price: '20'
            }, {
                cut: 'Women’s Cut',
                price: '45+'
            }, {
                cut: 'Women’s Cut & Blow-Dry',
                price: '65+'
            }, {
                cut: 'Colour',
                price: '45+'
            }, {
                cut: 'Colour & Cut',
                price: '70+'
            }, {
                cut: 'Colour & Cut & Blow-Dry',
                price: '85+'
            }, {
                cut: 'Full Highlights',
                price: '100+'
            }, {
                cut: 'Partial Highlights',
                price: '75+'
            }, {
                cut: 'Men’s Colour',
                price: '30+'
            }, {
                cut: 'Ombré/Balayage',
                price: '100+'
            }, {
                cut: 'Hair Treatments',
                price: '20-45'
            }, {
                cut: 'Boy’s Cut',
                price: '20'
            }, {
                cut: 'Boy’s Cut-Junior Stylist',
                price: '15'
            }, {
                cut: 'Girl’s Cut',
                price: '35'
            }, {
                cut: 'Girl’s Cut-Junior Stylist',
                price: '25'
            }]
        }
    };

    return svc;
});