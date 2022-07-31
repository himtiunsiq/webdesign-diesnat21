//Fungsi untuk transisi halaman
window.addEventListener("load", ()=>{
    const transition_layer = document.querySelector('.transition');
    const links = document.querySelectorAll('a');
    const sidebar = document.querySelector('.sidebar');
    const hero = document.querySelector('.hero-paragraph');
    
    //Set delay transisi layer
    setTimeout(()=>{
        transition_layer.classList.remove('is-active')
    },500)
    setTimeout(()=>{
        hero.style.animation = `fadeUp 0.5s 0.5s forwards ease-out`;
    },1250)
    //Fungsi ketika link diklik
    links.forEach(link => {
        link.addEventListener("click", e=>{
            e.preventDefault();
            let target = e.target.href;

            //Set delay untuk pindah halaman

            //Delay menutup sidebar
            setTimeout(()=>{
                sidebar.classList.remove('is-active');
            }, 0)

            //Delay layer transisi muncul
            setTimeout(()=>{
                transition_layer.classList.add('is-active')
            }, 750)
            
            //Delay pindah halaman
            setTimeout(()=>{
                window.location.href = target;
            }, 1250)

        })
    });
});

//Fungsi untuk buka tutup sidebar
document.addEventListener("DOMContentLoaded", ()=>{
    const button_open = document.querySelector('.btn-open');
    const button_close = document.querySelector('.btn-close');
    const sidebar = document.querySelector('.sidebar');
    const links = document.querySelectorAll('.sidebar ul li');

    //Fungsi ketika menu bar diklik membuka sidebar
    button_open.addEventListener("click", ()=>{
        //Buka
        sidebar.classList.add('is-active');
        
        //Animasi link
        links.forEach((link, index) => {
            // console.log((index / 7) + 1)
            link.style.animation = `fadeUp 1s ${(index / 7) + 0.85}s forwards ease-out`;
        });
    })

    //Fungsi ketika button close diklik menutup sidebar
    button_close.addEventListener("click", ()=>{
        sidebar.classList.remove('is-active');
        links.forEach((link,index) => {
            link.style.animation = 'none';
        });
    })
});

//Fungsi untuk animasi
document.addEventListener("DOMContentLoaded", ()=>{
    const animates = document.querySelectorAll('.animate');

    //Deklarasi API Intersection Observer
    let observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.intersectionRatio > 0){
                entry.target.style.animation = `${entry.target.dataset.animate} 0.5s ${entry.target.dataset.delay} forwards ease-out`;
            }else{
                entry.target.style.animation = 'none';
            }
        })
        
    })
    animates.forEach(animate => {
        observer.observe(animate);    
    });
});