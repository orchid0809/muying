$(document).ready(function(){var n=$("#resultCount").val();var u=0;var f=$("#userId").val();var j=$("#tbList");var h=$("[name=divTip]");var l=$("<ul></ul>");var b=$("#txtMisTime");var k=$("#txtMaxTime");var i=$("#btnSearch");var d=$("[class=record-cur]").attr("name");var s=new Date();var e=b.val();var o=k.val();$(".record-tab a").each(function(a,c){$(this).bind("click",function(){$(this).addClass("record-cur").siblings().removeClass("record-cur");d=$("[class=record-cur]").attr("name");$("#goods_list").empty();m(d)})});$("#pagination").pagination(n,{current_page:u,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:5,callback:t});function t(a){var c="/user/OrderListAjaxPage.action?pageNo="+a+"&selectTime="+d+"&userId="+f+"&startDate="+e+"&endDate="+o;$(".pageUL").prepend('<li class="total_page" id="pageLoading"><img src="'+$img+'/Images/loding.gif" /></li>');$.ajax({url:c,type:"get",beforeSend:g,success:function(w){$("#tbList").empty();if(n>0){$('<ul class="listTitle"><li class="single-img">\u5546\u54c1\u56fe\u7247</li><li class="single-xx-has">\u5546\u54c1\u4fe1\u606f</li><li class="sdzt">\u72b6\u6001</li><li class="single-Control">\u64cd\u4f5c</li></ul>').appendTo("#tbList");$(".pageULEx").show();$(".pageULEx").prepend('<li class="total_page">\u9875\u6b21<i>'+(a+1)+"/"+Math.ceil(n/5)+"</i>&nbsp;&nbsp;\u5171<i>"+n+"</i>\u6761\u8bb0\u5f55</li>");for(var v=0;v<w.length;v++){var p="";p+='<ul class="sdzt"><li class="single-img"><a href="'+$www+"/products/"+w[v].productId+'.html" class="pic" target="_blank" title=""><img src="'+$img+w[v].productImg+'"></a></li><li class="single-xx-has"><a class="blue" href="'+$www+"/products/"+w[v].productId+'.html" target="_blank">(\u7b2c'+w[v].productPeriod+"\u671f)"+w[v].productName+'</a><p class="buy-money">\u4ef7\u503c\uff1a<span class="money"><i class="rmb"></i>'+w[v].productPrice+'.00</span></p><p class="buy-code">\u5e78\u8fd0'+$shortName+"\u7801\uff1a"+w[v].winId+'</p><p class="gray02">\u63ed\u6653\u65f6\u95f4\uff1a'+w[v].winDate+'</p></li><li class="sdzt"><span class="orange">';if(w[v].buyStatus==1){p+='\u6536\u8d27\u5730\u5740\u672a\u786e\u8ba4<br /><a class="blue" href="/user/OrderDetail-'+w[v].productId+'.html">\u7acb\u5373\u786e\u8ba4\u5730\u5740</a>'}else{if(w[v].buyStatus==2){p+="\u7b49\u5f85\u53d1\u8d27"}else{if(w[v].buyStatus==3){p+="\u7b49\u5f85\u6536\u8d27"}else{if(w[v].buyStatus==4){p+="\u5df2\u786e\u8ba4\u6536\u8d27";if(w[v].shareStatus==-1){p+="<br />\u6682\u672a\u6652\u5355"}else{if(w[v].shareStatus==0){p+="<br />\u7b49\u5f85\u5ba1\u6838"}else{if(w[v].shareStatus==1){p+="<br />\u672a\u5ba1\u6838\u901a\u8fc7"}else{if(w[v].shareStatus==2){p+="<br />\u5ba1\u6838\u901a\u8fc7"}}}}}else{if(w[v].buyStatus==10){p+="\u4ea4\u6613\u5b8c\u6210";if(w[v].shareStatus==-1){p+="<br />\u6682\u672a\u6652\u5355"}else{if(w[v].shareStatus==0){p+="<br />\u6652\u5355\u7b49\u5f85\u5ba1\u6838"}else{if(w[v].shareStatus==1){p+="<br />\u6652\u5355\u672a\u5ba1\u6838\u901a\u8fc7"}else{if(w[v].shareStatus==2){p+="<br />\u6652\u5355\u5ba1\u6838\u901a\u8fc7"}}}}}else{if(w[v].buyStatus==11){p+="\u4ea4\u6613\u53d6\u6d88"}}}}}}p+="</span></li>";p+='<li class="single-Control"><a title="\u8be6\u60c5" class="blue" href="'+$www+"/user/OrderDetail-"+w[v].productId+'.html">\u4ea4\u6613\u8be6\u60c5</a>';if(w[v].buyStatus==4){p+='<a class="blue" href="'+$www+"/user/PostSingleAdd-"+w[v].productId+'.html">\u7acb\u5373\u6652\u5355</a>'}p+="</li></ul>";$(p).appendTo("#tbList")}}else{$('<ul class="listTitle"><li class="single-img">\u5546\u54c1\u56fe\u7247</li><li class="single-xx-has">\u5546\u54c1\u4fe1\u606f</li><li class="sdzt">\u72b6\u6001</li><li class="single-Control">\u64cd\u4f5c</li></ul>').appendTo("#tbList");$('<div class="tips-con"><i></i>\u65e0\u76f8\u5e94\u7684\u83b7\u5f97\u5546\u54c1\u8bb0\u5f55</div>').appendTo("#tbList");$(".pageULEx").hide()}}})}function q(a){var c="/user/OrderListAjaxPage.action?pageNo="+a+"&userId="+f+"&startDate="+e+"&endDate="+o;$(".pageUL").prepend('<li class="total_page" id="pageLoading"><img src="'+$img+'/Images/loding.gif" /></li>');$.ajax({url:c,type:"get",beforeSend:g,success:function(w){$("#tbList").empty();if(n>0){$('<ul class="listTitle"><li class="single-img">\u5546\u54c1\u56fe\u7247</li><li class="single-xx-has">\u5546\u54c1\u4fe1\u606f</li><li class="sdzt">\u72b6\u6001</li><li class="single-Control">\u64cd\u4f5c</li></ul>').appendTo("#tbList");$(".pageULEx").show();$(".pageULEx").prepend('<li class="total_page">\u9875\u6b21<i>'+(a+1)+"/"+Math.ceil(n/5)+"</i>&nbsp;&nbsp;\u5171<i>"+n+"</i>\u6761\u8bb0\u5f55</li>");for(var v=0;v<w.length;v++){var p="";p+='<ul class="sdzt"><li class="single-img"><a href="'+$www+"/products/"+w[v].productId+'.html" class="pic" target="_blank" title=""><img src="'+$img+w[v].productImg+'"></a></li><li class="single-xx-has"><a class="blue" href="'+$www+"/products/"+w[v].productId+'.html" target="_blank">(\u7b2c'+w[v].productPeriod+"\u671f)"+w[v].productName+'</a><p class="buy-money">\u4ef7\u503c\uff1a<span class="money"><i class="rmb"></i>'+w[v].productPrice+'.00</span></p><p class="buy-code">\u5e78\u8fd0'+$shortName+"\u7801\uff1a"+w[v].winId+'</p><p class="gray02">\u63ed\u6653\u65f6\u95f4\uff1a'+w[v].winDate+'</p></li><li class="sdzt"><span class="orange">';if(w[v].buyStatus==1){p+='\u6536\u8d27\u5730\u5740\u672a\u786e\u8ba4<br /><a class="blue" href="/user/OrderDetail-'+w[v].productId+'.html">\u7acb\u5373\u786e\u8ba4\u5730\u5740</a>'}else{if(w[v].buyStatus==2){p+="\u7b49\u5f85\u53d1\u8d27"}else{if(w[v].buyStatus==3){p+="\u7b49\u5f85\u6536\u8d27"}else{if(w[v].buyStatus==4){p+="\u5df2\u786e\u8ba4\u6536\u8d27";if(w[v].shareStatus==-1){p+="<br />\u6682\u672a\u6652\u5355"}else{if(w[v].shareStatus==0){p+="<br />\u7b49\u5f85\u5ba1\u6838"}else{if(w[v].shareStatus==1){p+="<br />\u672a\u5ba1\u6838\u901a\u8fc7"}else{if(w[v].shareStatus==2){p+="<br />\u5ba1\u6838\u901a\u8fc7"}}}}}else{if(w[v].buyStatus==10){p+="\u4ea4\u6613\u5b8c\u6210";if(w[v].shareStatus==-1){p+="<br />\u6682\u672a\u6652\u5355"}else{if(w[v].shareStatus==0){p+="<br />\u6652\u5355\u7b49\u5f85\u5ba1\u6838"}else{if(w[v].shareStatus==1){p+="<br />\u6652\u5355\u672a\u5ba1\u6838\u901a\u8fc7"}else{if(w[v].shareStatus==2){p+="<br />\u6652\u5355\u5ba1\u6838\u901a\u8fc7"}}}}}else{if(w[v].buyStatus==11){p+="\u4ea4\u6613\u53d6\u6d88"}}}}}}p+="</span></li>";p+='<li class="single-Control"><a title="\u8be6\u60c5" class="blue" href="'+$www+"/user/OrderDetail-"+w[v].productId+'.html">\u4ea4\u6613\u8be6\u60c5</a>';if(w[v].buyStatus==4){p+='<a class="blue" href="'+$www+"/user/PostSingleAdd-"+w[v].productId+'.html">\u7acb\u5373\u6652\u5355</a>'}p+="</li></ul>";$(p).appendTo("#tbList")}}else{$('<ul class="listTitle"><li class="single-img">\u5546\u54c1\u56fe\u7247</li><li class="single-xx-has">\u5546\u54c1\u4fe1\u606f</li><li class="sdzt">\u72b6\u6001</li><li class="single-Control">\u64cd\u4f5c</li></ul>').appendTo("#tbList");$('<div class="tips-con"><i></i>\u65e0\u76f8\u5e94\u7684\u83b7\u5f97\u5546\u54c1\u8bb0\u5f55</div>').appendTo("#tbList");$(".pageULEx").hide()}}})}function g(){$("#pageLoading").show()}var m=function(c){var a=c;$.ajax({url:"/user/OrderListAjaxPageResultCount.action?pageNo="+u+"&selectTime="+a+"&userId="+f,type:"get",data:"String",success:function(p){n=parseInt(p);$("#pagination").pagination(n,{current_page:u,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:5,callback:t})}})};i.click(function(){$(".record-tab a").attr("class","");$("#goods_list").empty();r()});var r=function(){var c=b.val();var a=k.val();if(!IsValidDate(c)){alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5f00\u59cb\u65e5\u671f!");return}if(!IsValidDate(a)){alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7ed3\u675f\u65e5\u671f!");return}if(ConvertDate(a)<ConvertDate(c)){alert("\u7ed3\u675f\u65e5\u671f\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65e5\u671f!");return}$.ajax({url:"/user/OrderListAjaxPageResultCount.action?pageNo="+u+"&userId="+f+"&startDate="+c+"&endDate="+a,type:"get",data:"String",success:function(p){n=parseInt(p);e=c;o=a;$("#pagination").pagination(n,{current_page:u,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:5,callback:q})}})};b.val(s.DateAdd("m",-1).Format("YYYY-MM-DD")).date_input();k.val(s.Format("YYYY-MM-DD")).date_input()});
