# Vanilla JS Web APIs Exercises

<p align="right"><sub>🇬🇧 English (this page) · <a href="#fr">🇫🇷 Français</a> · <a href="#es">🇪🇸 Español</a></sub></p>

*Built between December 2024 and January 2025, during my first year at Epitech Web Academy.*

This is a set of small exercises I did to actually understand what the browser gives you before reaching for a framework. No React, no jQuery, no npm install, just JavaScript, the DOM, and whatever API the exercise asked me to use. Twenty exercises, one bonus, each one a little harder than the last.

The idea behind this pool wasn't to build something flashy. It was to force me to answer questions like: how does `fetch` actually work when the API is slow or fails? How do you draw something on a canvas pixel by pixel? What does `localStorage` actually store when you give it an image? I think that's the kind of thing you only really learn by doing it without a library doing it for you.

## A couple of exercises I'm proud of

**The custom `$()` selector (bonus exercise).** The rule was simple but annoying: rebuild something like jQuery's `$()` selector, but `getElementById` and `getElementsByClassName` were forbidden. So I had to figure out the selector type from the first character and route it manually:

```javascript
function $(selector) {
    if (!selector) return null;

    const selectorType = selector.charAt(0);

    switch (selectorType) {
        case '#':
            return document.querySelector(selector);
        case '.':
            return document.querySelectorAll(selector);
        default:
            return document.querySelectorAll(selector);
    }
}
```

Small function, but it's the first time I really thought about *why* `querySelector` and `querySelectorAll` behave differently, instead of just using them.

**Exercise 17, combining images asynchronously.** The task was to load several image URLs and place them on a canvas, but the loading had to be async, using `new Image()` and Promises, not just assuming the images are already there. I ended up wrapping the image loading in a Promise so I could `await` each one before drawing it, which was my first real "click" moment with async JS outside of `fetch`.

## What's actually in here

- **DOM manipulation**: click counters, live keystroke tracking, font-size controls, all reacting to user input in real time
- **Canvas API**: drawing shapes with exact coordinates, reordering colored blocks, compositing multiple images onto one canvas
- **Fetch API**: pulling real data from public APIs (French government school directory, postal codes, JSONPlaceholder, live Bitcoin price from CoinDesk) and rendering it
- **File API**: uploading, downloading, and drag-and-drop image previews, plus detecting a file's type asynchronously with a Promise
- **Storage**: cookies with expiration, and storing/retrieving an actual image through `localStorage`
- **Audio API**: a small player with play, pause and mute
- **A PHP endpoint** (`api.php`): because exercise 20 needed a real server-side upload, with validation on file type and size

## How to look at it

There's no build step, and that's kind of the point. Open `ex_01.html` in a browser and click through with the Next/Previous buttons at the bottom of each page.

The only exercise that needs a server is #20 (uploading a file to `api.php`). For that one:

```bash
php -S localhost:8000
```

then open `http://localhost:8000/ex_20.html`.

## Exercise index

| # | What it does |
|---|---|
| 01 | Replace box content with "Hello World" from an anonymous function |
| 02 | Count and display clicks inside a box |
| 03 | Prompt asking for your name, then greets you |
| 04 | Shows the last 42 characters typed on the page, live |
| 05 | Buttons that grow/shrink the page's font size |
| 06 | Fetches and lists French schools from a government API |
| 07 | Draws a triangle on canvas at exact coordinates |
| 08 | Reorders colored canvas blocks (orange, purple, black, green) |
| 09 | Drag and drop a square around a box |
| 10 | Fetches French postal code data from a government API |
| 11 | Sets a cookie that expires after a day when you click OK |
| 12 | Saves an image into `localStorage` |
| 13 | Reads that same image back out of `localStorage` |
| 14 | Fetches and displays posts from JSONPlaceholder |
| 15 | Fetches and displays the live Bitcoin price (updates every minute) |
| 16 | Promise that checks a file's type before doing anything with it |
| 17 | Loads several images asynchronously and combines them on a canvas |
| 18 | Drag-and-drop zone that previews the dropped image |
| 19 | Date picker that saves and displays the chosen date |
| 20 | Sends a file to a PHP endpoint and saves it server-side |
| Bonus | Rebuilds a mini `$()` selector engine from scratch |

## Stack

HTML, CSS, vanilla JavaScript. PHP only for the upload endpoint in exercise 20.

---

<a id="fr"></a>
<details>
<summary>🇫🇷 Français</summary>

# Exercices JavaScript Vanilla : Web APIs

*Réalisé entre décembre 2024 et janvier 2025, durant ma première année à Epitech Web Academy.*

Une série de petits exercices faits pour vraiment comprendre ce que le navigateur offre nativement, avant de sauter sur un framework. Pas de React, pas de jQuery, pas de npm install, juste du JavaScript, le DOM, et l'API demandée par chaque exercice. Vingt exercices, plus un bonus, chacun un peu plus difficile que le précédent.

L'objectif n'était pas de faire quelque chose d'impressionnant, mais de répondre à des questions concrètes : comment `fetch` se comporte quand l'API est lente ou échoue ? Comment dessiner sur un canvas pixel par pixel ? Que stocke réellement `localStorage` quand on lui donne une image ? C'est le genre de chose qu'on apprend vraiment en le faisant sans qu'une librairie le fasse à notre place.

## Ce que contient le projet

- **Manipulation du DOM**: compteurs de clics, suivi du clavier en direct, contrôle de la taille de police
- **Canvas API**: dessin de formes à coordonnées précises, réorganisation de blocs colorés, composition de plusieurs images sur un même canvas
- **Fetch API**: récupération de vraies données publiques (annuaire de l'éducation nationale, codes postaux, JSONPlaceholder, cours du Bitcoin en direct via CoinDesk)
- **File API**: upload, téléchargement, prévisualisation drag-and-drop, détection asynchrone du type de fichier via une Promise
- **Stockage**: cookies avec expiration, et sauvegarde/lecture d'une image dans `localStorage`
- **Audio API**: petit lecteur avec lecture, pause et mute
- **Un endpoint PHP** (`api.php`): pour l'exercice 20, qui demandait un vrai upload côté serveur avec validation du type et de la taille du fichier

## Comment consulter le projet

Aucune étape de build, c'est voulu. Ouvrez `ex_01.html` dans un navigateur et naviguez avec les boutons Précédent/Suivant en bas de chaque page.

Seul l'exercice 20 nécessite un serveur (upload vers `api.php`) :

```bash
php -S localhost:8000
```

puis ouvrez `http://localhost:8000/ex_20.html`.

## Stack

HTML, CSS, JavaScript vanilla. PHP uniquement pour l'endpoint d'upload de l'exercice 20.

</details>

<a id="es"></a>
<details>
<summary>🇪🇸 Español</summary>

# Ejercicios JavaScript Vanilla : Web APIs

*Realizado entre diciembre 2024 y enero 2025, durante mi primer año en Epitech Web Academy.*

Una serie de ejercicios pequeños hechos para entender de verdad lo que el navegador ofrece por sí solo, antes de saltar directo a un framework. Sin React, sin jQuery, sin npm install, solo JavaScript, el DOM, y la API que pedía cada ejercicio. Veinte ejercicios más uno bonus, cada uno un poco más difícil que el anterior.

La idea no era hacer algo vistoso, sino responder preguntas concretas: ¿cómo se comporta `fetch` cuando la API va lenta o falla? ¿Cómo se dibuja algo en un canvas píxel a píxel? ¿Qué guarda realmente `localStorage` cuando le das una imagen? Es el tipo de cosas que solo se aprenden bien haciéndolas sin que una librería las resuelva por vos.

## Qué hay acá

- **Manipulación del DOM**: contadores de clics, seguimiento del teclado en vivo, control de tamaño de fuente
- **Canvas API**: dibujo de formas con coordenadas exactas, reordenar bloques de color, combinar varias imágenes en un mismo canvas
- **Fetch API**: consumo de APIs públicas reales (directorio educativo del gobierno francés, códigos postales, JSONPlaceholder, precio del Bitcoin en vivo vía CoinDesk)
- **File API**: subida, descarga, previsualización drag-and-drop, detección asíncrona del tipo de archivo con una Promise
- **Almacenamiento**: cookies con expiración, y guardar/leer una imagen real en `localStorage`
- **Audio API**: reproductor simple con play, pausa y mute
- **Un endpoint PHP** (`api.php`): el ejercicio 20 pedía una subida real del lado servidor, con validación de tipo y tamaño de archivo

## Cómo verlo

No hay build, es a propósito. Abrí `ex_01.html` en el navegador y navegá con los botones Anterior/Siguiente al final de cada página.

Solo el ejercicio 20 necesita servidor (sube un archivo a `api.php`):

```bash
php -S localhost:8000
```

y después abrí `http://localhost:8000/ex_20.html`.

## Stack

HTML, CSS, JavaScript vanilla. PHP solo para el endpoint de subida del ejercicio 20.

</details>
