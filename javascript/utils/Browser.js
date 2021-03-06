export default class Browser {
	static get browser() {
		const userAgent = navigator.userAgent;

		if (userAgent.match(/chrome|chromium|crios/i)) {
			return 'chrome';
		} else if (userAgent.match(/safari/i)) {
			return 'safari';
		} else if (userAgent.match(/edg/i)) {
			return 'edge';
		} else if (userAgent.match(/firefox|fxios/i)) {
			return 'firefox';
		} else if (userAgent.match(/opr\//i)) {
			return 'opera';
		} else {
			return 'No browser detection';
		}
	}

	static get dark() {
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	static devtools = {
		firefox: {
			dark: {
				font_default: '#D7D7DB',
				font_dark: '#929295',
				font_warn: '#FCE2A1',
				font_error: '#FFB3D2',
				background_default: '#222227',
				background_warn: '#42391E',
				background_error: '#4A2E36',
				splitter: '#38393C'
			}
		},
		chrome: {
			dark: {
					font_default: '#E8EAED',
					font_dark: '#81878B',
					font_warn: '#F3AA26',
					font_error: '#FF8181',
					background_default: '#202124',
					background_warn: '#322B01',
					background_error: '#280001',
					splitter: '#3B3B3A'
			}
		},
		get font_default() {
			return Browser.dark ?
				this[Browser.browser].dark.font_default : '#FFFFFF';
		},
		get font_dark() {
			return Browser.dark ?
				this[Browser.browser].dark.font_dark : '#FFFFFF';
		},
		get font_warn() {
			return Browser.dark ?
				this[Browser.browser].dark.font_warn : '#FFFFFF';
		},
		get font_error() {
			return Browser.dark ?
				this[Browser.browser].dark.font_error : '#FFFFFF';
		},
		get background_default() {
			return Browser.dark ?
				this[Browser.browser].dark.background_default : '#FFFFFF';
		},
		get background_warn() {
			return Browser.dark ?
				this[Browser.browser].dark.background_warn : '#FFFFFF';
		},
		get background_error() {
			return Browser.dark ?
				this[Browser.browser].dark.background_error : '#FFFFFF';
		},
		get splitter() {
			return Browser.dark ?
				this[Browser.browser].dark.splitter : '#FFFFFF';
		}
	}
};
