// const neonText = document.querySelector('.neon-text');
// const colorOn = 'white';
//
// const longIntervals = [1000, 500, 900, 894, 1023];
// const shortIntervals = [50, 100, 150];
//
// const on = () => requestAnimationFrame(event => {
//     neonText.style.color = "transparent";
//     neonText.style.textShadow = "none";
//     //neonText.style.boxShadow = "none";
//     setTimeout(off, shortIntervals[Math.round(Math.random() * longIntervals.length)]);
// });
//
// const off = () => requestAnimationFrame(event => {
//     neonText.style.color = colorOn;
//     //neonText.style.boxShadow = "0 0 .5rem #fff, inset 0 0 .5rem #fff, 0 0 2rem var(--neon-border-color), inset 0 0 2rem var(--neon-border-color), 0 0 4rem var(--neon-border-color), inset 0 0 4rem var(--neon-border-color)";
//     neonText.style.textShadow = "-0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff, 0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color), 0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color), 0 0 10rem var(--neon-text-color)";
//     setTimeout(on, longIntervals[Math.round(Math.random() * longIntervals.length)] + 1);
// });
//
// off();
