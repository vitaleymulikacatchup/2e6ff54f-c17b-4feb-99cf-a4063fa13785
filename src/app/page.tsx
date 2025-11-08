"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Heart, ShoppingCart, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Accueil", id: "hero" },
            { name: "Produits", id: "products" },
            { name: "À propos", id: "about" },
            { name: "Témoignages", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Boulangerie Artisanale"
          button={{
            text: "Commander",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Boulangerie Artisanale"
          description="Découvrez nos pains, viennoiseries et pâtisseries préparés chaque jour avec passion selon les traditions françaises"
          tag="Tradition Française"
          tagIcon={Award}
          buttons={[
            { text: "Nos Produits", href: "products" },
            { text: "Nous Contacter", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g054c5867c29a2b41598a4fc79471163217b2d32d134b9fbd3d5ba08a46043f8c5ce4fae923a8dfd003ae1cb719560bdbae1930361be4e83c3de027ee433bf631_1280.jpg"
          imageAlt="Intérieur de boulangerie française avec croissants et pains"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Nos Spécialités"
          description="Produits artisanaux préparés quotidiennement avec des ingrédients de qualité"
          tag="Fraîcheur Garantie"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              brand: "Artisanal",
              name: "Croissant Traditionnel",
              price: "1,50 €",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://pixabay.com/get/geb145e3ece9e66b0f7910c9b246356cc3b9e84402b6ae2df10761741378fe41d8d4b27d9fb6146ac3be0b208d3cce4a516781a6b95265e85432d82c235c3d68a_1280.jpg",
              imageAlt: "Croissant français doré"
            },
            {
              id: "2",
              brand: "Artisanal",
              name: "Baguette Tradition",
              price: "1,20 €",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://pixabay.com/get/gfc22804968b7278482500a57941b0d73dec56b61ba84a5ff3127f32f980aed8cd76910277786231773eb97dcf7b047698ebcc892392d2bc2cbac42fcd312edd6_1280.jpg",
              imageAlt: "Baguette française traditionnelle"
            },
            {
              id: "3",
              brand: "Artisanal",
              name: "Pain au Chocolat",
              price: "1,80 €",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://pixabay.com/get/g9319a69e6bcd728788176eef46878494604e35eb6563e5a7a35d564b1abda8240a69d94bec52932994909d9c0c3429e50a403b25fc2b9d8f88fcdab9acd9cf36_1280.jpg",
              imageAlt: "Pain au chocolat français"
            },
            {
              id: "4",
              brand: "Artisanal",
              name: "Macarons Assortis",
              price: "12,00 €",
              rating: 5,
              reviewCount: "73",
              imageSrc: "https://pixabay.com/get/g8b5977d92571663d537d8c2feb1d23210c7f9a0bad68261f3ca3f0a1d3e79c652afbdd35f059a854e66a51c5feff6afc6be9628d3af208014fa659f28a7b371c_1280.jpg",
              imageAlt: "Macarons français colorés"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Notre Savoir-Faire"
          description={[
            "Depuis trois générations, notre famille perpétue l'art de la boulangerie française traditionnelle.",
            "Chaque jour, nos boulangers se lèvent avant l'aube pour pétrir, façonner et cuire nos pains avec le même amour et la même expertise transmis de père en fils."
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Ce que disent nos clients"
          description="Les avis authentiques de notre clientèle fidèle"
          tag="Témoignages"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Marie Dubois",
              role: "Cliente fidèle",
              company: "Quartier Montmartre",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g1c0c0fcdbf06b15b5ba053081ca4b4aaf5e3799ad2cb2ae807cc9acde28035d4b76ae79d248ef70793837589af029e8c4cce5c066ff1a0151559ec916f12ce8c_1280.jpg",
              imageAlt: "Portrait de Marie Dubois"
            },
            {
              id: "2",
              name: "Pierre Martin",
              role: "Habitué",
              company: "Quartier Latin",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g19035191e4b0616b1be4d2db6075cfe3459394bc0f94e515428b9a91b90a6c4e0f7f31bf75013e97a2d8979e33716de10fb95994049ea96ed81e7d8775721587_1280.jpg",
              imageAlt: "Portrait de Pierre Martin"
            },
            {
              id: "3",
              name: "Sophie Moreau",
              role: "Cliente régulière",
              company: "Belleville",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd0513564d51566fde2d02a221fc12e19e5bcff72d0fddb8098372dab43273f6f9030eab88f2b5a08f1c0eb1b6145d2c69ea2100c49b38624638e822db6234d27_1280.jpg",
              imageAlt: "Portrait de Sophie Moreau"
            },
            {
              id: "4",
              name: "Henri Lefèvre",
              role: "Client depuis 15 ans",
              company: "République",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcbc48f381ff9ccdc0dca07eeaed214bf94f386d053e2dd385befc810ac98cfac0c41c6630d17973964dbcbe3e5dbedb676cc66f3ec757993049379f2f230de92_1280.jpg",
              imageAlt: "Portrait de Henri Lefèvre"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Commandez"
          tagIcon={ShoppingCart}
          title="Passez votre commande"
          description="Réservez vos produits préférés ou recevez nos actualités gourmandes directement dans votre boîte mail"
          inputPlaceholder="Votre adresse email"
          buttonText="Commander"
          termsText="En cliquant sur Commander, vous acceptez nos conditions d'utilisation et notre politique de confidentialité."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Boulangerie Artisanale"
          columns={[
            {
              items: [
                { label: "Nos Produits", href: "products" },
                { label: "À Propos", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Horaires", href: "contact" },
                { label: "Localisation", href: "contact" },
                { label: "Téléphone", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}