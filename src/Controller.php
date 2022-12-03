<?php

class Controller {
    
    /**
     * 
     */
    public function login() {
        // get inputs value from connection form
        $username = $_POST['username'];
        $password = $_POST['password'];


        // check in database by calling manager function with username in param
        $result = $GLOBALS['manager']->get_user($username);
        $result = $result->fetch();


        // check if the username as been find in the database
        if($result !== false) {

            // check password correspondance
            if(password_verify($password, $result['password'])) {
                // acces, passing by the index
                header('Location: index.php?action=acces');
            }

        }


        // if user not find or wrong password, return to connection page and notice user
        $_POST['connexion-error'] = 'wrong username or password';
        require_once 'templates/connection.php';
    }
}