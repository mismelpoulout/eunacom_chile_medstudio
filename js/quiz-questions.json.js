const quizQuestions = [
    {
        "question": "Un paciente de 68 años, diabético de larga data, fumador, presenta pérdida brusca de la visión del ojo derecho, sin dolor. ¿Cuál es el diagnóstico más probable? ",
        "options": [
            "Infarto occipital ",
            "Desprendimiento de retina ",
            "Hemorragia vítrea ",
            "Degeneración macular ",
            "Edema macular"
        ],
        "answer": "Hemorragia vítrea",
        "feedback": "Hemorragia vitrea es tipico en el paciente diabetico que ademas fuma y con una clinica de pérdida brusca de la visión , sin dolor"
    },
    {
        "question": "Se busca la asociación entre distintos parámetros con el cáncer de tiroides, en un estudio de caso – control, con el Odds Ratio (OR), más un intervalo de confianza (IC) al 95%, obteniéndose los resultados hipotéticos que se muestran a continuación. ¿Qué factor es más importante en esta asociación? ",
        "options": [
            "Antecedentes familiares: OR: 1,88 ; IC [0,56 – 4,01] ",
            "Edad: OR: 2,6 ; IC [0,95 – 3,17] ",
            "Sexo masculino: OR: 0,56 ; IC [0,33 – 0,87] ",
            "Tiroiditis de Hashimoto: OR: 4,6 ; IC [0,7 – 6,2] ",
            "Exposición a radiación: OR: 1,89 ; IC [1,0 – 3,01] "
        ],
        "answer": "Sexo masculino: OR: 0,56 ; IC [0,33 – 0,87]",
        "feedback": "Sexo masculino: OR: 0,56 ; IC [0,33 – 0,87] estudiatelo"
    },
    {
        "question": "En un estudio se realiza la validación y estandarización de las encuestas a aplicar. ¿Qué tipo de sesgo se busca evitar? ",
        "options": [
            "Sesgo de memoria ",
            "Sesgo de información ",
            "Sesgo de confusión ",
            "Sesgo de notificación ",
            "Sesgo del entrevistador "
        ],
        "answer": " Sesgo de información",
        "feedback": "Son los errores que se introducen durante la medición de la exposición, de los eventos u otras covariables en la población en estudio, que se presentan de manera diferencial entre los grupos que se comparan, y que ocasionan una conclusión errónea respecto de la hipótesis ejemplo: Errores introducidos por los encuestadores o personal que recoge la información"
    },

    {
        "question": " Una paciente de 42 años, que 2 meses después de un quiebre conyugal, evoluciona con un cuadro de delirio de persecución y alucinaciones auditivas, asociado a marcada tristeza, anhedonia, irritabilidad y culpa patológica. Como antecedentes psiquiátricos, ella sufrió una depresión postparto y uno de sus tíos está en tratamiento con litio. ¿Cuál es el diagnóstico más probable? ",
        "options": ["Depresión psicótica ",
            "Trastorno adaptativo mixto",
            "Trastorno esquizoafectivo ",
            "Esquizofrenia ",
            "Trastorno esquizoide "],
        "answer": "Trastorno esquizoafectivo",
        "feedback": "Trastorno esquizoafectivo por los sintomas ezquizofrenicos(alucinaciones auditivas, el delirio ) y signos deprecivos(marcada tristeza, anhedonia, irritabilidad....) "
    },
    { "question": "Un paciente de 24 años mantiene relación sexual casual hace 7 días, con penetración vaginal, sin protección evolucionando con disuria, sin otros síntomas. Al examen físico y genital, no hay alteraciones. ¿Cuál es el agente etiológico más probable? ", "options": ["Mycoplasma genitalium ", "Ureaplasma urealyticum ", "Chlamydia trachomatis ", "Trichomona vaginalis", "Escherichia coli "], "answer": "Chlamydia trachomatis", "feedback": "Chlamydia trachomatis por ser una ETS y tener solo sitomas de disuria de 7 dias de evolución" },
    { "question": "Una paciente de 56 años presenta incontinencia urinaria, con escapes de orina, en grandes cantidades, precedidos por deseos incontrolables de orinar. En ocasiones, también presenta escapes de orina en la noche. Al examen no presenta pérdida de orina con la maniobra de Valsalva y no tienen otras alteraciones. Sus urocultivos son negativos y su sedimento de orina es normal. Se solicita una ecografía que muestra vejiga de paredes delgadas, sin cálculos ni residuo postmiccional significativo. El tratamiento más adecuado es:", "options": ["Iniciar tamsulosina ", "Iniciar oxibutinina ", "Realizar cistoscopía ", "Realizar suspensión uretral con cinta transvaginal ", "Indicar ejercicios de kinesioterapia pélvica "], "answer": "Iniciar oxibutinina", "feedback": "Iniciar oxibutinina es el tratamiento de eleccion para esta patologia" },
    { "question": " Una mujer de 24 años, primípara, en trabajo de parto avanzado. Se produce desprendimiento de la cabeza fetal, sin embargo, no se produce la rotación de la cabeza, ni el descenso de los hombros. ¿Cuál es la conducta más adecuada? ", "options": ["Pivotear la cabeza ", "Realizar compresión de la región suprapúbica (maniobra de Kristeller) ", "Rotar el hombro hacia anterior ", "Realizar hiperflexión de las caderas (maniobra de McRoberts) ", "Realizar fórceps "], "answer": "Realizar hiperflexión de las caderas (maniobra de McRoberts)", "feedback": "Realizar hiperflexión de las caderas para ayudar al feto a desender ya que tiene retencion de hombros" },
    { "question": " Una paciente de 34 años, multípara, embarazada de 36 semanas, presenta pérdida de líquido abundante por los genitales, hace una hora. La especuloscpía muestra cuello cerrado, con salida de líquido y la ecografía obstétrica muestra disminución del líquido amniótico, con presentación cefálica. El registro no estresante es reactivo. ¿Cuál es la conducta más adecuada?", "options": ["Mantener conducta expectante ", "Administrar corticoides ", "Interrumpir el embarazo ", "Esperar 24 horas para inicio espontáneo del trabajo de parto", "Administrar antibióticos "], "answer": "Interrumpir el embarazo", "feedback": "Interrumpir el embarazo ya que tiene una RPM con perdida abundante de liquido asi que hay que interrumpir el embarazo por la via mas espedita" },
    { "question": " Una paciente de 27 años, cursando un embarazo de 32 semanas, consulta por dinámica uterina, con contracciones dolorosas 2 en 10 minutos, que no han cedido al uso de antiespasmódicos, ni al de nifedipino. Al examen físico presenta temperatura 38,0 grados Celsius, PA: 120/80 mmHg, FC: 80x’. Su tacto vaginal tiene un cuello cerrado, duro y posterior. El monitoreo fetal muestra latidos a 145x’. Se solicita un hemograma muestra glóbulos blancos: 11.000 por mm3. ¿Cuál es la conducta más adecuada? ", "options": ["Dejar a evolución espontánea", "Solicitar perfil biofísico", "Realizar cesárea", "Realizar amniocentesis", "Administrar tocolíticos de segunda línea "], "answer": "Realizar amniocentesis", "feedback": "se realiza por sospecha de infeccion intraamniotica" },
    { "question": "Una paciente de 28 años, cursa un embarazo de 32 semanas por amenorrea, sin controles obstétricos previos. Consulta por pérdida de líquido amniótico por genitales. Al examen físico presenta temperatura 38,5 grados Celsius, PA: 120/80 mmHg, FC: 110x’. La especuloscopía muestra salida de líquido por el orificio cervical, con pH: 7. Su tacto vaginal tiene un cuello cerrado, duro y posterior. El monitoreo fetal muestra frecuencia cardíaca fetal de 180 latidos por minuto. La ecografía obstétrica, que muestra oligoamnios y peso fetal de 1.100 gramos, equivalente a un embarazo de 29 semanas. ¿Cuál es la conducta más adecuada? ", "options": ["Interrumpir el embarazo", "Administrar corticoides y antibióticos y mantener una conducta expectante", "Solicitar Doppler materno-fetal", "Realizar amniocentesis", "Realizar amnioinfusión, con surfactante intramniótico"], "answer": "Interrumpir el embarazo", "feedback": "" },
    { "question": "Una paciente de 58 años, consulta por metrorragia de 3 días evolución. Su examen ginecológico demuestra escasa metrorragia, que proviene del OCE, sin otras alteraciones. Sus mamografías y PAP son normales y fueron realizados hace menos de un año. Se realiza una ecografía transvaginal, que muestra endometrio de 3 mm, sin masas, ni otras alteraciones. ¿Cuál es la conducta más adecuada? ", "options": ["Realizar colposcopía ", "Controlar con una ecografía en 3 meses", "Realizar legrado", "Iniciar terapia de reemplazo hormonal combinada", "Realizar biopsia de endometrio"], "answer": "Controlar con una ecografía en 3 meses", "feedback": "para ver la evolucion del endometrio y si crece por encima de 5-8mm se le realizaria legrado diagnostico" },
    { "question": " Una paciente embarazada de 10 semanas, se realiza una glicemia de ayuno en su control del embarazo, que resulta 130 mg/dl. ¿Cuál es el diagnóstico más probable? ", "options": ["Glicemia normal para el embarazo", "Intolerancia a la glucosa oral", "Diabetes mellitus gestacional", "Diabetes mellitus pregestacional", "Resistencia a la insulina"], "answer": "Diabetes mellitus pregestacional", "feedback": "se sospecha por precentar niveles elevados de glicemia antes de la primera mitad del embarazo" },
    { "question": "Una paciente de 28 años acude a la clínica de fertilidad. Presenta reglas irregulares, que ocurren cada 2 a 3 meses. Al examen físico se observa obesa y tiene hirsutismo y acné, sin alteraciones en el examen ginecológico. Se solicita prueba de HOMA, que resulta 2,1 (VN: < 2,6) y se realiza una ecografía transvaginal que muestra útero normal, con ovarios poliquísticos. ¿Cuál es el tratamiento más adecuado para lograr la fertilidad en esta paciente?", "options": ["Espironolactona", "Análogos de la GnRH", "Citrato de clomifeno", "Metformina", "Progesterona"], "answer": "Citrato de clomifeno", "feedback": "es el tratamiento de eleccion para el Sindrome de ovarios poliquisticos" },
    { "question": " Una paciente de 31 años, entra en trabajo de parto a las 38 semanas y al examinarla se constatan 3 contracciones uterinas en 10 minutos y su tacto vaginal muestra 5 cm de dilatación cervical, membranas íntegras y presentación cefálica, en espinas -1. El registro de la frecuencia cardiaca fetal está dentro de rangos normales. Se la evalúa a las 3 horas, manteniéndose sin cambios obstétricos. La conducta de elección es: ", "options": ["Mantener una conducta expectante por 1 hora y reevaluar ", "Administrar misoprostol", "Realizar cesárea", "Realizar rotura artificial de membranas y administrar anestesia epidural", "Administrar oxitocina endovenosa en goteo "], "answer": "Realizar rotura artificial de membranas y administrar anestesia epidural", "feedback": "se le realiza ya que no a evolucionado y por lo que se debe estimular para que continue con el trabajo de parto" },
    { "question": " Un niño de 18 meses presenta dolor de garganta y fiebre de 2 días de evolución de hasta 39,0°C, asociado a irritabilidad, malestar general y secreción conjuntival bilateral. Al examen físico, además, se observa faringe eritematosa exudado amigdalino bilateral y se palpan adenopatías cervicales anteriores. El agente etiológico más probable es: ", "options": ["Staphilococcus aureus  ", "Streptococcus pyogenes", "Metaneumovirus", "Adenovirus", "Virus de Ebstein Baar"], "answer": "Adenovirus", "feedback": "las infecciones mas frecuentes de la via respiratoria es probocada por virus y en este caso presenta solo sintomas de infeccion viral" },
    { "question": "Un recién nacido de término, de 5 días de vida, aún no ha eliminado meconio. Además, presenta irritabilidad, vómitos postprandiales frecuentes y distensión abdominal. Al examen tiene ano permeable y se realiza un enema baritado, que muestra colon proximal dilatado y colon distal estrecho. El examen más adecuado para confirmar el diagnóstico es:", "options": ["TAC abdominal", "Colonoscopía", "Test del sudor", "Biopsia por succión", "Cariograma "], "answer": "Biopsia por succión", "feedback": "para hacer diagnostico definitivo" },
    { "question": "Un paciente de 18 años, asintomático, acude a control médico, para evaluación para realizar deporte. Se encuentra asintomática y en su examen físico se pesquisa la presencia de un soplo sistólico de intensidad III/VI en la zona paraesternal izquierda. Su electrocardiograma es normal. ¿Cuál es el diagnóstico más probable?", "options": ["Comunicación interauricular", "Estenosis aórtica", "Comunicación interventricular", "Estenosis pulmonar", "Ductus arterioso persistente "], "answer": "Comunicación interauricular", "feedback": "es una de las cardiopatias acianoticas que suelen ser asintomaticas hasta que se manifiestan al realizar ejercicios por un aumento del flujo pulmonar con un soplo fijo con desdoblamiento del segundo ruido de III/VI" },
    { "question": "Un paciente de 85 años, institucionalizado por una demencia tipo Alzheimer y que es portador de sonda Foley a permanencia, que se cambia cada 30 días. Al momento de cambiarle la sonda, se observan orinas turbias, por lo que se realiza un urocultivo, que resulta positivo para Escherichia coli sensible solo a nitrofurantoína, gentamicina e imipenem. El paciente está asintomático, afebril, sin mayor confusión de la habitual. ¿Cuál es la conducta más adecuada? ", "options": ["Iniciar nitrofurantoína v.o.", "Iniciar gentamicina i.m.", "Iniciar imipenem e.v.", "Observar evolución, sin necesidad de retirar la sonda", "Cambiar la sonda, sin necesidad de antibióticos"], "answer": "Observar evolución, sin necesidad de retirar la sonda", "feedback": "hay que esperar la evolucion de la enfermedad mientras se le aplica el tratamiento antibiotico" },
    { "question": "Un paciente de 40 años, con antecedente de infección crónica por VIH, diagnosticado hace 4 años, consulta por diarrea de 3 meses, de tipo acuoso, sin fiebre, asociado a dolor abdominal y baja de peso. Al examen físico está afebril, tiene algorra y presenta abdomen blando, depresible, levemente doloroso a la palpación, sin signos peritoneales. ¿Cuál es el agente etiológico más probable?", "options": ["Salmonella typhi", "Clostridium difficile", "Criptococcus sp.", "Microsporidium", "Toxoplasma gondii"], "answer": "Microsporidium", "feedback": "es el germen mas frecuente en los pacientes con VIH" },
    { "question": "Una paciente de 66 años se realiza una densitometría ósea que muestra un T score de -3,5 DS en cadera izquierda y -2,8 en la columna lumbar a la altura de la vértebra L4. Trae además una glicemia, un perfil bioquímico y perfil lipídico, todos dentro de rangos normales. Mide 1,68 metros y pesa 49 kilos, ¿Cuál es la conducta más adecuada para esta paciente?", "options": ["Indicar calcio y vitamina D vía oral", "Indicar una carga de vitamina D vía oral", "Administrar calcitonina intranasal", "Indicar bifosfonatos vía oral o endovenosa", "Iniciar terapia de reemplazo hormonal con estrógenos más progestágenos por vía oral"], "answer": "Indicar bifosfonatos vía oral o endovenosa", "feedback": "" },
    { "question": "Un paciente de 50 años, con antecedente de infección de VIH de varios años, consulta por una lesión perianal, de larga data, sin tendencia a la cicatrización, que en ocasiones se ulcera y sangra. Al examen físico se aprecia una lesión ulcerada, de consistencia aumentada, de 3 cm de diámetro, bordes cartográficos y que se introduce por el orificio anal. ¿Cuál es el diagnóstico más probable?", "options": ["Sífilis", "Enfermedad de Cröhn", "Carcinoma epidermoide", "Melanoma", "Linfogranuloma venéreo "], "answer": "Enfermedad de Cröhn", "feedback": "uno de los sintomas de la enfermedad de Cröhn son las leciones continuas del colon" },
    { "question": " Paciente de 58 años, con antecedente de diabetes mellitus, hipertensión y fumador de 40 paquetes año, consulta por un cuadro de tres semanas de evolución de dolor epigástrico opresivo, asociado a disnea y palpitaciones regulares, que lo obligan a detenerse cada 100 metros de caminata y ceden con el reposo. En el examen físico, su presión arterial es 140/90 mmHg, frecuencia cardiaca de 80 latidos por minuto regular. El diagnóstico más probable es:", "options": ["Angina crónica de reciente comienzo", "Fibrilación auricular paroxística", "Isquemia cardiaca con arritmia supraventricular", "Tromboembolismo pulmonar", "Insuficiencia cardíaca postinfarto "], "answer": "Angina crónica de reciente comienzo", "feedback": "cuadro de tres semanas de evolución de dolor epigástrico opresivo, asociado a disnea y palpitaciones regulares, que lo obligan a detenerse cada 100 metros de caminata y ceden con el reposo" },
    { "question": " Un paciente de 50 años asintomático se realiza pruebas hepáticas como parte de un chequeo médico, que muestran una SGOT: 332 UI/L y SGPT: 210 UI/L, con bilirrubina de 1,5 mg/dl. No refiere hábitos tóxicos. Como antecedente, tuvo un hemoperitoneo traumático el año 1992, que requirió de transfusiones. ¿Qué examen se debe solicitar ante la sospecha diagnóstica?", "options": ["Antígeno de superficie", "IgM para VHA", "Test de HOMA", "TAC de abdomen", "Anticuerpos totales contra VHC "], "answer": "Anticuerpos totales contra VHC", "feedback": "por presentar enzimas hepaticas elevadas y el antecedente de haber tenido una tranfucion de sangre siendo la via endovenosa la forma de transmision del VHC" },
    { "question": " Una niña de 13 meses de edad, desde hace 4 meses ha detenido su crecimiento. Además, presenta deposiciones frecuentes y disgregadas, con tendencia al meteorismo. En sus exámenes destaca anemia ferropénica. ¿Cuál es el examen de elección para iniciar el estudio?", "options": ["Anticuerpos IgA antiendomisio", "Cuantificación de inmunoglobulinas", "Test del sudor", "Colonoscopía", "17 – OH – progesterona"], "answer": "Anticuerpos IgA antiendomisio", "feedback": "Examen de eleccion para el diagnostico de la enfermedad celiaca" },
    { "question": "Un paciente de 56 años, diabético, hospitalizado en su quinto día, por un síndrome nefrótico, presenta un cuadro de disnea y dolor torácico, por lo que se realiza una radiografía de tórax, la que muestra un derrame pleural derecho. Se realiza la punción pleural, dado salida a un líquido pleural de aspecto hemorrágico, con LDH: 650 UI/L, células 80% de polimorfonucleares, 20% de mononucleares, ADA: 30 UI/L. ¿Cuál es el diagnóstico más probable?", "options": ["Derrame paraneumónico", "Trasudado por hipoalbuminemia", "Empiema", "Tromboembolismo pulmonar", "Derrame pleural canceroso"], "answer": "Tromboembolismo pulmonar", "feedback": "Tiene la clinica clasica, ademas de tener ADA: 30 UI/L" },
    { "question": "Un paciente de 69 años, con antecedente de diabetes e hipertensión, en tratamiento con aspirina, losartán, amlodipino, hidroclorotiazida y metformina, consulta por sensación de hinchazón y molestias en las extremidades inferiores. Al examen físico, tiene edema de extremidades inferiores. ¿Cuál es la conducta más adecuada?", "options": ["Suspender el amlodipino", "Aumentar la dosis de hidroclorotiazida", "Disminuir la dosis de metformina", "Suspender el losartán", "Aumentar la dosis de aspirina "], "answer": "Suspender el amlodipino", "feedback": "el efecto no deseado mas comun es la inchazon de miembros inferiores" },
    { "question": "Un paciente de 71 años, con antecedente de hipertensión arterial y diabetes, en tratamiento con enalapril, metformina, aspirina, nifedipino e hidroclorotiazida consulta por disnea de esfuerzos, que aparece al caminar 2 cuadras. Al examen físico, se palpa el choque de la punta desplazado 2 cm hacia lateral y se ausculta ritmo cardíaco regular, en tres tiempos, con presencia de un tercer ruido y de un soplo de insuficiencia mitral III/VI, con escasos crépitos en la auscultación pulmonar. ¿Qué fármaco debe suspenderse? ", "options": ["Enalapril", "Metformina", "Aspirina", "Nifedipino", "Hidroclorotiazida"], "answer": "Nifedipino", "feedback": " bloqueador de canales de calcio de efecto duradero que pertenece al grupo de las dihidropiridinas y trabaja parcialmente en la vasodilatación por lo que hace retencion de liquidos" },
    { "question": " Una paciente presenta un cuadro de 2 días de disnea de esfuerzo, que aparece ante medianos esfuerzos, asociado a tos con expectoración, que en ocasiones es rosada. Al examen físico tiene FC: 94x’, PA: 110/70 mmHg, examen pulmonar con crepitaciones bilaterales y examen cardíaco con presencia de un soplo sistólico IV/VI. El diagnóstico más probable es: ", "options": ["Tromboembolismo pulmonar", "Insuficiencia tricuspídea", "Neumopatía aguda", "Insuficiencia mitral aguda", "Disección aórtica "], "answer": "Insuficiencia mitral aguda", "feedback": "por los sintomas de disnea de esfuerzo que cedia con el reposo ademas de la expectoracion rosada por la congestion pulmonar y un soplo IV/VI, desviacion de choque de la punta  " },
    { "question": " Un paciente está hospitalizado por un infarto agudo al miocardio, con supradesnivel del segmento ST, de dos días de evolución. Presenta deterioro del estado general y disnea de reposo, con tendencia a la hipotensión arterial. En su examen físico tiene FC: 115x’, PA: 80/50 mmHg, examen pulmonar con crepitaciones bilaterales intensos y examen cardíaco con ritmo regular en 2 tonos, con soplo sistólico intenso, de localización precordial. El diagnóstico más probable es:", "options": ["Taponamiento cardíaco por rotura de la pared libre", "Disfunción valvular aórtica isquémica", "Rotura del músculo papilar", "Shock cardiogénico por infarto masivo ", "Disección de la raíz aórtica "], "answer": "Disfunción valvular aórtica isquémica", "feedback": "es una de las complicaciones del IMA provocando izquemia de alguna zona del miocardio que puede  comprometer la funcion del mismo como en este caso" },
    { "question": " Un paciente de 80 años presenta disnea de esfuerzo de algunos meses de evolución, progresiva. Hace 24 horas sufre un síncope, con recuperación completa. Al examen físico tiene FC: 75x’, PA: 110/70 mmHg se palpa el choque de la punta en el 4° espacio intercostal, línea medio clavicular y se ausculta el corazón con presencia de soplo protomesosistólico III/VI y segundo ruido muy apagado. El examen pulmonar no muestra alteraciones. Se solicita un electrocardiograma, que muestra un ritmo sinusal con onda S de 23 mm en V2 y onda R de 16 mm en V5. ¿Cuál es el diagnóstico más probable?", "options": ["Estenosis aórtica ", "Estenosis mitral", "Insuficiencia aórtica", "Insuficiencia mitral", "Cardiopatía coronaria"], "answer": "Estenosis aórtica", "feedback": "clasico por presentar sincopes de recuperacion espontanea, sintomas de tipo cardiogenicos y un soplo III/VI" },
    { "question": " Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular y boca seca. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, anticuerpos antinucleares positivos, en titulación 1/80, factor reumatoide: 118 UI/ml y anticuerpos anti-CCP: 200 UI/ml. La radiografía de manos muestra osteopenia yuxtarticular de los huesos metacarpianos. El diagnóstico más probable es: ", "options": ["Lupus", "Artritis reumatoide", "Vasculitis primaria", "Esclerosis sistémica", "Síndrome de Sjörgren primario"], "answer": "Artritis reumatoide", "feedback": "los sintomas antes descritos son indicativos de artritis reumatoidea" },
    { "question": "Un paciente de 30 años presenta lumbago de 6 meses de evolución, intenso, que limita sus actividades y que es más molesto en la mañana y va cediendo durante el día. Al examen físico tiene lesiones descamativas en las rodillas y punteado ungueal y el examen de la columna muestra limitación a la flexión, con test de Schöber modificado de 2 cm. Se solicitan exámenes que muestran VHS: 60 mm/h, PCR: 5,0 mg/dl, anticuerpos antinucleares y factor reumatoide negativos. ¿Cuál es el examen de elección para establecer el diagnóstico en este paciente?", "options": ["Radiografía de columna lumbosacra", "Radiografía de columna dorsolumbar", "TAC de columna lumbosacra", "Resonancia magnética de columna dorsolumbar", "Resonancia magnética de articulaciones sacroilíacas"], "answer": "Resonancia magnética de articulaciones sacroilíacas", "feedback": "para descartar alguna patologia de tipo neurologico en la region lumbosacra y hacer diagnostico definitivo " },
    { "question": "Un paciente de 18 años presenta equimosis frecuente y tendencia a presentar petequias en las extremidades inferiores. Como antecedente, presentó hemorragia tardía, en relación a la extracción de un molar y hace algunos años sufrió un hematoma en el muslo izquierdo, en relación a un traumatismo, que requirió manejo hospitalizado. Se solicitan exámenes que muestran hemograma con 160.000 plaquetas por mm3, sin alteraciones de la serie roja ni blanca, TTPA de 45 segundos y TP de 100%. ¿Cuál es el diagnóstico más probable?", "options": ["Enfermedad de Glanzmann", "Enfermedad de von Willebrand", "Déficit de factor VII", "Hemofilia", "Púrpura trombopénica inmune "], "answer": "Enfermedad de von Willebrand", "feedback": "enfermedad de la sangre que afecta la agregacion plaquetaria" },
    { "question": " Un hombre de 78 años consulta por debilidad de las extremidades inferiores, que le dificulta realizar movimientos como pararse de una silla o subir escaleras. Al examen físico tiene paresia de las extremidades inferiores, la sensibilidad es normal y no tiene alteración de los reflejos osteotendíneos. ¿Cuál es el diagnóstico más probable?", "options": ["Polimiositis", "Hipotiroidismo", "Déficit de vitamina B12", "Distrofia muscular progresiva", "Raquiestenosis"], "answer": "Polimiositis", "feedback": "es una enfermedad viral que afecta las neuronas motoras provocando debilidad muscular y paralisis flacida" },
    { "question": "Un paciente de 45 años se realiza glicemias de ayuno que resultan 128 y 136 mg/dl. Se solicita hemoglobina glicosilada, que resulta 7,2%. ¿Cuál es el tratamiento de elección para iniciar el manejo de este paciente?", "options": ["Glibenclamida", "Metformina", "Pioglitazona", "Sitagliptina", "Repaglinida"], "answer": "Metformina", "feedback": "se le recomienda por tener glicemias no tan altas" },
    { "question": " Un paciente de 27 años presenta una lesión en la pierna derecha, consistente en una placa de 13 por 7 cm de diámetro, eritematosa y solevantada. Se inicia cloxacilina endovenosa. Al quinto día, la lesión cutánea ha mejorado, sin embargo, evoluciona con malestar general, fiebre y aparición de un exantema macular eritematoso, generalizado. Se solicitan exámenes que muestran sedimento de orina con hematuria microscópica, glóbulos blancos: 20 por campo, hemograma con leucocitosis de 14.000, con 20% de eosinófilos, BUN: 30 mg/dl y creatinina: 2,0 mg/dl. El diagnóstico más probable es:", "options": ["Glomerulonefritis aguda postestreptocócica", "Púrpura trombocitopénico trombótico", "Vasculitis sistémica primaria", "Insuficiencia renal aguda prerrenal", "Nefritis intersticial"], "answer": "Nefritis intersticial", "feedback": "es una infeccion postestreptocócica " },
    { "question": "Un paciente de 35 años, en tratamiento con atorvastatina, por hipercolesterolemia y cuyo padre tuvo un infarto a los 40 años, presentó mialgias y artralgias, por lo que decidió suspender el medicamento, sin indicación médica. Se controla con exámenes, entre los que destaca colesterol total: 354 mg/dl, colesterol LDL: 244 mg/dl, colesterol HDL: 70 mg/dl, triglicéridos: 198 mg/dl, creatinfosfoquinasa: 254 UI/L.El tratamiento más adecuado es:", "options": ["Colestiramina", "Dieta estricta", "Rosuvastatina", "Ezetimibe", "Fenofibrato"], "answer": "Rosuvastatina", "feedback": "se recomienda en pacientes con niveles altos de LDL colesterol " },
    { "question": "Un paciente de 48 años, diabético mal controlado, presenta una lesión en el muslo derecho, desde hace 5 días, que ha crecido y se ha asociado a malestar general y fiebre. Al examen físico tiene T°: 39,0°C, FC: 115x’, PA: 90/60 mmHg y se aprecia la lesión de 20 cm de aspecto eritemato-violáceo, con bulas en su superficie. El diagnóstico más probable es:", "options": ["Erisipela", "Herpes zoster", "Antrax", "Fasceítis necrotizante", "Miositis necrotizante"], "answer": "Fasceítis necrotizante", "feedback": "es una infeccion que se extiende entre el tejido celular subcutaneo y la fascia produciendo una necrosis tisular, con grave afeccion del estado general" },
    { "question": " Un paciente consulta porque hace 3 días notó aparición de una úlcera en el pene, ubicada en el glande, de 1 cm de diámetro, de aspecto indurado, fondo limpio y sin otros síntomas. Además, se palpa una adenopatía inguinal derecha indolora. Se solicita VDRL y FTA-ABS, resultando ambos negativos. El diagnóstico más probable es:", "options": ["Sífilis primaria", "Chancroide", "Enfermedad de Behcet", "Infección por virus papiloma humano", "Linfogranuloma venéreo"], "answer": "Sífilis primaria", "feedback": "por los sintomas y las caracteristicas de la lesion lo primero que hay que sospechar en una ITS" },
    { "question": "Una paciente de 62 años presenta una caída a nivel, con erosión en la rodilla derecha. Tres días después presenta una lesión eritematosa, que rodea la herida, de 10 cm de diámetro y bordes difusos, con aumento de la temperatura local. ¿Cuál es la conducta de elección?", "options": ["Indicar mupirocina tópica", "Realizar curación con suero fisiológico y control en 48 horas", "Realizar curaciones diarias con suero fisiológico y povidona yodada", "Indicar amoxicilina oral por 7 días", "Indicar cefadroxilo oral por 7 días"], "answer": "Indicar cefadroxilo oral por 7 días", "feedback": "cefalosporina es el tratamiento de eleccion para este tipo de infecciones" },
    { "question": "Una paciente cefalea de 4 semanas de evolución, mayor en las mañanas, que se asocia a vómitos y, además, refiere alteraciones visuales. Al examen físico tiene fuerzas y sensibilidad conservada en las 4 extremidades y en el campo visual se constata hemianopsia bitemporal. ¿Cuál es el diagnóstico más probable?", "options": ["Tumor de la glándula pineal", "Glioma del nervio óptico", "Tumor de la base del lóbulo frontal", "Hiperprolactinemia", "Macroadenoma hipofisiario"], "answer": "Tumor de la glándula pineal", "feedback": "se debe sospechar por la cefalea y la afectacion visual" },
    { "question": "Un paciente de 54 años, alcohólico e hipertenso, hace una semana suspende todos los antihipertensivos. Es traído a la urgencia por cefalea muy intensa, de inicio agudo, asociado a desorientación y compromiso de conciencia. Al examen físico está soporoso, no habla ni sigue indicaciones, aunque mantiene movilidad espontánea de las 4 extremidades. Sus reflejos osteotendíneos y tono muscular son normales y tiene signo de Babinski bilateral. El diagnóstico más probable es:", "options": ["Hemorragia subaracnoidea", "Meningitis bacteriana", "Edema cerebral", "Intoxicación etílica", "Accidente vascular isquémico extenso"], "answer": "Edema cerebral", "feedback": "se debe sospechar en este caso ya que el paciente esta comatoso con reflejos presentes pero con un grado de toma de conciencia" },
    { "question": "Un paciente de 64 años, con antecedente de insuficiencia renal crónica, con clearence de 40 ml/min se realiza exámenes de control que muestran fósforo: 4,0 mg/dl, calcio: 8,5, PTH: 120 pg/ml (VN: menor a 55) y TSH: 4,0 UI/L. ¿Cuál es el examen de elección para proseguir el estudio?", "options": ["Niveles plasmáticos de 25-OH-vitamina D", "Niveles de T4 libre", "Calciuria de 24 horas", "Magnesemia", "Bicarbonato plasmático"], "answer": "Niveles plasmáticos de 25-OH-vitamina D", "feedback": "para evaluar el metabolismo del calcio midiendo los niveles de vitamina D" },
    { "question": "Un paciente de 36 años, desde hace 4 años sigue dieta vegana estricta. Consulta por astenia, adinamia y palidez, a lo que se ha agregado disnea de grandes esfuerzos, que ha aumentado. Al examen físico tiene palidez de piel y mucosas, FC: 92x’, PA: 100/70 mmHg, sin alteraciones del examen segmentario. Se solicita hemograma que muestra plaquetas: 200.000 por mm3, glóbulos blancos: 6.500 por mm3, hematocrito: 27%, hemoglobina: 9 g/dl, VCM: 115 fl, HCM: 35 pg y reticulocitos 0,5%, con LDH: 450 UI/L. El examen más adecuado para proseguir el estudio es:", "options": ["Nivel de vitamina B12", "Mielograma", "Biopsia de médula ósea", "Perfil de fierro", "Prueba de Coombs"], "answer": "Biopsia de médula ósea", "feedback": "se utiliza para hacer diagnostico definitivo" },
    { "question": "Una paciente de 25 años consulta por diarrea de un mes de evolución, asociada a dolor abdominal tipo cólico y algunos episodios de hematoquecia. Además, tiene artralgias de las manos y rodillas, con artritis de la rodilla derecha. Al examen físico se observan úlceras orales y lesiones nodulares en la cara anterior de las piernas. El examen abdominal muestra abdomen blando sensible, sin masas. El diagnóstico más probable es:", "options": ["Lupus eritematosos sistémico", "Enfermedad de Bechet", "Colitis ulcerosa", "Artritis reumatoide", "Colitis por Clostridium difficile"], "answer": "Artritis reumatoide", "feedback": "con los sintomas matinales de artralgia,los nodulos lesiones nodulares en la cara anterior de las piernas." },
    { "question": "Un adolescente de 14 años presenta cefalea de una semana de evolución. Es traído al servicio de urgencia, tras presentar una convulsión tónico-clónica de 10 minutos de duración, luego de lo que quedó con confusión postictal. Su examen físico no tiene signos focales. Se solicita una tomografía axial computada de cerebro, que muestra una lesión quística de 3 cm en la zona frontotemporal y se realiza una punción lumbar, que muestra proteínas 60 mg/dl, con 70 células por mm3, con 70% de mononucleares y presencia de abundantes eosinófilos. ¿Cuál es el diagnóstico más probable?", "options": ["Quiste aracnoidal", "Astrocitoma pilocítico", "Encefalitis herpética", "Meningitis tuberculosa", "Neurocisticercosis  "], "answer": "Neurocisticercosis", "feedback": "cefalea,convulsión,confusión y la RMN + con lesion solido quistica(como diagnostico definitivo)" },
    { "question": "Una paciente de 34 años consulta por disfonía intermitente, principalmente en la mañana, asociada a carraspera. Su examen físico es normal. ¿Cuál es el fármaco de elección para iniciar el tratamiento?", "options": ["Azitromicina oral 500 mg/día por 5 días", "Prednisona oral 20 mg/día", "Lanzoprazol oral 20 mg/día por 30 días", "Amoxicilina oral 500 mg/8 horas por 7 días", "Ibuprofeno 400 mg/8 horas por 7 días"], "answer": "Lanzoprazol oral 20 mg/día por 30 días", "feedback": "se utiliza para tratar la disfonia por irritacion del nervio laringeo recurrente " },
    { "question": "Una paciente de 24 años presenta tos frecuente y disnea, asociada a sibilancias, que son mayores en la noche y que aumentan con el ejercicio, cuando fuma y en la primavera. Al examen físico presenta espiración prolongada y examen pulmonar con sibilancias bilaterales inspiratorias y espiratorias. ¿Cuál es el tratamiento más adecuado?", "options": ["Evitar la exposición a desencadenantes", "Salbutamol inhalado cada 6 horas", "Budesonida inhalada cada 12 horas", "Salmeterol inhalado cada 12 horas", "Desensibilizar para los alérgenos "], "answer": "Salbutamol inhalado cada 6 horas ", "feedback": "tratamiento de eleccion para la crisis aguda de asma bronquial" },
    { "question": " Una mujer de 23 años, cursando un embarazo de 20 semanas, sin complicaciones, se realiza un urocultivo, que resulta positivo para Escherichia coli multisensible, 60.000 UFC por ml. La conducta más adecuada es:", "options": ["Repetir el urocultivo en 2 semanas", "Iniciar cefradina vo", "Iniciar ciprofloxacino vo", "Solicitar ecografía", "Iniciar ceftriaxona ev"], "answer": "Repetir el urocultivo en 2 semanas", "feedback": "porque podria ser una bacteriuria asintomatica" },
    { "question": "Una paciente de 27 años, multípara, cursando un embarazo de 38 semanas, en trabajo de parto en fase activa, se produce rotura de membranas, con salida de líquido amniótico claro, luego de lo cual la frecuencia cardíaca fetal disminuye a 90 latidos por minuto. ¿Cuál es la conducta inmediata que debe realizarse en esta paciente?", "options": ["Realizar perfil biofísico", "Realizar cesárea", "Cambiar de posición a la madre", "Realizar tacto vaginal", "Realizar Doppler fetal "], "answer": "Realizar tacto vaginal", "feedback": "para descartar protrucion del cordon umbilical" },
    { "question": " Una paciente de 30 años, cursando embarazo de 36 semanas, con feto creciendo en percentil 6 en la semana 35, con Doppler materno fetal normal en ese entonces. Se realiza ecografía de control que muestra feto que no ha crecido, en presentación podálica y Doppler normal. El registro basal no estresante es normal. ¿Cuál es la conducta más adecuada? ", "options": ["Solicitar perfil biofísico", "Administrar corticoides", "Interrumpir a las 37 semanas", "Realizar cesárea en este momento", "Continuar el control semanal con Doppler"], "answer": "Continuar el control semanal con Doppler", "feedback": "para descartar retardo del crecimiento intrauterino" },
    { "question": "Una paciente de 32 años, con 32 semanas de embarazo, acude al servicio de urgencia por contracciones uterinas dolorosas, asociada a metrorragia. Al examen físico se palpa aumento del tono uterino, se objetiva metrorragia escasa y contracciones uterinas hipertónicas a razón de 3/10 minutos. El cuello uterino no tiene modificaciones y los latidos cardiofetales se auscultan a 120 lpm. La conducta más adecuada es:", "options": ["Interrumpir el embarazo de inmediato ", "Administrar corticoides intramusculares", "Solicitar perfil biofísico", "Solicitar Doppler materno-fetal ", "Administrar tocolíticos "], "answer": "Interrumpir el embarazo de inmediato", "feedback": "por ser un sangramiento de la segunda mitad de la gestacion y puede comprometer la vida tanto del feto como de la madre" },
    { "question": "Una mujer de 25 años, puérpera de 5 días, con parto vaginal, consulta por de aumento de la cantidad de loquios hemáticos y sensación febril. Al examen físico tiene FC: 80x’, PA: 110/70 mmHg, examen genital con episiorrafia equimótica y dolor a la palpación uterina. El diagnóstico más probable es:", "options": ["Restos placentarios", "Neoplasia trofoblástica gestacional", "Infección de la epifisiorrafia", "Miometritis puerperal", "Endometritis puerperal"], "answer": "Endometritis puerperal", "feedback": "fiebre,loquios abundantes y malestar general son sintomas clasicos de una infeccion puerperal" },
    { "question": "Una paciente de 32 años, cursando puerperio desde hace 8 días, con parto por cesárea, comienza con loquios abundantes y de mal olor, asociada a fiebre. Su examen físico muestra T°: 38,5°C FC: 85x´. PA: 120/80x’, herida operatoria sin signos de infección y útero doloroso a la palpación. La conducta más adecuada es:", "options": ["Iniciar antibióticos orales", "Realizar legrado", "Hospitalizar y manejar con antibióticos endovenosos", "Realizar histerectomía ", "Administrar una dosis de antibióticos endovenosos y luego manejo ambulatorio con antibioticos orales"], "answer": "Hospitalizar y manejar con antibióticos endovenosos", "feedback": "por ser una endometritis puerperal" },
    { "question": "Una paciente de 24 años, puérpera de 15 días, presenta dolor en la mama derecha, asociada a eritema, aumento de la temperatura local y fiebre hasta 38,8°C. Al examen físico se aprecia mama derecha eritematosa y congestiva, dolorosa a la palpación, sin zonas fluctuantes. ¿Cuál es el manejo más adecuado?", "options": ["Antiinflamatorios", "Compresión con frío local ", "Suspender la lactancia materna", "Drenaje mamario", "Antibióticos orales  "], "answer": "Antibióticos orales", "feedback": "tratamiento de eleccion de la mastitis puerperal" },
    { "question": "Una paciente de 50 años consulta por amenorrea de 8 meses de evolución. Se realiza ecografía transvaginal que muestra múltiples imágenes nodulares, hipoecogénicas intramurales y subserosas de hasta 3 cm. La indicación más adecuada es: ", "options": ["Histerectomía", "Ecografía en 6 meses", "Terapia de reemplazo hormonal", "Análogos de la GnRH ", "Biopsia por histeroscopía"], "answer": "Ecografía en 6 meses", "feedback": "para ver la evolucion de los miomas" },
    { "question": "Una primigesta de 23 años, cursando un embarazo de 20 semanas, se realiza una ecografía transvaginal que muestra un cuello de 20 mm de longitud, sin otras alteraciones. ¿Cuál es la conducta más adecuada?", "options": ["Indicar pesario", "Iniciar progesterona endovaginal", "Realizar cerclaje", "Administrar corticoides sistémicos", "Observar evolución"], "answer": "Iniciar progesterona endovaginal", "feedback": "es uno de los tratamientos mas usados para prevenir el aborto" },
    { "question": "Una paciente de 31 años, con embarazo de 40 semanas, acude al servicio de urgencia por ausencia de percepción de movimientos fetales. Se realiza un perfil biofísico, que resulta 8/10, con oligoamnios. ¿Cuál es la conducta más adecuada? ", "options": ["Interrumpir a las 41 semanas", "Interrumpir a las 42 semanas", "Interrumpir el embarazo ahora", "Repetir el perfil biofísico en 48 horas", "Esperar el inicio del trabajo de parto"], "answer": "Interrumpir el embarazo ahora", "feedback": "por estar teniendo una perdida de liquido amniótico" },
    { "question": "Un niño de 8 años presenta un cuadro de cefalea y fiebre de 2 días de evolución, a lo que se agrega una conducta agresiva y luego desorientación. Convulsiona en varias oportunidades. Su TAC descarta hipertensión endocraneana, por lo que se realiza punción lumbar que da salida a líquido cefalorraquídeo con 100 glóbulos rojos por mm3, 20 glóbulos blancos por mm3, con 90% de mononucleares, proteínas: 80 mg/dl y glucosa: 60 mg/dl. ¿Cuál es el tratamiento inicial?", "options": ["Oseltamivir", "Vancomicina", "Ceftriaxona", "Aciclovir", "Ampicilina"], "answer": "Vancomicina", "feedback": "es el tratamiento de la encefalitis bacteriana" },
    { "question": " Un niño de 10 años es traído a la consulta por aparición de múltiples equimosis y petequias, desde hace 2 semanas, asociadas a palidez. Al examen físico se aprecia pálido, con petequias en las extremidades inferiores y el tronco y múltiples equimosis de gran tamaño en las extremidades inferiores. Además, se palpa hepatomegalia de 3 cm bajo el reborde costal. El diagnóstico más probable es:", "options": ["Púrpura trombopénica inmune", "Enfermedad de von Willebrand", "Púrpura de Schönlein Henoch", "Meningococcemia", "Leucemia"], "answer": "Leucemia", "feedback": "por las petequias y la palides cutanea es de sospechar esta patologia" },
    { "question": "Un niño de 2 años presenta tendencia a las hemorragias, ya que sangra con facilidad y presenta múltiples equimosis. En el examen físico, se observan extremidades inferiores con equimosis en distinto grado de resolución, algunas de gran tamaño. Se solicitan exámenes, entre los que destacan hemograma con recuento de plaquetas normal, TP normal y TTPA alargado. ¿Cuál es el diagnóstico más probable? ", "options": ["Púrpura trombocitopénica inmune", "Hemofilia", "Enfermedad de von Willebrand", "Enfermedad de Glanzmann", "Púrpura trombocitopénica trombótica"], "answer": "Hemofilia", "feedback": "es un trastorno de la coagulacion que se caracteriza por hematomas ,petequias, hemartrosis que se debe a un deficit de factor de la coagulacion" },
    { "question": "Una niña de 7 años, con antecedente de hiperplasia suprarrenal congénita, en tratamiento con hidrocortisona y fludrocortisona, consulta por cuadro de 4 días de diarrea, fiebre y malestar general. Al examen físico tiene leve taquicardia y algunos signos de deshidratación. Además de la reposición de volumen, ¿qué conducta es la más adecuada?", "options": ["Fludrocortisona endovenosa", "Betametasona oral", "Prednisona oral", "Hidrocortisona endovenosa", "Aumentar la dosis de hidrocortisona oral"], "answer": "Hidrocortisona endovenosa", "feedback": "tratamienton de eleccion para una crisis suprarrenal" },
    { "question": "Un niño de 14 años consulta por dolor abdominal y vómitos de 3 días de evolución, con tendencia a la deshidratación. Hace dos meses estuvo hospitalizado por un cuadro similar, para hidratación endovenosa. Al examen físico tiene FC: 110x’, PA: 110/70 mmHg, T°: 36,8°C. Se solicitan exámenes, que muestran glicemia: 36 g/dl, sodio: 126 mEq/L, potasio: 5,8 mEq/L, pH: 7,32, bicarbonato: 16 mEq/L. El examen de elección para confirmar el diagnóstico es:", "options": ["Niveles plasmáticos de cortisol basal", "Prueba de tolerancia a la glucosa con curva de insulina", "Creatinina plasmática", "Amilasemia", "Endoscopía digestiva alta"], "answer": "Niveles plasmáticos de cortisol basal", "feedback": "para descartar un ipercortisolismo primario" },
    { "question": " Una niña de 7 meses, con antecedente de síndrome de Down, ha tenido un mal incremento ponderal y aún no duplica su peso de nacimiento. Se cansa al alimentarse y ha presentado varias infecciones respiratorias. Al examen físico se palpa frémito en el precordio izquierdo y se ausculta un soplo holosistólico, ubicado en el mesocardio, con segundo ruido desdoblado. ¿Cuál es el diagnóstico más probable?", "options": ["Coartación aórtica", "Comunicación interauricular", "Canal auriculoventricular completo", "Comunicación interventricular", "Ductus arterioso persistente "], "answer": "Comunicación interauricular", "feedback": "es una de las marformaciones congenitas cardiacas asociadas al sindrome de Down" },
    { "question": " Un niño de 12 años consulta por cansancio, artralgias, dolores musculares generalizados y fiebre. Refiere que las mialgias son intensas, al punto que limitan su actividad física. Al examen físico presenta dolor a la palpación de las masas musculares, en especial en la espalda alta y los hombros. Además, tiene eritema violáceo en los párpados superiores. El diagnóstico más probable es:", "options": ["Artritis reumatoide juvenil", "Distrofia muscular", "Dermatomiositis", "Triquinosis", "Lupus infantil"], "answer": "Dermatomiositis", "feedback": "es una enfermedad que se debe a una inflamacion de los vasos sanguineos que se encuentran por debajo de los musculos y la piel probocando esta sintomatologia" },
    { "question": "Un niño de 5 años presenta aumento de volumen de 4 cm de diámetro, doloroso, eritematoso y consistencia fluctuante, en relación al hueso hiodes, de 3 días de evolución, con sensación febril. El diagnóstico más probable es:", "options": ["Quiste tirogloso infectado ", "Quiste branquial infectado ", "Quiste dermoides infectado", "Absceso simple de cuello", "Adenitis supurativa"], "answer": "Quiste tirogloso infectado", "feedback": "por la ubcacion anatomica y las caracteristicas del tumor" },
    { "question": " Un niño de 7 años desde hace 3 años presenta deposiciones cada vez más infrecuentes y duras. Hace algunas semanas empeoran los síntomas, por lo que se inicia lactulosa 15 ml al día, sin lograr cambios. Además, comienza a manchar frecuentemente los calzoncillos con deposiciones. La causa más probable de la falta de respuesta en este paciente es:", "options": ["Dosis insuficiente de laxante ", "Dieta baja en fibra ", "Enfermedad de Hirschsprüng", "Presencia de fecaloma", "Concomitancia de patología psiquiátrica "], "answer": "Presencia de fecaloma", "feedback": "es frecuente que la presencia de un fecañoma en este caso sea la causa de la encopresis" },
    { "question": "Un paciente de 60 años, diabético, hipertenso y dislipidémico, con antecedente de artritis reumatoide en tratamiento con metotrexato, consulta por disminución progresiva de la calidad de la visión. A su examen físico, la exploración ocular es normal, con rojo pupilar normal bilateral. La agudeza visual es 20/25 en ambos ojos. La campimetría muestra defectos visuales en los dos cuadrantes superiores del campo visual izquierdo y en los dos cuadrantes mediales del campo visual derecho. ¿Cuál es el diagnóstico más probable? ", "options": ["Degeneración macular relacionada con la edad ", "Tumor del lóbulo occipital", "Catarata", "Glaucoma crónico", "Neuropatía óptica isquémica"], "answer": "Glaucoma crónico", "feedback": "sintomas clasicos de esta patologia" },
    { "question": " Un niño de 4 años consulta por infecciones recurrentes, habiendo tenido una otitis media aguda, 2 bronquitis y 3 amigdalitis en el último año. Presenta rinorrea con frecuencia, obstrucción nasal, respira por la boca y ronca en la noche. ¿Cuál es el diagnóstico más probable?", "options": ["Rinitis alérgica", "Inmunodeficiencia primaria por déficit de inmunoglobulinas", "Hipertrofia de adenoides", "Fibrosis quística", "Enfermedad de cilio inmóvil "], "answer": "Rinitis alérgica", "feedback": "se caracteriza por presencia de obstruccion nasal , rinorrea y respiracion bucal" },
    { "question": "Un paciente de 28 años presenta un pelotazo en la cara, hace 5 días, con golpe en la nariz. Evoluciona con dolor, edema, obstrucción nasal y luego sensación febril. Al examen físico se observa aumento de volumen bilateral, en relación al tabique nasal. ¿Cuál es la conducta más adecuada?", "options": ["Drenaje por punción con aguja fina", "Drenaje quirúrgico con bisturí", "Taponamiento anterior", "Administrar analgésicos", "Reducción en pabellón"], "answer": "Drenaje quirúrgico con bisturí", "feedback": "tratamiento de eleccion en este tipo de hematomas nasales" },
    { "question": " La notificación de las enfermedades transmisible está relacionada con el siguiente de los objetivos fundamentales de la Salud Pública:", "options": ["Promoción de la salud", "Protección de la salud", "Prevención, vigilancia y control de enfermedades", " Recopilación y análisis de información ", "Protección específica de la salud pública "], "answer": "Prevención, vigilancia y control de enfermedades", "feedback": "son los objetivos fundametales de la salud publica" },
    { "question": "Una paciente de 32 años consulta por un cuado de un mes de evolución, en que sale poco de su casa y presenta desgano y retraimiento social, disminuyendo el disfrute de las actividades que habitualmente le eran placenteras. También refiere desconcentración en su trabajo y, además, ha disminuido la cantidad del tiempo de sueño, en alrededor de 2 horas diarias. Refiere que los síntomas empeoran en el período premenstrual. El diagnóstico más probable es:", "options": ["Episodio depresivo mayor", "Trastorno adaptativo", "Hipomanía", "Trastorno esquizoafectivo", "Trastorno disfórico premenstrual"], "answer": "Episodio depresivo mayor", "feedback": "por el tiempo de evolucion" },
    { "question": "Un hombre de 50 años asegura que es constantemente espiado por los gobiernos de varios países, dado que el maneja información importante y confidencial de muchos políticos y personas de poder. Al preguntarle cómo sabe que lo espían, reacciona enojado diciendo que es obvio y que uno de sus vecinos fue quien inició todo esto. El diagnóstico más probable es: ", "options": ["Esquizofrenia", "Trastorno delirante", "Trastorno esquizoafectivo", "Trastorno esquizoide de la personalidad", "Trastorno paranoide de la personalidad"], "answer": "Trastorno delirante", "feedback": "porque tiene una hstoria bien estructurada y esta convencido de lo que le ocurre" },
    { "question": "Un paciente de 57 años presenta múltiples síntomas difíciles de precisar. Se ha realiza múltiples exámenes y evaluaciones médicas, sin poder llegar a un diagnóstico. Sin embargo, él insiste en que está muy enfermo y no puede realizar actividades básicas, como asearse. Hace 2 años fue pensionado por esto, sin cambiar su conducta. Su esposa lo cuida y lo asiste abnegadamente. ¿Cuál es el diagnóstico más probable? ", "options": ["Trastorno por simulación", "Trastorno hipocondríaco", "Trastorno de somatizaicón", "Trastorno facticio", "Trastorno de personalidad dependiente"], "answer": "Trastorno facticio", "feedback": "este es un trastorno de la personalidad en donde el paciente simula enfermedad para obten er algun beneficio" },
    { "question": "Un paciente de 46 años se realiza una colecistectomía abierta. A las 48 horas presenta fiebre de 37,8°C. Al examen físico está eupneico, FR: 14x’, FC: 78x’, PA: 120/80 mmHg, satura 98% a FiO2 ambiental. Se aprecia herida operatoria sin eritema ni secreción y se revisan las vías venosas, que están permeables, sin signos inflamatorios. Su examen pulmonar presenta crépitos localizados en la base derecha. ¿Cuál es el diagnóstico más probable?", "options": ["Neumonía", "Dehiscencia de la anastomosis", "Atelectasia", "Infección de la herida operatoria", "Tromboembolismo pulmonar "], "answer": "Atelectasia", "feedback": "una de las complicaciones de la cirugia mayor" },
    { "question": " Un paciente consulta en el servicio de urgencia, dado que hace 30 minutos le saltó una solución de soda cáustica caliente a la cara, la que entró a los ojos, presentando intenso dolor y dificultades para ver. Al examen físico tiene ojo rojo profundo, córneas opacas y con el ojo derecho solo es capaz de contar dedos, mientras que con el ojo izquierdo tiene agudeza visual 20/80. La conducta más adecuada es:", "options": ["Analgésicos", "Lavado con suero fisiológico abundante por 30 minutos", "Antibióticos tópicos", "Corticoides tópicos", "Parche ocular"], "answer": "Lavado con suero fisiológico abundante por 30 minutos", "feedback": "tratamiento inicial de eleccion en este tipo de accidentes para disminuir el riesgo de daño ocular" },
    { "question": " ¿A qué tipo de medida corresponde el tamizaje de TSH y fenilcetonuria que se hace a todos los recién nacidos en Chile?", "options": ["Promoción de la salud", "Prevención específica", "Prevención primaria", "Prevención secundaria", "Prevención terciaria "], "answer": "Prevención secundaria", "feedback": "son los encargados de hacer este tipo de estudio" },
    { "question": "Un paciente de 60 años fue tratado hace 7 días con ciprofloxacino, por disuria. Hace dos días presenta dolor testicular izquierdo, asociado a fiebre. Al examen físico tiene aumento de volumen testicular, con dolor a la palpación, especialmente del conducto espermático. Se observa ligero edema escrotal, con eritema. ¿Cuál es el diagnóstico más probable?", "options": ["Hidrocele", "Varicocele", "Torsión testicular", "Tumor testicular", "Orquiepididimitis"], "answer": "Orquiepididimitis", "feedback": "por los sintomas y la localizacion" },
    { "question": "Un paciente de 65 años, fumador de 20 paquetes-año, fuma el primer cigarrillo al despertarse y fuma en lugares donde está prohibido y a pesar de resfriarse. Consulta porque ha pensado en suspender el tabaco. ¿Cuál es el tratamiento de elección?", "options": ["Entrevista motivacional", "Bupropión", "Parche de nicotina", "Diazepam", "Vareniclina"], "answer": "Bupropión", "feedback": "tratamiento de eleccion para el tabaquismo" },
    { "question": " Un paciente de 30 años consulta por ictericia de larga data, que suele aumentar en ciertos periodos. Se solicitan pruebas hepáticas que se informan como bilirrubina total: 3,0 mg/dl, bilirrubina directa: 0,5 mg/dl, GGT: 50 UI/L, GPT: 30 UI/L, GOT: 40 UI/L y fosfatasas alcalinas: 90 UI/L. ¿Cuál es el diagnóstico más probable?", "options": ["Anemia hemolítica", "Colangitis esclerosante primaria", "Síndrome de Dubin Johnson", "Coledocolitiasis", "Síndrome de Gilbert"], "answer": "Síndrome de Gilbert", "feedback": "se da por un deficit de encima captadora de bilirrubina y por consiguiente esta esta elevada probocando los sintomas descritos" },
    { "question": " Un hombre de 26 años consulta por dolor abdominal de 3 meses de evolución, asociado a diarrea acuosa, que en ocasiones ha presentado hematoquecia. Hace una semana se agrega marcado pujo y tenesmo, más aumento de la intensidad del dolor abdominal. Al examen físico tiene signos vitales normales y su abdomen es sensible a la palpación, con dolor a la palpación de la fosa iliaca y el flaco izquierdos, sin signos peritoneales. Los ruidos hidroaéreos se auscultan conservados. ¿Cuál es el diagnóstico más probable?", "options": ["Enfermedad de Cröhn", "Enfermedad celiaca", "Colitis ulcerosa", "Megacolon amebiano", "Cáncer de colon"], "answer": "Colitis ulcerosa", "feedback": "sintomas patognomonicos de esta patologia" },
    { "question": " Una paciente de 23 años, vegetariana estricta, consulta por diarrea de algunos meses de evolución, asociada a baja de peso. Se solicitan exámenes, entre los que destaca anemia ferropénica. Su examen físico no aporta mayor información. ¿Cuál es el diagnóstico más probable?", "options": ["Parasitosis intestinal", "Enfermedad celíaca", "Colitis ulcerosa", "Enfermedad de Cröhn", "Enteropatía perdedora de proteínas"], "answer": "Enfermedad celíaca", "feedback": "trastorno intestinal con estas caracteristicasdebido a una intolerancia al gluten" },
    { "question": "Un paciente de 84 años se realiza una TSH, que resulta 8,4 UI/L. La TSH se repita 3 meses después, resultando 9,2 UI/L. ¿Cuál es la conducta más adecuada?", "options": ["Iniciar propiltiouracilo oral", "Iniciar levotiroxina oral 25 ug/día", "Iniciar tiamazol", "Iniciar corticoides orales", "Iniciar levotiroxina oral 75 ug/día"], "answer": "Iniciar levotiroxina oral 25 ug/día", "feedback": "para inibir el eje hipotalamo hipofisiario" },
    { "question": "Un paciente de 72 años, con antecedente de un infarto miocárdico, hace 2 meses. Durante la hospitalización, se diagnosticó diabetes mellitus, iniciándose metformina 850 mg cada 12 horas. Sin embargo, desde entonces ha presentado diarrea. Sus glicemias de ayuno son cercanas a 140 mg/dl y su hemoglobina glicosilada resulta 8,2%. ¿Cuál es la conducta más adecuada?", "options": ["Reemplazar la metformina por glibenclamida", "Agregar insulina NPH", "Reemplazar el tratamiento por metformina 750 mg XR", "Reemplazar la metformina por sitagliptina", "Aumentar la dosis de metformina"], "answer": "Reemplazar la metformina por sitagliptina" },
    { "question": "Un paciente diabético, hipertenso y con antecedente de una cardiopatía coronaria, en tratamiento con aspirina, metformina, glibenclamida y enalapril, se realiza un perfil lipídico, que se informa como LDL: 165 mg/dl, HDL: 38 mg/dl, triglicéridos: 288 mg/dl. Inició atorvastatina 40 mg al día, las que suspendió por presentar artralgias y mialgias. ¿Cuál es la conducta más adecuada? ", "options": ["Iniciar rosuvastatina 10 mg y controlar con CK", "Iniciar fenofibrato mg y controlar con perfil lipídico y glicemia", "Iniciar atorvastatina 5 mg cada 2 días", "Iniciar ezetimibe", "Reforzar la dieta"], "answer": "Iniciar rosuvastatina 10 mg y controlar con CK", "feedback": "se le recomienda el uso de la estatina debido a que tiene los niveles de trigliceridos elevados y el seguimiento con CK por el antecedente de cardiopatia coronaria" },
    { "question": "Un paciente de 82 años, con antecedente de diabetes y enfermedad coronaria, en tratamiento farmacológico con metformina 1 gramo cada 8 horas, glibenclamida 10 mg cada 12 horas, aspirina 100 mg al día y atorvastatina 40 mg al día, presenta un cuadro de mialgias generalizadas, asociadas a debilidad muscular, mayor en la cintura escapular y los muslos. Se solicitan exámenes, entre los que destacan CK: 1.320 UI/L, GOT: 128 UI/L y GOT: 133 UI/L. El diagnóstico más probable es:", "options": ["Miopatía diabética", "Polineuropatía diabética", "Miopatía por estatinas", "Polimiositis", "Polimialgia reumática"], "answer": "Miopatía por estatinas", "feedback": "una de los efectos no deseados de las estatinas son las miopatias ,cansancio y falta de energia por inhibicion de la HMG-Coa redcuctasa" },
    { "question": " Una mujer de 26 años, con embarazo de término, de 39 semanas, ingresa en trabajo de parto. Tiene 3 contracciones uterinas cada 10 minutos y, al tacto vaginal, tiene dilatación cervical de 5 cm, con membranas íntegras, feto en posición transversa y se palpa la fontanela anterior en el centro de la pelvis. La conducta más adecuada es:", "options": ["Realizar fórceps", "Realizar cesárea", "Observar evolución espontánea", "Iniciar goteo oxitócico", "Administrar tocolíticos"], "answer": "Observar evolución espontánea", "feedback": "se encuentra con buena dinamica uterina, dilatacion asi que lo mas probable es que dentro de la proxima hora rompa membranas y pase a face activa " },
    { "question": "Un paciente de 76 años, diabético, en hemodiálisis desde hace varios años, presenta un cuadro de fiebre hasta 39°C, al día siguiente de dializarse, por lo que se toman exámenes y se inician antibióticos endovenosos biasociados: vancomicina más cefotaximo, con buena respuesta clínica. Al tercer día, se controla con hemocultivo, que resulta positivo para Staphilococcus aureus meticilino sensible. ¿Cuál es la conducta más adecuada?", "options": ["Mantener el esquema antibiótico", "Mantener solo el tratamiento con vancomicina", "Mantener solo el tratamiento con cefotaximo", "Cambiar el tratamiento a cloxacilina", "Cambiar el tratamiento a clindamicina"], "answer": "Cambiar el tratamiento a cloxacilina", "feedback": "debido a que el agente causal en este caso es meticilinico sencible se recomienda el cambio" },
    { "question": "Un paciente de 64 años, con antecedente de hipertensión arterial, consulta por dolor torácico intenso, de carácter opresivo, irradiado al cuello y asociado a angustia y disnea. Se realiza un electrocardiograma que muestra un bloqueo completo de rama izquierda, que no estaba presente en electrocardiogramas previos. La conducta más adecuada es: ", "options": ["Solicitar enzimas cardíacas", "Solicitar un angioTAC de tórax de inmediato ", "Realizar tratamiento de reperfusión miocárdica de inmediato", "Solicitar una ecocardiografía", "Administrar analgésicos y mantener en observación"], "answer": "Realizar tratamiento de reperfusión miocárdica de inmediato", "feedback": "es la conducta mas adecuada, porque es evidente que esta en el curso de un IMA" },
    { "question": " Una mujer de 40 años presenta artralgias y rigidez matinal, que afecta especialmente las muñecas, articulaciones metacarpofalángicas y, desde hace algunos meses, también afecta los tobillos y articulaciones metatarsofalánficas. Al examen tiene artritis de varias a de las articulaciones descritas. ¿Cuál de los siguientes exámenes es más adecuado para determinar el curso clínico de la enfermedad?", "options": ["Velocidad de sedimentación hemática", "Anticuerpos anticitoplasma de neutrófilo", "Anticuerpos antipéptido citrulinado", "Proteína C reactiva", "Anticuerpos antinuclerares "], "answer": "Anticuerpos antipéptido citrulinado", "feedback": "se indica ante la sospecha de artritis reumatoidea" },
    { "question": "Un niño de 24 meses es traído por episodios repetidos de llanto, apnea, seguidos de hipotonía y compromiso de conciencia, que luego se recuperan espontáneamente. En algunos de estos episodios, además, presentó movimientos clónicos, de corta duración. Los episodios se han presentado en relación a situaciones en las que ha llorado o se ha enojado mucho. ¿Cuál es la conducta más adecuada? ", "options": ["Solicitar TAC de cerebro y electroencefalograma", "Iniciar ácido valproico", "Solicitar electroencefalograma", "Iniciar carbamazepina", "Indicar manejo conductual"], "answer": "Indicar manejo conductual", "feedback": "" },
    { "question": "Un paciente de 66 años, fumador de 20 paquetes año, consulta por otalgia derecha, de algunos meses de evolución, asociado a odinofagia y disfagia, a lo que se le ha agregado atoramiento con algunos alimentos y cambios en la resonancia de la voz. El diagnóstico más probable es:", "options": ["Cáncer de esófago", "Disfunción temporomandibular", "Cáncer de hipofaringe", "Faringitis crónica", "Cáncer de laringe"], "answer": "Cáncer de hipofaringe", "feedback": "los sintomas descritos coinciden con esta patologia" },
    { "question": " Un paciente de 65 años sufre una caída a nivel, con golpe en la rodilla derecha. Evoluciona con dolor e impotencia funcional. Se observa depresión suprarrotuliana en dicha rodilla y se solicita una radiografía de rodilla derecha, que no evidencia rasgos de fractura. ¿Cuál es el diagnóstico más probable?", "options": ["Luxación de rótula", "Disfunción patelo-femoral", "Rotura del ligamento cruzado anterior ", "Rotura del ligamento rotuliano", "Rotura del ligamento del cuádriceps "], "answer": "Rotura del ligamento del cuádriceps", "feedback": "el mecanismo de produccion los sintomas y signos coinciden con esta patologia traumatologica " },
    { "question": " Una mujer de 32 años consulta por dismenorrea de 2 años de evolución, progresiva. Al examen ginecológico se palpa un tumor anexial derecho. Se solicita una ecografía transvaginal que muestra un tumor ovárico derecho, de 6,5 cm de diámetro y aspecto quístico, en vidrio esmerilado. Su Ca-125 resulta 86 UI/L (VN: < 35 UI/L). ¿Cuál es el diagnóstico más probable?", "options": ["Carcinoma epitelial", "Endometrioma ovárico", "Teratoma maduro", "Disgerminoma ovárico", "Quiste folicular"], "answer": "Endometrioma ovárico", "feedback": "ecografia con tumor de aspecto quistico en vidrio esmerilado y un Ca-125 alterado " },
    { "question": " ¿Cuál de las siguientes medidas es más eficaz, en el mediano plazo, para disminuir la cantidad de pacientes diabéticos que progresan a necesitar hemodiálisis? ", "options": ["Screening de glicemia en población de riesgo de diabetes", "Screening de glicemia en población adulta", "Tratamiento eficaz en pacientes diabéticos diagnosticados", "Prevención de factores de riesgo cardiovascular en la población adulta ", "Prevención de obesidad en la población de riesgo de diabetes"], "answer": "Tratamiento eficaz en pacientes diabéticos diagnosticados", "feedback": "es la medida de eleccion para disminuir las complicaciones de esta patologia" },
    { "question": "Una paciente de 45 años, usuaria de anticonceptivos orales, suspende los ACO, presentando amenorrea de 4 meses. Se solicitan exámenes, que muestran TSH: 3,7 UI/L, prolactina normal, FSH: 60 UI/L (VN < 40), estradiol: 13 pg/ml (VN: 25 – 75). ¿Cuál es el diagnóstico más probable?", "options": ["Síndrome de ovario poliquístico", "Hipogonadismo hipergonadotrópico", "Atrofia endometrial por anticonceptivos", "Hipogonadismo hipogonadotrópico", "Síndrome de Asherman"], "answer": "Hipogonadismo hipergonadotrópico", "feedback": "es una reaccion adversa del uso de ACO que bloquea el eje hipofisiario-ovarico y al suspender los ACO proboca una retroalimentacion positiva dando una elevacion de la FSH < 40" },
    { "question": "Un paciente de 32 años se lava las manos repetidamente durante el día. Al examen está lúcido, cooperador, pero angustiado. Refiere que una voz interior le ordena lavarse las manos y no puede desobedecerle. ¿Cuál es el fármaco de elección para iniciar el tratamiento? ", "options": ["Litio", "Fluoxetina(Prozac)", "Olanzapina", "Carbamazepina ", "Alprazolam"], "answer": "Fluoxetina(Prozac)", "feedback": "es el tratamiento de eleccion en este caso " },
    { "question": "Una niña de 8 años es traída por su madre, por talla baja. Está creciendo en el percentil 5 para la edad, con velocidad de crecimiento normal. Su madre mide 158 cm y su padre mide 166 cm. Su edad ósea corresponde a 7 años y 10 meses. ¿Cuál es la conducta más adecuada?", "options": ["Controlar en 6 meses", "Frenar la pubertad", "Solicitar un cariograma", "Solicitar radiografías de huesos largos", "Solicitar niveles plasmáticos de hormona de crecimiento "], "answer": "Controlar en 6 meses", "feedback": "para ver evolucion y determinar conducta a seguir" },
    { "question": "Un paciente de 42 años, alcohólico, consume cerca de 3 botellas de vino al día, durante dos semanas. Luego de 3 días de abstinencia, presenta agitación psicomotora, desorientación y temblor, asociado a alucinaciones visuales. ¿Cuál es el tratamiento inicial para el manejo de este paciente?", "options": ["Tiamina", "Zink", "Clorpromazina", "Haloperidol ", "Diazepam"], "answer": "Diazepam", "feedback": "tratamiento de eleccion para el sindrome de abstinencia" },
    { "question": "Una paciente de 35 años, puérpera de 3 meses, consulta por disuria, dispareunia y molestias genitales. Al examen físico, tiene la mucosa genital seca y pálida, sin leucorrea. ¿Cuál es el diagnóstico más probable?", "options": ["Tricomoniasis", "Candidiasis", "Vaginosis", "Atrofia genital ", "Infección por clamidia "], "answer": "Atrofia genital", "feedback": "por los sintomas y signos" },
    { "question": " Una paciente de 54 años presenta disminución de la visión del izquierdo, de dos días de evolución. Su agudeza visual es 20/200 en el ojo izquierdo y 20/20 en el derecho. Tiene antecedente de hemiparesia braquial. Al fondo de ojo se observa papilitis izquierda. Su resonancia magnética nuclear muestra lesiones desmielinizantes cerebrales. El diagnóstico más probable es:", "options": ["Desprendimiento de retina", "Neuritis óptica", "Neuropatía óptica isquémica", "Degeneración macular", "Hipertensión endocraneana "], "answer": "Neuritis óptica", "feedback": "la perdida de la vision se debe a la lesion desmielinizante que presenta en el cerebro" },
    { "question": "Un recién nacido presenta marcada dificultad respiratoria. Al examen físico tiene abolición del murmullo pulmonar izquierdo y se auscultan los ruidos cardíacos desplazados, en el lado derecho. Su abdomen está excavado. La conducta inicial es: ", "options": ["Cirugía de urgencia", "Realizar intubación orotraqueal", "Realizar toracostomía de urgencia", "Administrar prostaglandinas y oxígeno al 100% ", "Ventilación a presión positiva por mascarilla"], "answer": "Realizar intubación orotraqueal", "feedback": "es de eleccion ya que este recién nacidoesta con una dificultad respiratoria marcada" },
    { "question": "¿Cuál es el examen de elección para el enfrentamiento inicial de un paciente de 22 años, en su primer cuadro de cólico renal, con microhematuria?", "options": ["Pielografía de eliminación", "UroTAC", "PieloTAC", "Ecografía renal y vesical", "Radiografía simple"], "answer": "PieloTAC", "feedback": "para ver la causa del colico renal" },
    { "question": " Una paciente de 27 años presenta amenorrea de 8 semanas, por lo que se realiza un test de embarazo, que resulta positivo. Se realiza ecografía transvaginal, que muestra un embrión de 3 mm de diámetro, sin latidos cardiofetales. La conducta más adecuada es:", "options": ["Solicitar HCG seriadas", "Observar evolución espontánea", "Realizar evacuación uterina", "Controlar nueva ecografía en 7 días", "Administrar metotrexato"], "answer": "Controlar nueva ecografía en 7 días", "feedback": "para ver evolución" },
    { "question": "Un lactante de 10 meses de edad presenta eritema en la cara, que al día siguiente se generaliza. Al examen físico tiene un exantema rosado macular tenue, asociado a adenopatías retroauriculares y cervicales posteriores. El diagnóstico más probable es:", "options": ["Eritema infeccioso", "Rubéola", "Exantema por citomegalovirus", "Sarampión", "Exantema súbito"], "answer": "Rubéola", "feedback": "sintomas y signos clasicos de esta patologia" },
    { "question": "Un paciente de 81 años, con antecedente de diabetes, en tratamiento con metformina 850 al día, se realiza exámenes de control, entre los que destaca una hemoglobina A1c de 7,5%. La conducta más adecuada es: ", "options": ["Mantener el tratamiento", "Agregar glibenclamida", "Subir la dosis de metformina ", "Agregar insulina", "Agregar sitagliptina"], "answer": "Mantener el tratamiento", "feedback": "ya que los examenes son normales" },
    { "question": "Una paciente de 34 años, con antecedente de by pass gástrico hace 2 años, por obesidad mórbida, consulta por astenia, disnea y marcada fatigabilidad y debilidad de extremidades inferiores. Al examen físico tiene paresia M4 de ambas extremidades inferiores, con disminución de la sensibilidad distal e hiporreflexia. Se solicita hemograma, que muestra hemoglobina: 7,0 g/dl, hematocrito: 20%, glóbulos blancos: 3.100 por mm3 y plaquetas: 93.000 por mm3. ¿Cuál es el diagnóstico más probable?", "options": ["Desnutrición proteica", "Déficit de zinc", "Déficit de fosfatos", "Déficit de niacina", "Déficit de cianocobalamina "], "answer": "Déficit de cianocobalamina", "feedback": "son los sintomas de un deficit de vitamina B12" },
    { "question": "Una paciente de 35 años, presenta dolor en el hipocondrio derecho, asociado a meteorismo, por lo que se realiza una ecografía abdominal, que visualiza un pólipo en el fondo vesicular, de 4 mm de diámetro, homogéneo y se observa la vía biliar de 5 mm de diámetro. La conducta más adecuada es: ", "options": ["Control ecográfico en 6 meses", "Solicitar una TAC de abdomen y pelvis", "Solicitar una resonancia magnética nuclear abdominal", "Realizar biopsia del pólipo", "Realizar colecistectomía laparoscópica"], "answer": "Control ecográfico en 6 meses", "feedback": "para evaluar evolucion" },
    { "question": "Una paciente de 14 años presenta caída al suelo, con inconsciencia de 30 segundos, recuperándose luego por completo. ¿Cuál de los siguientes antecedentes orientan a una causa cardiogénica del cuadro?", "options": ["Ausencia de episodios anteriores ", "Relación con la micción ", "Relación con el ejercicio", "Relación con la tos", "Ocurrencia al incorporarse desde la posición acostada"], "answer": "Relación con el ejercicio", "feedback": "esto se ve con frecuencia en la valvulopatia aortica" },
    { "question": " Un paciente de 40 años, oficinista, estuvo moviendo muebles durante 2 días, evolucionando luego con intenso dolor lumbar, que le impide realizar sus actividades. Al examen físico se aprecia muy adolorido, con dificultades para subirse a la camilla y para caminar, tiene IMC de 28 y se observa una contractura muscular a nivel lumbar, con dolor ante todos los movimientos de la columna lumbar, sin signos de irritación nerviosa. Además de administrar analgésicos, la indicación más adecuada es:", "options": ["Resonancia magnética nuclear ", "Radiografía de columna lumbosacra ", "Kinesioterapia motora por 10 días", "Reposo en cama por 5 días", "Reposo laboral por 3 días"], "answer": "Reposo laboral por 3 días", "feedback": "se recomienda reposo para esta patologia " },
    { "question": " Una paciente de 24 años, cursando un embarazo de 8 semanas, tiene antecedente de haber sufrido una trombosis venosa profunda, hace 5 años, en relación al uso de anticonceptivos orales. ¿Cuál es la conducta más adecuada en este momento? ", "options": ["Iniciar antiagregantes orales", "Iniciar anticoagulación oral", "Realizar estudio de trombofilia", "Iniciar heparina de bajo peso molecular ", "Solicitar ecografía Doppler de extremidades inferiores"], "answer": "Iniciar heparina de bajo peso molecular", "feedback": "se le indica para evitar complicaciones tromboembolicas en el embarazo " },
    { "question": " ¿Cuál de las siguientes medidas de asociación es más adecuada para establecer cuántas veces aumentan los casos de asma en la población fumadora, en comparación a la población no fumadora?", "options": ["Riesgo relativo", "Riesgo atribuible", "Razón de prevalencias", "Tasa de incidencia", "Riesgo atribuible porcentual"], "answer": "Riesgo relativo", "feedback": "este es la posibilidad de que ocurra un evento en un estudio de personas expuestas con caracteristicas diferentes que se exponen a un mismo riesgo" },
    { "question": "Un paciente de 35 años consulta por cefalea y debilidad muscular de algunos meses de evolución. Al examen físico presenta FC: 70x’, PA: 160/110 mmHg, sin otros hallazgos. Se solicitan exámenes que muestran creatininemia de 0,9 mg/dl, sodio: 138 mEq/l, potasio: 3,0 mEq/l y cloro: 98 mEq/l. ¿Cuál es el examen más adecuado para proseguir el estudio en este paciente?", "options": ["Doppler de arterias renales", "Holter de presión arterial", "Determinación de metanefrinas urinarias ", "Relación aldosterona / actividad de renina plasmática", "Cortisol libre urinario de 24 horas "], "answer": "Relación aldosterona / actividad de renina plasmática", "feedback": "para descartar una hipertension secundaria" },
    { "question": "Una mujer de 24 años, primípara, en trabajo de parto, con dilatación completa, membranas rotas y buena dinámica. Cuenta con episiotomía mediolateral. Se produce desprendimiento de la cabeza fetal, sin embargo, el resto del cuerpo no progresa, luego de 5 minutos. ¿Cuál es la conducta más adecuada? ", "options": ["Ampliar la epifisiotomía", "Realizar tracción continua por 5 minutos", "Realizar flexión de las caderas de la madre y realizar compresión suprapúbica", "Girar el hombro posterior, en el sentido de las agujas del reloj", "Poner a la madre en posición genupectoral y realizar suave tracción de la cabeza fetal"], "answer": "Realizar flexión de las caderas de la madre y realizar compresión suprapúbica", "feedback": "maniobra de eleccion para este caso y ayudar al feto " },
    { "question": "Un paciente de 22 años es traído por sus familiares, dado que anda muy irritable y ha iniciado una serie de proyectos de negocio, en áreas que no maneja bien. Presenta aceleramiento del habla y hay noches en las que pasa sin dormir, a pesar de lo cual, al día siguiente no presenta sueño. En ocasiones, se ríe a carcajadas y ,en otras, se emociona fácilmente al hablar de ciertos temas. Sus amigos lo describen como “patudo y sin filtro”. Tiene antecedente de haberse deprimido hace algunos años, en relación a una ruptura sentimental. ¿Cuál es el diagnóstico más probable?", "options": ["Trastorno esquizoafectivo", "Trastorno adaptativo mixto", "Trastorno bipolar", "Trastorno por déficit atencional", "Trastorno de personalidad en crisis"], "answer": "Trastorno bipolar", "feedback": "por el antecedente de depresion y luego cursar con una crisis maniaca" },
    { "question": " Un paciente de 82 años, hace 2 años sufrió un accidente vascular encefálico, sin secuelas. Hace 2 meses presenta un cuadro de labilidad emocional, desinhibición social y dificultades para realizar algunas de sus actividades habituales. El diagnóstico más probable es:", "options": ["Depresión", "Enfermedad de Alzheimer", "Demencia vascular", "Demencia por cuerpos de Lewy ", "Hidrocéfalo normotensivo"], "answer": "Depresión", "feedback": "por el tiempo de evolución" },
    { "question": "Un niño de 5 años, presenta fiebre baja, hasta 37,5°C y eritema malar. Dos días después se agrega un exantema eritematoso macular en el tronco y extremidades, durando el cuadro un total de 10 días. El agente más probable es:", "options": ["Streptococcus pyogenes", "Parvovirus B19 ", "Virus de Ebstein Baar", "Virus herpes humano número 6 ", "Virus rubéola "], "answer": "Parvovirus B19", "feedback": "son los sintomas y signos de la 5ta enfermedad " },
    { "question": "Una paciente de 56 años, con antecedente de haber vivido en Brasil, hasta hace 6 meses, consulta por disfagia lógica y progresiva, asociada a baja de peso de 6 kilogramos. Su examen físico no tiene alteraciones. Tiene antecedente de pirosis y regurgitación de larga data. ", "options": ["Cáncer de esófago ", "Estenosis péptica", "Esofagitis eosinofílica", "Acalasia esofágica", "Cáncer gástrico"], "answer": "Cáncer de esófago", "feedback": "sintomas clasicosde esta patologia" },
    { "question": "Un recién nacido presenta, a los pocos minutos de nacer, cianosis generalizada, con saturación de 65%. En su examen físico, se ausculta un soplo sistólico eyectivo II/VI paraesternal. Su radiografía de tórax muestra campos pulmonares sin alteraciones, hilios de tamaño normal, recesos costodiafragmáticos libres y mediastino delgado ¿Cuál es el diagnóstico más probable?", "options": ["Canal auriculoventricular completo", "Coartación aórtica ", "Comunicación interventricular grande", "Transposición de grandes arterias ", "Cardiopatía hipertrófica"], "answer": "Transposición de grandes arterias", "feedback": "es una de las cardiopatias congenitas cianoticas" },
    { "question": " Un niño de 6 años consulta por dificultades para ver. Al examen físico destaca agudeza visual de 20/60, que cambia a 20/30, al mirar por un agujero estenopeico. La madre refiere que siempre se restriega los ojos. El diagnóstico más probable es: ", "options": ["Blefaritis", "Conjuntivitis viral", "Ametropía", "Conjuntivitis bacteriana crónica", "Glaucoma congénito"], "answer": "Ametropía", "feedback": "este es un defecto de la refraccion por eso es que se modifica al hacer mirar a traves de un agujero estenospeico" },

    { "question": "Un niño de edad presenta un cuadro de agitación, alternado con obnubilación, asociado a vómitos, sialorrea, diarrea, dolor abdominal, taquicardia, tos, temblor y sudoración. Se sospecha que haya ingerido algún tóxico. ¿Cuál es la conducta inicial?", "options": ["Administrar antieméticos", "Administrar omeprazol ", "Administrar solución glucosada al 10% ", "Administrar N-acetil.cisteína", "Administrar atropina "], "answer": "Administrar atropina", "feedback": "tratamiento de eleccion para la Intoxicación por organos fosforados" },
    { "question": "Una niña de 8 años, desde hace 6 meses presenta halitosis y odinofagia leve. Al examen físico se observan las amígdalas rosadas, con surcos profundos y en la amígdala derecha se observa secreción blanquecina, de aspecto caseoso, de 5 mm de diámetro. El diagnóstico más probable es:", "options": ["Mononucleosis infecciosa", "Absceso peritonsilar", "Amigdalitis bacteriana ", "Linfoma amigdalino ", "Tonsilolitiasis"], "answer": "Tonsilolitiasis", "feedback": "" },
    { "question": "Un niño de 8 años presenta, desde hace dos semanas de odinofagia, rinorrea y tos, a lo que se le ha agregado disnea progresiva y fiebre hasta 38,5°C. Hace dos días se agrega un exantema eritematoso polimorfo. Al examen físico destacan crepitaciones y sibilancias bilaterales, difusas. ¿Cuál es el tratamiento más adecuado?", "options": ["Amoxicilina", "Amoxicilina más ácido clavulánico", "Claritromicina ", "Oseltamivir", "Aciclovir"], "answer": "Claritromicina" },
    { "question": "¿Por qué la meningococcemia es una enfermedad de notificación inmediata?", "options": ["Para aislar a los contactos", "Para vacunar a la familia ", "Para identificar y manejar a los contactos", "Para detectar casos secundarios", "Por la gravedad de la enfermedad "], "answer": "Para identificar y manejar a los contactos" },
    { "question": " Una paciente de 58 años, multípara de cuatro, presenta sensación de peso vaginal, asociada a escapes de orina, al inicio del deseo miccional. Al examen físico presenta prolapso genital. La conducta más adecuada es:", "options": ["Iniciar oxibutinina oral", "Realizar prueba Q-TIP", "Realizar pelvic organ prolapse quantification (POP-Q)", "Solicitar resonancia magnética pelviana ", "Realizar histerectomía"], "answer": "Realizar prueba Q-TIP" },
    { "question": "Un paciente de 35 años consulta por otalgia izquierda de 3 días de evolución, asociada a otorrea ipsilateral. El dolor aumenta al traccionar el pabellón auricular. A la otoscopía se observa el conducto auditivo externo edematoso, con escasa secreción y tímpano normal. ¿Cuál es el tratamiento de primera línea? ", "options": ["Amoxicilina oral", "Ciprofloxacino tópico", "Amoxicilina más ácido clavulánico oral", "Neomicina tópica ", "Antiinflamatorios orales"], "answer": "Ciprofloxacino tópico" },
    { "question": "Un niño de 5 años, al que le molestan los ruidos fuertes, presenta vocabulario muy escaso. Caminó a los 24 meses y dijo su primera palabra a los 36 meses. No pareciera tener interés en relacionarse con los demás niños de su edad. ¿Cuál es el diagnóstico más probable?", "options": ["Trastorno por déficit atencional", "Trastorno generalizado del desarrollo", "Parálisis cerebral", "Distrofia muscular", "Trastorno del lenguaje"], "answer": "Trastorno por déficit atencional" },
    { "question": "Un paciente de 22 años, con antecedente de una amigdalitis bacteriana, hace 2 semanas, con tratamiento antibiótico incompleto, presenta un cuadro de cefalea y orinas espumosas, asociado a edema de extremidades inferiores. Al examen físico, tiene PA: 180/110 mmHg, FC: 62 lpm. Se solicitan exámenes, que muestran creatinina: 2,0 mg/dl, BUN: 46 mg/dl, sedimento de orina con abundantes glóbulos rojos, con 80% de dismorfia, ANA (-) y proteinuria de 900 mg/24 horas; C3 y C4 bajos. ¿Cuál es el tratamiento de elección?", "options": ["Diuréticos", "Antiinflamatorios", "Antibióticos", "Inmunosupresores", "Corticoides"], "answer": "Inmunosupresores" },
    { "question": "Una paciente de 43 años presenta ánimo bajo, desde hace 3 meses, asociado a llanto y a baja de peso de 8 kilogramos, desde ese entonces. Refiere que ya no disfruta de las cosas de la vida. Hace 2 semanas presenta alucinaciones auditivas, que ella identifica como una voz masculina que emite comentarios negativos sobre su situación. El diagnóstico más probable es:", "options": ["Trastorno bipolar", "Trastorno delirante crónico", "Depresión con síntomas psicóticos", "Trastorno esquizoafectivo ", "Trastorno esquizotípico de la personalidad"], "answer": "Trastorno esquizotípico de la personalidad" },
    { "question": "Un paciente de 35 años, desde hace un año, presenta debilidad muscular, disminución de la libido e impotencia sexual progresiva. Se realizan exámenes, que muestran prolactina normal, niveles de LH: 1,6 UI/L (valor normal: 1,8 a 8,6 UI/L) y de testosterona: 160 ng/dl (valor normal: 270 a 1.070 ng/dl). ¿Cuál es la conducta más adecuada para proseguir el estudio?", "options": ["Ecografía testicular ", "Niveles plasmáticos de estradiol", "Niveles de FSH ", "Solicitar niveles de testosterona libre ", "Resonancia magnética de hipófisis "], "answer": "Niveles plasmáticos de estradiol" },
    { "question": "Una paciente de 67 años, hipertensa, en tratamiento con losartán 50 mg, hidroclorotiazida 25 mg, amlodipino 5 mg, carvedilol 12,5 mg. Presenta edema de las extremidades inferiores, que ha ido en aumento. En su examen físico tiene FC: 57x’ regular, con PA: 130/90 mmHg, RR2T, examen pulmonar sin alteraciones y examen abdominal con hígado palpable 1 cm bajo el reborde costal y extremidades inferiores con edema bimaleolar con signo de la fóvea. La conducta más adecuada es:", "options": ["Reforzar la dieta hiposódica e indicar reposo con las extremidades en alto", "Suspender el amlodipino", "Subir la dosis del diurético", "Suspender el losartán y agregar doxazosina", "Solicitar ecodoppler de extremidades inferiores"], "answer": "Suspender el losartán y agregar doxazosina" },
    { "question": " Un paciente de 34 años, tienen antecedente de úlceras orales a repetición y artralgias. Además, presentó una úlcera genital hace algunas semanas. Consulta por dolor en el ojo derecho, asociado a visión borrosa, de dos días de evolución. Al examen físico, se aprecia marcado enrojecimiento del ojo derecho, con agudeza visual 20/100. El diagnóstico más probable es:", "options": ["Úlcera corneal", "Trombosis de la vena central de la retina", "Conjuntivitis viral", "Uveítis", "Queratitis aguda"], "answer": "Conjuntivitis viral" },
    { "question": "Un lactante de 3 meses, diagnosticado de hipotiroidismo congénito, en tratamiento con levotiroxina 25 mg/día. Se solicita TSH que resulta 0,09 UI/L (VN: 0,7 a 5,7) y T4 libre: 2,18 ng/dl (VN: 0,9 a 2,1). La conducta más adecuada es:", "options": ["Suspender la levotiroxina ", "Subir la dosis de levotiroxina", "Repetir la TSH en 6 semanas", "Disminuir la dosis de levotiroxina ", "Solicitar cintigrafía tiroidea"], "answer": "Subir la dosis de levotiroxina" },
    { "question": "Una paciente de 34 años, cursando su primer embarazo, gemelar, bicorial biamniótico, de 26 semanas de edad gestacional. Se controla con ecografía obstétrica, que visualiza un gemelo muerto, sin compromiso hemodinámico del gemelo sobreviviente. ¿Cuál es la conducta más adecuada?", "options": ["Realizar extracción del feto muerto ", "Realizar controles periódicos con dímero D", "Interrumpir el embarazo ", "Realizar cesárea a las 37 semanas", "Realizar controles periódicos con pruebas de coagulación"], "answer": "Realizar controles periódicos con dímero D" },
    { "question": "Un recién nacido de 28 días, presenta, desde hace 7 días, deposiciones frecuentes, semiformadas, con mucosidad y algunas estrías de sangre. Ha subido bien de peso, está con alimentación mixta y su examen físico no tiene alteraciones. ¿Cuál es el diagnóstico más probable? ", "options": ["Intolerancia a la lactosa", "Alergia a la proteína de la leche de vaca", "Infección por rotavirus", "Sangre deglutida del pezón materno", "Fisura anal"], "answer": "Infección por rotavirus" },
    { "question": "Un paciente de 75 años, con antecedente de hipertensión y diabetes, sin tratamiento, consulta por edema de las extremidades inferiores y malestar. Al examen físico tiene PA: 150/100 mmHg, FC: 70x’, edema marcado en ambas extremidades inferiores, con signo de la fóvea, hígado palpable, examen cardíaco normal y murmullo pulmonar presente, con escasos crépitos basales. En sus exámenes destaca creatinina: 2,2 mg/dl, 5 mg/dl, Na+: 136 mEq/l, K+: 5,3 mEq/l y Cl-: 95 mEq/l. ¿Qué diurético es de elección para el manejo del edema en este paciente?", "options": ["Clortalidona", "Hidroclorotiazida", "Furosemida", "Indapamida", "Espironolactona "], "answer": "Indapamida" },
    { "question": "Un paciente de 22 años, que desde la infancia tiene infecciones respiratorias a repetición, que requerían uso de antibiótico. Al examen físico, es mesomorfo, con FC: 72x’, PA:120/80 mmHg, su examen físico presenta crepitaciones y estertores bilateral. Se solicita radiografía de tórax que muestra múltiples imágenes de dilataciones bronquiales bilaterales, compatibles con bronquiectasias.  ¿Cuál es el examen para proseguir el estudio?", "options": ["Broncoscopía con biopsia bronquial", "Prueba de provocación bronquial con metacolina", "Espirometría ", "Test del sudor", "Baciloscopías de expectoración"], "answer": "Broncoscopía con biopsia bronquial" },
    { "question": " Una paciente de 70 años consulta por dolor tipo urente en las extremidades inferiores, asociado a parestesias, descritas como “hormigueos” en los pies. Al examen físico tiene disminución de la sensibilidad en calcetín, con paresia a la extensión de los ortejos y disminución de ambos reflejos aquilianos. En cambio, los reflejos rotulianos se encuentran conservados. ¿Cuál es el diagnóstico más probable?", "options": ["Radiculopatía S1 bilateral", "Síndrome de cauda equina", "Síndrome del cono medular", "Síndrome de Guillain Barré", "Polineuropatía"], "answer": "Polineuropatía" },
    { "question": " ¿Cuál de las siguientes características del Elisa permite detectar a los pacientes con infección por el VIH, en la población asintomática?", "options": ["Alta sensibilidad", "Baja especificidad", "Alta especificidad ", "Alto valor predictivo positivo", "Alto valor predictivo negativio"], "answer": "Alta sensibilidad" },
    { "question": " Un hombre de 34 años consulta por disuria, asociada a secreción uretral purulenta, de un día de evolución. Refiere haber tenido relaciones sexuales sin protección hace una semana. Se realiza tinción de Gram de la secreción uretral, observándose abundantes cocáceas Gram negativas intra y extracelulares. El agente etiológico más probable es:", "options": ["Neisseria gonorreae", "Treponema pallidum", "Chlamydia trachomatis", "Mycoplasma genitalium", "Streptococcus pyogenes"], "answer": "Neisseria gonorreae" },
    { "question": "Una mujer de 53 años, desde hace 3 meses presenta metrorragia intermitente, que ha aumentado. Su FUR fue a los 48 años y se realiza una ecografía transvaginal que muestra un mioma submucoso de 24 mm, otro subseroso de 52 mm, además, se visualiza su endometrio de 17 mm de grosor. La indicación más adecuada es:", "options": ["Histerectomía ", "Estrógenos más progestágenos orales", "Miomectomía", "Biopsia de endometrio ", "Progestágenos orales"], "answer": "Biopsia de endometrio" },
    { "question": "Un niño de 3 años, con antecedente de una convulsión febril a los 10 meses de edad, autolimitada, presenta fiebre, de 3 días de evolución, asociada a convulsión en dos oportunidades y desorientación. Se realiza punción lumbar, que da salida a líquido cefalorraquídeo, con glucosa 76 mg/dl (glicemia: 96 mg/dl), 210 células por mm3, con 85% de mononucleares, con 70 glóbulos rojos por mm3, 80% crenados y proteínas de 73 mg/dl. El diagnóstico más probable es:", "options": ["Meningitis bacteriana", "Epilepsia", "Meningitis por enterovirus", "Encefalitis herpética", "Hemorragia subaracnoidea"], "answer": "Encefalitis herpética" },
    { "question": " Una paciente presenta múltiples episodios de 5 minutos de duración, recurrentes, en los que presenta mucha angustia, llanto, sensación de ahogo, parestesias en las cuatro extremidades y marcado miedo a sufrir un infarto al corazón. Ya no sale de la casa por miedo a presentar uno de esos episodios en la calle. El diagnóstico más probable es: ", "options": ["Trastorno de pánico", "Agorafobia", "Trastorno de angustia generalizada", "Trastorno de ansiedad social", "Crisis de pánico"], "answer": "Trastorno de pánico" },
    { "question": "Un niño de 9 meses debe vacunarse por primera vez contra la influenza. Tiene antecedente de haber desarrollado un rash eritematoso en las dos oportunidades en las que se le dio a probar el huevo. ¿Cuál es la conducta más adecuada para su vacunación?", "options": ["Vacunar, de acuerdo al programa, sin cambios", "Prohibir permanentemente la vacunación contra la influenza", "Esperar la reacción ante la vacuna trivírica y decidir según aquello", "Postergar la vacunación hasta que cumpla 24 meses", "Realizar test cutáneo de alergia y decidir según resultado "], "answer": "Vacunar, de acuerdo al programa, sin cambios" },
    { "question": " Una paciente de 54 años presenta cambio en el hábito intestinal, asociada a distensión abdominal. Se realiza una ecografía abdominal, que muestra un pólipo de 5 mm en la vesícula biliar, de aspecto homogéneo y delimitado. La conducta más adecuada es: ", "options": ["Indicar dieta baja en grasas", "Realizar colecistectomía", "Solicitar PCR ultrasensible", "Realizar TAC de abdomen ", "Realizar colonoscopía "], "answer": "Realizar colecistectomía" },
    { "question": " ¿A qué tipo de medidas corresponde la instalación de las salas IRA (Infecciones Respiratorias Agudas) y salas ERA (Enfermedades Respiratorias del Adulto), durante las campañas de invierno, por parte del Ministerio de Salud?", "options": ["Prevención primaria ", "Prevención secundaria", "Prevención terciaria ", "Promoción de la salud", "Prevención específica "], "answer": "Prevención terciaria" },
    { "question": " Un recién nacido de 28 semanas, comienza con decaimiento y vómitos, desde hace una semana, con tendencia a la deshidratación. Al examen físico, está hipotenso, taquicárdico, con genitales masculinos, sin otros hallazgos. Sus electrolitos muestran Na+: 129 mEq/l, K+: 6,5 mEq/L, Cl: 89 mEq/L. Además, de la solución fisiológica, ¿qué medicamento se debe administrar en el manejo inicial de este paciente?", "options": ["Ondasentrón", "Omeprazol", "Calcio", "Cefotaximo", "Hidrocortizona"], "answer": "Hidrocortizona" },
    { "question": "Una paciente de 37 años presenta escapes de orina, en grandes cantidades, precedidos por deseos incontrolables de orinar. Su examen físico no aporta mayor información. Su urocultivo es negativo y su desimento de orina no presenta alteraciones. Se solicita una cistomanometría que muestra contracciones no inhibidas del detrusor, que aparecen entre los 80 y 100 cc de llenado vesical. El tratamiento inicial más adecuado es:", "options": ["Anticolinérgicos", "Bloqueadores alfa 1 adrenérgicos", "Cirugía", "Kinesioterapia pélvica", "Reeducación vesical "], "answer": "Reeducación vesical " },
    { "question": "Un paciente de 39 años, trabajador de la construcción, con IMC de 30, psoriático, consulta por dolor en la zona glútea profunda, de predominio nocturno, muy intenso y que va desapareciendo en la mañana, a medida que realiza sus actividades. El dolor inició hace 3 meses y ha aumentado. Hace 2 meses presentó una uveítis derecha. ¿Cuál es el diagnóstico más probable? ", "options": ["Radiculopatía S1", "Espondiloartritis", "Espondilodiscitis", "Hernia del núcleo pulposo con compresión del plexo lumbar", "Raquiestenosis"], "answer": "Espondiloartritis" },
    { "question": "Un paciente de 36 años presenta la idea de que puede ser pedófilo. Aquello lo angustia mucho y le aterra la idea de acercarse a los niños. Por ello reza y evita situaciones en las que estará en contacto con niños. Su diagnóstico es: ", "options": ["Trastorno delirante", "Parafilia", "Trastorno obsesivo compulsivo ", "Trastorno de la inclinación sexual", "Trastorno de ansiedad generalizada"], "answer": "Trastorno obsesivo compulsivo" },
    { "question": "Un paciente de 18 años consulta por dolor lumbar izquierdo, de larga evolución. Al examen físico tiene una masa en el flanco izquierdo, por lo que se solicita una ecografía abdominal, que muestra una hidronefrosis izquierda, con adelgazamiento de la corteza renal, sin dilatación uretral. Su creatinina plasmática es 0,9 mg/dl y su sedimento de orina no presenta alteraciones. La cintigrafía renal muestra captación de 90% a derecha y 10% a izquierda. ¿Cuál es la conducta más adecuada?", "options": ["Realizar pieloplastía izquierda", "Realizar nefrostomía percutánea", "Realizar nefrectomía izquierda", "Instalar sonda Foley ", "Solicitar pieloTAC"], "answer": "Realizar pieloplastía izquierda" },
    { "question": " Una paciente de 35 años, con antecedente de bypass gástrico hace un año, presenta crisis de mareos, palpitaciones, malestar general y diarrea, que aparecen después de comer. El diagnóstico más probable es:", "options": ["Hipoglicemias reactivas ", "Síndrome de dumping", "Hernia del espacio de Petersen", "Estenosis de la anastomosis", "Déficit de vitamina B12"], "answer": "Síndrome de dumping" },
    { "question": " Una paciente de 30 años, con antecedente de enfermedad de Marfán, puérpera hace un mes, consulta por dolor torácico precordial, opresivo, irradiado al dorso, EVA 8/10. Al examen físico tiene. Su electrocardiograma muestra taquicardia sinusal, sin otras alteraciones. El examen de elección para iniciar el enfrentamiento de esta paciente es:", "options": ["Coronariografía", "Ecocardiograma transtorácico", "Dímero D", "AngioTAC de tórax", "Test de esfuerzo"], "answer": "AngioTAC de tórax" },
    { "question": "Una paciente de 25 años, con antecedente de un quiste mamario de dos centímetros, en la mama derecha, diagnosticado hace 2 años. Consulta ahora por dolor y aumento de volumen, en relación a la mama derecha. Al examen físico tiene fiebre de 38,6°C, más una zona aumentada de volumen, con eritema y aumento de la temperatura, en la mama derecha, mayor en la zona superoexterna. Se solicita una ecografía mamaria, que visualiza signos inflamatorios de las partes blandas, más la lesión quística de 5 cm de diámetro, con contenido irregular. La conducta más adecuada es:", "options": ["Punción del quiste", "Solicitar resonancia magnética de mama", "Drenaje quirúrgico", "Realizar biopsia con aguja gruesa ", "Control mamográfico"], "answer": "Drenaje quirúrgico" },
    { "question": " Una niña de 15 años presenta hipermenorrea y menometrorragia de larga data. Se solicita un hemograma, que muestra hemoglobina: 9g/dl, hematocrito: 27%, blancos: 6.000 por mm3 y plaquetas: 240.000 por mm3. Su ecografía ginecológica es normal. La conducta más adecuada para proseguir el estudio es:", "options": ["Resonancia magnética de pelvis", "Prueba de progesterona ", "Biopsia de endometrio", "Estudio de trombofilias", "Estudio de hemostasia "], "answer": "Estudio de hemostasia ", "feedback": "para descartar algun trastorno de la coagulacion" },
    { "question": " Un paciente de 80 años consulta por rinorrea bilateral, de tres meses de evolución, muy molesta, asociada a congestión nasal, que es más intensa en las mañanas y aumenta con los cambios de temperatura. El diagnóstico más probable es:", "options": ["Cáncer nasal", "Pólipos nasales", "Sinusitis bacteriana crónica", "Rinitis vasomotora", "Rinitis alérgica"], "answer": "Rinitis vasomotora" },
    { "question": " Una paciente de 54 años, con antecedente de jaqueca, que trata profilácticamente con topiramato. Refiere estar con más estrés del habitual. Hace dos horas comienza con cefalea intensa, de localización periocular derecha, asociada a náuseas y vómitos. Al examen físico se aprecia el ojo izquierdo enrojecido, con la pupila fija, en semimidriasis. La conducta inicial más adecuada es:", "options": ["Manitol endovenoso", "Clorpromazina endovenosa", "Ketorolaco endovenoso", "Oxígeno al 100% más eletriptán subcutáneo", "Carbamazepina oral"], "answer": "Manitol endovenoso" },
    { "question": "Un paciente de 86 años, con antecedente de un accidente vascular encefálico, hace un año, seculado con un síndrome de inmovilidad y marcada dependencia, presenta una lesión en la zona sacra. Al examen físico, presenta eritema en la zona sacra, sin solución de continuidad de la piel. El tratamiento más adecuado es:", "options": ["Aseo con hidrogel", "Colchón antiescaras ", "Antibióticos", "Resolución quirúrgica", "Cambios de posición frecuentes "], "answer": "Cambios de posición frecuentes" },
    { "question": " Un niño de 4 años presenta disuria, asociada a molestias abdominales, sin fiebre. Su examen físico no tiene alteraciones. Se solicita sedimento de orina, que muestra 6 a 8 glóbulos blancos por campo y urocultivo, que muestra desarrollo de Escherichia coli multisensible, con 60.000 UFC por mm3. ¿Cuál es la conducta más adecuada?", "options": ["Repetir el sedimento y urocultivo", "Iniciar cefadroxilo 50 mg/Kg/día, por 5 días", "Iniciar nitrofurantoína 5-7 mg/Kg/día, por 7 días", "Solicitar cintigrafía DSMA", "Solicitar ecografía abdominal"], "answer": "Repetir el sedimento y urocultivo" },
    { "question": "Un paciente de 38 años consulta por paresia facial bilateral, de una semana de evolución, mayor a izquierda. Además, presenta paresia del sexto bervio craneal izquierdo. Al examen físico tiene disminución generalizada de las fuerzas de las extremidades, con arreflexia e hipotonía. ¿Cuál es el diagnóstico más probable? ", "options": ["Polineuropatía", "Síndrome de Guillain Barré", "Miastenia gravis", "Esclerosis múltiple", "Infarto de troncoencéfalo"], "answer": "Síndrome de Guillain Barré" },
    { "question": " Una mujer de 26 años, sexualmente activa y alérgica a la penicilina, consulta por disuria y molestias genitales, de 4 días de evolución, asociada a leucorrea. Al examen físico, se observan signos inflamatorios en el cuello uterino, con escasa leucorrea. El cultivo de Thayer Martin es positivo y prueba de aminas, negativa. El tratamiento de elección es:", "options": ["Ciprofloxacino", "Ceftriaxona", "Azitromicina ", "Doxiciclina  ", "Penicilina benzatina"], "answer": "Doxiciclina " },
    { "question": " Una paciente de 35 años, con antecedente de una histerectomía radical, por un cáncer de cuello uterino, hace dos años, consulta por bochornos frecuentes, asociado a sequedad genital y dispareunia, más insomnio, secundaria a los bochornos. En su examen físico tiene IMC: 28. Se solicitan exámenes, en los que destaca colesterol total: 221 mg/dl, colesterol HDL: 32 mg/dl y triglicéridos: 456 mg/dl. La conducta más adecuada es:", "options": ["Estrógeno más progestágeno oral", "Estrógeno solo vía oral", "Estrógeno en parches", "Venlafaxina oral", "Progestágenos tópicos"], "answer": "Estrógeno en parches" },
    { "question": "Un paciente de 50 años presenta cefalea, náuseas, mareos y epigastralgia, de dos años de evolución. Cuenta con múltiples exámenes que descartan causa orgánica, sin embargo, él insiste en exigir más estudios. No se identifica ánimo de obtener alguna ganancia. El diagnóstico más probable es un trastorno:", "options": ["Depresivo mayor", "Delirante", "Obsesivo compulsivo ", "De somatización", "Facticio"], "answer": "De somatización" },
    { "question": " Una paciente de 32 años consulta por amenorrea de 5 meses de evolución. Se realiza múltiples exámenes, entre los que destacan HCG: < 5 UL/L, FSH y LH < 5 UI/L, con pruebas tiroides y prolactina dentro de rangos normales. Su prueba de progesterona es negativa y su prueba de estrógeno más progesterona es positiva. Su examen físico no aporta mayor información. ¿Cuál es el diagnóstico más probable?", "options": ["Síndrome de ovario poliquístico", "Falla ovárica primaria ", "Síndrome de Asherman", "Falla hipotalámica / hipofisiaria", "Disgenesia gonadal "], "answer": "Falla hipotalámica / hipofisiaria" },
    { "question": " Una paciente de 26 años consulta por dispepsia de varios meses de evolución. Al examen físico se observa ictericia de piel y escleras. Tiene antecedente de alteraciones en sus pruebas hepáticas, hace 2 años. Se solicitan pruebas hepáticas, que muestran bilirrubinemia total: 2,2 mg/dl, bilirrubina directa: 0,3 mg/dl, SGOT: 26 UI/L, SGPT: 23 UI/L, GGT: 46 UI/L, FA: 65 UI/L. ¿Cuál es el diagnóstico más probable? ", "options": ["Colangitis esclerosante primaria", "Enfermedad de Gilbert", "Colestasia intrahepática", "Hepatitis en resolución", "Cirrosis biliar primaria"], "answer": "Enfermedad de Gilbert" , "feedback": "Es un trastorno del metabolismo de la bilirrubina que tiene una causa genética, afecta aproximadamente el 9% de la población y es habitual que se diagnostique casualmente en individuos sin síntomas pero con niveles de bilirrubina elevados.Esta enfermedad no tiene síntomas a excepción de la ictericia y no representa riesgo vital.El diagnóstico se confirma al descartar otras causas para la elevación de la bilirrubina y comprobar que el funcionamiento del hígado es normal." },
    { "question": "Una niña de 1 año y 10 meses presenta diarrea de dos meses de evolución, con mal incremento ponderal. Hace una semana empeora la diarrea y se agregan vómitos y malestar general. Al examen físico tiene edema de extremidades inferiores y palidez y su abdomen se palpa blando, sensible, sin irritación peritoneal. Se piden exámenes en los que destacan Na+: 132 mEq/L, K+: 2,8 mEq/L, glicemia: 66 mg/dl, albuminemia: 2,1 g/dl y hematocrito: 30%. El diagnóstico más probable es:", "options": ["Parasitosis intestinal ", "Fibrosis quística", "Enteropatía perdedora de proteínas", "Diarrea viral", "Crisis celiaca"], "answer": "Crisis celiaca" },
    { "question": " Un lactante de 11 meses presenta diarrea aguda, de 2 días de evolución, abundante, asociada a decaimiento marcado y tendencia al llanto. Al examen físico está somnoliento, con frialdad de extremidades y el llene capilar es de 3 segundos. Las mucosas se observan secas. ¿Cuál es la indicación inicial para su hidratación?", "options": ["Sales de hidratación oral", "Suero salino al 0,9%", "Suero glucosado al 5%", "Suero glucosalino ", "Albúmina endovenosa "], "answer": "Suero salino al 0,9%" },
    { "question": " Un recién nacido de término presenta estridor desde el nacimiento, sin otros síntomas. Al examen físico está en buenas condiciones, sin cianosis ni uso de musculatura accesoria. El diagnóstico más probable es:", "options": ["Anillo vascular", "Traqueomalacia", "Laringomalacia", "Hendidura laríngea", "Fístula traqueoesofágica"], "answer": "Laringomalacia" },
    { "question": "  Un niño de 4 años presenta incontinencia fecal, en algunas ocasiones, desde hace dos meses. Sin embargo, en otras ocasiones, pasan muchos días sin defecar y cuando lo hace, sus deposiciones son duras y caprinas. Su examen físico no aporta mayor información. ¿Cuál es el diagnóstico más probable?", "options": ["Niño sano", "Atresia duodenal", "Constipación funcional", "Megacolon aganglionótico", "Malrotación intestinal "], "answer": "Constipación funcional" },
    { "question": " Un niño de 2 meses, con antecedente de haber nacido a las 34 semanas de gestación, acude a control. ¿En qué momento debe administrarse la vacuna antineumocócica conjugada?", "options": ["En este momento", "En 4 semanas más", "En 6 semanas más", "A los 4 meses de edad ", "No debe administrarse"], "answer": "En este momento" },
    { "question": "  Una paciente de 30 años, cursando un embarazo de 32 semanas, sin controles previos, se realiza un Elisa para VIH, que resulta positivo. ¿Cuál es la conducta más importante para evitar la transmisión vertical?", "options": ["Iniciar triterapia antirretroviral ahora", "Realizar cesárea ahora", "Iniciar triterapia antirretroviral si la carga viral es alta ", "Administrar terapia antirretroviral durante el trabajo de parto ", "Realizar cesárea al llegar a las 38 semanas "], "answer": "Iniciar triterapia antirretroviral ahora" },
    { "question": " Una paciente de 24 años, multípara de 1, con antecedente de una cesárea previa, por desproporción céfalo pélvica. Cursa con un nuevo embarazo, de término, cuando inicia trabajo de parto. Inicialmente tiene buena dinámica uterina, sin embargo, luego desaparece, agregándose escasa metrorragia. El monitoreo fetal muestra bradicardia. ¿Cuál es el diagnóstico más probable?", "options": ["Desprendimiento de placenta", "Rotura uterina", "Rotura de vasa previa", "Placenta previa ", "Hipotensión secundaria a la anestesia"], "answer": "Rotura uterina" },
    { "question": " A una paciente se le inserta un DIU en un box de atención ginecológica, pero se sospecha que se produce una rotura uterina. ¿Cuál es la conducta más adecuada? ", "options": ["Administrar analgésicos", "Solicitar radiografía de pelvis", "Traccionar las guías del DIU", "Hospitalizar ", "Citar a control en 48 horas "], "answer": "Solicitar radiografía de pelvis" },
    { "question": " Una paciente de 30 años, con actividad sexual, consulta por dolor vulvar y sensación febril. Al examen físico se aprecia aumento de volumen eritematoso, de 6 cm de diámetro, doloroso, en relación a la zona posterior del labio mayor derecho. La conducta terapéutica más adecuada es: ", "options": ["Drenaje por punción ", "Iniciar antibióticos orales y esperar el drenaje espontáneo", "Drenaje quirúrgico simple", "Cistectomía de Bartholino", "Bartholinocistostomía"], "answer": "Bartholinocistostomía" },
    { "question": " Una paciente de 19 años consulta por disuria dolorosa y lesiones vulvares, de 48 horas de evolución. Refiere relaciones sexuales sin protección. Al examen genital, tiene 3 úlceras de fondo amarillento y halo eritematoso. ¿Cuál es el diagnóstico más probable?", "options": ["Molusco contagioso ", "Herpes genital", "Infección por Chlamydia trachomatis", "Chancro sifilítico", "Condiloma acuminado "], "answer": "Herpes genital" },
    { "question": "Una paciente de 30 años, púerpera de 28 días, en lactancia materna, consulta por dolor en la mama derecha, asociado a fiebre hasta 38,5°C. Al examen tiene aumento de volumen y eritema zona superior derecha de la mama, con aumento de volumen palpable, de consistencia aumentada y dolorosa, de 4 cm de diámetro, no fluctuante ni renicente , ubicado en el cuadrante superoexterno de dicha mama. El diagnóstico más probable es:", "options": ["Congestión mamaria ", "Flegmón mamario ", "Absceso mamario derecho ", "Mastitis derecha", "Cáncer inflamatorio de mama"], "answer": "Flegmón mamario " },

    {
        "question": " Un paciente de 55 años, fumador de 20 paquetes años, consulta por tos de 3 meses de evolución, asociado a disnea y expectoración mucosa. Al examen físico se ausculta murmullo pulmonar conservado, sin ruidos agregados. Se solicita una radiografía de tórax, que se muestra a continuación. [img] ¿Cuál es el diagnóstico más probable?",
        "options": [
            "Asma bronquial",
            "Enfermedad pulmonar obstructiva crónica",
            "Cáncer bronquial",
            "Hidatidosis pulmonar",
            "Enfermedad pulmonar intersticial"
        ],
        "answer": "Cáncer bronquial",
        "imgs": "recursos/julio 2019/9.png",

        "feedback": "Es un cáncer bronquial o pulmonar , tanto por la clínica, como por la imagen "
    },
    {
        "question": " Un paciente de 62 años presenta malestar general marcado, desde hace 20 minutos. Al examen físico está sudoroso, tiene FC: 33x’, PA: 120/50 mmHg. Se solicita un electrocardiograma que se muestra a continuación: [img] diga el diagnostico mas probable",
        "options": [
            "Bloqueo auriculoventricular de primer grado",
            "Bloqueo auriculoventricular de segundo grado, tipo I",
            "Bloqueo auriculoventricular de segundo grado, tipo II",
            "Bloqueo auriculoventricular de tercer grado",
            "Enfermedad del nodo sinusal"
        ],
        "answer": "Bloqueo auriculoventricular de tercer grado",
        "imgs": "recursos/julio 2019/21.png",
        "feedback": "Bloqueo auriculoventricular de tercer grado es una interrupcion parcial o completa de la transmicion de los impulsos procedentes de la auricula a los ventriculos. Donde se ve un electrocardiograma con disociacion entre las onda P y los complejos QRS , la frecuencia de las ondas P es mayor que los QRS"
    },
    {
        "question": " Un niño presenta aparición de lesiones eritematosas en las extremidades inferiores, hace 7 días, las que se muestran más abajo, a lo que se ha agregado edema de ambos tobillos.  [img] ¿Cuál de los siguientes exámenes es más adecuado para identificar una complicación frecuente de esta patología?",
        "options": [
            "Creatininemia",
            "Coronariografía",
            "Recuento de plaquetas",
            "Radiografía de pelvis",
            "Velocidad de eritrosedimentación"
        ],
        "answer": "Creatininemia",
        "imgs": "recursos/julio 2019/26.png",
        "feedback": "es una purpura donde la complicación mas frecuente es la Glomerulonefritis, que inicia con lesiones eritematosas en las extremidades inferiores, con edema de ambos tobillos "
    },
    {
        "question": " Un paciente de 56 años, con antecedente de enfermedad de Cröhn, desde los 26 años, sin tratamiento, desde hace 4 meses, presenta un cuadro de dolor abdominal y vómitos, que han ido en aumento. Sus vómitos son de tipo alimentario y al examen físico tiene PA: 110/70 mmHg, FC: 90 x’, T°:37°C, al examen abdominal se observa abdomen distendido, con auscultación de gorgoritmos y ruidos hidroaéreos intensos. Se solicita radiografía, que se muestra a continuación: [img] el diagnostico mas probable es:",
        "options": [
            " Enfermedad de Cröhn activa", "Apendicitis aguda", "Perforación intestinal", "Vólvulo de sigmoides", "Obstrucción intestinal"
        ],
        "answer": "Obstrucción intestinal",
        "imgs": "recursos/julio 2019/36.png",
        "feedback": "Una de las complicaciones de la enfermedad de Crohn es la oclucion intestinal donde se puede observar en la Rx simple de abdomen los niveles hidroaereos."
    },
    {
        "question": " Una paciente de 31 años, en trabajo de parto de término, en fase activa, con progresión de 2 a 7 cm, en dos horas tiene dinámica de 3 contracciones en 10 minutos y membranas rotas. Se realiza registro cardiaco fetal, que se muestra a continuación:  [img] diagnostico mas probable del estado fetal",
        "options": [
            "Registro tipo I", " Registro tipo II", "Registro tipo III", "Registro reactivo", "Variabilidad disminuida"
        ],
        "answer": " Registro tipo I",
        "imgs": "recursos/julio 2019/58.png",

        "feedback": ""
    },
    {
        "question": "  Un paciente de 62 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente cuando presenta infecciones respiratorias. En su examen físico se auscultan sibilancias bilaterales y espiración prolongada.Se le indicaron espirometria y Rx de torax   [img:0] [img:1] diga el diagnostico mas probable",
        "options": [
            "Asma bronquial", "Enfermedad pulmonar obstructiva crónica", "Bronquiectasias", "Bronquitis crónica", "Enfermedad pulmonar intersticial difusa"
        ],
        "answer": "Asma bronquial",
        "imgs": ["recursos/julio 2019/63-1.png", "recursos/julio 2019/63.png"],
        "feedback": "tiene clinica de AB ademas de la Rx con signos de ensuflacion pulmonar y aumento de los ilios pulmonares adenas de una epirometria que concuerda con la clinica de AB"
    },
    {
        "question": "  Un paciente de 81 años presenta dolor muy intenso de la rodilla derecha, con EVA 8/10, que le impide caminar. En su examen físico, se aprecia eritema y aumento de volumen de la rodilla. Se solicita radiografía de rodilla, que se muestra más abajo. Además, se realiza punción articular, que da salida a un líquido sinovial, con 160.000 glóbulos blancos por mm3, sin visualización de bacterias y con presencia de cristales con elongación positiva débil.  [img] cual es el diagnostico mas probable",
        "options": [
            "Artritis séptica", "Artritis por cristales de pirofosfato de calcio", "Artritis por cristales de hidroxiapatita de calcio", "Artritis por oxalato de calcio", "Gota"

        ],
        "answer": "Artritis por cristales de pirofosfato de calcio",
        "imgs": "recursos/julio 2019/64.png",

        "feedback": " Cristales con elongación positiva débil es caracteristico de este tipo de artritis"
    },
    {
        "question": "Un hombre de 31 años, deportista, consulta por dolor precordial de 2 días de evolución, EVA 8/10, asociado a leve sensación de ahogo, que aparece especialmente al recostarse. Se solicita un electrocardiograma, que se muestra a continuación:  [img] diga el diagnostico mas probable",
        "options": [
            "Infarto agudo al miocardio", "Pericarditis aguda", "Neumotórax espontáneo", "Tromboembolismo pulmonar", "Costocondritis del deportista"
        ],
        "answer": "Pericarditis aguda",
        "imgs": "recursos/julio 2019/81.png",
        "feedback": " Rx y clinica sugerente de pericarditis aguda ya que no trae ningun antecedente previo que sugiera otra cosa"
    },

    {
        "question": " Un paciente de 65 años, diabético e hipertenso, en tratamiento con metformina y enalapril, consulta por tos seca de 3 meses de evolución. Al examen físico tiene murmullo pulmonar conservado bilateral, sin presencia de otros ruidos. Su radiografía de tórax se muestra a continuación:[img]",
        "options": [
            "Suspender la metformina", "Iniciar salbutamol", "Iniciar codeína", "Suspender el enalapril", "Solicitar prueba de provocación bronquial"
        ],
        "answer": "Suspender el enalapril",
        "imgs": "recursos/julio 2019/92.png",
        "feedback": "Una de las reacciones no deseadas del uso de captopril es la tos seca sin ningun otro sintoma"

    },


    {
        "question": " Un paciente con antecedente de enfermedad pulmonar obstructiva crónica presenta un cuadro de 3 días de evolución, de fiebre hasta 38,9°C, asociada a malestar general, tos, expectoración mucopurulenta y aumento de la disnea. Al examen físico se observa con apremio respiratorio de reposo y se auscultan sibilancias difusas, más crepitaciones en la zona posterior del lóbulo inferior derecho. Se solicita una radiografía de tórax, que se muestra a continuación.[img] ¿Qué antibiotico es el mas adecuado para el tratamiento de este paciente?",
        "options": [
            "Amoxicilina", "Claritromicina", "Clindamicina", "Cefotaximo", "Azitromicina"
        ],
        "answer": "Cefotaximo",
        "imgs": "recursos/julio 2019/105.png",
        "feedback": "Cefotaximo es el antibiotico de eleccion en un paciente con antecedentes de EPOC complicado con una infeccion"

    },
    {
        "question": " Una paciente de 33 años, cursando embarazo de 40 semanas, inicia trabajo de parto. Se realiza control del parto, que constata dilatación cervical completa y cabeza en espinas +2. El monitoreo electrónico fetal muestra lo siguiente:[img] la conducta mas adecuada es:",
        "options": [
            "Realizar cesárea de urgencia", "Realizar fórceps", "Solicitar perfil biofísico", "Lateralizar a la madre y administrarle oxígeno", "Mantener una conducta expectante"
        ],
        "answer": "Realizar fórceps",
        "imgs": "recursos/julio 2019/118.png",
        "feedback": "Realizar fórceps para ayudar en el trabajo de parto ya que hay una retencion de la cabeza fetal en este caso"

    },
    {
        "question": " Un paciente de 30 años, cuyo hermano está en tratamiento antituberculoso, en la fase bisemanal, presenta tos y expectoración mucopurulenta, asociada a fiebre de 38,7°C, desde hace 7 días. Se inició amoxicilina al inicio de los síntomas, con buena respuesta inicial, sin embargo, luego recurren los síntomas. Se solicita una radiografía de tórax, que se muestra a continuación:[img] la conducta mas adecuada es:",
        "options": [
            "Agregar ácido clavulánico al tratamiento", "Solicitar TAC de tórax", "Solicitar PPD", "Iniciar tratamiento antituberculoso", "Realizar estudio de líquido pleural"
        ],
        "answer": "Realizar estudio de líquido pleural",
        "imgs": "recursos/julio 2019/120.png",
        "feedback": "Realizar estudio de líquido pleural ya que presenta un derrame pleural y podria ser una complicacion por infeccion tuberculosa o de algun otro tipo de bacteria"

    },
    {
        "question": " Un niño de 3 años, con un cuadro de fiebre alta, asociada a malestar general y odinofagia intensa. Se inició tratamiento con amoxicilina, pero a las 48 horas presenta un exantema, que se muestra más abajo. Al examen físico, se aprecia decaído, con adenopatías cervicales anteriores dolorosas y amígdalas edematosas y eritematosas, con exudado blanco en su superficie. El exantema se muestra a continuación:[img] el diagnostico mas probable es:",
        "options": [
            "Escarlatina", "Mononucleosis infecciosa", "Alergia a la penicilina", "Enfermedad de Kawasaki", "Sarampión"
        ],
        "answer": "Mononucleosis infecciosa",
        "imgs": "recursos/julio 2019/122.png",
        "feedback": "Mononucleosis infecciosa cumple con esta clinica sobre todo por el exudado blanco en las amigdalas"

    },
    {
        "question": "Un niño de 13 años consulta por dolor y aumento de volumen, en relación a la pierna izquierda, que ha ido en aumento y lo hace cojear. Tiene antecedente de traumatismo en la zona. Se solicitan una radiografía y una resonancia magnética nuclear, que se muestran a continuación: [img] diagnostico mas probable es:",
        "options": [
            "Osteocondroma", "Osteosarcoma", "Sarcoma de partes blandas", "Tumor de células gigantes", "Sarcoma de Ewing"
        ],
        "answer": "Sarcoma de Ewing",
        "imgs": "recursos/julio 2019/152.png",
        "feedback": "Sarcoma de Ewing: la edad + los antecedentes y los examenes imagenologicos corroboran este diagnostico"

    },
    {
        "question": "Una paciente de 76 años, diabética, consulta por un cuadro de 3 días de evolución de aparición de una lesión eritematosa en el tronco, asociada a dolor urente, como se ve en la siguiente imagen: [img] el tratamiento mas adecuado es:",
        "options": [
            " Aciclovir 400 mg cada 8 horas, por 5 días", "Valaciclovir 1g cada 8 horas, por 7 días", "Aciclovir tópico", "Loratadina 10 mg al día por 5 días", "Flucloxacilina 500 mg cada 8 horas por 10 días"
        ],
        "answer": "Valaciclovir 1g cada 8 horas, por 7 días",
        "imgs": "recursos/julio 2019/158.png",
        "feedback": "Valaciclovir 1g cada 8 horas, por 7 días:Tratamiento de eleccion para el herpes zoster  "

    },
    {
        "question": " Un paciente alcohólico, fumador de 10 paquetes año, presenta, desde hace 7 días, un cuadro de tos, con expectoración purulenta y fiebre hasta 38°C. Ha evolucionado con empeoramiento de los síntomas. Al examen físico está febril, con apremio respiratorio. Se solicita una radiografía de tórax, que se muestra a continuación:[img] el examen mas adecuado para proseguir el estudio",
        "options": [
            "Broncoscopía", "Videotoracoscopía", "TAC de tórax", "PET-TC", "Resonancia magnética nuclear de tórax"
        ],
        "answer": "TAC de tórax",
        "imgs": "recursos/julio 2019/165.png",
        "feedback": "TAC de tórax seria para hacer diagnostico mas detallado"

    },
    {
        "question": "Un hombre sufre una caída, mientras corría, golpeándose el hombro contra el piso y presentando dolor e impotencia funcional de dicho hombro. Al examen físico tiene equimosis clavicular y dolor con todos los movimientos del hombro. Se solicita radiografía, que se muestra a continuación: [img] cual seria la conducta inicial:",
        "options": [
            "Yeso Velpeau", "Yeso colgante", "Vendaje en ocho", "Cabestrillo", "Osteosíntesis"
        ],
        "answer": "Cabestrillo",
        "imgs": "recursos/julio 2019/179.png",
        "feedback": "es el tratamiento inicial de la fractura de clavicula como se muestra en la radiografia"

    },


    {
        "question": "Un paciente de 83 años, calvo, con antecedente de múltiples queratosis actínicas en la cabeza, presenta una lesión en el cuero cabelludo, que notó hace 3 meses y que ha ido creciendo hasta alcanzar un diámetro de 2 x 3 cm. Se muestra a continuación: [img] diagnostico mas probable",
        "options": [
            "Melanoma", "Impétigo", "Dermatitis de contacto", "Quemadura solar", "Carcinoma espinocelular"
        ],
        "answer": "Carcinoma espinocelular",
        "imgs": "recursos/julio 2019/84.png",
        "feedback": "lesión con caracteristicas de este tipo de cancer dermatologico"
    },

    {
        "question": "Un paciente de 42 años consulta por tos y disnea de 2 semanas de evolución, asociada a expectoración mucopurulenta y, en ocasiones, hemoptoica. Además, ha presentado fiebre ocasional, hasta 38,2°C. Al examen físico presenta estertores bilaterales en ambos campos pulmonares. Se solicitaron baciloscopías de expectoración, que resultan negativas. Además, se solicita otros exámenes, que muestran quantiferón para tuberculosis (+) y PCR para Mycobacterium tuberculosis (+). Su radiografía de tórax se muestra más abajo.[img] la conducta mas adecuada es:",
        "options": [
            "Iniciar profilaxis con isoniazida", "Iniciar rifampicina más isoniazida", "Iniciar tratamiento habitual para la tuberculosis", "Solicitar TAC de tórax", "Esperar el resultado del cultivo de Koch y decidir conducta según resultado"
        ],
        "answer": "Iniciar tratamiento habitual para la tuberculosis",
        "imgs": "recursos/diciembre 2018/8.png",
        "feedback": "La radiografía no se veía bien, pero tanto por la PCR + para TBC, como por el quamtiferón positivo, probablemente se trata de una TBC, aunque las baciloscopías estén negativas y se debe iniciar el tratamiento habitual"
    },

    {
        "question": " Un paciente de 51 años presenta, desde hace 5 días, un cuadro de disnea, que ha ido en aumento, con compromiso del estado general y fiebre hasta 38°C, asociada a tos y expectoración mucopurulenta. Además, presenta dolor tipo puntada de costado izquierdo. Al examen físico está enflaquecido, tiene PA: 110/70 mmHg, FC: 96x’, FR: 28x’, satura 91% a FiO2 ambiental. En el examen pulmonar se aprecia disminución del murmullo pulmonar en la base izquierda, asociados a estertores bilaterales. Se solicita un hemograma que muestra blancos: 15.000 por mm3, plaquetas: 250.000 por mm3 y hematocrito: 38% y una radiografía de tórax, que se muestra a continuación.  [img] ¿cual es la conducta inicial mas adecuada?",
        "options": [
            "Solicitar baciloscopías de desgarro", "Realizar cirugía", "Solicitar ecografía de tórax", "Solicitar TAC de tórax", "Realizar toracocentesis evacuadora y diagnóstica"
        ],
        "answer": "Realizar toracocentesis evacuadora y diagnóstica",
        "imgs": "recursos/diciembre 2018/9.png",
        "feedback": "Tiene un derrame pleural izquierdo, por lo que se debe evacuar y estudiar. La clínica orienta a nuemonía o tuberculosis, sin dejar claro cuál es la causa."
    },
    {
        "question": " Un paciente de 76 años, jubilado de la minería y fumador de 20 paquetes año consulta por tos y disnea de 2 meses de evolución, asociada a expectoración mucosa, que a veces tiene estrías de sangre. Ha bajado 4 kilogramos de peso y presenta astenia. Su examen pulmonar muestra murmullo pulmonar conservado, bilateral, con escasos crépitos y sibilancias, mayores en el lado derecho.Se solicita una radiografía, que se muestra a continuación: [img] cual es el examen mas adecuado para proseguir con el estudio de este paciente?",
        "options": [
            "TAC de tórax", "Broncoscopía", "Baciloscopías", "PET", "Resonancia magnética de tórax"
        ],
        "answer": "TAC de tórax",
        "imgs": "recursos/diciembre 2018/11.png",
        "feedback": "Es una pregunta discutible. Lo primero a revisar siempre son las radiografías previas. Luego, el TAC es el examen de elección para el enfrentamieinto del nódulo pulmonar. Sin embargo, el PET/TC ha demostrado ser de gran utilidad (a pesar de falsos positivos), por lo que también es una respuesta potencialmente correcta. Luego se hace la biopsia por broncoscopía."
    },
    {
        "question": "Una paciente de 28 años, embarazada de 28 semanas, consulta por aparición de una lesión cutánea en el dedo medio, de algunas semanas de evolución, friable, que ha sangrado en varias oportunidades. Al examen físico, se observa la siguiente fotografía:[img] ¿cual es el diagnostico mas probable?",
        "options": [
            "Verruga vulgar", "Granuloma piógeno", "Molusco contagioso", "Melanoma amelanótico", "Carcinoma basocelular"
        ],
        "answer": "Granuloma piógeno",
        "imgs": "recursos/diciembre 2018/62.png",
        "feedback": "Es un granuloma piógeno clásico. Eso sí, la foto era distinta"
    },
    {
        "question": " Una paciente de 58 consulta por aparición de una lesión pruriginosa, de 3 meses de evolución en el párpado inferior derecho, que ha aumentado de volumen. Al examen físico, se observa lo siguiente:[img]¿cual es el diagnostico mas probable?",
        "options": ["Cáncer basocelular","Orzuelo","Chalacion","Blesfaritis","Conjuntivitis"],
        "answer": "Cáncer basocelular",
        "imgs": "recursos/diciembre 2018/63.png",
        "feedback": "Es un cáncer basocelular clásico que suele aparecer en la forma de un bulto ligeramente transparente en la piel, aunque puede tomar otras formas. El carcinoma basocelular ocurre con mayor frecuencia en zonas de la piel que están expuestas al sol, como la cabeza y el cuello."
    },
    {
        "question": "Un niño de 18 meses lleva 3 días con fiebre, cuantificada de 38,8°. Se inicia amoxicilina, desapareciendo la fiebre y apareciendo un exantema eritematoso generalizado, que se muestra en la siguiente imagen [img] ¿diagnostico mas probable?",
        "options": [
            "Eritema infeccioso", "Exantema súbito", "Reacción alérgica a medicamentos", "Enfermedad de Kawasaki", "Síndrome de piel escaldada"
        ],
        "answer": "Exantema súbito",
        "imgs": "recursos/diciembre 2018/70.png",
        "feedback": "Es un exantema súbito clásico, por virus herpes 6"
    },
    {
        "question": "Un paciente de 73 años, diabético e hipertenso, en tratamiento farmacológico con enalapril, hidroclorotiazida, glibenclamida y metformina, presenta crisis de palpitaciones que duran 1 a 4 horas y que se han repetido en 5 ocasiones, durante las últimas semanas. Actualmente su examen físico muestra una frecuencia cardíaca es 62x’, regular su presión arterial, 133/83 mmHg y su examen cardiopulmonar muestra ritmo regular en dos tonos, sin soplos y murmullo pulmonar presente, simétrico, sin otros ruidos. A continuación, se muestra un electrocardiograma tomado durante una de las crisis: [img]¿Qué fármaco es el más importante agregar en este momento? ",
        "options": [
            "Antiagregantes", "Adenosina", "Verapamilo", "Acenocumarol", "Betabloqueantes"
        ],
        "answer": "fibrilación auricular paroxística",
        "imgs": "recursos/diciembre 2018/92.png",
        "feedback": "Tiene una fibrilación auricular paroxística. Tiene baja frecuencia cardíaca, por lo que no se debe iniciar verapamilo ni betabloqueo. Por ser hipertenso y diabético, tien 2 puntos del CHADS2, por lo que se debe anticoagular"
    },
    {
        "question": "Un paciente de 40 años, con antecedente de reflujo gastroesofágico, consulta por dolor torácico de algunas horas de evolución, tipo puntada, muy intenso. Refiere que el dolor no respondió al uso de omeprazol. En su examen físico se aprecia adolorido, con FC: 76x’, PA: 110/70 mmHg, ritmo regular en 2 tonos, sin soplos. Se solicita un electrocardiograma, que se muestra a continuación:[img]El diagnóstico más probable es:",
        "options": [
            "Pericarditis aguda", "Espasmo esofágico", "Infarto miocárdico con supradesnivel del segmento ST de la pared lateral", "Infarto miocárdico con supradesnivel del segmento ST de la pared inferior", "Infarto miocárdico con supradesnivel del segmento ST de la pared inferolateral"
        ],
        "answer": "Pericarditis aguda",
        "imgs": "recursos/diciembre 2018/94.png",
        "feedback": "Es una pericarditis clásica, tanto por la clínica, como por el EKG con SDST en J en casi todas las derivaciones."
    },
    {
        "question": "Un paciente de 40 años, con antecedente de reemplazo valvular, secundario a una endocarditis bacteriana, consulta por consulta por palpitaciones muy intensas, asociadas a disnea. Al examen físico tiene un pulso a 140 latidos por minutos, regular. Se realizan maniobras vagales (masaje carotídeo) y se observa el siguiente electrocardiograma:[img]",
        "options": [
            "Taquicardia paroxística supraventricular", "Fibrilación auricular", "Flutter auricular", "Síndrome de Wolff Parkinson White", "Taquicardia auricular"],
        "answer": "Flutter auricular",
        "imgs": "recursos/diciembre 2018/95.png",
        "feedback": "Con las maniobras vagales baja la frecuencia, se ven las ondas de serrucho y luego vuelve a aumentar la frecuencia. Es lo clásico del flutter auricular."
    },
    {
        "question": "Un paciente de 70 años presenta astenia, intolerancia al ejercicio y disnea de algunos días de evolución. Además, presenta lipotimias luego de levantarse de la cama. Al examen físico tiene FC: 48 x’, regular. Se realiza un electrocardiograma, que se muestra a continuación:[img] el diagnostico mas probable es:",
        "options": [
            "Bloqueo aurículo-ventricular de primer grado", "Bloqueo aurículo-ventricular de segundo grado, Mobitz I", "Bloqueo aurículo-ventricular de segundo grado, Mobitz II", "Bloqueo aurículo-ventricular completo", "Enfermedad del nodo sinusal"
        ],
        "answer": "Bloqueo aurículo-ventricular de segundo grado, Mobitz I",
        "imgs": "recursos/diciembre 2018/96.png",
        "feedback": ""
    },
    {
        "question": "Un paciente de 62 años, con antecedente de hipertensión arterial, en tratamiento con enalapril e hidroclorotiazida y fumador de 5 paquetes año, consulta por un cuadro de disnea de esfuerzos de 2 años de evolución, que ha progresado desde entonces. Por ello, en la actualidad, evita subir escaleras y cargar cosas pesadas. Al examen físico se aprecian acropaquías y su examen pulmonar muestra murmullo pulmonar simétrico, con crepitaciones gruesas bilaterales. Se solicita radiografía de tórax, que se muestra a continuación:[img] El diagnostico mas probable:",
        "options": [
            "Neumoconiosis", "Cáncer bronquioloalveolar", "Bronquiectasias", "Enfermedad pulmonar obstructiva crónica", "Fibrosis pulmonar idiopática"

        ],
        "answer": "Fibrosis pulmonar idiopática",
        "imgs": "recursos/diciembre 2018/98.png",
        "feedback": "Tanto por la clínica, como por la radiografía es una fibrosis pulmonar clásica."
    },
    {
        "question": "Una mujer de 63 años, hipertensa, en tratamiento con enalapril y amlodipino, consulta por tos, con expectoración mucopurulenta, de 3 días de evolución. Además, presenta fiebre, malestar general y dolor torácico con la inspiración máxima. Al examen físico, se constata T°: 38 °C, PA: 120/80 mmHg, FC: 80 lpm, FR: 15 rpm, saturación de oxígeno: 97% y en el examen cardiopulmonar destacan crepitaciones localizados en el lado derecho. Se solicita una radiografía de tórax, que se muestra a continuación:[img]¿Cuál es el tratamiento más adecuado?",
        "options": [
            "Amoxicilina con ácido clavulánico", "Ceftriaxona", "Levofloxacino", "Clindamicina", "Azitromicina"
        ],
        "answer": "Amoxicilina con ácido clavulánico",
        "imgs": "recursos/diciembre 2018/100.png",
        "feedback": "Tiene una neumonía del lóbulo superior derecho. En estricto rigor, se puede tratar con amoxicilina y ácido clavulánico."
    },
    {
        "question": "Un paciente de 19 años consulta por dolor torácico derecho, de 24 horas de evolución, que aumenta con la inspiración. Al examen físico, se aprecia disminución del murmullo pulmonar en el lado derecho. Se solicita una radiografía, que se muestra a continuación:[img]¿Cuál es la conducta más adecuada?",
        "options": [
            "Control radiológico en 24 horas", "Solicitar TAC de tórax", "Realizar cirugía abierta", "Drenaje con tubo pleural", "Videotoracoscopía"
        ],
        "answer": "Drenaje con tubo pleural",
        "imgs": "recursos/diciembre 2018/143.png",
        "feedback": "Por la clínica era un neumotórax. La radiografía era muy oscura, pero con imaginación y paciencia, se veía el neumotórax derecho . Por ser mayor a 15%, se trata con tubo pleural"
    },
    {
        "question": "Un paciente de 77 años, con antecedente de hipertensión arterial crónica, presenta visión distorsionada de las letras y refiere que las líneas se ven onduladas. Actualmente tiene un escotoma central. Se hace un fondo de ojo, que se muestra a continuación:[img] diagnostico mas probable es:",
        "options": [
            "Desprendimiento de retina", "Retinopatía hipertensiva", "Trombosis de la vena central de la retina", "Catarata", "Degeneración macular relacionada con la edad"
        ],
        "answer": "Degeneración macular relacionada con la edad",
        "imgs": "recursos/diciembre 2018/150.png",
        "feedback": "Es un Degeneración macular relacionada con la edad clásica, tanto por la clínica (metamorfopsias y escotoma central),como por el fondo de ojo (aunque se veían exudados y hemorragias maculares y no solo drusas)."
    },
    {
        "question": " Un paciente de 19 años consulta por caída de cabello en la zona occipital, que inició hace 2 semanas. Al examen físico, se aprecia una zona sin cabellos, tal como se muestra en la foto: [img]¿Cual es el diagnostico mas probable?",
        "options": [
            "Lupus eritematoso cutáneo crónico", "Alopecia areata", "Alopecia androgénica", "Tricotilomanía", "Tiña capitis"
        ],
        "answer": "alopecia areata",
        "imgs": "recursos/diciembre 2018/151.png",
        "feedback": "Es una alopecia areata clásica"
    },
    {
        "question": " Un lactante de 3 meses presenta aparición de lesiones en el abdomen y muslo, que se muestran a continuación:[img]¿Cuál es el agente etiológico más probable?",
        "options": [
            "Virus herpes simplex", "Streptococcus pyogenes", "Virus varicela zóster", "Virus pox", "Staphilococcus aureus"
        ],
        "answer": "Staphilococcus aureus",
        "imgs": "recursos/diciembre 2018/153.png",
        "feedback": "Es un impétigo buloso, causado por S. aureus."
    },
    { //dic 2019
    "question": "Una paciente de 40 años, usuaria de anticonceptivos  orales, consulta por cefalea holocránea, muy intensa, de 5 días de evolución, que se ha asociado a náuseas y vómitos alimentarios, mayores en la mañana, y que no ha respondido al uso de analgésicos orales. Hoy presentó una convulsión tónico-clónica. En su examen físico tiene sopor superficial paresia de las extremidades derechas. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Migraña por anticonceptivos",
        "Infarto cerebral extenso",
        "Accidente vascular lacunar",
        "Epilepsia con parálisis de Todd",
        "Trombosis venosa cerebral"
    ],
    "answer": "Trombosis venosa cerebral",
    "feedback": "pero tiene una cefalea con signos de hipertension endocraneal y signos focales, más convulsiones. Orienta a trombosis de seno cavernoso el antecedente de anticonceptivos orales. "
},
{
    "question": "Un paciente de 58 años, fumador de 20 paquetes año, consulta por disfonía de 3 semanas de evolución, asociada a ligera odinofagia. Al examen físico, además, se palpa una adenopatía submandibular, de consistencia aumentada. ¿Cuál es el examen más adecuada para proseguir el estudio?",
    "options": [
        "TAC de cuello",
        "TAC de tórax",
        "Ecografía de cuello",
        "Nasofibrolaringoscopía",
        "Endoscopía digestiva alta"
    ],
    "answer": "Nasofibrolaringoscopía",
    "feedback": "el cuadro clínico sugiere cáncer de laringe, por lo que se sugiere este proceder"
},
{
    "question": "Un paciente de 30 años, hipermétrope, consulta por cefalea intensa, en el lado derecho, asociado a náuseas, de intensidad 10/10. Al examen físico se observa ojo rojo profundo en el lado derecho, con pupila en midriasis fija y arreactiva. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Glaucoma agudo",
        "Trombosis de la vena central de la retina",
        "Cefalea cluster",
        "Celulitis orbitaria",
        "Accidente vascular encefálico"
    ],
    "answer": "Glaucoma agudo",
    "feedback": "tiene toda la clinica de un glaucoma agudo"
},
{
    "question": "En gestión de salud, ¿cuál es la diferencia entre planificación y programación?",
    "options": [
        "La planificación se refiere a objetivos y recursos específicos, mientras que la programación es global ",
        " La planificación es a largo plazo, mientras que la programación es anual",
        "La programación, a diferencia de la planificación, debe ser concordante con la misión y la visión de la institución",
        "La planificación se basa en lo determinado con la programación",
        "La planificación se relaciona a los costes y recursos de actividades concretas y la programación se relaciona con el presupuesto general del proyecto"
    ],
    "answer":" La planificación es a largo plazo, mientras que la programación es anual",
    "feedback": "La programación se basa en la planificación y fija las actividades a realizarse y los recursos necesarios en el corto plazo, generalmente anual, mensual y semanalmente."
},
{
    "question": "Un paciente de 26 años consulta por aparición de una lesión en los genitales. Tiene antecedente de relaciones sexuales de riesgo, con múltiples parejas sexuales. Al examen físico tiene una lesión ulcerada de 1 cm, en el glande, indolora, de aspecto limpio. Además, se palpan pequeñas adenopatías inguinales bilaterales, indoloras. ¿Cuál es el examen más adecuado para proseguir el estudio?",
    "options": [
        "Tinción de Gram de la secreción de la lesión",
        "VDRL",
        "Reacción de polimerasa para Chlamydia trachomatis",
        "Reacción de polimerasa para virus herpes simplex",
        "Reacción de polimerasa para virus papiloma humano"
    ],
    "answer": "VDRL",
    "feedback": "Es chancro o sifilis primaria por lo que el diagnóstico es clinico "
},
{
    "question": "Un paciente de 76 años, con antecedente de accidente vascular secuelado, hace 2 meses, se alimenta mediante gastrostomía, la cual fue realizada endoscópicamente. Accidentalmente se retiró la sonda. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Solicitar radiografía de abdomen simple",
        "Solicitar ecografía abdominal",
        " Solicitar TAC de abdomen",
        " Instalar una nueva sonda por el osteoma",
        " Realizar una nueva gastrostomía"
    ],
    "answer":" Instalar una nueva sonda por el osteoma",

    "feedback": "si es que la sonda se retiró, sin mayor daño, ni signos clínicos de perforación o filtración, se puede volver a instalar una nueva"
},
{ // quest 7
    "question": "Un paciente de 60 años, fumador de 40 paquetes años, consulta por disnea de 3 meses de evolución, asociado a tos con expectoración mucosa. Al examen físico tiene FC: 72x’, PA: 110/70 mmHg, FR: 15x’ y a la auscultación pulmonar se constatan escasos crépitos y algunas sibilancias, que son mayores en el campo pulmonar izquierdo. Se realiza una radiografía, que se muestra a continuación: [img] ¿Cuál es el examen de elección para proseguir el estudio?",
    "options": [
        "Biopsia pulmonar por fibrobroncoscopía",
        "TAC de tórax",
        "Fibrobroncoscopía con lavado bronquioalveolar",
        "Biopsias por videotoracoscopía",
        "Resonancia magnética nuclear de tórax"
    ],
    "answer":"TAC de tórax",
    "feedback": "Tiene un tumor pulmonar izquierdo y la clínica sugiere cáncer. Luego de la RxTx se recomienda una TAC, antes de proceder a la biopsia ",
    "imgs": "recursos/diciembre 2019/7.png",

},
{
    "question": " Un paciente de 25 años, esquizofrénico, recibe 5 mg de haloperidol intramuscular, por un cuadro de agitación psicomotora. A las dos horas presenta contracción tónica y dolorosa del cuello, con desviación hacia la derecha. ¿Cuál es el tratamiento de este cuadro?",
    "options": [
        "Bromocriptina",
        "Clorpromazina",
        "Lorazepam",
        "Diclofenaco",
        "Propanolol"
    ],
    "answer": "Lorazepam",
    "feedback": "El manejo de la distonía aguda (tortícolis espasmódica, en este caso) es suspender el antipsicótico más administrar BDZ"
},
{
    "question": "Un paciente de 78 años, con patologías psiquiátricas en tratamiento con diazepam, sertralina y clorpromazina, presenta un cuadro de 24 horas de evolución de confusión y desorientación, asociado a náuseas, vómitos y sudoración. Al examen físico tiene taquicardia de 115x’, hipertensión arterial de 170/110 mmHg, aumento del tono muscular, y sopor superficial. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Síndrome neuroléptico maligno",
        "Síndrome de discontinuación de antidepresivos inhibidores de la recaptura de serotonina",
        "Síndrome de privación de benzodiacepinas",
        "Síndrome serotoninérgico",
        "Síndrome anticolinérgico"
    ],
    "answer":"Síndrome serotoninérgico",
    "feedback": "Es una pregunta difícil. El diazepam da síndrome narcótico. La sertralina, síndrome serotoninérgico. La clorpromazina, síndrome neuroléptico maligno y síndrome anticolinérgico. La clínica sugiere síndrome serotoninérgico, que mezcla elementos del síndrome neuroléptico maligno (hipertonía, hipertermia y compromiso de conciencia), con el síndrome adrenérgico (HTA, taquicardia, hipertermia)."
},
{
    "question": "Una paciente de 30 años, con antecedente de embarazo de 7 semanas de amenorrea, se realiza una ecografía transvaginal, que muestra útero con presencia de un huevo anembrionado de 18 mm, sin otras alteraciones. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Realizar laparoscopía",
        "Solicitar nueva ecografía en 7 días",
        "Solicitar niveles seriados de HCG",
        "Realizar legrado",
        "Solicitar curva de progesterona"
    ],
    "answer": "Solicitar nueva ecografía en 7 días",
    "feedback": "Tiene un huevo anembrionado menor a 25 mm, por lo que puede ser un aborto retenido o un embarazo normal, debiendo controlarse con una ecografía en 7 a 14 días."
},
{
    "question": " Una paciente de 53 años, en tratamiento con tamoxifeno 20 mg/día, por un cáncer de mama, diagnosticado hace 9 años, presenta metrorragia desde hace 7 días, por lo que se solicita una ecografía transvaginal, que muestra un endometrio de 8 mm, sin alteraciones anexiales. La conducta más adecuada es:",
    "options": [
        "Iniciar estrógenos orales",
        "Iniciar progestágenos orales",
        "Disminuir la dosis de tamoxifeno",
        "Solicitar biopsia endometrial",
        "Realizar histerectomía"
    ],
    "answer": "Solicitar biopsia endometrial",
    "feedback": "El tamoxifeno aumenta el riesgo de cáncer de endometrio. De todos modos, el manejo de la metrorragia postmenopáusica es estudiarla con una ecografía TV y luego biopsiar, si es que la ecografía no es compatible con una clara atrofia (endometrio menor a 4-5 mm o menor a 8 mm si está con TRH)."
},
{
    "question": " Un paciente de 70 años, con antecedente de hipertensión arterial , en tratamiento con losartán e   hidroclorotiazida, consulta por dolor torácico, EVA 9/10, irradiado a dorso, asociado a malestar general y sudoración. Al examen físico tiene FC: 110x’, PA: 170/110 mmHg, examen pulmonar con crépitos escasos bibasales y examen cardíaco con choque de la punta no desplazado y auscultación con ritmo regular, en dos tiempos, con presencia de un soplo cardíaco diastólico aspirativo, de intensidad IV/VI, de ubicación paraesternal derecho. ¿Cuál es el diagnóstico más probable? ",
    "options": [
        "Neumotórax",
        "Aneurisma de la aorta ascendente",
        "Infarto miocárdico con rotura del músculo papilar",
        "Tromboembolismo pulmonar",
        "Disección aórtica tipo A"
    ],
    "answer": "Disección aórtica tipo A",
    "feedback": "Es una disección aórtica, por los antecedentes de hipertension arterial, con el soplo diastólico de la insuficiencia aórtica y la clinica sugerente de esta patologia"
},
{
    "question": "Un paciente de 20 años inicia tratamiento con fluoxetina, por un cuadro de ansiedad social, evolucionando con aumento de la sociabilidad, volviéndose muy conversador, pero siendo en ocasiones muy intrusivo, al punto de ser desagradable. Muestra ausencia de empatía y ha tenido problemas con sus compañeros de estudios. Con frecuencia, se muestra irritable, ansioso y a veces emocionado, con llanto. Ha aumentado su nivel de actividad física y, además, presenta disminución de las horas de sueño, sin disminuir su nivel de energía. En ocasiones, presenta ganas de salir corriendo, sin saber por qué. Tiene antecedente de un episodio depresivo a los 16 años, que respondió al tratamiento con sertralina. El diagnóstico más probable es un trastorno: ",
    "options": [
        "Bipolar",
        "Adaptativo mixto",
        "Por déficit atencional",
        "Esquizoafectivo",
        "Delirante"
    ],
    "answer": "Bipolar",
    "feedback": "Tiene una manía , secundaria al uso de fármacos y, por tanto, tiene un TAB."
},
{
    "question": "Una paciente de 34 años, diabética con control metabólico irregular, consulta por edema de las extremidades inferiores y orinas espumosas. Al examen físico se constata edema palpebral y facial, edema blando de extremidades inferiores. En sus exámenes destaca hemoglobina glicosilada de 8,2% y proteinuria cuantitativa de 9 g en 24 horas. ¿Cuál es la conducta de elección para proseguir el manejo de esta paciente? ",
    "options": [
        "Electroforesis de proteínas en sangre",
        "Biopsia renal",
        "Inmunofijación de proteínas en orina",
        "Prednisona oral",
        "ANCA, C3 y C4"
    ],
    "answer": "Biopsia renal",
    "feedback": "tiene un síndrome nefrótico, que, por estar en contexto de una diabetes, se sospecha sea por nefropatía membranosa"
},
{//15
    "question": " Un hombre de 34 años, que fue padre hace 2 meses, presenta imágenes recurrentes y desagradables, en las que él se ve asfixiando a su bebé con una almohada. Se siente muy angustiado y evita el contacto con su hijo, por miedo a hacerle daño. No ha querido contarle a su cónyuge, ya que se siente avergonzado y cree que se puede estar volviendo loco. El diagnóstico más probable es: ",
    "options": [
        "",
        "Depresión psicótica",
        "Trastorno de estrés postraumático",
        "Trastorno adaptativo",
        "Trastorno obsesivo compulsivo",
        "Trastorno delirante"
    ],
    "answer": "Trastorno obsesivo compulsivo",
    "feedback": ""
},
{
    "question": "Una paciente de 45 años se realiza una mamografía, que es informada como Birrads 0, por presencia de opacidades nodulares bilaterales, bien delimitadas. La conducta más adecuada es:",
    "options": [
        "Control mamográfico en 6 meses",
        "Ecografía mamaria",
        "Biopsia estereotáxica",
        "Biopsia quirúrgica",
        "Resonancia magnética nuclear de mama"
    ],
    "answer": "Ecografía mamaria",
    "feedback": ""
},
{
    "question": "Un lactante de 3 años presenta, desde hace 2 días, edema de extremidades inferiores, de la cara y de la zona escrotal, asociado a malestar general. Hace 4 días está con diarrea. Al examen físico se aprecia pálido, se constata el edema blando y se observan múltiples equimosis en las extremidades inferiores. Se solicitan exámenes que muestran creatinina: 3,0 mg/dl, BUN:35 mg/dl, hemograma con hematocrito: 28%, plaquetas: 120.000, blancos: 11.000 por mm3, frotis con esquistocitos. ¿Cuál es el diagnóstico más probable? El diagnóstico más probable es:",
    "options": [
        "Síndrome nefrótico",
        "Púrpura de Schönlein Henoch",
        "Insuficiencia renal prerrenal",
        "Glomerulonefritis aguda posestreptocócica",
        "Síndrome hemolítico urémico"
    ],
    "answer": "Insuficiencia renal prerrenal",
    "feedback": "es una insuficiencia renal aguda Prerrenal y algunas de las causas prerrenales son por deshidratación como en este paciente"
},
{
    "question": "Un paciente de 71 años presenta un cuadro de dos meses de adinamia, astenia y disnea de medianos esfuerzos, progresiva. Al examen físico se observa importante palidez de piel y mucosas, por lo que se piden exámenes entre los que destacan hematocrito:23%, hemoglobina: 7,8 g/dl, VCM: 65 fl, plaquetas:400.000 por mm3, blancos: 5.600 por mm3, frotis: microcitosis, hipocromía, poiquilocitosis y anisocitosis, transferrina: 460 ug/dl y ferremia: 24 ug/dl. ¿Cuál es la conducta inicial más adecuada?",
    "options": [
        "Solicitar biopsia de médula ósea",
        "Realizar estudio endoscópico del tubo digestivo",
        "Solicitar ferritina plasmática",
        "Solicitar test de sangre oculta en deposiciones",
        "Transfundir glóbulos rojos"
    ],
    "answer": "Solicitar ferritina plasmática",
    "feedback": ""
},
{
    "question": "Una paciente de 27 años hace 3 años se realiza una gastrectomía longitudinal y hace 6 meses se realiza una colecistectomía laparoscópica. Luego de eso ha presentado dolor epigástrico tipo cólico, intenso, intermitente, postprandial, que en ocasiones la despiertan en la madrugada. Su examen físico no aporta mayor información. El diagnóstico más probable es:",
    "options": [
        "Cáncer de vesícula",
        "Coledocolitiasis",
        "Úlcera péptica",
        "Obstrucción intestinal por bridas",
        "Síndrome de dumping"
    ],
    "answer": "Coledocolitiasis",
    "feedback": ""
},
{
    "question": "Una paciente de 24 años se realiza un PAP que es informado como probable lesión de bajo grado, por lo que se realiza una colposcopía, que muestra una neoplasia intraepitelial de bajo grado. La conducta más adecuada es:",
    "options": [
        "Controlar con PAP y colposcopía cada 6 meses",
        "Tratar con diatermocoagulación bipolar",
        "Tratar con crioterapia",
        "Realizar cono cervical con asa LEEP",
        "Realizar tratamiento con láser"
    ],
    "answer": "Controlar con PAP y colposcopía cada 6 meses",
    "feedback": ""
},
{
    "question": "Un paciente de 28 años, fumador, consulta por aumento de volumen cervical. Al examen físico se palpa nódulo paratraqueal derecho, de 3 cm de diámetro y consistencia aumentada, que asciende con la deglución. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Quiste tirogloso",
        "Quiste branquial",
        "Cáncer de laringe",
        "Adenopatía metastásica",
        "Nódulo tiroideo"
    ],
    "answer": "Quiste tirogloso",
    "feedback": ""
},
{
    "question": "Un paciente de 32 años, con antecedente de madre con cáncer de tiroides, por lo que se realiza una ecografía cervical, que muestra un nódulo tiroideo de 7 mm de diámetro y aspecto quístico. Su TSH y T4 libre son normales. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Realizar punción aspiración con aguja fina",
        "Solicitar cintigrafía tiroidea",
        "Solicitar captación de yodo radiactivo",
        "Solicitar nueva ecografía en 6 meses",
        "Realizar tiroidectomía"
    ],
    "answer": "Realizar punción aspiración con aguja fina",
    "feedback": ""
},
{
    "question": "Una paciente de 34 años, tiene un embarazo de 35 semanas, con feto creciendo en el percentil 2, desde la semana 33, con Doppler fetal normal, en ese entonces. Se solicita un nuevo Doppler fetal de control, que no muestra alteraciones. La conducta más adecuada es:",
    "options": [
        "Inducir el parto",
        "Realizar cesárea",
        "Solicitar perfil biofísico",
        "Controlar semanalmente con el Doppler",
        "Interrumpir a las 37 semanas"
    ],
    "answer": "Controlar semanalmente con el Doppler",
    "feedback": ""
},
{
    "question": "Un niño de 5 años presenta un exantema pruriginoso, desde hace 4 días, generalizado y pleomorfo, consistente en máculas, pápulas, vesículas, que inició en el cuero cabelludo y luego se extendió al tronco y las extremidades. ¿Cuál es el tratamiento más adecuado?",
    "options": [
        "Aciclovir",
        "Valaciclovir",
        "Prednisona",
        "Clorfenamina maleato",
        "Talco mentolado"
    ],
    "answer": "Clorfenamina maleato",
    "feedback": ""
},
{
    "question": "Un niño de 3 años presenta lesiones pruriginosas en la nariz y la cara de 3 días de evolución. Al examen físico se aprecia lo siguiente: [img] ¿Cuál es el tratamiento más adecuado?",
    "options": [
        "Curaciones con suero fisiológico",
        "Curaciones con povidona yodada",
        "Aciclovir oral por 5 días",
        "Prednisona oral por 7 días",
        "Flucloxacilina por 7 días"
    ],
    "answer": "Curaciones con suero fisiológico",
    "feedback": "",
    "imgs": "recursos/diciembre 2019/26.png",
},
{
    "question": "Un paciente de 58 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente en relación a la actividad física y cuando presenta infecciones respiratorias. En su examen físico se auscultan escasas sibilancias bilaterales y espiración prolongada.Se solicita una espirometría que muestra:[img] El diagnóstico más probable es:",
    "options": [
        "Asma bronquial",
        "Enfermedad pulmonar obstructiva crónica",
        "Bronquiectasias",
        "Bronquitis crónica",
        "Enfermedad pulmonar intersticial difusa"
    ],
    "answer": "Asma bronquial",
    "feedback": "Tiene un cuadro clínico y espirometría (patrón obstructivo que mejora con broncodilatadores) compatibles con asma.",
    "imgs":"recursos/diciembre 2019/27.1.png", 
},
{
    "question": "Adolescente de 13 años quien consulta por dolor inguinal y testicular izquierdo intenso, de 45 minutos de evolución, irradiado a hipogastrio y acompañado de náuseas y vómitos. Al examen físico está afebril, con escroto enrojecido, testículo retraído y doloroso a la palpación. ¿Cuál es la conducta a seguir?",
    "options": [
        "Administrar AINES", 
        "Administrar antibióticos", 
        "Cirugía", 
        "Realizar suspensión testicular", 
        "Solicitar ecografía testicular"
    ],
    "answer": "Cirugía",
    "feedback": "Es una torsión testicular o al menos es un testículo agudo, que se maneja con exploración quirúrgica."
},
{
    "question": "Hombre de 75 años que hace 4 años tuvo un infarto y actualmente presenta palpitaciones intensas y compromiso de conciencia que se recupera despuésde reanimación cardiopulmonar. ¿Qué arritmia debe descartarse en primer lugar?",
    "options": [
        "Fibrilación Auricular", "Taquicardia Ventricular", "Taquicardia paroxística supraventricular", "Bloqueo A-V de segundo grado mobitz 1", "Flutter auricular"
    ],
    "answer": "Taquicardia Ventricular",
    "feedback": "También podría haber sido una fibrilación ventricular, pero suelen estar precedidas por taquicardias ventriculares. Los infartos son la primera causa, porque se produce un fenómeno de reentrada alrededor de la zona ventricular infartada y por eso es frecuente la muerte súbita, al tener antecedente de un infarto."
},
{
    "question": "Una paciente de 70 años de edad, con antecedente de cirrosis hepática, sin hábito alcohólico actual, VHBs Ag (-) y Anticuerpos antiVHC (-), Child Pugh clase A, MELDS: 8puntos, se realiza una ecografía abdominal, que muestra una lesión sólida, en el lóbulo hepático derecho, de 3,5 cm y aspecto hipoecogénico. En su laboratorio destaca alfafetoproteína de 5,3 ng/ml (VN: 0-7 ng/ml).El diagnóstico más probable es:",
    "options": [
        " Metástasis hepática", "Adenoma hepático", "Carcinoma hepatocelular", "Quiste hepático", "Hemangioma hepático"
    ],
    "answer": "Adenoma hepático",
    "feedback": "Es un adenoma hepático, por el aspecto, el tamaño (sólido, hipoecogénico, aspecto homogéneo) y por la alfafetoproteína no elevada. La cirrosis aumenta el riesgo de adenomas y hepatocarcinomas. Metástasis: se ven hipoecogénicas, sólidas y múltiples. Hepatocarcinoma: se ve heterogéneo y más grande, sólido y además eleva la AFP. Quiste: se ve anecogénico, con refuerzo posterior. Hemangioma: se ve hiperecogénico, homogéneo."
},
{
    "question": "Paciente mujer de 74 años, hipertensa controlada.Presenta dolor de tipo ¡eléctrico! lancinante en la mejilla y ala nasal izquierda, que compromete la arcada dentaria superior y la encía, así como la zona maxilar superior del lado izquierdo. Además, presenta dolor retro ocular izquierdo. El dolor es de escasos segundos, pero intenso EVA 10/10, que se al tacto y al realizar actividades, como cepillarse los dientes e incluso una suave brisa puede desencadenarlo. ¿Cuál es el tratamiento de primera línea para este cuadro?",
    "options": [
        "Pregabalina", "Tramadol", "Prednisona", "Carbamazepina", "Paracetamol y AINEs"
    ],
    "answer": "Carbamazepina",
    "feedback": "Es una neuralgia del trigémino y de primera línea se dan carbamazepina u otros anticonvulsivantes, aunque también sirven los antidepresivos tricíclicos. De segunda línea, se puede agregar la pregabalina (lo habitual es CBZ y luego pregabalina)."
},
{
    "question": "Una niña de 5 años, ingiere accidentalmente soda cáustica, hace 45 minutos. Evoluciona con sialorrea y dolor abdominal y torácico. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Administrar carbón activado", "Solicitar endoscopía digestiva alta", "Administrar agente alcalinizante", "Instalar una sonda nasogástrica y aspirar el contenido", "Inducir los vómitos"
    ],
    "answer": "Solicitar endoscopía digestiva alta",
    "feedback": "La ingesta de cáusticos se debe estudiar con EDA precoz: si no hay lesiones, se observa; si hay lesiones leves, se deja en régimen cero y se reinicia la alimentación de a poco, en 2 días. Si hay lesiones más severas, se alimenta por SNG y si hay perforación (se puede ver en la RxTx como neumomediastino), se debe hacer cirugía de inmediato, porque las perforaciones evolucionan a mediastinitis aguda, que son cuadros muy graves. Las demás medidas o no tienen utilidad o están contraindicadas en la ingesta de álcalis."
},
{
    "question": "Un hombre de 32 años presenta dolor muscular y oliguria, 24 horas después de realizar ejercicio intenso, a lo que se agrega malestar general. En sus exámenes destaca creatininemia de 5 mg/dl, uremia de 9 mg/dl y potasemia de 5,4 mEq/L, con natremia: 140 UI/L. ¿Qué examen debe pedirse a continuación?",
    "options": [
        "Proteinuria de 24 horas", "Hemograma", "Clearence de creatinina", "Sedimento de orina", "Creatininkinasa"
    ],
    "answer": "Creatininkinasa",
    "feedback": "Es una rabdomiolisis y se estudia con una Creatininkinasa (CK)"
},
{
    "question": "Mujer 54 años obesa, diabética e hipertensa, presenta hace 3 meses genitorragia intermitente, con antecedentes de menopausia a los 50 años, sin terapia hormonal de reemplazo y PAP normal de este año. El examen físico y ginecológico es normal. Se realiza una Ecografía tranvaginal, que muestra: útero en anteversoflexión, con tamaño normal, endometrio homogéneo de 3 mm de grosor, con anexos normales, sin liquido libre. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Hiperplasia endometrial.", "Cáncer endometrial", "Pólipo endometrial", "Atrofia endometrial.", "Sarcoma uterino"
    ],
    "answer": "Atrofia endometrial",
    "feedback": "Si bien, tiene los antecedentes que orientan a hiperplasia endometrial o cáncer (HONDA: hipertensión arterial, obesidad, nuliparidad, diabetes y anovulación), el grosor del endometrio es un muy fuerte indicador de atrofia endometrial (menor a 5 mm se observa), que es la causa más frecuente de metrorragia postmenopáusica."
},
{
    "question": "Mujer de 56 años cardiópata y con fibrilación auricular crónica, en tratamiento con espironolactona, isosorbide, hidralazina, amiodarona y anticoagulante oral. Inicia hace 6 meses un cuadro de disnea y tos seca. A la exploración pulmonar tiene crépitos bibasales. Se solicita una radiografía de tórax, que se muestra a continuación:[img] ¿Cuál es la conducta inicial más adecuada?",
    "options": [
        "Suspender amiodarona", "Solicitar TAC de tórax", "Aumentar diurético", "Solicitar ecocardiograma", "Solicitar fibrobroncoscopia"
    ],
    "answer": "Suspender amiodarona",
    "imgs": "recursos/diciembre 2019/98.jpg",
    "feedback": "Si bien es imposible ver bien la radiografía, la historia sugería mucho una fibrosis pulmonar por amiodarona, por lo que se debe suspender."
},
{
    "question": "Un paciente de 64 años, con antecedente de cirrosis por NASH, con Child Pugh C, en tratamiento con carvedilol. Hace 1 semana presenta ascitis a tensión, por lo que se indica furosemida y espironolactona. Desde entonces, ha subido 4 kg de peso y al examen físico presenta FC: 90 por minuto, PAM: 72 mmHg, ascitis grado III. En sus exámenes destaca bilirrubina 2,5 mg/dl, INR 1,34, cretininemia: 3,1 mg/dl, Na: 122 mEq/L, K 5.5: mEq/L, Cl: 100 mEq/L y polimorfonucleares: 230 por mm3 en el líquido ascítico. ¿Cuál es la conducta más adeudada?",
    "options": [
        "Administrar ceftriaxona i.v.", "Administrar solución fisiológica i.v.", "Aumentar la dosis de diuréticos", "Realizar paracentesis evacuadora y administrar albúmina i.v.", "Suspender el carvedilol"
    ],
    "answer": "Realizar paracentesis evacuadora y administrar albúmina i.v.",
    "feedback": "Es una ascitis a tensión, en la que se descartó PBE (menos de 250 PMN), por lo que está indicado la paracentesis evacuadora, con albúmina en dosis de 8 g i.v. por litro de líquido sacado."
},
{
    "question": "Una paciente primigesta, cursando un embarazo de 38 semanas, presenta presiones arteriales cercanas a 150/90 mmHg. Está en buenas condiciones generales, sin exaltación neurológica, ni otros síntomas. Se solicita proteinuria de 24 horas, que resulta 400 mg. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Solicitar ecodoppler de arterias umbilicales", "Realizar operación cesárea", "Solicitar monitoreo fetal no estresante", "Inducir el parto", "Repetir la proteinuria en 2 semanas"
    ],
    "answer": "Inducir el parto",
    "feedback": "Tiene una preclamsia, que pareciera ser moderada, aunque falta información para estar seguro. De todos modos, por haber llegado al término, se debe interrumpir el embarazo. No hay indicación de cesárea con la información que se entrega. Sin embargo, es una pregunta que induce a error, porque no está de más, evaluar el bienestar fetal antes, ya que en toda paciente con preclamsia debería hacerse un Doppler fetal. Sin embargo, a mi parecer lo correcto es la interrupción, ya que ese es el tratamiento de la preclamsia a las 38 semanas y aunque el Doppler salga normal, igualmente se debe interrumpir."
},
{
    "question": "Un paciente de 18 años, consulta porque desde hace un año presenta aumento de volumen progresivo en la cara anterior del muslo derecho, que recientemente se ha vuelto dolorosa. Al examen físico se palpa una masa de 10 cm de diámetro, de consistencia dura, no pétrea, sin afectación de la piel. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Realizar resección y biopsia", "Observar evolución", "Solicitar ecografía de partes blandas", "Solicitar radiografía de fémur", "Realizar punción y drenaje"
    ],
    "answer": " Solicitar ecografía de partes blandas",
    "feedback": "Es un probable sarcoma de partes blandas. Debe estudiarse con resonancia magnética nuclear, como examen de elección, para determinar el grado de invasión, antes de definir qué tipo de cirugía se le hará. Como no aparecía en las opciones, lo más razonable es hacer la ecografía, porque al menos es suficiente para distinguir entre un tumor benigno y uno maligno. Luego sí se hará la resección y biopsia."
},
{
    "question": "Una paciente de 61 años consulta por dolor articular de ambas manos. Al examen se aprecia aumento de volumen de las articulaciones interfalángicas proximales y distales. Se solicita radiografía de manos, que muestra disminución simétrica del espacio interarticular de las articulaciones interfalángicas, con compromiso de la primera articulación carpometacarpiana bilateral, con presencia de quistes subcondrales. Los ANA y FR resultan positivos. El diagnóstico más probable es:",
    "options": [
        "Artriris reumatoide", "Artritis reactiva", "Condrocalcinosis", "Artrosis", "Artritris psoriática"
    ],
    "answer": "Artritris psoriática",
    "feedback": "Tanto la clínica (compromiso de IFD, IFP y primera CMC), como la radiografía son clásicas de artrosis. No importa la positividad de marcadores, ya que están positivos en un 5% de las personas sanas y solo tienen importancia cuando la clínica es de Lupus o Artritis reumatoide, que no es el caso."
},
{
    "question": "Una paciente de 61 años, hipertensa y diabética, en tratamiento regular con hipoglicemiantes orales y antihipertensivos, desde hace 3 días presenta dolor y aumento de volumen en hombro derecho. Al examen físico presenta temperatura 38,2 ºC, eritema, rubor y aumento de volumen del hombro derecho y limitación funcional, que impide el movimiento. El diagnóstico más probable es:",
    "options": [
        "Artritis reactiva", "Artritis séptica", "Gota", "Condrocalcinosis", "Artritis reumatoidea"
    ],
    "answer": "Artritis séptica",
    "imgs": "recursos/diciembre 2019/.png",
    "feedback": "Tenia signos de Celcius ademas de imposiblilidad funcional y fiebre"
},
{ //julio2021
    "question": "Un paciente de 20 años presenta episodios de descontrol y agresividad, en los que rompe objetos, grita, amenaza con agredir y con autoagredirse. Se molesta mucho cuando le cambian sus cosas de lugar y tiene rutinas muy marcadas, las que le cuesta mucho modificar. Abandonó la secundaria, ya que reprobó dos veces primero medio. Además, tiene muy buena memoria, al punto que puede memorizar los códigos de barras de distintos productos. Desde niño que fue considerado como raro, no entablaba amistades y jugaba solo siempre con el mismo juguete, además de ver repetidamente sus dos películas favoritas. Saluda a las personas de una manera extraña, con aleteo de sus extremidades superiores. ¿Cuál es el diagnóstico más probable?",
    "options": [
        " Esquizofrenia", "Trastorno bipolar", "Trastorno de personalidad limítrofe", "Trastorno del espectro autista", "Trastorno estereotipado del movimiento"
    ],
    "answer": "Trastorno del espectro autista",
    "feedback": "Es un TEA clásico del adulto, con rigidez cognitiva, intereses restringidos, alteraciones sociales, estereotipias más escasa autorregulación, seguramente por estar mal manejado."
},
{
    "question": "¿Cuál es el mejor indicador para medir la efectividad de la campaña de vacunación contra la influenza?",
    "options": [
        "La tasa de mortalidad por influenza", "La tasa de letalidad de la influenza", "La tasa de incidencia de influenza", "La tasa de prevalencia de influenza", "La tasa de cobertura de vacunación contra la influenza"
    ],
    "answer": "La tasa de incidencia de influenza",
    "feedback": "Las vacunas intentan disminuir la incidencia de las patologías infecciosas y esa es la forma en que se mide su efectividad."
},
{
    "question": "El indicador de letalidad de la influenza corresponde a lo siguiente:",
    "options": [
        "Casos de influenza / población general", "Casos de influenza / muertes influenza", "Casos de influenza / población expuesta", "Muertes por influenza / Casos de influenza", "Muertes por influenza / población general"
    ],
    "answer": "Muertes por influenza / Casos de influenza",
    "feedback": "La letalidad son las muertes/casos, es decir, la probabilidad de morirse si es que se enferma"
},
{
    "question": "Un paciente de 65 años presenta un cuadro de 7 días de dificultades para mover pierna derecha. En su examen físico se aprecia que al caminar arrastra ostentosamente la pierna derecha y se constata tono muscular y reflejos normales, por lo que se descarta patología orgánica. Refiere que los síntomas comenzaron luego de presenciar un accidente de tránsito, en el que hubo múltiples heridos de gravedad. El diagnóstico más probable es:",
    "options": [
        "Trastorno conversivo", "Trastorno disociativo", "Trastorno de somatización", "Trastorno facticio", "Episodio psicótico"
    ],
    "answer": "Trastorno conversivo",
    "feedback": "Es una afección mental en la cual una persona presenta ceguera, parálisis u otros síntomas del sistema nervioso, los síntomas generalmente comienzan de manera repentina después de una experiencia estresante"
},
{
    "question": "Una paciente de 52 años, con antecedente de abuso sexual reiterado por un familiar, entre los 12 y los 15 años, del que aún mantiene recuerdos y pesadillas, refiere episodios de algunos días de duración ánimo irritable y lábil, asociada a ira y peleas con sus familiares, con llanto y agresividad. En ocasiones, presenta episodios de hasta dos días de duración de descontrol y rabia, en los que rompe ropa y electrodomésticos de su marido. Estos episodios le traen problemas con sus cercanos y, en algunas ocasiones, son muy intensos, en especial cuando se expone a conversaciones relacionadas con el tema, en los que llora, siente intensa angustia,grita e incluso ha presentado momentos en que actúa como una niña, con lenguaje y entonación de una menor de edad. Estos episodios cursan con amnesia de lo sucedido. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Trastorno bipolar", "Trastorno delirante", "Trastorno esquizoafectivo", "Trastorno conversivo", "Trastorno de estrés postraumático"
    ],
    "answer": "Trastorno de estrés postraumático",
    "feedback": "Es un TEPT con síntomas disociativos. Además, pareciera tener un trastorno de personalidad límite."
},
{
    "question": " Una paciente de 32 años presenta imágenes recurrentes, en que se ve a sí misma cortando a su hijo de 12 meses, con un cuchillo. Aquello le genera mucha angustia y miedo de dañar a su hijo. Por ello, nunca se queda a solas con el niño y sacó todos los cuchillos de los cajones de la casa. Está muy angustiada y triste, porque no quiere que le pase nada malo a su hijo y teme tener problemas con sus familiares o perder la tuición del niño, por lo que no le ha contado su problema a nadie. Ha pensado incluso en morir, con tal de proteger a su familia. El diagnóstico más probable es:",
    "options": [
        "Trastorno bipolar", "Episodio psicótico", "Trastorno obsesivo compulsivo", "Trastorno depresivo mayor", "Trastorno de adaptación"
    ],
    "answer": "Trastorno obsesivo compulsivo",
    "feedback": "Es un TOC clásico, con obsesión de causar daño y compulsión evitativa."
},
{
    "question": "Una paciente de 28 años presenta un episodio de rápida instalación de marcada angustia y variados síntomas como disnea con “imposibilidad de sacar el aire”, vértigo, parestesias en las extremidades, imposibilidad de tragar, opresión en el pecho, náuseas, visión borrosa y miedo a morir. En las últimas 4 semanas ha presentado varios episodios similares, por lo que teme salir de su casa. Su examen físico es normal y los exámenes generales descartan patología orgánica. ¿Cuál es el tratamiento más adecuado para esta paciente?",
    "options": [
        "Amitriptilina 25 mg/día", "Sertralina 50 mg/día", "Risperidona 3 mg/día", "Clonazepam 2 mg/día", "Clorpromazina 300 mg/día"
    ],
    "answer": "Sertralina 50 mg/día",
    "feedback": "Tiene crisis de pánico recurrentes, por lo que es un trastorno de angustia o trastorno de pánico. El miedo a salir de su casa probablemente sea porque es con agorafobia. El tratamiento de los trastornos ansiosos suele ser con antidepresivos IRS"
},
{
    "question": "Un paciente esquizofrénico, recién diagnosticado, inicia tratamiento con risperidona 2 mg/día hace 5 días. Al tercer día, inicia un cuadro de disestesias en las extremidades inferiores, asociadas a angustia, inquietud y cambio continuo de posición. Se muestra muy incómodo y angustiado. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Trastorno de adaptación", "Distonía aguda", "Disquinesia aguda", "Acatisia", "Hipomanía"
    ],
    "answer": "Acatisia",
    "feedback": ""
},
{
    "question": "Un paciente de 18 años, adicto a la pasta base, presenta un episodio psicótico, en relación al consumo, el que es manejado con haloperidol 5 mg por vía intramuscular. Al día siguiente presenta contracción tónica del cuello, que desvía la cabeza hacia la izquierda, con intenso dolor. El diagnóstico más probable es:",
    "options": [
        "Distonía aguda", "Acatisia", "Síndrome neuroléptico maligno", "Disquinesia tardía", "Parkinsonismo farmacológico"
    ],
    "answer": "Distonía aguda",
    "feedback": "Es una distonía aguda , de tipo tortícolis espasmódica. "
},
{
    "question": "Una paciente de 27 años, en amenorrea por lactancia, presenta un cuadro de astenia y malestar general, constipación y dificultades para concentrarse, asociado a intolerancia al frío. Además, refiere que no ha podido bajar de peso. Al examen físico tiene FC: 67x’, PA: 120/80 mmHg, se aprecia piel seca y cabello ralo, sin otras alteraciones en el examen físico segmentario. Se solicitan exámenes de laboratorio que muestran TSH: 14,7 UI/L, T4 libre: 0,6 ng/dl, T3: 46 ng/dl. ¿Cuál es la conducta más adecuada en este momento? ",
    "options": [
        "Iniciar tratamiento con levotiroxina oral", "Solicitar ecografía tiroidea", "Solicitar cintigrafía tiroidea", "Solicitar prueba de captación de yodo radiactivo", "Repetir los exámenes en 6 semanas"
    ],
    "answer": "Iniciar tratamiento con levotiroxina oral",
    "feedback": "Tiene un hipotiroidismo clínico tanto por los síntomas como por la T4 libre baja (normal: 0,7 a 1,9), por lo que debe iniciar levotiroxina.  "
},
{ 
    "question": "Un paciente de 32 años, con antecedente de familiar con cáncer de tiroides, acude a la consulta. Trae una ecografía cervical, que muestra un nódulo tiroideo de 7 mm de diámetro de aspecto quístico, sin calcificaciones, con presencia de adenopatías inespecíficas pequeñas. Su TSH y T4 libre son normales. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Realizar punción aspiración con aguja fina", "Solicitar cintigrafía tiroidea", "Solicitar captación de yodo radiactivo", "Solicitar nueva ecografía en 6 meses", "Realizar tiroidectomía"
    ],
    "answer": " Solicitar nueva ecografía en 6 meses",
    "feedback": "Los nódulos menores a 10 mm, en especial si son quísticos, se observan, debido a que con altísima probabilidad son un quiste coloideo. Se controla ecográficamente en 6 meses."
},
{
    "question": "Un paciente de 30 años presenta un cuadro de astenia y piel seca. Al examen se detecta un nódulo tiroideo, que se palpa de 15 mm de diámetro, en relación al lóbulo derecho. Se solicita TSH, que resulta: 3,5 UI/L y T4 libre de 1,2 ng/dl. ¿Cuál es el examen de elección para continuar el estudio de esta paciente?",
    "options": [
        "Ecografía cervical", "Biopsia citológica por punción con aguja fina", "Resonancia magnética nuclear de cuello", "Cintigrafía tiroidea", "TAC de cuello"
    ],
    "answer": "Ecografía cervical",
    "feedback": "Tiene un nódulo tiroideo eutiroideo (TSH normal: 0,4 a 4,0; T4 libre normal:0,7 a 1,9). Por tanto, se debe seguir su estudio con ecografía y luego la PAAF. Si hubiese estado hipertiroideo, se debería realizar la cintigrafía. "
},
{
    "question": "Una paciente de 17 años consulta por amenorrea de 4 meses de evolución. Su examen físico no muestra alteraciones. Se realiza exámenes, que muestran test de embarazo negativo, TSH y prolactina dentro de rangos normales. Se solicita prueba de progesterona, que resulta negativa y prueba de estrógeno y progesterona, que resulta positiva. Además, se solicita LH y FSH, que están normales, dentro del límite bajo. El diagnóstico más probable es:",
    "options": [
        "Macroadenoma hipofisiario", "Falla ovárica primaria", "Embarazo ectópico", "Amenorrea hipotalámica", "Síndrome de ovario poliquístico"
    ],
    "answer": "Amenorrea hipotalámica",
    "feedback": "La prueba de progesterona (-) descarta anovulación. La prueba de estrógeno más progesterona (+) confirma un hipogonadismo. La LH y FSH en el límite bajo, muestra que es un hipogonadismo hipogonadotrópico, que son por causas hipofisiarias o hipotalámicas: el hipo hipo es hipo hipo."
},
{
    "question": "Un paciente de 68 años, con antecedente de diabetes e hipertensión, en tratamiento con metformina, glibenclamida y enalapril, consulta por dolor abdominal, de 24 horas de evolución, localizado en el hipogastrio y la fosa iliaca izquierda, asociado a sensación malestar general. Al examen físico presenta T°: 37,8°C, PA: 100/60 mmHg, FC: 88x’, abdomen doloroso a la palpación superficial y profunda, mayor en la zona descrita, con signos peritoneales localizados en dicha área y disminución de los ruidos hidroaéreos. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Infarto epiploico apendicular", "Embolia mesentérica", "Vólvulo de sigmoides", "Obstrucción intestinal", "Diverticulitis aguda"
    ],
    "answer": "Diverticulitis aguda",
    "feedback": ""
},
{
    "question": "Un paciente de 38 años, con antecedente de colitis ulcerosa, desde hace 5 años con buen control, consulta por astenia y prurito de 2 meses de evolución, que han ido en aumento y que se ha asociado a ictericia de piel y mucosas. Se solicitan pruebas hepáticas, que muestran Bilirrubina: 3,3 mg/dl, bilirrubina directa: 2,4 mg/dl, FA: 512 UI/L, gama glutamil-peptidasa: 617 UI/L, GOT: 180 UI/L, GPT: 110 UI/L. El diagnóstico más probable es:",
    "options": [
        "Colangitis esclerosante primaria", "Colangiocarcinoma", "Hepatitis autoinmune", "Coledocolitiasis", "Colangitis biliar primaria"
    ],
    "answer": "Colangitis esclerosante primaria",
    "feedback": "Es una CEP clásica, que se asocia a colitis ulcerosa (ambas marcador ANCA) y cursa con una colestasia. Se diagnostica con colangioRMN, aunque es correcto iniciar el estudio con una ecografía."
},
{
    "question": "Un paciente de 45 años, con antecedente de colitis ulcerosa, diagnosticada a los 20 años, inactiva hace 10 años, desde hace una semana ha presentado episodios de deposiciones blandas, con presencia de sangre en escasa cantidad. Su examen físico no aporta mayor información. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Solicitar rectosigmoidoscopía", "Solicitar TAC de abdomen y pelvis", "Solicitar parasitológico de deposiciones", "Solicitar colonoscopía", "Iniciar corticoides orales"
    ],
    "answer": "Solicitar colonoscopía",
    "feedback": "La colitis ulcerosa aumenta el riesgo de cáncer de colon en más de 2 veces, en especial de recto. Además, cualquier persona con esos síntomas se debe estudiar con colonoscopía, aunque no tenga colitis ulcerosa."
},
{
    "question": "Una paciente de 17 años, que desde los cinco años presenta epistaxis con frecuencia y equimosis ante pequeños traumatismos, desde los 14 años tiene su menarquia con sangrado menstrual abundantes. Se solicita hemograma que muestra hematocrito 45%, VCM: 90fl, leucocitos 6.000/mm3, plaquetas 250.000/mm3, TTPA normal, protrombinemia 85% y tiempo de sangría mayor a 8 minutos. ¿Cuál es el examen de elección para proseguir con el estudio en este caso?",
    "options": [
        "Mielograma", "Citometría de flujo para receptor de la glicoproteína IIb IIIa", "Estudio de enfermedad de Von Willebrand", "Niveles plasmáticos de factor VIII y factor IX de la coagulación", "Electroforesis de proteínas en sangre"
    ],
    "answer": "Estudio de enfermedad de Von Willebrand",
    "feedback": "Tiene una alteración de la hemostasia primaria (sangramientos mucosos, alargamiento del tiempo de sangría), es decir, de las plaquetas.Por estar normal el número de plaquetas, es una disfunción plaquetaria. El curso crónico muestra una patología genética, de las que la más frecuente es la EvW"
},
{
    "question": "Una paciente de 64 años, con antecedente de by-pass gástrico, por obesidad mórbida, presenta un cuadro de dificultad a la marcha, asociado a astenia y malestar general. En sus exámenes destaca anemia macrocítica, plaquetas: 100.000 por mm3, blancos: 6.000 por mm3, ferritina 56 ug/dl y saturación de transferrina de 18%. ¿El déficit de qué nutriente explica mejor este caso?",
    "options": [
        "Fierro", "Ácido fólico", "Cianocobalamina", "Zinc", "Tiamina"
    ],
    "answer": "Cianocobalamina",
    "feedback": "Tiene un déficit de B12, tanto por el antecedente de by-pass como por la macrocitosis VCM < 100 (VN: 80-100) y plaquetopenia. La ferritina está normal (VN: 15 a 300)."
},
{
    "question": "Un niño de 8 años presenta dolores óseos, asociados a malestar general y fiebre de 3 semanas de evolución. Al examen físico se palpa el bazo aumentado de tamaño, por 3 cm bajo el reborde costal de consistencia indurada, se constatan poliadenopatías indoloras y se observan petequias y equimosis generalizadas, mayores en las extremidades inferiores ¿Cuál es el examen de elección para confirmar el diagnóstico?",
    "options": [
        "Cintigrafía ósea", "Hemograma", "Biopsia esplénica", "Electroforesis de proteínas en sangre", "Mielograma"
    ],
    "answer": "Mielograma",
    "feedback": "Es una leucemia aguda clásica. Probablemente LLA, por se niño. Si bien se inicia el estudio con un hemograma, la pregunta es el examen confirmatorio, es decir, el mielograma (frotis de la médula ósea) o la biopsia de médula ósea (se ve la arquitectura también)"
},
{
    "question": "Un paciente de 34 años, consulta por cuadro de 5 semanas de tos irritativa con expectoración escasa, que ha ido empeorando, agregándose disnea de medianos esfuerzos en los últimos días. Al examen físico, se aprecia enflaquecido, con frecuencia respiratoria de 27 por minuto, frecuencia cardiaca de 90 por minuto, presión arterial de 100/70 mmHg y saturación de 92% con FiO2 ambiental. Examen pulmonar muestra crepitaciones bilaterales difusas, con estertores y algunas sibilancias en ambos campos pulmonares. Se solicita radiografía de tórax que se muestra a continuación[img]El diagnóstico más probable es:",
    "options": [
        "Fibrosis pulmonar", "Asma bronquial", "Neumonitis viral", "Neumonía por Mycoplasma pneumoniae", "Neumonía por Pneumocystis jiroveci"
    ],
    "answer": "Neumonía por Pneumocystis jiroveci",
    "imgs": "recursos/julio 2021/25.png",
    "feedback": "Al parecer es una neumonía por Pneumocystis, en contexto de un paciente joven con VIH, que está debutando (orienta la baja de peso y la radiografía con infiltrado difuso). El mycoplasma es una opción aceptable, pero suele durar 2 a 4 semanas."
},
{
    "question": "Un paciente de 39 años, VIH positivo, que abandonó el tratamiento antiviral hace varios meses, consulta por un cuadro de tos de 2 meses de evolución, asociado a expectoración mucopurulenta, que en ocasiones es hemoptoica, más sensación febril y baja de peso de 3 kilogramos. Al examen físico, se aprecia enflaquecido, con FC: 100x’, PA: 110/60 mmHg, FR: 22x’, saturación de oxígeno: 93%, Tº: 37,5ºC y, en el examen pulmonar, se auscultan crepitaciones y estertores bilaterales. Se solicita radiografía de tórax que se muestra zonas de relleno bilaterales y se solicitan baciloscopías de expectoración que resultan negativas, con muestra hemorrágica. ¿Cuál es la conducta más adecuada?",
    "options": [
        "Solicitar TAC de tórax", "Realizar lavado bronquioalveolear", "Realizar broncoscopía", "Solicitar reacción en cadena de polimerasa para tuberculosis en expectoración", "Iniciar tratamiento con ceftriaxona endovenosa"
    ],
    "answer": "Solicitar reacción en cadena de polimerasa para tuberculosis en expectoración",
    "feedback": "Tiene clínica de tuberculosis. Si bien las baciloscopías siguen siendo un excelente examen, su sensibilidad con 3 muestras ronda el 80%, siendo menor aún en muestras hemoptoicas, por lo que se prefiere realizar pruebas más sensibles, como la PCR para TBC, que incluso actualmente se recomienda como examen inicial."
},
{
    "question": "Una mujer embarazada de 8 semanas se toma un VDRL, que resulta positivo en dilución 1/64. Tiene antecedente de alergia a la amoxicilina. El tratamiento de elección es:",
    "options": [
        "Clindamicina", "Ceftriaxona", "Penicilina", "Eritromicina", "Doxiciclina"
    ],
    "answer": "Eritromicina",
    "feedback": "Todo VDRL o RPR positivo en el embarazo se debe tratar. Por ser alérgica a la amoxicilina, no se usa la penicilina benzatina, sino la eritromicina."
},
{
    "question": " Un paciente de 20 años presenta episodios de descontrol y agresividad, en los que rompe objetos, grita, amenaza con agredir y con autoagredirse. Se molesta mucho cuando le cambian sus cosas de lugar y tiene rutinas muy marcadas, las que le cuesta mucho modificar. Abandonó la secundaria, ya que reprobó dos veces primero medio. Además, tiene muy buena memoria, al punto que puede memorizar los códigos de barras de distintos productos. Desde niño que fue considerado como raro, no entablaba amistades y jugaba solo siempre con el mismo juguete, además de ver repetidamente sus dos películas favoritas. Saluda a las personas de una manera extraña, con aleteo de sus extremidades superiores. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Esquizofrenia", "Trastorno bipolar", "Trastorno de personalidad limítrofe", "Trastorno del espectro autista", "Trastorno estereotipado del movimiento"
    ],
    "answer": "Trastorno estereotipado del movimiento",
    "feedback": "Es un TEA clásico del adulto, con rigidez cognitiva, intereses restringidos, alteraciones sociales, estereotipias más escasa autorregulación, seguramente por estar mal manejado. "
},
{
    "question": "¿Cuál es el mejor indicador para medir la efectividad de la campaña de vacunación contra la influenza?",
    "options": [
        "La tasa de mortalidad por influenza", "La tasa de letalidad de la influenza", "La tasa de incidencia de influenza", "La tasa de prevalencia de influenza", "La tasa de cobertura de vacunación contra la influenza"
    ],
    "answer": "La tasa de incidencia de influenza",
    "feedback": "Las vacunas intentan disminuir la incidencia de las patologías infecciosas y esa es la forma en que se mide su efectividad. Sin embargo, hay algunas vacunas que solo logran disminuir los casos graves (ej. rotavirus y recientemente Covid-19 en contra de las variantes del virus)."
},
{
    "question": " El indicador de letalidad de la influenza corresponde a lo siguiente:",
    "options": [
        "Casos de influenza / población general", "Casos de influenza / muertes influenza", "Casos de influenza / población expuesta", "Muertes por influenza / Casos de influenza", "Muertes por influenza / población general"
    ],
    "answer": "Muertes por influenza / Casos de influenza",
    "feedback": "La letalidad son las muertes/casos, es decir, la probabilidad de morirse si es que se enferma. La incidencia son casos/población. La mortalidad es muertes/población. El ataque es la incidencia durante un brote, tomando en cuenta solo la población expuesta al riesgo: muestra muy claramente la trasmisibilidad."
},
{
    "question": "La notificación obligatoria de algunas enfermedades transmisibles tiene como objetivo:",
    "options": [
        "Evaluar la efectividad de las vacunas administradas a la población", "Identificar las principales enfermedades transmisibles en la población", "Determinar la propagación de las enfermedades infecciosas más importantes", "Ayudar a identificar y controlar situaciones epidémicas", "Reunir información estadística completa y confiable, para determinar las políticas de salud"
    ],
    "answer": "Ayudar a identificar y controlar situaciones epidémicas",
    "feedback": "La notificación obligatoria es una medida de vigilancia activa, que busca conocer rápidamente sobre la presencia de casos de una enfermedad infecciosa, de modo de identificar y manejar a los contactos, tanto en brotes como en epidemias (y pandemias)."
},
{
    "question": "¿Cuál es el mejor indicador para determinar si un programa de tamizaje del cáncer de mama es efectivo?",
    "options": [
        "Tasa de incidencia de cáncer de mama", "Tasa de prevalencia de cáncer de mama", "Tasa de letalidad de cáncer de mama", "Tasa de mortalidad de cáncer de mama", "Tasa de positividad de las pruebas de tamizaje del cáncer de mama"
    ],
    "answer": "Tasa de mortalidad de cáncer de mama",
    "feedback": "Las medidas de tamizaje de los distintos cánceres buscan reducir la mortalidad."
},
{
    "question": " Un paciente de 65 años presenta un cuadro de 7 días de dificultades para mover pierna derecha. En su examen físico se aprecia que al caminar arrastra ostentosamente la pierna derecha y se constata tono muscular y reflejos normales, por lo que se descarta patología orgánica. Refiere que los síntomas comenzaron luego de presenciar un accidente de tránsito, en el que hubo múltiples heridos de gravedad. El diagnóstico más probable es:",
    "options": [
        "Trastorno conversivo", "Trastorno disociativo", "Trastorno de somatización", "Trastorno facticio", "Episodio psicótico"
    ],
    "answer": "Trastorno conversivo",
    "feedback": "Es afección mental en la cual una persona presenta ceguera, parálisis u otros síntomas del sistema nervioso (neurológicos) que no se pueden explicar por medio de una valoración médica."
},
{
    "question": "Un paciente de 65 años presenta un cuadro de 7 días de dificultades para mover pierna derecha. En su examen físico se aprecia que al caminar arrastra ostentosamente la pierna derecha y se constata tono muscular y reflejos normales, por lo que se descarta patología orgánica. Refiere que los síntomas comenzaron luego de presenciar un accidente de tránsito, en el que hubo múltiples heridos de gravedad. El diagnóstico más probable es:",
    "options": [
        "Trastorno conversivo", "Trastorno disociativo", "Trastorno de somatización", "Trastorno facticio", "Episodio psicótico"
    ],
    "answer": "Trastorno conversivo",
    "feedback": "Es un trastorno conversivo"
},
{
    "question": "Una paciente de 52 años, con antecedente de abuso sexual reiterado por un familiar, entre los 12 y los 15 años, del que aún mantiene recuerdos y pesadillas, refiere episodios de algunos días de duración ánimo irritable y lábil, asociada a ira y peleas con sus familiares, con llanto y agresividad. En ocasiones, presenta episodios de hasta dos días de duración de descontrol y rabia, en los que rompe ropa y electrodomésticos de su marido. Estos episodios le traen problemas con sus cercanos y, en algunas ocasiones, son muy intensos, en especial cuando se expone a conversaciones relacionadas con el tema, en los que llora, siente intensa angustia, grita e incluso ha presentado momentos en que actúa como una niña, con lenguaje y entonación de una menor de edad. Estos episodios cursan con amnesia de lo sucedido. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Trastorno bipolar", "Trastorno delirante", "Trastorno esquizoafectivo", "Trastorno conversivo", "Trastorno de estrés postraumático"
    ],
    "answer": "Trastorno de estrés postraumático",
    "feedback": "Es un TEPT con síntomas disociativos. Además, pareciera tener un trastorno de personalidad límite."
},
{
    "question": "Una paciente de 32 años presenta imágenes recurrentes, en que se ve a sí misma cortando a su hijo de 12 meses, con un cuchillo. Aquello le genera mucha angustia y miedo de dañar a su hijo. Por ello, nunca se queda a solas con el niño y sacó todos los cuchillos de los cajones de la casa. Está muy angustiada y triste, porque no quiere que le pase nada malo a su hijo y teme tener problemas con sus familiares o perder la tuición del niño, por lo que no le ha contado su problema a nadie. Ha pensado incluso en morir, con tal de proteger a su familia. El diagnóstico más probable es:",
    "options": [
        "Trastorno bipolar", "Episodio psicótico", "Trastorno obsesivo compulsivo", "Trastorno depresivo mayor", "Trastorno de adaptación"
    ],
    "answer": "Trastorno obsesivo compulsivo",
    "feedback": "Es un TOC clásico, con obsesión de causar daño y compulsión evitativa."
},
{
    "question": "Una paciente de 28 años presenta un episodio de rápida instalación de marcada angustia y variados síntomas como disnea con “imposibilidad de sacar el aire”, vértigo, parestesias en las extremidades, imposibilidad de tragar, opresión en el pecho, náuseas, visión borrosa y miedo a morir. En las últimas 4 semanas ha presentado varios episodios similares, por lo que teme salir de su casa. Su examen físico es normal y los exámenes generales descartan patología orgánica. ¿Cuál es el tratamiento más adecuado para esta paciente?",
    "options": [
        "Amitriptilina 25 mg/día", "Sertralina 50 mg/día", "Risperidona 3 mg/día", "Clonazepam 2 mg/día", "Clorpromazina 300 mg/día"
    ],
    "answer": "Sertralina 50 mg/día",
    "feedback": "Tiene crisis de pánico recurrentes, por lo que es un trastorno de angustia o trastorno de pánico. El miedo a salir de su casa probablemente sea porque es -con agorafobia-. El tratamiento de los trastornos ansiosos suele ser con antidepresivos IRS."
},
{
    "question": "Un paciente esquizofrénico, recién diagnosticado, inicia tratamiento con risperidona 2mg/día hace 5 días. Al tercer día, inicia un cuadro de disestesias en las extremidades inferiores, asociadas a angustia, inquietud y cambio continuo de posición. Se muestra muy incómodo y angustiado. ¿Cuál es el diagnóstico más probable?",
    "options": [
        "Trastorno de adaptación", "Distonía aguda", "Disquinesia aguda", "Acatisia", "Hipomanía"
    ],
    "answer": "Acatisia",
    "feedback": "Es una acatisia clásica."
},
{
    "question": "Un estudio investiga la correlación entre el desarrollo de alteraciones cognitivas en los niños y el uso de drogas durante el embarazo. Para ello, se selecciona a un grupo de niños con discapacidad cognitiva y se compara con otro grupo de niños sanos, realizándole una entrevista a los padres, sobre la exposición a distintos factores de riesgo, durante el embarazo. ¿Qué medida de asociación es la más adecuada para utilizar en este estudio?",
    "options": [
        "Riesgo relativo", "Riesgo atribuible", "Riesgo atribuible poblacional", "Odds ratio", "Incidencia"
    ],
    "answer": "Odds ratio",
    "feedback": "Es un estudio de casos y controles clásico, por lo que el OR se usa para medir la asociación. En cambio, en cohortes y ensayos clínicos se usa el RR."
}
]
