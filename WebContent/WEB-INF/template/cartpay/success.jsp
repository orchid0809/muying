<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.eypg.util.ApplicationListenerImpl"%>
<%@ taglib prefix="s" uri="/struts-tags"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		    <meta name="decorator" content="template_footer" />
		<title>支付结果_<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%></title>
		<link rel="stylesheet" type="text/css" href="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/css/mycart.css" />
	</head>

	<body>
	<div class="logo">
        <div class="float">
            <span class="logo_pic"><a title="<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%>" class="a" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>"></a></span><span class="tel"></span>
        </div>
    </div>
    <div class="shop_payment">
        <ul class="payment">
            <li class="first_step">第一步：提交订单</li>
            <li class="arrow_2"></li>
            <li class="secend_step">第二步：网银支付</li>
            <li class="arrow_1"></li>
            <li class="third_step orange_Tech">第三步：支付成功 等待配送</li>
            <li class="arrow_3"></li>
            <li class="fourth_step">第四步：确认收货</li>
            <li class="arrow_2"></li>
            <li class="fifth_step">第五步：晒单奖励</li>
        </ul>
	   	<div class="wait_list hidden" id="divResult" style="display: block;">
	   		<c:choose>
	   			<c:when test="${fn:length(successCartList)>0}">
   				 	<div class="wait_list_tips ">
				        <dl><dt><img border="0" alt="" src="<%=ApplicationListenerImpl.sysConfigureJson.getImgUrl()%>/Images/login_exp04.png" /></dt><dd>
				        <h2 class="orange Fb">恭喜您，支付成功！请等待系统为您配送！</h2>
				        <p>您现在可以 <a class="blue" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/user/UserBuyList.html">查看<%=ApplicationListenerImpl.sysConfigureJson.getShortName() %>记录</a> 或 <a class="blue" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>">继续购物</a></p>
				        <p>总共成功<%=ApplicationListenerImpl.sysConfigureJson.getShortName() %>${fn:length(successCartList)}件商品，信息如下：</p></dd></dl>
				    </div>
				     <div class="wait_listCon">
				        <ul>
				        <li class="wait_Ltit"><span class="wait_Cw01">购买时间</span><span class="wait_Cw02">商品名称</span><span class="wait_Cw03"><%=ApplicationListenerImpl.sysConfigureJson.getShortName() %>人次</span><span class="wait_Cw04"><%=ApplicationListenerImpl.sysConfigureJson.getShortName() %>编码</span></li>
				        <s:iterator value="successCartList" var="successCart">
					        <li class="wait_Lodity"><span class="wait_Cw01">${successCart.buyDate}</span><span class="wait_Cw02"><a class="blue" title="${successCart.productName }" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/products/${successCart.productId }.html">${successCart.productName }</a></span><span class="wait_Cw03">${successCart.buyCount}</span><span class="wait_Cw04"><a href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/user/UserBuyDetail-${successCart.productId }.html" target="_blank">查看详情</a></span></li>
				        </s:iterator>
				        </ul>
		           </div>
	   			</c:when>
	   			<c:otherwise>
	   				<div class="wait_list_tips ">
				        <dl><dt><img border="0" alt="" src="<%=ApplicationListenerImpl.sysConfigureJson.getImgUrl()%>/Images/login_exp03.png" /></dt><dd>
				        <h2 class="orange Fb">哎呀！<%=ApplicationListenerImpl.sysConfigureJson.getShortName() %>失败了。</h2>
				        <p>您现在可以 <a class="blue" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/cartPay/index.html">查看购物车</a> 或 <a class="blue" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>">继续购物</a></p>
				        </dd></dl>
				    </div>
				    <div class="wait_listCon">
				       
		           	</div>
	   			</c:otherwise>
	   		</c:choose>
        </div>
    </div>
    <link type="text/css" rel="stylesheet" href="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/css/pagedialog.css" />
    <script language="javascript" type="text/javascript" src="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/js/pagedialog.js"></script>
    <div class="pageDialogBG" id="pageDialogBG"></div>
	<div class="pageDialogBorder" id="pageDialogBorder"></div>
	<div class="pageDialog" id="pageDialog">
		<div class="pageDialogClose" id="pageDialogClose" title="关闭"></div>
		<div class="pageDialogMain" id="pageDialogMain">&nbsp;</div>
	</div>
	</body>
</html>
