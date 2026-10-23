(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var config = window.ICF_CONFIG || { draftMode: true, socialLinks: [], specialEvents: [] };
  // Keep previously shared one-page anchor links useful after the move.
  if (document.body.dataset.page === 'index.html') {
    var legacy = {
      visit:'visit.html', sundays:'visit.html#gathering-times', about:'about.html#about',
      beliefs:'about.html#beliefs', overseers:'about.html#overseers',
      ministries:'ministries.html', global:'ministries.html#global', worship:'ministries.html#worship',
      events:'events.html'
    };
    var target = legacy[window.location.hash.slice(1)];
    if (target) window.location.replace(target);
  }
  // The annual verses now live on the homepage. Keep earlier About-page links working.
  if (document.body.dataset.page === 'about.html' && window.location.hash === '#verses') {
    window.location.replace('index.html#verses');
  }
  // Font loading can move the photos above a direct verse link. Realign once,
  // unless the visitor has already started interacting with the page.
  if (document.body.dataset.page === 'index.html' && window.location.hash === '#verses' && document.fonts) {
    var verseLinkInterrupted = false;
    function interruptVerseLink() { verseLinkInterrupted = true; }
    var verseLinkInputs = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    verseLinkInputs.forEach(function (type) {
      window.addEventListener(type, interruptVerseLink, { once: true, passive: true });
    });
    document.fonts.ready.then(function () {
      if (!verseLinkInterrupted && window.location.hash === '#verses') {
        document.getElementById('verses').scrollIntoView({ block: 'start', behavior: 'instant' });
      }
      verseLinkInputs.forEach(function (type) { window.removeEventListener(type, interruptVerseLink); });
    });
  }
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('mobile-nav');
  function setMenu(open) {
    nav.hidden = !open;
    btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open ? 'Close menu' : 'Open menu');
  }
  if (btn && nav) {
    btn.addEventListener('click',function () { setMenu(nav.hidden); });
    nav.addEventListener('click',function (e) { if(e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown',function (e) {
      if (e.key === 'Escape' && !nav.hidden) { setMenu(false); btn.focus(); }
    });
    document.addEventListener('click',function (e) {
      if (!nav.hidden && !nav.contains(e.target) && !btn.contains(e.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change',function(e) { if(e.matches) setMenu(false); });
  }
  document.querySelectorAll('[data-draft]').forEach(function (el) { el.hidden = config.draftMode === false; });
  if (config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    document.querySelectorAll('[data-contact-email]').forEach(function (el) {
      var a = document.createElement('a'); a.href = 'mailto:'+config.email; a.textContent=config.email;
      el.replaceChildren(a);
    });
  } else if (config.draftMode === false) {
    document.querySelectorAll('[data-contact-email]').forEach(function(el) {
      el.textContent='Please speak with us at a Sunday gathering.';
    });
  }
  var socials = (config.socialLinks || []).filter(function(item) { return /^https:\/\//.test(item.url); });
  document.querySelectorAll('[data-contact-social]').forEach(function(el) {
    if (socials.length) {
      el.replaceChildren();
      socials.forEach(function(item,index) {
        if(index) el.appendChild(document.createTextNode(' · '));
        var a=document.createElement('a'); a.href=item.url; a.textContent=item.label; a.target='_blank'; a.rel='noopener'; el.appendChild(a);
      });
    } else if (config.draftMode === false) el.closest('[data-social-row]').hidden=true;
  });
  function element(tag,className,text) {
    var el=document.createElement(tag); if(className) el.className=className;
    if(text !== undefined) el.textContent=text; return el;
  }
  function eventRow(event) {
    var date = new Date(event.date+'T12:00:00Z');
    var li=element('li','event'), badge=element('div','date'), time=element('time');
    time.dateTime=event.date;
    time.setAttribute('aria-label',new Intl.DateTimeFormat('en-NZ',{timeZone:'UTC',dateStyle:'full'}).format(date));
    time.append(element('span','d',new Intl.DateTimeFormat('en-NZ',{timeZone:'UTC',weekday:'short'}).format(date)),element('span','n',date.getUTCDate()),element('span','m',new Intl.DateTimeFormat('en-NZ',{timeZone:'UTC',month:'short'}).format(date)));
    badge.append(time);
    var body=element('div','ev');
    if(event.special) body.append(element('span','badge','Special gathering'));
    body.append(element('h3','',event.title),element('p','',event.details));
    var a=element('a','text-link',event.special ? 'Plan your visit →' : 'Gathering details →'); a.href=event.href; body.append(a);
    li.append(badge,body); return li;
  }
  function updateEvents() {
    if(!window.ICFEvents) return;
    try {
      var now = new Date();
      document.querySelectorAll('[data-upcoming-events]').forEach(function(list) {
        var events=window.ICFEvents.upcoming(now,Number(list.dataset.limit),config.specialEvents);
        list.replaceChildren.apply(list,events.map(eventRow));
      });
      document.querySelectorAll('[data-special-events]').forEach(function(panel) {
        var live=window.ICFEvents.liveSpecials(now,config.specialEvents);
        panel.hidden=live.length===0;
        var list=panel.querySelector('[data-special-list]');
        list.replaceChildren.apply(list,live.map(function(e) {
          var li=element('li'); li.append(element('h3','',e.title),element('p','',e.details)); return li;
        }));
      });
    } catch (error) { /* The HTML retains a useful timetable when date APIs are unavailable. */ }
  }
  updateEvents();
  if (document.querySelector('[data-upcoming-events]')) {
    window.setInterval(updateEvents,60000);
    document.addEventListener('visibilitychange',function() { if(!document.hidden) updateEvents(); });
  }
})();
