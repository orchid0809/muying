function isDigit(b){var a=/^[0-9]{6}$/;if(!a.exec(b)){return false}return true}function ckEmail(a){var b=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(b.test(a)){return true}return false}function ckPasswd(b){var a=/^[^ \f\n\r\t\v]{6,16}$/;if(!a.exec(b)){return false}return true}function ckMobile(b){var a=/^1\d{10}$/;if(!a.exec(b)){return false}else{return true}}function SetCookie(b,d,a){var c=a;var e=new Date();e.setTime(e.getTime()+c*24*60*60*1000);document.cookie=b+"="+escape(d)+";id=1ypg;path=/;expires="+e.toGMTString()+";domain="+$domain}function loadingLogin(){$("#btnSubmitLogin").remove();$("#loginSubmitStatus").show()}$(function(){var a=$("#username");var i=$("#pwd");var d=$("#name_ts");var k=$("#pwd_ts");var e=$("#shareId").val();var c=null;var f=null;var j=function(m,l){$("#liError").html('<div id="div_login"><p class="ts"></p>'+m+"</div>");$(l).focus()};a.focus().attr("class","text_name_focus");a.focus(function(){$(this).attr("class","text_name_focus");if(d.attr("class")=="ts"){d.attr("class","ts").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1")}$(this).parent().attr("class","click")}).blur(function(){$(this).attr("class","num");$(this).parent().attr("class","");h(false,false)});i.focus(function(){$(this).attr("class","text_name_focus");if(k.attr("class")=="ts"){k.attr("class","ts").html("\u8bf7\u586b\u5199\u957f\u5ea6\u4e3a6-20\u957f\u5ea6\u7684\u5b57\u7b26\u5bc6\u7801")}$(this).parent().attr("class","click")}).blur(function(){$(this).attr("class","num");$(this).parent().attr("class","");h(false,false)});var h=function(o,l){var m=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;var n=/^1[3-9]\d{9}$/;c=a.val();f=i.val();d.attr("class","ts").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1");k.attr("class","ts").html("\u8bf7\u586b\u5199\u957f\u5ea6\u4e3a6-20\u957f\u5ea6\u7684\u5b57\u7b26\u5bc6\u7801");if(c==""){if(o){a.focus()}i.attr("class","num");if(l){d.attr("class","wrong").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\uff01")}return false}else{if(!ckMobile(c)&&!ckEmail(c)){if(o){a.focus()}i.attr("class","num");d.attr("class","wrong").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\uff01");return false}}if(f==""){if(o){i.focus()}a.attr("class","num");if(l){k.attr("class","wrong").html("\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801\uff01")}return false}else{if(!ckPasswd(f)){if(o){i.focus()}a.attr("class","num");k.attr("class","wrong").html("\u767b\u5f55\u5bc6\u7801\u4e3a6-20\u957f\u5ea6\u7684\u5b57\u7b26\uff01");return false}}return true};var g="";var b=function(m){if(!isLoaded){return}var n=false;var l=false;if(m==0){n=true;l=true}if(m==1){n=true;l=false}if(h(n,l)){if(g!=c){$.ajax({url:"/login/login.html?userName="+c+"&pwd="+f,type:"post",data:"String",beforeSend:loadingLogin,success:function(o){if(o=="userError"){a.focus();d.attr("class","wrong").html("\u767B\u5F55\u5E10\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");$("#loginSubmitStatus").before('<input id="btnSubmitLogin" type="button" name="login_init" value="\u767b\u5f55" class="login_init"/>');$("#loginSubmitStatus").hide();g=c}else{if(o=="pwdError"){i.focus();k.attr("class","wrong").html("\u767B\u5F55\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");$("#loginSubmitStatus").before('<input id="btnSubmitLogin" type="button" name="login_init" value="\u767b\u5f55" class="login_init"/>');$("#loginSubmitStatus").hide()}else{if(o.userId){SetCookie("userId",o.userId);SetCookie("face",o.faceImg)}if(o.userName){SetCookie("userName",o.userName)}else{if(o.mail){SetCookie("mail",o.mail)}else{if(o.phone){SetCookie("phone",o.phone)}}}SetCookie("loginType",0);parent.location.href=$www+"/shareShow/"+e+".html"}}},error:function(){alert("\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");window.location.href=$www}})}else{d.attr("class","wrong").html("\u767B\u5F55\u5E10\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");a.focus()}}};$("#LoginForm").keydown(function(l){var m=(window.event)?event.keyCode:l.keyCode;if(m==32){return false}else{if(m==13){b(1)}}return true});$("#btnSubmitLogin").live("click",function(){b(0)});isLoaded=true;QC.Login({btnId:"qqLoginBtn",scope:"get_user_info,add_share",size:"B_M"},function(l,m){if(QC.Login.check()){QC.Login.getMe(function(o,n){$.ajax({url:"/register/authorizeIsExists.action",type:"POST",data:"openId="+encodeURIComponent(o.replace(/(\/)/g,"")),success:function(p){if(p=="true"){$.ajax({type:"POST",url:"/register/authorizeRegsiter.action",data:"userName="+encodeURIComponent(l.nickname.replace(/(\/)/g,""))+"&openId="+o+"&userFace="+l.figureurl_2,success:function(q){SetCookie("userId",q.userId);SetCookie("userName",q.userName);SetCookie("face",q.faceImg);SetCookie("loginType",2);parent.location.href=$www+"/shareShow/"+e+".html"}})}else{SetCookie("userId",p.userId);SetCookie("userName",p.userName);SetCookie("face",p.faceImg);SetCookie("loginType",2);parent.location.href=$www+"/shareShow/"+e+".html"}}})})}})});