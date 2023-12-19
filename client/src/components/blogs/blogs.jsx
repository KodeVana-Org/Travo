import Blog_1 from '../../assets/blog-1.jpg'
import Blog_2 from '../../assets/blog-2.jpg'

export default function BlogPage() {
  return (
    <div className="my-16">
      <h1 className="mb-7 text-4xl font-bold">Latest Blog Posts</h1>
      <div className="">
        <div className="p-6 flex gap-6 rounded-md shadow-inner">
          <span>
            <h2 className="mb-2 text-xl font-bold">Embarking on a Journey through Nature&lsquo;s Beauty</h2>
            <p className="mb-6 text-sm text-gray-500">Published on October 15, 2023</p>
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
            className="w-full object-cover rounded-md"
          />
        </div>

        <div className="mt-10 p-6 flex gap-6 rounded-md shadow-inner">
          <img
            src={Blog_2}
            alt="Tips for Budget Traveling"
            className="w-full object-cover rounded-md"
          />
          <span>
            <h2 className="mb-2 text-xl font-bold">Smart Strategies for Budget-Friendly Travel Adventures</h2>
            <p className="mb-6 text-sm text-gray-500">Published on November 1, 2023</p>
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
      </div>
    </div>
  );
}
