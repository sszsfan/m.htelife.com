// 是form标签内第一个输入框input自动获得聚焦
$(function(){
	if($('form').length>0){
	    var formArr = $('form');
	    var firstFromInp= $(formArr[0]).children('input:not(:hidden)');
	    for(i=0;i<firstFromInp.length;i++){
		    var Input = $(firstFromInp[i]).val();
		    if(Input){
		    	$(firstFromInp[i]).blur();return;
		    }
		    else{
		    	$(firstFromInp[i]).focus();return;
		    }
		}
	}
});

(function(){
	//两个步骤切换
	//点击下一步
	$(document).ready(function(){
	  $("#js_nextstep").click(function(){
	    $("#js_step_01").hide(); //隐藏第一步
	    $("#js_step_02").show(); //显示第二步
	    $("#js_step_button_01").hide(); //隐藏“下一步”按钮
	    $("#js_step_button_02").show(); //显示“上一步”、“确定”按钮
	    $("#js_setupbar_01").removeClass("active"); //移除第一步的class"active"
	    $("#js_setupbar_02").addClass("active"); //添加第二步的class"active"
	  });
	  //点击上一步
	  $("#js_laststep").click(function(){
	    $("#js_step_02").hide(); //隐藏第二步
	    $("#js_step_01").show(); //显示第一步
	    $("#js_step_button_02").hide(); //隐藏“上一步”、“确定”按钮
	    $("#js_step_button_01").show(); //显示“下一步”按钮
	    $("#js_setupbar_02").removeClass("active"); //移除第二步的class"active"
	    $("#js_setupbar_01").addClass("active"); //添加第一步的class"active"
	  });
	});
	//总菜单 toggle
	$(document).ready(function(){
	  $("#js_openallnav").click(function(){
	    $("#js_allnav").toggle(200);
	  });
	});
	//显示双日历组件 toggle
	$(document).ready(function(){
	  $("#js_open_selectdate_son").click(function(){
	    $("#js_selectdate_son").toggle(200);
	  });
	});
	//工作站登录显示用户列表 toggle
	$(document).ready(function(){
	  $("#js_open_userlist_son").click(function(){
	    $("#js_userlist_son").toggle(200);
	  });
	});
	//显示更多筛选 toggle
	$(document).ready(function(){
	  $("#js_open_morescreening").click(function(){
	    $("#js_morescreening").toggle(200);
	  });
	});
	
	//显示退出 toggle
	$(document).ready(function(){
	  $("#js_logout").click(function(){
	    $("#js_logout_open").toggle(200);
	  });
	});
	//弹出层 提示
	$(document).ready(function(){
	  $(".js_button_fast").click(function(){
	    $("#modal_fast").fadeIn(100);
	    $("#modal_t_fast").animate({top:'80px'},500);
	    $("#modal_t_fast").animate({top:'-600px'},3000);
	    $("#modal_fast").fadeOut(3000);
	  });
	});
	//弹出层 提示
	$(document).ready(function(){
	  $(".js_button_001").click(function(){
	    $("#modal_001").fadeIn(100);
	    $("#modal_t_001").animate({top:'80px'},500);
	  });
	});
	//弹出层 消失
	$(document).ready(function(){
	  $(".js_drop_001").click(function(){
	  	$("#modal_t_001").animate({top:'-600px'},200);
	    $("#modal_001").fadeOut(500);
	  });
	});
	//弹出层 输入框 提示
	$(document).ready(function(){
	  $(".js_button_002").click(function(){
	    $("#modal_002").fadeIn(100);
	    $("#modal_t_002").animate({top:'20px'},500);
	  });
	});
	//弹出层 输入框 消失
	$(document).ready(function(){
	  $(".js_drop_002").click(function(){
	  	$("#modal_t_002").animate({top:'-600px'},200);
	    $("#modal_002").fadeOut(500);
	  });
	});
	//大型弹出层 出现
	$(document).ready(function(){
	  $(".js_button_003").click(function(){
	    $("#modal_big_001").fadeIn(100);
	    $("#modal_t_big_001").animate({top:'40px'},500);
	  });
	});
	//大型弹出层 消失
	$(document).ready(function(){
	  $(".js_drop_002").click(function(){
	  	$("#modal_t_big_001").animate({top:'-600px'},200);
	    $("#modal_big_001").fadeOut(500);
	  });
	});
	
	//弹出层 提示
	$(document).ready(function(){
	  $(".js_button_004").click(function(){
	    $("#modal_004").fadeIn(100);
	    $("#modal_t_004").animate({top:'20px'},500);
	  });
	});
	//弹出层 消失
	$(document).ready(function(){
	  $(".js_drop_004").click(function(){
	  	$("#modal_t_004").animate({top:'-600px'},200);
	    $("#modal_004").fadeOut(500);
	  });
	});
	//弹出层 列表选定 提示
	$(document).ready(function(){
	  $(".js_button_005").click(function(){
	    $("#modal_005").fadeIn(100);
	    $("#modal_t_005").animate({top:'20px'},500);
	  });
	});
	//弹出层 列表选定 消失
	$(document).ready(function(){
	  $(".js_drop_005").click(function(){
	  	$("#modal_t_005").animate({top:'-600px'},200);
	    $("#modal_005").fadeOut(500);
	  });
	});
	
	//弹出层 提示
	$(document).ready(function(){
	  $(".js_button_006").click(function(){
	    $("#modal_006").fadeIn(100);
	    $("#modal_t_006").animate({top:'20px'},500);
	  });
	});
	//弹出层 消失
	$(document).ready(function(){
	  $(".js_drop_006").click(function(){
	  	$("#modal_t_006").animate({top:'-600px'},200);
	    $("#modal_006").fadeOut(500);
	  });
	});
	//弹出层 提示
	$(document).ready(function(){
	  $(".js_button_007").click(function(){
	    $("#modal_007").fadeIn(100);
	    $("#modal_t_007").animate({top:'20px'},500);
	  });
	});
	//弹出层 消失
	$(document).ready(function(){
	  $(".js_drop_007").click(function(){
	  	$("#modal_t_007").animate({top:'-600px'},200);
	    $("#modal_007").fadeOut(500);
	  });
	});
	
	
	
	
	//弹出层 提示
	$(document).ready(function(){
	  $(".js_button_008").click(function(){
	    $("#modal_008").fadeIn(100);
	    $("#modal_t_008").animate({top:'20px'},500);
	  });
	});
	//弹出层 消失
	$(document).ready(function(){
	  $(".js_drop_008").click(function(){
	  	$("#modal_t_008").animate({top:'-600px'},200);
	    $("#modal_008").fadeOut(500);
	  });
	});
	//录入衣物 弹出层出现
	$(document).ready(function(){
	  $(".js_button_open").click(function(){
	    $("#modal_screen_001").fadeIn(100);
	    $("#modal_s_big_001").fadeIn(200);
	  });
	});
	//录入衣物 弹出层消失
	$(document).ready(function(){
	  $(".js_closemodal").click(function(){
	  	$("#modal_s_big_001").fadeOut(100);
	    $("#modal_screen_001").fadeOut(200);
	  });
	});
	
	//顶部提示 提示
	$(document).ready(function(){
	  $(".js_show_ok").click(function(){
	    $("#js_popover_tips_001").fadeIn(100);
	    $("#js_popover_tips_001").animate({top:'0px'},200);
	    setTimeout("$('#js_popover_tips_001').fadeOut()",1600);
	  });
	});
/*	
	//滑动开关
	$(document).ready(function(){
		function switchBox(parentbox,childbox1,childbox2){
			parentbox.bind("click",function(){
				if(parentbox.hasClass("parentbox2")){
					parentbox.removeClass("parentbox2");
					childbox1.removeClass("childbox1_2");
					childbox2.removeClass("childbox2_2");
				}else{
					parentbox.addClass("parentbox2");
					childbox1.addClass("childbox1_2");
					childbox2.addClass("childbox2_2");						
				}
			});	
		}
		var num=$(".parentbox1").length;
		for(var j=0; j<num; j++){
			var pbox = $(".parentbox1:eq("+j+")");
			var box1 = $(".childbox1_1:eq("+j+")");
			var box2 = $(".childbox2_1:eq("+j+")");
			switchBox(pbox,box1,box2);
		}		
	});
*/
	$(document).ready(function(){
		//日期动态图
		function TimeLine(startTime,endTime){
			//起始时间取小时、分钟字符串
			var startHour = parseInt(startTime.slice(0,2));
			var startMinute = parseInt(startTime.slice(3,5));
			//起始时间总分钟数
			var start_minutes = startHour*60 + startMinute;

			//结束时间取小时、分钟字符串
			var endHour = parseInt(endTime.slice(0,2));
			var endMinute = parseInt(endTime.slice(3,5));
			//截止时间总分钟数
			var end_minutes = endHour*60 + endMinute;
			
			//当前时间
			var today = new Date();
			var nowHour = today.getHours();
			var nowMinute = today.getMinutes();
			//当前时间总分钟数
			var now_minutes = nowHour*60 + nowMinute;

			//如果时钟、分钟数小于10，在前面加0
			var nowHour2 = nowHour;
			if(nowHour<10){
				nowHour2 = "0" + nowHour2;
			}
			var nowMinute2 = nowMinute;
			if(nowMinute2<10){
				nowMinute2 = "0" + nowMinute2;
			}

			//添加右边时间列表
			var num = (end_minutes - start_minutes)/30;
			var showHour = startHour;
			var showMinute = startMinute;
			
			for(var i=0; i<=num; i++){
				showMinute = startMinute + 30*(i%2);
				if(showMinute==60){
					showMinute = 0;
					showHour = showHour + 1;
				}
				var showHour2 = showHour;
				var showMinute2 = showMinute;
				if(showHour2<10){
					showHour2 = "0" + showHour2;
				}
				if(showMinute2<10){
					showMinute2 = "0" + showMinute2;
				}
				$(".time_num").append("<p>"+showHour2+":"+showMinute2+"</p>");	
				if(i<num){
					$(".form_chart").append("<div class=\"top_line\">"+"<input  type=\"text\" />"+"</div>");	
				}
			}

			//判断当前时间是否在起止时间范围内
			if(now_minutes > start_minutes &&now_minutes < end_minutes){
				$(".dynamic_line").removeClass("hidden").css({"top":now_minutes-start_minutes});
				$(".time_now").removeClass("hidden").css({"top":now_minutes-start_minutes}).html(nowHour2+":"+nowMinute2);
			}else{
				$(".dynamic_line").addClass("hidden");
				$(".time_now").addClass("hidden");
			}
			
			$(":input").change(function(){
				$(this).addClass("input_bgcolor_red");
				if($(this).val()==""){
					$(this).removeClass("input_bgcolor_red");
				}
			});
		}	
		TimeLine("09:30:00","18:30:00");
	});

		//滑动开关
	$(document).ready(function(){
		function switchBox(parentbox,childbox1,childbox2){
			parentbox.bind("click",function(){
				if(parentbox.hasClass("parentbox2")){
					parentbox.removeClass("parentbox2");
					childbox1.removeClass("childbox1_2");
					childbox2.removeClass("childbox2_2");
				}else{
					parentbox.addClass("parentbox2");
					childbox1.addClass("childbox1_2");
					childbox2.addClass("childbox2_2");						
				}
			});	
		}
		var num=$(".parentbox1").length;
		for(var j=0; j<num; j++){
			var pbox = $(".parentbox1:eq("+j+")");
			var box1 = $(".childbox1_1:eq("+j+")");
			var box2 = $(".childbox2_1:eq("+j+")");
			switchBox(pbox,box1,box2);
		}		
	});


/*	
	function slideSwitch(elementid){
		var con = $("<div class=\"parentbox1\" id="+elementid+"><div class=\"childbox1_1\"></div><div class=\"childbox2_1\"></div></div>");
		$("#"+elementid).append(con);
		$("#"+elementid).children(".parentbox1").bind("click",function(){
			if($("#"+elementid).children(".parentbox1").hasClass("parentbox2")){
				$("#"+elementid).children(".parentbox1").removeClass("parentbox2");
				$("#"+elementid).children(".parentbox1").children(".childbox1_1").removeClass("childbox1_2");
				$("#"+elementid).children(".parentbox1").children(".childbox2_1").removeClass("childbox2_2");	
			}else{
				$("#"+elementid).children(".parentbox1").addClass("parentbox2");
				$("#"+elementid).children(".parentbox1").children(".childbox1_1").addClass("childbox1_2");
				$("#"+elementid).children(".parentbox1").children(".childbox2_1").addClass("childbox2_2");
			}
			
		});
	}
	slideSwitch("insertBtn");
*/	
	//tab选项卡切换（洗涤下单家政下单）
	$(document).ready(function(){
		function changeTab(tab,content){
			$(tab).each(function(i){
				$(this).click(function(){
					$(tab).removeClass("active");
					$(this).addClass("active");
					$(content).css({"display":"none"});
					$(content).eq(i).css({"display":"block"});
				})
			})
		}
		changeTab(".js_wh_tab",".js_wh_content");
	});	

/*	$(document).ready(function(){
		//参数为输入框选择器,单价,显示框选择器
		function whMoney(count,unitPrice){
			$(count).bind("blur",function(){
				var reg = /^\d+(\.\d)?$/g; 
				var reg2 = /^\d+$/g;
				var value = $(count).val();
				var total = value * unitPrice;
				if(!reg.test(value)&&!reg2.test(value)){
					count = $(count).val("");
				}else{
					$(".js_count").eq(0).html(value);
					$(".js_unitprice").eq(0).html(unitPrice);
					$(".js_totalprice").eq(0).html(total);
					$("#js_back_data").val(total);
				}				
			});
		}
		whMoney("#js_wash_value",50);
	});*/

	$(document).ready(function(){
		/*
		$(".js_h_tab").each(function(i){
			$(this).click(function(){
				$(".js_h_tab").removeClass("active");
				$(this).addClass("active");
				if(i == 0){
					$(".js_count_unit").html("小时");
					$(".js_unit").html("元/小时");
					$(".js_unitprice").html(50);
				}else{
					$(".js_count_unit").html("平方米");
					$(".js_unit").html("元/平方米");
					$(".js_unitprice").html(8);
				}
			});
		})*/
		function countPrice(){
			var price=50;
			var total=0;
			$(".js_h_tab").find("li").click(function(){
				$(".js_h_tab").find("li").removeClass("active");
				var th = $(this);
				th.addClass("active");
				price = th.data("price");
				/*var value = $(".js_wash_value").val();
				total = value * unitPrice;
				$(".js_totalprice").html(total);*/
				var unit = th.data("unit");	
				$(".js_unitprice").text(price);
				$(".js_count_unit").text(unit);
				$(".js_unit").text("元/"+unit);
				$("#js_hidden").val(total);
				$(".js_wash_value").blur();
			});
			$(".js_wash_value").bind("blur",function(){
				
				var reg = /^\d+(\.\d)?$/g; 
				var reg2 = /^\d+$/g;
				var value = $(".js_wash_value").val();
				total = value * price;
				if(!reg.test(value)&&!reg2.test(value)){
					$(".js_countunit_tip").css({"display":"block"});
					$(".js_wash_value").val("");
					
				}else{
					$(".js_countunit_tip").css({"display":"none"});
					$(".js_total_money").html('<span class="js_count"></span>&nbsp;小时&nbsp;×&nbsp;<span class="js_unitprice"></span>&nbsp;<span class="js_unit">元/小时</span>&nbsp;=&nbsp;<span class="js_totalprice  color_red fsize16"></span>&nbsp;元');
					$(".js_count").text(value);
					$(".js_unitprice").text(price);
					$(".js_totalprice").text(total);
					$("#js_hidden").val(total);
				}				
			});
		}
		countPrice();
		
	});
})();