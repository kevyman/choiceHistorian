import { Component } from '@angular/core';
import data from '../assets/humbleDatabase2.json';
import { Game } from "../app/models/game";
import { GameService } from './services/game.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'choiceHistorian';
  monthList: any = data;

  constructor(private gameService: GameService) { }


  // public addAllGames(month: any) {

  //   for (let i = 0; i < month.games.length; i++) {
  //     let oldGame = month.games[i];

  //     let tempGame: Game = {
  //       name: oldGame.name,
  //       month: month.month.split(" ")[0].toUpperCase(),
  //       year: month.month.split(" ")[1],
  //       humbleLink: month.url,
  //       bundleReleaseDate: new Date(month.release * 1000),
  //       steamID: oldGame.steamID,
  //       steamHeaderUrl: oldGame.image,
  //       steamCards: oldGame.cards,
  //       steamLink: oldGame.steamLink,
  //       steamPositiveVotes: oldGame.positive,
  //       steamNegativeVotes: oldGame.negative,
  //       steamDBScore: oldGame.steamDBRating,
  //       gameReleaseDate: new Date(oldGame.gameRelease * 1000),
  //       gameAgeAtBundleRelease: oldGame.gameAgeAtBundleRelease,
  //       gameAgeInSeconds: oldGame.gameAgeTimestamp,
  //       lowestPrice: oldGame.lowestPrice,
  //       largestCut: oldGame.cut,
  //       fullPrice: oldGame.price,
  //       timesBundled: oldGame.bundledTimes,
  //       itadlink: oldGame.ITADLink,
  //       metacriticScore: oldGame.metacritic,
  //       metacriticLink: oldGame.metacriticLink,
  //       howLongToBeat: oldGame.howLongToBeat
  //     };

  //     console.log(JSON.stringify(tempGame));

  //     this.gameService.addGame(tempGame).subscribe(
  //       (response: Game) => {
  //         console.log(response);
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //     );
  //   }

  // }

  // public clickAllButtons() {
  //   let buttons: HTMLElement[]  = document.getElementsByClassName('btn-success') as any;

  //   for (var i = 0; i < buttons.length; i++)
  //     buttons[i].click();
  // }
}
