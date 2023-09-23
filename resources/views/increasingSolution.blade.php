<!DOCTYPE html>
<html>
<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Augmentation de votre facture d'électricité de 10% - Voici une solution intéressante !</title>

        <!-- <link rel="stylesheet" href="/css/styles.css"> -->
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

            * { font-family: 'Lato', sans-serif;  box-sizing: border-box;}

            body {margin:0; padding:0}

            /* Header */
            header { background-color: #bfdbfe; }

            div#header { display:flex; flex-direction:column; gap:10px; padding:10px 5px; max-width: 700px; margin: auto; }

            #logo { min-height: 120px; width: 90%; max-width: 250px; margin: auto; position: relative; }

            #logo > img { width: 100%; position: absolute; top: -25px; }

            #menu { flex:1; display:flex; justify-content:center; align-items:center; gap:12px; }

            #menu > a { text-decoration:none; text-transform: uppercase; font-weight: bold; color:#ffffff; font-size:0.7em; display: flex; flex-direction: column; gap: 8px; }

            #menu > a span { display: block; height: 1px; background-color: white; border-radius: 4px; width: 0; transition: all .5s ease-in-out; }

            #menu > a:hover span { width:100%; }

            /* Content */
            #content { max-width: 700px; margin: 15px auto; }

            #content p { text-align: justify; letter-spacing: .5px; display: flex; flex-direction: column; gap: 15px; padding: 15px; line-height: 30px; font-size: .9em; }

            #content img { max-width: 500px; margin: auto; }

            #content a { color: #1e40af; font-weight: bold;}

            /* Footer */
            #footer-logo{ width:90%; max-width: 300px; margin: auto; position: relative; height: 130px;}

            #footer-logo > img{ width:100%;  position: absolute; top: -35px;}

            footer { display: flex; flex-direction: column; gap: 20px; padding: 30px 0; background-color: #dbeafe; }

            #footer-head { max-width: 700px; width: auto; display: flex; flex-direction: column;  margin: 0 auto; padding: 0 25px; gap:15px;}

            #footer-head div { display: flex; flex-direction: column; gap: 20px; padding: 8px;}

            #footer-head div a{ color: #374151; text-decoration: none; font-size: .89em; font-weight: bold;}

            #footer-head div a.btn_primary{ float: left; border-radius: 20px; padding: 10px 20px; color: #f8fafc; border: 1.5px solid #f8fafc; transition: all .5s ease;}

            #footer-head div a.btn_primary:hover{ background-color: #f8fafc; color:#374151 ;}

            #footer-head div a.btn_normal{  padding-left: 8px; text-transform: capitalize;}

            #footer-foot { width: 100%; max-width: 700px; margin: auto; text-align: center; color: #374151; font-size: .89em; padding: 0 25px}


            /* Medias */
            @media only screen and (min-width: 450px) {
                
                #menu > a { font-size:0.75em; }
            
                #menu { gap: 15px }
            }

            @media only screen and (min-width: 530px) {
                
                div#header { flex-direction:row!important; gap:0px; padding: 10px; }

                #logo { min-width: 190px; width: 30%; max-width: 250px; margin: none; min-height: 70px; }

                #logo img {top: -30px; left: -25px;}
                
                #menu { justify-content:flex-end; gap: 20px; }

                #menu > a { font-size:.78em;  }

                footer { gap: 50px; }

                
                #footer-head { flex-direction: row; width: 100%}

                #footer-head div { width: 50%;}

                #footer-foot { text-align: left; }

                
            }
        </style>
    </head>
    <body>
        <header>
            <div id="header">
                <div id="logo"> <img src="https://lenergia.fr/images/logo-light.png" draggable="false" class="w-full"> </div>
                
                <div id="menu">
                    <a href="#">Nos Offres <span></span></a>
                    <a href="#">Qui sommes-nous ? <span></span></a>
                    <a href="#">Nous Contacter <span></span></a>
                </div>
            </div>
        </header>

        <div id="content">
            <p>
                <span><strong>Bonjour cher(e) {{$name}}</strong></span>
                <span>J'espère que vous allez bien et que votre rentrée se passe agréablement !</span>
                <span>Nous nous permettons de vous écrire car nous avons récemment remarqué que votre facture d'électricité a connu une hausse (<em>augmentation de 10%</em> du tarif d'électricité depuis le 2 août 2023). </span>
                <span>Nous comprenons que cela peut être stressant de voir les coûts augmenter, et nous voulions vous informer <strong>d'une solution</strong> qui pourrait vous être bénéfique !</span>
                <span>Alors, Avez-vous déjà pensé à <strong>l'énergie solaire</strong> pour alimenter votre maison ?</span>
                <span>L'énergie solaire est une option écologique et durable qui peut vous permettre de réduire votre dépendance aux tarifs électriques qui n'arrête pas d'augmenter.</span>
                <img src="/images/works/img/photovoltaique.png" alt="panneaux solaire photovoltaique">
                <span>Optez pour <strong>une solution de panneaux solaires</strong> pourrait vous aider à produire votre propre énergie, ce qui vous offrira une importante indépendance énergétique et pourrait même vous donner le privilège de vendre le surplus d'électricité.</span>
                <span>Bien sûr, je comprends que c'est une décision importante, et je ne souhaite pas vous pousser à quoi que ce soit ;</span> 
                <span>Je voulais simplement partager cette idée avec vous, car cela pourrait être une opportunité intéressante pour réduire vos coûts d'électricité.</span>
                <span>Si vous souhaitez en savoir plus sur <strong>l'énergie solaire</strong> ou si vous avez des questions à ce sujet, n'hésitez pas à nous contacter. </span>
                <span>Je serais ravi de vous fournir plus d'informations ou de vous mettre en relation avec un expert en la matière, </span>
                <span>Ou bien, <a href="https://lenergia.fr/">VISITEZ NOTRE SITE</a> pour plus de renseignement.</span>
            </p>
        </div>
        
        <footer>
            <div id="footer-logo">
                <img src="https://lenergia.fr/images/logo-light.png" alt="logo">
            </div>
            <div id="footer-head">
                <div>
                    <span><a href="https://lenergia.fr/" class="btn_primary">VISITEZ LENERGIA</a></span>
                    <a href="https://lenergia.fr/about-us" class="btn_normal">Qui Sommes Nous ?</a>
                    <a href="https://lenergia.fr/contact-us" class="btn_normal">Contacter Nous</a>
                </div>
                <div>
                    <a href="https://lenergia.fr/panneaux-solaires-photovoltaiques" class="btn_normal">Panneaux Solaires Photovoltaïques</a>
                    <a href="https://lenergia.fr/panneau-solaire-thermique" class="btn_normal">Panneaux solaires thermiques</a>
                    <a href="https://lenergia.fr/panneau-solaire-hybrides" class="btn_normal">Panneaux solaires hybrides</a>
                    <a href="https://lenergia.fr/chauffe-eau-thermodynamique" class="btn_normal">Ballon thermodynamique</a>
                </div>
            </div>

            <div id="footer-foot">© 2023 Lenergia. Tous les droits réservés</div>
        </footer>
    </body>
</html>