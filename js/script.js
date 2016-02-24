var websites = ["Tumblr",
                "Flickr",
                "Google",
                "Instagram",
                "Slow Travel Berlin",
                "Facebook",
                "Google",
                "Yahoo",
                "Ask Jeeves",
                "OkCupid",
                "Tinder",
                "Wired",
                "Treehouse",
                "We Work Remotely",
                "SoundCloud",
                "Last.fm",
                "The Guardian",
                "Netflix",
                "Tidal",
                "Digg",
                "Urban Dictionary",
                "The A.V. Club",
                "Reddit",
                "PayPal",
                "Stack Overflow",
                "Amazon",
                "Dropbox",
                "GitHub",
                "YouTube",
                "LinkedIn",
                "Meetup",
                "Yahoo!",
                "Duolingo"];

var demographic = ["Newlyweds",
                   "Hipsters",
                   "Dog Owners",
                   "Cat Owners",
                   "Single Fathers",
                   "Single Mothers",
                   "Grunge Fans",
                   "Only Children",
                   "Lumberjacks",
                   "Beliebers",
                   "Flappers",
                   "Vegans",
                   "Pastafarians",
                   "Poets",
                   "Dogs",
                   "Cats",
                   "Hamsters",
                   "Cthulhu",
                   "Cars",
                   "Motorbikes",
                   "Cyclists",
                   "Business Men",
                   "Business Women",
                   "Bedroom DJs",
                   "Scene Kids",
                   "Illustrators",
                   "Beanie Babies",
                   "Pogs",
                   "Tamigotchis",
                   "Street Artists",
                   "Fullstack Developers",
                   "Recipes",
                   "Baristas",
                   "Actors",
                   "Artists",
                   "UX Developers"];

function generateExample()
{
  var websiteText = document.getElementById("website");
  websiteText.innerHTML = websites[Math.floor(Math.random()*websites.length)];

  var demographicText = document.getElementById("demographic");
  demographicText.innerHTML = demographic[Math.floor(Math.random()*demographic.length)];
 }

generateExample();

document.body.onkeyup = function(e){
  if(e.keyCode === 32){
  generateExample();
  }
};

document.getElementById("inspiration").onclick = function() {
  generateExample();
};
