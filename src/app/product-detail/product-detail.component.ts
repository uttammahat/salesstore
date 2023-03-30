import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

   /* product-img-slider - image zoom on hover */
  myThumbnail0 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cefeab9f0256490eb47dadf30022fdf4_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_01_standard.jpg";
  myFullresImage0 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cefeab9f0256490eb47dadf30022fdf4_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_01_standard.jpg";
  
  myThumbnail1 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/738da6c349a246c8a987adf30021c670_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_42_detail.jpg";
  myFullresImage1 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/738da6c349a246c8a987adf30021c670_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_42_detail.jpg";
  
  myThumbnail2 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d165fb5a4cba4261a26eadf300235003_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_02_standard_hover.jpg";
  myFullresImage2 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d165fb5a4cba4261a26eadf300235003_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_02_standard_hover.jpg";
  
  myThumbnail3 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8bfcedd86efb4f64bcbcadf300212f40_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_03_standard.jpg";
  myFullresImage3 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8bfcedd86efb4f64bcbcadf300212f40_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_03_standard.jpg";
  
  myThumbnail4 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25995ffdda52450ba8f2adf300210791_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_05_standard.jpg";
  myFullresImage4 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25995ffdda52450ba8f2adf300210791_9366/Ultraboost_Web_DNA_Shoes_Grey_GZ1592_05_standard.jpg";
  
  constructor() { }

  ngOnInit(): void {
    var QtyInput = (function () {
    var $qtyInputs = $(".qty-input");

    if (!$qtyInputs.length) {
      return;
    }

    var $inputs = $qtyInputs.find(".product-qty");
    var $countBtn = $qtyInputs.find(".qty-count");
    var qtyMin = parseInt($inputs.attr("min"));
    var qtyMax = parseInt($inputs.attr("max"));

    $inputs.change(function () {
      var $this = $(this);
      var $minusBtn = $this.siblings(".qty-count--minus");
      var $addBtn = $this.siblings(".qty-count--add");
      var qty = parseInt($this.val());

      if (isNaN(qty) || qty <= qtyMin) {
        $this.val(qtyMin);
        $minusBtn.attr("disabled", true);
      } else {
        $minusBtn.attr("disabled", false);
        
        if(qty >= qtyMax){
          $this.val(qtyMax);
          $addBtn.attr('disabled', true);
        } else {
          $this.val(qty);
          $addBtn.attr('disabled', false);
        }
      }
    });

    $countBtn.click(function () {
      var operator = this.dataset.action;
      var $this = $(this);
      var $input = $this.siblings(".product-qty");
      var qty = parseInt($input.val());

      if (operator == "add") {
        qty += 1;
        if (qty >= qtyMin + 1) {
          $this.siblings(".qty-count--minus").attr("disabled", false);
        }

        if (qty >= qtyMax) {
          $this.attr("disabled", true);
        }
      } else {
        qty = qty <= qtyMin ? qtyMin : (qty -= 1);
        
        if (qty == qtyMin) {
          $this.attr("disabled", true);
        }

        if (qty < qtyMax) {
          $this.siblings(".qty-count--add").attr("disabled", false);
        }
      }

      $input.val(qty);
    });
  })();

  }

}
