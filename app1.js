/** @format */

// /** @format */

//運算設定
window.onload = function () {
  let counter = 2;
  let body = document.querySelector("body");
  body.style.x;
  // let startBtn = document.querySelector(".startBtn");
  startBtn.addEventListener(
    "click",
    () => {
      
      body.style.overflowY = "scroll";
      let isProcessing = true;
      let delay = 2500;
      setInterval(() => {
        if (isProcessing == false) {
          isProcessing = true;
          console.log("isProcessing is false");
        }
      }, delay);
      // 設定布林直isProcessing、if isProcessing is false setinterval {isProcessing == true}
      let mainQue = [
        "你學測一階只通過了中山醫，你爸媽把你載到停車場後就開走了，你的手機又沒有訊號，不知道怎麼走出去，這時你會？",
        "從美術館出來後，你走在石板街道，突然街角跑出了一隻貓貓，你的想法是？",
        "在你準備離開時，發現貓貓跟在了你腳邊，突然你們遇到了一位亞德大學的男孩在路燈下哭泣，一問之下發現他考差了，心情很糟。你決定這樣安慰他：",
        "你走過轉角的一家小商舖，發現四周的景物都變了，你看到你在家，聽見外面有人大喊、敲門的聲音，從窗戶看出去發現有一隻吉度憤怒的白色吉娃娃緊追著一名外星人，怕狗的你會有什麼反應？",
        "你從家門走出去，沿著城鎮邊緣的森林小徑，原本你想一路登上山丘眺望亞琴斯的蒸氣街景，但沒想到爬到一半就累得半死，你會選擇？",
        "你在林間走著突然聽到機械齒輪運作的聲音，往旁邊看居然有一座噴著蒸氣的巨大機械，這時，一個髒兮兮的小男孩從後頭走了出來，他跟你說了一串話，你腦袋閃過了一些字樣，意識到他在說謊，這時你心裡的道德觀…？",
        "走了一段路後你看到一座宅邸，一位自稱來自蒸氣學會的女生跑了過來，她說她叫作奧莉薇亞，你們邊眺望風景邊聊了一下，突然她問起了你的感情觀？",
        "天慢慢黑了，你跟著奧莉薇亞到了山腳的兩間餐廳：左邊那間是她常常光顧、較便宜的餐廳，右邊那間沒有吃過，但最近在報紙上爆紅、價格高昂。她問你比較想去......",
        "奧莉薇亞吿訴你這週六蒸氣學會有人文派的聚會，邀請你一起來看看，但週六你原本打算好好休息，你會……？",
        "突然，你眼前一黑，再睜開眼時，你竟然回到了2077年沉沒管理局主持洄游計劃的投遞據點。你很快想起如何用腦袋呼喚出社群媒體，當畫面出現時，你發現大家都在分享心理測驗……？",
        "當你繼續瀏覽社群時，發現了一個埋藏的信息，你仔細一看發現這正是沉沒管理局在現代追逐的人文精神根基——政大今年又準備舉辦哲學營了！  ",
      ];
      let chooseQue = [
        [
          "害怕被突襲，有風吹草動就會不小心尖叫                      ",
          "到處走走，看出口在哪   ",
          "坐著等等看有沒有人來，再問他怎麼出去   ",
          "觀察停車場的車都是哪些品牌的",
          "數著停車場有幾台車打發時間",
        ],
        [
          "他一直喵喵叫，到底在說什麼？       ",
          "牠會餓嗎，可以餵牠吃罐罐           ",
          "他今天在想什麼？                   ",
        ],
        [
          "替他分析考差的原因，一起找到改進的做法",
          "勸他不要放心上，考試不過是分類制度的產物而已",
          "失敗為成功之母，多多鼓勵，給予他繼續挑戰的心理支持",
          "肯定是看錯題目，下次看清楚在考什麼就好啦",
          "帶他跳脫考試的框架，希望可以一起養成熟悉知識的好習慣",
        ],
        [
          "不管做什麼決定，我都遵從我意志的聲音！！！",
          "不管多害怕，我一定會開門，因為開門才是正確、理性的決定",
          "你確定在外星人的語言含意中，大喊和敲門就是求救的表現嗎？",
          "那個外星人聽起來很害怕，真可憐，我應該幫助他！開門！",
          "作為一個被吉度壓榨的藍領階級，我決定上床睡覺明天努力工作，沒我的事",
        ],
        [
          "想看美景也不一定要到山頂，懂得欣賞的話沿途也都是美景",
          "凡殺不死我的，必使我更堅強，很累但我要跟他拼了",
          "休息一下，調整好自己的心境再重新出發 ",
          "累什麼，既然決定要攻頂了，就必須得實行",
        ],
        [
          "人不應該說謊，除非是為了善的高貴的謊 ",
          "說謊也沒什麼，道德也不是非黑即白     ",
          "人所說的話必須是真實的，不管怎樣人都沒權利說謊",
          "我沒辦法用理性分辨這件事...          ",
          "道德也只是一種規則罷了               ",
        ],
        [
          "心靈相通才是最重要的                 ",
          "愛一個人是不需要任何理由的           ",
          "情侶沒有送禮的必要，情人節不過是為了資本家為了賺錢而編出來的節日而已",
          "愛是不能用理性去衡量的                ",
          "不管這個社會能不能接受，我只想跟我愛的人在一起",
          "「愛」這個詞是無法描述感情的          ",
        ],
        [
          "既然習慣吃那間，就左邊吧！             ",
          "精打細算今天晚餐的預算來決定，可不能被新奇的事物沖昏頭",
          "仔細思考自己現在比較想吃什麼，不能受外界壓力干擾就輕易下決定",
          "便宜的，我的薪水吃不起高價位食物       ",
          "小孩子才做選擇，我全都要！            ",
          "不知道欸，也許在不同情況下我會做出不同的決定",
        ],
        ["果斷拒絕 ", "委婉拒絕 ", "馬上答應 ", "再不休息我的身體會壞掉"],
        ["也馬上跑去玩 ", "視而不見", "看一個封鎖一個", "我根本不用哀居"],
        ["手刀報名！！"],
        ["輸入暱稱，查看測驗結果！"],
      ];
      let niZhe = 0;
      let kant = 0;
      let hume = 0;
      let plato = 0;
      let marx = 0;
      let vegan = 0;
      let image1 = new Image();
      let image2 = new Image();
      let image3 = new Image();
      let image4 = new Image();
      let image5 = new Image();
      let image6 = new Image();
      function loadImage(src) {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = src;
      
          image.onload = () => {
            resolve(image);
          };
      
          image.onerror = () => {
            reject(new Error('图像加载失败'));
          };
        });
      }
      let imageArray = [image1, image2, image3, image4, image5, image6];
      image1.src = `./imgs/result/尼采.png`;
      image2.src = `./imgs/result/柏拉圖.png`;
      image3.src = `./imgs/result/馬克思.png`;
      image4.src = `./imgs/result/康德.png`;
      image5.src = `./imgs/result/休謨png.png`;
      image6.src = `./imgs/result/維根斯坦.png`;
      // const imageArray = [
      //   "./imgs/result/Nietzsche.svg",
      //   "./imgs/result/plato.svg",
      //   "./imgs/result/marx.svg",
      //   "./imgs/result/kant.svg",
      //   "./imgs/result/hume.svg",
      //   "./imgs/result/Wittgenstein.svg",
      // ];
      async function loadImagesSequentially() {
        for (const image of imageArray) {
          try {
            const loadedImage = await loadImage(image.src);
            console.log(`${loadedImage.src} 加载完成`);
            // 在这里可以对已加载的图像进行操作，例如将其添加到页面中
      
            // 等待一段时间，模拟按顺序加载
            await new Promise((resolve) => setTimeout(resolve, 4000)); // 等待1秒
          } catch (error) {
            console.error(error);
            // 加载失败时，你可以添加适当的错误处理逻辑
          }
        }
      }
      
      // 调用函数以开始加载图像
      
      let chos;
      let chooseNum = ["A", "B", "C", "D", "E", "F"];
      let queNumHead = "0";
      let realQueNum = 1;
      let queNum = realQueNum;
      let convertNum = parseInt(queNumHead + queNum);
      let quePercent = parseInt((convertNum / 11) * 100);
      let timer = 2000;
      // let body = document.querySelector("body");
      let choise;
      let lastClickTime = 0;
      const coolDownTime = 1000;
      setTimeout(() => {
        // body.appendChild(test);

        body.innerHTML = `    <section class="test">
        <div class="containerTop">
          <img class="subTitle" src="./imgs/回游計畫/小標.png" alt style="width:200px;" />
          <div class="progressBar">
            <div class="bar">
              <div class="progLine"></div>
            </div>
            <img src="./imgs/齒輪.png" alt="" class="wheel" />
          </div>
        </div>
        <div class="containerBottom">
          <img class="scale" src="./imgs/框框/border1.svg" alt="" />
          <div class="mainPart">
            <div class="mainTop">
              <div class="queNum"></div>
              <div class="queLine"></div>
            </div>
            <div class="queText">
          </div>
          <div class="choose">
            <div class="cho">
              <div class="eng"
                <div></div>
              </div>
              <div class="choText"><div></div></div>
            </div>
          </div>
        </div>
      </section>`;
        //物件設定
        let queNumObj = document.querySelector(".queNum");
        let firNum = document.createElement("H1");
        let secNum = document.createElement("H1");
        let queLine = document.querySelector(".queLine");
        let queText = document.querySelector(".queText");
        let text = document.createElement("H1");
        let bar = document.querySelector(".bar");
        let wheel = document.querySelector(".wheel");
        let progressBar = document.querySelector(".progressBar");
        let subTitle = document.querySelector(".subTitle");
        let scale = document.querySelector(".scale");
        let choose = document.querySelector(".choose");
        let cho = document.querySelector(".cho");
        let test = document.querySelector(".test");

        scale.src = `./imgs/框框/border${convertNum}.svg`;
        text.innerText = mainQue[convertNum - 1];

        firNum.innerText = queNumHead;
        secNum.innerText = queNum;
        queNumObj.appendChild(firNum);
        queNumObj.appendChild(secNum);
        queText.appendChild(text);
        //進度條設定
        test.style.transition = "all 0.5s ease-in-out";
        firNum.style.transform = "rotateX(90deg)";
        secNum.style.transform = "rotateX(90deg)";
        firNum.style.opacity = 0;
        firNum.style.transformStyle = "preserve-3d";
        secNum.style.opacity = 0;
        secNum.style.transformStyle = "preserve-3d";
        queLine.style.opacity = 0;
        scale.style.opacity = 0;
        scale.style.transform = "scale(0)";
        subTitle.style.opacity = 0;
        wheel.style.zIndex = 5;
        bar.style.transition = "none";
        wheel.style.transition = "none";
        bar.style.width = 0;
        queLine.style.width = 0;
        bar.style.opacity = 0;
        wheel.style.opacity = 0;
        wheel.style.transform = "rotate( 0deg)";
        queText.style.opacity = 0;
        choose.style.opacity = 0;
        cho.remove(); /////重要到爆炸
        //
        setTimeout(() => {
          queLine.style.left = "10%";
          wheel.style.transition = "all 0.5s ease-in-out";
          bar.style.transition = "all 0.5s ease-in-out";
          subTitle.style.transition = "all 0.5s ease-in-out";
          scale.style.transition = "all 0.5s ease-in-out";
          firNum.style.transition = "all 0.5s ease-in-out";
          secNum.style.transition = "all 1s ease-in-out";
          queLine.style.transition = "all 0.5s ease-in-out";
          choose.style.transition = "all 0.5s ease-in-out";
          subTitle.style.opacity = 1;
          bar.style.opacity = 1;
          bar.style.width = quePercent + "%";
          setTimeout(() => {
            wheel.style.opacity = 1;
            setTimeout(() => {
              wheel.style.transform = `rotate(${quePercent * 3}deg)`;
              wheel.style.left = quePercent - 4 + "%";
              setTimeout(() => {
                scale.style.opacity = 1;
                scale.style.transform = "scale(1)";
                setTimeout(() => {
                  firNum.style.opacity = 1;
                  secNum.style.opacity = 1;
                  setTimeout(() => {
                    firNum.style.transform = "rotateX(0deg)";
                    secNum.style.transform = "rotateX(0deg)";
                  }, 200);
                  queLine.style.opacity = 1;
                  queLine.style.width = "5rem";
                  setTimeout(() => {
                    text.style.opacity = 1;
                    setTimeout(() => {
                      typing();
                      setTimeout(() => {
                        list();
                        // 選擇題跳下一題
                        
                        choise.forEach((cho) => {
                          cho.addEventListener("click", (e) => {
                            loadImagesSequentially();
                            if (isProcessing == true) {
                              isProcessing = false;
                              if (cho.classList.contains("A")) {
                                plato += 5;
                              } else if (cho.classList.contains("B")) {
                                niZhe += 5;
                              } else if (cho.classList.contains("C")) {
                                kant += 5;
                              } else if (cho.classList.contains("D")) {
                                marx += 5;
                              } else if (cho.classList.contains("E")) {
                                vegan += 5;
                              } else if (cho.classList.contains("F")) {
                                hume += 5;
                              }
                              realQueNum++;
                              if (realQueNum == 1) {
                              }
                              cho.style.transition = "all 0.2s ease-in-out";
                              cho.opacity = 0.7;
                              cho.style.transform = "scale(0.8)";
                              setTimeout(() => {
                                cho.style.transition = "all 0.2s ease-in-out";
                                cho.opacity = 1;
                                cho.style.transform = "scale(1)";
                              }, 200);
                              setTimeout(() => {
                                changeScene();
                              }, 500);
                            }
                          });
                        });
                      }, timer);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
        firNum.style.marginRight = "6px";

        function typing() {
          text.innerText = mainQue[convertNum - 1];
          let textLen = text.innerText.length;
          text.style.textAlign = "left";
          text.innerText = "";
          let i = 0;
          queText.style.transition = "all 1s step(1,20)";
          let typingEffect = setInterval(() => {
            queText.style.opacity = 1;
            if (i < parseInt(textLen)) {
              // if (mainQue[convertNum] == undefined) {
              //   return;
              // }
              text.innerText += mainQue[convertNum - 1][i];
              i++;
            } else {
              clearInterval(typingEffect);
            }
          }, 40);
        }

        function list() {
          nowCho = chooseQue[convertNum - 1];
          for (content in nowCho) {
            choose.innerHTML += `
          <div class="cho">
            <div class="eng">
              <div class = "border">
              </div>
              <div>${chooseNum[content]}</div>
            </div>
            <div class="choText"><div>${nowCho[content]}</div></div>
          </div>
        `;
          }
          let choIndex = 0;
          chos = document.querySelectorAll(".cho");
          chos.forEach((cho) => {
            cho.classList.add("choise");
            cho.classList.add(`${chooseNum[choIndex]}`);
            cho.style.transition = "all 0.2s ease-in-out";

            choIndex++;
          });
          choise = document.querySelectorAll(".choise");
          choose.style.opacity = 1;
        }
        function changeScene() {
          scale.transition = "all 0.3s ease-in-out";

          if (realQueNum == 12) {
            wheel.style.transform = `rotate(${quePercent * 120}deg)`;
            setTimeout(() => {
              wheel.style.transform = `rotate(${-quePercent * 120}deg)`;
              wheel.style.left = "-13px";
              bar.style.width = "0%";
              setTimeout(() => {
                test.style.opacity = 0;
                setTimeout(() => {
                  test.remove();
                  setTimeout(() => {
                    let scores = [niZhe, plato, marx, kant, hume, vegan];
                    let max = Math.max(...scores);
                    console.log(max);

                    let resultImg = [
                      `./imgs/result/尼采.png`,
                      `./imgs/result/柏拉圖.png`,
                      `./imgs/result/馬克思.png`,
                      `./imgs/result/康德.png`,
                      `./imgs/result/休謨png.png`,
                      `./imgs/result/維根斯坦.png`,
                    ];
                    for (item in scores) {
                      if (scores[item] == max) {
                        resultImg = resultImg[item];
                        break;
                      }
                    }
                    body.innerHTML = `    <div class="result">
                <img src="${resultImg}" alt="">
                </div>;`;
                    let img = document.querySelector("img");
                    img.style.opacity = 0;
                    img.style.transition = "all 1s ease-in-out";
                    setTimeout(() => {
                      img.style.opacity = 1;
                    }, 500);
                  }, 200);
                }, 500);
              }, 1000);
            }, 1000);
          } else {
            scale.style.opacity = 0;
            setTimeout(() => {
              scale.style.opacity = 1;
            }, 300);

            if (realQueNum <= 11) {
              choise.forEach((cho) => {
                cho.remove();
              });
              queNum = realQueNum;
              if (realQueNum == 11 || realQueNum == 4) {
                timer = 4000;
              } else if (realQueNum == 6) {
                timer = 4500;
              } else if (realQueNum == 1) {
                timer = 1800;
              } else if (realQueNum == 2) {
                timer = 1600;
              } else if (realQueNum == 3) {
                timer = 3000;
              } else if (realQueNum == 5) {
                timer = 2800;
              } else if (realQueNum == 10 || realQueNum == 8) {
                timer = 3800;
              } else if (realQueNum == 9) {
                timer = 2500;
              } else {
                timer = 3000;
              }
              convertNum = parseInt(queNumHead + queNum);
              scale.src = `./imgs/框框/border${convertNum}.svg`;
              setTimeout(() => {
                firNum.style.transition = "all 1s ease-in-out";
                secNum.style.transition = "all 0.5s ease-in-out";
                if (realQueNum >= 10) {
                  firNum.innerText = "1";
                  secNum.innerText = `${queNum - 10}`;
                } else if (realQueNum < 10 && realQueNum > 0) {
                  secNum.innerText = queNum;
                }
              }, 600);
              quePercent = parseInt((convertNum / 11) * 100);
              bar.style.width = quePercent + "%";
              wheel.style.transform = `rotate(${quePercent * 3}deg)`;
              wheel.style.left = quePercent - 4 + "%";

              nowCho = chooseQue[convertNum - 1];

              typing();
              setTimeout(() => {
                list();
                choise.forEach((cho) => {
                  cho.style.opacity = 0;
                  setTimeout(() => {
                    cho.style.opacity = 1;
                  }, 100);
                });
                choise.forEach((cho) => {
                  cho.addEventListener(
                    "click",
                    (e) => {
                      if (isProcessing == true) {
                        console.log(e.target.innerText);
                        let select = e.target.innerHTML;
                        let nowChoQue = chooseQue[convertNum - 1];

                        console.log();
                        if (counter == 2) {
                          if (select == nowChoQue[0] || select == "A") {
                            vegan += 2;
                          } else if (select == nowChoQue[1] || select == "B") {
                            hume++;
                            niZhe += 2;
                          } else if (select == nowChoQue[2] || select == "C") {
                            kant += 2;

                            plato += 2;
                            marx += 1;
                          }
                        } else if (counter == 3) {
                          if (select == nowChoQue[0] || select == "A") {
                            hume += 5;
                          } else if (select == nowChoQue[1] || select == "B") {
                            marx += 5;
                          } else if (select == nowChoQue[2] || select == "C") {
                            kant += 5;
                          } else if (select == nowChoQue[3] || select == "D") {
                            vegan += 5;
                          } else if (select == nowChoQue[4] || select == "E") {
                            plato += 5;
                          }
                        } else if (counter == 4) {
                          if (select == nowChoQue[0] || select == "A") {
                            niZhe += 5;
                          } else if (select == nowChoQue[1] || select == "B") {
                            kant += 5;
                            plato += 5;
                          } else if (select == nowChoQue[2] || select == "C") {
                            vegan += 5;
                          } else if (select == nowChoQue[3] || select == "D") {
                            hume += 5;
                          } else if (select == nowChoQue[4] || select == "E") {
                            marx += 5;
                          }
                        } else if (counter == 5) {
                          if (select == nowChoQue[0] || select == "A") {
                            hume += 5;
                          } else if (select == nowChoQue[1] || select == "B") {
                            marx += 5;
                            niZhe += 5;
                          } else if (select == nowChoQue[2] || select == "C") {
                            vegan += 5;
                            plato += 5;
                          } else if (select == nowChoQue[3] || select == "D") {
                            kant += 5;
                          }
                        } else if (counter == 6) {
                          if (select == nowChoQue[0] || select == "A") {
                            plato += 5;
                          } else if (select == nowChoQue[1] || select == "B") {
                            niZhe += 5;
                          } else if (select == nowChoQue[2] || select == "C") {
                            kant += 5;
                          } else if (select == nowChoQue[3] || select == "D") {
                            hume += 5;
                          } else if (select == nowChoQue[4] || select == "E") {
                            vegan += 5;
                            marx += 5;
                          }
                        } else if (counter == 7) {
                          if (select == nowChoQue[0] || select == "A") {
                            plato += 4;
                          } else if (select == nowChoQue[1] || select == "B") {
                            kant += 4;
                          } else if (select == nowChoQue[2] || select == "C") {
                            marx += 4;
                          } else if (select == nowChoQue[3] || select == "D") {
                            hume += 4;
                          } else if (select == nowChoQue[4] || select == "E") {
                            niZhe += 4;
                          } else if (select == nowChoQue[5] || select == "F") {
                            vegan += 4;
                          }
                        } else if (counter == 8) {
                          if (select == nowChoQue[0] || select == "A") {
                            hume += 5;
                          } else if (select == nowChoQue[1] || select == "B") {
                            plato += 5;
                          } else if (select == nowChoQue[2] || select == "C") {
                            kant += 5;
                          } else if (select == nowChoQue[3] || select == "D") {
                            marx += 5;
                          } else if (select == nowChoQue[4] || select == "E") {
                            niZhe += 5;
                          } else if (select == nowChoQue[5] || select == "F") {
                            vegan += 5;
                          }
                        } else if (counter == 9) {
                          if (select == nowChoQue[0] || select == "A") {
                            plato += 3;
                            kant += 3;
                            vegan += 3;
                          } else if (select == nowChoQue[1] || select == "B") {
                            marx += 3;
                          } else if (select == nowChoQue[2] || select == "C") {
                            hume += 3;
                          } else if (select == nowChoQue[3] || select == "D") {
                            niZhe += 3;
                          }
                        } else if (counter == 10) {
                          if (select == nowChoQue[0] || select == "A") {
                            plato += 1;
                            niZhe += 3;
                            vegan += 1;
                          } else if (select == nowChoQue[1] || select == "B") {
                            hume += 2;
                            kant += 1;
                          } else if (select == nowChoQue[2] || select == "C") {
                            marx += 2;
                          } else if (select == nowChoQue[3] || select == "D") {
                            marx += 2;
                          }
                        }
                        scoreSum();
                        realQueNum++;

                        cho.opacity = 0.7;
                        cho.style.transform = "scale(0.8)";
                        setTimeout(() => {
                          cho.opacity = 1;
                          cho.style.transform = "scale(1)";
                        }, 300);
                        setTimeout(() => {
                          changeScene();
                        }, 500);
                      }
                    },
                    { once: true }
                  );
                });
              }, timer);
            } else {
              console.log("wait for result..");
            }
          }
        }
        function scoreSum() {
          choise.forEach((cho) => {
            cho.addEventListener("click", (e) => {}, { once: true });
          });

          counter++;
          console.log(
            "niZhe:",
            niZhe,
            "plato:",
            plato,
            "marx:",
            marx,
            "vegan:",
            vegan,
            "hume:",
            hume,
            "kant:",
            kant
          );
        }
      }, 1700);
    },
    { once: true }
  );
};
// 選項設定
