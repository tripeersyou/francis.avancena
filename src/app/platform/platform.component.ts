import { Component, OnInit } from '@angular/core';
import { WOW } from "wowjs/dist/wow.min";
import * as $ from 'jquery';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  constructor() { 
    $(document).ready(()=>{
      $('#misa_logo').attr('src','assets/MISA Logo white.png');
    });
  }

  ngOnInit() {
    new WOW({callback: this.rotated}).init();
  }

  rotated(el) {
    if (el.tagName == 'IMG'){
      document.querySelector('#misa_logo').addEventListener(('animationend'),function(){
        setTimeout(function(){
          $('#misa_logo').fadeOut();
          setTimeout(function(){
            $('#misa_logo').attr('src','assets/MISA Header white.png');
            $('#misa_logo').fadeIn();
          }, 400);
        }, 400);
      });
    }
  }

}
