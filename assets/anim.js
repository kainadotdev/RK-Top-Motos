(function(){
  var h=document.querySelector('header');
  if(h){var f=function(){h.classList.toggle('scrolled',window.scrollY>8)};f();window.addEventListener('scroll',f,{passive:true})}
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var els=[].slice.call(document.querySelectorAll('main section .panel,.about .panel,.cols>div,footer .fgrid>div'));
  els.forEach(function(e){var i=[].indexOf.call(e.parentNode.children,e);e.style.setProperty('--d',Math.min(i,4)*.1+'s');e.classList.add('rv')});
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
  els.forEach(function(e){io.observe(e)});
})();
