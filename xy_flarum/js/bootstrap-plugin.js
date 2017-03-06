
// 0 表示永不超时，
$.alert = function(subject, timeout, options) {
	var options = options || {};
	var t = timeout || 2;
	var s = '\
	<div class="ModalManager modal fade" tabindex="-1" role="dialog">\
		<div class="Modal modal-dialog Modal--small">\
			<div class="Modal-content">\
				<div class="Modal-close App-backControl">\
	                <button class="Button Button--icon Button--link hasIcon close" type="button" data-dismiss="modal" aria-label="Close">\
	                    <i class="icon fa fa-fw fa-times Button-icon"></i>\
	                </button>\
	            </div>\
				<div class="Modal-header">\
					<h3 class="App-titleControl App-titleControl--text">'+lang.tips_title+'</h3>\
				</div>\
				<div class="Modal-body">\
					<h2>'+subject+'</h2>\
				</div>\
				<div class="Modal-footer">\
					<button type="button" class="Button Button--primary" data-dismiss="modal">'+lang.close+'</button>\
				</div>\
			</div>\
		</div>\
	</div>';
	var jmodal = $(s).appendTo('body');
	jmodal.modal('show');
	if(timeout != 0) {
		setTimeout(function() {
			jmodal.modal('hide');
		}, t * 1000);
	}
	
	// 方便连续操作，实际没有意义。
	return $('body');
}

$.confirm = function(subject, ok_callback, options) {
	var options = options || {};
	options.body = options.body || '';
	var title = options.body ? subject : lang.confirm_title+':';
	var subject = options.body ? '' : '<p>'+subject+'</p>';
	var t = options.timeout || 3;
	var s = '\
	<div class="ModalManager modal fade" tabindex="-1" role="dialog">\
		<div class="Modal modal-dialog Modal--small">\
			<div class="Modal-content">\
				<div class="Modal-close App-backControl">\
	                <button class="Button Button--icon Button--link hasIcon close" type="button" data-dismiss="modal" aria-label="Close">\
	                    <i class="icon fa fa-fw fa-times Button-icon"></i>\
	                </button>\
	            </div>\
	            <div class="Modal-header">\
					<h3 class="App-titleControl App-titleControl--text">'+title+'</h3>\
				</div>\
				<div class="Modal-body center">\
					'+subject+'\
					'+options.body+'\
				</div>\
				<div class="Modal-footer">\
					<button type="button" class="Button Button--primary">'+lang.confirm+'</button>\
					<button type="button" class="Button" data-dismiss="modal">'+lang.close+'</button>\
				</div>\
			</div>\
		</div>\
	</div>';
	var jmodal = $(s).appendTo('body');
	jmodal.find('.Modal-footer').find('.Button--primary').on('click', function() {
		jmodal.modal('hide');
		if(ok_callback) ok_callback();
	});
	jmodal.modal('show');
}

