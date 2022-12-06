<?php

class Controller {

    public function index() {
        require_once 'templates/home.php';

    }


    /**
     * Check validaty of register form user inputs and return errors
     * @return Array - the list of errors
     */
    public function valid_inputs() {
        $errors = [];

    
        if($_SERVER["REQUEST_METHOD"] == "POST") {
    
            // username
            if(empty($_POST["username"])) {
                $errors['username'] = "username is required";
                // array_push($errors, "username is required");
            } 
            else {
                $username = $_POST["username"];

                $user_chars = preg_match("/^[a-zA-Z0-9- ]*$/", $username);
                // 2 spaces not allowed

                if(!$user_chars ||  strlen($username) < 2 || strlen($username) > 30) {
                    $errors['username'] = "username must be between 2 and 30 characters in length and not include symbols";
                    // array_push($errors, "username must be between 2 and 30 characters in length and not include symbols");

                }
            }


            // email
            if(empty($_POST["email"])) {
                $errors['email'] = "email is required";
                // array_push($errors, "email is required");

            } 
            else {
                $email = $_POST["email"];

                // well-formed
                if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $errors['email'] = "invalid email format";
                    // array_push($errors, "invalid email format");

                }
            }


            // password
            if(empty($_POST['password'])) {
                $errors['password'] = "password is required";
                // array_push($errors, "password is required");

            }  
            else {
                $password = $_POST['password'];
                
                // Validate password strength
                $pass_uppercase = preg_match('@[A-Z]@', $password);
                $pass_lowercase = preg_match('@[a-z]@', $password);
                $pass_number    = preg_match('@[0-9]@', $password);
                $pass_specialChars = preg_match('@[^\w]@', $password);

                if(!$pass_uppercase || !$pass_lowercase || !$pass_number || !$pass_specialChars || strlen($password) < 8) {
                    $errors['password'] = 'password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
                    // array_push($errors, "password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.");

                }
            }


            // r password
            if(empty($_POST['r-password'])) {
                $errors['r-password'] = "repeat password is required";
                // array_push($errors, "password must be repeated");

            }  
            else {
                $r_password = $_POST['r-password'];

                if($r_password !== $_POST['password']) {
                    $errors['r-password'] = 'passwords must be identical.';
                    // array_push($errors, "password must be identical");

                }
            }
        }

        return $errors;
    }


    /**
     * 
     */
    public function register() {
        // get inputs value from register form
        // $email = $_POST['email'];
        // $username = $_POST['username'];
        // $password = $_POST['password'];        
        // $r_password = $_POST['r-password'];

        // check for validation
        $errors = $this->valid_inputs();

        // no errors, acces
        if(empty($errors)) {
            die('register !');
        } 

        // else display error on template
        $_POST['register-error'] = $errors;
        $this->index();
    }


    
    /**
     * Check correspondance between user inputs from connexion form and the database, by calling a manager method
     */
    public function login() {
        // get inputs value from connection form
        $username = $_POST['username'];
        $password = $_POST['password'];

        // check for validation
        $errors = $this->valid_inputs();

        // remove unused errors
        unset($errors['email']);
        unset($errors['r-password']);


        // fetch from database
        if(empty($errors)) {
            // check in database by calling manager function with username in param
            $result = $GLOBALS['manager']->get_user($username);
            $result = $result->fetch();

            // check ifthe username as been find in the database
            if($result !== false) {

                // check password correspondance
                if(password_verify($password, $result['password'])) {
                    // acces, passing by the index
                    header('Location: index.php?action=acces');
                }

            }
        }


        // if user not find or wrong password, return to connection page and notice user
        $_POST['connexion-error'] = 'wrong username or password';
        $this->index();

    }
}