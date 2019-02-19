MetaC.ImageSliders = {
  slidersNext: null,
  slidersPrev: null,
  sliderTimer: null,
  init() {
      var a = MetaC.ImageSliders;
      a.slidersNext = $(".slider_arrow.slider_next");
      a.slidersPrev = $(".slider_arrow.slider_previous");
      a.slidersNext.on(MetaC.clickEventName, function(c) {
          var b = $(this);
          a.slide(b, false);
          c.stopPropagation();
          return false;
      });
      a.slidersPrev.on(MetaC.clickEventName, function(c) {
          var b = $(this);
          a.slide(b, true);
          c.stopPropagation();
          return false;
      });
      $(".image_strip .product a").on("focus", function() {
          var b = $(this);
          setTimeout(function() {
              MetaC.ImageSliders.checkArrows(b);
          }, 10);
      });
      $(window).on("resize", function() {
          a.slidersNext.each(function() {
              MetaC.ImageSliders.checkArrows($(this));
          });
      });
      a.slidersNext.each(function() {
          MetaC.ImageSliders.checkArrows($(this));
      });
  },
  slide(b, f) {
      var d = MetaC.ImageSliders.getStrip(b);
      if (d.length > 0) {
          var e = d.scrollLeft();
          var c = d.width();
          c -= c * 0.1;
          if (f) {
              e -= c;
          } else {
              e += c;
          }
          if (e < 0) {
              e = 0;
          }
          if (!MetaC.isIPad) {
              var a = b;
              d.animate({
                  scrollLeft: e
              }, 400, function() {
                  setTimeout(function() {
                      MetaC.ImageSliders.checkArrows(a);
                  }, 400);
              });
          } else {
              d.scrollLeft(e);
          }
          MetaC.ImageSliders.checkArrows(b);
      }
  },
  resetScroll(a) {
      var b = MetaC.ImageSliders.getStrip(a);
      b.scrollLeft(0);
      MetaC.ImageSliders.checkArrows(a);
  },
  checkArrows(a) {
      var c = MetaC.ImageSliders.getWrapper(a);
      if (MetaC.ImageSliders.moreRight(a)) {
          c.addClass("more_right");
      } else {
          c.removeClass("more_right");
          clearInterval(MetaC.ImageSliders.sliderTimer);
      }
      var b = MetaC.ImageSliders.getStrip(a);
      if (b.scrollLeft() > 0) {
          c.addClass("more_left");
      } else {
          c.removeClass("more_left");
          clearInterval(MetaC.ImageSliders.sliderTimer);
      }
  },
  moreRight(b) {
      var g = MetaC.ImageSliders.getProducts(b);
      var h = MetaC.ImageSliders.getWrapper(b);
      var c = MetaC.ImageSliders.getStrip(b);
      if (g.length > 0) {
          var f = g.last();
          var a = f.position();
          var e = f.width();
          var d = c.scrollLeft();
          if (a.left + e > c.width() + d + 1) {
              return true;
          }
      }
      return false;
  },
  getWrapper(a) {
      return a.parents(".image_strip_and_arrows");
  },
  getStrip(a) {
      var b = MetaC.ImageSliders.getWrapper(a);
      return b.find(".image_strip");
  },
  getProducts(a) {
      var b = MetaC.ImageSliders.getWrapper(a);
      return b.find(".product");
  },
};


MetaC.ImageSliders.init();

export default MetaC;