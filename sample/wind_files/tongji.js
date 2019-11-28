var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['setCookieDomain', '*.hfjy.com']);
_paq.push(['setDocumentTitle', document.domain + '/' + document.title]);
if ("undefined" != typeof args) {
    _paq.push(['setCustomVariable', 1, 'uid', args.uid || '', 'page']);
    _paq.push(['setCustomVariable', 2, 'adid', args.adid || '', 'page']);
}
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="https://analysis.hfjy.top/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();