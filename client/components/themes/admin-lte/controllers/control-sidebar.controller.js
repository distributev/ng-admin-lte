(function() {
  'use strict';

  angular
    .module('admin-lte')
    .controller('ControlSidebarController', ControlSidebarController);

  ControlSidebarController.$inject = [];

  function ControlSidebarController() {

    var themeSkins = [
      'skin-blue',
      'skin-black',
      'skin-red',
      'skin-yellow',
      'skin-purple',
      'skin-green',
      'skin-blue-light',
      'skin-black-light',
      'skin-red-light',
      'skin-yellow-light',
      'skin-purple-light',
      'skin-green-light'
    ];

    $('[data-skin]').on('click', function (e) {
      e.preventDefault();
      changeSkin($(this).data('skin'));
    });

    $('[data-layout]').on('click', function() {
      changeLayout($(this).data('layout'));
    });

    $('[data-toggle="control-sidebar"]').on('click', function () {
      $('.control-sidebar').toggleClass('control-sidebar-open');
    });

    $('[data-controlsidebar]').on('click', function() {
      changeLayout($(this).data('controlsidebar'));
      var slide = !$.AdminLTE.options.controlSidebarOptions.slide;
      $.AdminLTE.options.controlSidebarOptions.slide = slide;
      if (!slide) {
        $('.control-sidebar').removeClass('control-sidebar-open');
      }
    });

    $('[data-sidebarskin="toggle"]').on('click', function() {
      var sidebar = $('.control-sidebar');
      if (sidebar.hasClass('control-sidebar-dark')) {
        sidebar.removeClass('control-sidebar-dark');
        sidebar.addClass('control-sidebar-light');
      } else {
        sidebar.removeClass('control-sidebar-light');
        sidebar.addClass('control-sidebar-dark');
      }
    });

    function changeLayout(cls) {
      $('body').toggleClass(cls);
      $.AdminLTE.layout.fixSidebar();
      //Fix the problem with right sidebar and layout boxed
      if (cls === 'layout-boxed') {
        $.AdminLTE.controlSidebar._fix($('.control-sidebar-bg'));
      }
      if ($('body').hasClass('fixed') && cls === 'fixed') {
        $.AdminLTE.pushMenu.expandOnHover();
        $.AdminLTE.layout.activate();
      }
      $.AdminLTE.controlSidebar._fix($('.control-sidebar-bg'));
      $.AdminLTE.controlSidebar._fix($('.control-sidebar'));
    }

    function changeSkin(cls) {
      $.each(themeSkins, function (i) {
        $('body').removeClass(themeSkins[i]);
      });

      $('body').addClass(cls);
      return false;
    }
  }
})();

