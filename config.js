const fs = require("fs");
let rarity = {};
rarity.bg = [
	"XX black",
	"XX blue",
	"XX himapurple",
	"XX pink",
	"XX red",
	"black",
	"blue",
	"bluepink",
	"candy shop",
	"classroom",
	"godly realm",
	"gray",
	"green",
	"indigo",
	"magenta",
	"off white",
	"orange",
	"purple",
	"purpleorange",
	"red",
	"sky",
	"spotlight",
	"swirl",
	"white",
	"yellow",
	"yellowblue",
];
rarity.bgprob = [
	250, 250, 250, 250, 250, 900, 500, 200, 12, 128, 10, 900, 500, 500, 500, 900,
	500, 500, 200, 500, 50, 200, 150, 900, 500, 200,
];
rarity.special = [
	"earth",
	"fire",
	"lightning",
	"nothing",
	"particles",
	"stationary",
	"water",
	"wind",
];
rarity.specialprob = [200, 200, 400, 8000, 200, 200, 400, 400];
rarity.eyes = [
	"73",
	"blood moon",
	"hima",
	"blue",
	"brown",
	"cat",
	"crystalline",
	"frog",
	"green",
	"hearts",
	"heterochromia",
	"heterochromia",
	"black",
	"purple",
	"red",
	"samurai",
	"sky",
	"upper moon",
	"annihilation",
	"earth",
	"fire",
	"goddess",
	"light monarch",
	"lightning",
	"water",
	"wealth",
	"wind",
];
rarity.eyesprob = [
	400, 350, 500, 800, 800, 350, 500, 300, 800, 560, 600, 600, 800, 800, 600,
	200, 180, 450, 120, 30, 30, 10, 30, 30, 30, 100, 30,
];
rarity.face = [
	"XX gas mask",
	"XX mask",
	"XX shades",
	"annihilation",
	"bandages",
	"beams",
	"blindfold",
	"cybernetic mask",
	"dragon's breath",
	"eye patch",
	"flex glasses",
	"flowers",
	"fox mask",
	"goddess",
	"jewels",
	"light monarch",
	"mask",
	"monocle",
	"nothing",
	"night vision goggles",
	"oni mask",
	"secretary glasses",
];
rarity.faceprob = [
	400, 400, 400, 300, 800, 350, 800, 350, 200, 800, 600, 500, 500, 10, 400, 30,
	800, 50, 1000, 550, 120, 640,
];
rarity.head = [
	"XX hairband",
	"angel baby hit squad",
	"annihilation",
	"anya",
	"bells",
	"blockowls",
	"bunny ears",
	"cat ears",
	"chilled kongs",
	"claynation",
	"clumsy ghost",
	"cryptodino",
	"devil horns",
	"dragon's breath",
	"eden's 7",
	"fit for a queen",
	"flower crown",
	"frog eyes",
	"goddess",
	"hair band",
	"halo",
	"happy hoppers",
	"havoc worlds",
	"headphones",
	"light monarch",
	"maid",
	"nothing",
	"nurse",
	"petbot",
	"ribbon",
	"samurai",
	"soho kids",
	"the evil underlings",
	"tiara",
	"ugly bros",
	"veggiemates",
	"yummi universe",
];
rarity.headprob = [
	460, 50, 300, 500, 350, 50, 700, 500, 50, 50, 50, 50, 350, 160, 50, 50, 500,
	700, 10, 700, 120, 50, 50, 700, 30, 700, 500, 700, 50, 700, 300, 50, 50, 220,
	50, 50, 50,
];
rarity.hair = [
	"bob black",
	"bob black wolf",
	"bob blue",
	"bob gold",
	"bob green",
	"bob pink",
	"bob white",
	"bob white tiger",
	"bun black",
	"bun black wolf",
	"bun gold",
	"bun pink",
	"bun white",
	"bun white tiger",
	"curly black",
	"curly black wolf",
	"curly blue",
	"curly gold",
	"curly green",
	"curly pink",
	"curly white",
	"curly white tiger",
	"long black",
	"long black wolf",
	"long blue",
	"long gold",
	"long green",
	"long pink",
	"long white",
	"long white tiger",
	"long tail black",
	"long tail black wolf",
	"long tail gold",
	"long tail pink",
	"long tail white",
	"long tail white tiger",
	"pony tail black",
	"pony tail black wolf",
	"pony tail gold",
	"pony tail pink",
	"pony tail white",
	"pony tail white tiger",
	"short black",
	"short black wolf",
	"short blue",
	"short gold",
	"short green",
	"short pink",
	"short white",
	"short white tiger",
	"twin tail black",
	"twin tail black wolf",
	"twin tail gold",
	"twin tail pink",
	"twin tail white",
	"twin tail white tiger",
	"wolf cut black",
	"wolf cut black wolf",
	"wolf cut blue",
	"wolf cut gold",
	"wolf cut green",
	"wolf cut pink",
	"wolf cut white",
	"wolf cut white tiger",
];
rarity.hairprob = [
	178, 100, 178, 178, 178, 178, 190, 100, 178, 100, 178, 178, 178, 100, 178,
	100, 178, 178, 178, 178, 178, 100, 178, 100, 178, 178, 178, 178, 178, 100,
	178, 100, 178, 178, 178, 100, 178, 100, 178, 178, 178, 100, 178, 100, 178,
	178, 178, 178, 178, 100, 178, 100, 178, 178, 178, 100, 178, 100, 178, 178,
	178, 100, 178, 178,
];
rarity.clothes = [
	"XX 1",
	"XX 2",
	"XX 3",
	"XX 4",
	"annihilation suit",
	"bikini",
	"bikini",
	"cybernetic suit",
	"dragon's breath",
	"dress",
	"fit for a queen",
	"goddess",
	"hanbok",
	"jersey",
	"jersey",
	"kigurumi",
	"knight",
	"leather",
	"light monarch",
	"maid",
	"marin",
	"miko",
	"nurse",
	"office lady",
	"prom dress",
	"qipao",
	"samurai",
	"shirt",
	"shirt",
	"student",
	"student",
	"sweater",
	"tech wear",
	"vk",
	"yakuza",
	"yukata",
];
rarity.clothesprob = [
	100, 100, 100, 100, 30, 300, 300, 30, 30, 400, 30, 10, 300, 300, 300, 400,
	220, 500, 20, 400, 500, 300, 400, 500, 400, 300, 30, 540, 60, 490, 210, 600,
	500, 500, 400, 300,
];
rarity.skin = ["boba", "caramel", "cream", "mocha"];
rarity.skinprob = [2500, 2500, 2500, 2500];
fs.writeFile("rarity.json", JSON.stringify(rarity), (error) => {
	if (error) throw error;
});
