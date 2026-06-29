import Link from "next/link";
import MegaMenu from "@/components/nav/MegaMenu";
import { navJsonLd } from "@/components/nav/menuData";

export default function Header() {
  return (
    <div className="top">
      {/* SiteNavigationElement schema — resolves audit EF-9 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd()) }}
      />
      <div className="in">
        <Link className="tbrand" href="/" aria-label="LBM Solutions home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo h-[40px] w-auto lg:h-auto" src="/lbm-logo.png" alt="LBM Solutions" width={246} height={48} />
        </Link>
        <MegaMenu />
      </div>
    </div>
  );
}
