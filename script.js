const $html = document.querySelector('html')
const $body = document.querySelector('body')
const $header = document.querySelector('header')
const $localTimeline = document.querySelector(".third-block")

$body.onscroll = () => {
    if($html.scrollTop > windowHeight*0.15){
        $header.classList.add('box-shadow-bottom')
    }else{
        $header.classList.remove('box-shadow-bottom')
    }
}