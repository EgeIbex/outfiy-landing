import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTiktok, FaApple, FaGooglePlay } from 'react-icons/fa';
import Logo from '../assets/images/Outfiy_Logo_V1_0-11.svg';
import LogoHeader from '../assets/images/logoheader.svg';
import Feature1 from '../assets/images/1.png';
import Feature2 from '../assets/images/2.png';
import Feature3 from '../assets/images/3.png';
import Feature4 from '../assets/images/4.png';
import MobilePreview from '../assets/images/mobil.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white ${inter.className}`}>
      <Head>
        <title>Outfiy</title>
        <meta name="description" content="Your personal AI wardrobe assistant that helps you create perfect outfits and manage your closet effortlessly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Name Icon */}
      <div className="flex justify-center pt-8">
        <div className="relative w-72 h-24">
          <Image
            src={LogoHeader}
            alt="Outfiy Name Icon"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-[#3DCB0C] text-3xl md:text-5xl font-bold mb-4">
              Elevate Your Style with AI-Powered Fashion Magic
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Say goodbye to the daily &quot;what to wear&quot; dilemma! Our AI-powered assistant creates personalized outfits, guides your shopping decisions, and saves your precious time. Welcome to the future of fashion, where style meets intelligence.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#3D53E1] text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-[#2A3CB3] transition-colors flex flex-col items-center gap-2 w-full md:w-auto">
                <span className="italic">Coming Soon...</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={MobilePreview}
                alt="Outfiy App Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            {/* Sol Taraftaki Görsel */}
            <div className="w-full md:w-1/4">
              <div className="relative w-full h-[250px] md:h-[500px]">
                <Image
                  src={Feature1}
                  alt="AI Generated Outfit Suggestions Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Ortadaki Özellikler */}
            <div className="w-full md:w-2/4 space-y-2 md:space-y-4">
              <div className="bg-gray-50 p-4 md:p-6 rounded-3xl shadow-lg">
                <h3 className="text-[#3D53E1] text-xl md:text-2xl font-bold mb-2">AI-Generated Outfit Suggestions</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Your AI-powered assistant analyzes the clothes in your wardrobe to create personalized outfit combinations.
                </p>
              </div>

              <div className="bg-gray-50 p-4 md:p-6 rounded-3xl shadow-lg">
                <h3 className="text-[#3DCB0C] text-xl md:text-2xl font-bold mb-2">Seamless Wardrobe Integration</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Digitize your existing wardrobe and preview how new clothing items will complement your current outfit combinations.
                </p>
              </div>
            </div>

            {/* Sağ Taraftaki Görsel */}
            <div className="w-full md:w-1/4">
              <div className="relative w-full h-[250px] md:h-[500px]">
                <Image
                  src={Feature2}
                  alt="Seamless Wardrobe Integration Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-4">
            {/* Sol Taraftaki Görsel */}
            <div className="w-full md:w-1/4">
              <div className="relative w-full h-[250px] md:h-[500px]">
                <Image
                  src={Feature3}
                  alt="AI Generated Outfit Suggestions Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Ortadaki Özellikler */}
            <div className="w-full md:w-2/4 space-y-2 md:space-y-4">
              <div className="bg-gray-50 p-4 md:p-6 rounded-3xl shadow-lg">
                <h3 className="text-[#3D53E1] text-xl md:text-2xl font-bold mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Get new clothing recommendations based on your style analysis to complete your wardrobe and make smarter shopping decisions.
                </p>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 rounded-3xl shadow-lg">
                <h3 className="text-[#3DCB0C] text-xl md:text-2xl font-bold mb-2">Digitalization & Inspiration</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Get style inspiration on the &quot;Podium&quot; platform, have your preferences analyzed, and discover personalized product recommendations.
                </p>
              </div>
            </div>

            {/* Sağ Taraftaki Görsel */}
            <div className="w-full md:w-1/4">
              <div className="relative w-full h-[250px] md:h-[500px]">
                <Image
                  src={Feature4}
                  alt="Seamless Wardrobe Integration Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-[#3D53E1] rounded-3xl p-6 md:p-12 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8">
            Download Outfiy now and experience the future of fashion.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#3DCB0C] text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-[#2EA009] transition-colors flex items-center justify-center gap-2">
              <FaApple size={24} />
              Download for iOS
            </button>
            <button className="bg-[#3DCB0C] text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-[#2EA009] transition-colors flex items-center justify-center gap-2">
              <FaGooglePlay size={20} />
              Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="h-8 relative w-24">
              <Image
                src={Logo}
                alt="Outfiy Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">© 2025 Outfiy. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/erdemegeeroglu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3D53E1] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://instagram.com/outfiy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3D53E1] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://tiktok.com/@outfiy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3D53E1] transition-colors"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
