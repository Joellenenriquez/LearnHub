
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });
    
    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active')
            }

        });

    });
    
});

/* Contact Us form */

                    function sendMail(){
                    
                        var params = {
                            name : document.querySelector("#name").value,
                            email : document.querySelector("#email").value,
                            address : document.querySelector("#address").value,
                            phone : document.querySelector("#phone").value,
                            message : document.querySelector("#message").value,
                        };

                        var serviceID = "service_gebgkhh";
                        var templateID = "template_ax1te0r";

                        emailjs.send(serviceID, templateID, params)
                        .then(alert("Email Sent Successfully!"))

                        .catch();
                    
                    };
               