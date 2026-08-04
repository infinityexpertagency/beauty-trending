import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">


        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">


          {/* Brand */}

          <div>

            <Image
              src="/images/logo.png"
              alt="Beauty & The Mountains"
              width={180}
              height={60}
            />


            <p className="mt-5 text-sm leading-7 text-white/60">
              Premium fashion, luxury watches, and accessories
              designed to elevate your everyday style.
            </p>

          </div>




          {/* Shop */}

          <div>

            <h3 className="mb-5 font-semibold">
              Shop
            </h3>


            <ul className="space-y-3 text-sm text-white/60">

              <li>
                <Link href="#" className="transition hover:text-white">
                  Women
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-white">
                  Men
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-white">
                  Watches
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-white">
                  Accessories
                </Link>
              </li>

            </ul>

          </div>




          {/* Customer Care */}

          <div>

            <h3 className="mb-5 font-semibold">
              Customer Care
            </h3>


            <ul className="space-y-3 text-sm text-white/60">

              <li>Shipping</li>
              <li>Returns</li>
              <li>Contact</li>
              <li>FAQ</li>

            </ul>

          </div>




          {/* Social */}

          <div>

            <h3 className="mb-5 font-semibold">
              Follow Us
            </h3>


            <div className="flex gap-4">


              <Link
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-black"
              >
                <FaInstagram size={20} />
              </Link>



              <Link
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-black"
              >
                <FaFacebookF size={20} />
              </Link>



              <Link
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-black"
              >
                <FaPinterestP size={20} />
              </Link>


            </div>


          </div>


        </div>




        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/50 sm:mt-16">

          <p>
            © 2026 Beauty &amp; The Mountains. All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}