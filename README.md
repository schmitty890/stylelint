# stylelint

## Application Structure
    .
    ├── build                                             # build folder is generated when gulp tasks run
    │   ├── css                                           # built css folder
    │   │   ├── styleguide-styles.min.css                 # concatenated and minified styleguide template css build (the styleguides css file used for the styleguide template)
    │   │   ├── styleguide-styles.min.css.map             # minified css source map to map styles to correct stylesheets in console for easier debugging purposes
    │   │   ├── styles.min.css                            # concatenated and minified css build (the css file used in our app)
    │   │   └── styles.min.css.map                        # minified css source map to map styles to correct stylesheets in console for easier debugging purposes
    │   └── js                                            # built js folder
    │       ├── app.js                                    # concatenated js build
    │       ├── app.min.js                                # concatenated and minified js build (the client side js used in our app)
    │       └── app.min.js.map                            # minified js source map to map back to correct file in the browser for easier debugging purposes
    ├── public                                            # public folder holds images/client js/scss
    │   ├── assets
    │   │   ├── js                                        # client side js folder
    │   │   │   ├── customjsmodule1                       # module/component folder
    │   │   │   │   └── customjsmodule1.js                # client side js scripts
    │   │   │   └── customjsmodule2                       # module/component folder
    │   │   │       └── customjsmodule1.js                # client side js scripts
    │   │   └── less                                      # less folder
    │   │       ├── abstracts                             # less partials, partials are indicated with _
    │   │       │   ├── mixins.less                       # mixins
    │   │       │   └── variables.less                    # variables
    │   │       ├── base                                  # base core styles
    │   │       ├── components                            # components folder where individual components css live
    │   │       │   └── button.less                       # button component
    │   │       ├── layout                                # layout folder
    │   │       ├── utilities                             # utiltiies folder for utility helpers
    │   │       │   └── custom.less                       # a custom utility stylesheet
    │   │       └── styles.less                           # read all partials into styles.less
    │   └── index.html                                    # our one html page at the moment
    ├── .editorconfig                                     # editorconfig helps developers define and maintain consistent coding styles between different editors and IDEs
    ├── .eslintignore                                     # eslint ignores these folders/files
    ├── .eslintrc.js                                      # eslint to find errors in code prior to pushing branches
    ├── .gitignore                                        # specified intentionally untracked files to ignore
    ├── .stylelintrc                                      # stylelint holds configuration of css linting
    ├── README.md                                         # this page
    ├── gulpfile.js                                       # gulpfile.js needed for gulp tasks preforms less and js concatenation and minification (converts less to css and concats and minfies css and client js files and creates build folder and files)
    ├── package.json                                      # specifics of npm packages and application
    └── server.js                                         # kickoff the app
