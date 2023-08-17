import React, {useEffect, useState} from 'react'

export default function Create(){
    // State variabler
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [conPsw, setConPsw] = useState('');
    const [pswMatch, setPswMatch] = useState(true);
    const [accept, setAccept] = useState(false);

    // Funksjon sjekker om passord er like
    const checkPsw = () => {
        setPswMatch(psw === conPsw);
    };

    // Kjører checkPsw når psw eller conPsw endres
    useEffect(() => {
        checkPsw();
    }, [psw, conPsw]);

    // Funksjon håndterer bruker registrering
    const usrReg = async (e) => {
        e.preventDefault();

        const usrData = {
            first,
            last,
            email,
            password: psw,
            confirmPassword: conPsw,
            accept
        };

        try {
            // const response = await fetch('http://localhost:8080/register', {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', { // Falskt REST API for testing
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usrData)
            });
            // Logger respons data
            const responseData = await response.json();
            console.log('Respons:', {
                status: response.status,
                data: responseData
            });
            // Logger status for registrering 
            if (response.ok){
                console.log('Bruker er registrert');
            } else {
                console.log('Feil ved registrering');
            }
        }catch (error){
            console.log('Feil:', error)
        }
    };

    return(
        <div className = "opprett">
            <h1>Opprett bruker</h1>
            <form onSubmit={usrReg}>

                {/*Fornavn og etternavn*/}
                <div className="usr">
                    <div className="first">
                        <label>Fornavn</label>
                        <input type="text" name="first" value={first} onChange={(e) => setFirst(e.target.value)}/>
                    </div>
                    <div className="last">
                        <label>Etternavn</label>
                        <input type="text" name="last" value={last} onChange={(e) => setLast(e.target.value)}/>
                    </div>
                </div>

                {/*E-post*/}
                <div className="epost">
                    <label>E-postadresse</label>
                    <input type="email" name="epost" id="epost" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                {/*Passord*/}
                <div className="psw">
                    <div className="psw-fst">
                        <label htmlFor="password">Passord</label>
                        <input type="password" name="password" id="password" className="psw-icon" value={psw} onChange={e => {
                            setPsw(e.target.value);
                            checkPsw();
                            }} required/>
                    </div>
                    <div className="psw-snd">
                        <label htmlFor="confirm-password">Gjenta passord</label>
                        <input type="password" name="confirm-password" id="confirm-password" className="psw-icon" value={conPsw} onChange={e => {
                            setConPsw(e.target.value);
                            checkPsw();
                            }} required/>
                            {!pswMatch && <p>Passord er ulike.</p>}
                    </div>
                </div>

                {/*Personvern*/}
                <div className="personvern">
                    <p>
                        <input type="checkbox" name="personvern" id="godta" checked={accept} onChange={(e) => setAccept(e.target.checked)}/>
                        Jeg godtar <a href="http://databehandligsavtalen...">Databehandligsavtalen</a>.
                    </p>
                </div>

                {/*Submit knapp*/}
                <button type="submit" id="btn-b" className="sub-btn">Registrer</button>
            </form>
        </div>
    );
}