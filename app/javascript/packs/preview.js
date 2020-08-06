if (window.location.pathname !== '/') {
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list');
    
    // リファクタリング、選択した画像を表示する関数(createImageHTML)を作成し使用する
    const createImageHTML = (blob) => {
      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')
      
      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      ImageList.appendChild(imageElement)
    }
    
    // input要素に画像選択をするとイベント発火
    document.getElementById('message_image').addEventListener('change', function(e){

      // 画像が表示されている場合のみ、すでに存在している画像を削除する
      const imageContent = document.querySelector('img');
      if (imageContent) {
        imageContent.remove();
      }

      // 表示する画像を取得してURLに変換
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      // 関数の呼び出し（createImgHTML）
      createImageHTML(blob)

      // 下記　関数にまとめた処理
      // 画像を表示するためのdiv要素を生成
      // 表示する画像を生成
      // 生成したHTMLの要素をブラウザに表示させる
    });
  });
}