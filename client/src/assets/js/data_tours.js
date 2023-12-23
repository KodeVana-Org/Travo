import Tour1 from '../images/tour-1.jpg'
import Tour2 from '../images/tour-2.jpg'
import Tour3 from '../images/tour-3.jpg'
import Tour4 from '../images/tour-4.jpg'
import Tour5 from '../images/tour-5.jpg'
import Tour6 from '../images/tour-6.jpg'
import Tour7 from '../images/tour-7.jpg'
import Tour8 from '../images/tour-8.jpg'
import Tour9 from '../images/tour-9.jpg'
import Tour10 from '../images/tour-10.jpg'

const toursData = [
  {
    id: 1,
    name: 'Swiss Alps, Switzerland',
    image: Tour1,
    link: '/tour1',
    price: '895',
    duration: '1 week group tour',
    daysToGo: '7 Days to go',
    isNew: true,
    details: "Immerse yourself in the breathtaking landscapes of the Swiss Alps, renowned for their pristine snow-capped peaks, picturesque villages, and crystal-clear lakes. Visitors can indulge in a variety of activities, from skiing in renowned resorts like Zermatt and Verbier to hiking the scenic trails of the Jungfrau region. Explore charming alpine towns, savor Swiss cuisine in cozy mountain chalets, and take in the awe-inspiring vistas of the Matterhorn and Eiger"
  },
  {
    id: 2,
    name: 'Banff National Park, Canada',
    image: Tour2,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "A UNESCO World Heritage site, Banff National Park offers a wilderness haven of towering peaks, turquoise lakes, and abundant wildlife. Adventure seekers can partake in activities such as hiking, skiing, and canoeing against the backdrop of iconic landmarks like Lake Louise and Moraine Lake. The town of Banff provides a perfect blend of outdoor adventure and charming hospitality, making it an ideal base for exploring the stunning Canadian Rockies"
  },
  {
    id: 3,
    name: 'Himalayas, Nepal',
    image: Tour3,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Embark on a spiritual and adventurous journey in the Nepalese Himalayas. Trek to the base camp of Mount Everest, the world's highest peak, or explore the serene Annapurna region with its diverse landscapes and vibrant local culture. The Himalayas offer not only challenging trekking routes but also opportunities for spiritual exploration in ancient monasteries and a chance to witness the majestic sunrise over the towering peaks"
  },
  {
    id: 4,
    name: 'Lake Bled, Slovenia',
    image: Tour4,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Lake Bled is a postcard-perfect destination, featuring a crystal-clear lake surrounded by lush greenery and the medieval Bled Castle perched on a hill. The lake is famous for its island, Blejski Otok, home to the iconic Church of the Assumption. Visitors can take a traditional Pletna boat or rowboat to reach the island, where they can ring the church bell and enjoy panoramic views of the Julian Alps. The lakeside promenade offers charming cafes and a perfect spot to savor the famous Bled Cream Cake while admiring the serene landscape"
  },
  {
    id: 5,
    name: 'Container Haus, Germany',
    image: Tour5,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Container Haus is a unique accommodation that utilizes shipping containers for a modern and sustainable living experience. It provides an opportunity to stay in a container house while enjoying the scenic beauty of the surrounding hilly areas"
  },
  {
    id: 6,
    name: 'Patagonian Andes, Argentina and Chile',
    image: Tour6,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Discover the untamed beauty of the Patagonian Andes, characterized by glaciers, fjords, and rugged peaks. Explore the awe-inspiring Torres del Paine National Park, where dramatic landscapes unfold around every corner. Activities range from hiking and horseback riding to boat trips to witness the towering glaciers. With its remote and pristine wilderness, Patagonia provides an unforgettable escape for nature enthusiasts and adventure seekers"
  },
  {
    id: 7,
    name: 'The Dolomites, Italy',
    image: Tour7,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "A UNESCO World Heritage site, the Dolomites offer a unique blend of jagged peaks, alpine meadows, and charming villages. Known for their distinctive pink-hued rock formations, the Dolomites provide a playground for outdoor enthusiasts. Visitors can engage in activities such as via ferrata climbing, hiking, and skiing in winter. The region also boasts a rich cultural heritage, with traditional Tyrolean architecture and delicious Italian cuisine, creating a perfect mountain getaway"
  },
  {
    id: 8,
    name: 'Skydive Dubai - Palm Jumeirah Drop Zone',
    image: Tour8,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Experience the ultimate adrenaline rush at Skydive Dubai's Palm Jumeirah Drop Zone. Soar from 13,000 feet, freefalling over the iconic Palm Jumeirah. Marvel at the breathtaking views of luxury residences, the Arabian Gulf, and Dubai's skyline. Tandem skydiving, suitable for all levels, ensures a thrilling yet safe adventure. The landing by the beach adds a perfect finish to this unforgettable Dubai skyline dive"
  },
  {
    id: 9,
    name: 'InterContinental Davos, Switzerland',
    image: Tour9,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Discover luxury elevated. InterContinental Davos crowns the Swiss Alps, offering breathtaking mountain views. With modern design and panoramic windows, it blends seamlessly with the alpine landscape. Enjoy upscale amenities, fine dining, and winter skiing or summer hikes. A mountain retreat where nature meets indulgence"
  },
  {
    id: 10,
    name: 'Lake Louise, Canada',
    image: Tour10,
    link: '/tour2',
    price: '750',
    duration: '1 week group tour',
    daysToGo: '10 Days to go',
    isNew: false,
    details: "Surrounded by snow-capped peaks and glaciers, Lake Louise is renowned for its mesmerizing turquoise waters. The lake is fed by meltwater from the Victoria Glacier, creating a stunning visual contrast against the surrounding mountains. In the summer, visitors can canoe on the lake, hike the nearby trails, or enjoy a leisurely stroll along the lakeshore. During the winter, the frozen lake becomes a magical ice-skating rink, and the surrounding area transforms into a winter wonderland for activities like cross-country skiing and snowshoeing. The Fairmont Chateau Lake Louise, an iconic hotel, graces the shoreline, offering luxurious accommodations with unparalleled views of the lake and mountains"
  },
];

export default toursData;