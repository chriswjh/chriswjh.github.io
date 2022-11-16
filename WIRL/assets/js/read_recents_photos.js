var root_path = '../assets/img/recent_photo/';
var img_number = 17;

//用於對照片進行命名
var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Create <div><div/>
for (var i = 0; i < img_number; i++) {
  try {
    var div_id = 'div_' + array[i];
    var div = document.createElement('div');
    div.setAttribute('class', 'swiper-slide');
    div.setAttribute('id', div_id);
    document.querySelector('#life').appendChild(div);
  } catch {
    console.log("CREATE <div><div/> ERROR");
  }
}

//Create <a><a/>
for (var i = 0; i < img_number; i++) {
  try {
    var div_id = 'div_' + array[i];
    var img_path = root_path + i.toString() + '.JPG';
    var a_id = 'a_img' + array[i];
    var a = document.createElement('a');
    a.setAttribute('class', 'glightbox');
    a.setAttribute('id', a_id);
    a.setAttribute('href', img_path);
    document.querySelector('#' + div_id).appendChild(a);
  } catch {
    console.log("CREATE <a><a/> ERROR")
  }
}

//Create <img><img/>
for (var i = 0; i < img_number; i++) {
  try {
    var img_temp_name = 'a_img' + array[i];
    var img_path = root_path + i.toString() + '.JPG';
    var img = document.createElement('img');
    img.setAttribute('class', 'img-fluid');
    img.setAttribute('alt', '');
    img.setAttribute('src', img_path);
    document.querySelector('#' + img_temp_name).appendChild(img);
  } catch {
    console.log("CREATE <img><img/> ERROR")
  }
}
