<?php
/**
 * Acces data object
 */

class Manager {
    private $host;
    private $base;
    private $user;
    private $password;

    
    public function __construct($host, $base, $user, $password) {
        $this->host = $host;
        $this->base = $base;
        $this->user = $user;
        $this->password = $password;
    }


    /**
     * Init this PDO by reading properties
     */
    public function get_pdo() {

        $h = $this->host;
        $b = $this->base;
        $u = $this->user;
        $p = $this->password;

    
        try {
            $pdo = new PDO("mysql:host=$h;dbname=$b", $u, $p);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e){
            echo "Error : " . $e->getMessage();
        }
    
        return $pdo;
    }


    /**
     * Get user data from database by username
     */
    public function get_user($username) {
        $pdo = $this->get_pdo();

        try {
            $query = $pdo->query("SELECT * FROM users WHERE username='" . $username . "'");

        }
        catch (Exception $e) {
            die('ERROR on ' . __METHOD__ . ': ' . $e->getMessage());
        }

        return $query;
    }
}