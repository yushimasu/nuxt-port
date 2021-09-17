  var p5_1 = require('p5');
  
  var sketch = function sketch(p) {
    /** バブルの数 */
    var COUNT = 20;
    /** 最小サイズ（画面幅を1） */
  
    var MINSIZE = 0.005;
    /** 最大サイズ（画面幅を1） */
  
    var MAXSIZE = 0.2;
    /** 最小速度（画面の高さを1として、1フレームごとに動く量の最小値） */
  
    var MINSPEED = 0.005;
    /** 最大速度（画面の高さを1として、1フレームごとに動く量の最大値） */
  
    var MAXSPEED = 0.02;
    /** カーソル移動後、その位置からバブルを出し続ける時間（フレーム） */
  
    var MOUSE_ACTIVE_FRAMES = 120;
    /** 背景色 */
  
    var BG_COLOR = "#232323";
    /** バブルの色 */
  
    var BUBBLE_COLOR = "#f79428";
    /** 生成したバブルを格納する配列 */
  
    var bubbles = [];
    /** 最後にカーソルが動いた時間（フレーム） */
  
    var lastMouseMoved = -MOUSE_ACTIVE_FRAMES;
    /**
     * バブルを追加します。
     * カーソルを動かしている場合にはカーソル位置に、停止している場合は画面下のランダムな位置に配置します。
     */
  
    var addBubble = function addBubble() {
      var zDist = Math.pow(p.random(), 3); 
  
      var isUseMousePos = p.frameCount - lastMouseMoved < MOUSE_ACTIVE_FRAMES;
  
      var x = isUseMousePos ? p.mouseX / p.width + p.random(-0.05, 0.05) : p.random();
      var y = isUseMousePos ? p.mouseY / p.height + p.random(-0.05, 0.05) : 1.2;
      bubbles.push({
        pos: {
          x: x,
          y: y
        },
        size: p.map(zDist, 0, 1, MINSIZE, MAXSIZE),
        speed: p.map(zDist, 0, 1, MINSPEED, MAXSPEED),
        isFill: Math.random() > 0.5
      });
    };
    var removeOutBubbles = function removeOutBubbles() {
      bubbles = bubbles.filter(function (b) {
        return b.pos.y * p.height + b.size >= 0;
      });
    };
    var updateBubbles = function updateBubbles() {
      bubbles.forEach(function (b) {
        b.pos.y -= b.speed;
      });
    };
    var drawBubbles = function drawBubbles() {
      bubbles.forEach(function (b) {
        // ノイズを使って左右の揺れの値を作る
        var noise = p.noise(b.pos.x * 20, b.pos.y * 20);
        var xShift = p.map(noise, 0, 1, -15, 15);
        var color = p.color(BUBBLE_COLOR);
        p.stroke(color);
        b.isFill ? p.fill(color) : p.noFill(); // バブルの位置に計算したノイズを加えて円を描画する
  
        p.circle(b.pos.x * p.width + xShift, b.pos.y * p.height, b.size * p.width);
      });
    };
    p.setup = function () {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('__layout');
    };
    p.draw = function () {
      p.push();
      p.background(p.color(BG_COLOR));
      p.blendMode(p.SCREEN);
      removeOutBubbles();
  
      while (bubbles.length < COUNT) {
        addBubble();
      }
  
      updateBubbles();
      drawBubbles();
      p.pop();
    };
  
    p.mouseMoved = function () {
      lastMouseMoved = p.frameCount;
    };
  
    p.windowResized = function () {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };
  
  new p5_1(sketch);