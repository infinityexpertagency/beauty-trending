import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">


          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Beauty & The Mountains"
              width={180}
              height={60}
            />

            <p className="mt-6 text-sm leading-7 text-white/60">
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
                <Link href="#">
                  Women
                </Link>
              </li>

              <li>
                <Link href="#">
                  Men
                </Link>
              </li>

              <li>
                <Link href="#">
                  Watches
                </Link>
              </li>

              <li>
                <Link href="#">
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
              <li>
                Shipping
              </li>

              <li>
                Returns
              </li>

              <li>
                Contact
              </li>

              <li>
                FAQ
              </li>
            </ul>
          </div>



          {/* Social */}
          <div>
            <h3 className="mb-5 font-semibold">
              Follow Us
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                Instagram
              </li>

              <li>
                Facebook
              </li>

              <li>
                Pinterest
              </li>
            </ul>
          </div>


        </div>



        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white/50">

          <p>
            © 2026 Beauty &amp; The Mountains. All rights reserved.
          </p>

        </div>


      </div>
    </footer>
  );
}