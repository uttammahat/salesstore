import {
    DOCUMENT
} from '@angular/common';
import {
    Component,
    HostListener,
    Inject,
    OnInit
} from '@angular/core';

declare var $;

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

    constructor() {}
    ngOnInit() {
        /* scroll-top start */
        var offset = 100;
        var duration = 550;
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > offset) {
                $(".scroll-top").addClass("active-scroll");
            } else {
                $(".scroll-top").removeClass("active-scroll");
            }
        });
        $(".scroll-top").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, duration);
            return false;
        });
        /* scroll-top close */

    }

}