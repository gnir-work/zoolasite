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
        }

    };
    return svc;

})
;