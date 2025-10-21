let isChecked = false;

function raiseFlag() {
    const flag = document.getElementById('flag');
    const svg = document.getElementById('flag');

    const tl = gsap.timeline();

    if (isChecked) {
        tl.to(
            "#rope",
            { duration: 0.4, morphSVG: "#rope-compressed", ease: "bounce.out" },
            "up"
        );
        tl.to(
            "#rope",
            { duration: 0.2, morphSVG: "#rope-original", ease: "bounce.out" },
            "down"
        );
        tl.to("#rope-end", { duration: 0.4, y: 250, ease: "bounce.out" }, "up");
        tl.to("#rope-end", { duration: 0.2, y: 300, ease: "bounce.out" }, "down");

        isChecked = !isChecked;
        flag.style.top = '50%';
    } else {
        tl.to(
            "#rope",
            { duration: 0.4, morphSVG: "#rope-compressed", ease: "bounce.out" },
            "up"
        );
        tl.to(
            "#rope",
            { duration: 0.2, morphSVG: "#rope-original", ease: "bounce.out" },
            "down"
        );
        tl.to("#rope-end", { duration: 0.4, y: 250, ease: "bounce.out" }, "up");
        tl.to("#rope-end", { duration: 0.2, y: 300, ease: "bounce.out" }, "down");

        isChecked = !isChecked;
        flag.style.top = '11%';
    }

    setTimeout(() => {
        message.style.opacity = '1';
    }, 2000);
}
document.querySelector('.rope').addEventListener('click', raiseFlag);