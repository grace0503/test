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
        "突然角落跑出了一隻貓貓，你的想法是？",
        "跟著貓貓走出停車場，來到中山醫，疑惑地想著這就是我要讀的學校嗎？這時你心裡在想什麼呢？",
        "懵懵懂懂地度過了大學第一次期中考週，歐趴餐時你被熱情的學長推坑去當CP，又過了一段時間CP報名表單釋出了，看到表單後你會怎麼做？",
        "你點開報名表單，發現裡面有個問題是：『給你一個週末，你會怎麼規劃和交換生出去玩？』你會怎麼填寫呢？",
        "轉眼間，期末考快到了，你發現你每一科都還停在第九週，程式語言因為上課都在睡覺所以都不會寫，這時你會怎麼做？",
        "下學期事情越來越多，被系隊、營隊、國事部、新聞部、MEH、亞醫、活委各種活動轟炸後，你想放鬆一下的你會……？",
        "一下期中考後AMSEP的交換計劃來了！不僅可以接待Incoming，也可以成為Outgoing，看到這個計畫的你，會打算….？",
        "周遭的同學陸陸續續在找實驗室，準備參加暑期研究計畫，對實驗室完全沒經驗的你會怎麼做呢？",
        "不小心趴在共筆上睡著了，醒來後發現大家都在哀居分享交換週心理測驗...?",
        "PE X RE X AMSA 聯合舉辦的交換週，就在11/21~11/23盛大開跑啦！  ",
      ];
      let chooseQue = [
        [
          "到處走走，看出口在哪，並用數學計算最快走到出口的辦法                      ",
          "在停車場唱歌跳舞   ",
          "害怕被突襲，有風吹草動就會不小心尖叫   ",
          "摩擦阿拉丁神燈，花費一個願望請神燈精靈用飛天魔毯帶他出停車場",
          "坐著等等看有沒有人來，再搶走他們的車並出去",
        ],
        [
          "他一直喵喵叫，到底在說什麼？       ",
          "牠會餓嗎，可以餵牠吃罐罐           ",
          "牠會帶我走出停車場嗎？                   ",
        ],
        [
          "學校裡面有手扶梯真方便，不用跨校區趕課",
          "用洞穴裡的金銀財寶去蓋一棟新大樓給學校",
          "仔細計算需要幾點起床，從宿舍過來才不會遲到",
          "立即籌組自治組織，向校方爭取圖書館，得到應有的學生權益",
          "讀醫學系讀哪都一樣，先在這裡結交一群好友吧",
        ],
        [
          "立即填寫報名表單，並幻想與Incoming有一段轟轟烈烈的愛情",
          "精確計算當CP要做多少事，會用到自己多少課餘時間，會少接幾檔家教，計算過後覺得沒問題再接",
          "為了時數，馬上就接了，反正如果之後太忙，再請工具人幫忙帶",
          "立刻揪人一起報名，帶他上山、下海、跑夜店、跳舞四處玩",
          "委婉拒絕，但總在遠處觀察Incoming在做的事，不知道目的為何",
        ],
        [
          "帶交換生去唱ktv、跳廣場舞，體驗台灣人的休閒娛樂",
          "帶他去美食之都台南，用食物征服交換生的胃，吃飯時也可以有多一點想法交流",
          "仔細規劃每個周末的行程，並把時間塞得滿滿，每一個小時就要換一個點，不許有任何Delay ",
          "交換生難得來台灣，帶他做些戶外活動，去看看山、聽聽海，感受台灣的大自然魅力",
        ],
        [
          "把時間花在刀口上，只讀了剛剛好的量，不過多準備，剛剛好拿個滿分 ",
          "不想作弊，盡力寫就好，但也不用太認真準備，人生哪有準備完的考試呢     ",
          "我靠自己也可以寫到100分，把題庫每一題都刷了三遍",
          "主要還是會自己寫，作弊只是備案          ",
          "光明正大的偷看隔壁電神寫了啥，反正我以後不要寫程式，過了就好               ",
        ],
        [
          "去讀書，學習新知識使我冷靜，我最喜歡讀書了                 ",
          "原神，啟動！打開手遊，利用休息時間玩幾把遊戲，這樣就能放鬆了           ",
          "跑去深山參加某個禪宗的修行，暫時忘記世間的煩惱",
          "唱歌、跳舞、跑夜店，任何可以嗨起來的事都做一輪！                ",
          "喝杯小酒，走在綠川河畔散散心，累了就去逛逛展覽陶冶性情",
          "開始水，把自己不想做的事丟給其他人，這樣就不會累了        ",
        ],
        [
          "問就是去爆，肯定要展現我社牛實力的吧             ",
          "先看看對方的醫療水準如何，如果是比中山醫棒的話，肯定是要去那邊學習的吧",
          "雖然自己超社恐但還是報名了這個活動",
          "報名了但是總在旁邊默默觀察大家再做甚麼，手裡還拿著一本筆記本，似乎在紀錄甚麼東西       ",
          "已經買好花與卡片，看到外國妹子就跟跟他們告白，談一場異國戀愛            ",
          "開始召集大家，組織交換團隊，每個細節都精心設計，讓他們對台灣留下美好的記憶",
        ],
        ["到處打聽哪間實驗室可以既可以學到東西，又可以有發表論文的機會 ", "不想被實驗綁住，但又想加加看實驗室，於是報名了drylab ", "看到實驗主題有興趣，就充滿幹勁的報名了，不管學長姐的評價如何。 ", "不在意大家怎麼想，對實驗室沒興趣就不要加"],
        ["也馬上跑去玩 ", "先放著有空想到再玩", "我不用哀居", "看一個封鎖一個"],
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
                            niZhe += 5;
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
                            plato += 0;
                            niZhe += 0;
                            vegan += 0;
                          } else if (select == nowChoQue[1] || select == "B") {
                            hume += 0;
                            kant += 0;
                          } else if (select == nowChoQue[2] || select == "C") {
                            marx += 0;
                          } else if (select == nowChoQue[3] || select == "D") {
                            marx += 0;
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
