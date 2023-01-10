# ToDo FirePixel 

/!\ Critique

! Important

_ Peu important

++ Difficile

+ Moyen

(+) Facile

- À faire
- X -> En cours par X
- ~~ Fait ~~

## Front

### Phone

- /!\ Canvas
  - + Créer la structure
  - (+) Gérer le déplacement cases par cases
  - + Récupérer les infos de la grille, via nouvelle route (grille 5x5)
- ! Améliorer l'UI/UX
  - + Joystick plus agréable
  - + Implémentation figma :
    - scroll palette
    - toggle bouton
    - help mini button
    

-

### Screen

- Affichage du QRCode
  - /!\ ~~(+) QRcode static~~
  - _ ++ QRcode dynamique pour jouer avec plusieurs écran différents
- Terminer la partie gauche
  - ! (+) Figma
  - ! + ~~Implémentation mvp~~
  - ! implémentation totale
- ! Adapter à la taille de l'écran
  - + Taille du canvas adapative
  - ++ Communication au back des dimensions

## Back

- /!\ Stockage de la grille
  - (+) Choix techno Mongo/PostGreSQL
  - ++ Implémentation
- /!\ Route pour récupérer la grille
  - + Mise à jour de la grille si changement
  - (+) Création de la route
- JB -> ! ++ Gestion de plusieurs écran "screen"
  - Gestion de la taille de l'écran (taille différente entre les screen)
  - Cookie de connexion à un écran particulier (pour phone)
- /!\ Sécurité de connexion des screen
  - (+) Blocage si écran déjà présent
  - ++ Cookie de connexion pour screen, pour empêcher n'importe qui de se connecter
  - ++ Cookie de connexion de la page admin
- ! Gestion de la déconnexion des phone
  - + Gestion dans le back
  - + Communication au screen (pour effacer les curseurs)

## Admin

- _ Creer une page admin
  - + Visualisation du screen 
  - ++ Visualisation des screen
  - ++ Blocage des transmissions vers un screen de manière temporaire
  - + Effacer une zone 
    - + Mettre carré blanc
    - ou ++ supprimer les derniers pixels

## Aller plus loin

- Jeux
  - agar.io
  - Démineur