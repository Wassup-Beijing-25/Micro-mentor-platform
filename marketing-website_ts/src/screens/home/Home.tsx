/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { CiLock, CiCloudMoon, CiCamera, CiMusicNote1 } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineStar,
  MdSettingsVoice,
  MdBusinessCenter,
} from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaPenNib } from "react-icons/fa";
import { PiFileHtmlLight, PiEyeglassesBold } from "react-icons/pi";
import { GoDatabase, GoLightBulb } from "react-icons/go";
import { IoFitness } from "react-icons/io5";
import { RiMoneyPoundBoxFill } from "react-icons/ri";

// -------------------- Data Types --------------------

interface Course {
  title: string;
  imgPath: string;
  star: number;
  reviewCount: number;
  tag: string;
  price: number;
}

interface Category {
  icon: ReactNode;
  title: string;
}

interface Instructor {
  name: string;
  role: string;
  img: string;
}

interface FeedbackItem {
  name: string;
  role: string;
  imagePath: string;
  description: string;
}

// -------------------- Static Data --------------------

const popularCourses: Course[] = [
  {
    title: "Mastering HTML5",
    imgPath: "/assets/images/course_img1.png",
    star: 4,
    reviewCount: 12,
    tag: "HTML",
    price: 3000,
  },
  {
    title: "JavaScript for Beginners",
    imgPath: "/assets/images/course_img2.png",
    star: 5,
    reviewCount: 25,
    tag: "JavaScript",
    price: 4500,
  },
  {
    title: "Complete React Guide",
    imgPath: "/assets/images/course_img3.png",
    star: 4.5,
    reviewCount: 40,
    tag: "React",
    price: 5500,
  },
  {
    title: "Node.js Development",
    imgPath: "/assets/images/course_img1.png",
    star: 4.2,
    reviewCount: 18,
    tag: "Node.js",
    price: 6000,
  },
  {
    title: "UI/UX Design",
    imgPath: "/assets/images/course_img2.png",
    star: 4.8,
    reviewCount: 50,
    tag: "Design",
    price: 5000,
  },
];

const popularCategories: Category[] = [
  { icon: <FaPenNib className="text-2xl" />, title: "Design" },
  { icon: <PiFileHtmlLight className="text-2xl" />, title: "Development" },
  { icon: <MdSettingsVoice className="text-2xl" />, title: "Marketing" },
  { icon: <MdBusinessCenter className="text-2xl" />, title: "Business" },
  { icon: <CiCloudMoon className="text-2xl" />, title: "Life Style" },
  { icon: <CiCamera className="text-2xl" />, title: "Photography" },
  { icon: <CiMusicNote1 className="text-2xl" />, title: "Music" },
  { icon: <GoDatabase className="text-2xl" />, title: "Data Science" },
  { icon: <GoLightBulb className="text-2xl" />, title: "Personal" },
  { icon: <IoFitness className="text-2xl" />, title: "Health" },
  { icon: <RiMoneyPoundBoxFill className="text-2xl" />, title: "Finance" },
  { icon: <PiEyeglassesBold className="text-2xl" />, title: "Teaching" },
];

const bestInstructors: Instructor[] = [
  {
    name: "Jacob Jones",
    role: "UI-UX Designer",
    img: "/assets/images/instructor_1.png",
  },
  {
    name: "Jonny Jones",
    role: "Web Developer",
    img: "/assets/images/instructor_2.png",
  },
  {
    name: "Robot Keller",
    role: "Frontend Developer",
    img: "/assets/images/instructor_3.png",
  },
  {
    name: "Jacob Jones",
    role: "UI-UX Designer",
    img: "/assets/images/instructor_4.png",
  },
  {
    name: "Jacob Jones",
    role: "Full Stack Developer",
    img: "/assets/images/instructor_1.png",
  },
  {
    name: "Pin Jones",
    role: "UI-UX Designer",
    img: "/assets/images/instructor/instructor_2.png",
  },
  {
    name: "Jacob Jones",
    role: "Web Designer",
    img: "/assets/images/instructor_3.png",
  },
];

const studentFeedback: FeedbackItem[] = [
  {
    name: "Alice Johnson",
    role: "UI-UX Designer",
    imagePath: "/assets/images/feedback_img1.png",
    description:
      "Alice is a highly creative UI/UX designer with over 5 years of experience in crafting intuitive and engaging user interfaces. She has a deep understanding...",
  },
  {
    name: "Michael Smith",
    role: "Web Developer",
    imagePath: "/assets/images/feedback_img.png",
    description:
      "Michael is a skilled web developer specializing in front‑end and back‑end development with a knack for solving complex problems...",
  },
  {
    name: "Sophia Lee",
    role: "Software Engineer",
    imagePath: "/assets/images/feedback_img1.png",
    description:
      "Sophia is a highly proficient software engineer with expertise in developing scalable software solutions...",
  },
  {
    name: "David Patel",
    role: "Backend Developer",
    imagePath: "/assets/images/feedback_img.png",
    description:
      "David is a backend developer with a strong understanding of server‑side technologies...",
  },
  {
    name: "Emma Davis",
    role: "Frontend Developer",
    imagePath: "/assets/images/feedback_img1.png",
    description:
      "Emma is a dedicated frontend developer who excels at turning design concepts into fully functional web applications...",
  },
  {
    name: "James Carter",
    role: "UI-UX Designer",
    imagePath: "/assets/images/feedback_img.png",
    description:
      "James is an experienced UI‑UX designer who combines creativity with technical expertise...",
  },
];

// -------------------- Reusable Components --------------------

const Button: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="bg-[#20b486] max-w-[180px] text-center text-white px-4 py-3 font-medium rounded-lg cursor-pointer hover:bg-[#76ceb2]">
    {children || "Sign up for Free"}
  </div>
);

interface SliderProps {
  children: ReactNode[];
  width: number;
  isUpdateWidth?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  children,
  width,
  isUpdateWidth = false,
}) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(width);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const mouseStart = useRef<number | null>(null);
  const total = children.length;

  useEffect(() => {
    function updateWidth() {
      setItemWidth(
        isUpdateWidth
          ? window.innerWidth < 768
            ? 300
            : window.innerWidth < 1024
            ? 500
            : 600
          : width
      );
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isUpdateWidth, width]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  }, [scrollPos]);

  const prev = () => {
    const idx = currentIndex === 0 ? total - 1 : currentIndex - 1;
    setCurrentIndex(idx);
    setScrollPos(idx * itemWidth);
  };
  const next = () => {
    const idx = currentIndex === total - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(idx);
    setScrollPos(idx * itemWidth);
  };

  const swipeStart = (x: number) => (touchStart.current = x);
  const swipeEnd = (x: number) => {
    touchEnd.current = x;
    if (touchStart.current !== null && touchEnd.current !== null) {
      const diff = touchStart.current - touchEnd.current;
      Math.abs(diff) > 50 && (diff > 0 ? next() : prev());
    }
  };

  const mouseDown = (x: number) => (mouseStart.current = x);
  const mouseUp = (x: number) => {
    if (mouseStart.current !== null) {
      const diff = mouseStart.current - x;
      Math.abs(diff) > 50 && (diff > 0 ? next() : prev());
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div
        ref={carouselRef}
        className="flex space-x-4 py-4 overflow-x-hidden"
        style={{ scrollSnapType: "x mandatory" }}
        onTouchStart={(e) => swipeStart(e.touches[0].clientX)}
        onTouchEnd={(e) => swipeEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => mouseDown(e.clientX)}
        onMouseUp={(e) => mouseUp(e.clientX)}
      >
        {children.map((child, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: itemWidth }}>
            {child}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {children.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === i ? "bg-[#365CCE]" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentIndex(i);
              setScrollPos(i * itemWidth);
            }}
          />
        ))}
      </div>
    </div>
  );
};

// -------------------- Specific Cards --------------------

const CourseCard: React.FC<{ item: Course }> = ({ item }) => (
  <div className="bg-white max-w-[280px] rounded-2xl shadow-custom hover:shadow-lg select-none">
    <div className="p-4">
      <div className="relative">
        <img
          src={item.imgPath}
          alt={item.title}
          className="rounded-lg w-full h-auto"
        />
        <div className="absolute top-2 left-2 bg-[#cec3b9] px-3 py-1 rounded-md">
          <span>{item.tag}</span>
        </div>
      </div>
      <h3 className="mt-4 font-medium text-xl truncate">{item.title}</h3>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <MdOutlineStar
            key={i}
            className={
              i < Math.floor(item.star) ? "text-starColor" : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-gray-600">({item.reviewCount})</span>
      </div>
    </div>
    <div className="flex justify-between items-center border-t p-4">
      <span className="text-2xl font-semibold">₹{item.price}</span>
      <button className="p-2 rounded-lg hover:bg-[#365CCE] hover:text-white transition">
        <HiArrowUpRight />
      </button>
    </div>
  </div>
);

const InstructorCard: React.FC<{ item: Instructor }> = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-input hover:shadow-lg select-none">
    <img
      src={item.img}
      alt={item.name}
      className="rounded-t-2xl w-full h-auto"
    />
    <div className="p-4 text-center">
      <h4 className="font-semibold text-xl">{item.name}</h4>
      <p className="text-gray-500">{item.role}</p>
    </div>
  </div>
);

const FeedbackCard: React.FC<{ item: FeedbackItem }> = ({ item }) => (
  <div className="relative bg-white rounded-[30px] shadow-custom p-5 select-none hover:shadow-lg">
    <div className="flex items-center">
      <img
        src={item.imagePath}
        alt={item.name}
        className="w-16 h-16 rounded-full"
      />
      <div className="ml-4">
        <h4 className="font-semibold text-2xl">{item.name}</h4>
        <p className="text-gray-500">{item.role}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-800">{item.description}</p>
  </div>
);

// -------------------- Sections --------------------

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Home", "About", "Course", "Blog", "Contact"];
  return (
    <header className="mx-4 border-b-2 md:border-none">
      <nav className="flex justify-between items-center py-5 max-w-[1320px] mx-auto">
        <div className="text-4xl font-bold cursor-pointer hover:scale-95">
          <span className="text-primaryGreen">D</span>
          <span className="text-[#ffa337]">emo</span>
        </div>
        <ul className="hidden md:flex space-x-8 font-medium text-base">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:underline hover:text-[#365CCE]"
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer hover:underline hover:text-[#365CCE] font-medium">
            <CiLock className="text-2xl" />
            <span>Login</span>
          </div>
          <Button />
        </div>
        <div className="flex md:hidden" onClick={() => setOpen(!open)}>
          <img
            src={
              open
                ? "/assets/images/close_menu.svg"
                : "/assets/images/open_menu.svg"
            }
            alt="toggle menu"
          />
        </div>
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-[#365CCE] text-white flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:underline">
                {link}
              </li>
            ))}
            <li className="cursor-pointer flex items-center space-x-2 hover:underline">
              <CiLock className="text-2xl" />
              <span>Login</span>
            </li>
            <li className="cursor-pointer border border-white px-6 py-2 rounded-lg hover:underline">
              Sign up for Free
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

const HeroSection: React.FC = () => (
  <section className="max-w-[1320px] mx-auto my-12 xl:flex xl:gap-24 px-4">
    <div className="flex-1 text-center lg:text-left">
      <p className="uppercase text-#365CCE font-semibold text-lg lg:text-xl">
        Start to Success
      </p>
      <h1 className="mt-4 text-3xl lg:text-5xl font-bold">
        Access To <span className="text-#365CCE">5000+</span> Courses from{" "}
        <span className="text-#365CCE">300</span> Instructors & Institutions
      </h1>
      <p className="mt-4 text-gray-600 max-w-md mx-auto lg:mx-0">
        Various versions have evolved over the years, sometimes by accident.
      </p>
      <div className="mt-6 flex justify-center lg:justify-start">
        <div className="relative bg-gray-50 shadow-input flex items-center px-4 py-2 rounded-lg w-full max-w-md focus-within:ring-2 focus-within:ring-#365CCE">
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <FiSearch className="text-xl" />
        </div>
      </div>
    </div>
    <div className="flex-1 mt-10 relative flex justify-center">
      <img src="/assets/images/img.svg" alt="hero 1" className="h-80 z-10" />
      <img
        src="/assets/images/img2.svg"
        alt="hero 2"
        className="h-80 absolute left-[-50px] z-20"
      />
      {/* Add decorative and rating overlays if needed */}
    </div>
  </section>
);

const PopularCourseSection: React.FC = () => (
  <section className="bg-[#f0faf7] py-16 px-4">
    <div className="max-w-[1320px] mx-auto">
      <h2 className="text-4xl font-semibold mb-8 flex gap-2">
        Most <span className="text-#365CCE">Popular Courses</span>
      </h2>
      <Slider width={290}>
        {popularCourses.map((c, i) => (
          <CourseCard key={i} item={c} />
        ))}
      </Slider>
    </div>
  </section>
);

const PopularCategoriesSection: React.FC = () => (
  <section className="py-16 px-4">
    <div className="max-w-[1320px] mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">
        Most{" "}
        <span
          className="text-#365C

CCE"
        >
          Popular Categories
        </span>
      </h2>
      <p className="text-gray-500 mb-12">
        Various versions have evolved over the years, sometimes by accident.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {popularCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-6 rounded-lg border shadow-custom hover:border-#365CCE cursor-pointer"
          >
            <div className="flex items-center gap-4 text-xl">
              {cat.icon}
              <span className="font-medium">{cat.title}</span>
            </div>
            <HiArrowUpRight className="p-2 rounded-lg shadow-custom hover:bg-#365CCE hover:text-white transition" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BestInstructorSection: React.FC = () => (
  <section className="bg-[#FFFAF5] py-16 px-4">
    <div className="max-w-[1320px] mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">
        Our <span className="text-#365CCE">Best Instructors</span>
      </h2>
      <p className="text-gray-500 mb-12">
        Various versions have evolved over the years, sometimes by accident.
      </p>
      <Slider width={280}>
        {bestInstructors.map((ins, i) => (
          <InstructorCard key={i} item={ins} />
        ))}
      </Slider>
    </div>
  </section>
);

const AchievementSection: React.FC = () => (
  <section className="py-16 px-4">
    <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="flex flex-wrap justify-around flex-1 mb-8 lg:mb-0">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/assets/images/image2.svg"
            alt="instructors"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-semibold">300</h3>
            <p className="text-gray-500">Instructors</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/assets/images/image.svg"
            alt="videos"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-semibold">10,000+</h3>
            <p className="text-gray-500">Videos</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/assets/images/img4.svg"
            alt="students"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-semibold">20,000+</h3>
            <p className="text-gray-500">Students</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/img5.svg"
            alt="users"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-semibold">100,000+</h3>
            <p className="text-gray-500">Users</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/assets/images/img1.png"
          alt="achievement"
          className="w-80 h-auto"
        />
      </div>
    </div>
  </section>
);

const FeedbackSection: React.FC = () => (
  <section className="py-16 px-4">
    <div className="max-w-[1320px] mx-auto text-center mb-12">
      <h2 className="text-4xl font-semibold mb-4">
        Student <span className="text-#365CCE">Feedback</span>
      </h2>
      <p className="text-gray-500">
        Various versions have evolved over the years, sometimes by accident.
      </p>
    </div>
    <div className="px-4">
      <Slider width={600} isUpdateWidth>
        {studentFeedback.map((fb, i) => (
          <FeedbackCard key={i} item={fb} />
        ))}
      </Slider>
    </div>
  </section>
);

const HeroRegisterSection: React.FC = () => (
  <section className="bg-[#E9F8F3B2] py-16 px-4">
    <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
      <img
        src="/assets/images/bottom_hero_img.png"
        alt="join us"
        className="w-full md:w-1/2 h-auto"
      />
      <div className="flex-1">
        <h2 className="text-4xl font-semibold mb-4">
          Join <span className="text-#365CCE">World’s Largest</span> Learning
          Platform Today
        </h2>
        <p className="text-gray-700 mb-6">
          Start learning by registering for free
        </p>
        <Button>Register for Free</Button>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => {
  const navLinks = ["Home", "About", "Course", "Blog", "Contact"];
  const footerCategories = [
    "Design",
    "Development",
    "Marketing",
    "Business",
    "Lifestyle",
    "Photography",
    "Music",
  ];
  const social = ["facebook", "sports", "linkedin", "instagram", "be"];
  return (
    <footer className="py-16 px-4">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <img
            src="/assets/images/footer/eDex.svg"
            alt="logo"
            className="w-28"
          />
          <h4 className="text-2xl font-semibold">Contact us</h4>
          <p className="text-gray-600">Call: +123 400 123</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
          <p className="text-blue-600 cursor-pointer">example@mail.com</p>
          <div className="flex gap-4 mt-2">
            {social.map((s) => (
              <img
                key={s}
                src={`/assets/images/footer/${s}.svg`}
                alt={s}
                className="w-12 h-12 cursor-pointer hover:shadow-lg rounded"
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-600">
            {navLinks.map((l) => (
              <li
                key={l}
                className="hover:text-#365CCE hover:underline cursor-pointer"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-600">
            {footerCategories.map((c) => (
              <li
                key={c}
                className="hover:text-#365CCE hover:underline cursor-pointer"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-600 mb-4">Lorem Ipsum dolor sit amet...</p>
          <input
            type="email"
            placeholder="Your email"
            className="p-4 w-full rounded-lg bg-gray-200 focus:ring-2 focus:ring-#365CCE outline-none mb-4"
            required
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

// -------------------- Full App --------------------

const EdtechWebsite: React.FC = () => (
  <div className="bg-[#F8F9FA] min-h-screen">
    <Header />
    <HeroSection />
    <PopularCourseSection />
    <PopularCategoriesSection />
    <BestInstructorSection />
    <AchievementSection />
    <FeedbackSection />
    <HeroRegisterSection />
    <Footer />
  </div>
);

export default EdtechWebsite;
