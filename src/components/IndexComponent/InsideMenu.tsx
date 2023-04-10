import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

const Img = [
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_238,f_auto/v1677989412/bioden/index_box5_qers5n",
    href: "/products/hycera",
    title: "HyCera",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_238,f_auto/v1677989412/bioden/index_box1_qdp3bm",
    href: "/products/zircos-e1",
    title: "ZIRCOS-E",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_238,f_auto/v1677989412/bioden/index_box2_shwycx",
    href: "/products/zircos-com1",
    title: "ZIRCOS-COM",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_238,f_auto/v1677989412/bioden/index_box3_xdngsw",
    href: "/products/jig-gel",
    title: "JIG-GEL",
  },
];

export default component$(() => {
  return (
    <div class="flex flex-row justify-between">
      {Img.map((src, index) => {
        return (
          <Link href={src.href} key={`im${index}`}>
            <div class="h-[178px] w-[238px]">
              <Image
                class="absolute"
                alt={`indexbox${index+1}img`}
                layout="constrained"
                height={178}
                width={238}
                src={src.src}
                srcSet=""
              />
              <div class="absolute z-10">
                <p class="leading-[30px] h-[30px] text-2xl text-white pl-3 pt-2">
                  {src.title}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
});
