import {
  Component,
  OnInit
} from '@angular/core';
declare var $;

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    $(function () {
      // if ($(window).width() < 991.98) {
      $('.main-categori-wrap').on('click', '.categori-show', function (e) {
        $('.category-menu').toggleClass('category-hide');
        $('a.categori-show').toggleClass('active');

        $('.sub-menu-input-togglerr').prop('checked', false);
        $('.second-sub-menu-toggler-btn').prop('checked', false);
      });

      $('.middle-navbar-right').on(
        'click',
        '.navbar-toggler.menuBar',
        function (e) {
          $('.bottom-navbar-wrapper').toggleClass('show');
          $('button.navbar-toggler.menuBar').attr('aria-expanded', 'true');
          $('#menuBar.navbar-collapse').removeClass('collapse');
        }
      );

      $('#menuBar').on('click', '.sidebar-close-icon', function (e) {
        $('.bottom-navbar-wrapper').removeClass('show');
        $('#menuBar.navbar-collapse').removeClass('show');
        $('#menuBar.navbar-collapse').removeClass('collapse');

        $('.category-menu').addClass('category-hide');
        $('a.categori-show').removeClass('active');

        $('button.navbar-toggler.menuBar').attr('aria-expanded', 'false');

        $('.sub-menu-input-togglerr').prop('checked', false);
        $('.second-sub-menu-toggler-btn').prop('checked', false);
      });

      $(document).on('click', '.hyperlink-menu-toggler', function (e) {
        console.log('hyperlink-menu-toggler__clicked');

        $('.bottom-navbar-wrapper').removeClass('show');
        $('#menuBar.navbar-collapse').removeClass('show');
        $('#menuBar.navbar-collapse').addClass('collapse');

        $('.category-menu').addClass('category-hide');

        $('.category-menu').addClass('category-hide');
        $('a.categori-show').removeClass('active');
        $('button.navbar-toggler.menuBar').attr('aria-expanded', 'false');
      });

      if ($('.bottom-navbar-wrapper').hasClass('show')) {
        $(document).on('click', '.mobile-show .search .input-group-append .btn', function (e) {
          $('.bottom-navbar-wrapper').removeClass('show');
          $('button.navbar-toggler.menuBar').attr('aria-expanded', 'false');
        });
      }

      $('.sub-menu-toggler-btn').change(function (e) {
        if (this.checked) {
          $('.sub-menu-toggler-btn').prop('checked', false);
          $(this).prop('checked', true);
        } else {
          $('.second-sub-menu-toggler-btn').prop('checked', false);
          $('.sub-menu-toggler-btn').prop('checked', false);
        }
      });

      $('.second-sub-menu-toggler-btn').change(function (e) {
        if (this.checked) {
          $('.second-sub-menu-toggler-btn').prop('checked', false);
          $(this).prop('checked', true);
        } else {
          $('.sub-menu-toggler-btn').prop('checked', false);
          $('.second-sub-menu-toggler-btn').prop('checked', false);
        }
      });
      // }

      if ($(window).width() > 991.98) {
        // if ($('.category-menu').hasClass('category-hide')) {
        //   $('.category-menu').removeClass('category-hide');
        // } else {
        //   $('.category-menu').addClass('category-hide');
        // }

        // if (($('.categori-show').hasClass('active')) == false) {
        //   $('.categori-show').addClass('active');
        // } else {
        //   $('.categori-show').removeClass('active');
        // }
      }
    });
  }

}