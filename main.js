const mouseFollower = document.querySelector(".mouse-follower");
const section = document.querySelector("section");
const anchorli = document.querySelectorAll("header nav ul li");
const icon = document.querySelector("header span i ");
const computedRoot = document.querySelector(":root");
const cs = getComputedStyle(computedRoot);
const explore = document.querySelector(".box h1");

//detect touch device..
function isTouch() {
  try {
    //it will not work on desktop..
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const movement = (e) => {
  try {
    var x = !isTouch() ? e.pageX : e.touches[0].pageX;
    var y = !isTouch() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}

  mouseFollower.style.top = `${y}px`;
  mouseFollower.style.left = `${x}px`;
  console.log(e.pageX, e.pageY);

  //   console.log(mouseFollower.style.top);
  //   console.log(mouseFollower.style.left);
};

document.addEventListener("mousemove", (e) => {
  movement(e);
});
document.addEventListener("touchmove", (e) => {
  movement(e);
});

document.querySelector(".box h1").addEventListener("mousemove", () => {
  mouseFollower.style.width = `200px`;
});
document.querySelector(".box h1").addEventListener("touchmove", () => {
  mouseFollower.style.width = `60px`;
});
document.querySelector(".box h1").addEventListener("mouseleave", () => {
  mouseFollower.style.width = `60px`;
});

document.querySelector(".box p").addEventListener("mousemove", () => {
  mouseFollower.style.background = `rgb(255, 187, 0)`;
});
anchorli.forEach((lists) => {
  lists.addEventListener("mousemove", () => {
    lists.querySelector("a").style.color = `hsla(91, 23%, 2%, 1)`;
    mouseFollower.style.background = `rgb(255, 187, 0)`;
  });
});
document.querySelector(".box p").addEventListener("mouseleave", () => {
  mouseFollower.style.background = `rgba(191, 135, 30, 0.832)`;
});
anchorli.forEach((lists) => {
  lists.addEventListener("mouseleave", () => {
    lists.querySelector("a").style.color = `hsla(46, 13%, 84%, 1)`;
    mouseFollower.style.background = `rgba(191, 135, 30, 0.832)`;
  });
});

icon.addEventListener("mouseenter", () => {
  icon.style.color = `hsla(244, 91%, 8%, 1)`;
  mouseFollower.style.background = `rgb(255, 187, 0)`;
});
icon.addEventListener("mouseleave", () => {
  icon.style.color = `rgb(255, 187, 0)`;
  mouseFollower.style.background = `rgba(191, 135, 30, 0.832)`;
});

let i = 0;
icon.addEventListener("click", () => {
  // console.log(cs.getPropertyValue('--bg-blck'));
  i = i + 1;
  if (i % 2 !== 0) {
    document.body.style.setProperty("--bg-blck", `hsla(46, 13%, 84%, 1)`);
    explore.style.setProperty("--bg-lig-orange", `hsla(91, 23%, 2%, 1)`);
    explore.style.mixBlendMode = "normal";

    anchorli.forEach((lists) => {
      lists.querySelector("a").style.color = `hsla(91, 23%, 2%, 1)`;
      lists.querySelector("a").style.mixBlendMode = "normal";
    });
  } else {
    document.body.style.setProperty("--bg-blck", `hsla(91, 23%, 2%, 1)`);
    explore.style.setProperty("--bg-lig-orange", `hsla(46, 64%, 47%, 1)`);

    explore.style.mixBlendMode = "difference";

    anchorli.forEach((lists) => {
      lists.querySelector("a").style.color = `hsla(46, 13%, 84%, 1)`;
      lists.querySelector("a").style.mixBlendMode = "difference";
    });
  }
});
