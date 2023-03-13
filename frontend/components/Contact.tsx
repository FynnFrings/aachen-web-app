import { FormEvent, useState } from "react";

const Contact = () => {
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="text-white flex flex-col items-center gap-y-14 py-20">
        <h1 className="font-bold text-5xl">Kontakt</h1>
        <div className="w-full bg-[#22221f] rounded-2xl py-8 px-4">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col items-center gap-y-8 font-light text-xl"
          >
            <div className="w-full flex flex-row justify-between">
              <input
                className="w-[48%] bg-transparent border border-white rounded-xl py-4 pl-2"
                type="text"
                placeholder="Vorname"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                className="w-[48%] bg-transparent border border-white rounded-xl py-4 pl-2"
                type="text"
                placeholder="Nachname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full bg-transparent border border-white rounded-xl py-4 pl-2"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full bg-transparent border border-white rounded-xl pl-2 pt-2 pb-20"
                placeholder="Your message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className="bg-[#FAC520] text-black w-[80%] py-2 rounded-xl font-medium text-2xl"
              type="submit"
            >
              Absenden
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
