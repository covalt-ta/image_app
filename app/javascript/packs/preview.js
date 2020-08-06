if (window.location.pathname !== '/') {
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list');
    
    // リファクタリング、選択した画像を表示する関数(createImageHTML)を作成し使用する
    const createImageHTML = (blob) => {
      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')
      imageElement.setAttribute('id', 'image-elment')
      let imageElementNum = document.querySelectorAll('#image-element').length

      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)

      // 一つ選択すると新たなファイル選択ボタンを生成
      const inputHTML = document.createElement('input')
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement)

      // 2回目以降のinput要素にもイベント発火をさせる
      inputHTML.addEventListener('change', (e) =>{
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob)
      })
    }
    
    // input要素に画像選択をするとイベント発火
    document.getElementById('message_image').addEventListener('change', function(e){

      // 画像が表示されている場合のみ、すでに存在している画像を削除する
      // 複数投稿を行える機能実装においては、以下は削除しておく
      // const imageContent = document.querySelector('img');
      // if (imageContent) {
      //   imageContent.remove();
      // }

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