module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    autoprefixer: {
        dev: {
          options: {
            browsers: ["last 10 version"]
          },
          src: "css/styles.css"
        }
      },
	  sass:{
			dev:{
			  options:{
				noCache: '',
				sourcemap:'none',
				style:"expanded",
				spawn: false
			  },
			  src: "css/styles.scss",
			  dest: "css/styles.css"
			}
		 },
		 cssmin:{
			 target: {
			files: [{
			  expand: true,
			  cwd: 'css/',
			  src: ['*.css', '!*.min.css'],
			  dest: 'css/',
			  ext: '.min.css'
			}]
		  }
		},
		watch:{
			grunt:{files:['gruntfile.js']},
			options:{
			  spawn:false,
			  livereload:true 
			},
			html:{
			  files:['*.html'],
			  options:{
				  livereload:true 
			  }
			},
			css:{
			  files:['css/*.css'],
			  options:{
				  livereload:true 
			  }
			},
			dev:{
			  files:["css/**/*"],
			  tasks:['default'],
			   options:{
				  livereload:true 
			  }
			}
		},
		connect:{
			livereload : {
			   options: {
				 open: true,
			}
		  }
		},
	});
	
	//Load dep
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//Custon tasks
	grunt.registerTask('default',['sass','autoprefixer','cssmin','watch',]);
	grunt.registerTask('server', ['connect:livereload', 'watch','sass','autoprefixer','cssmin' ]);
}