function init() {
	;(document.siteName = $('title').html()),
		$('body').addClass(
			`mdui-theme-primary-${UI.main_color} mdui-theme-accent-${UI.accent_color}`
		)
	let e = `\n<header class="mdui-appbar mdui-color-theme">\n  <div id="nav" class="mdui-toolbar mdui-container${
		UI.fluid_navigation_bar ? '-fluid' : ''
	} ${
		UI.dark_mode ? 'mdui-text-color-white-text' : ''
	}">\n  </div>\n</header>\n<div id="content" class="mdui-container">\n</div>\n\t`
	$('body').html(e)
}
document.write(
	'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdui/1.0.1/css/mdui.min.css" integrity="sha512-x4mi26uahzsFv2+ZklhOELAiuLt2e+hSxQ/SWbW/FuZWZJSc4Ffb33Al7SmPqXXyZieN2rNxBiDsRqAtGKsxUA==" crossorigin="anonymous" />'
),
	document.write(
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.0.4/markdown-it.min.js" integrity="sha512-0DkA2RqFvfXBVeti0R1l0E8oMkmY0X+bAA2i02Ld8xhpjpvqORUcE/UBe+0KOPzi5iNah0aBpW6uaNNrqCk73Q==" crossorigin="anonymous" async></script>'
	),
	document.write(
		'<link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&display=swap">'
	),
	document.write(
		"<style>* body{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-selected{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-menu{font-family: 'Noto Sans TC', sans-serif;}</style>"
	),
	document.write(
		'<style>* .mdui-theme-primary-blue .mdui-color-theme{background-color:rgba(35,36,39,1)!important}</style>'
	),
	document.write(
		'<style>* .mdui-appbar{padding-right: 8px; padding-left: 8px; margin-right: auto; margin-left: auto; max-width: 980px;}</style>'
	),
	document.write(
		'<style>* {box-sizing: border-box} body{margin:0px; padding:0px; background: url("//cdn.jsdelivr.net/gh/NekoChanTaiwan/NekoChan-Open-Data/images/background_2.webp"); background-attachment: fixed; background-repeat: no-repeat; background-position: center center; background-size: cover;}</style>'
	),
	document.write(
		'<style>* .mdui-container{color:rgba(255,255,255,.87);background-color:rgba(35,36,39,0.95);border-width:1px;border-color:#333333;border-bottom-style:solid;}</style>'
	),
	document.write(
		'<style>* .mdui-list li{border-width:1px;border-color:#333333;border-bottom-style:solid;} </style>'
	),
	document.write(
		'<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>'
	),
	document.write(
		'<script src="//cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.1/DPlayer.min.js" integrity="sha512-bjMqZ0Ai1izYtoe+f9ehqyT9qaFYOcWgGUOj2mTx9aUBA+lEtKyIruqNhbR2toBtFg2n9LeN0FocK57P8X/jMg==" crossorigin="anonymous" async></script>'
	)
const Os = {
	isWindows: navigator.platform.toUpperCase().includes('WIN'),
	isMac: navigator.platform.toUpperCase().includes('MAC'),
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
	isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	),
}
function getDocumentHeight() {
	let e = document
	return Math.max(
		e.body.scrollHeight,
		e.documentElement.scrollHeight,
		e.body.offsetHeight,
		e.documentElement.offsetHeight,
		e.body.clientHeight,
		e.documentElement.clientHeight
	)
}
function render(e) {
	e.indexOf('?') > 0 && (e = e.substr(0, e.indexOf('?'))), title(e), nav(e)
	window.MODEL.is_search_page
		? ((window.scroll_status = { event_bound: !1, loading_lock: !1 }),
		  render_search_result_list())
		: e.match(/\/\d+:$/g) || '/' == e.substr(-1)
		? ((window.scroll_status = { event_bound: !1, loading_lock: !1 }), list(e))
		: file(e)
}
function title(e) {
	e = decodeURI(e)
	let i = window.current_drive_order || 0,
		t = window.drive_names[i]
	;(e = e.replace(`/${i}:`, '')), $('title').html(document.siteName + ' - ' + e)
	let n = window.MODEL
	n.is_search_page
		? $('title').html(`${document.siteName} - ${t} - 搜索 ${n.q} 的結果`)
		: $('title').html(`${document.siteName} - ${t} - ${e}`),
		$('title').html(`${document.siteName}`)
}
function nav(e) {
	let t = window.MODEL,
		n = '',
		d = window.current_drive_order || 0
	n += `<a href="//nekochan.ml/0:/?${Date.now()}" class="mdui-typo-headline folder">${
		document.siteName
	}</a>`
	let a = window.drive_names
	if (
		((n +=
			'<select class="mdui-select" onchange="window.location.href=this.value" mdui-select style="overflow:visible;padding-left:8px;padding-right:8px">'),
		a.forEach((e, i) => {
			n += `<option value="/${i}:/"  ${
				i === d ? 'selected="selected"' : ''
			} >${e}</option>`
		}),
		(n += '</select>'),
		!t.is_search_page)
	) {
		let t = e.trim('/').split('/'),
			a = '/'
		if (t.length > 1)
			for (i in (t.shift(), t)) {
				let e = t[i]
				if (((a += `${(e = decodeURI(e))}/`), '' == e)) break
				n += `<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="/${d}:${a}">${e}</a>`
			}
	}
	let l = (t.is_search_page && t.q) || ''
	const o = Os.isMobile
	let s = `<div class="mdui-toolbar-spacer"></div>\n        <div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right ${
		t.is_search_page ? 'mdui-textfield-expanded' : ''
	}" style="max-width:${
		o ? 300 : 400
	}px">\n            <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();">\n                <i class="mdui-icon material-icons">search</i>\n            </button>\n            <form id="search_bar_form" method="get" action="/${d}:search">\n            <input class="mdui-textfield-input" type="text" name="q" placeholder="Search in current drive" value="${l}"/>\n            </form>\n            <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>\n        </div>`
	t.root_type < 2 && (n += s),
		$('#nav').html(n),
		mdui.mutation(),
		mdui.updateTextFields()
}
function requestListPath(e, i, t, n) {
	let d = {
		password: i.password || null,
		page_token: i.page_token || null,
		page_index: i.page_index || 0,
	}
	$.post(e, d, (i, a) => {
		let l = jQuery.parseJSON(i)
		l && l.error && '401' == l.error.code
			? n && n(e)
			: l && l.data && t && t(l, e, d)
	})
}
function requestSearch(e, i) {
	let t = {
		q: e.q || null,
		page_token: e.page_token || null,
		page_index: e.page_index || 0,
	}
	$.post(`/${window.current_drive_order}:search`, t, (e, n) => {
		let d = jQuery.parseJSON(e)
		d && d.data && i && i(d, t)
	})
}
function list(e) {
	$('#content').html(
		'\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      檔案名稱\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      修改時間\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      檔案大小\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div> \n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t'
	)
	let i = localStorage.getItem(`password${e}`)
	$('#list').html(
		'<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'
	),
		$('#readme_md').hide().html(''),
		$('#head_md').hide().html(''),
		requestListPath(
			e,
			{ password: i },
			function e(i, t, n) {
				$('#list')
					.data('nextPageToken', i.nextPageToken)
					.data('curPageIndex', i.curPageIndex),
					$('#spinner').remove(),
					null === i.nextPageToken
						? ($(window).off('scroll'),
						  (window.scroll_status.event_bound = !1),
						  (window.scroll_status.loading_lock = !1),
						  append_files_to_list(t, i.data.files))
						: (append_files_to_list(t, i.data.files),
						  !0 !== window.scroll_status.event_bound &&
								($(window).on('scroll', function () {
									let i = $(this).scrollTop(),
										d = getDocumentHeight()
									if (i + $(this).height() > d - (Os.isMobile ? 130 : 80)) {
										if (!0 === window.scroll_status.loading_lock) return
										;(window.scroll_status.loading_lock = !0),
											$(
												'<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>'
											).insertBefore('#readme_md'),
											mdui.updateSpinners()
										let i = $('#list')
										requestListPath(
											t,
											{
												password: n.password,
												page_token: i.data('nextPageToken'),
												page_index: i.data('curPageIndex') + 1,
											},
											e,
											null
										)
									}
								}),
								(window.scroll_status.event_bound = !0))),
					!0 === window.scroll_status.loading_lock &&
						(window.scroll_status.loading_lock = !1)
			},
			(e) => {
				$('#spinner').remove()
				let i = prompt('目錄加密, 請輸入密碼', '')
				localStorage.setItem(`password${e}`, i),
					null != i && '' != i ? list(e) : history.go(-1)
			}
		)
}
function append_files_to_list(e, t) {
	let n = $('#list'),
		d = null === n.data('nextPageToken'),
		a = '0' == n.data('curPageIndex')
	html = ''
	let l = []
	for (i in t) {
		let n = t[i],
			a = `${e + n.name}/`
		if (
			(null == n.size && (n.size = ''),
			(n.modifiedTime = utc2beijing(n.modifiedTime)),
			(n.size = formatFileSize(n.size)),
			'application/vnd.google-apps.folder' == n.mimeType)
		)
			html += `<li class="mdui-list-item mdui-ripple"><a href="${a}?${Date.now()}" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${
				n.name
			}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${
				n.name
			}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${
				n.modifiedTime
			}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${
				n.size
			}</div>\n\t            </a>\n\t        </li>`
		else {
			let t = e + n.name
			const a = e + n.name
			let o = 'file'
			d &&
				'!readme.md' == n.name &&
				get_file(t, n, (e) => {
					markdown('#readme_md', e)
				}),
				'!head.md' == n.name &&
					get_file(t, n, (e) => {
						markdown('#head_md', e)
					})
			let s = t.split('.').pop().toLowerCase()
			'|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|'.includes(
				`|${s}|`
			) && (l.push(a), (t += `?a=view${Date.now()}`), (o += ' view')),
				(html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${
					n.mimeType
				}" href="${t}" class="${o}">\n\t\t\t  <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${
					n.name
				}">\n\t\t\t  \t${
					Number(i) + 1
				}.\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${
					n.name
				}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${
					n.modifiedTime
				}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${
					n.size
				}</div>\n\t          </a>\n\t      </li>`)
		}
	}
	if (l.length > 0) {
		let i = localStorage.getItem(e),
			t = l
		if (!a && i) {
			let e
			try {
				;(e = JSON.parse(i)), Array.isArray(e) || (e = [])
			} catch (i) {
				e = []
			}
			t = e.concat(l)
		}
		localStorage.setItem(e, JSON.stringify(t))
	}
	n.html(('0' == n.data('curPageIndex') ? '' : n.html()) + html),
		d &&
			$('#count')
				.removeClass('mdui-hidden')
				.find('.number')
				.text(n.find('li.mdui-list-item').length)
}
function render_search_result_list() {
	$('#content').html(
		'\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row">\n\t  <ul class="mdui-list">\n\t   <li class="mdui-list-item th">\n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      檔案名稱\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      修改時間\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      檔案大小\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n\t    </li>\n\t  </ul>\n\t </div>\n\t <div class="mdui-row">\n\t  <ul id="list" class="mdui-list">\n\t  </ul>\n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t'
	),
		$('#list').html(
			'<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'
		),
		$('#readme_md').hide().html(''),
		$('#head_md').hide().html(''),
		requestSearch({ q: window.MODEL.q }, function e(i, t) {
			$('#list')
				.data('nextPageToken', i.nextPageToken)
				.data('curPageIndex', i.curPageIndex),
				$('#spinner').remove(),
				null === i.nextPageToken
					? ($(window).off('scroll'),
					  (window.scroll_status.event_bound = !1),
					  (window.scroll_status.loading_lock = !1),
					  append_search_result_to_list(i.data.files))
					: (append_search_result_to_list(i.data.files),
					  !0 !== window.scroll_status.event_bound &&
							($(window).on('scroll', function () {
								let i = $(this).scrollTop(),
									t = getDocumentHeight()
								if (i + $(this).height() > t - (Os.isMobile ? 130 : 80)) {
									if (!0 === window.scroll_status.loading_lock) return
									;(window.scroll_status.loading_lock = !0),
										$(
											'<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>'
										).insertBefore('#readme_md'),
										mdui.updateSpinners()
									let i = $('#list')
									requestSearch(
										{
											q: window.MODEL.q,
											page_token: i.data('nextPageToken'),
											page_index: i.data('curPageIndex') + 1,
										},
										e
									)
								}
							}),
							(window.scroll_status.event_bound = !0))),
				!0 === window.scroll_status.loading_lock &&
					(window.scroll_status.loading_lock = !1)
		})
}
function append_search_result_to_list(e) {
	let t = $('#list'),
		n = null === t.data('nextPageToken')
	for (i in ((html = ''), e)) {
		let t = e[i]
		if (
			(null == t.size && (t.size = ''),
			(t.modifiedTime = utc2beijing(t.modifiedTime)),
			(t.size = formatFileSize(t.size)),
			'application/vnd.google-apps.folder' == t.mimeType)
		)
			html += `<li class="mdui-list-item mdui-ripple"><a id="${t.id}" onclick="onSearchResultItemClick(this)" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${t.name}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${t.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${t.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${t.size}</div>\n\t            </a>\n\t        </li>`
		else {
			let e = 'file',
				i = t.name.split('.').pop().toLowerCase()
			'|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|'.includes(
				`|${i}|`
			) && (e += ' view'),
				(html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a id="${t.id}" gd-type="${t.mimeType}" onclick="onSearchResultItemClick(this)" class="${e}">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${t.name}">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${t.name}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${t.modifiedTime}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${t.size}</div>\n\t          </a>\n\t      </li>`)
		}
	}
	t.html(('0' == t.data('curPageIndex') ? '' : t.html()) + html),
		n &&
			$('#count')
				.removeClass('mdui-hidden')
				.find('.number')
				.text(t.find('li.mdui-list-item').length)
}
function onSearchResultItemClick(e) {
	let i = $(e).hasClass('view'),
		t = window.current_drive_order,
		n = mdui.dialog({
			title: '',
			content:
				'<div class="mdui-text-center mdui-typo-title mdui-m-b-1">正在獲取目標路徑...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',
			history: !1,
			modal: !0,
			closeOnEsc: !0,
		})
	mdui.updateSpinners(),
		$.post(`/${t}:id2path`, { id: e.id }, (e) => {
			if (e) {
				n.close()
				let d = `/${t}:${e}${i ? '?a=view' : ''}`
				n = mdui.dialog({
					title: '<i class="mdui-icon material-icons">&#xe815;</i>目標路徑',
					content: `<a href="${d}">${e}</a>`,
					history: !1,
					modal: !0,
					closeOnEsc: !0,
					buttons: [
						{
							text: '打開',
							onClick() {
								window.location.href = d
							},
						},
						{
							text: '新標籤中打開',
							onClick() {
								window.open(d)
							},
						},
						{ text: '取消' },
					],
				})
			} else
				n.close(),
					(n = mdui.dialog({
						title:
							'<i class="mdui-icon material-icons">&#xe811;</i>獲取目標路徑失敗',
						content:
							'o(╯□╰)o 可能是因為該盤中並不存在此項！也可能因為沒有把【與我共享】的文件添加到個人云端硬碟中！',
						history: !1,
						modal: !0,
						closeOnEsc: !0,
						buttons: [{ text: 'WTF ???' }],
					}))
		})
}
function get_file(e, i, t) {
	let n = `file_path_${e}${i.modifiedTime}`,
		d = localStorage.getItem(n)
	if (null != d) return t(d)
	$.get(e, (e) => {
		localStorage.setItem(n, e), t(e)
	})
}
function file(e) {
	let i = e
		.split('/')
		.pop()
		.split('.')
		.pop()
		.toLowerCase()
		.replace('?a=view', '')
	return '|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|'.includes(
		`|${i}|`
	)
		? file_video(e)
		: '|bmp|jpg|jpeg|png|gif|'.includes(`|${i}|`)
		? file_image(e)
		: void 0
}
function file_video(e) {
	let i = decodeURI(window.location.origin + e),
		t = i
	const n = decodeURI(e.slice(e.lastIndexOf('/') + 1, e.length)),
		d = window.location.pathname,
		a = d.lastIndexOf('/'),
		l = d.slice(0, a + 1)
	let o = localStorage.getItem(l),
		s = ''
	if (o) {
		try {
			;(o = JSON.parse(o)), Array.isArray(o) || (o = [])
		} catch (e) {
			console.error(e), (o = [])
		}
		if (o.length > 0 && o.includes(e)) {
			let i = o.length,
				t = o.indexOf(e),
				n = t - 1 > -1 ? o[t - 1] : null,
				d = t + 1 < i ? o[t + 1] : null
			s = `\n            <div class="mdui-container">\n                <div class="mdui-row-xs-2 mdui-m-b-1">\n                    <div class="mdui-col">\n                        ${
				n
					? `<button id="leftBtn" data-filepath="${n}" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">上一集</button>`
					: '<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>上一集</button>'
			}\n                    </div>\n                    <div class="mdui-col">\n                        ${
				d
					? `<button id="rightBtn"  data-filepath="${d}" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">下一集</button>`
					: '<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>下一集</button>'
			}\n                    </div>\n                </div>\n            </div>\n            `
		}
	}
	let r = `<a href="potplayer://${t}" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent windows-btn">PotPlayer 串流</a>`
	if (
		(/(Mac)/i.test(navigator.userAgent) &&
			(r = `<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mac-btn" data-href="iina://open?url=${t}">IINA 串流</button>`),
		/(Android)/i.test(navigator.userAgent) &&
			((r = `<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:${t}#Intent;package=com.mxtech.videoplayer.pro;S.title=${e};end">MXPlayer Pro 串流</button>`),
			(r += `<br><button style="margin-top: 15px" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:${t}#Intent;package=com.mxtech.videoplayer.ad;S.title=${e};end">MXPlayer Free 串流</button>`)),
		/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))
	) {
		r = `<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="infuse://${i.replace(
			/(^\w+:|^)\/\//,
			''
		)}">Infuse 串流</a>`
	}
	let m = `\n<div class="mdui-container-fluid">\n    <br>\n    <div class="mdui-textfield">\n    <label class="mdui-textfield-label mdui-text-color-white">目前檔案：</label>\n    <input class="mdui-textfield-input mdui-text-color-white" type="text" value="${n}" readonly/>\n    </div>\n    <div class="mdui-center" id="player"></div>\n    <br>\n    <div id="imgWrap">\n    ${s}\n    </div>\n    <br>\n    ${(r += `<br><a style="margin-top: 15px" href="${t}" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent download-btn">直連下載檔案</a>`)}\n    <div class="mdui-textfield">\n      <label class="mdui-textfield-label mdui-text-color-white">注意：若影片沒有畫面，請嘗試播放器。或通知我本人。</label>\n    </div>\n    <hr>\n</div>\n    `
	$('#content').html(m),
		$(document).ready(function () {
			let e = 0,
				i = () => {
					let n = null
					window.DPlayer || window.location.reload(),
						(n = new DPlayer({
							container: document.getElementById('player'),
							theme: '#0080ff',
							autoplay: !0,
							lang: 'zh-tw',
							screenshot: !0,
							video: { url: t },
							contextmenu: [
								{ text: 'NekoChan Open Data', link: '//nekochan.ml/' },
							],
						})).seek(e),
						n.on('error', () => {
							0 != n.video.currentTime && (e = n.video.currentTime), i()
						}),
						n.on('seeked', () => {
							e = n.video.currentTime
						}),
						n.on('seeking', () => {
							e = n.video.currentTime
						})
				}
			i()
		}),
		$('#leftBtn, #rightBtn').click((e) => {
			let i = $(e.target)
			;['I', 'SPAN'].includes(e.target.nodeName) && (i = $(e.target).parent())
			const t = i.attr('data-filepath')
			i.attr('data-direction')
			file(t)
		})
}
function file_image(e) {
	let i = `\n<div class="mdui-container-fluid">\n    <br>\n    <img class="mdui-img-fluid" src="${decodeURI(
		window.location.origin + e
	)}"/>\n  <br>\n  <hr>\n</div>`
	$('#content').html(i)
}
function utc2beijing(e) {
	let i = e.indexOf('T'),
		t = e.indexOf('Z'),
		n = `${e.substr(0, i)} ${e.substr(i + 1, t - i - 1)}`
	;(timestamp = new Date(Date.parse(n))),
		(timestamp = timestamp.getTime()),
		(timestamp /= 1e3)
	var d = timestamp + 28800
	let a = 1900 + (d = new Date(1e3 * d)).getYear(),
		l = `0${d.getMonth() + 1}`,
		o = `0${d.getDate()}`,
		s = `0${d.getHours()}`,
		r = `0${d.getMinutes()}`,
		m = `0${d.getSeconds()}`
	return `${a}/${l.substring(l.length - 2, l.length)}/${o.substring(
		o.length - 2,
		o.length
	)} ${s.substring(s.length - 2, s.length)}:${r.substring(
		r.length - 2,
		r.length
	)}:${m.substring(m.length - 2, m.length)}`
}
function formatFileSize(e) {
	return (e =
		e >= 1073741824
			? `${(e / 1073741824).toFixed(2)} GB`
			: e >= 1048576
			? `${(e / 1048576).toFixed(2)} MB`
			: e >= 1024
			? `${(e / 1024).toFixed(2)} KB`
			: e > 1
			? `${e} Bytes`
			: 1 == e
			? `${e} Byte`
			: ' 資料夾')
}
function markdown(e, i) {
	if (null == window.md) (window.md = window.markdownit()), markdown(e, i)
	else {
		let t = md.render(i)
		$(e).show().html(t)
	}
}
;(String.prototype.trim = function (e) {
	return e
		? this.replace(new RegExp(`^\\${e}+|\\${e}+$`, 'g'), '')
		: this.replace(/^\s+|\s+$/g, '')
}),
	(window.onpopstate = () => {
		render(window.location.pathname)
	}),
	$(() => {
		init(), render(window.location.pathname)
	})
