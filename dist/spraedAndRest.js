"use strict";
//* TS: Spread and rest operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Arafat", "Nill"];
const schoolFriends = ["Sultana", "Isha"];
const collageFriends = ["Mim", "Afi"];
friends.push(...schoolFriends);
//? TS: Loop
const sentInvite = (...rest) => {
    rest.forEach((name) => {
        console.log(`Sent Invitation ${name}`);
    });
};
sentInvite("Arafat", "Nusrat", "Sultana", "Isha");
//# sourceMappingURL=spraedAndRest.js.map