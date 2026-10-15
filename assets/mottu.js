(function(){
  var btn=document.getElementById('copiar'),msg=document.getElementById('copy-msg'),code='RKTOPMOTOS',t;
  function say(ok,text){msg.textContent=text;msg.className='copy-msg '+(ok?'ok':'err');clearTimeout(t);t=setTimeout(function(){msg.textContent='';msg.className='copy-msg'},5000)}
  function fallback(){
    var ta=document.createElement('textarea');ta.value=code;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,code.length);
    var ok=false;try{ok=document.execCommand('copy')}catch(e){}
    document.body.removeChild(ta);return ok;
  }
  btn.addEventListener('click',function(){
    var done=function(){say(true,'Código RKTOPMOTOS copiado!');btn.textContent='Copiado!';btn.classList.remove('pop');void btn.offsetWidth;btn.classList.add('pop');setTimeout(function(){btn.textContent='Copiar código';btn.classList.remove('pop')},2000)},fail=function(){say(false,'Não foi possível copiar automaticamente. Selecione o código acima e copie manualmente.')};
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(code).then(done,function(){fallback()?done():fail()})}
    else{fallback()?done():fail()}
  });
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
