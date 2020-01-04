$(document).ready (function () {
var oneLegitDay = 3.3;											//	price for 1 day for legit
var oneRageDay = 7;											//	price for 1 day for rage (LOOOOOOOOOOOOOOL)
var msd = 360;											//	max subscription days
var md = 50;											//	max discount


/*
                                                                                          
                                                                                          
`7MM"""Mq.  `7MM"""YMM    .g8"""bgd  `7MMF' .M"""bgd MMP""MM""YMM `7MM"""YMM  `7MM"""Mq.  
  MM   `MM.   MM    `7  .dP'     `M    MM  ,MI    "Y P'   MM   `7   MM    `7    MM   `MM. 
  MM   ,M9    MM   d    dM'       `    MM  `MMb.          MM        MM   d      MM   ,M9  
  MMmmdM9     MMmmMM    MM             MM    `YMMNq.      MM        MMmmMM      MMmmdM9   
  MM  YM.     MM   Y  , MM.    `7MMF'  MM  .     `MM      MM        MM   Y  ,   MM  YM.   
  MM   `Mb.   MM     ,M `Mb.     MM    MM  Mb     dM      MM        MM     ,M   MM   `Mb. 
.JMML. .JMM..JMMmmmmMMM   `"bmmmdPY  .JMML.P"Ybmmd"     .JMML.    .JMMmmmmMMM .JMML. .JMM.
                                                                                          
                                                                                          
*/
		//***********************//
	//****REGISTER v1.2.1****//
//***********************// 

	$("#register").bind("click", function(){
		$.ajax({
			url: "/?ajax=register",
			type: "POST",
			data: ({
				reg_name: $("#reg_name").val(),
				reg_email: $("#reg_email").val(),
				reg_password: $("#reg_password").val(),
				reg_password_again: $("#reg_password_again").val(),
			}),
			dataType: "html",
			success: function (data){
				$("#msg").html (data);
			}
		})
	})

	$("#save_hwid").bind("click", function(){
		$.ajax({
			url: "/?ajax=change&hwid",
			type: "POST",
			// data: ({
			// 	hwid_inp: $("#hwid_inp").val(),
			// }),
			dataType: "html",
			success: function (data){
				$("#msg").html (data);
			}
		})
	})

	$('#reg').keypress(function(e) {
		if(e.which == 13) {
			jQuery(this).blur();
			jQuery('#register').focus().click();
		}
	});

/*
                                                         
                                                         
`7MMF'        .g8""8q.     .g8"""bgd  `7MMF'`7MN.   `7MF'
  MM        .dP'    `YM. .dP'     `M    MM    MMN.    M  
  MM        dM'      `MM dM'       `    MM    M YMb   M  
  MM        MM        MM MM             MM    M  `MN. M  
  MM      , MM.      ,MP MM.    `7MMF'  MM    M   `MM.M  
  MM     ,M `Mb.    ,dP' `Mb.     MM    MM    M     YMM  
.JMMmmmmMMM   `"bmmd"'     `"bmmmdPY  .JMML..JML.    YM  
                                                         
                                                         
*/
		//********************//
	//****LOGIN v1.2.1****//
//********************//

	$("#login").bind("click", function(){
		$.ajax({
			url: "/?ajax=login",
			type: "POST",
			data: ({
				name: $("#name").val(),
				password: $("#password").val(),
				remember_me: $("#remember_me").val(),
			}),
			dataType: "html",
			success: function (data){
				$("#msg").html (data);
			}
		})
	})

	$('#auth').keypress(function(e) {
		if(e.which == 13) {
			jQuery(this).blur();
			jQuery('#login').focus().click();
		}
	});


/*
                                                                    
                                                                    
`7MMM.     ,MMF'  .g8""8q.   `7MM"""Yb.         db      `7MMF'      
  MMMb    dPMM  .dP'    `YM.   MM    `Yb.      ;MM:       MM        
  M YM   ,M MM  dM'      `MM   MM     `Mb     ,V^MM.      MM        
  M  Mb  M' MM  MM        MM   MM      MM    ,M  `MM      MM        
  M  YM.P'  MM  MM.      ,MP   MM     ,MP    AbmmmqMA     MM      , 
  M  `YM'   MM  `Mb.    ,dP'   MM    ,dP'   A'     VML    MM     ,M 
.JML. `'  .JMML.  `"bmmd"'   .JMMmmmdP'   .AMA.   .AMMA..JMMmmmmMMM 
                                                                    
                                                                    
*/
		//********************//
	//****MODAL v2.0.0****//
//********************//

	function closeModal() {
		$('.modal-show').removeClass("modal-show");
		$("body").css("overflow","");
		$('.error').removeClass('error');
	}

	function openModal(get) {
		var target = $(get).data('target');
		$('.modal-show').removeClass("modal-show");
		$(target).addClass("modal-show");
		$("body").css("overflow","hidden");
	}

	function initModal() {
		$("[href*=open-modal]").click(function(){
			openModal(this);
		});
		$(".modal-close").click(function(){
			closeModal();
		});
	}

	$('a[href="#togglePass"]').on('click', function() {
		var type = $('#' + $(this).data('toggle')).attr('type') == "text" ? "password" : 'text';
		$('#' + $(this).data('toggle')).attr('type', type);
		var clas = $($(this).children()).hasClass('icon-eye-off-outline') ? "icon-eye-outline" : "icon-eye-off-outline";
		$($(this).children()).removeAttr('class').addClass(clas);
	})

	function windowOnClick(event) {
		if (event.target == document.querySelector(".modal")) {
				closeModal();
		}
	}

	initModal();
	// window.addEventListener("click", windowOnClick);
	// jQuery(function($){
	// 	$(document).mouseup(function(e) { // событие клика по веб-документу
	// 		var div = $(".modal-content"); // ID элемента
	// 		if (!div.is(e.target) // если клик был не по элементу
	// 				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
	// 			closeModal(); // Закрываем 
	// 		}
	// 	});
	// });
	$('.modal').on('click', function(e) {
		if(this == e['target']) {
			closeModal();
		}
	})

/*
                                                                              
                                                                              
`7MN.   `7MF'      db      `7MMF'   `7MF'`7MM"""Yp,       db      `7MM"""Mq.  
  MMN.    M       ;MM:       `MA     ,V    MM    Yb      ;MM:       MM   `MM. 
  M YMb   M      ,V^MM.       VM:   ,V     MM    dP     ,V^MM.      MM   ,M9  
  M  `MN. M     ,M  `MM        MM.  M'     MM"""bg.    ,M  `MM      MMmmdM9   
  M   `MM.M     AbmmmqMA       `MM A'      MM    `Y    AbmmmqMA     MM  YM.   
  M     YMM    A'     VML       :MM;       MM    ,9   A'     VML    MM   `Mb. 
.JML.    YM  .AMA.   .AMMA.      VF      .JMMmmmd9  .AMA.   .AMMA..JMML. .JMM.
                                                                              
                                                                              
*/
		//*********************//
	//****NAVBAR v2.1.1****//
//*********************//

	function closeMenu() {
		$('.dropdown-show').removeClass("dropdown-show");
	};

	function openMenu(get) {
		var dropdown = '#' + $(get).data('dropdown');
		
		if($(dropdown).hasClass('dropdown-show') == true) {
			$(dropdown).removeClass("dropdown-show");
		} else {
			closeMenu();
			$(dropdown).addClass("dropdown-show");
		}
	};

	function toggleNav(get) {
		closeMenu();
		$( "#" + $(get).data('toggle') ).slideToggle(300);
	};

	$(window).on('resize', function(){
		var win = $(this); //this = window
		if(win.width() >= 767) {
			$('#open-navbar1').css('display', 'block');
		}
		initScroll();
	});

	function initMenu() {
		$('.nav-toggle').click(function() { toggleNav(this) });
		$("[id*=openCategories]").click(function() { openMenu(this) });
	};

	initMenu();

	function initScroll() {
		var distanceTop = $('header').height() - $('.nav').innerHeight();
		if  ($(window).scrollTop() >= distanceTop) {
			$('.nav').addClass('navbar-color'); 
		} else {
			$('.nav').removeClass('navbar-color'); 
		}
	};
	initScroll();
	$(window).scroll(function(){
		closeMenu();
		initScroll();
	});

	jQuery(function($){
		$(document).mouseup(function(e) { // событие клика по веб-документу
			var div = $(".categories"); // ID элемента
			if (!div.is(e.target) // если клик был не по элементу
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				closeMenu(); // Закрываем 
			}
		});
	});

		//*******************//
	//****CARD v1.0.0****//
//*******************//

	$('a[href*=help_]').bind('click', function(e) {
		$($(this).attr('href')).slideToggle(300);
	})

		//******************//
	//****CFG v1.0.0****//
//******************//

	$('#chat').on('click', 'a[href*="#getcfg"]', function() {
		$.ajax({
			url: "/ajax.php?getcfg",
			type: "POST",
			data: ({
				code: $(this).data('code'),
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data);
			}
		})
	})

	$('#cfgs').on('keypress', '.config__name', function(e) {
		if(e.which == 13) {
			console.log(this);
		}
	});

	$('#cfgs').on('click', 'a[href="#editConfig"]', function() {
		$('#' + $(this).data('name')).html('<input type="text" name="cfgname" class="clear" value="' + $('#' + $(this).data('name')).text() + '">')
	})

		//*******************//
	//****CHAT v1.0.0****//
//*******************//

	$('#chat').on('click', 'a[href*="#del"]', function() {
		$.ajax({
			url: "/?ajax=chat&del",
			type: "POST",
			data: ({
				id: $(this).data('id'),
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data);
			}
		})
	})

	$('#chat').on('click', 'a[href*="#mute"]', function() {
		$.ajax({
			url: "/ajax.php?chat&mute",
			type: "POST",
			data: ({
				name: $(this).data('name'),
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data);
			}
		})
	})

		//***********************//
	//****SETTINGS v1.0.0****//
//***********************//

	$('#changePass').on('click', function() {
		$.ajax({
			url: "/?ajax=change&pass",
			type: "POST",
			data: ({
				old: $('#oldPass').val(),
				new: $('#newPass').val(),
				newAgain: $('#newPassAgain').val(),
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data);
			}
		})
	})

	$('#changeEmail').on('click', function() {
		$.ajax({
			url: "/?ajax=change&mail",
			type: "POST",
			data: ({
				pass: $('#passEmail').val(),
				newEmail: $('#newEmail').val(),
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data);
			}
		})
	})

	$('#upload').on('click', function() {
		var file_data = $('#uploadavatar').prop('files')[0];   
		var form_data = new FormData();

var file_data = $('#uploadavatar').prop('Files');
var from_data = new FormData();
from_data.append('File', file_data);
console.log(from_data) ;
		form_data.append('file', file_data);                           
		$.ajax({
		    url: "/?ajax=change&avatar",
		    dataType: "html",
		    cache: false,
		    contentType: false,
		    processData: false,
		    data: form_data,
		    type: "POST",
			success: function (data){
				$("#msg").html (data);
			}
		 })
	})


/*
                                                               
                                                               
`7MM"""Mq. `7MM"""Mq.  `7MMF'  .g8"""bgd `7MM"""YMM   .M"""bgd 
  MM   `MM.  MM   `MM.   MM  .dP'     `M   MM    `7  ,MI    "Y 
  MM   ,M9   MM   ,M9    MM  dM'       `   MM   d    `MMb.     
  MMmmdM9    MMmmdM9     MM  MM            MMmmMM      `YMMNq. 
  MM         MM  YM.     MM  MM.           MM   Y  , .     `MM 
  MM         MM   `Mb.   MM  `Mb.     ,'   MM     ,M Mb     dM 
.JMML.     .JMML. .JMM..JMML.  `"bmmmd'  .JMMmmmmMMM P"Ybmmd"  
                                                               
                                                               
*/
		//*********************//
	//****PRICES v3.4.2****//
//*********************//

// last edit by F1oth3r0, added promo system. v3.4.3

	var subscription = $("[id=subscription]");
	var range = $("[id=daysRange]");
	var days = $("[id=days]");
	var output = $("[id=price]>span");
	var sale = $("[id=sale]>span");
	var config = $("[id=config]");
	var promo = $("[id=promo]");// ????????????????
	var discount, prices, oneDay;
	var dfd = msd / md;												//   days for discount

	// ВСЯ МОТЕМАТИКА И ГЕОМЕТРИЯ НА JS........... кодер дебил

	$("[id*=days]").attr("max", msd);
	function outputPrice() {
		if (subscription.val() == 'legit') {
			oneDay = oneLegitDay;
			discount = 1;
		} else if (subscription.val() == 'rage') {
			oneDay = oneRageDay;
			discount = (100 - Math.floor(days.val() / dfd)) / 100;
		}
		prices = (oneDay * days.val() * discount).toFixed(2);
		sale.text(Math.round(100 - discount * 100));
		output.text(prices);
	}
	setTimeout(function() { outputPrice() },500);

	subscription.on('input', function() {
		$(".buy-img").attr("src", "assets/img/buy-" + subscription.val() + ".png");
		outputPrice();
	});
	range.on('input', function() {
		days.val(range.val())
		outputPrice();
	});

	days.on('input', function() {
		if (days.val() > 360) {
			days.val(360);
		}
		if (days.val() < 7 && days.val() != '') {
			days.val("7");
		}
		range.val(days.val())
		outputPrice();
	});

		//*******************//
	//****BUY v1.0.0*****//
//*******************//
	$("#buy-btn").bind("click", function(){
		$.ajax({
			url: "/?ajax=pay&pay",
			type: "POST",
			data: ({
				days: $("#days").val(),
				subscription: subscription.val()
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data); 
			}
		})
	})

	$("#test").bind("click", function(){
		$.ajax({
			url: "/?ajax=payment&promo",
			type: "POST",
			data: ({
				promocode: $("#promocode").val(),
			}),
			dataType: "html",
			success: function(data) {
				$("#msg").html(data); 
			}
		})
	})



/*
                                                                                                   
                                                                                                   
  .g8"""bgd       db      `7MM"""Mq.    .g8""8q.   `7MMF'   `7MF' .M"""bgd `7MM"""YMM  `7MMF'      
.dP'     `M      ;MM:       MM   `MM. .dP'    `YM.   MM       M  ,MI    "Y   MM    `7    MM        
dM'       `     ,V^MM.      MM   ,M9  dM'      `MM   MM       M  `MMb.       MM   d      MM        
MM             ,M  `MM      MMmmdM9   MM        MM   MM       M    `YMMNq.   MMmmMM      MM        
MM.            AbmmmqMA     MM  YM.   MM.      ,MP   MM       M  .     `MM   MM   Y  ,   MM      , 
`Mb.     ,'   A'     VML    MM   `Mb. `Mb.    ,dP'   YM.     ,M  Mb     dM   MM     ,M   MM     ,M 
  `"bmmmd'  .AMA.   .AMMA..JMML. .JMM.  `"bmmd"'      `bmmmmd"'  P"Ybmmd"  .JMMmmmmMMM .JMMmmmmMMM 
                                                                                                   
                                                                                                   
*/
		//************************//
	//****CAROUSEL v1.4.0*****//
//************************//

	setInterval( function() {$('.header').toggleClass('bg2').toggleClass('bg1')}, 5000);

	function nextSlide(slide, get) {
		if (slide == 0) {
			var slide = $(get).data('slide');
		}
		var slideClass1 = "carousel-item-" + slide;
		var active = $('.active');
		if(slide == 'prev') {
			var slideClass2 = 'carousel-item-right';
			var nextSlide = active.prev().length ? 
				active.prev() :
				active.siblings().last();		// if index == false then show last img
		} else {
			var slideClass2 = 'carousel-item-left';
			var nextSlide = active.next().length ? 
				active.next() :
				active.siblings().first();	// if index == false then show first img
		};
		active.addClass(slideClass2);
		$(nextSlide).addClass(slideClass2 + " " + slideClass1);
		
		setTimeout(function() {
			active.removeClass(slideClass2);
			active.removeClass('active');
			$(nextSlide).addClass('active');
			$(nextSlide).removeClass(slideClass2 + " " + slideClass1);
			clearTimeout(timerId);
			timerSlide();
		}, 600);
	};

	function timerSlide() {
		timerId = setTimeout(function() { nextSlide('next', 0) }, 5000);
	}

	timerSlide();
	$('[href*=carouselExampleFade]').bind("click", function(e) { nextSlide(0, this); });


	if($(".chat-items")[0] != undefined) {
		$(".chat-items").scrollTop($(".chat-items")[0].scrollHeight);
	}

	$('body').on('click', 'a[href*="#"]', function(e) {
    var anchor = $(this);
		if(anchor.attr('href') == '#buy') {
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-100
			}, 0);
			e.preventDefault();
		} else {
      e.preventDefault();
      return false;
		}
  });
})


/* Powered by Malianchik for


ooo        ooooo   .oooo.                           .oooo.   ooooo      ooo 
`88.       .888'  d8P'`Y8b                         d8P'`Y8b  `888b.     `8' 
 888b     d'888  888    888 ooo. .oo.    .ooooo.  888    888  8 `88b.    8  
 8 Y88. .P  888  888    888 `888P"Y88b  d88' `88b 888    888  8   `88b.  8  
 8  `888'   888  888    888  888   888  888ooo888 888    888  8     `88b.8  
 8    Y     888  `88b  d88'  888   888  888    .o `88b  d88'  8       `888  
o8o        o888o  `Y8bd8P'  o888o o888o `Y8bod8P'  `Y8bd8P'  o8o        `8  
                                                                                                                                                   
                                                                            
*/
                                                  