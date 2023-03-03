import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const opprett = (
    <div class="container">
        <div class="info">
            <h1>Informasjon</h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            velit quia temporibus saepe fugit repellendus officia, debitis
            nostrum illo possimus eligendi. Est molestiae ratione quibusdam
            laborum animi repudiandae deleniti non.
            <br />
            <br />
            <b>Eu ultrices:</b> Dicta velit quia temporibus saepe fugit
            repellendus officia, debitis nostrum illo possimus eligendi. Est
            molestiae ratione quibusdam laborum animi repudiandae deleniti non.
            </p>
            <button id="btn-w">Jeg har konto</button>
        </div>
        <div class = "opprett">
            <h1>Opprett bruker</h1>
            <div class="usr">
                <div class="sir">
                    <label>Fornavn</label>
                    <input type="text" name="sir" />
                </div>
                <div class="last">
                    <label>Etternavn</label>
                    <input type="text" name="last" />
                </div>
            </div>
            <div class="epost">
                <label>E-postadresse</label>
                <input type="email" name="epost" id="epost" required />
            </div>
            <div class="psw">
                <div class="psw-fst">
                    <label>Passord</label>
                    <input
                        type="password"
                        name="password"
                        class="psw-icon"
                        required
                    />
                </div>
                <div class="psw-snd">
                    <label>Gjenta passord</label>
                    <input
                        type="password"
                        name="confirm-password"
                        class="psw-icon"
                        required
                    />
                </div>
            </div>
            <div class="personvern">
                <p>
                    <input type="checkbox" name="personvern" id="godta" /> Jeg godtar
                    <a href="http://databehandligsavtalen...">Databehandligsavtalen</a>.
                </p>
            </div>
            <button type="submit" id="btn-b" class="sub-btn">Registrer</button>
        </div>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(opprett)