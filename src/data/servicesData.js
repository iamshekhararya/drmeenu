// import {
//   Baby,
//   User,
//   Heart,
//   Activity,
//   Stethoscope,
//   Syringe,
//   Ribbon,
//   Bug,
//   Scissors,
//   Droplet,
//   UserCircle,
//   ClipboardPlus,
// } from "lucide-react";

// export const servicesData = [
//   // 🔹 Pregnancy Care
//   {
//     id: 1,
//     category: "pregnancy",
//     title: "C-Section Delivery",
//     slug: "c-section-delivery",
//     description:
//       "Safe and advanced cesarean delivery with expert care for both mother and baby.",
//     icon: Baby,
//   },
//   {
//     id: 2,
//     category: "pregnancy",
//     title: "Normal Delivery",
//     slug: "normal-delivery",
//     description:
//       "Natural birthing experience supported by experienced gynecologists and modern facilities.",
//     icon: User,
//   },
//   {
//     id: 3,
//     category: "pregnancy",
//     title: "Painless Delivery",
//     slug: "painless-delivery",
//     description:
//       "Advanced epidural and pain-free delivery methods for a smooth birthing experience.",
//     icon: Heart,
//   },
//   {
//     id: 4,
//     category: "pregnancy",
//     title: "Postpartum Care",
//     slug: "postpartum-care",
//     description:
//       "Comprehensive post-birth recovery plans ensuring the well-being of mothers.",
//     icon: Activity,
//   },
//   {
//     id: 5,
//     category: "pregnancy",
//     title: "Pregnancy Care",
//     slug: "pregnancy-care",
//     description:
//       "Complete prenatal checkups, monitoring, and personalized pregnancy care guidance.",
//     icon: Stethoscope,
//   },
//   {
//     id: 6,
//     category: "pregnancy",
//     title: "Vaccination",
//     slug: "vaccination",
//     description:
//       "Essential vaccinations to protect mother and child during and after pregnancy.",
//     icon: Syringe,
//   },

//   // 🔹 Gynecology (image ke according)
//   {
//     id: 7,
//     category: "gynecology",
//     title: "Fibroid Treatment",
//     slug: "fibroid-treatment",
//     description:
//       "Advanced treatments for uterine fibroids to improve reproductive and overall health.",
//     icon: Ribbon,
//   },
//   {
//     id: 8,
//     category: "gynecology",
//     title: "Infections & STIs",
//     slug: "infections-stis",
//     description:
//       "Diagnosis and treatment for infections and sexually transmitted diseases.",
//     icon: Bug,
//   },
//   {
//     id: 9,
//     category: "gynecology",
//     title: "Laparoscopic Surgery",
//     slug: "laparoscopic-surgery",
//     description:
//       "Minimally invasive procedures for faster recovery and minimal scarring.",
//     icon: Scissors,
//   },
//   {
//     id: 10,
//     category: "gynecology",
//     title: "Menstrual Health",
//     slug: "menstrual-health",
//     description:
//       "Comprehensive care for menstrual irregularities, cramps, and cycle health.",
//     icon: Droplet,
//   },
//   {
//     id: 11,
//     category: "gynecology",
//     title: "PCOS Treatment",
//     slug: "pcos-treatment",
//     description:
//       "Specialized treatment plans to manage PCOS and restore hormonal balance.",
//     icon: UserCircle,
//   },
//   {
//     id: 12,
//     category: "gynecology",
//     title: "Pelvic Pain, Pap Smears",
//     slug: "pelvic-pain-pap-smear",
//     description:
//       "Comprehensive gynecological screenings and preventive care services.",
//     icon: ClipboardPlus,
//   },
// ];


import {
  Baby,
  User,
  Heart,
  Activity,
  Stethoscope,
  Syringe,
  Ribbon,
  Bug,
  Scissors,
  Droplet,
  UserCircle,
  ClipboardPlus,
} from "lucide-react";

export const servicesData = [
  // 🔹 Pregnancy Care
  {
    id: 1,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "C-Section Delivery",
    slug: "c-section-delivery",
    shortDescription:
      "Safe and advanced cesarean delivery with expert care.",
    icon: Baby,
  },
  {
    id: 2,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Normal Delivery",
    slug: "normal-delivery",
    shortDescription:
      "Natural birthing experience with expert medical support.",
    icon: User,
  },
  {
    id: 3,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Painless Delivery",
    slug: "painless-delivery",
    shortDescription:
      "Pain-free delivery using advanced epidural techniques.",
    icon: Heart,
  },
  {
    id: 4,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Postpartum Care",
    slug: "postpartum-care",
    shortDescription:
      "Comprehensive care for mothers after childbirth.",
    icon: Activity,
  },
  {
    id: 5,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Pregnancy Care",
    slug: "pregnancy-care",
    shortDescription:
      "Complete prenatal checkups and pregnancy monitoring.",
    icon: Stethoscope,
  },
  {
    id: 6,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Vaccination",
    slug: "vaccination",
    shortDescription:
      "Essential vaccinations for mother and baby safety.",
    icon: Syringe,
  },

  // 🔹 Gynecology
  {
    id: 7,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Fibroid Treatment",
    slug: "fibroid-treatment",
    shortDescription:
      "Advanced and minimally invasive fibroid treatments.",
    icon: Ribbon,
  },
  {
    id: 8,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Infections & STIs",
    slug: "infections-stis",
    shortDescription:
      "Diagnosis and treatment of gynecological infections.",
    icon: Bug,
  },
  {
    id: 9,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Laparoscopic Surgery",
    slug: "laparoscopic-surgery",
    shortDescription:
      "Minimally invasive gynecological surgeries.",
    icon: Scissors,
  },
  {
    id: 10,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Menstrual Health",
    slug: "menstrual-health",
    shortDescription:
      "Treatment for irregular periods and menstrual pain.",
    icon: Droplet,
  },
  {
    id: 11,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "PCOS Treatment",
    slug: "pcos-treatment",
    shortDescription:
      "Specialized care for PCOS and hormonal imbalance.",
    icon: UserCircle,
  },
  {
    id: 12,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Pelvic Pain & Pap Smear",
    slug: "pelvic-pain-pap-smear",
    shortDescription:
      "Preventive screenings and pelvic pain management.",
    icon: ClipboardPlus,
  },
];
