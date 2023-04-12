const btn = document.querySelector('.btn')
const video = document.querySelector('.video')
console.log(video)

btn.addEventListener('click', function(){
   if(!btn.classList.contains('slide')){
    btn.classList.add('slide')
    video.pause()
   }
   else{
    btn.classList.remove('slide')
    video.play()
   }
})