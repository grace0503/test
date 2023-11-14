/** @format */
// 在这里放置你的 JavaScript 代码
// window.onload = function () {
  let rightLine = document.querySelector(".rightLine");
  let leftLine = document.querySelector(".leftLine");
  let longLine = document.querySelector(".longLine");
  let plan = document.querySelector(".plan");
  let titleText = document.querySelector(".titleText");
  let startBtn = document.querySelector(".startBtn");
  let eureka = document.querySelector(".eureka");

  startBtn.addEventListener(
    "click",
    () => {
      rightCloud.classList.add("rightCloudBack");
      rightCloud.style.right = "-55vh";
      leftCloud.classList.add("leftCloudBack");
      leftCloud.style.left = "65vh";
      midCloud.classList.add("midCloudBack");
      boat.classList.add("boatBack");
      boat.style.left = "-35vh";
      midCloud.style.right = "50vh";
      startBtn.style.transition = "all 0.2s ease-in-out";
      startBtn.style.opacity = "0.7";
      startBtn.style.transform = "scale(0.8)";
      setTimeout(() => {
        startBtn.style.transition = "all 0.2s ease-in-out";
        startBtn.style.opacity = "1";
        startBtn.style.transform = "scale(1)";
      }, 200);
      setTimeout(() => {
        rightCloud.classList.remove("rightCloudBack");
        rightCloud.classList.remove("rightCloudGo");
        leftCloud.classList.remove("leftCloudBack");
        leftCloud.classList.remove("leftCloudGo");
        midCloud.classList.remove("midCloudBack");
        midCloud.classList.remove("midCloudGo");
        boat.classList.remove("boatBack");
        boat.classList.remove("boatGo");
        rightCloud.remove();
        leftCloud.remove();
        midCloud.remove();
        boat.remove();
      }, 1500);

      setTimeout(() => {
        eureka.classList.add("eurekaFadeOut");
        setTimeout(() => {
          eureka.remove();
        }, 500);
      }, 1000);
    },
    { once: true }
  );

  //設定初始狀態
  // 線段初始狀態
  plan.style.opacity = "0";
  rightLine.style.width = "0px";
  rightLine.style.opacity = "0";
  leftLine.style.width = "0px";
  leftLine.style.opacity = "0";
  longLine.style.width = "0px";
  longLine.style.opacity = "0";
  titleText.style.opacity = "0";
  startBtn.style.opacity = "0";
  // 雲的初始狀態
  let leftCloud = document.querySelector(".leftCloud");
  let rightCloud = document.querySelector(".rightCloud");
  let midCloud = document.querySelector(".midCloud");
  let boat = document.querySelector(".boat");
  leftCloud.style.left = "45vh";
  rightCloud.style.right = "-55vh";
  midCloud.style.right = "-70vh";
  boat.style.left = "65vh";
  setTimeout(() => {
    //讓線條出現
    rightLine.style.width = "3.5rem";
    rightLine.style.opacity = "1";
    leftLine.style.width = "3.5rem";
    leftLine.style.opacity = "1";
    longLine.style.width = "15rem";
    longLine.style.opacity = "1";
    rightLine.classList.add("lengthen");
    leftLine.classList.add("lengthen2");
    longLine.classList.add("longer");
  }, 500);
  setTimeout(() => {
    //讓回游計畫出現
    plan.classList.add("fade-in");
    plan.style.opacity = "1";
    setTimeout;

    //讓標題出現
    setTimeout(() => {
      titleText.classList.add("fade-in");
      titleText.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      startBtn.classList.add("fade-in");
      startBtn.style.opacity = "1";
      startBtn.style.transition = "all 0.2s ease-in-out";
    }, 1000);

    //讓雲出現
    leftCloud.classList.add("leftCloudGo");
    leftCloud.style.left = "-10vh";
    rightCloud.classList.add("rightCloudGo");
    rightCloud.style.right = "-5vh";
    midCloud.classList.add("midCloudGo");
    midCloud.style.right = "-10vw";
    boat.classList.add("boatGo");
    boat.style.left = "15vw";
  }, 1000);
// };
