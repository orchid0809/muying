$(document).ready(function(){var n="http://skin.1ypg.com";var u=function(a){var b=/^[\S]{6,20}$/;return b.test(a)};var r=function(a){return'<p class="tips_txt">'+a+"</p>"};var t=function(a){return'<p class="tips_txt_Wrong"><s></s>'+a+"</p>"};var y='<p class="tips_txt_yes"><s></s></p>';var q=function(a){return'<div class="Pas_tips_StrWeak"><p class="password_tips0'+a+'"><span><em></em></span><i>'+(a==3?"\u5f3a":a==2?"\u4e2d":"\u5f31")+"</i></p><b>\u76f8\u540c\u5b57\u7b26\u5bc6\u7801\u6613\u88ab\u7834\u89e3\uff0c\u8bf7\u7528\u591a\u7ec4\u5408\u7684\u5bc6\u7801</b></div>"};var z={password:{normal:r("\u5bc6\u7801\u75316\uff5e20\u4f4d\u534a\u89d2\u5b57\u7b26\uff08\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7b26\u53f7\uff09\u7ec4\u6210\uff0c\u533a\u5206\u5927\u5c0f\u5199"),empty:t("\u5bc6\u7801\u957f\u5ea6\u4e0d\u6b63\u786e\uff0c\u5e94\u4e3a6\uff5e20\u4e2a\u4e0d\u542b\u7a7a\u683c\u7684\u5b57\u7b26"),error:t("\u5bc6\u7801\u957f\u5ea6\u4e0d\u6b63\u786e\uff0c\u5e94\u4e3a6\uff5e20\u4e2a\u4e0d\u542b\u7a7a\u683c\u7684\u5b57\u7b26"),ok1:q(1),ok2:q(2),ok3:q(3)},passwordAgain:{normal:r("\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"),empty:t("\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"),error:t("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),ok:y}};var w="";var v="";var o=0;var p=0;var s=true;var x=function(){var g=$("#btnSubmitPassword");var a=$("#hidUserName").val();var e=function(h){if(!h){return}$("#"+h).attr("class","login_input_textCur").parent().next().html(z[h].normal)};var c=function(j){var m=$("#"+j);if(m.length==0){return}var k=m.val();var i=m.parent().next();var l="";switch(j){case"password":if(k==""){l=z[j].empty;w=k;o=0}else{if(!u(k)){l=z[j].error;w=k;o=1}else{var h=function(C){var B=0;if(C.match(/[a-z]/ig)){B++}if(C.match(/[0-9]/ig)){B++}if(C.match(/(.[^a-z0-9])/ig)){B++}if(B==3&&C.length<8){B--}return B};l=z[j]["ok"+h(k)];w=k;o=2;if(v!=""){c("passwordAgain")}}}break;case"passwordAgain":if(k==""){l=w==""?"":z[j].empty;v="";p=0}else{if(k!=w){l=z[j].error;v=k;p=1}else{if(!u(k)){l="";v=k;p=1}else{l=z[j].ok;v=k;p=2}}}break;default:break}if(i){i.html(l)}m.attr("class","login_input_text")};var f=function(){if(!isLoaded){return}$.ajax({url:"/getbackpwd/updatePwd.html",data:"mail="+a+"&newPwd="+w,type:"post",beforeSend:h,success:function(i){if(i!=null&&i==0){location.replace("/getbackpwd/findok.html")}else{alert("\u8bbe\u7f6e\u65b0\u5bc6\u7801\u5931\u8d25\uff01");g.html("\u786e\u8ba4\u4fee\u6539").attr("class","login_Email_but")}},error:function(){alert("\u8bbe\u7f6e\u65b0\u5bc6\u7801\u5931\u8d25\uff01\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01")}});function h(){isLoaded=false;g.html("\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u540e").attr("class","login_Email_butClick")}};var d=function(){if(!isLoaded){return}s=true;if(o!=2){c("password");s=false}if(p!=2){c("passwordAgain");s=false}if(s==true){f()}};var b=function(){$("input[name*='txt']").each(function(){$(this).bind("focus",function(){e(this.id)}).bind("blur",function(){c(this.id)}).bind("keydown",function(h){var i=(window.event)?event.keyCode:h.keyCode;if(i==32){return false}else{if(i==13){this.blur();if(this.id=="passwordAgain"){g.click()}else{$("#"+this.id).parent().parent().next().find("input[name*='txt']").focus()}return false}}return true}).attr("disabled",false)});g.bind("click",d);$("#password").focus()};b();isLoaded=true};x()});
