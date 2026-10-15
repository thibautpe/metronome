# Visual Metronome (PWA)

Fichiers : `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`.

## Page de présentation

Une page de présentation du projet a été ajoutée pour GitHub Pages : `docs/index.html`.
Elle présente le pMetronome (métronome visuel) et la boîte à rythme, décrit les principales fonctionnalités et donne des liens pour tester l'application depuis ce dépôt.

## Publier sur GitHub Pages
1. Crée un dépôt (ex. `metronome`) et envoie-y **le contenu de ce dossier** à la racine.
2. Dépôt > Settings > Pages > Source : *Deploy from a branch*, branche `main`, dossier `/ (root)` ou choisir `/docs` si vous voulez servir la page de présentation `docs/index.html`.
3. Après une minute : `https://<ton-pseudo>.github.io/metronome/` (ou `/metronome/docs/` si vous servez depuis `/docs`).

## Installer
- PC (Chrome / Edge) : icône « Installer » dans la barre d'adresse.
- Android (Chrome) : menu ⋮ > « Installer l'application ».
- iPhone/iPad (Safari) : Partager > « Sur l'écran d'accueil ».

## Mettre à jour
Remplace `index.html` et fais un `git push` : l'appli récupère la nouvelle page à l'ouverture suivante quand on est en ligne (GitHub Pages peut mettre une dizaine de minutes à la servir).
Change `VERSION` dans `sw.js` (ex. `metronome-v1.6.1`) seulement si tu modifies les icônes, le manifeste ou `sw.js` lui-même.

- Dernière mise à jour : 2026-10-15
- Modifications : ajout d'une page de présentation GitHub Pages (`docs/index.html`) présentant le pMetronome et la boîte à rythme.
- À venir : validation des métriques de import MIDI et nettoyage fin des états de presets pour les anciennes configurations.

## Notes
- Tous les chemins sont relatifs : ça marche dans un sous-dossier (`/metronome/`).
- Hors ligne : l'appli fonctionne après une première visite en ligne. La police Google Fonts est mise en cache à ce moment-là ; sinon une police système est utilisée.
- Les presets et réglages sont enregistrés dans le navigateur (localStorage) : séparés par appareil et par adresse.
