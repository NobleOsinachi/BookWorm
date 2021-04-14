import { Component, OnInit, Input } from '@angular/core';
import { bool, int } from '../../typings';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isLiked: bool = true;
  @Input() likesCount: int = 10;
  onClick = () => {
    this.isLiked = !this.isLiked;
    this.likesCount += ((this.isLiked) ? -1 : 1);
  }
}
