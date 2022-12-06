# GNL User Accounts MANAGER

## TODO
[ ] - sécurité
    [X] - toutes les données POST et GET passant dans index.php sont verifiée par la lib 'securize_form'
    [ ] - mot de passe et username hashés

[X] - formulaire de connexion (simple)
    [ ] - indications à l'user
        [?] - format attendu *par sécurité il vaut mieux le laisser ainsi ?*
        [ ] - champs requis
    [X] - verification
        [X] - inputs securisés (via index.php)
        [X] - input anti bot
    *seulement si necessaire:*
    [ ] - validation
        [?] - php *pour éviter appel database ?*
        [?] - js *rester sans par sécurité (ne pas donner trop d'indications)*
    [X] - notification des erreurs
        [ ] - saisie vide (js)
        [X] - donnée non trouvée (par sécurité on n'indiquera pas si l'erreur proviens de mot de passe ou du nom d'user)
    [ ] - perte mdp 

[X] - formulaire d'enregistrement
    [ ] - indications user
        [ ] - format attendu
        [ ] - champs requis
    [X] - verification
        [X] - inputs securisés (via index.php)
        [X] - input anti bot 
    [ ] - validation
        [X] - php
        [ ] - js
    [X] - notification des erreurs
        [ ] - saisie vide (js)
        [X] - saisie non valide (php)
        [ ] - donnée non conforme (username déja dans database)

[ ] - Validations js
    [X] - bypass des submits

        
### index
- action: void
    *default*
    - [provisoire] appelle un template

- action: test
    *pour effectuer des test de routing*
    - `die('index.php TEST PAGE');`

- action: register
    - `$GLOBALS['controller']->login();`

- action: login
    - `$GLOBALS['controller']->login();`

- action: acces
    - [provisoire] `die('acces !');`




## errors treatment
### controller





## erreurs a noter
ERROR on Manager::get_user: SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''gin' at line 1

BAD
$query = $pdo->query("SELECT * FROM users WHERE username='" . $username);

GOOD
$query = $pdo->query("SELECT * FROM users WHERE username='" . $username . "'");


## a noter
if (!preg_match("/^[a-zA-Z-' ]*$/",$_POST["username"])) {
    $nameErr = "Only letters and white space allowed";
}