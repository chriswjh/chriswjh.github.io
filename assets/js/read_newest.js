var root_path = "../assets/files/";
var rearch_info = root_path + "Newest.csv"
var data = d3.dsv(",", rearch_info).then(function (result) {

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

    for (var i = 0; i < result.length; i++) {
        if (result[i]['name'] != '') {
            var a = document.createElement('a');
            var br = document.createElement('br');
            a.textContent = result[i]['name'];
            a.setAttribute('id', result[i]['name']);
            a.setAttribute('data-aos', 'zoom-out-left');
            a.setAttribute('data-aos-easing', 'ease-in-in"');
            document.querySelector('#Newest #Newest_box').appendChild(a);
        }
    }

});