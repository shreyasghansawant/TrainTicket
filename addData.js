const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('theTrains.db');

const allTrainData = [
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Falaknuma Lingampalli MMTS",
      "station_name": "KACHEGUDA FALAKNUMA",
      "station_code": "FM",
      "id": 302214,
      "train_number": "47154",
      "departure": "07:55:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Thrissur Guruvayur Passenger",
      "station_name": "THRISUR",
      "station_code": "TCR",
      "id": 281458,
      "train_number": "56044",
      "departure": "18:55:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Porbandar Muzaffarpur Express",
      "station_name": "PORBANDAR",
      "station_code": "PBR",
      "id": 309335,
      "train_number": "19269",
      "departure": "15:05:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "RAIPUR ITWARI PASS",
      "station_name": "RAIPUR JN",
      "station_code": "R",
      "id": 283774,
      "train_number": "58205",
      "departure": "13:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Gomoh-Asansol MEMU",
      "station_name": "GOMOH JN",
      "station_code": "GMO",
      "id": 319937,
      "train_number": "63542",
      "departure": "07:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Rai Bareli-Mumbai LTT Saket Express",
      "station_name": "RAE BARELI JN",
      "station_code": "RBL",
      "id": 520605,
      "train_number": "21068",
      "departure": "16:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Subramanya Road Mangalore Passenger",
      "station_name": "Subrahmanya Road",
      "station_code": "SBHR",
      "id": 335930,
      "train_number": "56646",
      "departure": "13:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ernakulam Alappuzha Passenger",
      "station_name": "ERNAKULAM JN",
      "station_code": "ERS",
      "id": 282535,
      "train_number": "56379",
      "departure": "07:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Salempur Barhaj Passenger",
      "station_name": "SALEMPUR JN",
      "station_code": "SRU",
      "id": 336174,
      "train_number": "55145",
      "departure": "18:40:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Bir Khandwa Shuttle",
      "station_name": "Bir",
      "station_code": "BIR",
      "id": 17022,
      "train_number": "51688",
      "departure": "15:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Asansol-Bokaro Steel City MEMU",
      "station_name": "ASANSOL JN",
      "station_code": "ASN",
      "id": 336193,
      "train_number": "63596",
      "departure": "17:50:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Tanakpur Aishbagh Express",
      "station_name": "Tanakpur",
      "station_code": "TPU",
      "id": 282465,
      "train_number": "52228",
      "departure": "18:40:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Botad Bhavnagar Passenger",
      "station_name": "BOTAD JN",
      "station_code": "BTD",
      "id": 336178,
      "train_number": "59227",
      "departure": "21:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Harihar Express",
      "station_name": "MUZAFFARPUR JN",
      "station_code": "MFP",
      "id": 168737,
      "train_number": "14523",
      "departure": "07:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Birmitrapur Barsuan Passenger",
      "station_name": "Biramitrapur",
      "station_code": "BRMP",
      "id": 336277,
      "train_number": "58151",
      "departure": "07:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Patan Mehsana Passenger",
      "station_name": "PATAN",
      "station_code": "PTN",
      "id": 299325,
      "train_number": "59478",
      "departure": "17:05:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Sealdah-Gede Local",
      "station_name": "KOLKATA SEALDAH",
      "station_code": "SDAH",
      "id": 336057,
      "train_number": "31929",
      "departure": "20:32:00"
    },
    {
      "arrival": "06:49:00",
      "day": 1,
      "train_name": "Pipar Road -Jodhpur Passenger Special",
      "station_name": "PIPAR ROAD JN",
      "station_code": "PPR",
      "id": 11813,
      "train_number": "04857",
      "departure": "06:50:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Buxar Mughal Sarai Passenger",
      "station_name": "BUXAR",
      "station_code": "BXR",
      "id": 318164,
      "train_number": "53215",
      "departure": "09:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Howrah Panskura EMU",
      "station_name": "HOWRAH JN",
      "station_code": "HWH",
      "id": 299882,
      "train_number": "38453",
      "departure": "17:50:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Barddhaman Rampurhat Passenger",
      "station_name": "BARDDHAMAN JN",
      "station_code": "BWN",
      "id": 335911,
      "train_number": "53067",
      "departure": "17:35:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "New Delhi-Sealdah AC Duronto Express",
      "station_name": "NEW DELHI",
      "station_code": "NDLS",
      "id": 41765,
      "train_number": "12260",
      "departure": "20:05:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Lingampalli Hyderabad MMTS",
      "station_name": "LINGAMPALLI",
      "station_code": "LPI",
      "id": 378369,
      "train_number": "47128",
      "departure": "07:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "HYDERABAD DECCAN - AJMER SF Exp",
      "station_name": "HYDERABAD DECCAN",
      "station_code": "HYB",
      "id": 440052,
      "train_number": "12720",
      "departure": "20:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Kannur Passenger",
      "station_name": "MANGALORE CNTL",
      "station_code": "MAQ",
      "id": 335377,
      "train_number": "56656",
      "departure": "16:35:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Kandari Express",
      "station_name": "Digha Flag Station",
      "station_code": "DGHA",
      "id": 46378,
      "train_number": "18002",
      "departure": "18:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Doon Express",
      "station_name": "HOWRAH JN",
      "station_code": "HWH",
      "id": 320734,
      "train_number": "13009",
      "departure": "20:35:00"
    },
    {
      "arrival": "18:10:00",
      "day": 1,
      "train_name": "Bxt Alipur Duar Passenger",
      "station_name": "NEW COOCH BEHAR",
      "station_code": "NCB",
      "id": 299907,
      "train_number": "55792",
      "departure": "18:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Poorvanchal Express",
      "station_name": "KOLKATA CHITPUR",
      "station_code": "KOAA",
      "id": 334956,
      "train_number": "15051",
      "departure": "14:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "GAYA - CHENNAI EGMORE SF Exp",
      "station_name": "GAYA JN",
      "station_code": "GAYA",
      "id": 522700,
      "train_number": "12389",
      "departure": "05:45:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Chirmiri Katni Passenger",
      "station_name": "Chirmiri",
      "station_code": "CHRM",
      "id": 16433,
      "train_number": "51606",
      "departure": "03:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ranchi - Lohardaga - Barkichampi Passenger",
      "station_name": "RANCHI",
      "station_code": "RNC",
      "id": 299912,
      "train_number": "58653",
      "departure": "09:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Belgaum Miraj Passenger",
      "station_name": "BELGAUM",
      "station_code": "BGM",
      "id": 16272,
      "train_number": "51462",
      "departure": "06:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Bir Khandwa Shuttle",
      "station_name": "Bir",
      "station_code": "BIR",
      "id": 17032,
      "train_number": "51690",
      "departure": "19:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Barauni-Hajipur Passenger",
      "station_name": "BARAUNI JN",
      "station_code": "BJU",
      "id": 332324,
      "train_number": "55549",
      "departure": "22:40:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Surat Virar Passenger",
      "station_name": "SURAT",
      "station_code": "ST",
      "id": 299922,
      "train_number": "59038",
      "departure": "04:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Sakri Nirmali Passenger",
      "station_name": "SAKRI JN",
      "station_code": "SKI",
      "id": 333312,
      "train_number": "52523",
      "departure": "02:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ahmedabad Mumbai Central Superfast Special",
      "station_name": "AHMEDABAD JN",
      "station_code": "ADI",
      "id": 366170,
      "train_number": "09002",
      "departure": "21:40:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Bina Guna Passenger",
      "station_name": "BINA JN",
      "station_code": "BINA",
      "id": 16502,
      "train_number": "51609",
      "departure": "15:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Wardha Bhusaval Passenger",
      "station_name": "WARDHA JN",
      "station_code": "WR",
      "id": 14705,
      "train_number": "51198",
      "departure": "23:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Hyderabad Lingampalli MMTS",
      "station_name": "HYDERABAD DECCAN",
      "station_code": "HYB",
      "id": 334266,
      "train_number": "47124",
      "departure": "21:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "VASCO DA GAMA - KULEM Passenger",
      "station_name": "VASCO DA GAMA",
      "station_code": "VSG",
      "id": 521211,
      "train_number": "56966",
      "departure": "17:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ranchi-New Delhi Rajdhani Express",
      "station_name": "RANCHI",
      "station_code": "RNC",
      "id": 377475,
      "train_number": "12453",
      "departure": "17:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Palasa Visakhapatnam Passenger",
      "station_name": "PALASA",
      "station_code": "PSA",
      "id": 284291,
      "train_number": "58525",
      "departure": "09:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Krishak Express",
      "station_name": "LUCKNOW JN",
      "station_code": "LJN",
      "id": 334188,
      "train_number": "15008",
      "departure": "23:05:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "KULEM - VASCO DA GAMA Passenger",
      "station_name": "KULEM",
      "station_code": "QLM",
      "id": 521223,
      "train_number": "56965",
      "departure": "17:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Guna Bina Passenger",
      "station_name": "GUNA",
      "station_code": "GUNA",
      "id": 16488,
      "train_number": "51608",
      "departure": "10:45:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Delhi-Jaisalmer Express",
      "station_name": "OLD DELHI",
      "station_code": "DLI",
      "id": 293725,
      "train_number": "14659",
      "departure": "17:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Nagbhir Nagpur Passenger",
      "station_name": "Nagbhir Junction",
      "station_code": "NAB",
      "id": 333836,
      "train_number": "58844",
      "departure": "06:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ajmer Jaipur SF Special",
      "station_name": "AJMER JN",
      "station_code": "AII",
      "id": 6163,
      "train_number": "09621",
      "departure": "11:45:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Rajahmundry Vijayawada Passenger",
      "station_name": "RAJAMUNDRY",
      "station_code": "RJY",
      "id": 332018,
      "train_number": "57200",
      "departure": "17:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "AJMER - HYDERABAD DECCAN SF Exp",
      "station_name": "AJMER JN",
      "station_code": "AII",
      "id": 439804,
      "train_number": "12719",
      "departure": "17:40:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Akola Purna Passenger",
      "station_name": "AKOLA JN",
      "station_code": "AK",
      "id": 331840,
      "train_number": "57581",
      "departure": "06:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Coimbatore Mumbai LTT Express",
      "station_name": "COIMBATORE JN",
      "station_code": "CBE",
      "id": 127842,
      "train_number": "11014",
      "departure": "08:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Lingampalli Falaknuma MMTS",
      "station_name": "LINGAMPALLI",
      "station_code": "LPI",
      "id": 329380,
      "train_number": "47173",
      "departure": "06:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Secunderabad Bodhan Passenger",
      "station_name": "SECUNDERABAD JN",
      "station_code": "SC",
      "id": 285796,
      "train_number": "57473",
      "departure": "17:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Mayiladuthurai-Villupuram Passenger",
      "station_name": "MAYILADUTURAI JN",
      "station_code": "MV",
      "id": 310956,
      "train_number": "56878",
      "departure": "17:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Rewa Bilaspur Fast Passenger",
      "station_name": "REWA",
      "station_code": "REWA",
      "id": 17085,
      "train_number": "51751",
      "departure": "21:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Rajmahal Tinpahar Passenger",
      "station_name": "Rajmahal",
      "station_code": "RJL",
      "id": 324880,
      "train_number": "53484",
      "departure": "06:48:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Howrah Panskura EMU",
      "station_name": "HOWRAH JN",
      "station_code": "HWH",
      "id": 298770,
      "train_number": "38419",
      "departure": "09:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Chennai Beach Tambaram EMU(12 Car)",
      "station_name": "CHENNAI BEACH",
      "station_code": "MSB",
      "id": 319518,
      "train_number": "40001",
      "departure": "04:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Dibrugarh Guwahati Rajdhani Express",
      "station_name": "DIBRUGARH TOWN",
      "station_code": "DBRT",
      "id": 217871,
      "train_number": "02423",
      "departure": "20:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Falaknuma Lingampalli MMTS",
      "station_name": "KACHEGUDA FALAKNUMA",
      "station_code": "FM",
      "id": 348457,
      "train_number": "47155",
      "departure": "09:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Agartala Silchar Passenger",
      "station_name": "Agartala",
      "station_code": "AGTL",
      "id": 298582,
      "train_number": "52563",
      "departure": "11:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Miraj -Londa Passenger",
      "station_name": "MIRAJ JN",
      "station_code": "MRJ",
      "id": 15798,
      "train_number": "51431",
      "departure": "06:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Pratham Swatantrata Sangram Express",
      "station_name": "KOLKATA CHITPUR",
      "station_code": "KOAA",
      "id": 172080,
      "train_number": "11105",
      "departure": "07:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Varanasi-Asansol Passenger",
      "station_name": "VARANASI JN",
      "station_code": "BSB",
      "id": 333086,
      "train_number": "53522",
      "departure": "04:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Panskura Howrah EMU",
      "station_name": "PANSKURA",
      "station_code": "PKU",
      "id": 298382,
      "train_number": "38464",
      "departure": "16:35:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Asansol Adra Passenger",
      "station_name": "ASANSOL JN",
      "station_code": "ASN",
      "id": 325384,
      "train_number": "58020",
      "departure": "12:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "BANGALORE - KAKINADA TOWN Seshadri Exp",
      "station_name": "BANGALORE CITY JN",
      "station_code": "SBC",
      "id": 518263,
      "train_number": "17209",
      "departure": "13:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Lucknow Gonda Passenger",
      "station_name": "GORAKHPUR JN",
      "station_code": "GKP",
      "id": 314809,
      "train_number": "55030",
      "departure": "18:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Kasganj Bareilly Passenger",
      "station_name": "Kasganj Mg",
      "station_code": "KSJF",
      "id": 298648,
      "train_number": "52217",
      "departure": "21:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Miraj Hubli Passenger",
      "station_name": "MIRAJ JN",
      "station_code": "MRJ",
      "id": 15404,
      "train_number": "51419",
      "departure": "07:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "ASANSOL - MUMBAI CST SF Exp",
      "station_name": "ASANSOL JN",
      "station_code": "ASN",
      "id": 521567,
      "train_number": "12361",
      "departure": "19:45:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Bhagalpur Azimganj Passenger",
      "station_name": "BHAGALPUR",
      "station_code": "BGP",
      "id": 312010,
      "train_number": "53030",
      "departure": "04:50:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Shree Chatrapati Shahu M(T) Kolhapur- Pune Passenger",
      "station_name": "C SHAHU M RAJ KOLHAPUR TERM",
      "station_code": "KOP",
      "id": 15269,
      "train_number": "51410",
      "departure": "04:45:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Vadtal Swaminarayan Anand Passenger",
      "station_name": "Vadtal Swaminarayan",
      "station_code": "VTL",
      "id": 331170,
      "train_number": "59164",
      "departure": "11:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Amritsar Shatabdi Express",
      "station_name": "NEW DELHI",
      "station_code": "NDLS",
      "id": 157826,
      "train_number": "12031",
      "departure": "07:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "ParliVaijnath-Miraj Passenger",
      "station_name": "PARLI VAIJNATH",
      "station_code": "PRLI",
      "id": 15666,
      "train_number": "51425",
      "departure": "07:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Balgona-Katwa Fast Local",
      "station_name": "Balgona",
      "station_code": "BGNA",
      "id": 298426,
      "train_number": "52301",
      "departure": "06:05:00"
    },
    {
      "arrival": "None",
      "day": null,
      "train_name": "AMRITSAR - CHANDIGARH Intercity SF Exp",
      "station_name": "AMRITSAR JN",
      "station_code": "ASR",
      "id": 444951,
      "train_number": "12412",
      "departure": "None"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Una Chandigarh Haridwar Link Jan Shatabdi",
      "station_name": "Una Himachal",
      "station_code": "UHL",
      "id": 375642,
      "train_number": "12064",
      "departure": "05:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Tiruturaipudi Karaikkudi Express",
      "station_name": "Tiruturaipudi Junction",
      "station_code": "TTP",
      "id": 332247,
      "train_number": "16861",
      "departure": "05:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Fatehpur Kanpur Passenger",
      "station_name": "FATEHPUR",
      "station_code": "FTP",
      "id": 287286,
      "train_number": "54151",
      "departure": "07:20:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ludhiana Firozpur Passenger",
      "station_name": "LUDHIANA JN",
      "station_code": "LDH",
      "id": 331153,
      "train_number": "54051",
      "departure": "10:05:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "JAMALPUR KIUL PASS",
      "station_name": "JAMALPUR JN",
      "station_code": "JMP",
      "id": 339337,
      "train_number": "53421",
      "departure": "07:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Bhadrak Cuttack Passenger",
      "station_name": "BHADRAKH",
      "station_code": "BHC",
      "id": 317179,
      "train_number": "58423",
      "departure": "14:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Barharwa- Rampurhat Passenger",
      "station_name": "BARHARWA JN",
      "station_code": "BHW",
      "id": 298182,
      "train_number": "53138",
      "departure": "09:50:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ajmer Ahmedabad Passenger",
      "station_name": "AJMER JN",
      "station_code": "AII",
      "id": 318180,
      "train_number": "54806",
      "departure": "10:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Tea Garden Express",
      "station_name": "Nagore",
      "station_code": "NCR",
      "id": 293536,
      "train_number": "16865",
      "departure": "16:30:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Durg Ambikapur Express",
      "station_name": "DURG",
      "station_code": "DURG",
      "id": 322162,
      "train_number": "18241",
      "departure": "20:10:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Danapur Giridih Express",
      "station_name": "DANAPUR",
      "station_code": "DNR",
      "id": 287478,
      "train_number": "83112",
      "departure": "19:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Katihar Hajipur Passenger",
      "station_name": "KATIHAR JN",
      "station_code": "KIR",
      "id": 309936,
      "train_number": "55539",
      "departure": "04:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Jabalpur-HabibGanj Bhopal Jan Shatabdi",
      "station_name": "JABALPUR",
      "station_code": "JBP",
      "id": 20819,
      "train_number": "12062",
      "departure": "06:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "UDAIPUR - AHMEDABAD Exp",
      "station_name": "UDAIPUR CITY",
      "station_code": "UDZ",
      "id": 440935,
      "train_number": "19943",
      "departure": "19:25:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Ledo Guwahati Intercity Express",
      "station_name": "Ledo",
      "station_code": "LEDO",
      "id": 298303,
      "train_number": "15604",
      "departure": "15:15:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "InterCity Express",
      "station_name": "RATLAM JN",
      "station_code": "RTM",
      "id": 302237,
      "train_number": "19303",
      "departure": "06:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Gondia-Raigarh Jan Shatabdi",
      "station_name": "GONDIA JN",
      "station_code": "G",
      "id": 356242,
      "train_number": "12070",
      "departure": "15:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Alipurduar Lumding Express",
      "station_name": "ALIPUR DUAR JN",
      "station_code": "APDJ",
      "id": 336404,
      "train_number": "15769",
      "departure": "04:00:00"
    },
    {
      "arrival": "None",
      "day": 1,
      "train_name": "Kasganj Kanpur Express",
      "station_name": "KASGANJ",
      "station_code": "KSJ",
      "id": 298218,
      "train_number": "15038",
      "departure": "12:00:00"
    }
  ]

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS trains (id INTEGER PRIMARY KEY, train_number TEXT, train_name TEXT, station_name TEXT, station_code TEXT, departure TEXT)');
    
    const addData = db.prepare('INSERT INTO trains (id, train_number, train_name, station_name, station_code, departure) VALUES (?, ?, ?, ?, ?, ?)');
    allTrainData.forEach((train) => {
        addData.run(train.id, train.train_number, train.train_name, train.station_name, train.station_code, train.departure);
    });
    addData.finalize();
});

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS tickets (id INTEGER PRIMARY KEY, train_number TEXT, train_name TEXT, station_name TEXT, departure TEXT, name TEXT, date TEXT, seats TEXT, phone TEXT)');
    db.close();
});