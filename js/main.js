// //меню
document.addEventListener('DOMContentLoaded', () => { 
    const burgerItem=document.querySelector('.menu');
    const menuItem=document.querySelector('.nav');
    const closeItem=document.querySelector('.nav__close');
    burgerItem.addEventListener('click', () => {
    
        if(menuItem.classList.contains("active")){
            menuItem.classList.remove("active");
            closeItem.classList.remove("active");
            burgerItem.classList.remove("active");  
        } else{
            menuItem.classList.add("active"); 
            closeItem.classList.add("active");
            burgerItem.classList.add("active");  
        };
    })
    
    menuItem.addEventListener('click', () => {
        menuItem.classList.remove("active");
        closeItem.classList.remove("active");
        burgerItem.classList.remove("active"); 
    })   
});

//video
const videoBlock = document.querySelector('.video-block');
const videoTitle = document.querySelector('.video__title');
const videoTime = document.querySelector('.video__time');

if (videoBlock) {
	const video = videoBlock.querySelector('video');
	const playBtn = videoBlock.querySelector('.video-block__play');

	video.onloadedmetadata = function() {
		var duration = video.duration;
		var m = Math.floor(duration % 60);
		videoTime.innerHTML = Math.floor(duration / 60) + ':' + (m < 10 ? '0' : '') + m;
	};

	playBtn.addEventListener('click', () => {
		videoBlock.classList.add('video-block_played');
		video.play();
		video.controls = true;
		playBtn.classList.add('video-block__play_played');
		videoTitle.classList.add('video__title_hidden');
		videoTime.classList.add('video__time_hidden');
	});

	video.onpause = function() {
		videoBlock.classList.remove('video-block_played');
		video.controls = false;
		playBtn.classList.remove('video-block__play_played');
		videoTitle.classList.remove('video__title_hidden');
		videoTime.classList.remove('video__time_hidden');
	};
}

//geography
const geographyButton = document.querySelectorAll('.button_tab');
const geographyImage = document.querySelectorAll('.geography__image-secondary');

geographyButton.forEach(function(element){
    element.addEventListener('click', active);
});

function active(evt){
    const buttonTarget = evt.currentTarget;
	const button = buttonTarget.dataset.button;
    geographyButton.forEach(function(item){
        item.classList.remove('button_tab_active');
    });
    geographyImage.forEach(function(item){
        item.classList.remove('geography__image-secondary_active');
    });
    buttonTarget.classList.add('button_tab_active');
	document.querySelector(`#${button}`).classList.add('geography__image-secondary_active')
}

// slider
const mySwiperFormat = new Swiper('.news__slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
        // type: 'progressbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
    },
});

document.querySelectorAll('[data-modal-swiper]').forEach((slid, index) => {
    const swiperThumb = new Swiper(`[data-modal-swiper-thumb="${index}"]`, {
        // loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
    });

    new Swiper(`[data-modal-swiper="${index}"]`, {
        // loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperThumb
        },
    });
})


document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-modal-btn-close]');

    if (btn) {
        const modal = btn.closest('[data-modal-wrapper]');

        modal.classList.remove('active');
        document.querySelector('body').style['overflow'] = '';
    }
});

document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-btn-open-modal-news]');

    if (btn) {
        const attributeVaLue = btn.getAttribute('data-btn-open-modal-news')
        const modal = document.querySelector(`[data-modal-wrapper-news="${attributeVaLue}"]`);

        modal.classList.add('active');
        document.querySelector('body').style['overflow'] = 'hidden';
    }
});


// metrika
<!-- Yandex.Metrika counter -->
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(94418039, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
<!-- /Yandex.Metrika counter -->