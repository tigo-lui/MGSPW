(function(){
  var lb=document.getElementById('lb'),im=document.getElementById('lbImg'),cl=document.getElementById('lbClose'),last=null;
  function open(src,alt){im.src=src;im.alt=alt||'';lb.classList.add('open');cl.focus();}
  function close(){lb.classList.remove('open');im.src='';if(last)last.focus();}
  document.querySelectorAll('.frame,.thumb').forEach(function(b){
    b.addEventListener('click',function(){var i=b.querySelector('img');last=b;open(i.src,i.alt);});
  });
  cl.addEventListener('click',close);
  lb.addEventListener('click',function(e){if(e.target===lb)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open'))close();});
})();
