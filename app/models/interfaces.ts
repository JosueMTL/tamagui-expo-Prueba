interface Scene {
    id: number,
    title: string,
    description: string,
    budget: number,
    minutes: number,
    costOfTheSuit: number,
    makeupCost: number,
    filmId: number,
}

interface SceneForm extends Omit<Scene, 'id' | 'character'> { }

interface Character {
    id: number,
    description: string,
    cost: number,
    stock: number,
    sceneId: number,
}

interface CharacterForm extends Omit<Character, 'id' | 'scene'> { }

interface Film {
    id: number,
    title: string,
    director: string,
    duration: number,
    investment: String,
}

interface FilmForm extends Omit<Film, 'id' | 'scene'> { }

type FetchResponse = Character | Scene | Film;