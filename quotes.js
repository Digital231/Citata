const localQuotes = [
  {
    text: 'Genialumas yra vienas procentas įkvėpimo ir devyniasdešimt devyni procentai prakaito.',
    author: 'Thomasas Edisonas',
  },
  {
    text: 'Galite daug stebėti tiesiog stebėdami.',
    author: 'Yogi Berra',
  },
  {
    text: 'Namas, padalytas savimi, negali išlikti.',
    author: 'Abrahamas Linkolnas',
  },
  {
    text: 'Sunkumai didėja artėjant prie tikslo.',
    author: 'Johannas Wolfgangas vonas Goethe',
  },
  {
    text: 'Loterija yra jūsų rankose ir nieko kito.',
    author: 'Byronas Pulsiferis',
  },
  {
    text: 'Būk vadovas, bet niekada ne lordas.',
    author: 'Lao Tzu',
  },
  {
    text: 'Nieko nenutinka, nebent pirma mes svajojame.',
    author: 'Carl Sandburgas',
  },
  {
    text: 'Gerai pradėta yra pusė padaryta.',
    author: 'Aristotelis',
  },
  {
    text: 'Gyvenimas yra mokymosi patirtis, tik jei mokotės.',
    author: 'Yogi Berra',
  },
  {
    text: 'Savitikslumas yra mirtinas progresui.',
    author: 'Margaret Sangster',
  },
  {
    text: 'Ramybė ateina iš vidaus. Jos nesireikia ieškoti išorėje.',
    author: 'Budas',
  },
  {
    text: 'Tai, ką duodate, yra tai, ką gaunate.',
    author: 'Byronas Pulsiferis',
  },
  {
    text: 'Mes galime mokytis mylėti tik mylėdami.',
    author: 'Iris Murdoch',
  },
  {
    text: 'Gyvenimas yra pokytis. Augimas yra pasirinkimas. Išmintingai pasirinkite.',
    author: 'Karen Clark',
  },
  {
    text: 'Tai pamatysite, kai tuo patikėsite.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Šiandien yra rytojus, dėl kurio vakar nerimavome.',
    author: null,
  },
  {
    text: 'Tai lengviau pamatyti klaidas kitų žmonių darbe.',
    author: null,
  },
  {
    text: 'Kiekvienas žmogus miršta. Ne kiekvienas žmogus tikrai gyvena.',
    author: null,
  },
  {
    text: 'Jei norite žmonėms vadovauti, eikite jų pėdomis.',
    author: 'Lao Tzu',
  },
  {
    text: 'Neturint nieko, negalima nieko prarasti.',
    author: 'Williamas Shakespeareas',
  },
  {
    text: 'Sunkumai yra tik galimybė darbui drabužiais.',
    author: 'Henry J. Kaiser',
  },
  {
    text: 'Virdulys ant akmenų neauga samanos.',
    author: 'Publilius Syrus',
  },
  {
    text: 'Idėjos yra visų turtų pradžia.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Viskas gyvenime yra laimė.',
    author: 'Donaldas Trumpas',
  },
  {
    text: 'Nieko nedaryti geriau nei būti užsiėmusiam niekuo.',
    author: 'Lao Tzu',
  },
  {
    text: 'Pasitikėkite savimi. Jūs žinote daugiau, nei manote.',
    author: 'Benjaminas Spockas',
  },
  {
    text: 'Mokykitės iš praeities, jei norite numatyti ateitį.',
    author: 'Konfucijus',
  },
  {
    text: 'Diena jau palaiminta, raskite jame ramybę.',
    author: null,
  },
  {
    text: 'Iš klaidos į klaidą žmogus atranda visą tiesą.',
    author: 'Sigmundas Freudas',
  },
  {
    text: 'Geriau padaryti gerai nei gerai pasakyti.',
    author: 'Benjaminas Franklinas',
  },
  {
    text: 'Įkramtykite daugiau, nei galite nurungti, tada nurunkite.',
    author: 'Ella Williams',
  },
  {
    text: 'Savęs išgelbėjimą reikia įgyvendinti pats, nepriklausykite nuo kitų.',
    author: 'Budas',
  },
  {
    text: 'Vienas šiandien yra vertas dviejų rytojų.',
    author: 'Benjaminas Franklinas',
  },
  {
    text: 'Kartą pasirinkę viltį, viskas įmanoma.',
    author: 'Christopheris Reeveas',
  },
  {
    text: 'Dievas visada pasirenka paprasčiausią kelią.',
    author: 'Albertas Einsteinas',
  },
  {
    text: 'Vienas į priekį eina link sėkmės.',
    author: 'Charlesas Ketteringas',
  },
  {
    text: 'Iš mažų pradžių kyla didelės naujovės.',
    author: null,
  },
  {
    text: 'Mokymas yra turtas, kuris lydys savo savininką visur',
    author: 'Kinų posakis',
  },
  {
    text: 'Būkite toks, koks norite pasirodyti.',
    author: 'Sokratas',
  },
  {
    text: 'Pasaulis visada juda.',
    author: 'V. Naipaul',
  },
  {
    text: 'Niekada neklaidink aktyvumo su pasyvumu.',
    author: 'Johnas Woodenas',
  },
  {
    text: 'Tai, ko bijote, tai, dėl ko reikia veikti, kad nugalėtumėte.',
    author: 'Byronas Pulsiferis',
  },
  {
    text: 'Kai veiksmas viršija ambiciją, tai vadinama sėkme.',
    author: 'Cullenas Hightoweris',
  },
  {
    text: 'Kai veiksmai kalba, žodžiai nieko nereiškia.',
    author: 'Afrikos posakis',
  },
  {
    text: 'Tikra magija santykiuose reiškia nedarant išvadų apie kitus.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Aš niekada nemanau apie ateitį. Ji ateina pakankamai greitai.',
    author: 'Albertas Einsteinas',
  },
  {
    text: 'Galimybę daryti ateina iš darbų.',
    author: 'Ralphas Emersonas',
  },
  {
    text: 'Išmintis yra aukščiausia laimės dalis.',
    author: 'Sofoklis',
  },
  {
    text: 'Aš tikiu, kad kiekvienas žmogus gimsta su talentu.',
    author: 'Maya Angelou',
  },
  {
    text: 'Svarbūs principai gali būti ir turi būti neišvengiami.',
    author: 'Abrahamas Linkolnas',
  },
  {
    text: 'Naujo veiksmo pradėjimas suteikia naujos jėgos.',
    author: 'Richardas Evansas',
  },
  {
    text: 'Metai moko daug daugiau, nei dienos niekada nežino.',
    author: 'Ralphas Emersonas',
  },
  {
    text: 'Mūsų nepasitikėjimas labai brangus.',
    author: 'Ralphas Emersonas',
  },
  {
    text: 'Visi žino kelią; nedaugelis tikrai eina jį.',
    author: 'Bodhidharma',
  },
  {
    text: 'Didelis talentas randasi laimėje.',
    author: 'Johannas Wolfgangas vonas Goethe',
  },
  {
    text: 'Tikėjimas savimi yra geriausias ir saugiausias kelias.',
    author: 'Michelangelas',
  },
  {
    text: 'Drąsa yra perėjimas nuo nesėkmės prie nesėkmės, neprarandant entuziazmo.',
    author: 'Winstonas Churchillas',
  },
  {
    text: 'Du galingiausi kariai yra kantrybė ir laikas.',
    author: 'Leonas Tolstojus',
  },
  {
    text: 'Nukentėjimų patirties lengviau išvengti pasitikėjus savo intuicija.',
    author: 'Anne Wilson Schaef',
  },
  {
    text: 'Tiesa yra galinga ir ji perstovės.',
    author: 'Sojourner Truth',
  },
  {
    text: 'Rytojų apšviečiame šiandien!',
    author: 'Elizabeth Browning',
  },
  {
    text: 'Tylėjimas yra išminties tvora.',
    author: 'Vokiškas posakis',
  },
  {
    text: 'Visuomenė vysto smalsumą, bet tik vienatvė formuoja genialumą.',
    author: 'Madame de Stael',
  },
  {
    text: 'Paprastiausios dalykai dažnai būna tikri.',
    author: 'Richardas Bachas',
  },
  {
    text: 'Visi šypsosi ta pačia kalba.',
    author: null,
  },
  {
    text: 'Vakar drįsau kovoti. Šiandien drįstu laimėti.',
    author: 'Bernadette Devlin',
  },
  {
    text: 'Nė vienas alibi neišgelbės jūsų nuo atsakomybės priėmimo.',
    author: 'Napoleonas Hillas',
  },
  {
    text: 'Jeigu gali sapnuoti tai, gali tai ir įgyvendinti.',
    author: 'Walto Disney',
  },
  {
    text: 'Geriau keliauti gerai nei pasiekti.',
    author: 'Budas',
  },
  {
    text: 'Gyvenimas mažėja arba plečiasi proporcingai jūsų drąsai.',
    author: 'Anais Nin',
  },
  {
    text: 'Turi tikėti savimi.',
    author: 'Sun Tzu',
  },
  {
    text: 'Mūsų ketinimai kūria mūsų tikrovę.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Tyla yra tikras draugas, kuris niekada neišduoda.',
    author: 'Konfucijus',
  },
  {
    text: 'Asmuo išvysto save gyvenimo sraute.',
    author: 'Johannas Wolfgangas vonas Goethe',
  },
  {
    text: 'Iš mažų giljotinų auga didžiosios ąsotys.',
    author: 'Amerikiečių posakis',
  },
  {
    text: 'Negalite sustabdyti bangų, bet galite išmokti jas šokti.',
    author: 'Jonas Kabat-Zinn',
  },
  {
    text: 'Realumas neatitinka idealo, bet tai patvirtina jį.',
    author: 'Gustave Flaubert',
  },
  {
    text: 'Kalbėkite tyliai, jei kalbate apie meilę.',
    author: 'Williamas Shakespeareas',
  },
  {
    text: 'Iš tikro didžiausias talentas randasi jo įgyvendinime.',
    author: 'Johannas Wolfgangas vonas Goethe',
  },
  {
    text: 'Realumas palieka daug vietos vaizduotei.',
    author: 'Johnas Lennonas',
  },
  {
    text: 'Didžiausias priešnuodis nuo pykčio yra delsimas.',
    author: null,
  },
  {
    text: 'Augimas paties savyje slypi laimės sėklyčioje.',
    author: 'Pearl Buck',
  },
  {
    text: 'Galite tai padaryti, jei tikite, kad galite!',
    author: 'Napoleonas Hillas',
  },
  {
    text: 'Nustatykite aukštus tikslus ir nebaikite, kol juos pasieksite.',
    author: null,
  },
  {
    text: 'Kiekviena nauja diena yra dar viena galimybė pakeisti savo gyvenimą.',
    author: null,
  },
  {
    text: 'Šypsokitės, kvėpuokite ir eikite lėtai.',
    author: 'Thich Nhat Hanh',
  },
  {
    text: 'Nieks jumis netikės, nebent jūs patys tikite savimi.',
    author: 'Liberacas',
  },
  {
    text: 'Daryk daugiau nei svajoji: dirbk.',
    author: 'Williamas Arthuras Wardas',
  },
  {
    text: 'Niekas niekada nepasidaro išmintingas atsitiktinai.',
    author: 'Seneka',
  }
];
