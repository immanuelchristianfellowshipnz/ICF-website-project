/* Calendar calculations use Auckland's date and time, wherever the visitor is.
   UTC below is only used for calendar arithmetic, not as the event timezone. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ICFEvents = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function pad(n) { return String(n).padStart(2, '0'); }
  function key(date) {
    return date.getUTCFullYear() + '-' + pad(date.getUTCMonth() + 1) + '-' + pad(date.getUTCDate());
  }
  function clock(now) {
    var parts = new Intl.DateTimeFormat('en-NZ', {
      timeZone: 'Pacific/Auckland', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(now);
    function value(type) { return Number(parts.find(function (p) { return p.type === type; }).value); }
    var day = new Date(Date.UTC(value('year'), value('month') - 1, value('day')));
    return { day: day, key: key(day) + 'T' + pad(value('hour') % 24) + ':' + pad(value('minute')) };
  }
  function liveSpecials(now, items) {
    var nowKey = clock(now).key;
    return (items || []).filter(function (e) {
      return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(e.start) &&
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(e.end) && e.end > e.start && e.end > nowKey;
    }).map(function (e) {
      return { title: e.title, details: e.details, start: e.start, end: e.end,
        date: e.start.slice(0,10), special: true, href: e.href || 'visit.html' };
    }).sort(function (a,b) { return a.start.localeCompare(b.start); });
  }
  function upcoming(now, limit, specialEvents) {
    var current = clock(now), found = [];
    function add(date, start, end, title, details, href) {
      var dateKey = key(date), endKey = dateKey + 'T' + end;
      if (endKey > current.key) found.push({ title: title, details: details,
        date: dateKey, start: dateKey + 'T' + start, end: endKey,
        href: href || 'visit.html#gathering-times', special: false });
    }
    for (var i = 0; i < 90; i++) {
      var d = new Date(current.day.getTime() + i * 86400000);
      var weekday = d.getUTCDay(), nth = Math.ceil(d.getUTCDate() / 7);
      if (weekday === 0) add(d,'10:30','13:30','Sunday service','10:30am to 1:30pm · Service and fellowship');
      if (weekday === 0 && nth === 3) add(d,'13:30','23:59',"Women's ministry, gospel outreach and youth ministry",'After the service and fellowship','ministries.html');
      if (weekday === 5 && nth !== 1) add(d,'19:30','21:30','Bible study and prayer meeting','7:30pm to 9:30pm');
      if (weekday === 6 && nth === 1) add(d,'10:30','13:00','Fasting prayer','10:30am to 1:00pm');
    }
    return found.concat(liveSpecials(now,specialEvents)).sort(function (a,b) {
      return a.start.localeCompare(b.start) || Number(b.special)-Number(a.special);
    }).slice(0,limit || 8);
  }
  return { clock: clock, upcoming: upcoming, liveSpecials: liveSpecials };
});
