# Visual Metronome (PWA)

Fichiers : `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`.

## Publier sur GitHub Pages
1. Crée un dépôt (ex. `metronome`) et envoie-y **le contenu de ce dossier** à la racine.
2. Dépôt > Settings > Pages > Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. Après une minute : `https://<ton-pseudo>.github.io/metronome/`.

## Installer
- PC (Chrome / Edge) : icône « Installer » dans la barre d'adresse.
- Android (Chrome) : menu ⋮ > « Installer l'application ».
- iPhone/iPad (Safari) : Partager > « Sur l'écran d'accueil ».

## Mettre à jour
Remplace `index.html` et fais un `git push` : l'appli récupère la nouvelle page à l'ouverture suivante quand on est en ligne (GitHub Pages peut mettre une dizaine de minutes à la servir).
Change `VERSION` dans `sw.js` (ex. `metronome-v1.6.1`) seulement si tu modifies les icônes, le manifeste ou `sw.js` lui-même.

## Notes
- Tous les chemins sont relatifs : ça marche dans un sous-dossier (`/metronome/`).
- Hors ligne : l'appli fonctionne après une première visite en ligne. La police Google Fonts est mise en cache à ce moment-là ; sinon une police système est utilisée.
- Les presets et réglages sont enregistrés dans le navigateur (localStorage) : séparés par appareil et par adresse.
