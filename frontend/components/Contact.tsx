import { FormEvent, useEffect, useState } from "react";
import ContactAlert from "./ContactAlert";

const Contact = () => {
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [alert, setAlert] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert(true);
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  //useEffect with timer for closing alert message wich react on "alert" state
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 7000);
  }, [alert]);
  return (
    <>
      <div className="text-white flex flex-col items-center gap-y-14 py-20">
        <h2 className="block text-5xl font-bold lg:hidden ">Kontakt</h2>
        <div className="w-full lg:flex lg:flex-row-reverse lg:justify-around lg:gap-x-6 lg:items-center">
          <div className="w-full bg-[#22221f] rounded-2xl py-8 px-4 lg:w-[55%]">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col items-center gap-y-8 font-light text-xl"
            >
              <div className="w-full flex flex-row justify-between">
                <input
                  className="w-[48%] bg-transparent border border-white rounded-xl py-4 pl-2 focus:!shadow-[#FAC520] focus:!shadow-input focus:!outline-offset-0 focus:!outline-none"
                  type="text"
                  placeholder="Vorname"
                  // required
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  className="w-[48%] bg-transparent border border-white rounded-xl py-4 pl-2 focus:!shadow-[#FAC520] focus:!shadow-input focus:!outline-offset-0 focus:!outline-none"
                  type="text"
                  placeholder="Nachname"
                  // required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full bg-transparent border border-white rounded-xl py-4 pl-2 focus:!shadow-[#FAC520] focus:!shadow-input focus:!outline-offset-0 focus:!outline-none"
                  type="email"
                  placeholder="Email"
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <textarea
                  className="w-full bg-transparent border border-white rounded-xl pl-2 pt-2 pb-20 focus:!shadow-[#FAC520] focus:!shadow-input focus:!outline-offset-0 focus:!outline-none"
                  placeholder="Your message"
                  // required
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
          <div className="hidden lg:block lg:w-[35%]">
            <h2 className="font-semibold text-5xl mb-6">Kontakt</h2>
            <p className="font-light text-lg">
              Hier können Sie uns erreichen! Schreiben Sie uns eine E-Mail oder
              nutzen Sie das Kontaktformular, um mit uns in Verbindung zu
              treten. Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </div>
      </div>
      {alert ? <ContactAlert /> : ""}
    </>
  );
};

export default Contact;
