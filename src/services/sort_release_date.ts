export {};

let data = [
    { title: "A New Hope", release_date: "1977-05-25" },
    { title: "The Empire Strikes Back", release_date: "1980-05-17" },
    { title: "Return of the Jedi", release_date: "1983-05-25" },
    { title: "The Phantom Menace", release_date: "1999-05-19" },
    { title: "Attack of the Clones", release_date: "2002-05-16" },
    { title: "Revenge of the Sith", release_date: "2005-05-19" }
];

let ordered = data.sort((a, b) => {
    let dateA: any = new Date(a.release_date);
    let dateB: any = new Date(b.release_date);

    return dateA - dateB;
});

console.log(ordered);
