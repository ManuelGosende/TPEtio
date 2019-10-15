<?php

class inmobiliarias{

    function __construct(){

    }
    define("BASE_URL", 'http://'.$_SERVER["SERVER_NAME"].':'.$_SERVER["SERVER_PORT"].dirname($_SERVER["PHP_SELF"]).'/');
    define("LOGIN", BASE_URL . 'login');
    define("VER", BASE_URL . 'ver');
    
    public function getAll() {
        $query = $this->db->prepare('SELECT * FROM tareas ORDER BY finalizada ASC');
        $query->execute();

        return $query->fetchAll(PDO::FETCH_OBJ);
    }
    function getTasks() {
        $db = connect();
        $query->execute();

        return $query->fetchAll(PDO::FETCH_OBJ);
    }

}

