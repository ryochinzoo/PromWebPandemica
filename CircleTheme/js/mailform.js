
$(function(){
	
	var mailform_dt = $('#mail_form dl dt');
	
	for(var i=0; i<mailform_dt.length-1; i++){
		if( mailform_dt.eq(i).next('dd').attr('class') == 'required' ){
			$('<span/>')
				.text('必須')
				.addClass('required')
				.prependTo($(mailform_dt.eq(i)));
			$('<span/>')
			  .appendTo(mailform_dt.eq(i).next('dd'));
		}else{
			$('<span/>')
				.text('任意')
				.addClass('optional')
				.prependTo($(mailform_dt.eq(i)));
		}
	}
	
	
	
	
	$('#mail_submit_button').click(required_check);
	
	
	
	
	function slice_method(dt){
		var span_start = dt.html().indexOf('</span>');
		var span_end = dt.html().lastIndexOf('<span');
		var dt_name = dt.html().slice(span_start+7, span_end);
		return dt_name;
	}
	
	
	
	
	function required_check(){
		
		var error = 0;
		var scroll_point = 0;
		
		
		if( $('.required').length ){
		
			for(var i=0; i<12; i++){
				eval("var check_"+ i +"= true;");
				eval("var error_point_"+ i +"= 0;");
			}
			
			if( $('.required').children('input#name_1').length ){
				var element = $('.required').children('input#name_1');
				var element_2 = $('.required').children('input#name_2');
				if( element.val() == '' && element_2.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_0 = false;
					error_point_0 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#read_1').length ){
				element = $('.required').children('input#read_1');
				element_2 = $('.required').children('input#read_2');
				if( element.val() == '' && element_2.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_1 = false;
					error_point_1 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#mail_address').length ){
				element = $('.required').children('input#mail_address');
				if( element.val() == '' ){
					element.nextAll('span').text('メールアドレスが入力されていません。');
					check_2 = false;
					error_point_2 = element.offset().top;
				}else{
					if( !(element.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) ){
						element.nextAll('span').text('正しいメールアドレスの書式ではありません。');
						check_2 = false;
						error_point_2 = element.offset().top;
					}else{
						element.nextAll('span').text('');
					}
				}
			}
			
			
			if( $('.required').children('input#mail_address_confirm').length ){
				element = $('.required').children('input#mail_address_confirm');
				element_2 = $('input#mail_address');
				if( element.val() == '' ){
					element.nextAll('span').text('確認用のメールアドレスが入力されていません。');
					check_3 = false;
					error_point_3 = element.offset().top;
				}else{
					if( element.val() !== element_2.val() ){
						element.nextAll('span').text('メールアドレスが一致しません。');
						check_3 = false;
						error_point_3 = element.offset().top;
					}else{
						if( !(element.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) ){
							element.nextAll('span').text('正しいメールアドレスの書式ではありません。');
							check_3 = false;
							error_point_3 = element.offset().top;
						}else{
							element.nextAll('span').text('');
						}
					}
				}
			}
			
			
			if( $('.required').find('input#gender_1').length ){
				var gender_error = 0;
				var element = $('.required').find('input#gender_1');
				var gender_li = element.parents('ul').children('li');
				
				for(var i=1; i<gender_li.length+1; i++){
					eval("var gender_element_"+ i +" = gender_li.find('input#gender_"+ i +"');");
					
					if(eval("gender_element_"+ i +".is(':checked') == ''")){
						gender_error++;
					}
				}
				
				if(gender_error == gender_li.length){
					var dt_name = slice_method(element.parents('dd').prev('dt'));
					element.parents('dd').find('span').text(dt_name +'が選択されていません。');
					check_4 = false;
					error_point_4 = element.offset().top;
				}else{
					element.parents('dd').find('span').text('');
				}
			}
			
			
			if( $('.required').children('input#postal').length ){
				element = $('.required').children('input#postal');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_5 = false;
					error_point_5 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#address_1').length ){
				element = $('.required').children('input#address_1');
				element_2 = $('.required').children('input#address_2');
				if( element.val() == '' && element_2.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_6 = false;
					error_point_6 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#phone').length ){
				element = $('.required').children('input#phone');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_7 = false;
					error_point_7 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#day').length ){
				element = $('.required').children('input#day');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_8 = false;
					error_point_8 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('select#product').length ){
				element = $('.required').children('select#product');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が選択されていません。');
					check_9 = false;
					error_point_9 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').find('input#kind_1').length ){
				var kind_error = 0;
				var element = $('.required').find('input#kind_1');
				var kind_li = element.parents('ul').children('li');
				
				for(var i=1; i<kind_li.length+1; i++){
					eval("var kind_element_"+ i +" = kind_li.find('input#kind_"+ i +"');");
					
					if(eval("kind_element_"+ i +".is(':checked') == ''")){
						kind_error++;
					}
				}
				
				if(kind_error == kind_li.length){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.parents('dd').find('span').text(dt_name +'が選択されていません。');
					check_10 = false;
					error_point_10 = element.offset().top;
				}else{
					element.parents('dd').find('span').text('');
				}
				
			}
			
			
			if( $('.required').children('textarea#mail_contents').length ){
				element = $('.required').children('textarea#mail_contents');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'が入力されていません。');
					check_11 = false;
					error_point_11 = element.offset().top;
				}else{
					element.nextAll('span').text('');
				}
			}
			
		}
		
		
		for(var i=11; i>=0; i--){
			if( eval("check_"+ i +" == false") ){
				error++;
			}
			if( eval("error_point_"+ i +" !=0") ){
				eval("scroll_point = error_point_"+ i +";");
			}
		}
		
		
		if(error == 0){
			if(window.confirm('送信してもよろしいですか？')){
				return true;
			}else{
				return false;
			}
		}else{
  	  $('html,body').animate({
  	    scrollTop : scroll_point-50
  	  }, 500);
			return false;
		}
	
	}
	
});
