/* eslint-disable linebreak-style */
const speakers = [
  {
    name: 'Yochai Benkler',
    img: './assets/headshots/yochai.jpg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies, Harvard Law School',
    description: 'Benkler studies commons-based peer production, the Internet, and the law. He is the author of The Wealth of Networks: How Social Production Transforms Markets and Freedom (Yale University Press, 2006).',
  },
  {
    name: 'SohYeong Noh',
    img: './assets/headshots/sohyeung.jpg',
    title:
          'Director of Art Center Nabi, Seoul, Korea and Board Member of Creative Commons Korea',
    description:
          'As the main venue for new media art production in Korea, Nabi promotes cross-discliplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Ryan Merkley',
    img: './assets/headshots/ryan.jpg',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
          'Ryan had been leading open source and open data projects for over 15 years. He is the co-founder of the Open Source Initiative, the Open Source Hardware Association, and the Open Data Institute.',
  },
  {
    name: 'Lila Tretikov',
    img: './assets/headshots/lila.jpg',
    title:
      'Executive Director of Creative Commons, Former Executive Director of the Wikimedia Foundation',
    description:
      'Lila Tretikov is the Executive Director of Creative Commons, a nonprofit organization that enables the sharing and use of creativity and knowledge through free legal tools. She is also a member of the Board of Directors of the Open Technology Institute at New America.',
  },
  {
    name: 'Julia Leda',
    img: './assets/headshots/julia.png',
    title:
          'President of Young Pirates of Europe, Member of the European Parliament',
    description:
          'European ingetration, political democracy, and participation of youth through online as her major condemn, Redia’s report outlines the need for a new European political culture, based on the principles of openness, transparency, and participation.',
  },
  {
    name: 'Kilnam Chon',
    img: './assets/headshots/kilnam.jpg',
    title: '',
    description:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society’s Internet Hall of Fame. He is currently the CEO of the Internet Society.',
  },
];

const programmes = [
  {
    title: 'Keynotes',
    icon: './assets/img/keynote.png',
    details: 'Listen to speakers from various countries speaking about the impact of professional web development',
  },
  {
    title: 'Exhibition',
    icon: './assets/img/exhibition.png',
    details: 'Listen to speakers from various countries speaking about the impact of professional web development',

  },
  {
    title: 'Workshop',
    icon: './assets/img/workshop.png',
    details: 'Listen to speakers from various countries speaking about the impact of professional web development',

  },
  {
    title: 'Forum',
    icon: './assets/img/forum.png',
    details: 'Listen to speakers from various countries speaking about the impact of professional web development',

  },
  {
    title: 'Networking',
    icon: './assets/img/networking.png',
    details: 'Listen to speakers from various countries speaking about the impact of professional web development',

  },
];

const programmeCards = document.querySelector('#programme-cards');
const hamburger = document.querySelector('#hamburger');
const menuWindow = document.querySelector('#menu-window');
const closeBtn = document.querySelector('#close-btn');
const speakersGrid = document.querySelector('#speakers-grid');

function disableScroll() {
  const horizontalScroll = window.scrollX;
  const verticalScroll = window.scrollY;
  window.onscroll = () => {
    window.scroll(horizontalScroll, verticalScroll);
  };
}

function enableScroll() {
  window.onscroll = '';
}

hamburger.addEventListener('click', () => {
  menuWindow.style.width = '100vw';
  disableScroll();
});

closeBtn.addEventListener('click', () => {
  menuWindow.style.width = '0';
  enableScroll();
});

speakers.forEach((speaker) => {
  speakersGrid.innerHTML += `
 <div class="grid grid-cols-5 justify-center gap-10">
      <div class="col-span-2 w-44 h-44 md:w-64 md:h-64 xl:w-72 xl:h-72">
        <div class="bottom-0 right-0 rounded-full  drop-shadow-md hover:drop-shadow-xl transition ease-in duration-500 cursor-pointer">
          <img
            class="w-36 h-36 md:w-40 md:h-40 xl:w-64 -z-50 xl:h-64 rounded-full object-cover"
            src=${speaker.img}
            alt=${speaker.name}
          />
        </div>
      </div>
      <div class="col-span-3">
        <h3 class="text-[1.5rem] text-gray-700 font-bold">
          ${speaker.name}
        </h3>
        <p class="mt-2 text-[1.2rem] text-orange-600 italic leading-snug">
          ${speaker.title}
        </p>
        <div class="mt-4 mb-8 w-8 border-t-2 border-gray-300"></div>
        <p class="text-[1.2rem] text-gray-700">
          ${speaker.description}
        </p>
      </div>
    </div>`;
});

programmes.forEach((programme) => {
  programmeCards.innerHTML += `
    <div class="border border-transparent hover:border-white cursor-pointer transition ease-in-out duration-500 grid grid-cols-6 gap-6 md:gap-4 items-center bg-gray-600/50 px-4 py-6 md:px-6 md:py-8 md:text-center">
      <div class="col-span-3 md:col-span-12 flex justify-start md:items-center md:justify-center">
        <img class="w-20 h-20" src=${programme.icon} alt=${programme.title}></img>
      </div>
      <div class="col-span-9 md:col-span-12">
        <h3 class="text-[2rem] text-[#EC5242] font-bold">
        ${programme.title}
        </h3>
        <p class="mt-3 text-[1.5rem] text-gray-300">
          ${programme.details}
        </p>
      </div>
    </div>`;
});