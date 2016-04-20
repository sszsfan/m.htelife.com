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
})();