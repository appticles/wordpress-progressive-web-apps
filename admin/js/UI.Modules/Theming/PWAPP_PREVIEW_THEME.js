function PWAPP_PREVIEW_THEME(){

  var JSObject = this;

  this.type = 'pwapp_previewtheme';

  this.init = function(){

    // save a reference to PWAPPJSInterface Object
    PWAPPJSInterface = window.parent.PWAPPJSInterface;

    this.initPreviewButton();
  };


  this.initPreviewButton = function(){

    var snapshots = [
      {
        src: JSObject.baseThemesUrl + 'app2/snapshots/1-preview-cover.png',
        title: 'Home page cover'
      },
      {
        src: JSObject.baseThemesUrl + 'app2/snapshots/2-preview-categories.png',
        title: 'View posts'
      },
      {
        src: JSObject.baseThemesUrl + 'app2/snapshots/3-preview-menu.png',
        title: 'Categories menu'
      },
      {
        src: JSObject.baseThemesUrl + 'app2/snapshots/4-preview-article.png',
        title: 'Post details'
      }
    ];

    jQuery('#' + this.type + '_preview_2').magnificPopup({
      items: snapshots,
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
    });

    jQuery('#' + this.type + '_preview_2').hover(
      function(){
        jQuery(this).parent().siblings('div.text-preview').show();
      },
      function(){
        jQuery(this).parent().siblings('div.text-preview').hide();
      }
    );
  };

}