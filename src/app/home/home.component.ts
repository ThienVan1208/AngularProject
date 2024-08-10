import { Component } from '@angular/core';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { RouterLink, RouterOutlet } from '@angular/router';

interface GameObject {
  id: number;
  gameName: string;
  descript: string;
  gameLink: string;
  imgSrc: string;
}
export const listGame: GameObject[] = [
  {
    id: 1,
    gameName: "Shadow of the Hero",
    descript: "In the land of Eldoria, where magic and mystery permeate every corner, " +
               "a dark time has come as it has been invaded by a demonic army. " +
               "However, a brave hero emerged, repelling the demons and defeating Demon King Dargor, " +
               "bringing peace to the land of Eldoria. After the battle, the hero decided to retire " +
               "and live in seclusion in a peaceful village deep within the forest. " +
               "Everything seemed to be calm, but a few years after the hero settled in the village, " +
               "someone—or perhaps something—that looked exactly like the hero destroyed the village " +
               "while the real hero was away on a mission. Upon returning and witnessing the devastation, " +
               "the hero is determined to uncover the truth behind the imposter and why they did it. " +
               "What is the truth behind it all? " +
               "Playing Shadow of the Hero to find out.",
    gameLink: "https://play-shadow-of-the-hero.vercel.app/",
    imgSrc: "/picture/shadowOfTheHero.png"
  },
  {
    id: 2,
    gameName: "RoboMaze",
    descript: "The gameplay is similar to Pac-Man, but in 3D. Can you complete all the levels?",
    gameLink: "https://build-robo-maze.vercel.app/",
    imgSrc: "/picture/RoboMaze.png"
  }
];
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameDescriptionComponent, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listGame = listGame;
}
