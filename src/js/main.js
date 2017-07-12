/*
 * Third party
 */

//= ../../bower_components/jquery/dist/jquery.js

/*
 * Custom
 */

//= modules/app.js

// <!-- Yandex.Metrika counter -->
// <script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter44977606 = new Ya.Metrika({
                    id:44977606,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
// </script>
// <noscript><div><img src="https://mc.yandex.ru/watch/44977606" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
// <!-- /Yandex.Metrika counter -->