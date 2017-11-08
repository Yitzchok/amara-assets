var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: [
        'Open Sans',
        'Raleway',
    ]
  },
  loading: function() {
    console.log("LOADING FONTS");
  },
  active: function() {
    console.log("ACTIVE FONTS");
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});