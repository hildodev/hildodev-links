import Image from "next/image";
import Link from "next/link";
import Background from "@/assets/background.jpg";
import Logo from "@/assets/logo.jpeg";
import { CardLink } from "@/components/card-link";
import {
  Brush,
  Code2,
  DollarSign,
  Facebook,
  Instagram,
  Languages,
  Linkedin,
  Mail,
  Music,
  Twitter,
  Youtube,
} from "lucide-react";
import { TbBrandDiscord } from "react-icons/tb";

export default function Home() {
  const links = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Aprenda programação DO ZERO AO PROFISSIONAL",
      url: "https://go.hotmart.com/B77842021J",
    },
    {
      icon: <TbBrandDiscord className="w-6 h-6" />,
      title: "Meu Discord | Royal Devs",
      url: "https://discord.gg/zc8HFTC4XA",
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Aprenda inglês do zero",
      url: "https://go.hotmart.com/A97812917P",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Música de programação",
      url: "https://open.spotify.com/playlist/6bmpSUdNYOK7ibTwVocnh1?si=7QRA1W25RHu7dgc8eAo7jA",
    },
  ];

  const socialMedias = [
    {
      href: "https://instagram.com/hildodev",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      href: "https://facebook.com/hildodev",
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      href: "https://www.youtube.com/c/hildodev",
      icon: <Youtube className="w-6 h-6" />,
    },
    {
      href: "https://www.linkedin.com/in/hildodev/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    { href: "https://x.com/hildodev", icon: <Twitter className="w-6 h-6" /> },
    {
      href: "mailto:hildocontato@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative">
      <header className="w-full h-48">
        <Image
          src={Background}
          width={1200}
          height={1200}
          className="object-cover w-full h-full"
          alt="Imagem de background"
        />
      </header>
      <main className="bg-background max-w-2xl px-8 m-auto -mt-16 flex flex-col items-center justify-center rounded-t-full">
        <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center p-2">
          <Image
            src={Logo}
            alt="Imagem do Hildo"
            width={128}
            height={128}
            className="rounded-full w-full h-full"
          />
        </div>

        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold mb-1">Hildo</h1>
          <p className="text-base">
            Desenvolvo sites, aplicativos e soluções sob medida para você!
            Solicite seu orçamento e receba uma resposta rápida.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 mb-8">
          {socialMedias.map(({ href, icon }, index) => (
            <Link key={index} href={href}>
              {icon}
            </Link>
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4">
          <div className="w-full grid grid-cols-2 gap-4 max-[350px]:grid-cols-1">
            <CardLink
              icon={<DollarSign className="w-6 h-6" />}
              title="Solicite um Orçamento Agora"
              url="https://wa.me/5511953742357?text=Ol%C3%A1%2C%20Hildo%21%20Tudo%20bem%3F%20Encontrei%20seu%20contato%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o%20de%20programa%C3%A7%C3%A3o.%20Poderia%20me%20passar%20mais%20detalhes%20sobre%20como%20funciona%20e%20os%20valores%3F%20Fico%20no%20aguardo.%20Obrigado%21"
              selected
            />
            <CardLink
              icon={<Brush className="w-6 h-6" />}
              title="Conheça meu Designer"
              url="https://parceiros.agenciagenios.com/hildodev"
            />
          </div>
          {links.map(({ icon, title, url }, index) => (
            <CardLink
              key={index}
              icon={icon}
              title={title}
              url={url}
              variant="full"
            />
          ))}
        </div>
      </main>
      <footer className="text-center my-8">
        <span className="text-base text-zinc-400">
          hildodev © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
