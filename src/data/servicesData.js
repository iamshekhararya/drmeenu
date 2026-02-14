
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
      "Safe and advanced cesarean delivery with expert care for both mother and baby.",
    icon: Baby,
  },
  {
    id: 2,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Normal Delivery",
    slug: "normal-delivery",
    shortDescription:
      "Natural birthing experience supported by experienced gynecologists and modern facilities",
    icon: User,
  },
  {
    id: 3,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Painless Delivery",
    slug: "painless-delivery",
    shortDescription:
      "Advanced epidural and pain-free delivery methods for a smooth birthing experience.",
    icon: Heart,
  },
  {
    id: 4,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Postpartum Care",
    slug: "postpartum-care",
    shortDescription:
      "Comprehensive post-birth recovery plans ensuring the well-being of mothers.",
    icon: Activity,
  },
  {
    id: 5,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Pregnancy Care",
    slug: "pregnancy-care",
    shortDescription:
      "Complete prenatal checkups, monitoring, and personalized pregnancy care guidance.",
    icon: Stethoscope,
  },
  {
    id: 6,
    category: "pregnancy",
    parentSlug: "pregnancy-care",
    title: "Vaccination",
    slug: "vaccination",
    shortDescription:
      "Essential vaccinations to protect mother and child during and after pregnancy.",
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
      "Advanced treatments for uterine fibroids to improve reproductive and overall health.",
    icon: Ribbon,
  },
  {
    id: 8,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Infections & STIs",
    slug: "infections-stis",
    shortDescription:
      "Diagnosis and treatment for infections and sexually transmitted diseases.",
    icon: Bug,
  },
  {
    id: 9,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Laparoscopic Surgery",
    slug: "laparoscopic-surgery",
    shortDescription:
      "Minimally invasive procedures for faster recovery and minimal scarring.",
    icon: Scissors,
  },
  {
    id: 10,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Menstrual Health",
    slug: "menstrual-health",
    shortDescription:
      "Comprehensive care for menstrual irregularities, cramps, and overall cycle health.",
    icon: Droplet,
  },
  {
    id: 11,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "PCOS Treatment",
    slug: "pcos-treatment",
    shortDescription:
      "Specialized treatment plans to manage PCOS symptoms and restore hormonal balance.",
    icon: UserCircle,
  },
  {
    id: 12,
    category: "gynecology",
    parentSlug: "gynecology",
    title: "Pelvic Pain, Breast Examination, Pap Smears",
    slug: "pelvic-pain-pap-smear",
    shortDescription:
      "Comprehensive gynecological screenings and treatments for preventive care.",
    icon: ClipboardPlus,
  },
];
