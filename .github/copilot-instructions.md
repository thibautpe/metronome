# GitHub Copilot Instructions — Visual Metronome

## Contexte du projet
Ce dépôt contient une application web autonome de métronome visuel sous forme de PWA.

Fichiers principaux :
- `index.html` : interface principale et logique applicative
- `sw.js` : service worker et version du cache
- `manifest.webmanifest` : configuration PWA
- `icons/` : icônes de l’application

Le projet est conçu pour être simple, statique et portable : sans build system, sans dépendance lourde, et compatible avec GitHub Pages.

## Règles de contribution
- Conserver le caractère PWA de l’application.
- Préférer des changements simples, lisibles et compatibles avec un hébergement statique.
- Garder les chemins relatifs, surtout si le site est servi depuis un sous-dossier GitHub Pages.
- Ne pas introduire de dépendances externes inutiles.
- Si une modification touche l’expérience utilisateur, la logique de tempo, le cache ou l’installation, vérifier la cohérence avec le service worker et le manifeste.

## Obligation de mise à jour à chaque modification significative
À chaque fois qu’une modification impacte le comportement, l’UI, le cache, le mode hors ligne ou la version de publication :

1. Mettre à jour le fichier `README.md`.
2. Ajouter ou ajuster une section `Dernière mise à jour : YYYY-MM-DD`.
3. Ajouter une section `À venir` ou `Roadmap` si le changement ouvre une suite logique ou une amélioration prévue.
4. Mettre à jour la version de cache dans `sw.js` quand le service worker, le manifeste ou les ressources installées changent.
5. Décrire brièvement la modification dans le README, en français si le projet est documenté en français.

## Format attendu pour les notes de mise à jour
Utiliser ce format dans le README si une mise à jour est faite :

- Dernière mise à jour : 2026-10-15
- Modifications : description concise des changements
- À venir : fonctionnalités ou correctifs planifiés

## Exemple de politique de versionnement
- Si le changement touche seulement les ressources statiques ou le cache : incrémenter la version dans `sw.js`.
- Si le changement modifie la logique de l’application ou l’UX : documenter la mise à jour dans le README et préciser la date.
- Si l’évolution est majeure, laisser un point dans `À venir` ou dans une note de roadmap.

## Rappels importants
- Le projet est un outil de pratique musicale : la clarté visuelle et la fiabilité du timing sont prioritaires.
- Les réglages utilisateurs doivent rester cohérents entre sessions et compatible avec le mode PWA.
- Toute modification de comportement visible doit être documentée dans le README.
