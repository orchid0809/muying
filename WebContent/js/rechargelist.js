$(document).ready(function(){var j=$("#resultCount").val();var a=0;var h=$("#userId").val();var f=$("#selectTime");var i=$("#userSelTime");var e=$("#txtMisTime");var b=$("#txtMaxTime");var c=e.val();var g=b.val();$("#pagination").pagination(j,{current_page:a,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:10,callback:l});function l(m){var n="/user/ConsumeListByDeltaAjaxPage.action?pageNo="+m+"&selectTime="+f.val()+"&userId="+h+"&startDate="+c+"&endDate="+g;$(".pageUL").prepend('<li class="total_page" id="pageLoading"><img src="'+$img+'/Images/loding.gif" /></li>');$.ajax({url:n,type:"post",data:"json",beforeSend:d,success:function(q){$("#consumer_records_list").empty();$("#RecordCount").text(0);if(j>0){$(".pageUL").show();$(".pageUL").prepend('<li class="total_page">\u9875\u6b21<i>'+(m+1)+"/"+Math.ceil(j/10)+"</i>&nbsp;&nbsp;\u5171<i>"+j+"</i>\u6761\u8bb0\u5f55</li>");$("#RecordCount").text(j);for(var p=0;p<q.length;p++){var o='<ul class="content" >';o+='<li class="time">'+q[p].date+"</li>";o+='<li class="bank">\u7f51\u94f6\u652f\u4ed8</li>';o+='<li class="much">\uffe5'+q[p].money+"</li>";o+="</ul>";$(o).appendTo("#consumer_records_list")}$("#pageLoading").hide()}else{$('<ul><li class="notFound">\u67e5\u65e0\u5145\u503c\u8bb0\u5f55\uff0c\u8bf7\u66f4\u6539\u67e5\u8be2\u533a\u95f4\uff01</li></ul>').appendTo("#consumer_records_list");$(".pageUL").hide()}}})}function d(){$("#pageLoading").show()}function k(){$("#changeLoading").show()}$("#selectTime").change(function(){var n=f.val();var o=new Date();var m=parseInt(f.val());if(n=="0"||n=="1"||n=="2"||n=="3"||n=="4"){$.ajax({url:"/user/ConsumeListByDeltaAjaxPageResultCount.action?pageNo="+a+"&selectTime="+f.val()+"&userId="+h+"&startDate="+c+"&endDate="+g,type:"get",data:"String",beforeSend:k,success:function(q){j=parseInt(q);$("#pagination").pagination(j,{current_page:a,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:10,callback:l});$("#changeLoading").hide()}});i.hide()}else{if(n=="5"){e.val(o.DateAdd("m",-1).Format("YYYY-MM-DD")).date_input();b.val(o.Format("YYYY-MM-DD")).date_input();i.show();var p=function(){var r=e.val();var q=b.val();if(!IsValidDate(r)){alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5f00\u59cb\u65e5\u671f!");return}if(!IsValidDate(q)){alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7ed3\u675f\u65e5\u671f!");return}if(ConvertDate(q)<ConvertDate(r)){alert("\u7ed3\u675f\u65e5\u671f\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65e5\u671f!");return}$.ajax({url:"/user/ConsumeListByDeltaAjaxPageResultCount.action?pageNo="+a+"&selectTime="+f.val()+"&userId="+h+"&startDate="+r+"&endDate="+q,type:"get",data:"String",beforeSend:k,success:function(s){j=parseInt(s);c=r;g=q;$("#pagination").pagination(j,{current_page:a,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:10,callback:l});$("#changeLoading").hide()}})};$("#butTimeSelect").unbind("click").bind("click",p);return;i.show()}}});$.getScript($skin+"/js/date.js");$.getScript($skin+"/js/dateinput.js")});
