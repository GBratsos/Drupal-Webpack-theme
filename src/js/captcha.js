(function ($, Drupal) {
    'use strict';

    Drupal.behaviors.recapcha_ajax_behaviour = {
    attach: function(context, settings) {
        if (typeof grecaptcha != "undefined") {
        var captchas = document.getElementsByClassName('g-recaptcha');
        for (var i = 0; i < captchas.length; i++) {
            var site_key = captchas[i].getAttribute('data-sitekey');
            if (!$(captchas[i]).html()) {
            grecaptcha.render(captchas[i], { 'sitekey' : site_key});
            }
        }
        }
    }
    };

})(jQuery, Drupal);
  