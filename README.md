# ChatWave — 15 interfaces type messagerie (projet académique)

Site web interactif en **HTML / CSS / JavaScript pur** (aucune dépendance,
aucune installation nécessaire) présentant 15 écrans d'une application de
messagerie inspirée de WhatsApp, affichés dans un mockup de téléphone.

Projet pédagogique original — logo, identité visuelle et contenus sont
fictifs ; il ne s'agit pas d'une reproduction du produit officiel WhatsApp.

## Comment l'ouvrir

Aucune installation requise : double-clique simplement sur `index.html`
pour l'ouvrir dans ton navigateur (Chrome, Firefox, Edge...).

Ou, pour un rendu plus fiable (certains navigateurs restreignent les
fichiers locaux) :
```bash
python -m http.server 8000
```
puis ouvre `http://127.0.0.1:8000`.

## Les 15 écrans

1. Démarrage (splash screen)
2. Bienvenue / conditions d'utilisation
3. Saisie du numéro de téléphone
4. Vérification du code OTP (avec avancement automatique entre les cases)
5. Configuration du profil
6. Liste des discussions (écran principal)
7. Conversation individuelle (messages envoyables en direct)
8. Conversation de groupe
9. Liste des statuts
10. Visionnage d'un statut (barres de progression)
11. Nouvelle discussion / liste de contacts
12. Journal des appels
13. Appel vocal en cours (chronomètre fonctionnel)
14. Appel vidéo en cours (chronomètre fonctionnel)
15. Paramètres

## Navigation

- Le **panneau de gauche** permet d'accéder directement à n'importe lequel
  des 15 écrans (pratique pour la correction / la soutenance).
- À l'intérieur du téléphone, la navigation est aussi **fonctionnelle** :
  cliquer sur une conversation l'ouvre, cliquer sur un appel lance l'écran
  d'appel correspondant, les flèches "retour" fonctionnent, etc.
- Les onglets Discussions / Statuts / Appels en haut de l'écran principal
  sont cliquables.

## Architecture du code

```
whatsapp_ui/
├── index.html        # Structure des 15 écrans
├── css/style.css      # Thème, mockup téléphone, bulles de chat
├── js/data.js          # Données de démonstration (contacts, messages, appels)
└── js/app.js            # Logique de navigation et d'interaction
```

## Points techniques à mettre en avant

- Architecture **SPA (Single Page Application)** : un seul fichier HTML,
  navigation gérée en JavaScript via `classList` (`.screen.active`)
- Séparation données / logique / présentation (`data.js`, `app.js`, `style.css`)
- Manipulation du DOM : génération dynamique des listes à partir de tableaux
  JavaScript (`CONTACTS`, `CALLS`, `STATUSES`...)
- Gestion d'état simple (conversation active, minuteur d'appel)
- Interface responsive (le mockup s'adapte aux petits écrans)

## Pistes d'amélioration (bonus pour la soutenance)

- Persistance des messages envoyés avec `localStorage`
- Mode sombre complet
- Transitions animées entre écrans
- Recherche fonctionnelle dans la barre de recherche
