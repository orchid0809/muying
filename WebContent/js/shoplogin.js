jQuery(function(g){var f=0;function b(j){var i=/^[0-9]{6}$/;if(!i.exec(j)){return false}return true}function h(i){var j=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(j.test(i)){return true}return false}function a(j){var i=/^[^ \f\n\r\t\v]{6,16}$/;if(!i.exec(j)){return false}return true}function d(j){var i=/^1\d{10}$/;if(!i.exec(j)){return false}else{return true}}function e(i,j){document.cookie=i+"="+escape(j)+";id=1ypg;path=/;domain="+$domain}function c(){g("#btnSubmitLogin").remove();g("#loginSubmitStatus").show()}g(function(){var i=g("#username");var p=g("#pwd");var l=g("#name_ts");var r=g("#pwd_ts");var k=null;var m=null;var q=function(t,s){g("#liError").html('<div id="div_login"><p class="ts"></p>'+t+"</div>");g(s).focus()};i.focus().attr("class","text_name_focus");i.focus(function(){g(this).attr("class","text_name_focus");if(l.attr("class")=="ts"){l.attr("class","ts").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1")}g(this).parent().attr("class","click")}).blur(function(){g(this).attr("class","num");g(this).parent().attr("class","");o(false,false)});p.focus(function(){g(this).attr("class","text_name_focus");if(r.attr("class")=="ts"){r.attr("class","ts").html("\u8bf7\u586b\u5199\u957f\u5ea6\u4e3a6-20\u957f\u5ea6\u7684\u5b57\u7b26\u5bc6\u7801")}g(this).parent().attr("class","click")}).blur(function(){g(this).attr("class","num");g(this).parent().attr("class","");o(false,false)});var o=function(v,s){var t=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;var u=/^1[3-9]\d{9}$/;k=i.val();m=p.val();l.attr("class","ts").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1");r.attr("class","ts").html("\u8bf7\u586b\u5199\u957f\u5ea6\u4e3a6-20\u957f\u5ea6\u7684\u5b57\u7b26\u5bc6\u7801");if(k==""){if(v){i.focus()}p.attr("class","num");if(s){l.attr("class","wrong").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\uff01")}return false}else{if(!d(k)&&!h(k)){if(v){i.focus()}p.attr("class","num");l.attr("class","wrong").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\uff01");return false}}if(m==""){if(v){p.focus()}i.attr("class","num");if(s){r.attr("class","wrong").html("\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801\uff01")}return false}else{if(!a(m)){if(v){p.focus()}i.attr("class","num");r.attr("class","wrong").html("\u767b\u5f55\u5bc6\u7801\u4e3a6-20\u957f\u5ea6\u7684\u5b57\u7b26\uff01");return false}}return true};var n="";var j=function(t){if(!isLoaded){return}var u=false;var s=false;if(t==0){u=true;s=true}if(t==1){u=true;s=false}if(o(u,s)){if(n!=k){g.ajax({url:"/login/login.html?userName="+k+"&pwd="+m,type:"post",data:"String",beforeSend:c,success:function(v){if(v=="userError"){i.focus();l.attr("class","wrong").html("\u767B\u5F55\u5E10\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");g("#loginSubmitStatus").before('<input id="btnSubmitLogin" type="button" name="login_init" value="\u767b\u5f55" class="login_init"/>');g("#loginSubmitStatus").hide();n=k}else{if(v=="pwdError"){p.focus();r.attr("class","wrong").html("\u767B\u5F55\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");g("#loginSubmitStatus").before('<input id="btnSubmitLogin" type="button" name="login_init" value="\u767b\u5f55" class="login_init"/>');g("#loginSubmitStatus").hide()}else{if(v.userId){e("userId",v.userId);e("face",v.faceImg)}if(v.userName){e("userName",v.userName)}else{if(v.mail){e("mail",v.mail)}else{if(v.phone){e("phone",v.phone)}}}e("loginType",0);parent.location.href=$www+"/mycart/payment.html"}}},error:function(){alert("\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");window.location.href=$www}})}else{l.attr("class","wrong").html("\u767B\u5F55\u5E10\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");i.focus()}}};g("#LoginForm").keydown(function(s){var t=(window.event)?event.keyCode:s.keyCode;if(t==32){return false}else{if(t==13){j(1)}}return true});g("#btnSubmitLogin").live("click",function(){j(0)});isLoaded=true;QC.Login({btnId:"qqLoginBtn",scope:"get_user_info,add_share",size:"B_M"},function(s,t){if(QC.Login.check()){QC.Login.getMe(function(v,u){g.ajax({url:"/register/authorizeIsExists.action",type:"POST",data:"openId="+encodeURIComponent(v.replace(/(\/)/g,"")),success:function(w){if(w=="true"){g.ajax({type:"POST",url:"/register/authorizeRegsiter.action",data:"userName="+encodeURIComponent(s.nickname.replace(/(\/)/g,""))+"&openId="+v+"&userFace="+s.figureurl_2,success:function(x){e("userId",x.userId);e("userName",x.userName);e("face",x.faceImg);e("loginType",2);parent.location.href=$www+"/mycart/payment.html"}})}else{e("userId",w.userId);e("userName",w.userName);e("face",w.faceImg);e("loginType",2);parent.location.href=$www+"/mycart/payment.html"}}})})}})})});
