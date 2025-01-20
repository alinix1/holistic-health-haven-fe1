import type React from "react";
import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";
import holisticProductsImg from "../../assets/holistic_products.jpg";

const AboutPage: React.FC = () => {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <div className="py-10 px-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        About Holistic Health Haven
      </h1>
      <p>
        Doggo ipsum big ol yapper woofer, much ruin diet. Length boy smol blop
        fat boi bork, shibe floofs sub woofer floofs doing me a frighten, heckin
        angery woofer porgo pupper. Yapper vvv clouds very good spot, I am bekom
        fat porgo. he made many woofs heck. Doggorino what a nice floof doge
        aqua doggo puggorino most angery pupper I have ever seen, yapper very
        good spot blop. Borkdrive h*ck noodle horse heckin good boys and girls
        aqua doggo I am bekom fat corgo, dat tungg tho pats super chub doge what
        a nice floof. Boofers porgo borking doggo adorable doggo h*ck, porgo
        woofer. Long woofer h*ck waggy wags lotsa pats, super chub shoob.
        Fluffer vvv boof many pats, pupperino. Many pats adorable doggo stop it
        fren much ruin diet long bois, shoob heckin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Accordion Section */}
        <div id="accordionExample" className="py-10 px-6 min-h-screen">
          <div className="rounded-t-lg border text-white border-neutral-200 bg-[#736555]">
            <h2 className="mb-0" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-white transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How Holistic Health Haven Got Started
                <span className="ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="!visible"
              data-twe-collapse-item
              data-twe-collapse-show
              aria-labelledby="headingOne"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4">
                <p>
                  Most angery pupper I have ever seen super chub waggy wags much
                  ruin diet, very jealous pupper very taste wow. Floofs noodle
                  horse borkdrive heck pupperino, shibe you are doing me the
                  shock vvv. Lotsa pats borkdrive borkf heckin super chub, shoob
                  wow very biscit the neighborhood pupper. Floofs ruff smol bork
                  dat tungg tho, super chub puggo. Woofer wrinkler smol borking
                  doggo with a long snoot for pats ur givin me a spook, stop it
                  fren. Much ruin diet h*ck pupperino you are doing me a
                  frighten clouds snoot, I am bekom fat woofer doge extremely
                  cuuuuuute wrinkler, the neighborhood pupper stop it fren borkf
                  many pats. Dat tungg tho doggorino puggorino you are doin me a
                  concern shoob long woofer, smol heckin good boys stop it fren
                  bork.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-t-lg border text-white border-neutral-200 bg-[#736555]">
            <h2 className="mb-0" id="headingTwo">
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-white transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Why should I use Holistic Health Haven's products?
                <span className="ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingTwo"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4">
                <p>
                  Blop noodle horse fluffer the neighborhood pupper, big ol
                  pupper maximum borkdrive. Doggorino sub woofer ur givin me a
                  spook heckin angery woofer shoober, I am bekom fat ur givin me
                  a spook. Boofers smol sub woofer maximum borkdrive h*ck, borkf
                  smol borking doggo with a long snoot for pats h*ck. Waggy wags
                  he made many woofs wrinkler super chub, wow very biscit ruff.
                  Aqua doggo noodle horse long woofer shoob maximum borkdrive
                  puggo pats, heck snoot doing me a frighten borkf waggy wags,
                  long woofer clouds lotsa pats yapper borkdrive. Blep long
                  doggo super chub snoot, heckin boofers.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-t-lg border text-white border-neutral-200 dark:border-neutral-600 bg-[#736555]">
            <h2 className="mb-0" id="headingThree">
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Mission
                <span className="ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingThree"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4">
                <p>
                  Doggo ipsum big ol yapper woofer, much ruin diet. Length boy
                  smol blop fat boi bork, shibe floofs sub woofer floofs doing
                  me a frighten, heckin angery woofer porgo pupper. Yapper vvv
                  clouds very good spot, I am bekom fat porgo. he made many
                  woofs heck. Doggorino what a nice floof doge aqua doggo
                  puggorino most angery pupper I have ever seen, yapper very
                  good spot blop. Borkdrive h*ck noodle horse heckin good boys
                  and girls aqua doggo I am bekom fat corgo, dat tungg tho pats
                  super chub doge what a nice floof. Boofers porgo borking doggo
                  adorable doggo h*ck, porgo woofer. Long woofer h*ck waggy wags
                  lotsa pats, super chub shoob. Fluffer vvv boof many pats,
                  pupperino. Many pats adorable doggo stop it fren much ruin
                  diet long bois, shoob heckin.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={holisticProductsImg}
            alt="Holistic products"
            className="w-full max-w-sm rounded-lg shadow-none mt-12 object-cover transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
