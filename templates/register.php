<article>

    <form id="UA-register" action="index.php?action=register" method="post">

        <header>
            <h2>Register</h2>
            <h3>Please enter valid username, password and email</h3>

            <!-- for user notifications, like errors -->
            <div class="notice">

                <ul>
                <!-- POST connexion error -->
                <?php
                    if(!empty($_POST['register-error'])) {

                        foreach ($_POST['register-error'] as $key => $value) {
                            echo '<li>';
                            echo $_POST['register-error'][$key];
                            echo '</li>';
                        }

                    }     
                ?>
                </ul>


            </div>
        </header>


        <!-- inputs -->
        <div>
            <div>
                <label for="email" class="required">email</label>
                <input type="email" name="email" id="ua-reg-email" required="required">
            </div>

            <div>
                <label for="username" class="required">username</label>
                <input type="text" name="username" id="ua-reg-username" required="required">
            </div>

            <div>
                <label for="password" class="required" >password</label>
                <input type="password" name="password" id="ua-reg-password" required="required">
            </div>
            <div>
                <label for="r-password" class="required" >repeat password</label>
                <input type="password" name="r-password" id="ua-reg-rpassword" required="required">
            </div>

            <div>
                <input type="submit" value="Register">
            </div>
        </div>

        <!-- special -->
        <input type="text" name="atbt" id="atbt" value="" hidden>

    </form>

</article>