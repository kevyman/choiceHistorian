export interface Game{

    id?: number;
    name: string;
    month: string;
    year: number;
    humbleLink: string;
    bundleReleaseDate: Date;
    steamID: number;
    steamHeaderUrl: string;
    steamCards: boolean;
    steamLink: string;
    steamPositiveVotes : number;
    steamNegativeVotes: number;
    steamDBScore: number;
    gameReleaseDate : Date;
    gameAgeAtBundleRelease: string;
    gameAgeInSeconds: number;
    lowestPrice: number;
    largestCut: number;
    fullPrice: number;
    timesBundled: number;
    itadlink: string;
    metacriticScore: number;
    metacriticLink: string;
    howLongToBeat: number;
    //firstSteamVid: string;
}