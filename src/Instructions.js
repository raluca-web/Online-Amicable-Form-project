import React from 'react';
import ReactDOM from 'react-dom';
import {Link, NavLink} from "react-router-dom";
import Questions from "./Questions";

class Instructions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <div className={"instructions"}>
                <div className={"instructions-one"}>
                    <h1>Constatarea Amiabilă – model de completare</h1>
                    <p>
                        Pot fi soluționate prin procedura de Constatare Amiabilă (CA) accidentele rutiere survenite pe teritoriul României,
                        în urma cărora au rezultat doar pagube materiale și în care au fost implicate doar două vehicule (ambele deținând
                        o asigurare RCA). Procedura este opțională și oferă conducătorilor auto posibilitatea de a iniția procesul de
                        constatare a daunei fără ca documentele să fie întocmite de Poliție.
                        Formularul Constatare amiabilă de accident poate fi utilizat în România indiferent de locul producerii accidentului.
                    </p>
                    <br/>
                    <p>
                        Scopul procedurii de Constatare Amiabilă este obținerea de informații privind împrejurările producerii
                        accidentului și NU stabilirea pe loc a vinovăției, acest lucru fiind lăsat în sarcina asigurătorilor RCA ai vehiculelor
                        implicate în accident. Completarea şi semnarea formularului Constatare amiabilă de accident reprezintă
                        descrierea unui cumul de elemente şi fapte care contribuie la soluţionarea dosarelor de daună, nereprezentând o
                        recunoaştere a răspunderii conducătorilor auto.
                    </p>
                    <br/>
                    <p>
                        Formularul Constatare amiabilă de accident poate fi utilizat în relaţia cu asigurătorii fără a mai fi necesară
                        întocmirea documentelor de constatare de către poliţia rutieră, numai dacă este completat şi semnat de către
                        ambii conducători de vehicule implicaţi în accident. Dacă una dintre părți nu este de acord cu semnarea acestui
                        document, constatarea accidentului va putea fi făcută numai de unitatea de poliție competentă pe raza căreia s-a
                        produs accidentul. În situaţia în care unul dintre vehicule este staţionat sau parcat, formularul poate fi completat
                        şi de către proprietarul sau utilizatorul acestuia.
                    </p>
                    <br/>
                        Asigurătorii stabilesc dreptul la despăgubiri, cu respectarea condiţiilor contractuale şi ale dispoziţiilor legale în
                        vigoare.
                </div>
                <div className={"instructions-two"}>
                    <h2>Pașii completării formularului de Constatare amiabilă</h2>
                    <p>
                        Conducătorii celor două vehicule implicate în accident completează împreună un singur formular de Constatare
                        Amiabilă. Formularul are 2 pagini autocopiative cu aceeaşi valoare juridică. Fiecare conducător auto își păstrează
                        câte o pagină. Deși legislația nu specifică în mod expres, termenul maxim în care trebuie să transmiți formularul
                        Constat Amiabil către compania de asigurare este de 24 ore.
                        <br/>
                        Recomandare: după completarea formularului împreună cu celălalt șofer, e bine să faceți câte o copie după toate
                        documentele acestuia (asigurare RCA, talon, buletin). Acestea pot fi utile când veți solicita despăgubirea.
                    </p>
                    <p>
                        Câmpurile ce trebuie completate de către conducătorii vehiculelor implicate în accident se referă la:
                    </p>
                    <ol>
                        <li>data şi locul producerii accidentului</li>
                        <li>datele de identificare ale conducătorilor auto implicaţi</li>
                        <li>datele proprietarilor vehiculelor implicate</li>
                        <li>datele vehiculelor implicate şi ale propriilor asigurători</li>
                        <li>circumstanţele producerii accidentului</li>
                        <li>schița accidentului</li>
                    </ol>
                    <p>
                        Formularul CA completat corect și integral trebuie depus la compania de asigurări care va elibera documentele
                        necesare intrării în reparație a autovehiculului. Obținerea documentului de intrare in reparație (autorizația de
                        reparație) este obligatorie.
                        <br/>
                        Depunerea formularului de către oricare dintre cele două părți implicate reprezintă avizare de daună și obligă
                        asigurătorul să efectueze constatarea pagubelor și, apoi, să stabilească vinovăția.
                        <br/>
                        Recomandare: obțineți documentul de intrare în reparație în cel mult 24 de ore de la data producerii accidentului
                        prin prezentarea cu vehiculul implicat în accident la oricare dintre asigurătorii RCA ai vehiculelor implicate în
                        accident.
                    </p>
                </div>
            </div>);
    }
}
export default Instructions;