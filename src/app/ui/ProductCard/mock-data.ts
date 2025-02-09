import { Cruise } from "../../../types"

export const singleCruise: Cruise = {
    price: 319,
    name: "7 Night Mediterranean - Western Cruise",
    ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
            logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
            name: "MSC Cruises"
        }
    },
    itinerary: [
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy"
    ],
    region: "Caribbean",
    departureDate: "2022-11-23",
    returnDate: "2022-11-30",
    duration: 7
}

export const multipleCruises: Cruise[] = [
    {
      price: 319,
      name: "7 Night Mediterranean - Western Cruise",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-11-30",
      duration: 7
    },
    {
      price: 3099,
      name: "27 Day New Zealand & South Australia Discovery Collector",
      ship: {
        name: "Westerdam",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244829/production/small_ship_main_image_190_62303d8c_3c92_448e_ad01_0a02e7eedca3_0462af156b.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730444/production/line_logo_5_ed91fe81_edf0_4cbb_a115_aa5495bbf2dc_3f0bbebc13.jpg",
          name: "Holland America Line"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Eden, Australia",
        "Hobart, Australia",
        "Port Arthur, Australia",
        "Hobart, Australia",
        "Adelaide, Australia",
        "Adelaide, Australia",
        "Kangaroo Island, Australia",
        "Melbourne, Australia",
        "Phillip Island, Australia",
        "Sydney, Australia",
        "Melbourne, Australia",
        "Hobart, Australia",
        "Milford Sound, New Zealand",
        "Port Chalmers (Dunedin), New Zealand",
        "Lyttelton (Christchurch), New Zealand",
        "Christchurch, New Zealand",
        "Wellington, New Zealand",
        "Napier, New Zealand",
        "Tauranga, New Zealand",
        "Auckland, New Zealand"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-12-20",
      duration: 27
    },
    {
      price: 1039,
      name: "10 NIGHT Australia CRUISE",
      ship: {
        name: "Royal Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245266/production/small_ship_main_image_308_46e37dcc_9f24_45de_9d47_6dfc1e20687f_8f6cf3bb8e.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Brisbane, Australia",
        "Airlie Beach",
        "Yorkeys Knob",
        "Port Douglas, Australia",
        "Willis Island",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-12-03",
      duration: 10
    },
    {
      price: 378,
      name: "3 Night Sampler Cruise",
      ship: {
        name: "Quantum of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245335/production/small_ship_main_image_1342438_37b5587a_0342_427a_97a9_40072f0a422c_8910b486e2.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Brisbane, Australia",
        "Brisbane, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-24",
      returnDate: "2022-11-27",
      duration: 3
    },
    {
      price: 1255,
      name: "4 Night Penang & Phuket Cruise",
      ship: {
        name: "Spectrum of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245353/production/ship_main_image_1379549_f89e4498_6c8c_4f46_80f5_2568231e243b_635094e1f7.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Singapore, Singapore",
        "Penang, Malaysia",
        "Phuket, Thailand",
        "Singapore, Singapore"
      ],
      region: "Caribbean",
      departureDate: "2022-11-24",
      returnDate: "2022-11-28",
      duration: 4
    },
    {
      price: 249,
      name: "7 Night Europe",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Le Havre (Paris), France",
        "Southampton, England",
        "Hamburg, Germany",
        "Rotterdam, The Netherlands",
        "Zeebrugge (Bruges), Belgium",
        "Le Havre (Paris), France"
      ],
      region: "Caribbean",
      departureDate: "2022-11-24",
      returnDate: "2022-12-01",
      duration: 7
    },
    {
      price: 569,
      name: "9 Night Panama Canal-Panama City",
      ship: {
        name: "Norwegian Jewel",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244885/production/small_ship_main_image_231_c513bbf3_8748_4c7c_812f_dada3d989e4b_f2e92c8db8.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Colon, Panama",
        "Cartagena, Colombia",
        "Port of Oranjestad, Aruba, Caribbean",
        "Kralendijk, Bonaire, Dutch Antilles",
        "Willemstad, Curacao",
        "Puerto Limon, Costa Rica",
        "Panama Canal, Panama",
        "Panama City, Panama"
      ],
      region: "Caribbean",
      departureDate: "2022-11-24",
      returnDate: "2022-12-03",
      duration: 9
    },
    {
      price: 459,
      name: "13 Night Grand Voyage Cruise",
      ship: {
        name: "MSC Armonia",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244861/production/small_ship_main_image_229_17b3f278_06cf_443d_ae54_f9266ae1260a_97f74e639e.webp",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Alicante, Spain",
        "Malaga, Spain",
        "Funchal, Madeira, Portugal",
        "Bahia de Salvador, Brazil",
        "Rio de Janeiro, Brazil"
      ],
      region: "Caribbean",
      departureDate: "2022-11-24",
      returnDate: "2022-12-07",
      duration: 13
    },
    {
      price: 998,
      name: "3 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Independence of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245324/production/small_ship_main_image_626_26eb9121_3b72_41e9_a75e_8cf9e40c0a5a_a00f6d14b5.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Nassau, Bahamas",
        "Perfect Day at CocoCay",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-28",
      duration: 3
    },
    {
      price: 824,
      name: "3 Night Ensenada Cruise",
      ship: {
        name: "Navigator Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245325/production/small_ship_main_image_116_3a1e2c10_d98c_4f62_b873_90e10d38f84c_ba82c91be0.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Los Angeles, California",
        "Ensenada, Mexico",
        "Los Angeles, California"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-28",
      duration: 3
    },
    {
      price: 749,
      name: "3 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Liberty Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1653676455/production/small_lots_6257ed50cc.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Nassau, Bahamas",
        "Perfect Day at CocoCay",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-28",
      duration: 3
    },
    {
      price: 319,
      name: "7 Night Mediterranean - Western Cruise",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 569,
      name: "7 Night Caribbean",
      ship: {
        name: "Sky Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1666981922/production/small_sky_princess_ship_a82c702608.webp",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Princess Cays, Bahamas",
        "St. Thomas, U.S. Virgin Islands",
        "St. Maarten, Netherlands Antilles",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 199,
      name: "4 Night Mediterranean Cruise",
      ship: {
        name: "MSC Splendida",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1652317985/production/small_MSC_Splendida_e1c7d86a99.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Sockhna, Egypt",
        "Safaga (Luxor, Karnak), Egypt",
        "Aqaba, Jordan",
        "Jeddah, Saudi Arabia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-11-30",
      duration: 4
    },
    {
      price: 5709,
      name: "14 Day Crossing To The Caribbean",
      ship: {
        name: "Seabourn Ovation",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245856/production/small_ship_main_image_1368942_c85b109e_2e11_44d1_9278_2c12bb183571_114f7b2c75.webp",
        line: {
          logo: null,
          name: "Seabourn Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "St. John's, Antigua",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Pointe-a-Pitre, Guadeloupe",
        "Fort-de-France, Martinique",
        "Bridgetown, Barbados"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-10",
      duration: 14
    },
    {
      price: 439,
      name: "7 Day Mexican Riviera Itinerary",
      ship: {
        name: "Carnival Panorama",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242252/production/small_ship_main_image_1376221_2930eab7_b277_4c0a_96a9_5b8ed9662c97_1da1f0aee5.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730864/production/line_logo_13_faa530da_d942_4029_a79e_f93ae7e02522_6cf41e3ef5.png",
          name: "Carnival Cruise Line"
        }
      },
      itinerary: [
        "Los Angeles, California",
        "Puerto Vallarta, Mexico",
        "Mazatlan, Mexico",
        "Cabo San Lucas, Mexico",
        "Los Angeles, California"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 582,
      name: "7 Night Eastern Caribbean & Perfect Day",
      ship: {
        name: "Symphony of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1653656926/production/small_symphony_of_the_seas_bc227febec.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Miami, Florida",
        "Philipsburg, St. Maarten",
        "Charlotte Amalie, St. Thomas, U.S. Virgin Islands",
        "Perfect Day at CocoCay",
        "Miami, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 7306,
      name: "7 Night Galapagos Southern Loop",
      ship: {
        name: "Celebrity Xploration",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1652294316/production/small_Celebrity_Xploration_09ff8b8f4b.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Isla Baltra, Galapagos Islands",
        "Mosquera Islet, Galapagos",
        "Isla Rabida, Galapagos Islands",
        "Dragon Hill (santa Cruz), Galapagos Islands",
        "Isla Isabela (Caleta Tagus), Galapagos Islands",
        "Isla Isabela (Caleta Tagus), Galapagos Islands",
        "Galapagos Islands, Ecuador",
        "Cormorant Point (Floreana), Galapagos Islands",
        "San Cristobal, Galapagos Islands",
        "Galapagos Islands, Ecuador",
        "Galapagos Islands, Ecuador",
        "Puerto Ayora, Galapagos Islands",
        "Espanola (Hood) Island, Ecuador",
        "Punta Suarez, Galapagos Islands",
        "Isla Baltra, Galapagos Islands",
        "Daphne Island (galapagos)"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 469,
      name: "7 Night Mediterranean",
      ship: {
        name: "MSC Bellissima",
        rating: 4.5,
        reviews: 123,
        image: null,
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 1179,
      name: "14 Night Caribbean Cruise",
      ship: {
        name: "Sky Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1666981922/production/small_sky_princess_ship_a82c702608.webp",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Princess Cays, Bahamas",
        "St. Thomas, U.S. Virgin Islands",
        "St. Maarten, Netherlands Antilles",
        "Fort Lauderdale (Port Everglades), Florida",
        "Cozumel, Mexico",
        "Roatan, Honduras",
        "Belize City, Belize",
        "Costa Maya, Mexico",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-10",
      duration: 14
    },
    {
      price: 469,
      name: "7 Night Mediterranean",
      ship: {
        name: "MSC Bellissima",
        rating: 4.5,
        reviews: 123,
        image: null,
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-28",
      duration: 7
    },
    {
      price: 4499,
      name: "21 Night Australia Cruise",
      ship: {
        name: "Regatta",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1651593274/production/small_ship_main_image_167_b9950b9e_670a_42d1_bdee_4ea7a0fa87de_f05d4afff4_8821e097c8.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649729888/production/line_logo_1_82665b60_d05e_447f_87ee_2bca91dd0edf_64a5ad8717.jpg",
          name: "Oceania Cruises"
        }
      },
      itinerary: [
        "Singapore, Singapore",
        "Semarang, Java, Indonesia",
        "Bali, Indonesia",
        "Bali, Indonesia",
        "Broome, Australia",
        "Perth (Fremantle), Australia",
        "Perth (Fremantle), Australia",
        "Busselton, Australia",
        "PENNESHAW (KANGAROO ISLAND), Australia",
        "Adelaide, Australia",
        "Melbourne, Australia",
        "Burnie, Tasmania",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-12",
      duration: 21
    },
    {
      price: 1459,
      name: "4 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Independence of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245324/production/small_ship_main_image_626_26eb9121_3b72_41e9_a75e_8cf9e40c0a5a_a00f6d14b5.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Nassau, Bahamas",
        "Perfect Day at CocoCay",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-25",
      duration: 4
    },
    {
      price: 149,
      name: "6 Night Europe",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Hamburg, Germany",
        "Rotterdam, The Netherlands",
        "Le Havre (Paris), France",
        "Southampton, England",
        "Hamburg, Germany"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-27",
      duration: 6
    },
    {
      price: 468,
      name: "7 Night Mediterranean",
      ship: {
        name: "MSC Grandiosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244860/production/small_ship_main_image_1376249_98ac57ac_29a1_4c8c_838c_bd80fbf12948_09732966c4.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Palermo, Sicily, Italy",
        "Valletta, Malta",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "Civitavecchia (Rome), Italy",
        "Palermo, Sicily, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-11-29",
      duration: 7
    },
    {
      price: 949,
      name: "10 NIGHT GREAT BARRIER REEF CRUISE",
      ship: {
        name: "Radiance Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245403/production/small_ship_main_image_43_14b7e3f9_ab34_481c_956a_694bea72238e_1fed078243.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Airlie Beach",
        "Cairns, Australia",
        "Cairns, Australia",
        "Port Douglas, Australia",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-12-02",
      duration: 10
    },
    {
      price: 469,
      name: "7 Night Mediterranean",
      ship: {
        name: "MSC Bellissima",
        rating: 4.5,
        reviews: 123,
        image: null,
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-11-29",
      duration: 7
    },
    {
      price: 369,
      name: "7 Night Mediterranean - Western Cruise",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-11-29",
      duration: 7
    },
    {
      price: 819.69,
      name: "10 Night Mediterranean",
      ship: {
        name: "MSC Magnifica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244831/production/small_ship_main_image_195312_3267a0fe_2452_4846_856b_4376f3097ca4_1e25cc4a68.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Tangier, Morocco",
        "Tenerife, Canary Islands, Spain",
        "Funchal, Madeira, Portugal",
        "Malaga, Spain",
        "Marseille, France",
        "Genoa, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-12-02",
      duration: 10
    },
    {
      price: 449,
      name: "10 Night Mexico Cruise",
      ship: {
        name: "Ruby Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245251/production/small_ship_main_image_54597_2e08b525_c06d_4881_b885_5eee7924ce66_f36556a0af.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "San Francisco, California",
        "Puerto Vallarta, Mexico",
        "Manzanillo, Mexico",
        "Mazatlan, Mexico",
        "Cabo San Lucas, Mexico",
        "San Francisco, California"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-12-02",
      duration: 10
    },
    {
      price: 429,
      name: "5 Night Bermuda",
      ship: {
        name: "Norwegian Joy",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244879/production/ship_main_image_1364185_d07dc981_d91b_45d5_986c_cb465766af36_7ae8188910.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "New York, New York",
        "Royal Naval Dockyard, Bermuda",
        "Royal Naval Dockyard, Bermuda",
        "New York, New York"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-01",
      duration: 5
    },
    {
      price: 1473,
      name: "8 Night Southern Caribbean Cruise",
      ship: {
        name: "Explorer Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245378/production/ship_main_image_1_9de27df6_f8a3_46ac_8e61_7ba0bfb2a2b9_eb982a1a02.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Miami, Florida",
        "Kralendijk, Bonaire, Dutch Antilles",
        "Willemstad, Curacao",
        "Port of Oranjestad, Aruba, Caribbean",
        "Miami, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-04",
      duration: 8
    },
    {
      price: 5709,
      name: "14 Day Crossing To The Caribbean",
      ship: {
        name: "Seabourn Ovation",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245856/production/small_ship_main_image_1368942_c85b109e_2e11_44d1_9278_2c12bb183571_114f7b2c75.webp",
        line: {
          logo: null,
          name: "Seabourn Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "St. John's, Antigua",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Pointe-a-Pitre, Guadeloupe",
        "Fort-de-France, Martinique",
        "Bridgetown, Barbados"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-10",
      duration: 14
    },
    {
      price: 999,
      name: "12 Night Hawaii",
      ship: {
        name: "Norwegian Spirit",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244883/production/small_ship_main_image_214_8531c1f5_91e0_4077_a91e_2ab3fffff4b1_e92641f142.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Honolulu, Oahu, Hawaii",
        "Port Allen (Nawiliwili), Kauai, Hawaii",
        "Port Allen (Nawiliwili), Kauai, Hawaii",
        "Kahului, Maui, Hawaii",
        "Hilo, Hawaii",
        "Raiatea, French Polynesia",
        "Bora Bora, French Polynesia",
        "Moorea, French Polynesia",
        "Papeete, Tahiti, French Polynesia",
        "Papeete, Tahiti, French Polynesia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-08",
      duration: 12
    },
    {
      price: 909,
      name: "7 Day Mexican Riviera",
      ship: {
        name: "Koningsdam",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244819/production/small_ship_main_image_1353102_376a5cc6_c269_42cd_817d_955bdc4994ad_a9114e710c.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730444/production/line_logo_5_ed91fe81_edf0_4cbb_a115_aa5495bbf2dc_3f0bbebc13.jpg",
          name: "Holland America Line"
        }
      },
      itinerary: [
        "San Diego, California",
        "Cabo San Lucas, Mexico",
        "Mazatlan, Mexico",
        "Puerto Vallarta, Mexico",
        "San Diego, California"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 2449,
      name: "10 Night Middle East Cruise",
      ship: {
        name: "Nautica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244890/production/small_ship_main_image_237_53ed35dd_b806_4b02_87e2_0bfbfde92d96_5f53ca54b9.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649729888/production/line_logo_1_82665b60_d05e_447f_87ee_2bca91dd0edf_64a5ad8717.jpg",
          name: "Oceania Cruises"
        }
      },
      itinerary: [
        "Abu Dhabi, United Arab Emirates",
        "Abu Dhabi, United Arab Emirates",
        "Fujairah, United Arab Emirates",
        "Muscat, Oman",
        "Manama, Bahrain",
        "Doha, Qatar",
        "Dubai, United Arab Emirates",
        "Dubai, United Arab Emirates"
      ],
      region: "Caribbean",
      departureDate: "2022-11-27",
      returnDate: "2022-12-07",
      duration: 10
    },
    {
      price: 249,
      name: "7 Night Europe",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Hamburg, Germany",
        "Rotterdam, The Netherlands",
        "Zeebrugge (Bruges), Belgium",
        "Le Havre (Paris), France",
        "Southampton, England",
        "Hamburg, Germany"
      ],
      region: "Caribbean",
      departureDate: "2022-11-27",
      returnDate: "2022-12-04",
      duration: 7
    },
    {
      price: 399,
      name: "6 Night Western Caribbean & Perfect Day",
      ship: {
        name: "Jewel Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245326/production/small_ship_main_image_187_ef1e7bba_e6e4_4fc6_982f_ace1c1c9f56e_99f002c82d.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Perfect Day at CocoCay",
        "Ocho Rios, Jamaica",
        "Labadee (Labadie), Haiti",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-27",
      returnDate: "2022-12-03",
      duration: 6
    },
    {
      price: 399,
      name: "7 Night Western Caribbean",
      ship: {
        name: "Norwegian Breakaway",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244875/production/small_ship_main_image_829124_3798b393_9841_4835_92ef_4b207c1e1c5b_86bbe4d0ff.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "New Orleans, Louisiana",
        "Costa Maya, Mexico",
        "Harvest Caye, Belize",
        "Roatan, Honduras",
        "Cozumel, Mexico",
        "New Orleans, Louisiana"
      ],
      region: "Caribbean",
      departureDate: "2022-11-27",
      returnDate: "2022-12-04",
      duration: 7
    },
    {
      price: 1199,
      name: "12 Night New Zealand Cruise",
      ship: {
        name: "Celebrity Eclipse",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244737/production/small_ship_main_image_392119_6f65d19a_ad99_4450_9581_bf28bf626499_cda45247d2.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Doubtful Sound, New Zealand",
        "Milford Sound, New Zealand",
        "Dusky Sound, New Zealand",
        "Dunedin, New Zealand",
        "Christchurch, New Zealand",
        "Wellington, New Zealand",
        "Napier, New Zealand",
        "Tauranga, New Zealand",
        "Auckland, New Zealand",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-27",
      returnDate: "2022-12-09",
      duration: 12
    },
    {
      price: 819.69,
      name: "10 Night Mediterranean",
      ship: {
        name: "MSC Magnifica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244831/production/small_ship_main_image_195312_3267a0fe_2452_4846_856b_4376f3097ca4_1e25cc4a68.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Tangier, Morocco",
        "Tenerife, Canary Islands, Spain",
        "Funchal, Madeira, Portugal",
        "Malaga, Spain",
        "Marseille, France",
        "Genoa, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-22",
      returnDate: "2022-12-02",
      duration: 10
    },
    {
      price: 611,
      name: "10 Night Transcanal Cruise",
      ship: {
        name: "Emerald Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245266/production/small_ship_main_image_306_a96661df_f98f_46ff_899c_8f7d83c7a388_a684278220.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Cartagena, Colombia",
        "Colon, Panama",
        "Limon Bay Panama Canal, Panama",
        "Cozumel, Mexico",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-12-03",
      duration: 10
    },
    {
      price: 3099,
      name: "27 Day New Zealand & South Australia Discovery Collector",
      ship: {
        name: "Westerdam",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244829/production/small_ship_main_image_190_62303d8c_3c92_448e_ad01_0a02e7eedca3_0462af156b.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730444/production/line_logo_5_ed91fe81_edf0_4cbb_a115_aa5495bbf2dc_3f0bbebc13.jpg",
          name: "Holland America Line"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Eden, Australia",
        "Hobart, Australia",
        "Port Arthur, Australia",
        "Hobart, Australia",
        "Adelaide, Australia",
        "Adelaide, Australia",
        "Kangaroo Island, Australia",
        "Melbourne, Australia",
        "Phillip Island, Australia",
        "Sydney, Australia",
        "Melbourne, Australia",
        "Hobart, Australia",
        "Milford Sound, New Zealand",
        "Port Chalmers (Dunedin), New Zealand",
        "Lyttelton (Christchurch), New Zealand",
        "Christchurch, New Zealand",
        "Wellington, New Zealand",
        "Napier, New Zealand",
        "Tauranga, New Zealand",
        "Auckland, New Zealand"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-12-20",
      duration: 27
    },
    {
      price: 4899,
      name: "27 Day Grand Africa Voyage",
      ship: {
        name: "Zaandam",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244816/production/small_ship_main_image_78_ebe46334_d549_4b9d_8265_dfeed1495e9b_ff4e1de339.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730444/production/line_logo_5_ed91fe81_edf0_4cbb_a115_aa5495bbf2dc_3f0bbebc13.jpg",
          name: "Holland America Line"
        }
      },
      itinerary: [
        "Cape Town, South Africa",
        "Cape Town, South Africa",
        "Luderitz, Namibia",
        "Walvis Bay, Namibia",
        "Luanda, Angola",
        "Takoradi, Ghana",
        "Abidjan, Ivory Coast",
        "Banjul, Gambia",
        "Praia, Cape Verde",
        "Mindelo, Cape Verde Island",
        "San Juan, Puerto Rico",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-12-20",
      duration: 27
    },
    {
      price: 229,
      name: "3 Night Mediterranean Cruise",
      ship: {
        name: "MSC Splendida",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1652317985/production/small_MSC_Splendida_e1c7d86a99.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Jeddah, Saudi Arabia",
        "Sockhna, Egypt"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-11-26",
      duration: 3
    },
    {
      price: 319,
      name: "7 Night Mediterranean - Western Cruise",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-11-30",
      duration: 7
    },
    {
      price: 519,
      name: "6 Night Europe",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Rotterdam, The Netherlands",
        "Le Havre (Paris), France",
        "Southampton, England",
        "Hamburg, Germany",
        "Rotterdam, The Netherlands"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-11-29",
      duration: 6
    },
    {
      price: 539,
      name: "4 Night Europe",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Rotterdam, The Netherlands",
        "Le Havre (Paris), France",
        "Southampton, England",
        "Hamburg, Germany"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-11-27",
      duration: 4
    },
    {
      price: 1039,
      name: "10 NIGHT Australia CRUISE",
      ship: {
        name: "Royal Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245266/production/small_ship_main_image_308_46e37dcc_9f24_45de_9d47_6dfc1e20687f_8f6cf3bb8e.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Brisbane, Australia",
        "Airlie Beach",
        "Yorkeys Knob",
        "Port Douglas, Australia",
        "Willis Island",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-12-03",
      duration: 10
    },
    {
      price: 469,
      name: "7 Night Mediterranean",
      ship: {
        name: "MSC Bellissima",
        rating: 4.5,
        reviews: 123,
        image: null,
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-23",
      returnDate: "2022-11-30",
      duration: 7
    },
    {
      price: 429,
      name: "5 Night Bermuda",
      ship: {
        name: "Norwegian Joy",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244879/production/ship_main_image_1364185_d07dc981_d91b_45d5_986c_cb465766af36_7ae8188910.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "New York, New York",
        "Royal Naval Dockyard, Bermuda",
        "Royal Naval Dockyard, Bermuda",
        "New York, New York"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-01",
      duration: 5
    },
    {
      price: 749,
      name: "7 Day Tropical Caribbean",
      ship: {
        name: "Nieuw Statendam",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244831/production/small_ship_main_image_1372501_7dff0563_1421_449e_802d_93f446012d6f_b23ddb4834.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730444/production/line_logo_5_ed91fe81_edf0_4cbb_a115_aa5495bbf2dc_3f0bbebc13.jpg",
          name: "Holland America Line"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Half Moon Cay (Little San Salvador Island), Bahamas",
        "Grand Turk, Turks and Caicos",
        "Amber Cove, Dominican Republic",
        "Key West, Florida",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 449,
      name: "7 Night Key West, Belize & Grand Cayman",
      ship: {
        name: "Celebrity Apex",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244721/production/small_ship_main_image_1383350_71284a70_a661_42c9_8b27_e635b72ff390_da9b672658.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Key West, Florida",
        "Belize City, Belize",
        "Cozumel, Mexico",
        "Georgetown, Grand Cayman, Cayman Islands",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 569,
      name: "7 Night Caribbean",
      ship: {
        name: "Sky Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1666981922/production/small_sky_princess_ship_a82c702608.webp",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Princess Cays, Bahamas",
        "St. Thomas, U.S. Virgin Islands",
        "St. Maarten, Netherlands Antilles",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 549,
      name: "7 Night Western Caribbean",
      ship: {
        name: "Norwegian Prima",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244883/production/small_ship_main_image_1390086_b77599da_6a72_4350_bc79_a793876f86e4_dfaa3e5cc5.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Miami, Florida",
        "Roatan, Honduras",
        "Harvest Caye, Belize",
        "Costa Maya, Mexico",
        "Cozumel, Mexico",
        "Miami, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 409,
      name: "6 Night Mediterranean",
      ship: {
        name: "MSC Magnifica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244831/production/small_ship_main_image_195312_3267a0fe_2452_4846_856b_4376f3097ca4_1e25cc4a68.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Tenerife, Canary Islands, Spain",
        "Funchal, Madeira, Portugal",
        "Malaga, Spain",
        "Marseille, France",
        "Genoa, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-02",
      duration: 6
    },
    {
      price: 408,
      name: "5 Nt Western Caribbean & Perfect Day",
      ship: {
        name: "Mariner Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245402/production/small_ship_main_image_162_3228fec2_67bd_4d5b_b371_4ec2e768be4e_88cf2eea3c.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Cozumel, Mexico",
        "Perfect Day at CocoCay",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-01",
      duration: 5
    },
    {
      price: 469,
      name: "7 Night Mexico Cruise",
      ship: {
        name: "Discovery Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1657056094/production/small_xp_discovery_princess_768_17a5d49b78.webp",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Los Angeles, California",
        "Cabo San Lucas, Mexico",
        "Mazatlan, Mexico",
        "Puerto Vallarta, Mexico",
        "Los Angeles, California"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 8554,
      name: "21 Day Atlantic & Caribbean Gems",
      ship: {
        name: "Seabourn Ovation",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245856/production/small_ship_main_image_1368942_c85b109e_2e11_44d1_9278_2c12bb183571_114f7b2c75.webp",
        line: {
          logo: null,
          name: "Seabourn Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "St. John's, Antigua",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Fort-de-France, Martinique",
        "Bridgetown, Barbados",
        "Rodney Bay, St. Lucia",
        "Roseau, Dominica",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Trois Ilets, Martinique",
        "St. Georges, Grenada, West Indies",
        "Bridgetown, Barbados"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-17",
      duration: 21
    },
    {
      price: 319,
      name: "7 Night Mediterranean - Western Cruise",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain",
        "Barcelona, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 537,
      name: "5 Night Western Caribbean Cruise",
      ship: {
        name: "Radiance Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245403/production/small_ship_main_image_43_14b7e3f9_ab34_481c_956a_694bea72238e_1fed078243.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "New Orleans, Louisiana",
        "Costa Maya, Mexico",
        "Cozumel, Mexico",
        "New Orleans, Louisiana"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-01",
      duration: 5
    },
    {
      price: 8554,
      name: "21 Day Atlantic & Caribbean Gems",
      ship: {
        name: "Seabourn Ovation",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245856/production/small_ship_main_image_1368942_c85b109e_2e11_44d1_9278_2c12bb183571_114f7b2c75.webp",
        line: {
          logo: null,
          name: "Seabourn Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "St. John's, Antigua",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Fort-de-France, Martinique",
        "Bridgetown, Barbados",
        "Rodney Bay, St. Lucia",
        "Roseau, Dominica",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Trois Ilets, Martinique",
        "St. Georges, Grenada, West Indies",
        "Bridgetown, Barbados"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-17",
      duration: 21
    },
    {
      price: 429,
      name: "5 Night Bermuda",
      ship: {
        name: "Norwegian Joy",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244879/production/ship_main_image_1364185_d07dc981_d91b_45d5_986c_cb465766af36_7ae8188910.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "New York, New York",
        "Royal Naval Dockyard, Bermuda",
        "Royal Naval Dockyard, Bermuda",
        "New York, New York"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-01",
      duration: 5
    },
    {
      price: 759,
      name: "11 Night Mediterranean",
      ship: {
        name: "MSC Lirica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1667237883/production/MSC_Lirica_ship_b159ded12d.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Civitavecchia (Rome), Italy",
        "Messina, Sicily, Italy",
        "Rhodes, Greece",
        "Limassol, Cyprus",
        "Haifa, Israel",
        "Heraklion, Crete, Greece",
        "Genoa, Italy",
        "Civitavecchia (Rome), Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-07",
      duration: 11
    },
    {
      price: 7306,
      name: "7 Night Galapagos Southern Loop",
      ship: {
        name: "Celebrity Xploration",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1652294316/production/small_Celebrity_Xploration_09ff8b8f4b.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Mosquera Islet, Galapagos",
        "Isla Baltra, Galapagos Islands",
        "Dragon Hill (santa Cruz), Galapagos Islands",
        "Isla Rabida, Galapagos Islands",
        "Isla Isabela (Caleta Tagus), Galapagos Islands",
        "Isla Isabela (Caleta Tagus), Galapagos Islands",
        "Cormorant Point (Floreana), Galapagos Islands",
        "Galapagos Islands, Ecuador",
        "San Cristobal, Galapagos Islands",
        "Galapagos Islands, Ecuador",
        "Galapagos Islands, Ecuador",
        "Puerto Ayora, Galapagos Islands",
        "Punta Suarez, Galapagos Islands",
        "Espanola (Hood) Island, Ecuador",
        "Isla Baltra, Galapagos Islands",
        "Daphne Island (galapagos)"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 409,
      name: "6 Night Mediterranean",
      ship: {
        name: "MSC Magnifica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244831/production/small_ship_main_image_195312_3267a0fe_2452_4846_856b_4376f3097ca4_1e25cc4a68.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Tenerife, Canary Islands, Spain",
        "Funchal, Madeira, Portugal",
        "Malaga, Spain",
        "Marseille, France",
        "Genoa, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-02",
      duration: 6
    },
    {
      price: 749,
      name: "7 Day Tropical Caribbean",
      ship: {
        name: "Nieuw Statendam",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244831/production/small_ship_main_image_1372501_7dff0563_1421_449e_802d_93f446012d6f_b23ddb4834.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730444/production/line_logo_5_ed91fe81_edf0_4cbb_a115_aa5495bbf2dc_3f0bbebc13.jpg",
          name: "Holland America Line"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Half Moon Cay (Little San Salvador Island), Bahamas",
        "Grand Turk, Turks and Caicos",
        "Amber Cove, Dominican Republic",
        "Key West, Florida",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 569,
      name: "7 Night Caribbean",
      ship: {
        name: "Sky Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1666981922/production/small_sky_princess_ship_a82c702608.webp",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Princess Cays, Bahamas",
        "St. Thomas, U.S. Virgin Islands",
        "St. Maarten, Netherlands Antilles",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-03",
      duration: 7
    },
    {
      price: 1899,
      name: "14 Night India & Sri Lanka Voyage",
      ship: {
        name: "Azamara Quest",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1660236470/production/small_azamara_quest_6bcb574fe4.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047597/production/19_aza_logo_sm_rgb_horizontal_orig_03bba7fde7.jpg",
          name: "Azamara"
        }
      },
      itinerary: [
        "Dubai, United Arab Emirates",
        "Mumbai (Bombay), India",
        "Cochin, India",
        "Colombo, Sri Lanka",
        "Colombo, Sri Lanka",
        "Hambantota, Sri Lanka",
        "Sabang, Indonesia",
        "Singapore, Singapore"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-10",
      duration: 14
    },
    {
      price: 999,
      name: "12 Night Hawaii",
      ship: {
        name: "Norwegian Spirit",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244883/production/small_ship_main_image_214_8531c1f5_91e0_4077_a91e_2ab3fffff4b1_e92641f142.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Honolulu, Oahu, Hawaii",
        "Port Allen (Nawiliwili), Kauai, Hawaii",
        "Port Allen (Nawiliwili), Kauai, Hawaii",
        "Kahului, Maui, Hawaii",
        "Hilo, Hawaii",
        "Raiatea, French Polynesia",
        "Bora Bora, French Polynesia",
        "Papeete, Tahiti, French Polynesia",
        "Moorea, French Polynesia",
        "Papeete, Tahiti, French Polynesia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-26",
      returnDate: "2022-12-08",
      duration: 12
    },
    {
      price: 1298.5,
      name: "11 Night Panama Canal & S. Caribbean",
      ship: {
        name: "Celebrity Edge",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244720/production/small_ship_main_image_1370341_2dec52d4_f450_46ae_a750_8b4a071865dc_c0ceae8508.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Port of Oranjestad, Aruba, Caribbean",
        "Willemstad, Curacao",
        "Kralendijk, Bonaire, Dutch Antilles",
        "Panama Canal, Panama",
        "Colon, Panama",
        "Cartagena, Colombia",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-02",
      duration: 11
    },
    {
      price: 1459,
      name: "4 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Independence of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245324/production/small_ship_main_image_626_26eb9121_3b72_41e9_a75e_8cf9e40c0a5a_a00f6d14b5.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Nassau, Bahamas",
        "Perfect Day at CocoCay",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-25",
      duration: 4
    },
    {
      price: 268,
      name: "4 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Liberty Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1653676455/production/small_lots_6257ed50cc.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Perfect Day at CocoCay",
        "Nassau, Bahamas",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-25",
      duration: 4
    },
    {
      price: 576,
      name: "Carnival Journeys",
      ship: {
        name: "Carnival Splendor",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244621/production/small_ship_main_image_53974_1858b453_c575_434c_be36_698332e78148_4c76b91247.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730864/production/line_logo_13_faa530da_d942_4029_a79e_f93ae7e02522_6cf41e3ef5.png",
          name: "Carnival Cruise Line"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Wellington, New Zealand",
        "Dunedin, New Zealand",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-01",
      duration: 10
    },
    {
      price: 4499,
      name: "21 Night Australia Cruise",
      ship: {
        name: "Regatta",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1651593274/production/small_ship_main_image_167_b9950b9e_670a_42d1_bdee_4ea7a0fa87de_f05d4afff4_8821e097c8.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649729888/production/line_logo_1_82665b60_d05e_447f_87ee_2bca91dd0edf_64a5ad8717.jpg",
          name: "Oceania Cruises"
        }
      },
      itinerary: [
        "Singapore, Singapore",
        "Semarang, Java, Indonesia",
        "Bali, Indonesia",
        "Bali, Indonesia",
        "Broome, Australia",
        "Perth (Fremantle), Australia",
        "Perth (Fremantle), Australia",
        "Busselton, Australia",
        "PENNESHAW (KANGAROO ISLAND), Australia",
        "Adelaide, Australia",
        "Melbourne, Australia",
        "Burnie, Tasmania",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-12",
      duration: 21
    },
    {
      price: 1229,
      name: "8 NIGHT Southeast Asia CRUISE",
      ship: {
        name: "Diamond Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245265/production/small_ship_main_image_128_d5e3e606_7a00_4fec_92be_61289640727a_77f3dabe74.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Tokyo, Japan",
        "Keelung (Taipei), Taiwan",
        "Ishigaki, Ryukyu Island",
        "Okinawa (Naha), Japan",
        "Tokyo, Japan"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-29",
      duration: 8
    },
    {
      price: 879,
      name: "8 Night Europe",
      ship: {
        name: "Norwegian Sun",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244880/production/ship_main_image_92_bca12a8d_f3bb_4f50_a8c4_cfd5e43b2874_82bb1cd7f7.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "Las Palmas, Gran Canaria, Canary Islands",
        "Arrecife, Lanzarote, Canary Islands",
        "Gibraltar, British Territory",
        "Malaga, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-29",
      duration: 8
    },
    {
      price: 2199,
      name: "20 NIGHT Southeast Asia CRUISE",
      ship: {
        name: "Diamond Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245265/production/small_ship_main_image_128_d5e3e606_7a00_4fec_92be_61289640727a_77f3dabe74.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Tokyo, Japan",
        "Keelung (Taipei), Taiwan",
        "Ishigaki, Ryukyu Island",
        "Okinawa (Naha), Japan",
        "Tokyo, Japan",
        "Shimizu, Japan",
        "Kobe, Japan",
        "Keelung (Taipei), Taiwan",
        "Hong Kong, Hong Kong SAR, China",
        "Nha Trang, Vietnam",
        "Ho Chi Minh City (Saigon), Vietnam",
        "Singapore, Singapore"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-11",
      duration: 20
    },
    {
      price: 729,
      name: "10 Night Europe",
      ship: {
        name: "Norwegian Sun",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244880/production/ship_main_image_92_bca12a8d_f3bb_4f50_a8c4_cfd5e43b2874_82bb1cd7f7.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "Las Palmas, Gran Canaria, Canary Islands",
        "Arrecife, Lanzarote, Canary Islands",
        "Gibraltar, British Territory",
        "Malaga, Spain",
        "Cadiz (Seville), Spain",
        "Lisbon, Portugal"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-01",
      duration: 10
    },
    {
      price: 899,
      name: "10 Night Ultimate Southern Caribbean",
      ship: {
        name: "Celebrity Equinox",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244723/production/small_ship_main_image_195023_5e0eb947_d8fe_4fe0_a8d0_7b6d1fd4ae38_c57744af7b.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Bridgetown, Barbados",
        "Fort-de-France, Martinique",
        "Castries, St. Lucia",
        "St. John's, Antigua",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-01",
      duration: 10
    },
    {
      price: 468,
      name: "7 Night Mediterranean",
      ship: {
        name: "MSC Grandiosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244860/production/small_ship_main_image_1376249_98ac57ac_29a1_4c8c_838c_bd80fbf12948_09732966c4.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "Civitavecchia (Rome), Italy",
        "Palermo, Sicily, Italy",
        "Valletta, Malta",
        "Barcelona, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-12-02",
      duration: 7
    },
    {
      price: 6109,
      name: "14 Day Panama Canal Quest",
      ship: {
        name: "Seabourn Quest",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1666891283/production/small_Seabourn_Quest_ship_f0ff13e8c3.webp",
        line: {
          logo: null,
          name: "Seabourn Cruise Line"
        }
      },
      itinerary: [],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-12-09",
      duration: 14
    },
    {
      price: 249,
      name: "7 Night Mediterranean - Western Cruise",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Palma de Mallorca, Spain",
        "Barcelona, Spain",
        "Marseille, France",
        "Genoa, Italy",
        "La Spezia (Cinque Terre), Italy",
        "Naples, Italy",
        "Palma de Mallorca, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-12-02",
      duration: 7
    },
    {
      price: 449,
      name: "10 Night Southern Caribbean Cruise",
      ship: {
        name: "Vision Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245405/production/small_ship_main_image_55_2dc2d0f4_90ab_4cf9_b007_4a91efc8f01e_4c1b5d485e.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Labadee (Labadie), Haiti",
        "San Juan, Puerto Rico",
        "Philipsburg, St. Maarten",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Castries, St. Lucia",
        "St. John's, Antigua",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-12-05",
      duration: 10
    },
    {
      price: 824,
      name: "3 Night Ensenada Cruise",
      ship: {
        name: "Navigator Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245325/production/small_ship_main_image_116_3a1e2c10_d98c_4f62_b873_90e10d38f84c_ba82c91be0.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Los Angeles, California",
        "Ensenada, Mexico",
        "Los Angeles, California"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-28",
      duration: 3
    },
    {
      price: 279,
      name: "3 Night Bahamas",
      ship: {
        name: "Norwegian Sky",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244883/production/small_ship_main_image_173_75f0e94c_1a28_4aa9_bef7_502bebea0413_cccfda987a.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Miami, Florida",
        "Great Stirrup Cay, Bahamas",
        "Nassau, Bahamas",
        "Miami, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-28",
      duration: 3
    },
    {
      price: 899,
      name: "4 Night Europe",
      ship: {
        name: "Queen Victoria",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244802/production/small_ship_main_image_201_73741be1_5b88_45e3_b947_d5b653178b6b_97abf769e6.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650049064/production/Cunard_Logo_3440e8a658.jpg",
          name: "Cunard"
        }
      },
      itinerary: [
        "Southampton, England",
        "Amsterdam, The Netherlands",
        "Amsterdam, The Netherlands",
        "Southampton, England"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-29",
      duration: 4
    },
    {
      price: 998,
      name: "3 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Independence of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245324/production/small_ship_main_image_626_26eb9121_3b72_41e9_a75e_8cf9e40c0a5a_a00f6d14b5.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Nassau, Bahamas",
        "Perfect Day at CocoCay",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-11-28",
      duration: 3
    },
    {
      price: 1109,
      name: "11 Night Mediterranean",
      ship: {
        name: "MSC Lirica",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1667237883/production/MSC_Lirica_ship_b159ded12d.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Genoa, Italy",
        "Civitavecchia (Rome), Italy",
        "Messina, Sicily, Italy",
        "Rhodes, Greece",
        "Limassol, Cyprus",
        "Haifa, Israel",
        "Heraklion, Crete, Greece",
        "Genoa, Italy"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-12-06",
      duration: 11
    },
    {
      price: 249,
      name: "7 Night Europe",
      ship: {
        name: "MSC Virtuosa",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
          name: "MSC Cruises"
        }
      },
      itinerary: [
        "Southampton, England",
        "Hamburg, Germany",
        "Rotterdam, The Netherlands",
        "Zeebrugge (Bruges), Belgium",
        "Le Havre (Paris), France",
        "Southampton, England"
      ],
      region: "Caribbean",
      departureDate: "2022-11-25",
      returnDate: "2022-12-02",
      duration: 7
    },
    {
      price: 499,
      name: "5 Night Western Caribbean & Bahamas",
      ship: {
        name: "Mariner Of The Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245402/production/small_ship_main_image_162_3228fec2_67bd_4d5b_b371_4ec2e768be4e_88cf2eea3c.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Perfect Day at CocoCay",
        "Cozumel, Mexico",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-26",
      duration: 5
    },
    {
      price: 4499,
      name: "21 Night Australia Cruise",
      ship: {
        name: "Regatta",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1651593274/production/small_ship_main_image_167_b9950b9e_670a_42d1_bdee_4ea7a0fa87de_f05d4afff4_8821e097c8.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649729888/production/line_logo_1_82665b60_d05e_447f_87ee_2bca91dd0edf_64a5ad8717.jpg",
          name: "Oceania Cruises"
        }
      },
      itinerary: [
        "Singapore, Singapore",
        "Semarang, Java, Indonesia",
        "Bali, Indonesia",
        "Bali, Indonesia",
        "Broome, Australia",
        "Perth (Fremantle), Australia",
        "Perth (Fremantle), Australia",
        "Busselton, Australia",
        "PENNESHAW (KANGAROO ISLAND), Australia",
        "Adelaide, Australia",
        "Melbourne, Australia",
        "Burnie, Tasmania",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-12",
      duration: 21
    },
    {
      price: 1229,
      name: "8 NIGHT Southeast Asia CRUISE",
      ship: {
        name: "Diamond Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245265/production/small_ship_main_image_128_d5e3e606_7a00_4fec_92be_61289640727a_77f3dabe74.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Tokyo, Japan",
        "Keelung (Taipei), Taiwan",
        "Ishigaki, Ryukyu Island",
        "Okinawa (Naha), Japan",
        "Tokyo, Japan"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-29",
      duration: 8
    },
    {
      price: 2199,
      name: "20 NIGHT Southeast Asia CRUISE",
      ship: {
        name: "Diamond Princess",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245265/production/small_ship_main_image_128_d5e3e606_7a00_4fec_92be_61289640727a_77f3dabe74.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649727921/production/Princess2020_1_Line_RGB_2_Color_c23999dc2a.jpg",
          name: "Princess Cruises"
        }
      },
      itinerary: [
        "Tokyo, Japan",
        "Keelung (Taipei), Taiwan",
        "Ishigaki, Ryukyu Island",
        "Okinawa (Naha), Japan",
        "Tokyo, Japan",
        "Shimizu, Japan",
        "Kobe, Japan",
        "Keelung (Taipei), Taiwan",
        "Hong Kong, Hong Kong SAR, China",
        "Nha Trang, Vietnam",
        "Ho Chi Minh City (Saigon), Vietnam",
        "Singapore, Singapore"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-11",
      duration: 20
    },
    {
      price: 599,
      name: "10 Night Eastern Caribbean Cruise",
      ship: {
        name: "Celebrity Silhouette",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244700/production/small_ship_main_image_543631_e5ae3c34_9d09_4be0_979f_7169e7f9c08c_6b5c795761.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Miami, Florida",
        "San Juan, Puerto Rico",
        "St. Croix, U.S. Virgin Islands",
        "St. John's, Antigua",
        "Port of Basseterre, St. Kitts, St. Kitts and Nevis",
        "Philipsburg, St. Maarten",
        "Miami, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-01",
      duration: 10
    },
    {
      price: 1459,
      name: "4 Night Bahamas & Perfect Day Cruise",
      ship: {
        name: "Independence of the Seas",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649245324/production/small_ship_main_image_626_26eb9121_3b72_41e9_a75e_8cf9e40c0a5a_a00f6d14b5.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1650047283/production/Royal_Caribbean_Logo_7bf92b5951.jpg",
          name: "Royal Caribbean International"
        }
      },
      itinerary: [
        "Port Canaveral, Florida",
        "Nassau, Bahamas",
        "Perfect Day at CocoCay",
        "Port Canaveral, Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-25",
      duration: 4
    },
    {
      price: 576,
      name: "Carnival Journeys",
      ship: {
        name: "Carnival Splendor",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244621/production/small_ship_main_image_53974_1858b453_c575_434c_be36_698332e78148_4c76b91247.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730864/production/line_logo_13_faa530da_d942_4029_a79e_f93ae7e02522_6cf41e3ef5.png",
          name: "Carnival Cruise Line"
        }
      },
      itinerary: [
        "Sydney, Australia",
        "Wellington, New Zealand",
        "Dunedin, New Zealand",
        "Sydney, Australia"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-01",
      duration: 10
    },
    {
      price: 1298.5,
      name: "11 Night Panama Canal & S. Caribbean",
      ship: {
        name: "Celebrity Edge",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244720/production/small_ship_main_image_1370341_2dec52d4_f450_46ae_a750_8b4a071865dc_c0ceae8508.png",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730675/production/line_logo_8_e6f7e3f5_ddda_4cc2_b64a_31034e383c06_27c94556ac.png",
          name: "Celebrity Cruises"
        }
      },
      itinerary: [
        "Fort Lauderdale (Port Everglades), Florida",
        "Port of Oranjestad, Aruba, Caribbean",
        "Willemstad, Curacao",
        "Kralendijk, Bonaire, Dutch Antilles",
        "Colon, Panama",
        "Panama Canal, Panama",
        "Cartagena, Colombia",
        "Fort Lauderdale (Port Everglades), Florida"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-02",
      duration: 11
    },
    {
      price: 729,
      name: "10 Night Europe",
      ship: {
        name: "Norwegian Sun",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244880/production/ship_main_image_92_bca12a8d_f3bb_4f50_a8c4_cfd5e43b2874_82bb1cd7f7.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "Las Palmas, Gran Canaria, Canary Islands",
        "Arrecife, Lanzarote, Canary Islands",
        "Gibraltar, British Territory",
        "Malaga, Spain",
        "Cadiz (Seville), Spain",
        "Lisbon, Portugal"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-12-01",
      duration: 10
    },
    {
      price: 879,
      name: "8 Night Europe",
      ship: {
        name: "Norwegian Sun",
        rating: 4.5,
        reviews: 123,
        image: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649244880/production/ship_main_image_92_bca12a8d_f3bb_4f50_a8c4_cfd5e43b2874_82bb1cd7f7.jpg",
        line: {
          logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649730379/production/line_logo_4_539b0d9d_8661_4556_810e_da0ac33c1aac_1820d6dc08.png",
          name: "Norwegian Cruise Line"
        }
      },
      itinerary: [
        "Lisbon, Portugal",
        "Funchal, Madeira, Portugal",
        "Las Palmas, Gran Canaria, Canary Islands",
        "Arrecife, Lanzarote, Canary Islands",
        "Gibraltar, British Territory",
        "Malaga, Spain"
      ],
      region: "Caribbean",
      departureDate: "2022-11-21",
      returnDate: "2022-11-29",
      duration: 8
    }
  ]
    