<<<<<<< HEAD
const verses = [ 
    "John 3:16",
    "Proverbs 3:5",
    "Romans 8:28",
    "Phillipians 4:13"
];

const randomIndex = Math.floor(Math.random() * verses.length);

=======
const verses = [ 
    "John 3:16",
    "Proverbs 3:5",
    "Romans 8:28",
    "Phillipians 4:13"
];

const randomIndex = Math.floor(Math.random() * verses.length);

>>>>>>> e8b31e9e10f953f3e388e40da34e79afdb494083
document.getElementById("verse").textContent = verses[randomIndex];