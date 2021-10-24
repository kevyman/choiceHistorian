export interface Game{

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
    gameAgeTimestamp: number;
    lowestPrice: number;
    largestCut: number;
    fullPrice: number;
    timesBundled: number;
    ITADLink: string;
    metacriticScore: number;
    metacriticLink: string;
    howLongToBeat: number;
}