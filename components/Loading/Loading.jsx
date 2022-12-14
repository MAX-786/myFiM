import React from "react";
import anime from "animejs";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";

export default function Loading () {

React.useEffect(() => {
    var textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({
      loop: true
    }).add({
      targets: '.ml14 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900
    }).add({
      targets: '.ml14 .letter',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    }).add({
      targets: '.ml14',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
});

  return (
    <>
      <h1 className="ml14">
        <span className="text-wrapper">
          <span className="letters">myFiM</span>
          <span className="line"></span>
        </span>
      </h1>
    </>
  );
};
