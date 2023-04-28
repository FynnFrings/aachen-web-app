import Calendar from "../../public/overview/calendar.svg";
import Angebot from "../../public/overview/angebot.svg";
import Unternehmen from "../../public/overview/unternehmen_logo.svg";
import Nacrichten from "../../public/overview/nachrichten_logo.svg";
import OverviewCArd from "./OverviewCard";
import Iphone from "../../public/iphone_pics/IMG_9884.png";
import Image from "next/image";

const Overview = () => {
  return (
    <>
      <div className="py-20 text-white">
        <div className="text-center py-14">
          <h1 className="font-bold text-5xl">Die Aachen App</h1>
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-around lg:items-center">
          <div className="hidden lg:block">
            <Image src={Iphone} alt="iphone" width={350} height={650} />
          </div>
          <div className="w-full flex flex-col items-center gap-y-8 lg:flex-row lg:flex-wrap lg:justify-end lg:items-stretch lg:gap-x-8">
            <OverviewCArd
              logo={Calendar}
              name="Events"
              description="In der Aachen App kannst du aktuelle und zukünftige Events in Aachen entdecken. Wir informieren dich über Veranstaltungen wie Wochen- oder Flohmärkte, aber auch lokale Unternehmen können kostenlos Events ankündigen. Dadurch verpassen wir Aachener keine."
            />
            <OverviewCArd
              logo={Angebot}
              name="Angebote"
              description="Sichere dir in der Aachen App Coupons von lokalen Einzelhändlern und spare Geld während du deine Lieblingshändler unterstützt. Wenn du ein Unternehmen favorisierst, benachrichtigen wir dich jedes Mal, wenn ein neuer Coupon veröffentlicht wird."
            />
            <div className="lg:hidden">
              <Image src={Iphone} alt="iphone" width={350} height={450} />
            </div>
            <OverviewCArd
              logo={Unternehmen}
              name="Unternehmen"
              description="Es ist möglich direkt in der App Aachener Unternehmen direkt in seiner Nähe zu erkunden und sich dann auch über diese Informationen durchzulesen. Die Unternehmens-Seiten werden von den Unternehmer*innen selber verwaltet und gepflegt und können jederzeit frei."
            />
            <OverviewCArd
              logo={Nacrichten}
              name="Nachrichten"
              description="Die Nachrichten-Sektion der App bietet lokale und internationale Nachrichten sowie wichtige Updates zu aktuellen Ereignissen in Aachen. Sie können auch Benachrichtigungen erhalten, wenn es wichtige Neuigkeiten gibt."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
