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
                <label for="username">Username</label>
                <input type="text" name="username" id="" required>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="" required>
            </div>

            <div>
                <input type="submit" value="Connexion">
            </div>
        </div>

        <!-- special -->
        <input type="text" name="atbt" id="" value="" hidden>

    </form>

</article>