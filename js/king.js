var quotelist = [
  {
    content: `
“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    name: "― Marilyn Monroe",
  },
  {
    content: `“So many books, so little time.”`,
    name: "― Frank Zappa",
  },

  {
    content: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    name: `― Albert Einstein`,
  },

  {
    content: `“A room without books is like a body without a soul.”`,
    name: `― Marcus Tullius Cicero`,
  },

  {
    content: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: `― Bernard M. Baruch`,
  },

  {
    content: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    name: `― Dr. Seuss`,
  },

  {
    content: `“You only live once, but if you do it right, once is enough.”`,
    name: `― Mae West`,
  },

  {
    content: `“Be the change that you wish to see in the world.”`,
    name: `― Robert Frost`,
  },

    {
    content: `“Be the change that you wish to see in the world.”`,
    name: `― Robert Frost`,
  },

    {
    content: `“Be the change that you wish to see in the world.”`,
    name: `― Robert Frost`,
  },

  {
    content : `“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”`,
    name : `― H. Jackson Brown Jr., P.S. I Love You`,
  },


  {
    content : `“It is better to be hated for what you are than to be loved for what you are not.”`,
    name : `― Andre Gide, Autumn Leaves`,
  },


  {
    content : `“All that is gold does not glitter,
Not all those who wander are lost;
The old that is strong does not wither,
Deep roots are not reached by the frost.

From the ashes a fire shall be woken,
A light from the shadows shall spring;
Renewed shall be blade that was broken,
The crownless again shall be king.”`,
name : `― J.R.R. Tolkien, The Fellowship of the Ring`,
},

{
content : `“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”`,
name : `― Jane Austen, Northanger Abbey`,
},

{
content : `
“It is our choices, Harry, that show what we truly are, far more than our abilities.”`,
name : `― J.K. Rowling, Harry Potter and the Chamber of Secrets`,
}




];

function showQuote() {
var number = Math.trunc((Math.random(quotelist.length) * 15));

var cartona = `
<p>${quotelist[number].content}</p>
<p>${quotelist[number].name}</p>
`
document.getElementById("quote").innerHTML = cartona;






}
