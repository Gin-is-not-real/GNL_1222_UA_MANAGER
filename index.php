<?php
require_once 'lib/securize_form.php';

require_once 'src/Manager.php';
require_once 'src/Controller.php';
require_once 'config.php';

// die(phpinfo());
error_reporting(E_ALL & ~E_DEPRECATED);
ini_set("display_errors", 1);


// globals objects here
$GLOBALS['manager'] = new Manager($DATABASE['host'], $DATABASE['base'], $DATABASE['user'], $DATABASE['password']);
$GLOBALS['controller'] = new Controller();


// routing
try {

    // secure POST and GET using script securize_form.php
    $_POST = valid_data_array($_POST);
    $_GET = valid_data_array($_GET);
    // anti-bot check: if this input is filled, return to index
    if((isset($_POST['atbt']) && !empty($_POST['atbt'])) OR( isset($_GET['atbt']) && !empty($_GET['atbt']))) {
        // do something
        die("it's seems you are a bot !");
        return;
    }



    /**
     * default
     * go to connection page
     */
    if(!isset($_GET['action'])) {
        require_once 'templates/connection.php';
        // require_once 'templates/register.php';

    }
    else {
        /**
         * for testing
         */
        if($_GET['action'] === 'test') {
            die('index.php TEST PAGE');
        }


        // REGISTER PART

        /**
         * register
         * from register.php form
         * 
         */
        if($_GET['action'] === 'register') {
            $GLOBALS['controller']->register();
        }


        // CONNEXION PART

        /**
         * login
         * from connection.php form
         * 
         */
        if($_GET['action'] === 'login') {
            $GLOBALS['controller']->login();
        }

        /**
         * acces
         * from controller->login() if user inputs are goods
         * 
         */
        if($_GET['action'] === 'acces') {
            die('acces !' . var_dump($_POST));
        }

    }


} catch (Exception $e) {
    die('ERROR: ' . $e->getMessage());
}