window.onscroll = function() {
    const myBtn = document.getElementById("myBtn");
    myBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none"; };
    
  function topFunction() {
    document.documentElement.scrollTop = 0; }