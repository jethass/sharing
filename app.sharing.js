App.Sharing = App.Sharing || {};

/**
 * Class de partage sur les réseaux sociaux
 * @requires jQuery 1.8+
 */
App.Sharing = (function() {

	/**
	 * Définit si une requête AJAX est en cours d'execution, ou non
	 * @type boolean
	 */
	this.inAjaxProcess = false;

	/**
	 * Définit si la boite de dialogue de partage par mail est ouverte, ou non
	 * @type boolean
	 */
	this.shareMailOpened = false;

	/**
	 * Initilisation des routines de partage d'un article sur les différents réseaux sociaux
	 * @returns {App.Sharing}
	 */
	this._init = function() {
		var _this = this;

		_this.initMail(jQuery(".jqEmail"));
		_this.initTwitter(jQuery(".jqTwitter"));
		_this.initFacebook(jQuery(".jqFacebook"));
		_this.initViadeo(jQuery(".jqViadeo"));
		_this.initLinkedIn(jQuery(".jqLinkedin"));
		_this.initPrint(jQuery(".jqPrint"));

		return _this;
	};

	
	/**
	 * Pose un event et les routines qui vont bien pour le partager l'article en cours par imprimer
	 * @param {Object} element L'élément du DOM sur lequel poser l'évènement
	 * @returns {App.Sharing}
	 */
	
	this.initPrint = function(element) {
		var _this = this;

		element.click(function(e) {
			e.preventDefault();			
			print();
		});

		return _this;
	};
	
	/**
	 * Pose un event et les routines qui vont bien pour le partager l'article en cours par e-mail
	 * @param {Object} element L'élément du DOM sur lequel poser l'évènement
	 * @returns {App.Sharing}
	 */
	
	this.initMail = function(element) {
		var _this = this;

		element.click(function(e) {
			e.preventDefault();

			jQuery("#envoieArticleReaction").removeClass('invisible');
			jQuery("#envoieArticleReaction").addClass('visible');
		});

		return _this;
	};

	/**
	 * Pose un event et les routines qui vont bien pour le partager l'article en cours sur Twitter
	 * @param {Object} element L'élément du DOM sur lequel poser l'évènement
	 * @returns {App.Sharing}
	 */
	this.initTwitter = function(element) {
		var _this = this;

		element.click(function(e) {
			e.preventDefault();
			window.open("https://twitter.com/home?status=" + encodeURI(jQuery(this).attr("data-title") + " " + window.location.href) + " via @argusassurance", "Partager_sur_Twitter", _this._getPopupOptions(600, 300));
		});

		return _this;
	};

	/**
	 * Pose un event et les routines qui vont bien pour le partager l'article en cours sur Facebook
	 * @param {Object} element L'élément du DOM sur lequel poser l'évènement
	 * @returns {App.Sharing}
	 */
	this.initFacebook = function(element) {
		var _this = this;

		element.click(function(e) {
			e.preventDefault();
			window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location.href), "sharing_facebook", _this._getPopupOptions(600, 300));
		});

		return _this;
	};

	/**
	 * Pose un event et les routines qui vont bien pour le partager l'article en cours sur Viadeo
	 * @param {Object} element L'élément du DOM sur lequel poser l'évènement
	 * @returns {App.Sharing}
	 */
	this.initViadeo = function(element) {
		var _this = this;

		element.click(function(e) {
			e.preventDefault();
			window.open("http://www.viadeo.com/shareit/share/?url=" + encodeURI(window.location.href), "sharing_viadeo", _this._getPopupOptions(1200, 600));
		});

		return _this;
	};

	/**
	 * Pose un event et les routines qui vont bien pour le partager l'article en cours sur LibkedIn
	 * @param {Object} element L'élément du DOM sur lequel poser l'évènement
	 * @returns {App.Sharing}
	 */
	this.initLinkedIn = function(element) {
		var _this = this;

		element.click(function(e) {
			e.preventDefault();
			window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURI(window.location.href) + "&title=" + encodeURI(jQuery(this).attr("data-title")) + "&source=" + jQuery(this).attr('data-source') + "&summary=" + encodeURI(jQuery(this).attr('data-summary')), "sharing_linked_in", _this._getPopupOptions(650, 600));
		});

		return _this;
	};

	/**
	 * Retourne la string de paramètres pour l'ouverture d'une nouvelle page
	 * @param {Number} width
	 * @param {Number} height
	 * @returns {String}
	 */
	this._getPopupOptions = function(width, height) {
		return "height=" + height + ", width=" + width + ", toolbar=no, menubar=yes, location=no, resizable=yes, scrollbars=no, status=no"
	}

	this._init();
})();
