function Animaton(){
    let tl = gsap.timeline();

tl.from(".F0F0" ,{
    y:-30,
    opacity:0,
    duratio:0.5,
    delay:0.5,
})
tl.from("h4" ,{
    y:-30,
    opacity:0,
    duratio:0.5,
    stagger:0.3
})

}

Animaton()


gsap.from(".content h1" , {
    opacity:0,
    duration:0.5,
    y:-30,
    delay:0.5,
    stagger:0.4
})

gsap.from (".img", {
    opacity: 0,
    scale:2,
    duration:1,
    delay:1
})
gsap.from (".content button", {
    opacity: 0,
    scale:0,
    duration:0.5,
    delay:0.2
})
gsap.from(".Ext .Experience" , {
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:0.5
})
gsap.from(".icon i" , {
    opacity:0,
    duration:0.5,
    y:-30,
    delay:0.3,
    stagger:0.5
})


    var typed = new Typed('#element', {
      strings: ['<i>Graphics</i> Designer.', '&amp; UI/UX Designer'],
      typeSpeed: 100,
    });

    let tabLinks = document.getElementsByClassName("tab-link");
    let tabContents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for (tabLink of tabLinks){
            tabLink.classList.remove("active-link")
        }
        for (tabContent of tabContents){
            tabContent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxlrgONxq9eYEkVwutMezODKOzd6u0b9Rdt8LlBLBSwm-Susr5u6Vs2R3yBgRK7EYuQfw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Massage send successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
