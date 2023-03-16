import React from 'react'

export default function Create(){
    return(
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
                    <input type="checkbox" name="personvern" id="godta" />Jeg godtar
                    <a href="http://databehandligsavtalen...">Databehandligsavtalen</a>.
                </p>
            </div>
            <button type="submit" id="btn-b" class="sub-btn">Registrer</button>
        </div>
    )
}