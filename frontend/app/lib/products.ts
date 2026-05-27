export type ProductImage = { src: string; alt: string };

export type SpecRow = { label: string; value: string };

export type RelatedProduct = {
  slug: string;
  name: string;
  collection: string;
  price: string;
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: string;
  description: string;
  specs: string[];
  specsTable: SpecRow[];
  gallery: {
    main: ProductImage;
    secondary: [ProductImage, ProductImage];
    wrist: ProductImage;
  };
  descriptionBlock: { heading: string; body1: string; body2: string };
  related: RelatedProduct[];
};

const products: Product[] = [
  {
    slug: "monolith-v1",
    name: "Monolith v.1",
    collection: "Heritage",
    price: "$12,400",
    description:
      "A study in matte textures and sharp light. The Monolith v.1 is designed for those who value the silence of superior engineering over the noise of tradition.",
    specs: ["Automatic Caliber", "72HR Reserve", "Grade 5 Titanium", "Water 100M"],
    specsTable: [
      { label: "Case Diameter", value: "42mm" },
      { label: "Case Material", value: "Grade 5 Titanium" },
      { label: "Movement", value: "BANC Caliber B.01 Automatic" },
      { label: "Power Reserve", value: "72 Hours" },
      { label: "Crystal", value: "Smoked Sapphire" },
      { label: "Water Resistance", value: "100M / 10ATM" },
      { label: "Strap", value: "Integrated Titanium Bracelet" },
      { label: "Weight", value: "112g" },
    ],
    gallery: {
      main: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
        alt: "Macro cinematic shot of the Monolith v.1 movement with exposed gears",
      },
      secondary: [
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
          alt: "Close-up of the Monolith v.1 dial with monospaced typography",
        },
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPm7UZLCkys3ypsfuH0LVtPDYdbHmrgRvZ64PruZ9KWwHLWRUg2vatsjUsivm3ffbjZuflfoYk1edmGA51j9fMVv2cyl4dslI-Y9Lc4_QVMMZucOmkbLjqtgy2mWXPbRFU49x89cqHiQhXwKC2O3lKWV85oVmdQIpPzAs4M3Bw1mk0GvBlSXIzU-EH1XsPGoPDxKrD3lnc4RghiIH0Sx80lr7kUjiRSTuGTj2jJNcdymJ2AaG-hRT9eBLQ8Jpy_-EPLoeHk0",
          alt: "Profile shot showing the crown and sapphire crystal of the Monolith v.1",
        },
      ],
      wrist: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
        alt: "Monolith v.1 worn on the wrist in a minimalist concrete setting",
      },
    },
    descriptionBlock: {
      heading: "Engineering Purity",
      body1:
        "The Monolith v.1 represents a total commitment to structural integrity. Every surface is machined from a single block of Grade 5 titanium, then finished by hand in our Milanese atelier to achieve a matte-black architectural depth.",
      body2:
        "The movement is a proprietary automatic caliber with a 72-hour power reserve, visible through a smoked sapphire caseback that simulates the darkness of a moonless night.",
    },
    related: [
      {
        slug: "obsidian-chrono",
        name: "Obsidian Chrono",
        collection: "Bespoke",
        price: "$15,200",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhuRekba4IKPdsVTKYovd4KBeuEjJaiVTCnqwlz0Dbb84YHMuW79dBjIIGVrQrbWI-oaZMcBVzoLdmUrKW_ia5nGCXX4INiWz6g4elYOOEMbWslOehOfYuzWzSkmd8dunsiPqnWLwzxYyoOHh_TZmlqPAtxmFQVAeshFPEZymQLmNCqXcwrytt3LP5dHQFIIJePkXPPvlBkOK5zvQymqmLxibMtf2c2fB_58iT9dgatO3oajYjPlxn9RLQJT5ygJJtlIsDi1tP11U",
        alt: "Obsidian Chrono on stone pedestal with dramatic lighting",
      },
      {
        slug: "spectre-ii",
        name: "Spectre II",
        collection: "Heritage",
        price: "$8,900",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXBODA5bwXna8p7IIq-GfHO-lz67C8WA98953yjnWgBK59RsYg0kmYNa7NdGE8dNsdOFq5VGv-lqBvq9n19xRPSwCGrpqupOxjwcMn6RHiNw9JyqMEw1D3Sdk1PW4RPXs_s4lTpuFxuEUNIhzWlvCQiT3QECUNELJrLOil3gTaoGuJhJV5JtOQT5EjEIO4ZgQyYYO-Jn_xsBslmobpQG5oDHjJXjjMSR--7hx_by3xDJASL_XSG-NrxuYyPvS6m_qVXJTrmhPOSnw",
        alt: "Spectre II silver watch on reflective black surface",
      },
      {
        slug: "lunar-orbit",
        name: "Lunar Orbit",
        collection: "Collections",
        price: "$11,500",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tPiYR_VOSN__xH6sO2SdSCGEvHOGXB1Hqa24VIYLwBtmgM62hAGO82v1Q_vlz_61T8f3ii7fg_6osuvo9PHmYpkcgvg36qBgSJSpKwVV_QSCbLWEeGqzlR7iv4Qtg1Y604RI4irLNxv37UBJlNMFc09NOxFnjKqowU9pV8XjvAY-bEflTbYAB5pjpCpj9d9u_GTjFkPDb3dlEDObsQsoWodx_WNjuEYk3ot4_0JrTEW4kiai7tKuuGm8AgKNdvZWyBotKA0tb3M",
        alt: "Lunar Orbit macro detail shot of crown and side buttons",
      },
    ],
  },
  {
    slug: "noir-concept-01",
    name: "Noir Concept 01",
    collection: "Collections",
    price: "€4,200",
    description:
      "Stripped of all excess. The Noir Concept 01 distills horology to its purest form — a statement in absolute minimalism.",
    specs: ["42mm Case", "Automatic", "Black DLC Steel", "50M Water Resistant"],
    specsTable: [
      { label: "Case Diameter", value: "42mm" },
      { label: "Case Material", value: "316L Steel, Black DLC" },
      { label: "Movement", value: "ETA 2824-2 Automatic" },
      { label: "Power Reserve", value: "38 Hours" },
      { label: "Crystal", value: "Flat Sapphire, AR Coated" },
      { label: "Water Resistance", value: "50M / 5ATM" },
      { label: "Strap", value: "Black Rubber / Steel Option" },
      { label: "Weight", value: "98g" },
    ],
    gallery: {
      main: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEr5-SzyjkpEWM0zbNKzmucvOFasDze6xCwShWk4SOhfohy034rBFnlJGfeEEkRAnQS-awh_7phChLQzWC9OdCQBQcD9fZceFVj3dpdFI61QwHPY8eI-a8HNTInRK_d3Pip9jBdUiF7K4zDF4BGp_Pz13tQcKTojDCYzQoaYXSDZbAgG9YISI29rhW1GL4N1JS5DGqF_wsPiB9t2Veuwo298zOdu1IRa3qnsKLJL6AMzY_FwieANzVnpGFzwt7BuPaovhfL0oHOM",
        alt: "Noir Concept 01 studio shot — minimalist black dial, ultra-clean",
      },
      secondary: [
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
          alt: "Noir Concept 01 movement detail",
        },
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
          alt: "Noir Concept 01 dial close-up",
        },
      ],
      wrist: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
        alt: "Noir Concept 01 worn on wrist",
      },
    },
    descriptionBlock: {
      heading: "Absolute Black",
      body1:
        "The Noir Concept 01 begins with a 316L stainless steel case coated in Black DLC — a process that takes 14 hours under vacuum to achieve a depth of colour that absorbs light rather than reflecting it.",
      body2:
        "The dial is a single plate of sandblasted steel, intentionally devoid of indices. Time is told through feel, not habit.",
    },
    related: [
      {
        slug: "monolith-v1",
        name: "Monolith v.1",
        collection: "Heritage",
        price: "$12,400",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
        alt: "Monolith v.1 movement macro",
      },
      {
        slug: "titan-abyss",
        name: "Titan Abyss",
        collection: "Mens",
        price: "€6,800",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMN64Zn8ZVmABf45YDXexVvIOPW2i4pdseLCBiAwpXiIFbfddAIaE17rztZBZUutnU7eelmVfKtKjJbUquUqBbuIkXn5i7ELi6gnQKs44vPse3mZqGlp0R1oPEKrFhoBB_NDc62YxKnipMFsrNf759LWW7ChPeamMYjxPqnvqXO3PNrRodXP30sYS1RfylM1krr3MQc4SuW7tbCHPxSdxjg28pQ5ShfN3jh64lVISzB8xBZZjtMiEcMtpoWvXUk54x1k9l1tJfqB0",
        alt: "Titan Abyss titanium diver watch",
      },
      {
        slug: "obsidian-chrono",
        name: "Obsidian Chrono",
        collection: "Bespoke",
        price: "$15,200",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhuRekba4IKPdsVTKYovd4KBeuEjJaiVTCnqwlz0Dbb84YHMuW79dBjIIGVrQrbWI-oaZMcBVzoLdmUrKW_ia5nGCXX4INiWz6g4elYOOEMbWslOehOfYuzWzSkmd8dunsiPqnWLwzxYyoOHh_TZmlqPAtxmFQVAeshFPEZymQLmNCqXcwrytt3LP5dHQFIIJePkXPPvlBkOK5zvQymqmLxibMtf2c2fB_58iT9dgatO3oajYjPlxn9RLQJT5ygJJtlIsDi1tP11U",
        alt: "Obsidian Chrono on stone pedestal",
      },
    ],
  },
  {
    slug: "aureum-pillar",
    name: "Aureum Pillar",
    collection: "Womens",
    price: "€12,500",
    description:
      "Rose gold meets architectural restraint. The Aureum Pillar is a study in proportion — designed for the woman who defines her own luxury.",
    specs: ["40mm Case", "Rose Gold PVD", "NH35 Movement", "30M Water Resistant"],
    specsTable: [
      { label: "Case Diameter", value: "40mm" },
      { label: "Case Material", value: "316L Steel, Rose Gold PVD" },
      { label: "Movement", value: "NH35 Automatic" },
      { label: "Power Reserve", value: "41 Hours" },
      { label: "Crystal", value: "Domed Sapphire, AR Coated" },
      { label: "Water Resistance", value: "30M / 3ATM" },
      { label: "Strap", value: "Rose Gold Mesh Bracelet" },
      { label: "Weight", value: "87g" },
    ],
    gallery: {
      main: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn4_N19fEpLIH9it_ZW3xoentlWi36BVGFCbw7bFWWgwGhP5kC9JlR4TZOXkINPSa8vRq8CSWPt94CfiixA9wrrqk_KdQLqRzz5lY7RxmJO0OacuXuito6bsuTNoSXHyCepZ0KXmg6DxnQ9BW4UGpv6Dgc_hsRkvUW6yrbz8U3LejQOhBTZmATdNVUiUDg4gZJzUMADpfC5OpyEybORA64SwHAJnHc_ivOPJFetMG4rwMpBbsIxGpdfMNbYJ11vaDeb4mZYhhvpJg",
        alt: "Aureum Pillar rose gold watch — polished edges and sapphire crystal",
      },
      secondary: [
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEr5-SzyjkpEWM0zbNKzmucvOFasDze6xCwShWk4SOhfohy034rBFnlJGfeEEkRAnQS-awh_7phChLQzWC9OdCQBQcD9fZceFVj3dpdFI61QwHPY8eI-a8HNTInRK_d3Pip9jBdUiF7K4zDF4BGp_Pz13tQcKTojDCYzQoaYXSDZbAgG9YISI29rhW1GL4N1JS5DGqF_wsPiB9t2Veuwo298zOdu1IRa3qnsKLJL6AMzY_FwieANzVnpGFzwt7BuPaovhfL0oHOM",
          alt: "Aureum Pillar dial close-up",
        },
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
          alt: "Aureum Pillar caseback detail",
        },
      ],
      wrist: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
        alt: "Aureum Pillar worn on wrist in lifestyle setting",
      },
    },
    descriptionBlock: {
      heading: "Gilded Restraint",
      body1:
        "The Aureum Pillar case is hand-polished across seven surface planes before the rose gold PVD is applied in a 4-micron deposit. The result is a warmth that reads as precious without ever becoming ostentatious.",
      body2:
        "The mesh bracelet is woven from 72 individual micro-links, each independently finished. It drapes rather than clasps — an architectural detail worn against the skin.",
    },
    related: [
      {
        slug: "monolith-v1",
        name: "Monolith v.1",
        collection: "Heritage",
        price: "$12,400",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
        alt: "Monolith v.1",
      },
      {
        slug: "noir-concept-01",
        name: "Noir Concept 01",
        collection: "Collections",
        price: "€4,200",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEr5-SzyjkpEWM0zbNKzmucvOFasDze6xCwShWk4SOhfohy034rBFnlJGfeEEkRAnQS-awh_7phChLQzWC9OdCQBQcD9fZceFVj3dpdFI61QwHPY8eI-a8HNTInRK_d3Pip9jBdUiF7K4zDF4BGp_Pz13tQcKTojDCYzQoaYXSDZbAgG9YISI29rhW1GL4N1JS5DGqF_wsPiB9t2Veuwo298zOdu1IRa3qnsKLJL6AMzY_FwieANzVnpGFzwt7BuPaovhfL0oHOM",
        alt: "Noir Concept 01",
      },
      {
        slug: "titan-abyss",
        name: "Titan Abyss",
        collection: "Mens",
        price: "€6,800",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMN64Zn8ZVmABf45YDXexVvIOPW2i4pdseLCBiAwpXiIFbfddAIaE17rztZBZUutnU7eelmVfKtKjJbUquUqBbuIkXn5i7ELi6gnQKs44vPse3mZqGlp0R1oPEKrFhoBB_NDc62YxKnipMFsrNf759LWW7ChPeamMYjxPqnvqXO3PNrRodXP30sYS1RfylM1krr3MQc4SuW7tbCHPxSdxjg28pQ5ShfN3jh64lVISzB8xBZZjtMiEcMtpoWvXUk54x1k9l1tJfqB0",
        alt: "Titan Abyss",
      },
    ],
  },
  {
    slug: "titan-abyss",
    name: "Titan Abyss",
    collection: "Mens",
    price: "€6,800",
    description:
      "300 metres of resolve. Engineered for depth, worn for precision — the Titan Abyss redefines what a diver can be.",
    specs: ["44mm Case", "Titanium", "300M Diver", "Ceramic Bezel"],
    specsTable: [
      { label: "Case Diameter", value: "44mm" },
      { label: "Case Material", value: "Grade 2 Titanium" },
      { label: "Movement", value: "NH35 Automatic" },
      { label: "Power Reserve", value: "41 Hours" },
      { label: "Crystal", value: "Box Sapphire, AR Coated" },
      { label: "Water Resistance", value: "300M / 30ATM" },
      { label: "Bezel", value: "Unidirectional Ceramic" },
      { label: "Weight", value: "134g" },
    ],
    gallery: {
      main: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMN64Zn8ZVmABf45YDXexVvIOPW2i4pdseLCBiAwpXiIFbfddAIaE17rztZBZUutnU7eelmVfKtKjJbUquUqBbuIkXn5i7ELi6gnQKs44vPse3mZqGlp0R1oPEKrFhoBB_NDc62YxKnipMFsrNf759LWW7ChPeamMYjxPqnvqXO3PNrRodXP30sYS1RfylM1krr3MQc4SuW7tbCHPxSdxjg28pQ5ShfN3jh64lVISzB8xBZZjtMiEcMtpoWvXUk54x1k9l1tJfqB0",
        alt: "Titan Abyss titanium diver — ceramic bezel and luminous markers",
      },
      secondary: [
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
          alt: "Titan Abyss movement detail",
        },
        {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
          alt: "Titan Abyss crown and crown guard detail",
        },
      ],
      wrist: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
        alt: "Titan Abyss worn on wrist",
      },
    },
    descriptionBlock: {
      heading: "Depth Charge",
      body1:
        "The Titan Abyss case is milled from a single piece of Grade 2 titanium — the same alloy used in deep-sea submersibles. At 44mm it commands the wrist without dominating it, balanced by a weight that defies its visual mass.",
      body2:
        "The unidirectional ceramic bezel locks with a defined click at every five-minute increment. The luminous markers are applied by hand in three layers to achieve a maximum glow duration of 8 hours post-saturation.",
    },
    related: [
      {
        slug: "monolith-v1",
        name: "Monolith v.1",
        collection: "Heritage",
        price: "$12,400",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
        alt: "Monolith v.1",
      },
      {
        slug: "noir-concept-01",
        name: "Noir Concept 01",
        collection: "Collections",
        price: "€4,200",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEr5-SzyjkpEWM0zbNKzmucvOFasDze6xCwShWk4SOhfohy034rBFnlJGfeEEkRAnQS-awh_7phChLQzWC9OdCQBQcD9fZceFVj3dpdFI61QwHPY8eI-a8HNTInRK_d3Pip9jBdUiF7K4zDF4BGp_Pz13tQcKTojDCYzQoaYXSDZbAgG9YISI29rhW1GL4N1JS5DGqF_wsPiB9t2Veuwo298zOdu1IRa3qnsKLJL6AMzY_FwieANzVnpGFzwt7BuPaovhfL0oHOM",
        alt: "Noir Concept 01",
      },
      {
        slug: "aureum-pillar",
        name: "Aureum Pillar",
        collection: "Womens",
        price: "€12,500",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn4_N19fEpLIH9it_ZW3xoentlWi36BVGFCbw7bFWWgwGhP5kC9JlR4TZOXkINPSa8vRq8CSWPt94CfiixA9wrrqk_KdQLqRzz5lY7RxmJO0OacuXuito6bsuTNoSXHyCepZ0KXmg6DxnQ9BW4UGpv6Dgc_hsRkvUW6yrbz8U3LejQOhBTZmATdNVUiUDg4gZJzUMADpfC5OpyEybORA64SwHAJnHc_ivOPJFetMG4rwMpBbsIxGpdfMNbYJ11vaDeb4mZYhhvpJg",
        alt: "Aureum Pillar",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export default products;
