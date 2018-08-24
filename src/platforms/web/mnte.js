/**
 * Mnte.js
 * A simple template engine
 *
 * @author Weich
 */

export default (tpl, data={}, html) => {
	let	code = '',
		codeWrap = '',
		pointer = 0,
		match = [];

	// 将 html 片段 转化为 可执行数组
	const compile = (fragment, isVariable) => {
		if (fragment === '') { return; }
		if (isVariable) {
			if (fragment.match(/^ ?else/g)) {
				// else --> } else {
				code += '} ' + fragment + ' {\n';
			} else if (fragment.match(/\/(if|for|switch)/g)) {
				// /if --> }
				code += '}\n';
			} else if (fragment.match(/^ ?if|for|switch/g)) {
				// if (age) --> if (this.age) {
				code += fragment + '{\n';
			} else if (fragment.match(/^ ?(break|continue) ?$/g)) {
				// break --> break;
				code += fragment + ';\n';
			} else if (fragment.match(/^ ?(case|default)/g)) {
				// case (1) --> case (1):
				code += fragment + ':\n';
			} else {
				// name --> name
				code += 'arr.push(' + fragment + ');\n';
			}
		} else {
			// plain text
			code += 'arr.push("' + fragment.replace(/"/g, '\\"') + '");\n';
		}
	};
	// init global param
	const win = window !== 'undefined' ? window : global;
	win.__mnte_data = data;
	win.__mnte_code = '';
	win.__mnte_result = '';
	// remove spaces after switch
	tpl = tpl.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, '$1{{');
	// line breaks
	tpl = tpl.replace(/^[\r\n]/, '').replace(/\n/g, '\\\n').replace(/\r/g, '\\\r');
	// init code
	codeWrap = '(function(){\n';
	code = 'var arr = [];\n';
	const pattern = /\{\{([^}]+)\}\}/g;
	// 匹配 {{ 非}字符 }}
	while ((match = pattern.exec(tpl)) != null) {
		compile(tpl.slice(pointer, match.index), false);
		compile(match[1], true);
		pointer = match.index + match[0].length;
	}
	compile(tpl.substr(pointer, tpl.length - pointer), false);
	code += '__mnte_result = arr.join("");';
	code = 'with (__mnte_data) {\n' + code + '\n}';
	codeWrap += code;
	codeWrap += '})();';
	// console.log("code:\n"+codeWrap);
	// run code, do NOT use `eval` or `new Function` to avoid `unsafe-eval` CSP rule
	let scriptList = document.getElementsByTagName('script');
	let nonce = '';
	if (scriptList.length > 0) {
		nonce = scriptList[0].getAttribute('nonce') || ''; // get nonce to avoid `unsafe-inline`
	}
	let script = document.createElement('SCRIPT');
	script.innerHTML = codeWrap;
	script.setAttribute('nonce', nonce);
	document.documentElement.appendChild(script);
	let dom = win.__mnte_result;
	document.documentElement.removeChild(script);
	if (html) {
		let e = document.createElement('DIV');
		e.innerHTML = dom;
		dom = e.children[0];
	}
	return dom;
};
