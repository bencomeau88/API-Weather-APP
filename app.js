$(function() {

        $('#weatherForm').submit(function(e) {
                e.preventDefault();
                // http: //api.openweathermap.org/data/2.5/forecast?q=Washington%20DC
                var cityName = $('#cityName').val();
                $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + escape(cityName) + ',us&mode=json&units=imperial&appid=d0397a76e4d8280b58899b97612944fc',

                    function(data) {
                        $('.image-masthead').hide();
                        $('#masthead').hide();
                        $('#navBar').hide();
                        $('#bottomNav').hide();
                        $('#forecast').append('<li>' + data.main.temp + '</li>');
                        $('#weatherForm').animate({
                        	top: '+=200px',
          

                        },500000);
                           
                            // $('#weatherForm').addClass('pushUp');

                       

                        console.log('test');
                    });



            })
            // var dailyWeather = {
            // temp:""
            // humidity:
            // wind-speed:
            // rain:""
        $('#clear').on('click', function() {
            $('#forecast').empty();
        });
        $('#forecast').on('click', function() {
            $('#everything').show();
        })
    })
    // need to build a unix timestamp converter and also need to convert what appears to be kelvin to F. 
    //build something pretty with the data!