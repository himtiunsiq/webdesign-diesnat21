//ambil tombol
var mybutton = document.getElementById("myBtn");

// tampilkan tombol saat user scroll 200px
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Lempar keatas saat tombol di tekan
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}