var root_path = "../assets/files/";
var rearch_info = root_path + "Research_plan.csv"
var data = d3.dsv(",", rearch_info).then(function (result) {

  /**
   *  計劃類型
   */
  var rearch_type_temp = [];
  for (var i = 0; i < result.length; i++) {
    rearch_type_temp.push(result[i]['type']);
  }
  var rearch_type = [...(new Set(rearch_type_temp))];

  /**
   *  對計劃根據年份進行排序
   */
  function compare_start_time(a, b) {
    if (a.start_time > b.start_time) {
      return -1;
    }
    if (a.start_time < b.start_time) {
      return 1;
    }
    return 0;
  }
  result.sort(compare_start_time);

  /**
   *  添加計劃内容
   */
  for (var i = 0; i < rearch_type.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('id', rearch_type[i].substr(1, 1));
    div.setAttribute('class', "rearch_content");
    document.querySelector('#rearch_content').appendChild(div);
    div.setAttribute('data-aos', 'zoom-out');
    var temp_name = '#' + rearch_type[i].substr(1, 1);
    var h3 = document.createElement('h3');
    h3.textContent = rearch_type[i];
    document.querySelector(temp_name).appendChild(h3);
  }

  for (var i = 0; i < result.length; i++) {
    var a = document.createElement('a');
    var br = document.createElement('br');
    a.textContent = result[i]['name'];
    a.setAttribute('data-aos', 'zoom-in')
    var br = document.createElement('br');
    document.querySelector('#' + result[i]['type'].substr(1, 1)).appendChild(a);
    document.querySelector('#' + result[i]['type'].substr(1, 1)).appendChild(br);
  }

});