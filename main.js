import { mallPrice, print, visitUrl } from "kolmafia";
import { getPlayerFromIdOrName } from "libram";

const ARGS = {
    ignoreMonsterCheck: false
};

function main(args) {
    // ARGS.ignoreMonsterCheck = args && args.includes('noCheck');
    try {
        const player = getPlayerFromIdOrName(args).id;
        print(player.name, "green");
        // while (handleChallenge() < 500 && myAdventures() > 0) {
        //     continue;
        // }\
    } catch (e) {
        print(e.message, "red");
    }
}

module.exports.main = main;