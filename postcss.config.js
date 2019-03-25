// https://www.npmjs.com/package/postcss-smart-import
// https://npmjs.com/package/postcss-partial-import   //let you use @import statements in css
// https://npmjs.com/package/saladcss-bem
// https://npmjs.com/package/precss
// https://github.com/postcss/postcss-color-function
// https://www.npmjs.com/package/postcss-define-function
// https://npmjs.com/package/postcss-css-reset
// https://npmjs.com/package/postcss-utils
// https://npmjs.com/package/postcss-calc
// https://npmjs.com/package/postcss-initial
// https://npmjs.com/package/postcss-inline-svg
// https://npmjs.com/package/postcss-short
// https://npmjs.com/package/postcss-shape
// https://npmjs.com/package/pixrem
// https://npmjs.com/package/autoprefixer
// https://npmjs.com/package/postcss-neat
// https://www.npmjs.com/package/postcss-cssnext
module.exports = {
    parser:'postcss-scss',
	plugins: {
		// 'postcss-import': {},
		'postcss-partial-import': {},
		'postcss-bem': {
			defaultNamespace: undefined, // default namespace to use, none by default 
		    style: 'suit',                // suit or bem, suit by default, 
		    separators: {
		    	namespace: '-',
		        descendent: '__',         // overwrite any default separator for chosen style 
		        modifier: '--'
		    },
		    shortcuts: {
		        component: 'b',          //override at-rule name 
		        descendent: 'e',
		        modifier: 'm'
		    }
		}, 
		'precss': {},    // 实现类Sass的功能，变量，嵌套，mixins
        'postcss-url': {},
        'postcss-scss':{},
		'postcss-color-function': {}, 
		'postcss-sass-color-functions': {},
		'postcss-define-function': {},
		'postcss-conditionals': {},
		'postcss-utils': {},
		'postcss-css-reset': {},
		'postcss-initial': {},
		'postcss-inline-svg': {},
		'postcss-calc': {},
		'postcss-short': {},
		'autoprefixer': {}      // 自动添加浏览器前缀
	}
}