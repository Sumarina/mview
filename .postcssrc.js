// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    'saladcss-bem': {
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
    "precss":{},
    "postcss-import": {},
    "postcss-url": {},
    'postcss-short': {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
