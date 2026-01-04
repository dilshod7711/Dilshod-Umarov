import React, { useRef, useEffect, useState } from "react";
import ConnectedDots from "../header/ConnectedDots";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from "react-icons/ai";

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => contactRef.current && observer.unobserve(contactRef.current);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(
        "https://api.telegram.org/bot6325597060:AAH8LV1hq8KTDpHiHXvPCK1su7imkHmntPA/sendMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: 5709738143,
            text: `📩 Yangi xabar:\n👤 Ismi: ${formData.name}\n📧 Email: ${formData.email}\n💬 Xabar: ${formData.message}`,
          }),
        }
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-[#14011b]">
      <ConnectedDots />

      {/* Orqa fondagi katta binafsha nur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#cd5ff8]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div
        ref={contactRef}
        className={`relative z-10 w-full max-w-[1000px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[24px] shadow-2xl transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-[#cd5ff8] text-sm uppercase tracking-[0.4em] font-bold mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Chap tomon: Kontakt ma'lumotlar */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <ContactInfoBox
                icon={<AiOutlineMail />}
                title="Email"
                value="dilshodumbarov707@gmail.com"
                link="mailto:dilshodumbarov707@gmail.com"
              />
            </div>
            <div className="ml-0">
              <ContactInfoBox
                icon={<AiOutlinePhone />}
                title="Phone"
                value="+998 90 447 19 07"
                link="tel:+998904471907"
              />
            </div>
            <div className="ml-0">
              <ContactInfoBox
                icon={<AiOutlineGlobal />}
                title="Location"
                value="Tashkent, Uzbekistan"
              />
            </div>
          </div>

          {/* O'ng tomon: Forma */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomInput
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending"}
              />
              <CustomInput
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
              />
            </div>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-[#cd5ff8] transition-all placeholder:text-gray-500 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-[#cd5ff8] text-white font-bold rounded-xl hover:bg-[#b84fe6] hover:shadow-[0_0_20px_rgba(205,95,248,0.4)] transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center mt-4">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                ❌ Error. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoBox = ({ icon, title, value, link }) => (
  <div className="group flex items-center gap-4">
    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl text-[#cd5ff8] group-hover:bg-[#cd5ff8] group-hover:text-white transition-all duration-300 shadow-lg">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
        {title}
      </p>
      {link ? (
        <a
          href={link}
          className="text-white hover:text-[#cd5ff8] transition-colors truncate block max-w-[200px] md:max-w-none"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

const CustomInput = (props) => (
  <input
    required
    {...props}
    className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-[#cd5ff8] transition-all placeholder:text-gray-500"
  />
);

export default Contact;
