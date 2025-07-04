import Topbar from "@/app/components/common/navigation/topbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { BarChart, Bell, UserCheck } from "lucide-react";
import twoImage from "@/public/assets/two.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-gray-800">
      <Topbar />

      {/* HERO + CARDS */}
      <section className="relative flex flex-col items-center justify-center px-4 md:px-16 pt-8 pb-20 bg-[#f5fcf8]">
        <div className="flex flex-col items-center mb-6 mt-4 gap-3 z-10">
          <Image
            src="/assets/logooficial.png"
            alt="Logo TIME2HEALTH"
            width={120}
            height={120}
            priority
            draggable={false}
            className="drop-shadow-lg"
          />
          <span className="text-[#008261] text-base md:text-lg font-semibold tracking-wide">
            Welcome to
          </span>
          <h1
            className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-center flex items-center justify-center gap-2"
            style={{
              color: "#008261",
              textShadow: "2px 4px 12px #e3eeeb, 0 2px 12px #00826133",
              lineHeight: 1.1,
            }}
          >
            WARN
            <Image
              src="/assets/two.png"
              alt="Stylish 2"
              width={60}
              height={60}
              style={{
                margin: "0 8px",
                transform: "rotate(-5deg)",
              }}
            />
            SAVE
          </h1>

          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed text-center mt-3 max-w-2xl font-light">
            Smarter, faster, and more effective health monitoring for your
            community.
          </p>
        </div>

        {/* CARDS */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 absolute -bottom-24">
          {[
            {
              icon: <BarChart size={40} color="#008261" />,
              title: "Smart Analytics",
              text: "Track epidemiological data in real time and anticipate trends.",
            },
            {
              icon: <Bell size={40} color="#008261" />,
              title: "Proactive Alerts",
              text: "Receive personalized notifications about risks and prevention.",
            },
            {
              icon: <UserCheck size={40} color="#008261" />,
              title: "Expert Support",
              text: "Rely on professional guidance to support your decision making.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center py-8 px-6 text-center border border-emerald-100"
            >
              <span className="mb-3">{feature.icon}</span>
              <h2 className="font-bold text-lg mb-2 text-[#008261]">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS + CTA */}
      <section className="w-full pt-28 pb-12 bg-[#f7fbfa]">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-emerald-700 text-2xl font-bold text-center mb-8">
            What people say about Time2Health
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {[
              {
                name: "Juliana Dias – Public Manager",
                initials: "JD",
                quote:
                  "Thanks to the system, we were able to anticipate outbreaks and reduce costs.",
              },
              {
                name: "Paulo Figueiredo – Health Analyst",
                initials: "PF",
                quote:
                  "The interface is simple and the technical team always helps us quickly.",
              },
              {
                name: "Carla Souza – Municipal Secretary",
                initials: "CS",
                quote:
                  "The dashboard makes it easy to monitor diseases in our region.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-2xl p-6 flex-1 flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center font-bold">
                    {testimonial.initials}
                  </span>
                  <span className="text-gray-600">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-12">
          <h4 className="text-emerald-700 text-xl font-bold mb-2">
            Ready to transform health in your region?
          </h4>
          <p className="text-gray-700 mb-4 text-center">
            Start using our platform for free right now!
          </p>
          <Button
            variant="contained"
            size="large"
            className="rounded-full shadow-xl normal-case text-lg px-8 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-colors"
            href="/signup"
          >
            Create your Account
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-emerald-100 py-4 text-center text-sm text-gray-600 flex flex-col gap-2">
        <p>© 2025 ApolloFarm. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/privacy"
            className="hover:underline hover:text-emerald-600"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:underline hover:text-emerald-600"
          >
            Terms of Use
          </Link>
        </div>
      </footer>
    </div>
  );
}
