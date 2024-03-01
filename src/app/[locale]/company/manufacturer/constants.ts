import { ManufacturerArticle } from "@/app/[locale]/company/manufacturer/types";

export const MANUFACTURER_MANUFACTURER = "Manufacturer";
export const MANUFACTURER_QUALITY = "Quality Delivered Everytime";
export const MANUFACTURER_ARTICLE: ManufacturerArticle[] = [
  {
    paragraphHeading: "General Infomation",
    paragraphs: [
      {
        type: "text",
        value: `Professional and experienced management, the best bill of materials, and the highest quality standards make AE Solar manufacturing brand of what we call German Quality. Being an international company we have inhouse manufacturing facilities, offices, branches around the globe, and at the same time we preserve in the company philosophy of our roots, <strong>family-owned company in Bavaria</strong>—the commitment to the uncompromising quality of our products and services with attention to all details.`,
      },
      {
        type: "text",
        value: `<strong>We have 2 GW annual capacity</strong>, our manufacturing facilities are equipped with the latest generation automated and robotized production lines located at a total area of 32 000 sq. m. We are proud of our manufacturing standards and are always open for site visits of our customers. To arrange a site visit and manufacturing process training please <a href="/consult" style="color: #F60109">contact us</a> or our distributors.`,
      },
      {
        type: "image",
        width: 655,
        height: 240,
        src: ["articleImg1.png", "articleImg2.png", "articleImg3.png"],
        mobileSrc: ["articleImg1Mobile.png"],
        mobileStyle: "w-[328px] h-[240px]",
        style: "md:w-full md:h-full",
      },
    ],
  },
  // {
  //   paragraphHeading: "Quality",
  //   paragraphs: [
  //     {
  //       type: "text",
  //       value: `Automation helps us to provide precise assembly, avoid defects, and lower down the costs by speeding processes to achieve proper price to quality ratio. All production lines are controlled by centralized software and each robot and machine detects and reports any malfunction online, so our engineers and operators can instantly react. Manufacturing buildings are equipped with full temperature, humidity, and dust control equipment.`,
  //     },
  //     {
  //       type: "text",
  //       value: `Areas of storage, warehouses, offices, and other facilities are separated and isolated from the manufacturing room to get the best quality performance. Each assembly stage ends up with a quality check to make sure that internal defects like micro-cracks, black spots, mixed cells of different efficiency, processing defects, insufficient soldering, internal foreign materials, cell gaps, corner defects, breakages, scratches, ribbon misalignments will not be passed to the next stage. Our testing stations comply with AAA+ standards and label marking of output after final flash testing and sorting is done only at positive tolerance.`,
  //     },
  //     {
  //       type: "image",
  //       width: 323,
  //       height: 240,
  //       src: ["articleImg2.png", "articleImg3.png"],
  //       style: "md:max-w-[49%]",
  //     },
  //     {
  //       type: "text",
  //       value: `All manufacturing facilities, production processes, and products have been revised, tested, certified, and approved by certification bodies to comply with the most strict international standards of quality, management system, safety, and industry standards to consistently provide products and services that meet customer and regulatory requirements.`,
  //     },
  //   ],
  // },
];
