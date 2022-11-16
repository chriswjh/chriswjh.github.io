/**
* 學生訊息
*/
var root_path = "../assets/files/";
var student_info = root_path + "Student_Info.csv";
var data = d3.dsv(",", student_info).then(function (result) {


    for (var i = 0; i < result.length; i++) {

        var student_type;

        /**
         * 學生類型
         */
        var student_type_temp = result[i]['type'];
        switch (student_type_temp) {
            case 'phd':
                student_type = 'phd';
                break;
            case 'master2':
                student_type = 'ms2';
                break;
            case 'master1':
                student_type = 'ms1';
                break;
            default:
                console.log('STUDENT TYPE ERROR');
        }

        /**
         * 學生照片顯示
         */
        var div = document.createElement('div');
        div.setAttribute('class', 'col-lg-3 col-md-5 portfolio-item filter-' + student_type + '');
        div.setAttribute('id', result[i]['name']);
        document.querySelector('#Student_Info').appendChild(div);

        var img = document.createElement('img');
        var img_root_path = '../assets/img/students/';
        img.setAttribute('src', img_root_path + result[i]['photo_path']);
        img.setAttribute('class', 'img-fluid');
        document.querySelector('#' + result[i]['name']).appendChild(img);

        /**
         * 學生資訊卡牌顯示
         */
        var stu_info_div = document.createElement('div');
        stu_info_div.setAttribute('class', 'portfolio-info');
        stu_info_div.setAttribute('id', result[i]['name'] + '-info');
        document.querySelector('#' + result[i]['name']).appendChild(stu_info_div);

        var student_name = document.createElement('h4');
        student_name.textContent = result[i]['name'] + '(' + result[i]['type'] + ')';
        document.querySelector('#' + result[i]['name'] + '-info').appendChild(student_name);

        var project_name = document.createElement('p');
        project_name.textContent = "參與專案：";
        document.querySelector('#' + result[i]['name'] + '-info').appendChild(project_name);

        var project1_name = document.createElement('p');
        project1_name.textContent = result[i]['project1'];
        document.querySelector('#' + result[i]['name'] + '-info').appendChild(project1_name);

        var project2_name = document.createElement('p');
        project2_name.textContent = result[i]['project2'];
        document.querySelector('#' + result[i]['name'] + '-info').appendChild(project2_name);
    }
    return result;
})