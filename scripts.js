      $("#alba-list-post").each(function(){
        var self = this
        var e=$(this),l=e.find(".java-post").attr("data-categ");
        var o="/feeds/posts/default/-/"+l+"?alt=json-in-script&max-results=6";
        $.ajax({
          type:"GET",url:o,dataType:"jsonp",
          success:function(e){
            for(var t="<div class='panel-heading'><strong>أخبار الأسبوع</strong></div><div class='panel-body'>",l="",i=0;i<e.feed.entry.length;i++){
              for(var r=e.feed.entry[i],
                  n=r.title.$t,
                  o=0;o<r.link.length;o++){
                if("replies"==r.link[o].rel&&"text/html"==r.link[o].type){r.link[o].title,r.link[o].href}if("alternate"==r.link[o].rel){
                  var f=r.link[o].href;break}}
              var p,h=r.content.$t;
              try{p=0==i?r.media$thumbnail.url.replace("s72-c","w550-h420-c").replace("default","hqdefault"):r.media$thumbnail.url.replace("s72-c","w550-h420-c").replace("default","hqdefault")}catch(g){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),p=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg"}
              l+='<div class="row">',
                l+='<div class="col-md-3">',
                l+='<a href="'+f+'" title="'+n+'"><img alt="'+n+'" class="img-responsive img-rounded" src="'+p+'"></a>',
                l+='</div>',
                l+='<div class="col-md-9"><h3><a href="'+f+'" title="'+n+'"><strong>'+n+'</strong></a></h3></div></div><hr/>'}
            l+="</div>",
              t+=l;
            $(self).find(".widget").html(t);
          }
        });
      });
      //-----------------------------
      $("#alba-card-post").each(function(){
        var self = this
        var e=$(this),l=e.find(".java-post").attr("data-categ");
        var o="/feeds/posts/default/-/"+l+"?alt=json-in-script&max-results=6";
        $.ajax({
          type:"GET",url:o,dataType:"jsonp",
          success:function(e){
            for(var t="<div class='row'><div class='col-lg-12'><h2>آخر الأخبار</h2></div></div>",l="",i=0;i<e.feed.entry.length;i++){
              for(var r=e.feed.entry[i],
                  n=r.title.$t,
                  o=0;o<r.link.length;o++){
                if("replies"==r.link[o].rel&&"text/html"==r.link[o].type){r.link[o].title,r.link[o].href}if("alternate"==r.link[o].rel){
                  var f=r.link[o].href;break}}
              var p,h=r.content.$t;
              try{p=0==i?r.media$thumbnail.url.replace("s72-c","w550-h420-c").replace("default","hqdefault"):r.media$thumbnail.url.replace("s72-c","w550-h420-c").replace("default","hqdefault")}catch(g){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),p=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg"}
              l+='<div class="col-md-6 col-sm-6 hero-feature">',
                l+='<div class="thumbnail">',
                l+='<a href="'+f+'" title="'+n+'" class="imagpost"><img alt="'+n+'" src="'+p+'"></a>',
                l+='',
                l+='<div class="caption"><p class="ptitle"><strong>'+n+'</strong></p><p><a href="'+f+'" class="btn btn-primary">إقرأ المزيد</a></p></div></div></div>'}
            l+="",
              t+=l;
            $(self).find(".widget").html(t);
          }
        });
      });
      //-----------------------------
        $(".carousel").each(function(){
        var self = this;
        var e=$(this),l=e.find(".java-post").attr("data-categ");
        var o="/feeds/posts/default/-/"+l+"?alt=json-in-script&max-results=6";
        $.ajax({
          type:"GET",url:o,dataType:"jsonp",
          success:function(e){
            for(var t="<div class='owl-carousel owl-theme carousel-inner'>",l="",i=0;i<e.feed.entry.length;i++){
              for(var r=e.feed.entry[i],
                  n=r.title.$t,
                  o=0;o<r.link.length;o++){
                if("replies"==r.link[o].rel&&"text/html"==r.link[o].type){r.link[o].title,r.link[o].href}if("alternate"==r.link[o].rel){
                  var f=r.link[o].href;break}}
              var p,h=r.content.$t;
              try{p=0==i?r.media$thumbnail.url.replace("s72-c","w550-h420-c").replace("default","hqdefault"):r.media$thumbnail.url.replace("s72-c","w550-h420-c").replace("default","hqdefault")}catch(g){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),p=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg"}
              l+='<div class="col-kk other">',
                l+='<a href="'+f+'" title="'+n+'"><div class="overlay" style="position: absolute; width: 100%; height: 100%; background: #000; opacity: 0.3; transition: all 0.2s ease-out;"></div></a>',
                l+='<img alt="'+n+'" title="'+n+'" class="img-responsive" style="width: 100%; height: auto" src="'+p+'"/>',
                l+='<div class="carousel-caption"><h2><strong>'+n+'</strong></h2></div></div>'}
            l+="</div>",
              t+=l;
            $(self).find(".carousel-inner").html(t);
            $('.owl-carousel').owlCarousel({
              items: 1,
              loop: true,
              //margin: 5,
              autoplay: true,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              rtl:true,
              nav:true,
              navText : ["<span class='glyphicon glyphicon-chevron-right'><i class='fa fa-chevron-right'/></span>","<span class='glyphicon glyphicon-chevron-left'><i class='fa fa-chevron-left'/></span"],
              dots: false,
            });
          }
        });
      });
      //-----------------------------
       $(document).ready(function() {
        $('.post').each(function() {
          var e=$(this);
          $(e).find(".post-time").appendTo(e.find(".col-md-7 strong p"));
        });
      });
      //-----------------------------
      $(document).ready(function() {
        $('.blog-pager').replaceWith("<ul class='pagination'>"+$('.blog-pager').html()+"</ul>");
          $('.pagination span').each(function() {
          $(this).wrap("<li/>")
      });
      $('.pagecurrent').parent().addClass('active');
        $(".status-msg-hidden").html("<h1>"+$('.status-msg-hidden b').text()+"</h1>")
      });
