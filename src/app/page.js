import Banner2 from "@/components/banners/Banner2";
import HomeCard1 from "@/components/home/HomeCard1";
import HomeServiceCard from "@/components/home/HomeServiceCard";
import Container1 from "@/components/container/Container1";
import ContactUsForm from "@/components/form/ContactUsForm";
import HomeCard2 from "@/components/home/HomeCard2";

export default function Home() {
  return (
    <>
      <Banner2 />
      <div className="bgi2">
        <Container1>
          <br /><br />
          <HomeCard2 />
          <br /><br />
        </Container1>
      </div>
      <HomeServiceCard />
      <div className="bgi3">
        <Container1>
          <br />
          <br />
          <h2 className="text-3xl font-bold text-[var(--icon)]">Contact Us</h2>
          <ContactUsForm />
          <br />
          <br />
        </Container1>
      </div>
    </>
  );
}
