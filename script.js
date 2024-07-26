
Shery.imageEffect("#back", {style: 5, config: 
    {"a":{"value":1.83,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0346907993966816},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.33,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.21,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}}, gooey: true})

var elems = document.querySelectorAll(".elem")

elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("nav").addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"}); 
                    animating = false;
                },
            });
        
            index === h1s.length - 1 ? (index = 0) : index++;
        
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
});
})

// card click event
document.querySelectorAll('input[name="slide"]').forEach(input => {
    input.addEventListener('change', function() {
        if (this.checked) {
            const bgImage = this.getAttribute('data-bg');
            const shopSection = document.getElementById('shop-section');
            shopSection.style.backgroundImage = `url('${bgImage}')`;
            // shopSection.body.style.background = this.getAttribute('data-bg');
            shopSection.body.style.backgroundSize = 'cover';
            shopSection.body.style.backgroundRepeat = 'no-repeat';
            shopSection.body.style.backgroundPosition = 'center center';
        }
    });
});

// Trigger the change event on the initially checked input to set the initial background image
document.querySelector('input[name="slide"]:checked').dispatchEvent(new Event('change'));


// shop section

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide1').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide1').prepend(lists[lists.length - 1]);
}
  
// model opacity
document.getElementsByClassName('banner').addEventListener('Mouseover', function(){
    document.body.style.opacity = '1';
})





