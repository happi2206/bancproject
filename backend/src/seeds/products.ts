import { IProduct } from "../models/Product";

type ProductSeed = Omit<IProduct, "createdAt" | "updatedAt">;

export const luxuryWatchProducts: ProductSeed[] = [
  {
    name: "Monolith v.1",
    slug: "monolith-v1",
    description:
      "A study in matte textures and sharp light. The Monolith v.1 is designed for those who value the silence of superior engineering over the noise of tradition. Every surface is machined from a single block of Grade 5 titanium, then finished by hand to achieve a matte-black architectural depth. The movement is a proprietary automatic caliber with a 72-hour power reserve, visible through a smoked sapphire caseback. Matte Obsidian / Sapphire Crystal / 42mm.",
    price: 12400,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPm7UZLCkys3ypsfuH0LVtPDYdbHmrgRvZ64PruZ9KWwHLWRUg2vatsjUsivm3ffbjZuflfoYk1edmGA51j9fMVv2cyl4dslI-Y9Lc4_QVMMZucOmkbLjqtgy2mWXPbRFU49x89cqHiQhXwKC2O3lKWV85oVmdQIpPzAs4M3Bw1mk0GvBlSXIzU-EH1XsPGoPDxKrD3lnc4RghiIH0Sx80lr7kUjiRSTuGTj2AaG-hRT9eBLQ8Jpy_-EPLoeHk0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGPiTCFR61TLuRaMf0wt4G39PTDubD0dJjMREw7b3gsKgnveuoB14VYuq9Ih8ououiZbbgmueRmlP4aFmTwltXrB0eRO-L4_INPb2InSq8pqMvtd22MiLWhO8cS_5r7_3E2nTYuO2x61A2vfVT_7kddTCmFCbtyEVSFKZmaMJ8TeS6K-kS8DWo17gpyH69f3sv_ayd-_UJ-BKtc_EDPMJnSDxQmPY5bGcGq2NChNB9mtN5-BPArwjYLu17fhHLoMklo0m6j2V9wNU",
    ],
    category: "Heritage",
    stock: 8,
    isFeatured: true,
  },
  {
    name: "Noir Concept 01",
    slug: "noir-concept-01",
    description:
      "Stripped of all excess. The Noir Concept 01 distills horology to its purest form — a statement in absolute minimalism. The case is coated in Black DLC, a process that takes 14 hours under vacuum to achieve a depth of colour that absorbs light rather than reflecting it. The dial is a single plate of sandblasted steel, intentionally devoid of indices.",
    price: 4200,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEr5-SzyjkpEWM0zbNKzmucvOFasDze6xCwShWk4SOhfohy034rBFnlJGfeEEkRAnQS-awh_7phChLQzWC9OdCQBQcD9fZceFVj3dpdFI61QwHPY8eI-a8HNTInRK_d3Pip9jBdUiF7K4zDF4BGp_Pz13tQcKTojDCYzQoaYXSDZbAgG9YISI29rhW1GL4N1JS5DGqF_wsPiB9t2Veuwo298zOdu1IRa3qnsKLJL6AMzY_FwieANzVnpGFzwt7BuPaovhfL0oHOM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
    ],
    category: "Collections",
    stock: 15,
    isFeatured: true,
  },
  {
    name: "Aureum Pillar",
    slug: "aureum-pillar",
    description:
      "Rose gold meets architectural restraint. The Aureum Pillar is a study in proportion — designed for the woman who defines her own luxury. The case is hand-polished across seven surface planes before the rose gold PVD is applied in a 4-micron deposit. The mesh bracelet is woven from 72 individual micro-links, each independently finished.",
    price: 12500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn4_N19fEpLIH9it_ZW3xoentlWi36BVGFCbw7bFWWgwGhP5kC9JlR4TZOXkINPSa8vRq8CSWPt94CfiixA9wrrqk_KdQLqRzz5lY7RxmJO0OacuXuito6bsuTNoSXHyCepZ0KXmg6DxnQ9BW4UGpv6Dgc_hsRkvUW6yrbz8U3LejQOhBTZmATdNVUiUDg4gZJzUMADpfC5OpyEybORA64SwHAJnHc_ivOPJFetMG4rwMpBbsIxGpdfMNbYJ11vaDeb4mZYhhvpJg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEr5-SzyjkpEWM0zbNKzmucvOFasDze6xCwShWk4SOhfohy034rBFnlJGfeEEkRAnQS-awh_7phChLQzWC9OdCQBQcD9fZceFVj3dpdFI61QwHPY8eI-a8HNTInRK_d3Pip9jBdUiF7K4zDF4BGp_Pz13tQcKTojDCYzQoaYXSDZbAgG9YISI29rhW1GL4N1JS5DGqF_wsPiB9t2Veuwo298zOdu1IRa3qnsKLJL6AMzY_FwieANzVnpGFzwt7BuPaovhfL0oHOM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
    ],
    category: "Womens",
    stock: 6,
    isFeatured: true,
  },
  {
    name: "Titan Abyss",
    slug: "titan-abyss",
    description:
      "300 metres of resolve. Engineered for depth, worn for precision — the Titan Abyss redefines what a diver can be. The case is milled from a single piece of Grade 2 titanium, the same alloy used in deep-sea submersibles. The unidirectional ceramic bezel locks with a defined click at every five-minute increment.",
    price: 6800,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMN64Zn8ZVmABf45YDXexVvIOPW2i4pdseLCBiAwpXiIFbfddAIaE17rztZBZUutnU7eelmVfKtKjJbUquUqBbuIkXn5i7ELi6gnQKs44vPse3mZqGlp0R1oPEKrFhoBB_NDc62YxKnipMFsrNf759LWW7ChPeamMYjxPqnvqXO3PNrRodXP30sYS1RfylM1krr3MQc4SuW7tbCHPxSdxjg28pQ5ShfN3jh64lVISzB8xBZZjtMiEcMtpoWvXUk54x1k9l1tJfqB0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6o5hZIXBS9qhIxrg-CjkH3Q5Vp9iYez0HdoRBzheW-slhdINeWtSRQl_JqDMRjAbFpGGtFIX88nw7BXddxT-_--jGbdb1cOuQNxMvdEQUheyk6Uyz2jZUukMzcRk_pHgXtLzY8Z7dFFUlrb6B0sLD1st4ZPeb5FgBqFKoW7rXL6eZH6hsDnhXyG1NDjXSrTNUXaBeCIJTMGSvcuDF5h2KdpZ2rgWJFqV-BtCwhp5tPVgXxWI2wBx0muNUPotX-W03RVdbFtx7WE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdixbGak4wghCoe-q3iT5CsbmjzpQpdVTMDsP7tg1_ze3PvtTZFnpsFjLR0EzzltMq_Z5K5uYFfe_kc-zl-yjH6KojEQPhm5gifHI4U-EUs8Hi_puRu3A4I8qCSpgQnCcnuGgJgwQyh34V9Ne-g2Cc724tW2GT-uF0ZLCtIrhfN-V0K9V-TGmABr6j9sv_4ZdYMglHt8TLx-dhS9su1GuRWWsBL-uWKQ3QM9MH70A6CB70wKmGa2LlKPSiMZoHifHLj7e_9yAaWuU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQsW9WSQSkpz1iaunYcpeQfHUE1XokMp_NSALO2yCc76pIhraTDKnujif03BD-xgeX1XL6QPIAr33QQdv9oOXPP00z4EkYS3wQNu8khaB8BpRzZ2z7fCtILaVJHBWRUTEKC54XbiNfotunTeeTD9es4fDdQAOJh3qZHIJpqLr9jqfAbWPkeyig_93AoNkHhfNBPiuHkEOur4FcCPnvSSd59kqONpbojX7vtmxMSCrwJOWMtm5CANGMmrdvXdYbyqx3cCqw5khbDw",
    ],
    category: "Mens",
    stock: 10,
    isFeatured: true,
  },
  {
    name: "Monolith Automatic",
    slug: "monolith-automatic",
    description:
      "Luxury mechanical watch with a black face and silver steel band, photographed in a dramatic minimalist studio setting. 42mm Steel Case.",
    price: 4250,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbLBLcPeHMXa71BcAaVneXkNsBHv4HS27elfzaFnjrkreMSqDoWs0gmrEO2UO_7MdSMCvRFm69j5Xh76hXV25yNejNuIcnzTezPZcGxNyAgPmaLP192QW8mTOuv0jwhzdoUD4iJOzhbt6XxdeMnF21kFEVBmnElym0u2tkc82NF7dFOVvH-3pu9-30D-Yvqec4-S2XwesKZOpVk9M-ZCBWYS9S4gCZvk134cF8Ps1fbZ11K9GFPkFpNYWJhcX48MA7z661_0_zkjI",
    ],
    category: "Series 01",
    stock: 5,
    isFeatured: true,
  },
  {
    name: "Obsidian GMT",
    slug: "obsidian-gmt",
    description:
      "Minimalist titanium luxury watch with premium leather strap and monochrome architectural styling. Titanium & Leather.",
    price: 3800,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpXmOewTN55lsWEP9G8uPnnNpXhVEFg1whBQR5TsQ7OvmmUkedGFoKF8Fpc5GePKlKWv4UE9gvVLGn9xEL9meEh3vyWBB7_xLvYxZd-H51gbyDxhar9uZu-nihZgaGBh6F7fznkXy7XaRmL8l86JcxntPA1wz6fOpnUm6PzypG2kXVqoM2ssUm41zR4mLsy2bJLSlAMgc-_OvucIDuvZ8WhqRvhj8N1oszOQ2G9vagCMnQoucQHSUTonNZy42L_64NDjqZzbBlEIM",
    ],
    category: "Heritage",
    stock: 12,
    isFeatured: false,
  },
  {
    name: "Structure No. 9",
    slug: "structure-no-9",
    description:
      "Skeleton luxury watch showcasing exposed mechanical movement beneath sapphire crystal glass. Skeleton Movement.",
    price: 6900,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFZK4-PrXoBoWRx9nRI4aSwT3UCzLHdzXM6IOOEnd_bgywqIdajKe_lRIn_w_Ufqn58Qv_UjVqKnB6lERPlgG0stAMOpl5fVEba7LpfAjRkC8L_Aqg8eN4Y30ev42b2I8YXHxP9IbIVBVHIXVGc7lAD0D5ofPLgP6kvk48V7FXCSedRdPBd0SLQsGjNGwf29rIqgzZGZLWQyYgPdzBDTdWneHY2R1TvuydQJO7ROqXbLOFM2K3Vgh57wbOCp49q5XMjMx31D0I4oM",
    ],
    category: "Architecture",
    stock: 0,
    isFeatured: false,
  },
  {
    name: "Dark Matter Chrono",
    slug: "dark-matter-chrono",
    description:
      "Cinematic matte ceramic chronograph photographed in a dark architectural environment with reflective marble surfaces. Matte Ceramic Composite.",
    price: 12500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfjm80uZLMOcBh2G3CVxYKg1CARF8jd-BNf4ymihzxNNAnI1WibT3sD69q8eQuZltv0_fE8wsgLeoYX_dOQ60b6P5P136Pz60sbiKKKBORXvFK8-Bo6PvHso5fCrB2fEals7vXj6iiB2z4TiJM1A6MoNn5Lz5Ojbd3KLu5wZ-Wpt0cOFj1xV1Dmk0iqWeDk7UgSBw6rKVGFtnKsAPUoteQXgNBWyex9tScr4DTY7e36eQoYnhnQbAvJ4vT2wwDshJmEkzHYUEUBE8",
    ],
    category: "Special Edition",
    stock: 7,
    isFeatured: true,
  },
  {
    name: "Prism Gold",
    slug: "prism-gold",
    description:
      "Brushed gold architectural luxury watch featuring precision-milled detailing and dramatic directional lighting. 38mm Brushed Gold.",
    price: 8200,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCilEhRnDq7efjvp3OjFxXbxXTk8iFs1aqGvryCW11pFkPgm6lcqESH77hqYkbFEL5_Ru55urv_cYZdSAuqkNuWHLleNmMi8SH-8YYL_gwKCPnZ1ePbYkBtzw3yxXbTfkon6mfpx0hsZTmZhCi5jpKsU7hkTLnyRPZEx8SZlULsLn13aDDVOD74nXrRHgYUfBZNUwwaU5wdVBy8Uo1FoholjvLluRBwOZsAEike1Yg4ga3HtfMCS2rG4IQ4qVSB24Qa1c_H93WUFSI",
    ],
    category: "Series 02",
    stock: 9,
    isFeatured: false,
  },
  {
    name: "Heritage Skeleton",
    slug: "heritage-skeleton",
    description:
      "Exposed mechanical luxury watch with brushed steel finish and dramatic architectural movement design. Exposed Movement / Brushed Steel / 40mm. Limited 1/50, Sapphire Back.",
    price: 7800,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH1V4nK_5XEZSt_1ZFXYh4CjsBf62kXQGQFyTk3j4S1XrZ8LNxM8jkdE1COKNx1XEcPeUEMReslXLLma4URDDPVTZq9aMw0DXsrY-N0d2NEXZwXr-iD8H3OAUIuCJj9oRor9obTyr-Rn4gDEY3NkeXtobZDTDo5UJ_Bd-WXnJp-qbdAawBq0H4xJL6zmm8y6IBAN0QgGpCA9XFrKA9R8WdGVNYF4-3fhEdP1c7yPov18DcIyumXDbyJU0hSXK3VdgvQxoFuJLNVIk",
    ],
    category: "Skeleton Collection",
    stock: 3,
    isFeatured: true,
  },
  {
    name: "Alligator Strap",
    slug: "alligator-strap",
    description:
      "Premium black alligator leather strap photographed in a minimalist luxury still-life composition. Black Alligator Leather.",
    price: 350,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqridJdr0O0yHYNW6rWVA9CrDqWg7qNylhiVBqf2-lG_fH49gNNX-TLciB3rXBli-2F1TTtKB9vTDumXknacwDhPm-Uyarsn2iTpOEjamP1fGVvItPweBngQUIOXazaE3pP4Wi_mj6AtRUVfAQjH1Wvh1pxS9wVJj8-HK6GdpUr-8i-3Xt5WMpovu6xv4T1GlPs2EdSqhIYix5anJk_bOsC-5mCyw7MBwiCNdJDbm883-BNU",
    ],
    category: "Accessories",
    stock: 25,
    isFeatured: false,
  },
  {
    name: "Maintenance Kit",
    slug: "maintenance-kit",
    description:
      "Professional horology maintenance toolkit featuring precision stainless steel instruments for luxury watch care. Watchmaker Toolkit.",
    price: 180,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjUZ6v0zlN3fniYi1-B0K06-W57VLbmvhB_rBijWHB66ijP6eB90r_9ObjW5LJjwBrPpdohLDRE8FFLbK63nR7sapCwmsdGpTjcY1fGVvItPweBngQUIOXazaE3pP4Wi_mj6AtRUVfAQjH1Wvh1pxS9wVJj8-HK6GdpUr-8i-3Xt5WMpovu6xv4T1GlPs2EdSqhIYix5anJk_bOsC-5mCyw7MBwiCNdJDbm883-BNU",
    ],
    category: "Accessories",
    stock: 40,
    isFeatured: false,
  },
  {
    name: "The Onyx",
    slug: "the-onyx",
    description:
      "Matte black ceramic luxury watch with intricate skeleton dial and clean architectural edges. Cinematic lighting highlights the sharp metallic textures against a minimal studio backdrop. Automatic caliber with a sophisticated, futuristic character.",
    price: 4200,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATUZ--GdNc_hb12DA1BaXLqGqr7ES1HMlnR4O_2SoY0WshJOmcIUiF1tud-5cZbc_5jqM6Guin931L1YvUOEIWq5ClcLnDp0J14j4-AB9uUh4vkuDLr91OO3Hs40XbGTY54VM7UmUiPHgGjRQaaVuWngsE2TEnAwE8e4T17EowbDnyPFZPl27fTK7AO2K4hWPQu2NJli3SA5rPFCAWf9nKzS_0l7w-2DsUQWnPZEoArEqeG8Om5YQBAT6htXI2RZCYFVsBIGFAGx8",
    ],
    category: "Collections",
    stock: 12,
    isFeatured: true,
  },
  {
    name: "The Spectre",
    slug: "the-spectre",
    description:
      "Minimalist brushed steel chronograph with a deep navy blue dial. Soft diffused lighting emphasises the metallic grain of the bezel. A high-fashion tech aesthetic with sharp focus and subtle shadow depth.",
    price: 3850,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAK57Ycn7glJahxt1IFu2QYhu-GnFofFVa-93To8u6l0dD17MTXYmp94Q-xoPWaIyQ_uit9WxLpTRZigA8aFi3MPm4NbcxViftU6QAlbOpQlCmXKVeBi0hRnNOXAqUhdqZsTmJm7upRFsn4Faw4f4tKAlXofxWjHvRQEOMr1Y7R54_HUiyJjXj3oqNOiBqsUkRuk7C_BZ85_3DQ96FY_l0gno6sRSCKpuQMe9Q4IDOwcATt9TFcSa3IAJrfP-jNSXqJpSpBjhiBV48",
    ],
    category: "Collections",
    stock: 18,
    isFeatured: false,
  },
  {
    name: "Milanese",
    slug: "milanese",
    description:
      "Gold-toned luxury watch with a clean minimalist white face and a premium gold mesh bracelet. High-contrast editorial lighting creates brilliant reflections. Manual wind movement, limited edition.",
    price: 5100,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFdfyguZez9Kk8LHv1G--eAPxhlKes2LB2yyLjCYNN8wXW2BNfgLasS5oBW8QoDyDSjsoXxDsWieFLCo4OSPXEow6cxPRYNkb86Z8Df2yhHcHpJyNxgPmoTUtizFVrLCDi3ERahZ7phWHCCcOUfY5_cqEehfMTjz62fYmrc9ctxz2DsoYSwA_06U03fKdLjEpvh6LvablVE9YYSIHWuKQx8KZRZ9g8IICBB5bnyDKrS0aw821PVfjkl9YQUs8K4BzrEOje0J8zaW4",
    ],
    category: "Heritage",
    stock: 4,
    isFeatured: true,
  },
  {
    name: "Aerospace",
    slug: "aerospace",
    description:
      "Titanium luxury watch with a dark grey sunburst dial and complex sapphire crystal reflections. Cold, professional lighting reflects high-tech horological precision in a minimalist cinematic void.",
    price: 4600,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlwa5_8sqOGHsbYmXjaoouRtHE5WhHNU7XE4QlrqJPYyFGp3Kq76-miFgU2GdZO_3DaWWZZjKLfwqC71Y73tjbVGySqhXRtCsnO33YsLNAf6VNhH2yLWuLSQfjWv-1BpfEAOuwEAScalKSNAIBhwChnIo4464hHMgK1kpZ_zqLoA-LSWY3aBBr2j6mMYB7vHM8AqI7U9Rsm4VqZKOSJasqNJNtRpFv8PyXzh-5BMzdPK84noPf4dhd0bValsbRkluEZdu_G_fLc8",
    ],
    category: "Mens",
    stock: 9,
    isFeatured: false,
  },
  {
    name: "The Carbon",
    slug: "the-carbon",
    description:
      "High-tech skeleton watch with a forged carbon fibre case and neon red second-hand accent. Hard light and sharp shadows define the unique material textures against a platinum backdrop.",
    price: 6200,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5lXqpqH9iJ-EJo17cyD9neIZJQ7CYbDmszl9EuUoRI8pG6L19zU3ViHXsptR23WvUugBeRKfaN1-8r4nSHBPemc7uRMGugfdnnSQr1dtCd_olpO8cB8B9WrdHkzbgPEnZcxE5mY92Fu-49RcCZZzAZUgA6LNn50G_rPfYAeqemIEDRZggKT7adv1P23GnhlsdmqXHB0ZkrWMsJYvtS2rkJo9QzV5Uncw0CiApGROHYqYnCq4eqikahLC2FHqhep7CHervbI7_z4o",
    ],
    category: "Collections",
    stock: 6,
    isFeatured: true,
  },
  {
    name: "Chrono Silver",
    slug: "chrono-silver",
    description:
      "Classic silver luxury chronograph with a white dial and multiple subdials. Airy, bright editorial styling with subtle silver reflections and architectural clarity. Quartz movement.",
    price: 3100,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY-W7CUkInrDgpC6iZwd51MExJPNaIj0OCYgLdAJSJP1-Ya2bYnbS4wJU1i4Whq52kLp8q5tlZicwIW-MfklsQjAJCKP10VluioieR4hgb9mXzZDzowjay-aBhdgmXxqKo4e7-rbRZWGtXHNWr2TEFjaZLWLTmxI4UV9_HZtZ0FF68b2AfhD6H_iMiQm7_KIcL5ArYmossWlUKmED_5vPkDGUeWeHfmvsfNY2FNZzuO4aGTGb3om25-Eb9xPMsCQ-8LJRqQgp0_dM",
    ],
    category: "Collections",
    stock: 22,
    isFeatured: false,
  },
  {
    name: "The Midnight",
    slug: "the-midnight",
    description:
      "Monochromatic black-on-black luxury watch with subtle gloss and matte contrasts. Pure black dial, minimalist markers, and premium integrated rubber strap. Automatic DLC-coated case.",
    price: 4900,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi1BLNQ9aeatF9E5ar2iSew-TqcytHt4YH3ul-Yhsn1ShkHfOv-dN3NNTiCPJXeH_peLok2n35kCrHST0uoj9T8QYnoNsUuC1nQSyN_wiTHlgJmR5SlixIoxxgv-NmeopcHvZ9eZ2uWhGRqLtSj1B0PXRA24dxcKOTwDXnplPsRDdOF8_3u5EzpH5fw4UeENbTrsEm5kKmOKFaVWI5FgF1FeBcpnqBV1l7p5uxzlo9AFnRdnozW7huKh7DgxQ3k_1vIbMholDD_jU",
    ],
    category: "Collections",
    stock: 14,
    isFeatured: false,
  },
  {
    name: "Veloce",
    slug: "veloce",
    description:
      "Racing-inspired luxury chronograph with perforated leather strap and brushed steel tachymeter bezel. Sharp side lighting creates dramatic shadows reinforcing a high-performance precision aesthetic.",
    price: 2750,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK7QgiPNsGWSnpoG58FwseA8fl1jvDCMrv8NzmMTI-CN3OX3ZnXK9UHFWSipeKK5THv-9I-4PVS21cSl1U5dijxUebvsx6c8k_CFUqDcHxQOarXCpCSPBIUWRqHHG7yckvMrLWB_dN8RsJMw-8Djri4YsqaFXWlU_3PVQBPt4vqHE5ongHE-4Ij1CA8QOkn1G9uly7CFth7W7FtCQlsg8SCnRE_LR-FU2DE-QbZyhIzV6irzPcaNR5biSqRuVymkVIn7mxjCfjVxk",
    ],
    category: "Mens",
    stock: 16,
    isFeatured: false,
  },
];
