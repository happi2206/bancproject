import Image from "next/image";

const accessories = [
  {
    name: "Alligator Strap",
    price: "€350",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqridJdr0O0yHYNW6rWVA9CrDqWg7qNylhiVBqf2-lG_fH49gNNX-TLciB3rXBli-2F1TTtKB9vTDumXknacwDhPm-Uyarsn2iTpOEjamP1fmY2_xNwdYbIAIDo5KwqD-_KR8SjFpwHky9G8YSfAlUyVDye7ElhFUWhKHazKn-kSh3-4JTIcsxJDXDxlV-ehuH_-wE-Mj8SWgiGxCBV6E0pvfPu7xUj0iOV3-xdH3Mr2pUL-mcCfkc5Cyw7MBwiCNdJDbm883-BNU",
    alt: "Premium black alligator leather watch strap on white marble",
  },
  {
    name: "Maintenance Kit",
    price: "€180",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjUZ6v0zlN3fniYi1-B0K06-W57VLbmvhB_rBijWHB66ijP6eB90r_9ObjW5LJjwBrPpdohLDRE8FFLbK63nR7sapCwmsdGpTjcY1fGVvItPweBngQUIOXazaE3pP4Wi_mj6AtRUVfAQjH1Wvh1pxS9wVJj8-HK6GdpUr-8i-3Xt5WMpovu6xv4T1GlPs2EdSqhIYix5anJk_bOsC-5mMu8gjKxRbqd434e4RwRU4Ze1RPMzZoK3ok7M2wkB5STd3XwmVr01YbcOY",
    alt: "Precision watchmaker toolkit on dark felt surface",
  },
];

export default function CompleteTheLook() {
  return (
    <section className="mt-40">
      <h2 className="font-headline-md text-headline-md uppercase tracking-widest mb-12">
        Complete the Look
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {accessories.map((item) => (
          <div key={item.name} className="group cursor-pointer">
            <div className="aspect-square bg-surface-container mb-6 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest mb-2">
              {item.name}
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface/50">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
