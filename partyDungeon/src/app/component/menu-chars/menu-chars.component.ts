import { Component, OnInit } from '@angular/core';
import data_chars from '../../../assets/data/data_chars.json'

@Component({
  selector: 'app-menu-chars',
  templateUrl: './menu-chars.component.html',
  styleUrls: ['./menu-chars.component.css']
})
export class MenuCharsComponent implements OnInit {
  indexChar:number=2;
  nameChar:string= ""
  descChar:string= ""
  imgChar:string= ""
  imgAlt:string=""

  ngOnInit(): void {
    this.nameChar = data_chars.chars[this.indexChar].name
    this.descChar = data_chars.chars[this.indexChar].desc
    this.imgChar = data_chars.chars[this.indexChar].sprites
    this.imgAlt = data_chars.chars[this.indexChar].spritesAlt
  }
}
