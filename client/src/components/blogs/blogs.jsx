import Blog_1 from '../../assets/images/blog-1.jpg'
import Blog_2 from '../../assets/images/blog-2.jpg'
import Blog_3 from '../../assets/images/blog-3.jpg'
import Blog_4 from '../../assets/images/blog-4.jpg'

export default function BlogPage() {
  return (
    <div className="my-16">
      <h1 className="mb-7 text-4xl font-bold">Latest Blog Posts</h1>
      <div className="">
        <div className="p-6 flex gap-6 rounded-md shadow-inner">
          <span>
            <h2 className="mb-2 text-xl font-bold">Embarking on a Journey through Nature&lsquo;s Beauty</h2>
            <p className="mb-6 text-sm text-gray-500">Published on September 5, 2023</p>
            <p className="mb-3">
              Delve into the enchanting world of nature as we explore breathtaking landscapes, hidden gems,
              and the awe-inspiring wonders that Mother Earth has to offer. Join us on this virtual journey
              filled with captivating stories and mesmerizing visuals.
            </p>
            <p className="mb-3">
              Traverse dense forests echoing with the melodies of birds, witness the dance of vibrant
              wildflowers, and stand in awe before majestic waterfalls that cascade down rugged cliffs.
              Immerse yourself in the tranquility of nature, finding solace in its unspoiled beauty.
            </p>
            <p className="">
              Whether you are an avid nature enthusiast or someone seeking a moment of serenity,
              this exploration promises to ignite your sense of wonder and appreciation for the natural world.
              Join our community of fellow adventurers as we share tales of exploration and celebrate the
              unparalleled beauty of our planet.
            </p>
          </span>
          <img
            src={Blog_1}
            alt="Exploring the Wonders of Nature"
            className="w-96 object-cover rounded-md"
          />
        </div>

        <div className="mt-10 p-6 flex gap-6 rounded-md shadow-inner">
          <img
            src={Blog_2}
            alt="Tips for Budget Traveling"
            className="w-96 object-cover rounded-md"
          />
          <span>
            <h2 className="mb-2 text-xl font-bold">Smart Strategies for Budget-Friendly Travel Adventures</h2>
            <p className="mb-6 text-sm text-gray-500">Published on October 2, 2023</p>
            <p className="mb-3">
              Discover practical tips and tricks for maximizing your travel experiences on a budget.
              From finding affordable accommodations to uncovering hidden gems, learn how to make the
              most of your adventures without breaking the bank.
            </p>
            <p className="mb-3">
              Embark on a journey that proves that memorable and fulfilling travel experiences don&lsquo;t
              have to come with a hefty price tag. Explore budget-friendly destinations that offer
              rich cultural experiences, savor local cuisines, and engage with communities in meaningful ways.
            </p>
            <p className="">
              Dive into the world of travel hacking, discovering insider secrets to score affordable
              flights and explore new destinations without straining your wallet. Uncover the art of
              budget planning and resourceful travel, ensuring that your next adventure is not only
              unforgettable but also light on the pocket.
            </p>
          </span>
        </div>

        <div className="p-6 flex gap-6 rounded-md shadow-inner">
          <span>
            <h2 className="mb-2 text-xl font-bold">Taj Mahal, Agra</h2>
            <p className="mb-6 text-sm text-gray-500">Published on November 6, 2023</p>
            <p className="mb-3">
              The Taj Mahal, an iconic masterpiece located in Agra, India, is a symbol of eternal love and architectural grandeur. Built by Emperor Shah Jahan in the 17th century as a tribute to his beloved wife Mumtaz Mahal, the mausoleum is a marvel of white marble intricacy. Its perfectly symmetrical design, adorned with delicate floral patterns and Quranic inscriptions, showcases the pinnacle of Mughal architecture.
            </p>
            <p className="">
              Surrounded by meticulously landscaped gardens and reflective pools, the Taj Mahal exudes a serene and ethereal ambiance. The four towering minarets and the central dome create a harmonious composition, changing hues with the shifting sunlight. Recognized as a UNESCO World Heritage Site and one of the New Seven Wonders of the World, the Taj Mahal continues to captivate the world with its timeless beauty and poignant love story, making it a must-visit destination for travelers from around the globe.
            </p>
          </span>
          <img
            src={Blog_3}
            alt="Exploring the Wonders of Nature"
            className="w-96 object-cover rounded-md"
          />
        </div>

        <div className="mt-10 p-6 flex gap-6 rounded-md shadow-inner">
          <img
            src={Blog_4}
            alt="Tips for Budget Traveling"
            className="w-96 object-cover rounded-md"
          />
          <span>
            <h2 className="mb-2 text-xl font-bold">The Great Pyramid of Giza, Egypt</h2>
            <p className="mb-6 text-sm text-gray-500">Published on December 3, 2023</p>
            <p className="mb-3">
              The Great Pyramid of Giza, situated on the outskirts of Cairo, Egypt, stands as a monumental testament to ancient Egyptian ingenuity and engineering prowess. Constructed during the reign of Pharaoh Khufu over 4,500 years ago, the pyramid is the largest of the three pyramids on the Giza Plateau and is considered one of the Seven Wonders of the Ancient World. Rising to a height of 146 meters (481 feet), the Great Pyramid was originally clad in smooth Tura limestone, reflecting sunlight and making it shine like a &ldquo;gem&rdquo; on the horizon
            </p>
            <p className="">
              The pyramid&lsquo;s construction remains a subject of fascination and mystery, with theories abound about the techniques employed by ancient Egyptians to transport and precisely position the massive stone blocks. The inner chambers, including the King&lsquo;s Chamber and the Queen&lsquo;s Chamber, reveal intricate architectural features and hieroglyphic inscriptions. Serving as a tomb for Pharaoh Khufu, the Great Pyramid continues to be a source of awe, attracting millions of visitors each year who come to marvel at its colossal size and ponder the mysteries of its construction. As an enduring symbol of ancient Egypt, the Great Pyramid of Giza stands as a testament to the remarkable achievements of a civilization that left an indelible mark on human history.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
