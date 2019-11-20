(function(ctx,$){
	var initial_popin = {
		content : {
			title:"Sautez le pas!",
			content:"Lorem ipsum",
			link:"https://www.adam-parent.com",

		},
		options:{
			persistent : false
		},

		init : function(){
			if(initial_popin.options.persistent == false){

				if(sessionStorage.getItem('persist_initial_popin')){
					return

				}
			}
			initial_popin.generate();
		},
		generate : function(){
			var core_html_v2 = "<div class='popin_initial slide-left'> <div class='popin_initial__icon'><div class='bg_contain'></div></div><div class='popin_initial__content'> <p class='popin_initial__type'>"+initial_popin.content.title+"</p><p class='popin_initial__message'>"+initial_popin.content.content+" <a class='popin_initial_link' href="+initial_popin.content.link+">c' est ici que ça se passe</a></p></div><div class='popin_initial__close'> <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.642 15.642' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 15.642 15.642'> <path fill-rule='evenodd' d='M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061 c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061 l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541 l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z'></path></svg> </div></div>"

			$('body').prepend(core_html_v2);

			$('.popin_initial__close').on('click',function(e){
				e.preventDefault();
				if(initial_popin.options.persistent == false){
					sessionStorage.setItem('persist_initial_popin',1)

				}
				var parent = $(this).parent('.popin_initial');
				parent.fadeOut("slow", function() { $(this).remove(); } );
			});
		},
	}

	ctx.initial_popin = initial_popin;
})(window, jQuery)