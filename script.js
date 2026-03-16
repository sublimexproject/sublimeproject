const verses = [ 
    "John 3:16",
    "Proverbs 3:5",
    "Romans 8:28",
    "Phillipians 4:13"
];

const randomIndex = Math.floor(Math.random() * verses.length);

document.getElementById("verse").textContent = verses[randomIndex];