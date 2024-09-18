import highlightfirstvideos from './highlights1.mp4';
import highlightsecondvideos from './game video 1.mp4';
import highlightthirdvideos from './game video2.mp4';
import highlightfourthvideos from './highlights2.mp4';
import elden_ring from './eldenring.jpg';
import god_of_war from './god 2018.webp';
import horizon from './horizpn zero dawn.jpeg';
import last_ofus from './last of us.jpg';
import cyberpunk from './punkcyber[i.jpeg';
import spiderMan from './spiderman.jpeg';
import spiderMan2 from './spiderman sec2.jpg';
import gta from './gta.png';

export const highlightsSlides = [
    {
        id:1,
        textLists: [
            //'Adaptive Triggers',
            //'Immersive play with the DualSense wireless controller',
            ' Run by AMD Gen-4 CPU',
            'Paired with Next-Gen RDNA 3 GPU',
        ],
        video: highlightfirstvideos,
        videoDuration:14,
    },
    {
        id:2,
        textLists: [
            'Adaptive Triggers',
            'Immersive play with the DualSense wireless controller',
 
        ],
        video: highlightsecondvideos,
        videoDuration:1, 
    },
    {
        id:3,
        textLists: [
            'Haptic Feedbacl',
            'Responsive vibrations react to your in-game choices',
 
        ],
        video: highlightthirdvideos,
        videoDuration:1, 
    },
    {
        id:4,
        textLists: [
            '32GB of GDDR6 SDRAM ',
            "Doubling the PS5's capacity",
 
        ],
        video: highlightfourthvideos,
        videoDuration:9, 
    }
]

export const games= [
    {
        id: 1,
        image: elden_ring,
        text1: 'Elden Ring',
        text2: "An action RPG set in a dark fantasy world where players, as a Tarnished, explore a vast open land, battle tough enemies, and seek to reassemble the Elden Ring to become the Elden Lord. "
    },
    {
        id: 2,
        image: god_of_war,
        text1: 'God of War Ragnorok',
        text2: " An action-adventure game where Kratos and his son Atreus face the impending Norse apocalypse, Ragnarök."
    },
    {
        id: 3,
        image: horizon,
        text1: 'Horizon Zero Dawn',
        text2: "Explore distant lands, fight  more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon."
    },
    {
        id: 4,
        image: last_ofus,
        text1: 'The Last of Us',
        text2: "Five years after the events of The Last of Us, Ellie embarks on another journey through a post-apocalyptic America on a mission of vengeance against a mysterious militia"
    },
    {
        id:5,
        image:cyberpunk,
        text1: 'Cyberpunk',
        text2: 'In Night City, a mercenary known as V navigates a dystopian society in which the line between humanity and technology becomes blurred.'
    },
    {
        id:6,
        image: spiderMan,
        text1: "Marvel's SpiderMan",
        text2: "When a new villain threatens New York City, Peter Parker and Spider-Man's worlds collide. To save the city and those he loves, he must rise up and be greater."
    },
    {
        id:7,
        image: spiderMan2,
        text1: "Marvel's SpiderMan",
        text2: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel's Spider-Man franchise."
    },
    {
        id:8,
        image: gta,
        text1: 'Grand Theft Autp VI',
        text2: "Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet."
    }

]