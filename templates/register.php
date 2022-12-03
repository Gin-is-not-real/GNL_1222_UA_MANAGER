<article>

    <form action="index.php?action=register" method="post">

        <header>
            <h2>Register</h2>
            <h3>Please enter valid username, password and email</h3>

            <!-- for user notifications, like errors -->
            <div class="notice">

                <!-- POST connexion error -->
                <?php
                     echo isset($_POST['register-error']) ? $_POST['register-error'] : '';      
                ?>

            </div>
        </header>


        <!-- inputs -->
        <div>
            <div>
                <label for="email">email</label>
                <input type="email" name="email" id="" required>
            </div>

            <div>
                <label for="username">username</label>
                <input type="text" name="username" id="" required>
            </div>

            <div>
                <label for="password">password</label>
                <input type="password" name="password" id="" required>
            </div>
            <div>
                <label for="r-password">repeat password</label>
                <input type="password" name="r-password" id="" required>
            </div>

            <div>
                <input type="submit" value="Register">
            </div>
        </div>

        <!-- special -->
        <input type="text" name="atbt" id="" value="" hidden>

    </form>

</article>