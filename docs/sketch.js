let a = 0;
let p = 0;
let x1;
let y1;
let x3;
let y3;
let x4;
let y4;
let c1x;
let c2x;
let c3x;
let c4x;
let car1x;
let car2x;
let car3x;
let t = 0;


let logo;
let bg1;
let bg2;
let f1;
let f2;
let right;
let left;
let c1;
let c2;
let c3;
let car1;
let car2;
let car3;
let sp1;
let sp2;
let sp3;

let n1_1;
let n1_2;
let n1_3;
let n1_4;
let n1_5;
let n2_1;
let n2_2;
let n2_3;
let n2_4;
let n2_5;

let t1_1_1;
let t1_1_2;
let t1_2;
let t1_3;
let t1_4
let t2_1;
let t2_2;
let t2_3;
let t2_4;
let t2_5_1;
let t2_5_2;


function preload() {
  logo = loadImage("sdgs_logo.png");
  bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");
  f1 = loadImage("frame1.png");
  f2 = loadImage("frame2.png");
  right = loadImage("goright.png");
  left = loadImage("goleft.png");
  c1 = loadImage("c1.png");
  c2 = loadImage("c2.png");
  c3 = loadImage("c3.png");
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");

  n1_1 = loadImage("1-1.png");
  n1_2 = loadImage("1-2.png");
  n1_3 = loadImage("1-3.png");
  n1_4 = loadImage("1-4.png");
  n2_1 = loadImage("2-1.png");
  n2_2 = loadImage("2-2.png");
  n2_3 = loadImage("2-3.png");
  n2_4 = loadImage("2-4.png");
  n2_5 = loadImage("2-5.png");

  t1_1_1 = loadImage("t1-1-1.png");
  t1_1_2 = loadImage("t1-1-2.png");
  t1_2 = loadImage("t1-2.png");
  t1_3 = loadImage("t1-3.png");
  t1_4 = loadImage("t1-4.png");
  t2_1 = loadImage("t2-1.png");
  t2_2 = loadImage("t2-2.png");
  t2_3 = loadImage("t2-3.png");
  t2_4 = loadImage("t2-4.png");
  t2_5_1 = loadImage("t2-5-1.png");
  t2_5_2 = loadImage("t2-5-2.png");


}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  imageMode(CENTER);
  background(255);
  frameRate(30);

  x3 = 90;
  y3 = 80;
  x4 = 0;
  y4 = 415;
  c1x = 90;
  c2x = 240;
  c3x = 390;
  c4x = -70;
  car1x = 180;
  car2x = 380;
  car3x = 200;
  sp1 = 5;
  sp2 = 6.5;
  sp3 = 6;
}
/*----------------------------------------------------------------
 *                         背景の描画
 *--------------------------------------------------------------*/

function draw() {
  if (a == 0) {
    tint(255, 50);
    image(logo, 250, 250, 500, 500);
  } else if (a == 1) {
    noTint();
    background(132, 196, 240);
    clouds(x3, y3);
    b1(250, 250);
    cars(x4, y4);
    textbox(x1, y1);
    image(f1, 250, 250, 550, 550);
    fill(255);
    textSize(10);
    text("番号をクリックしてみましょう",486,493)
    
  } else if (a == 2) {
    noTint();
    background(132, 196, 240);
    clouds(x3, y3);
    b2(250, 250);
    textbox(x1, y1);
    image(f2, 250, 250, 550, 550);
    fill(255);
    textSize(10);
    text("番号をクリックしてみましょう",486,493)
  }
  /*-------------------------------------------------------------
   *                  アニメーションの変数調整
   *-----------------------------------------------------------*/
  /////////////////雲
  if (c1x <= 550) {
    c1x += 0.25;
  } else {
    c1x = -50;
  }
  if (c2x <= 550) {
    c2x += 0.25;
  } else {
    c2x = -50;
  }
  if (c3x <= 550) {
    c3x += 0.25;
  } else {
    c3x = -50;
  }
  if (c4x <= 550) {
    c4x += 0.25;
  } else {
    c4x = -50;
  }

  ////////////自動車
  if (car1x >= -50) {
    car1x -= sp1;
  } else {
    car1x = 550;
    sp1 = random(4) + 4;
  }
  if (car2x >= -50) {
    car2x -= sp2;
  } else {
    car2x = 550;
    sp2 = random(4) + 4;
  }
  if (car3x >= -50) {
    car3x -= sp3;
  } else {
    car3x = 550;
    sp3 = random(4) + 4;
  }
}

/*----------------------------------------------------------------
 *                    ボタン押下後の変数操作
 *--------------------------------------------------------------*/

function mousePressed() {
  ////////////トップページから背景１への切り替え
  if (a == 0) { //a=0の時はトップページ
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 500) {
      a = 1; //a=1の時は背景１
    }
  }


  ///////////////背景１から各オブジェクトへの切り替え
  else if (a == 1) {
    //1-1の説明
    if (mouseX >= 130 && mouseX <= 180 && mouseY >= 85 && mouseY <= 135) {
      t = 1.11;
    } else if (t == 1.11 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 1.12;
    } else if (t == 1.12 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //1-2の説明
    else if (t == 0 && mouseX >= 175 && mouseX <= 225 && mouseY >= 195 && mouseY <= 245) {
      t = 1.2;
    } else if (t == 1.2 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //1-3の説明
    else if (t == 0 && mouseX >= 395 && mouseX <= 445 && mouseY >= 55 && mouseY <= 105) {
      t = 1.3;
    } else if (t == 1.3 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //1-4の説明
    else if (t == 0 && mouseX >= 375 && mouseX <= 425 && mouseY >= 315 && mouseY <= 365) {
      t = 1.4;
    } else if (t == 1.4 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }



    /////////////////背景２から各オブジェクトへの切り替え
  } else if (a == 2) {
    //2-1の説明
    if (mouseX >= 70 && mouseX <= 170 && mouseY >= 70 && mouseY <= 170) {
      t = 2.1;
    } else if (t == 2.1 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //2-2の説明
    else if (t == 0 && mouseX >= 305 && mouseX <= 355 && mouseY >= 195 && mouseY <= 245) {
      t = 2.2;
    } else if (t == 2.2 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //2-3の説明
    else if (t == 0 && mouseX >= 185 && mouseX <= 235 && mouseY >= 295 && mouseY <= 345) {
      t = 2.3;
    } else if (t == 2.3 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //2-4の説明
    else if (t == 0 && mouseX >= 355 && mouseX <= 405 && mouseY >= 345 && mouseY <= 395) {
      t = 2.4;
    } else if (t == 2.4 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }
    //2-5の説明
    else if (mouseX >= 65 && mouseX <= 115 && mouseY >= 275 && mouseY <= 325) {
      t = 2.51;
    } else if (t == 2.51 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 2.52;
    } else if (t == 2.52 && mouseX >= 20 && mouseX <= 480 && mouseY >= 362.5 && mouseY <= 477.5) {
      t = 0;
    }

  }

  /////////////////背景１から背景２への切り替え///////////////
  if (a == 1 && t == 0) {
    if (mouseX >= 415 && mouseX <= 485 && mouseY >= 215 && mouseY <= 285) {
      a = 2;
    }
  }


  /////////////////背景２から背景１への切り替え///////////////
  if (a == 2 && t == 0) {
    if (mouseX >= 15 && mouseX <= 85 && mouseY >= 215 && mouseY <= 285) {
      a = 1;
    }
  }
}

/*------------------------------------------------------------
 *                         各要素
 *---------------------------------------------------------*/


function textbox(x1, y1) {
  textAlign(RIGHT, CENTER);
  textSize(10);
  fill(32, 142, 145);
  x1 = 250;
  y1 = 420;
  
  if (t == 1.11) {
    image(t1_1_1, x1, y1, 460, 115);
    text("枠内をクリックで次へ", 445, 460);

  } else if (t == 1.12) {
    image(t1_1_2, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 1.2) {
    image(t1_2, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 1.3) {
    image(t1_3, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 1.4) {
    image(t1_4, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);


    //////////////背景２の時    
  } else if (t == 2.1) {
    image(t2_1, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 2.2) {
    image(t2_2, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 2.3) {
    image(t2_3, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 2.4) {
    image(t2_4, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  } else if (t == 2.51) {
    image(t2_5_1, x1, y1, 460, 115);
    text("枠内をクリックで次へ", 445, 460);
  } else if (t == 2.52) {
    image(t2_5_2, x1, y1, 460, 115);
    text("枠内をクリックで閉じる", 445, 460);
  }

}


function b1() {
  image(bg1, 250, 250, 500, 500);
  image(right, 450, 250, 70, 70);
  image(n1_1, 155, 110, 50, 50);
  image(n1_2, 200, 220, 50, 50);
  image(n1_3, 420, 80, 50, 50);
  image(n1_4, 400, 340, 50, 50);
}

function b2() {
  image(bg2, 250, 250, 500, 500);
  //fill(191, 63, 127);
  image(left, 50, 250, 70, 70);
  image(n2_1, 120, 120, 50, 50);
  image(n2_2, 330, 220, 50, 50);
  image(n2_3, 210, 320, 50, 50);
  image(n2_4, 380, 370, 50, 50);
  image(n2_5, 90, 300, 50, 50);

}

function clouds(x3, y3) {
  image(c1, c1x, y3, 120, 75);
  image(c2, c2x, y3 + 50, 120, 75);
  image(c3, c3x, y3 - 20, 120, 75);
  image(c2, c4x, y3 + 25, 120, 75);
}

function cars(x4, y4) {
  image(car1, car1x, y4, 80, 48);
  image(car2, car2x, y4 + 20, 80, 48);
  image(car3, car3x, y4 + 40, 80, 48);
}