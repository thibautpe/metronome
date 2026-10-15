 # Todo / backlog Visual Metronome

## État actuel

Le projet est déjà très avancé : la version actuelle couvre déjà plusieurs fonctionnalités de niveau pro, notamment :
- grille de mesure avec rythme par temps
- accents et modèle de subdivision personnalisés
- swing, polymètre, count-in, silent measures, speed trainer
- setlist, presets, partage par code, export/import MIDI
- modes digital/physical, réglages de volume, pitch, latency, wake lock

Donc, la priorité maintenant n’est plus “ajouter tout”, mais “polir les usages les plus utiles et les plus motivants pour la pratique”.

## Priorité P0 — impact fort, très utiles

1. 📱 Partage instantané par QR code
- Générer un QR code à partir d’un preset ou d’une grille complète.
- Idéal pour enseignant / classe / duo de répétition.
- Très forte valeur ajoutée en usage réel.
- À prioriser : on a déjà le partage par code texte, le QR code est le prochain bond logique.

2. 🎙️ Enregistrement audio de session intégré
- Enregistrer le son joué pendant le métronome via MediaRecorder.
- Ajouter un retour d’écoute immédiat, loop, ou export.
- Très bon pour l’auto-évaluation et la correction de timing.
- À mettre en place avec gestion propre des permissions micro et de la qualité d’enregistrement.

3. 🎚️ Fade-out progressif / sortie douce des accents
- Remplacer les mesures silencieuses brutales par une diminution progressive du volume ou des accents.
- Très utile pour développer l’oreille interne et l’anticipation.
- À faire sous forme de mode “soft exit” ou “dynamic decay” optionnel.

4. 🌀 Divisions asymétriques avancées
- Ajouter des schémas de groupement comme 5, 7, 3+2+2, 2+3+3, etc.
- Très qualitatif pour jazz, fusion, percussion, musiques non eurocentrées.
- Développer en complément des subdivisions standard, pas en remplacement.

## Priorité P1 — très bons pour la pratique, mais moins critiques

5. 🔀 Shuffle / pattern rotation dynamique
- Changer automatiquement de subdivision ou de motif toutes les 2, 4 ou 8 mesures.
- Permet d’éviter la monotonie et d’entraîner la flexibilité rythmique.
- Idéal sous forme de “scripts rythmiques” modulables.

6. 🧠 Dashboard de progression / statistiques de session
- Temps total joué, précision moyenne, tempo moyen, variations, meilleures sessions.
- Très motivant pour la pratique quotidienne.
- Peut être un écran “History / Practice report”.

7. 🎛️ Sons personnalisés / packs de clic
- Ajouter des packs de sons (wood, click, synth, clap, etc.)
- Autoriser l’ajout de sons utilisateur.
- Très utile pour les utilisateurs qui veulent un rendu plus “pro” ou plus discret.

8. 🎹 Éditeur de presets par “scenario de pratique”
- Créer des configurations prêtes à l’emploi : warmup, speed run, swing practice, odd meter practice, etc.
- Réduit la friction pour les musiciens qui ne veulent pas réajuster les réglages à chaque séance.

## Priorité P2 — polish / expérience

9. ♿ Accessibilité et ergonomie
- Navigation clavier complète
- contrastes plus élevés
- mode réduit / motion-safe
- labels lisibles par lecteurs d’écran
- support tactile plus fluide sur mobile

10. 🔄 Synchronisation multi-appareil / export de session
- Lier un preset entre téléphone et ordinateur
- Sauvegarde plus robuste des configurations partagées
- Option de copier un “session link” plus lisible que le code brut

11. 📊 Analyse visuelle du timing
- Affichage de l’avance / du retard sur chaque temps
- Graphique de précision par mesure
- Très utile pour les exercices de swing ou de click placement

12. 🧪 Mode “pratique guidée”
- Séquences de travail automatiques : 5 min d’échauffement, 10 min de roue, 5 min de swing, etc.
- Plus utile pour les professeurs et les pratiquants sérieux.

## Idées complémentaires à ajouter si on veut élargir le produit

- 🔊 Bluetooth / MIDI sync externe
- 🧾 Historique de sessions exportable (CSV / JSON)
- 📱 Mode “pocket practice” : interface ultra minimale pour un usage au quotidien
- 🧰 Conversion de tempo selon subdivision ou métrique cible
- 🧭 “Tempo map” : accélération progressive sur plusieurs mesures, avec courbe programmable
- 🫧 Mode “call and response” : le métronome joue, puis attend la réponse d’un tap
- 🌙 Thèmes visuels / mode sombre plus profond / mode “studio”
- 🎵 Support de BPM détecté depuis un autre instrument ou un fichier audio

## Mon avis synthétique sur les 5 idées du todo initial

- QR code : excellent, très concret, à faire vite
- Fade-out : excellent concept, surtout pour la pédagogie
- Shuffle dynamique : très sympa, mais à traiter comme une “feature avancée” et non comme une base
- Enregistrement audio : super pour l’auto-correction, surtout pour les instrumentistes
- Divisions asymétriques : très bonne idée pour les musiciens avancés, mais plus niche

## Recommandation finale

Si on veut rester simple, la meilleure roadmap est :
1. QR code sharing
2. Audio recording
3. Fade-out / soft exit
4. Advanced tuplets / asymmetrical subdivisions
5. Session analytics + practice dashboard

C’est le bon équilibre entre usage réel, pédagogie, et différenciation sur le marché.

## Todo consolidée

- [ ] QR code de partage instantané
- [ ] Enregistrement audio de session
- [ ] Fade-out progressif des accents
- [ ] Divisions asymétriques avancées
- [ ] Shuffle/rand rotation de motifs
- [ ] Statistiques de progression
- [ ] Packs de sons personnalisés
- [ ] Scénarios de pratique prédéfinis
- [ ] Accessibilité / ergonomie mobile
- [ ] Synchronisation multi-appareil
- [ ] Analyse visuelle du timing
- [ ] Mode pratique guidée

---

Dernière mise à jour : 2026-10-15
Modifications : mise à jour de la todo avec un backlog priorisé, en tenant compte des fonctionnalités déjà présentes dans le projet et des ajouts les plus utiles pour la pratique.
À venir : QR code partagé, enregistrement audio, fade-out progressif, divisions asymétriques et tableau de progression.
