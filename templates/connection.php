<article>

    <form action="index.php?action=login" method="post">

        <header>
            <h2>Connexion</h2>
            <h3>Please enter username and password</h3>

            <!-- for user notifications, like errors -->
            <div class="notice">

                <!-- POST connexion error -->
                <?php
                    if(!empty($_POST['connexion-error'])) {

                        // DEV
                        echo var_dump($_POST['connexion-error']);
                        echo '</br>';

                        echo '<ul><li>';
                        echo $_POST['connexion-error'];
                        echo '</li></ul>';
                    }     
                ?>
                </ul>

            </div>
        </header>


        <!-- inputs -->
        <div>
            <div>
                <label for="username" class="required">Username</label>
                <input type="text" name="username" required>
            </div>

            <div>
                <label for="password" class="required">Password</label>
                <input type="password" name="password" class="required" required>
            </div>

            <div>
                <input type="submit" value="Connexion">
            </div>
        </div>

        <!-- special -->
        <input type="text" name="atbt" id="" value="" hidden>

    </form>

</article>