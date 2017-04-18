// document.addEventListener('DOMContentLoaded', function() {
//     window.$ = window.jQuery = require('jquery');
//     console.log([$, jQuery ]);
//     console.log('window - DOMContentLoaded - capture'); // 1st
// }, true);


window.onload = function() {
    window.$ = window.jQuery = require('jquery');
    console.log([$, jQuery ]);

    // I also tried the below:
    // but with no success
    // var script = document.createElement("script");
    // script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    // document.body.appendChild(script);
};
