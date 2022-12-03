# GNL GNL User Accounts MANAGER
Gestionnaire de compte d'utilisateur

## FONCTIONNALITEES
- Interface de connection par mot de passe


## FONCTIONNEMENT
### principe
- Les actions de **formulaires** envoient vers l'index  

- l'intégrité des données y est vérifié par le script **securize_form** 

- l'**index** effectue des actions en fonction du GET 'action' reçu:
    - appeller un template
    - appeller une fonction de Controller
    - [provisoire] afficher un message  

- le **Controller**:
    - traite les données de form (venant de l'index ?), 
    - appelle des fonctions de Manager
    - renvoi vers un template ou à l'index

- le **Manager** se connecte à la base de données et récupére des informations


### UTILISATION
- un fichier **config.php** contenant les informations de connection à la base est nécessaire
```
<?php
$DATABASE = [
    'host' => 'your_host_name',
    'base' => 'your_base_name',
    'user' => 'your_user_name',
    'password' => 'your_user_name',
];
```