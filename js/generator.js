function gen() {
    let userinput = document.querySelector('.userinput');
    let robuxinput = document.querySelector('.robuxamount');
    let genscreen = document.querySelector('.genbox');
    let txt = document.querySelector('h2');
    let btn = document.querySelector('button');
    genscreen.style.animation = "loadscrean 1s forwards";
    let usertxt = document.createElement("h3");
    usertxt.innerHTML = "user:" + userinput.value;
    genscreen.appendChild(usertxt);

    btn.disabled = true;

    let robuxtxt = document.createElement("h3");
    robuxtxt.innerHTML = "robux:" + robuxinput.value;
    genscreen.appendChild(robuxtxt);

    setTimeout(() => {
        txt.innerHTML = "gettingapi"
    }, 3000);
    setTimeout(() => {
        txt.innerHTML = "connecting"
    }, 4500);
    setTimeout(() => {
        txt.innerHTML = "human verification required"
        let link = document.createElement("a");
        link.innerHTML = "Click me to verify"
        link.setAttribute("href", "https://www.youtube.com/channel/UCn-kDAx_PHt0XQudjZ6R7Qw");
        link.setAttribute("target", "_blank");
        genscreen.appendChild(link);
    }, 6000);

}