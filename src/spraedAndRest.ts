//* TS: Spread and rest operator

const friends: string[] = ["Arafat", "Nill"];

const schoolFriends: string[] = ["Sultana", "Isha"];

const collageFriends: string[] = ["Mim", "Afi"];

friends.push(...schoolFriends);

//? TS: Loop
const sentInvite = (...rest: string[]) => {
  rest.forEach((name) => {
    console.log(`Sent Invitation ${name}`);
  });
};

sentInvite("Arafat", "Nusrat", "Sultana", "Isha");
