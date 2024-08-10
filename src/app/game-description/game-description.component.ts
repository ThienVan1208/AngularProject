import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listGame } from '../home/home.component';

@Component({
  selector: 'game-description',
  standalone: true,
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {
  game: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.game = listGame.find(g => g.id === +(gameId ?? -1));
  }
  
}
