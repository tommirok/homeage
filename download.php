<?php

     // Get the password
          $pw = md5($_POST['password']);

     // Compare against the stored password
          $valid_pw = md5("J01ku");

          if($pw != $valid_pw){
               echo "Error! You do not have access to this file";
          }else{
               header("Location: assets/CV (updated).docx");
          }

?>