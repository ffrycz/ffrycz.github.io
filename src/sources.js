class Source {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
}

const navbarSources = [
    new Source("Dysleksja", "/dyslexia"),
    new Source("Programowanie", "/programming"),
    new Source("Filmy", "/movies"),
    new Source("Muzyka", "/music"),
    new Source("Gry", "/games"),
];

export default navbarSources;