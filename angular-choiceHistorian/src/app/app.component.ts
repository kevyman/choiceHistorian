import { Component, OnInit } from '@angular/core';
// import data from '../assets/humbleDatabase2.json';
import { Game } from "../app/models/game";
import { GameService } from './services/game.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'choiceHistorian';
  // monthList: any = data;

  public gameList!: Game[];
  public monthList = [{month: "string", games: this.gameList}];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
    this.getMonths();
  }

  getGames() {
    this.gameService.getAllGames().subscribe(
      (response: Game[]) => {
        this.gameList = response;
       // console.log(this.gameList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getMonths() {
    for(let year = 2015; year<2021; year++){
      if(year==2015){
        for(let j = 10; j<12; j++){
          let tempDate = new Date(year,j);
          const month = tempDate.toLocaleString('en-US', { month: 'long' }).toUpperCase();
          
          this.gameService.getMonth(month, year).subscribe(
            (response: Game[]) => {
              // console.log({month: `${month} ${year}`, games: response});
              this.monthList.push({month: `${month} ${year}`, games: response});
              
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
      }else{
        for(let k = 0; k<12; k++){
          let tempDate = new Date(year,k);
          const month = tempDate.toLocaleString('en-US', { month: 'long' }).toUpperCase();
          
          this.gameService.getMonth(month, year).subscribe(
            (response: Game[]) => {
              // console.log({month: `${month} ${year}`, games: response});
              this.monthList.push({month: `${month} ${year}`, games: response});
              
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
      }
      
    }
  }

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
