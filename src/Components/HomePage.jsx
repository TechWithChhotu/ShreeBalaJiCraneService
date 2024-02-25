import "react-phone-number-input/style.css";
// import AllTimeService1 from "../assets/AllTimeService1.jpg";
// import AllTimeService2 from "../assets/AllTimeService2.jpg";
// import AllTimeService4 from "../assets/AllTimeService4.png";
import AllTimeService3 from "../assets/AllTimeService3.png";
// import ImageSlider from "react-simple-image-slider";
import Slider from "./ImageSlider/ImageSlider";

function HomePage() {
  return (
    <div className="pt-16">
      <h2 className="text-blue-400 text-6xl max-sm:text-3xl text-center">
        Shree Balaji Crane Service.. for Loading Unloading Shifting Lifting .etc
      </h2>

      <div className="absolute bottom-0 right-0">
        <h2 className="opacity-0">Balaji crane service Biharsharif</h2>
        <h2 className="opacity-0">Shree Balaji crane service Biharsharif</h2>
        <h2 className="opacity-0">crane service</h2>
        <h2 className="opacity-0">crane service in bihar</h2>
        <h2 className="opacity-0">crane service in Biharsharif</h2>
        <h2 className="opacity-0">balaji crane service in Biharsharif</h2>
        <h2 className="opacity-0">balaji crane service in Bihar</h2>
        <h2 className="opacity-0">shree balaji crane service in Biharsharif</h2>
        <h2 className="opacity-0">shree balaji crane service in Bihar</h2>
      </div>

      <section className=" mt-10 flex flex-col items-center">
        <p className="text-xl ">Business Centre in Bihar Sharif</p>
        <img src={AllTimeService3} alt="" className="w-44" />

        <a
          href="tel:9540869087"
          className="btn btn-success bg-blue-400 text-white mt-2 text-2xl px-10 py-2 rounded"
        >
          Call Now
        </a>
      </section>

      <Slider />

      <div className="mt-5">
        <h3 className="text-2xl text-center mb-2 ">
          <span className="border-b-2 border-indigo-500">Contact Us At </span>
        </h3>
        <p className="text-center mb-5">
          D.T.O, OFFICE KE PURAB, NH 20, HANUMAAN NAGAR, Bihar Sharif, Bihar
          803101
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.4299947358645!2d85.50670111111022!3d25.18871765564438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShared%20route%20From%20(25.1991424%2C85.5214962)%20to%20SHREE%20BALAJI%20CRANE%20SERVICE%2C%20D.T.O%2C%20OFFICE%20KE%20PURAB%2C%20NH%2020%2C%20HANUMAAN%20NAGAR%2C%20Bihar%20Sharif%2C%20Bihar%20803101%20via%20Gas%20Godown%20Rd.!5e0!3m2!1shi!2sin!4v1701649152153!5m2!1shi!2sin"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

      <div className="relative mx-20">
        <ul className="grid grid-cols-3 max-sm:grid-cols-1">
          <li className="text-center">
            <h3 className="mt-10 mb-5 text-2xl font-bold text-center">
              <span className="border-b-2 border-indigo-500">Contact</span>
            </h3>
            <a
              href="tel:9540869087"
              className="btn btn-success bg-blue-400 text-white  text-xl px-10 py-2 rounded"
            >
              Call Now
            </a>
            <br />
            <br />
            <a
              href="tel:8271959687"
              className="btn btn-success bg-blue-400 text-white  text-xl px-10 py-2 rounded"
            >
              Call Now
            </a>
            <p className="mt-5">+91 9540869087</p>
          </li>

          <li className="text-center">
            <p className="mt-10 mb-5 text-2xl font-bold text-center">
              <span className="border-b-2 border-indigo-500">Address</span>
            </p>
            <div className="text-center ">
              <a
                href="https://www.google.co.in/maps/search/Shared+route+From+(25.1991424,85.5214962)+to+SHREE+BALAJI+CRANE+SERVICE,+D.T.O,+OFFICE+KE+PURAB,+NH+20,+HANUMAAN+NAGAR,+Bihar+Sharif,+Bihar+803101+via+Gas+Godown+Rd./@25.1887177,85.5067011,17z?entry=ttu"
                className="btn btn-success bg-blue-400 text-white mt-10 text-xl px-10 py-2 rounded"
              >
                Get Direction
              </a>
              <p className="mt-5">
                D.T.O, OFFICE KE PURAB, NH 20, HANUMAAN NAGAR, Bihar Sharif,
                Bihar 803101
              </p>
            </div>
          </li>

          <li className="text-center">
            <p className="mt-10 mb-5 text-2xl font-bold text-center">
              <span className="border-b-2 border-indigo-500">Opening Time</span>
            </p>
            <div className="flex flex-col gap-2 font-medium">
              <p>Mon: Open 24 hours</p>
              <p>Tue: Open 24 hours</p>
              <p> Wed: Open 24 hours</p>
              <p>Thu: Open 24 hours </p>
              <p>Fri: Open 24 hours</p>
              <p>Sat: Open 24 hours</p>
              <p> Sun: Open 24 hours</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
