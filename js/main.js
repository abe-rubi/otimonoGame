// (function(){
// 'use strict';

  // 試しに回転するTﾌﾞﾛｯｸを描写したが、実際には使用しないのでコメント化
  // block回転させる描写を作る
  // 回転した形状も全て記述するとコード量が膨大になり複雑化するので、
  // 描くべきﾊﾟﾀｰﾝを配列としてまとめて、その配列通りに描くようにする
  // これにより、ﾊﾟﾀｰﾝを変えれば様々な形状を描けるようにする。
// tblock=[
//   [
//     [0,0,0,0],    //初期位置
//     [1,1,1,0],
//     [0,1,0,0],
//     [0,0,0,0]
//   ],
//   [
//     [0,1,0,0],    //反時計回り。以下、同様
//     [0,1,1,0],
//     [0,1,0,0],
//     [0,0,0,0]
//   ],
//   [
//     [0,1,0,0],
//     [1,1,1,0],
//     [0,0,0,0],
//     [0,0,0,0]
//   ],
//   [
//     [0,1,0,0],
//     [1,1,0,0],
//     [0,1,0,0],
//     [0,0,0,0]
//   ]
// ];

  // ﾌﾞﾛｯｸ描写ﾊﾟﾀｰﾝ設定
var block=[
  [
    // ﾌﾞﾛｯｸ0
    [
      [0,0,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [0,0,0,0]
    ],
    [
      [0,1,0,0],
      [0,1,1,0],
      [0,1,0,0],
      [0,0,0,0]
    ],
    [
      [0,1,0,0],
      [1,1,1,0],
      [0,0,0,0],
      [0,0,0,0]
    ],
    [
      [0,1,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0]
    ]
  ],
  [
    // ﾌﾞﾛｯｸ1
    [
      [0,0,0,0],
      [1,1,1,0],
      [1,0,0,0],
      [0,0,0,0]
    ],
    [
      [1,0,0,0],
      [1,0,0,0],
      [1,1,0,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [0,0,1,0],
      [1,1,1,0],
      [0,0,0,0]
    ],
    [
      [1,1,0,0],
      [0,1,0,0],
      [0,1,0,0],
      [0,0,0,0]
    ]
  ],
  [
    // block2
    [
      [0,0,0,0],
      [1,1,0,0],
      [0,1,1,0],
      [0,0,0,0]
    ],
    [
      [0,1,0,0],
      [1,1,0,0],
      [1,0,0,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [1,1,0,0],
      [0,1,1,0],
      [0,0,0,0]
    ],
    [
      [0,1,0,0],
      [1,1,0,0],
      [1,0,0,0],
      [0,0,0,0]
    ]
  ],
  [
    // block3
    [
      [0,0,0,0],
      [0,1,1,0],
      [1,1,0,0],
      [0,0,0,0]
    ],
    [
      [1,0,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [1,1,0,0],
      [0,0,0,0]
    ],
    [
      [1,0,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0]
    ]
  ],
  [
    // block4
    [
      [0,0,0,0],
      [1,1,1,0],
      [0,0,1,0],
      [0,0,0,0]
    ],
    [
      [1,1,0,0],
      [1,0,0,0],
      [1,0,0,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [1,0,0,0],
      [1,1,1,0],
      [0,0,0,0]
    ],
    [
      [0,1,0,0],
      [0,1,0,0],
      [1,1,0,0],
      [0,0,0,0]
    ]
  ],
  [
    // block5
    [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0]
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0]
    ],
    [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0]
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0]
    ]
  ],
  [
    // block6
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0]
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0]
    ]
  ]
];

  // block-color
var biro=['#CC00CC','#FFA500','#cc0000','#00cc00','#cc0000','#00cccc','#cccc00'];


function tsugiwotsukuru(){
  // 次のblockを作る
  btsugi=Math.floor(Math.random()*block.length);

  // 次のblockを描写するためのCanvasを取得
  tsugigamen=document.getElementById('tsugi');
  ct=tsugigamen.getContext('2d');

  // 表示前に前回表示分を消す
  ct.clearRect(0,0,79,79);

  // 消した後に描写
  kaku(ct,0,0,0,btsugi)
}

// 壁や他のブロックと重ならないかを調べる関数
function kakunin(bx,by,muki,shurui){
  p=block[shurui][muki];
  // ﾌﾞﾛｯｸのマス目4*4の中に1があるか（=どんな形のブロックか）確認
  for(n=0;n<4;n++){
    for(m=0;m<4;m++){
      if(p[n][m]===1){
        // ﾌﾞﾛｯｸを描写する位置が空欄かどうか確認
        // xが範囲外のところには動かせない
        if((bx+m<0)||(bx+m>11)){      //0 & 11は壁の位置を指している
          return false;
        }
        // 空欄ではない場合は動かせない
        if(jyoutai[by+n][bx+m]!==100){
          return false;
        }
      }
    }
  }
  return true;    //上記以外の状態で動かす事が可能
}

  // 下に移動させる関数
function shitaidou(){
  // 描写するCanvas取得
  var gamegamen=document.getElementById('game');
  var cg=gamegamen.getContext('2d');

  // 現在の座標と向きを保存
  maenoix=ix;
  maenoiy=iy;
  maenoimuki=imuki;

  // 消す
  kesu(cg,ix,iy,imuki,ishurui);

  // 移動
  iy=iy+1;

  // 音を出す
  document.getElementById('ochiru').play();

  // 移動可能か確認
  kekka=kakunin(ix,iy,imuki,ishurui);
  if(kekka){
    // 移動できる
    // 新しい位置に描く
    kaku(cg,ix,iy,imuki,ishurui);
  }else{
    // 移動できない
    // 移動前の場所、向きに戻す
    ix=maenoix;
    iy=maenoiy;
    imuki=maenoimuki;
    kaku(cg,ix,iy,imuki,ishurui);

    // この位置を当たり判定用の配列に設定
    p=block[ishurui][imuki];
    for(n=0;n<4;n++){
      for(m=0;m<4;m++){
        if(p[n][m]===1){
          jyoutai[iy+n][ix+m]=ishurui;
        }
      }
    }
    // 落ちた音
    document.getElementById('don').play();

    // ラインを消して得点計算する
    tokutenkeisan();

    // 次のブロックとして設定したものが落ちる
    ix=4;
    iy=0;
    ishurui=btsugi;
    imuki=0;
    kaku(cg,ix,iy,imuki,ishurui);

    // そこにおけるか判定
    kekka=kakunin(ix,iy,imuki,ishurui);
    if(!kekka){
      // 重なっていたらゲームオーバー
      // 音を出す
      document.getElementById('gameover').play();

      // メッセージをだす
      alert('ゲームオーバー');

      // 実行中であることを止める＝ﾌﾞﾛｯｸが落ちてこないようにする
      jikkou=false;
    }

    // さらに次のブロックを設定
    tsugiwotsukuru();
  }

  // 時間を少しずつ早くする
  jikan=jikan-1;
  if(jikan<50){
    // 0.05秒以下になったら1000に戻す
    jikan=1000;
  }
}


  // onkeydown対応のugokasu関数を用意する
  // 'e'はhtmlで指定しているeventに相当し、この引数から押したキーを判断する
function ugokasu(e){

  // 描く先のCanvasを取得
  var gamegamen=document.getElementById('game');
  var cg=gamegamen.getContext('2d');

  // 現在の座標と向きを保存
  // 移動先に本当に置けるのかkakunin関数で確認し、おけない場合は元の場所に戻すべきなので
  // 今の場所や向きを別の変数に保存しておく
  var maenoix=ix;
  var maenoiy=iy;
  var maenoimuki=imuki;

  // 動かす目標の現在のblockを消す
  kesu(cg,ix,iy,imuki,ishurui);

  // '→'keyが押されたか
  // keyのcode(※ ←:37,↑:38,→:39,↓:40)
  if(e.keyCode===39){

  // 右に移動させる
    ix+=1;

  // 音を鳴らす
    document.getElementById('kaiten').play();
  }

  // '←'keyが押されたか
  if(e.keyCode===37){
    ix-=1;
    document.getElementById('kaiten').play();
  }

  // '↑'keyが押されたか
  if(e.keyCode===38){

    // 回転する
    imuki=imuki+1;
    if(imuki>3){
      imuki=0;
    }
    // 音を鳴らす
    document.getElementById('kaiten').play();
  }

  // '↓'keyが押されたか
  if(e.keyCode===40){
    shitaidou();
  }

  // 移動・回転が可能か確認
  kekka=kakunin(ix,iy,imuki,ishurui);
  if(!kekka){       //kakunin関数がfalseの時に実行する
    // 回転・移動できない
    // 元に戻す
    ix=maenoix;
    iy=maenoiy;
    imuki=maenoimuki;
  }

  // 移動先にblockを描く
  kaku(cg,ix,iy,imuki,ishurui);
}



  // blockを移動させる際の処理は、'blockを消す→移動先に再描写'になるので
  // 動かす直前のblockを消す関数を用意する
function kesu(c,bx,by,muki,shurui){
  // 消す処理(消しゴムモードの呼び出し)
  c.globalCompositeOperation='destination-out';

  // kaku(描く)関数を呼び出す→消しゴムモードなので'描く'ではなく'消す'になる
  kaku(c,bx,by,muki,shurui);

  // 消しゴムモードを終了し、元の描く状態に戻す
  c.globalCompositeOperation='source-over';
}


  // blockを描く関数の設定
  // 引数内は(描画先の2Dｺﾝﾃｷｽﾄ,描く先の左からの位置,描く先の右からの位置)とする
  // 回転ﾊﾟﾀｰﾝ描写のためにmuki追加
function kaku(c,bx,by,muki,shurui){

  // blockの色と線
  c.fillStyle=biro[shurui];
  c.strokeStyle='#333333';
  c.lineWidth=3;

  // 描く関数に向き情報(描画ﾊﾟﾀｰﾝ)を渡す
  p=block[shurui][muki];

  // 描写ﾊﾟﾀｰﾝ通りに描く
  for(n=0;n<4;n++){
    for(m=0;m<4;m++){
      // 描くかどうか
      if(p[n][m]===1){
        // ここに描く
        c.fillRect((bx+m)*20,(by+n)*20,20,20);
        c.strokeRect((bx+m)*20,(by+n)*20,20,20);
      }
    }
  }

  // 確認用に描写したblock削除のためコメント化
  // // blockを描く
  // c.fillRect(bx*20,(by+1)*20,20,20);
  // c.strokeRect(bx*20,(by+1)*20,20,20);
  //
  // // 以下、二つ目~4つ目まで
  // c.fillRect((bx+1)*20,(by+1)*20,20,20);
  // c.strokeRect((bx+1)*20,(by+1)*20,20,20);
  //
  // c.fillRect((bx+2)*20,(by+1)*20,20,20);
  // c.strokeRect((bx+2)*20,(by+1)*20,20,20);
  //
  // c.fillRect((bx+1)*20,(by+2)*20,20,20);
  // c.strokeRect((bx+1)*20,(by+2)*20,20,20);
}

  //blockの状態の変数
  var jyoutai=[];

  // 得点を計算数関数
function tokutenkeisan(){
  var kosuu=0;
  // 全ラインをチェック
  for(y=0;y<21;y++){
    sorottenai=false;
    for(x=1;x<=10;x++){
      if((jyoutai[y][x]===100)||(jyoutai[y][x]===99)){
        // ﾌﾞﾛｯｸが無い（隙間or壁）
        sorottenai=true;
      }
    }
    if(!sorottenai){
      // そろってる
      kosuu=kosuu+1;

      // 音を出す
      document.getElementById('kieru').play();

      // 上から詰める
      for(k=y;k>0;k--){
        for(x=1;x<=10;x++){
          jyoutai[k][x]=jyoutai[k-1][x];
        }
      }
    }
  }
  // ﾌﾞﾛｯｸを全部書き直す
  // 1.キャンバスを取得
  gamegamen=document.getElementById('game');
  cg=gamegamen.getContext('2d');

  // 2.全部消す
  cg.clearRect(0,0,239,439);

  // 3.ﾌﾞﾛｯｸがあるところを描く
  for(y=0;y<22;y++){
    for(x=0;x<12;x++){
      if((jyoutai[y][x]!==100)&&(jyoutai[y][x]!==99)){
        // ﾌﾞﾛｯｸを描く
        cg.fillStyle=biro[jyoutai[y][x]];
        cg.strokeStyle='#333333';
        cg.lineWidth=3;
        cg.fillRect(x*20,y*20,20,20);
        cg.strokeRect(x*20,y*20,20,20);
      }
    }
  }
  // 得点を計算する
  switch(kosuu){
    case 1:
    tokuten=tokuten+10;
    break;
    case 2:
    tokuten=tokuten+20;
    break;
    case 3:
    tokuten=tokuten+100;
    break;
    case 4:
    tokuten=tokuten+1000;
    // 4ラインの時は音を鳴らす
    document.getElementById('zenbu').play();
    break;
  }

  // 得点表示する
  tgamen=document.getElementById('tokuten');
  tgamen.innerHTML=tokuten;
}

function jikandeugokasu(){
  if(jikkou){
    // 実行する
    // 下に動かす
    shitaidou();
    // 次の時間を設定
    setTimeout(jikandeugokasu,jikan);
  }
}


function gamekaishi(){
  var gamegamen=document.getElementById('game');
  var cg=gamegamen.getContext('2d');

  // ゲームスタートボタン押下後は画面を消す(ゲームオーバー画面を残さない為)
  // (clearRect:左端、上端、切り取り幅、高さを四角形の形にクリアする)
  cg.clearRect(0,0,239,439);

  // 得点をリセット
  tokuten=0;

  // ゲーム中に設定し、タイマーを設定
  jikkou=true;
  jikan=1000;
  setTimeout(jikandeugokasu,jikan);

  // 状態をクリア
  jyoutai=new Array(22);
  for(i=0;i<22;i++){
    jyoutai[i]=new Array(12);
    for(j=0;j<12;j++){
      jyoutai[i][j]=100;
    }
  }

  // 壁を設定 left
  for(i=0;i<22;i++){
    jyoutai[i][0]=99;
  }
  // 壁　right
  for(i=0;i<22;i++){
    jyoutai[i][11]=99;
  }

  // 壁　under
  for(j=0;j<22;j++){
    jyoutai[21][j]=99;
  }

  // 仮のT型blockを描写するための左上座標指定
  ix=4;
  iy=0;
  imuki=0;    //向きを決める変数imukiを追加し初期値0を代入
  ishurui=Math.floor(Math.random()*block.length);     // random choise block追加

  //  次のblockをセットする
  tsugiwotsukuru();


  // // T型blockの色
  // cg.fillStyle='#CC00CC';
  // cg.strokeStyle='#333333';
  // cg.lineWidth=3;
  //
  // // 一つ目のblock
  // cg.fillRect(ix*20,(iy+1)*20,20,20);
  // cg.strokeRect(ix*20,(iy+1)*20,20,20);
  //
  // // 二つ目のblock
  // cg.fillRect((ix+1)*20,(iy+1)*20,20,20);
  // cg.strokeRect((ix+1)*20,(iy+1)*20,20,20);
  //
  // // 三つめ
  // cg.fillRect((ix+2)*20,(iy+1)*20,20,20);
  // cg.strokeRect((ix+2)*20,(iy+1)*20,20,20);
  //
  // // ４つ目
  // cg.fillRect((ix+1)*20,(iy+2)*20,20,20);
  // cg.strokeRect((ix+1)*20,(iy+2)*20,20,20);

  // 試しに書いた上の行はkaku関数と重複するためコメント化
  // gamekaishi関数の変数、左上座標設定値をkaku関数の引数に渡すのみとする
  kaku(cg,ix,iy,imuki,ishurui);
}


function hajime(){
  // 背景Canvas取得
  var backgamen=document.getElementById('back');
  // getContextは現在('2d')のみ
  // (getContext:取得したgetElementByIdでHTMLと関連付けて、描写機能を有効にする)
  var cb=backgamen.getContext('2d');

  // 塗りを設定(fillstyle:塗りつぶしの色やｸﾞﾗﾃﾞｰｼｮﾝ、ｽﾀｲﾙ等を指定する)
  cb.fillStyle='#CCCCCC';

  //(strokeStyle:線や輪郭の色やスタイルを指定)
  // (lineWidth:線の幅を指定　初期値は1.0 『px』は不要かも？)
  cb.strokeStyle='#333333';
  cb.lineWidth=2;

  // 四角形を塗る
  // (fillRect:左端、上端からの位置に幅、高さを指定した塗りつぶしの四角形を描く)
  cb.fillRect(0,0,20,20);

  // 四角の枠線を描く
  // (strokeRect:左端、上端からの位置に幅、高さを指定した輪郭の四角形を描く)
  cb.strokeRect(0,0,20,20);

  // 左壁を描く(左上座標x,y=0,0とする)
  x=0;
  y=0;

  // 左側の枠ブロックを下まで配置する
  for(i=0;i<22;i++){
    cb.fillRect(x,y,20,20);
    cb.strokeRect(x,y,20,20);
    y=y+20;
  }

  // 右側枠も配置
  x=220;
  y=0;

  for(i=0;i<22;i++){
    cb.fillRect(x,y,20,20);
    cb.strokeRect(x,y,20,20);
    y=y+20;
  }
  // 下壁を作る
  x=0;
  y=420;

  for(i=0;i<22;i++){
    cb.fillRect(x,y,20,20);
    cb.strokeRect(x,y,20,20);
    x=x+20;
  }





}





// })();
