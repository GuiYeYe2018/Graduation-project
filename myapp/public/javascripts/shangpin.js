

$(function(){
	var namelist=[];
    var zuozhelist=[];
    var faxinglist=[];
    var zishulist=[];
    var jiagelist=[];
    var new_book=[];



    $.ajax({
        type:'post',
      url:"http://127.0.0.1:9090/shangpin",
      dataType:"json",
      success:function(res){
          console.log(res);
          console.log(res.length);
          for(var i=0;i<res.length;i++){
              namelist[i]=res[i].name;
              zuozhelist[i]=res[i].zuozhe;
              faxinglist[i]=res[i].faxing;
              zishulist[i]=res[i].zishu;
              jiagelist[i]=res[i].jiage;
               new_book[i]= "<div class='product'>"+
              "<div class='product__info'>"+
                 " <img class='product__image' src='images/timg.jpg' alt='Product 1' />"+
                  "<h3 class='product__title'>"+namelist[i]+"</h3>"+
                  "<span class='product__year extra highlight'>"+zuozhelist[i]+"</span>"+
                  "<span class='product__region extra highlight'>"+faxinglist[i]+"</span>"+
                  "<span class='product__varietal extra highlight'>"+zishulist[i]+"</span>"+
                  "<span class='product__alcohol extra highlight'>13%</span>"+
                  "<span class='product__price highlight'>"+jiagelist[i]+"</span>"+
                   "<button class='action action--button action--buy' value='"+namelist[i]+"'><i class='fa fa-shopping-cart'></i><span class='action__text'>试读</span></button>"+
              "</div>"+
          "</div>";
          }

          
          $('.grid').html(new_book);

    $(".product").click(function(){
        var name =$("button").eq($(this).index()).val();
          window.location.href="http://localhost:3000/read?name="+name;
     })
  }
  });

  var music = document.getElementById('music');

  $('#yinyue').click(function(){
	if(music.paused){
         music.play(); 
		$('#yinyue').css('animation-play-state','running')
	}else{
         music.pause();
		$('#yinyue').css('animation-play-state','paused')
	}
})



})