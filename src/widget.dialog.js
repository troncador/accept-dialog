(function($){
$.widget( "tr.acceptDialog", {
	version: "0.0.1",
	options : {
			  acceptFunction : function(){}
			, acceptTextButton : "Aceptar"
			, cancelTextButton : "Cancelar"
			, messageSelector : "#save-dialog-confirm"
			, height:200
	},
	_handleEvents: {
        'click': function(event) {
        	event.preventDefault();
        	var $selector = $(this.option("messageSelector"))
        		, currentTarget = event.currentTarget
        	;
        	$selector.data('event', currentTarget)
        		.dialog(this.options)
        		.dialog("open")
        	;
        }
     },
    _init: function(){		
		var selector = this.option("messageSelector")
		, acceptTextButton = this.option("acceptTextButton")
		, acceptFunction = this.option("acceptFunction")
		, cancelTextButton = this.option("cancelTextButton")
		;
 		

		$(selector).hide();
		
		var customOption =
			{
				autoOpen: false,
				resizable : false,
				modal : true,
				buttons : [
				    {
				    	text: acceptTextButton,
				    	click:  function(){
				    		var self = $(this)
				    		 , event = self.data('event')
				    		;
				    		self.dialog("close");
					       	acceptFunction(event);
					    }
				    },
				    {
				    	text: cancelTextButton,
				    	click: function() {
							$(this).dialog("close");
						}
				    }		    
				 ]
			};
		this.options = jQuery.extend(customOption, this.options);
		this._on(this.element, this._handleEvents);
	}
});
})(jQuery);
