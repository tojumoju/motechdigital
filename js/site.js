/* Motech Digital shared script */
var ADS_ID = 'AW-XXXXXXXXX';          // replace with your Google Ads ID
var ADS_LABEL = 'YYYYYYYY';           // replace with your conversion label
var OFFER_END = new Date('2026-11-25T23:59:59+01:00').getTime();

(function(){
  var $ = function(s,r){return (r||document).querySelector(s)}, $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

  /* Google Ads tag (loads only once a real ID is set) */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  if (ADS_ID.indexOf('XXXX') === -1){
    var gs = document.createElement('script'); gs.async = true; gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID; document.head.appendChild(gs);
    gtag('js', new Date()); gtag('config', ADS_ID);
    $$('a.wa').forEach(function(a){a.addEventListener('click',function(){gtag('event','conversion',{'send_to':ADS_ID+'/'+ADS_LABEL})})});
  }

  /* mobile menu */
  var nav = $('#nav'), mb = $('#menubtn');
  if (nav && mb){
    mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')});
    $$('#menu a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')})});
  }

  /* Black Friday: countdown, sticky bar; hide every offer element once it ends */
  function pad(n){return String(n).padStart(2,'0')}
  function tick(){
    var t = OFFER_END - Date.now();
    if (t <= 0){ $$('[data-offer]').forEach(function(e){e.hidden = true}); return false }
    $$('.cd').forEach(function(c){
      c.querySelector('.d').textContent = pad(Math.floor(t/864e5));
      c.querySelector('.h').textContent = pad(Math.floor(t%864e5/36e5));
      c.querySelector('.m').textContent = pad(Math.floor(t%36e5/6e4));
      c.querySelector('.s').textContent = pad(Math.floor(t%6e4/1e3));
    });
    return true;
  }
  if (tick()){
    var iv = setInterval(function(){ if(!tick()) clearInterval(iv) }, 1000);
    var bar = $('#bar'), hc = $('#herocta');
    if (bar && hc) new IntersectionObserver(function(e){bar.classList.toggle('show',!e[0].isIntersecting && e[0].boundingClientRect.top<0)}).observe(hc);
  }

  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav&&nav.classList.contains('open')){nav.classList.remove('open');if(mb){mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Open menu')}}});

  /* client logo marquee: duplicate list for a seamless loop */
  var tr = $('#track');
  if (tr){ var n = tr.children.length; tr.innerHTML += tr.innerHTML; $$('li',tr).forEach(function(li,i){ if(i>=n) li.setAttribute('aria-hidden','true') }) }

  /* work page tabs (arrow keys + #hash) */
  var tabs = $$('[role=tab]');
  function openTab(t,focus){
    tabs.forEach(function(b){var on=b===t;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;document.getElementById(b.getAttribute('aria-controls')).hidden=!on});
    if(focus) t.focus();
  }
  if (tabs.length){
    tabs.forEach(function(t,i){
      t.addEventListener('click',function(){openTab(t); history.replaceState(null,'','#'+t.id.slice(2))});
      t.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;if(n===null)return;openTab(tabs[(n+tabs.length)%tabs.length],true);e.preventDefault()});
    });
    function fromHash(){var t=document.getElementById('t-'+location.hash.slice(1)); if(t) openTab(t)}
    fromHash(); window.addEventListener('hashchange',fromHash);
  }

  /* hide a portfolio card if its remote image fails to load */
  $$('.card img').forEach(function(im){im.addEventListener('error',function(){im.closest('.card').classList.add('gone')})});

  /* lightbox for cards without a link */
  var lb = $('#lb');
  if (lb){
    var lbi = lb.querySelector('img');
    $$('.zoom').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');lbi.src=i.currentSrc||i.src;lbi.alt=i.alt;lb.showModal()})});
    lb.addEventListener('click',function(){lb.close()});
  }

  /* contact form: opens WhatsApp with the message pre-filled (no backend needed) */
  var f = $('#quote');
  if (f) f.addEventListener('submit',function(e){
    e.preventDefault();
    var v = function(id){return f.elements[id].value.trim()};
    var msg = 'Hi Motech Digital, my name is ' + v('name') + '.\nService: ' + v('service') + '\n' + v('message');
    if (v('business')) msg += '\nBusiness: ' + v('business');
    window.open('https://wa.me/447769382796?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });
})();
