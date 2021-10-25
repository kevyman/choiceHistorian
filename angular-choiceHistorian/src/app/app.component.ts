import { Component, OnInit } from '@angular/core';
import data from '../assets/humbleDatabase2.json';
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
  // monthListTemp: any = data;

  public gameList!: Game[];
  public monthList = [{ month: "string", games: this.gameList }];

  public infoGame: Game = { "id": 201, "name": "Chroma Squad", "month": "DECEMBER", "year": 2015, "humbleLink": "https://humblebundle.com/monthly/p/december_2015_monthly", "bundleReleaseDate": new Date("2015-12-04T18:00:00"), "steamID": 251130, "steamHeaderUrl": "https://steamcdn-a.akamaihd.net/steam/apps/251130/header.jpg", "steamCards": true, "steamLink": "https://store.steampowered.com/app/251130", "steamPositiveVotes": 2938, "steamNegativeVotes": 219, "steamDBScore": 89, "gameReleaseDate": new Date("2015-04-30T00:00:00"), "gameAgeAtBundleRelease": "218d", "gameAgeInSeconds": 18900000, "lowestPrice": 8.11, "largestCut": 0, "fullPrice": 8.11, "timesBundled": 10, "itadlink": "https://isthereanydeal.com/game/chromasquad/info/", "metacriticScore": 75, "metacriticLink": "http://www.metacritic.com/game/pc/chroma-squad", "howLongToBeat": 13 };

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
    this.getMonths();
  }

  public getGames() {
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

  public getMonths() {
    for (let year = 2015; year < 2021; year++) {
      if (year == 2015) {
        for (let j = 10; j < 12; j++) {
          let tempDate = new Date(year, j);
          const month = tempDate.toLocaleString('en-US', { month: 'long' }).toUpperCase();

          this.gameService.getMonth(month, year).subscribe(
            (response: Game[]) => {
              // console.log({month: `${month} ${year}`, games: response});
              this.monthList.push({ month: `${month} ${year}`, games: response });

            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
      } else {
        for (let k = 0; k < 12; k++) {
          let tempDate = new Date(year, k);
          const month = tempDate.toLocaleString('en-US', { month: 'long' }).toUpperCase();

          this.gameService.getMonth(month, year).subscribe(
            (response: Game[]) => {
              // console.log({month: `${month} ${year}`, games: response});
              this.monthList.push({ month: `${month} ${year}`, games: response });

            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
      }

    }
  }

  public onGameClick(game: Game) {
    this.infoGame = game;
    //console.log(JSON.stringify(this.infoGame));
  }

  // public addAllGames(month: any) {

  //   for (let i = 0; i < month.games.length; i++) {

  //     let oldGame = month.games[i];

  //     this.gameService.getSteamInfo(oldGame.steamID).subscribe(
  //       (response: any) => {
  //         let tempData = response[oldGame.steamID].data;
  //         let firstSteamVidID = tempData.movies[0].id;

  //         let tempGame: Game = {
  //           name: oldGame.name,
  //           month: month.month.split(" ")[0].toUpperCase(),
  //           year: month.month.split(" ")[1],
  //           humbleLink: month.url,
  //           bundleReleaseDate: new Date(month.release * 1000),
  //           steamID: oldGame.steamID,
  //           steamHeaderUrl: oldGame.image,
  //           steamCards: oldGame.cards,
  //           steamLink: oldGame.steamLink,
  //           steamPositiveVotes: oldGame.positive,
  //           steamNegativeVotes: oldGame.negative,
  //           steamDBScore: oldGame.steamDBRating,
  //           gameReleaseDate: new Date(oldGame.gameRelease * 1000),
  //           gameAgeAtBundleRelease: oldGame.gameAgeAtBundleRelease,
  //           gameAgeInSeconds: oldGame.gameAgeTimestamp,
  //           lowestPrice: oldGame.lowestPrice,
  //           largestCut: oldGame.cut,
  //           fullPrice: oldGame.price,
  //           timesBundled: oldGame.bundledTimes,
  //           itadlink: oldGame.ITADLink,
  //           metacriticScore: oldGame.metacritic,
  //           metacriticLink: oldGame.metacriticLink,
  //           howLongToBeat: oldGame.howLongToBeat,
  //           //firstSteamVid: `https://cdn.akamai.steamstatic.com/steam/apps/${firstSteamVidID}/microtrailer.webm`
  //         };

  //         console.log(JSON.stringify(tempGame));

  //         this.gameService.addGame(tempGame).subscribe(
  //           (response: Game) => {
  //             console.log(response);
  //           },
  //           (error: HttpErrorResponse) => {
  //             alert(error.message);
  //           }
  //         );
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //     );


  //   }

  // }

  // public clickAllButtons() {
  //   let buttons: HTMLElement[] = document.getElementsByClassName('btn-success') as any;

  //   for (let i = 0; i < buttons.length; i++) {
  //     console.log("clicked: " + i);
  //     buttons[i].click();
  //     this.sleep(10000);
  //   }
  // }

  // public addAllVids() {
  //   console.log(this.monthListTemp[2].games[0].steamID);

  //   let tempID = this.monthListTemp[2].games[0].steamID;
  //   this.gameService.getSteamInfo(tempID).subscribe(
  //     (response: any) => {
  //       let tempData = response[tempID].data;
  //       console.log(tempData.movies[0].id);

  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );

  // }

  // public sleep(milliseconds: number) {
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }
}
