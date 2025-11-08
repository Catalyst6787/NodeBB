'use strict';

define('forum/account/collection', ['forum/account/header'], function (header) {
	const AccountCollection = {};

	AccountCollection.init = function () {
		header.init();

		$('#collectionVisibility').on('change', function () {
			const isPublic = $(this).is(':checked');
			const uid = ajaxify.data.uid;

			$.post('/api/user/' + uid + '/collection/visibility', {
				_csrf: config.csrf_token,
				isPublic: isPublic
			}).done(function () {
				app.alertSuccess('Visibilité mise à jour');
			}).fail(function () {
				app.alertError('Erreur lors de la mise à jour');
			});
		});
	};

	return AccountCollection;
});

