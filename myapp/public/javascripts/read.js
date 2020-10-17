
$(function(){


     function getQueryString(key){
                var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
                var result = window.location.search.substr(1).match(reg);
                return result?decodeURIComponent(result[2]):null;
              }
              
            var name=getQueryString('name');
        console.log(getQueryString('name'));
    $.ajax({
        type:'post',
        url:"http://127.0.0.1:9090/read?name=" + name,
        dataType:"json",
        success:function(res){
            console.log(res.biaoti);
             var new_h2 = res.biaoti;
             var new_p =res.xiaoshuo;
             $("h2").html(new_h2);
             $("p").html(new_p);
             $("h1").html(name);
        }
    })


})