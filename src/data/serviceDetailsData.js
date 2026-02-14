//About section
import n4 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n4.jpg";
// ================= C-SECTION IMAGES =================
import c1 from "../assets/images/obs-gynae/pregnency-care/c-section-delivery/c-1.avif";
import c2 from "../assets/images/obs-gynae/pregnency-care/c-section-delivery/c-2.jpg";
import c3 from "../assets/images/obs-gynae/pregnency-care/c-section-delivery/c-3.jpg";
import c4 from "../assets/images/obs-gynae/pregnency-care/c-section-delivery/c4.jpg";

// ================= N-SECTION IMAGES =================
import n2 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n2.jpg";
import n3 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n3.jpeg";
import n1 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n1.jpg";
import n5 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n5.jpg";

// ================= P-SECTION IMAGES =================
import p1 from "../assets/images/obs-gynae/pregnency-care/painless-delivery/p1.jpg";
import p2 from "../assets/images/obs-gynae/pregnency-care/painless-delivery/p2.jpg";
import p3 from "../assets/images/obs-gynae/pregnency-care/painless-delivery/p3.png";
import p4 from "../assets/images/obs-gynae/pregnency-care/painless-delivery/p4.webp";

// ================= Pc-SECTION IMAGES =================
import pc1 from "../assets/images/obs-gynae/pregnency-care/postpartum-care/pc2.jpg";
import pc2 from "../assets/images/obs-gynae/pregnency-care/postpartum-care/pc3.jpg";
import pc3 from "../assets/images/obs-gynae/pregnency-care/postpartum-care/pc1.jpg";
import pc4 from "../assets/images/obs-gynae/pregnency-care/postpartum-care/pc4.jpg";

// ================= Pr-SECTION IMAGES =================
import pr1 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n1.jpg";
import pr2 from "../assets/images/obs-gynae/pregnency-care/normal-delivery/n2.jpg";
import pr3 from "../assets/images/obs-gynae/pregnency-care/pr3.jpg";
import pr4 from "../assets/images/obs-gynae/pregnency-care/pr4.webp";

// ================= vp-SECTION IMAGES =================
import vp1 from "../assets/images/obs-gynae/pregnency-care/vaccination/vp1.jpg";
import vp2 from "../assets/images/obs-gynae/pregnency-care/vaccination/vp2.jpg";
import vp3 from "../assets/images/obs-gynae/pregnency-care/vaccination/vp3.webp";
import vp4 from "../assets/images/obs-gynae/pregnency-care/vaccination/vp4.webp";

// ================= vp-SECTION IMAGES =================
import f1 from "../assets/images/obs-gynae/gynecology/fibroid-treatment/f1.jpg";
import f2 from "../assets/images/obs-gynae/gynecology/fibroid-treatment/f2.jpg";
import f3 from "../assets/images/obs-gynae/gynecology/fibroid-treatment/f3.webp";
import f4 from "../assets/images/obs-gynae/gynecology/fibroid-treatment/f4.jpg";

// ================= fas-SECTION IMAGES =================
import fa1 from "../assets/images/obs-gynae/gynecology/infections-stis/fa1.jpg";
import fa2 from "../assets/images/obs-gynae/gynecology/infections-stis/fa2.jpg";
import fa3 from "../assets/images/obs-gynae/gynecology/infections-stis/fa3.jpg";
import fa4 from "../assets/images/obs-gynae/gynecology/infections-stis/fa4.jpg";

// ================= fb-SECTION IMAGES =================
import fb1 from "../assets/images/obs-gynae/gynecology/laparoscopic-surgery/fb1.jpg";
import fb3 from "../assets/images/obs-gynae/gynecology/laparoscopic-surgery/fb3.jpg";
import fb2 from "../assets/images/obs-gynae/gynecology/laparoscopic-surgery/fb2.jpg";
import fb4 from "../assets/images/obs-gynae/gynecology/laparoscopic-surgery/fb4.jpg";


// ================= fc-SECTION IMAGES =================
import fc1 from "../assets/images/obs-gynae/gynecology/menstrual-health/fc1.jpg";
import fc2 from "../assets/images/obs-gynae/gynecology/menstrual-health/fc2.jpg";
import fc3 from "../assets/images/obs-gynae/gynecology/menstrual-health/fc3.jpg";
import fc4 from "../assets/images/obs-gynae/gynecology/menstrual-health/fc4.jpg";

// ================= fd-SECTION IMAGES =================
import fd1 from "../assets/images/obs-gynae/gynecology/pcos-treatment/fd1.jpg";
import fd2 from "../assets/images/obs-gynae/gynecology/pcos-treatment/fd2.jpg";
import fd3 from "../assets/images/obs-gynae/gynecology/pcos-treatment/fd3.jpg";
import fd4 from "../assets/images/obs-gynae/gynecology/pcos-treatment/fd4.jpg";

// ================= pa-SECTION IMAGES =================
import pa1 from "../assets/images/obs-gynae/gynecology/pelvic-pain-breast-exams-pap-smears/pa1.jpg";
import pa2 from "../assets/images/obs-gynae/gynecology/pelvic-pain-breast-exams-pap-smears/pa2.jpg";
import pa3 from "../assets/images/obs-gynae/gynecology/pelvic-pain-breast-exams-pap-smears/pa3.jpg";
import pa4 from "../assets/images/obs-gynae/gynecology/pelvic-pain-breast-exams-pap-smears/pa4.jpg";

export const serviceDetailsData = {
  "c-section-delivery": {
    title: "C-Section Delivery",

    intro:
      "A cesarean section (C-section) is a surgical procedure to deliver a baby through incisions made in the mother’s abdomen and uterus. It is recommended when a normal vaginal birth may pose risks to the mother or baby.",

    heroExtraText:
      "Thanks to modern surgical techniques, advanced anesthesia, and improved post-operative care, C-sections today are safe and commonly performed procedures, ensuring the safety of both mother and baby.",

    heroImage: c1, // ✅ HERO IMAGE ADD

    sections: [
      // ================= MEDICAL SECTION =================
      {
        medicalheading: "Medical Reasons for a C-Section",
        heading: "Medical Reasons for a C-Section",

        description:
          "Doctors may recommend a C-section for several medical or pregnancy-related concerns. Some of the most frequent include:",

        para: "Doctors may recommend a C-section for several medical or pregnancy-related concerns. Some of the most frequent include:",

        points: [
          "Breech or transverse: position where the baby is not head-down",
          "Placenta previa: where the placenta covers the cervix",
          "Fetal distress: due to reduced oxygen supply or abnormal heart rate",
          "Multiple pregnancies: such as twins or triplets",
          "History of previous C-section: repeat procedure may be safer",
          "Maternal health issues: hypertension, cardiac disease, or infections",
        ],

        image: c4,
      },

      // ================= PROCEDURE SECTION =================
      {
        heading: "What Happens During The Procedure",

        description:
          "A scheduled C-section is usually performed under spinal or epidural anesthesia, allowing the mother to stay conscious while remaining pain-free throughout the delivery.",

        points: [
          "Preparation – IV line, anesthesia, and catheter placement.",
          "Incision – A horizontal cut made just above the pelvic area.",
          "Delivery – Baby is gently lifted out through the uterus.",
          "Closure – Uterus and abdominal layers are carefully stitched.",
        ],

        image: c2,
      },

      // ================= RECOVERY SECTION =================
      {
        heading: "Recovery And Postnatal Care",

        description:
          "Healing from a C-section generally takes longer than vaginal delivery. Most women require 2–4 days in the hospital and several weeks of rest at home.",

        points: [
          "Adequate rest – Avoid heavy lifting for 6–8 weeks.",
          "Pain relief medications – Safe medicines prescribed by doctor.",
          "Incision care – Keep wound clean and dry.",
          "Healthy diet – Proper nutrition supports healing.",
          "Follow-up visits – Regular checkups ensure recovery progress.",
          "Emotional support – Family care helps faster recovery.",
        ],

        image: c3, // ✅ RECOVERY IMAGE ADD
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading:
        "Why Choose Dr. Meenu’s Gynecology & Fertility Clinic For C-Section Delivery",

      para: "Our clinic offers safe, modern, and patient-centered cesarean delivery care with experienced obstetricians, advanced facilities, and complete maternal and neonatal support.",

      points: [
        "Skilled obstetric and surgical specialists",
        "24×7 emergency assistance with fetal monitoring",
        "Modern operation theaters with neonatal care",
        "Personalized birth planning and support",
        "Complete post-delivery recovery care",
        "Comfortable and safe hospital environment",
      ],

      image: n3, // ✅ DOCTOR IMAGE ADD (new image recommended)
    },
  },

  "normal-delivery": {
    title: "Normal Delivery",

    intro:
      "Normal delivery means giving birth naturally through the vaginal canal without surgery. It is the most common and preferred way of childbirth when there are no risks to the mother or baby.",

    heroExtraText: `The body works with nature during this process—uterine contractions help push the baby out safely. For healthy pregnancies, normal delivery is often the safest method, allowing mothers to recover faster and offering many health benefits for the baby.<br/><br/>
     At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we support natural birth through safe medical practices, personalized care, and emotional guidance.`,

    heroImage: n1, // ✅ HERO IMAGE ADD

    sections: [
      // ================= BENEFITS SECTION =================
      {
        medicalheading: "Benefits of Normal Delivery",
        heading: "Benefits of Normal Delivery",

        para: "Choosing vaginal delivery provides many health advantages for both mother and baby:",

        description:
          "Choosing vaginal delivery provides many health advantages for both mother and baby:",

        points: [
          "Quick Recovery: Mothers can usually walk and start light activities within a few hours.",
          "Lower Risk of Infection: No surgical incision reduces complications.",
          "Immediate Bonding: Skin-to-skin contact helps breastfeeding.",
          "Stronger Baby Immunity: Natural exposure supports gut health.",
          "Shorter Hospital Stay: Most mothers go home within 1–2 days.",
        ],

        image: n2, // ✅ BENEFITS IMAGE
      },

      // ================= PREPARATION SECTION =================
      {
        heading: "How to Prepare for a Normal Delivery",

        description:
          "Proper preparation helps make childbirth smoother and more comfortable. At our clinic, we guide expecting mothers with:",

        points: [
          "Prenatal Exercises – Yoga, breathing techniques, and stretches.",
          "Healthy Nutrition – Balanced diet for mother and baby.",
          "Regular Check-ups – Monitoring baby’s growth and position.",
          "Labor Education – Pain relief and pushing techniques.",
        ],

        image: n5, // ✅ PREPARATION IMAGE
      },

      // ================= LABOR PROCESS SECTION =================
      {
        heading: "What Happens During Labor?",

        description:
          "Labor usually occurs in stages and can last several hours. A normal delivery typically involves:",

        points: [
          "Early Labor – Mild contractions and gradual cervical opening.",
          "Active Labor – Stronger and frequent contractions.",
          "Transition Phase – Most intense stage before pushing.",
          "Delivery – Baby is safely born with medical guidance.",
          "Afterbirth – Placenta delivery and newborn care.",
        ],

        image: n4, // ✅ LABOR IMAGE
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading:
        "Why Choose Dr. Meenu’s Gynecology & Fertility Clinic For Normal Delivery",

      para: "At Dr. Meenu’s Clinic, we make childbirth a safe, comfortable, and memorable journey. Here’s what makes us trusted by so many families:",

      points: [
        "Highly experienced gynecology team focused on natural birthing",
        "24×7 labor monitoring and emergency support",
        "Modern and comfortable labor rooms",
        "Personalized birth plans for every mother",
        "Continuous emotional and medical support",
        "Comprehensive postnatal care and breastfeeding guidance",
      ],

      image: n3, // ✅ DOCTOR IMAGE
    },
  },

  "painless-delivery": {
    title: "Painless Delivery",

    intro: `Painless delivery is a childbirth method where <strong>epidural anesthesia</strong> is used to reduce or completely remove the pain of labor. The mother stays awake, alert, and actively involved in the birth process, but without the intense discomfort usually felt during contractions. This option provides a safer and more comfortable birthing experience while keeping the baby’s health secure.`,

    heroExtraText: `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we know every woman’s birthing experience is unique. That’s why we provide personalized pain relief options – including epidurals – so mothers can welcome their baby with confidence and peace of mind.`,

    heroImage: p1, // ✅ HERO IMAGE

    sections: [
      // ================= EPIDURAL WORKING =================
      {
        medicalheading: "How Does Epidural Work in Labor?",
        heading: "How Does Epidural Work in Labor?",

        para: "An epidural is a form of regional anesthesia given through a small tube placed in the lower back. It numbs the lower half of the body but allows the mother to remain conscious and responsive throughout delivery.",

        description:
          "The epidural blocks pain signals from reaching the brain while allowing the mother to stay alert and actively participate in childbirth.",

        points: [
          "Administered during active labor when cervix is dilated.",
          "Pain relief begins within 10–15 minutes.",
          "Contractions are felt as pressure, not pain.",
          "Continuous monitoring by trained anesthesiologist.",
          "Dosage adjusted based on comfort and labor progress.",
        ],

        image: p2, // ✅ EPIDURAL IMAGE
      },

      // ================= BENEFITS =================
      {
        heading: "Benefits of Painless Delivery",

        description:
          "Choosing painless delivery makes childbirth more comfortable and less stressful, especially for first-time mothers.",

        points: [
          "Reduces labor pain significantly.",
          "Helps mother stay calm and relaxed.",
          "Provides more energy for pushing.",
          "Improves overall birth experience.",
          "Reduces stress and anxiety during labor.",
          "Supports smoother vaginal delivery.",
        ],

        image: p3, // ✅ BENEFITS IMAGE
      },

      // ================= SAFETY =================
      {
        heading: "Is Painless Delivery Safe for Mother and Baby?",

        description:
          "Epidural-assisted delivery is a safe and widely used method worldwide. With proper medical supervision, risks are minimal.",

        points: [
          "Safe for both mother and baby.",
          "Mother remains conscious and alert.",
          "Allows natural pushing during delivery.",
          "Side effects are rare and manageable.",
          "Constant monitoring ensures safety.",
          "Used globally as a standard pain relief method.",
        ],

        image: p4, // ✅ SAFETY IMAGE
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading:
        "Why Choose Dr. Meenu’s Gynecology & Fertility Clinic for Painless Delivery?",

      para: "At Dr. Meenu’s Clinic, we ensure painless delivery is safe, comfortable, and empowering with expert care and modern facilities.",

      points: [
        "Expert gynecologists and anesthesiologists",
        "Safe epidural administration techniques",
        "24×7 monitoring of mother and baby",
        "Advanced and comfortable labor rooms",
        "Personalized pain relief care plans",
        "Complete post-delivery support",
      ],

      image: n3, // ✅ DOCTOR IMAGE
    },
  },

  "postpartum-care": {
    title: "Postpartum Care",

    intro: `Postpartum care is the medical and emotional support a woman receives after childbirth. Often called the <strong>“fourth trimester,”</strong> this phase begins right after delivery and usually lasts 6 to 8 weeks. During this time, the body heals, hormones adjust, and mothers adapt to new routines with their baby.`,

    heroExtraText: `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we understand that postpartum is a beautiful yet challenging journey. Our dedicated team provides complete postnatal care, ensuring mothers recover smoothly — physically, emotionally, and mentally.`,

    heroImage: pc1, // ✅ HERO IMAGE

    sections: [
      // ================= PHYSICAL RECOVERY =================
      {
        medicalheading: "Physical Recovery After Childbirth",
        heading: "Physical Recovery After Childbirth",

        para: "Whether you’ve had a normal delivery or a C-section, your body needs proper care and medical guidance to heal safely.",

        description:
          "Our clinic provides complete physical recovery support to ensure safe healing and restore strength.",

        points: [
          "Monitoring of stitches and incision healing",
          "Guidance on managing postpartum bleeding (Lochia)",
          "Pain management and recovery support",
          "Personalized nutrition plans for faster healing",
          "Postnatal exercises to regain strength",
          "Regular health check-ups and recovery tracking",
        ],

        image: pc2, // ✅ PHYSICAL RECOVERY IMAGE
      },

      // ================= BREASTFEEDING SUPPORT =================
      {
        heading: "Breastfeeding Guidance & Newborn Support",

        description:
          "Our team provides expert support to help mothers feel confident and comfortable while caring for their newborn.",

        points: [
          "Lactation counseling and breastfeeding techniques",
          "Support for milk supply and feeding routines",
          "Guidance on newborn hygiene and cord care",
          "Safe swaddling and sleep positioning techniques",
          "Help with breast discomfort or feeding challenges",
          "Education on baby nutrition and growth monitoring",
        ],

        image: pc3, // ✅ BREASTFEEDING IMAGE
      },

      // ================= EMOTIONAL SUPPORT =================
      {
        heading: "Emotional & Mental Health Support",

        description:
          "Emotional wellbeing is essential after childbirth. We provide support to help mothers adjust to physical and emotional changes.",

        points: [
          "Emotional health monitoring and counseling",
          "Support for managing stress and anxiety",
          "Guidance for postpartum mood changes",
          "Professional counseling if required",
          "Family and emotional support guidance",
          "Helping mothers build confidence in newborn care",
        ],

        image: pc4, // ✅ EMOTIONAL SUPPORT IMAGE
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading:
        "Why Choose Dr. Meenu’s Gynecology & Fertility Clinic for Postpartum Care?",

      para: "We continue to care for you even after delivery, ensuring complete recovery, comfort, and confidence during motherhood.",

      points: [
        "Continuous care from experienced gynecologists",
        "Dedicated postnatal recovery support",
        "Expert breastfeeding and newborn care guidance",
        "Personalized recovery and nutrition plans",
        "Modern facilities and compassionate care",
        "Complete physical and emotional support",
      ],

      image: n3, // ✅ DOCTOR IMAGE
    },
  },

  "pregnancy-care": {
    title: "Pregnancy Care",

    intro: `Pregnancy care — also called <strong>antenatal care</strong> — is the continuous medical support, lifestyle guidance, and emotional care a woman receives during her pregnancy. It begins when pregnancy is confirmed and continues until delivery, ensuring the health and safety of both mother and baby.`,

    heroExtraText: `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we walk with every mother through each trimester, offering medical care along with empathy, education, and encouragement. Our goal is to make your pregnancy journey safe, confident, and joyful.`,

    heroImage: pr1, // ✅ HERO IMAGE

    sections: [
      // ================= WHAT WE INCLUDE =================
      {
        medicalheading: "What Does Our Pregnancy Care Include?",
        heading: "What Does Our Pregnancy Care Include?",

        para: "We create personalized care plans designed according to each mother’s unique health needs.",

        description:
          "Our antenatal program focuses on complete monitoring, early detection of risks, and continuous emotional support.",

        points: [
          "Routine check-ups to monitor blood pressure and baby’s growth",
          "Ultrasound scans for fetal development tracking",
          "Blood and urine tests for early detection of complications",
          "Personalized nutrition and supplement guidance",
          "Birth preparation and parenting education",
          "Emotional wellness and stress management support",
        ],

        image: pr2, // ✅ SECTION IMAGE
      },

      // ================= IMPORTANCE =================
      {
        heading: "Why Is Regular Pregnancy Care Important?",

        description:
          "Consistent antenatal visits help reduce risks and ensure safe pregnancy progression.",

        points: [
          "Reduces risk of pregnancy-related complications",
          "Ensures proper fetal growth and development",
          "Supports healthy maternal weight gain",
          "Prepares mothers physically and emotionally for delivery",
          "Improves chances of smoother postpartum recovery",
          "Builds confidence through medical guidance",
        ],

        image: pr3, // ✅ SECTION IMAGE
      },

      // ================= TRIMESTER CARE =================
      {
        heading: "Your Pregnancy Journey with Dr. Meenu’s Clinic",

        description:
          "We provide trimester-based pregnancy care to ensure support at every stage.",
        points: [
          "First Trimester (0–13 weeks): Pregnancy confirmation, early scans, and due date calculation",
          "Initial Blood Tests: Screening for anemia, thyroid function, blood group, and infections",
          "Nutrition Planning: Personalized diet and supplements like folic acid for baby’s development",
          "Ultrasound Monitoring: Early scans to confirm fetal heartbeat and healthy growth",
          "Second Trimester (14–27 weeks): Detailed anomaly scan to check baby’s organs and structure",
          "Gestational Diabetes Screening: Tests to ensure healthy blood sugar levels during pregnancy",
          "Regular Health Monitoring: Tracking blood pressure, weight, and overall maternal health",
          "Third Trimester (28 weeks–Delivery): Growth scans and fetal wellbeing assessments",
          "Birth Planning: Guidance for normal delivery, painless delivery, or C-section preparation",
          "Breastfeeding & Postnatal Preparation: Education on newborn care, breastfeeding, and recovery",
        ],
        image: pr4, // ✅ SECTION IMAGE
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading:
        "Why Choose Dr. Meenu’s Gynecology & Fertility Clinic for Pregnancy Care?",

      para: "Pregnancy is not just a medical journey — it’s a life-changing experience. At our clinic, every mother receives compassionate care, personal attention, and trusted medical guidance.",

      points: [
        "Experienced gynecologist for both routine and high-risk pregnancies",
        "Modern diagnostic and scanning facilities under one roof",
        "Patient-first approach with complete counseling",
        "Holistic support including nutrition and prenatal exercise guidance",
        "24×7 on-call assistance for urgent concerns",
        "Comprehensive planning for normal, painless, or C-section delivery",
      ],

      image: n3, // ✅ DOCTOR IMAGE
    },
  },

  vaccination: {
    title: "Vaccination in Pregnancy",

    intro: `Vaccination is one of the safest and most effective ways to protect both the mother and her baby from serious infections. During pregnancy, a woman’s immune system changes, making her more vulnerable to illness. Vaccines help build protective antibodies that also pass to the baby, providing early protection after birth.`,

    heroExtraText: `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we follow medically approved vaccination protocols to ensure complete safety for both mother and baby throughout pregnancy.`,

    heroImage: vp1, // ✅ HERO IMAGE

    sections: [
      // ================= RECOMMENDED VACCINES =================
      {
        medicalheading: "Recommended Vaccines for Expectant Mothers",
        heading: "Recommended Vaccines for Expectant Mothers",

        para: "We follow globally accepted medical guidelines to ensure safe and timely vaccination during pregnancy.",

        description:
          "Maternal vaccination protects both mother and baby from preventable infections.",

        points: [
          "Tdap Vaccine: Protects against tetanus, diphtheria, and whooping cough",
          "Influenza Vaccine: Prevents serious flu-related complications",
          "COVID-19 Vaccine: Reduces risk of severe infection and protects baby",
          "Tetanus Injection: Essential for preventing neonatal tetanus",
          "Vaccination timing planned based on pregnancy stage",
          "Protection passed to baby through maternal antibodies",
        ],

        image: vp2, // ✅ IMAGE
      },

      // ================= SAFETY & MYTHS =================
      {
        heading: "Safety and Myths About Vaccination in Pregnancy",

        description:
          "Vaccines recommended during pregnancy are medically tested and safe for both mother and baby.",

        points: [
          "Vaccines do not harm fetal development",
          "Maternal vaccination protects newborn after birth",
          "Side effects are mild and temporary",
          "Vaccines reduce risk of severe infections",
          "Medical supervision ensures complete safety",
          "Only approved vaccines are administered",
        ],

        image: vp3, // ✅ IMAGE
      },

      // ================= OUR CARE =================
      {
        heading: "Our Commitment to Safe Maternal Vaccination",

        description:
          "We ensure every vaccination is provided safely with proper monitoring and guidance.",

        points: [
          "Use of approved and certified vaccines only",
          "Proper medical assessment before vaccination",
          "Monitoring after vaccination for safety",
          "Complete vaccination record maintenance",
          "Personalized vaccination schedule planning",
          "Expert medical supervision at every step",
        ],

        image: vp4, // ✅ IMAGE
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading:
        "Why Choose Dr. Meenu’s Gynecology & Fertility Clinic for Pregnancy Vaccination?",

      para: "We provide safe, evidence-based maternal vaccination with expert care and monitoring.",

      points: [
        "Experienced gynecologists trained in maternal vaccination",
        "International safety guidelines followed",
        "High-quality approved vaccines used",
        "Personalized vaccination planning",
        "Safe and hygienic clinical environment",
        "Complete pregnancy and vaccination support",
      ],

      image: n3, // ✅ DOCTOR IMAGE
    },
  },

  // Gynecology -----------------------------------------//

  "fibroid-treatment": {
    title: "Fibroid Treatment",

    intro: `Uterine fibroids are non-cancerous growths that develop in or around the uterus. They are very common in women of reproductive age and can vary in size. While some fibroids cause no symptoms, others may lead to heavy bleeding, pelvic pain, or fertility challenges.`,

    heroExtraText: `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we provide accurate diagnosis and personalized fibroid treatment plans that protect your health, comfort, and future fertility.`,

    heroImage: f1, // ✅ HERO IMAGE

    sections: [
      // ================= SYMPTOMS =================
      {
        medicalheading: "Symptoms That May Indicate Fibroids",

        heading: "Symptoms That May Indicate Fibroids",

        para: "Fibroids may not always cause symptoms, but when they do, early medical care can prevent complications.",

        description: "Common signs and symptoms include:",

        points: [
          "Heavy or prolonged menstrual bleeding",
          "Pelvic pressure or abdominal bloating",
          "Frequent urination due to bladder pressure",
          "Pain during intercourse",
          "Lower back or pelvic pain",
          "Irregular menstrual cycles",
          "Difficulty conceiving",
          "Recurrent miscarriages in some cases",
          "Abdominal swelling or enlargement",
          "Fatigue caused by heavy bleeding",
        ],

        image: f2,
      },

      // ================= DIAGNOSIS =================
      {
        heading: "Advanced Diagnosis of Fibroids",

        description:
          "Accurate diagnosis helps determine the size, location, and number of fibroids to plan effective treatment.",

        points: [
          "Pelvic examination to detect uterine enlargement",
          "Ultrasound scan for quick and safe fibroid detection",
          "MRI scan for detailed fibroid mapping",
          "Hysteroscopy to view fibroids inside uterus",
          "Fertility assessment if conception is affected",
          "Hormonal evaluation if required",
        ],

        image: f3,
      },

      // ================= TREATMENT OPTIONS =================
      {
        heading: "Treatment Options for Fibroids",

        description:
          "Treatment depends on symptoms, fibroid size, and future pregnancy plans.",

        points: [
          "Medication to control bleeding and pain",
          "Hormonal therapy to regulate menstrual cycle",
          "Minimally invasive laparoscopic fibroid removal",
          "Hysteroscopic fibroid removal without external cuts",
          "Myomectomy to preserve fertility",
          "Non-surgical monitoring for small fibroids",
          "Advanced surgical treatment for large fibroids",
          "Personalized treatment based on patient needs",
        ],

        image: f4,
      },

      // ================= FERTILITY & RECOVERY =================
      {
        heading: "Fertility Preservation and Recovery",

        description:
          "Our goal is to treat fibroids while protecting your reproductive health and ensuring faster recovery.",

        points: [
          "Fertility-preserving treatment options available",
          "Advanced minimally invasive surgical techniques",
          "Faster healing and reduced recovery time",
          "Minimal pain and scarring",
          "Improved chances of conception after treatment",
          "Complete post-treatment monitoring and care",
        ],

        // image: f5,
      },
    ],

    // ================= DOCTOR SECTION =================
    doctorSection: {
      heading: "Why Choose Dr. Meenu’s Clinic for Fibroid Treatment?",

      para: "We provide advanced fibroid care focused on safety, comfort, and fertility preservation.",

      points: [
        "Experienced gynecologist specialized in fibroid treatment",
        "Advanced ultrasound and diagnostic facilities",
        "Minimally invasive treatment options available",
        "Fertility-preserving surgical expertise",
        "Personalized care and treatment planning",
        "Complete support from diagnosis to recovery",
      ],

      image: n3,
    },
  },

  "infections-stis": {

  title: "Infections & STIs Care",

  intro:
    `Sexually transmitted infections (STIs) and reproductive tract infections are more common than many women realize. Some infections may not show symptoms in the early stages, but if left untreated, they can affect fertility, pregnancy, and overall reproductive health.`,

  heroExtraText:
    `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we focus on early detection, confidential testing, and personalized treatment plans to protect your long-term health and well-being.`,

  heroImage: fa1,


  sections: [

    // ================= TYPES OF INFECTIONS =================
    {
      medicalheading: "Common Types of Infections We Treat",

      heading: "Common Types of Infections We Treat",

      para:
        "Our clinic diagnoses and treats a wide range of reproductive tract and sexually transmitted infections.",

      description:
        "These include bacterial, viral, fungal, and parasitic infections that may impact reproductive health.",

      points: [
        "Chlamydia and Gonorrhea",
        "Bacterial Vaginosis",
        "Human Papillomavirus (HPV)",
        "Genital Herpes",
        "HIV screening and counseling",
        "Trichomoniasis",
        "Yeast (Fungal) Infections",
        "Pelvic Inflammatory Disease (PID)"
      ],

      image: fa2,
    },


    // ================= SYMPTOMS =================
    {
      heading: "Symptoms You Shouldn’t Ignore",

      description:
        "Some infections cause noticeable symptoms, while others remain silent. Seek medical care if you experience:",

      points: [
        "Unusual vaginal discharge with odor or color change",
        "Burning sensation during urination",
        "Pelvic or lower abdominal pain",
        "Genital sores, blisters, or warts",
        "Pain or bleeding after intercourse",
        "Persistent itching or irritation",
        "Irregular bleeding between periods",
        "Fever associated with pelvic discomfort",
        "Pain during intercourse",
        "Even without symptoms, regular screening is recommended for sexually active women"
      ],

      image: fa3,
    },


    // ================= CARE APPROACH =================
    {
      heading: "Our Supportive & Confidential Care Approach",

      description:
        "We understand that discussing infections can feel uncomfortable. Our clinic ensures privacy, dignity, and compassionate care at every step.",

      points: [
        "Private and respectful consultations",
        "Confidential testing and reports",
        "Accurate diagnosis using advanced lab methods",
        "Targeted medication based on infection type",
        "Partner testing and treatment guidance",
        "Follow-up care to prevent recurrence",
        "Education on safe practices and prevention",
        "Emotional support and counseling if needed"
      ],

      image: fa4,
    },

  ],


  // ================= DOCTOR SECTION =================
  doctorSection: {

    heading:
      "Why Choose Dr. Meenu’s Clinic for Infections & STI Care?",

    para:
      "We provide safe, confidential, and medically advanced care to protect your reproductive health.",

    points: [
      "Experienced gynecology team",
      "Modern diagnostic and laboratory facilities",
      "Strict patient confidentiality",
      "Evidence-based treatment protocols",
      "Complete infection management and follow-up",
      "Comprehensive women’s health support"
    ],

    image: n3,
  },

},

  "laparoscopic-surgery": {

  title: "Laparoscopic Surgery",

  intro:
    `Laparoscopic surgery, also known as minimally invasive surgery, is an advanced surgical technique used to diagnose and treat various gynecological conditions. Unlike traditional open surgery, it requires only small incisions, resulting in less pain, faster recovery, and minimal scarring.`,

  heroExtraText:
    `At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we specialize in advanced laparoscopic procedures that prioritize safety, fertility preservation, and quicker healing — helping women return to their normal lives with confidence and comfort.`,

  heroImage: fb1,


  sections: [

    // ================= CONDITIONS =================
    {
      medicalheading: "Conditions Treated with Laparoscopic Surgery",

      heading: "Conditions Treated with Laparoscopic Surgery",

      description:
        "Laparoscopy is used to both diagnose and treat a wide range of gynecological conditions.",

      points: [
        "Endometriosis treatment and removal of abnormal tissue",
        "Fibroid removal (Laparoscopic Myomectomy)",
        "Ovarian cyst removal while preserving healthy tissue",
        "Ectopic pregnancy management",
        "Treatment of pelvic adhesions and scar tissue",
        "Laparoscopic hysterectomy when required",
        "Evaluation and treatment of infertility causes",
        "Chronic pelvic pain diagnosis and management"
      ],

      image: fb2,
    },


    // ================= BENEFITS =================
    {
      heading: "Benefits of Choosing Laparoscopy",

      description:
        "Minimally invasive laparoscopic surgery offers several advantages compared to traditional open procedures.",

      points: [
        "Smaller incisions with minimal scarring",
        "Reduced post-operative pain",
        "Lower risk of infection and complications",
        "Less blood loss during surgery",
        "Shorter hospital stay",
        "Faster recovery and return to daily activities",
        "Better cosmetic results",
        "Improved fertility preservation in eligible cases"
      ],

      image: fb3,
    },


    // ================= OUR EXPERTISE =================
    {
      heading: "Why Choose Dr. Meenu’s Clinic for Laparoscopic Surgery?",

      description:
        "Our clinic combines advanced surgical expertise with compassionate patient care.",

      points: [
        "Experienced gynecologist trained in advanced laparoscopy",
        "High-definition modern surgical equipment",
        "Personalized surgical planning",
        "Focus on fertility-preserving techniques",
        "Safe anesthesia and monitoring protocols",
        "Comprehensive pre- and post-operative care",
        "Holistic recovery guidance including nutrition and lifestyle support"
      ],

      image: fb4,
    },

  ],


  // ================= PROCEDURE SECTION =================
  doctorSection: {

    heading: "How the Laparoscopic Procedure Works",

    para:
      "The procedure is performed under general anesthesia. A small incision is made near the navel to insert a laparoscope (a thin camera). The abdomen is gently inflated with carbon dioxide to improve visibility. Additional tiny incisions may be made to insert specialized surgical instruments.",

    points: [
      "Most patients are discharged the same day or within 24 hours",
      "Mild bloating or shoulder discomfort may occur temporarily",
      "Normal activities resume within 1–2 weeks",
      "Regular follow-up ensures proper healing",
      "Personalized recovery instructions are provided",
      "Emergency support available if required"
    ],

    image: n3,
  },

},


"menstrual-health": {

  title: "Menstrual Health",

  intro:
    `Menstrual health is a vital part of women’s overall well-being and reproductive health. A normal cycle usually occurs every 21–35 days, lasting 3–7 days, and reflects proper hormonal balance. Maintaining healthy menstrual cycles helps support fertility, hormonal stability, and overall physical and emotional wellness.`,

  heroExtraText:
    `When periods are irregular, extremely painful, or unusually heavy, they may indicate conditions such as PCOS, endometriosis, fibroids, or thyroid imbalance. Early medical care ensures accurate diagnosis and effective treatment. At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we help women manage menstrual concerns with personalized care, modern diagnostics, and compassionate support.`,

  heroImage: fc1,


  sections: [

    // ================= CONCERNS =================
    {
      medicalheading: "Common Menstrual Health Concerns We Address",

      heading: "Common Menstrual Health Concerns We Address",

      description:
        "Menstrual irregularities can affect daily life, emotional health, and fertility if left untreated.",

      points: [
        "Irregular periods or unpredictable menstrual cycles",
        "Heavy menstrual bleeding (Menorrhagia)",
        "Painful periods and severe cramps (Dysmenorrhea)",
        "Absence of periods (Amenorrhea)",
        "Premenstrual Syndrome (PMS) and Premenstrual Dysphoric Disorder (PMDD)",
        "Spotting or bleeding between periods",
        "Hormonal imbalance related cycle issues",
        "Menstrual problems associated with PCOS or thyroid disorders"
      ],

      image: fc2,
    },


    // ================= DIAGNOSIS =================
    {
      heading: "Diagnosis and Medical Evaluation",

      description:
        "Accurate diagnosis helps identify the root cause of menstrual problems and ensures effective treatment.",

      points: [
        "Detailed medical history and symptom evaluation",
        "Pelvic examination if required",
        "Ultrasound scans to detect fibroids, cysts, or uterine conditions",
        "Hormonal blood tests for thyroid, PCOS, or hormone imbalance",
        "Endometrial evaluation when necessary",
        "Cycle tracking and menstrual pattern analysis",
        "Screening for underlying reproductive health conditions"
      ],

      image: fc3,
    },


    // ================= TREATMENT =================
    {
      heading: "Treatment Options for Menstrual Health",

      description:
        "Treatment plans are personalized based on the underlying condition, symptoms, and overall health.",

      points: [
        "Lifestyle guidance including nutrition, exercise, and stress management",
        "Medications to regulate hormones and reduce pain or heavy bleeding",
        "Hormonal therapies when required",
        "Treatment for PCOS, thyroid disorders, or underlying conditions",
        "Minimally invasive procedures for fibroids, cysts, or polyps",
        "Nutritional support and supplements for anemia or deficiencies",
        "Regular monitoring and follow-up care"
      ],

      image: fc4,
    },

  ],


  // ================= DOCTOR SECTION =================
  doctorSection: {

    heading: "Why Choose Dr. Meenu’s Clinic for Menstrual Health Care?",

    para:
      "We provide compassionate, confidential, and expert care to help women achieve better menstrual health and overall wellness.",

    points: [
      "Experienced gynecologist specializing in menstrual disorders",
      "Advanced diagnostic tools for accurate evaluation",
      "Personalized treatment plans based on individual needs",
      "Focus on long-term hormonal balance and reproductive health",
      "Safe, private, and supportive clinical environment",
      "Comprehensive care from diagnosis to recovery"
    ],

    image:n3,
  },

},


 "pcos-treatment": {

  title: "PCOS Treatment",

  intro:
    `Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It occurs when the ovaries produce excess androgens (male hormones), which interfere with normal ovulation. This can lead to irregular menstrual cycles, cyst formation in the ovaries, and various metabolic and reproductive health concerns.`,

  heroExtraText:
    `PCOS affects more than just periods — it can impact fertility, weight, skin, emotional health, and long-term wellness. At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we provide comprehensive and personalized PCOS treatment focused on restoring hormonal balance, improving fertility, and supporting overall health.`,

  heroImage: fd1,


  sections: [

    // ================= SYMPTOMS =================
    {
      medicalheading: "Common Symptoms of PCOS",

      heading: "Common Symptoms of PCOS",

      description:
        "PCOS symptoms vary from woman to woman and may develop gradually over time.",

      points: [
        "Irregular, delayed, or missed menstrual periods",
        "Excess facial or body hair growth (hirsutism)",
        "Persistent acne and oily skin",
        "Weight gain, especially around the abdomen",
        "Thinning hair or hair loss from the scalp",
        "Difficulty in conceiving due to irregular ovulation",
        "Darkened skin patches (acanthosis nigricans)",
        "Mood changes, fatigue, and emotional stress"
      ],

      image: fd2,
    },


    // ================= DIAGNOSIS =================
    {
      heading: "Accurate Diagnosis and Evaluation",

      description:
        "Proper diagnosis is essential for effective PCOS management. Our clinic uses advanced diagnostic methods combined with personalized consultation.",

      points: [
        "Detailed medical history and symptom review",
        "Physical examination to assess hormonal signs",
        "Pelvic ultrasound to examine ovarian structure",
        "Hormonal blood tests including androgen, estrogen, LH, and FSH levels",
        "Thyroid and metabolic screening",
        "Insulin resistance and diabetes risk evaluation",
        "Comprehensive fertility assessment if required"
      ],

      image: fd3,
    },


    // ================= TREATMENT =================
    {
      heading: "Personalized PCOS Treatment Options",

      description:
        "Treatment is tailored to each woman’s symptoms, fertility goals, and overall health condition.",

      points: [
        "Lifestyle modifications including diet, exercise, and weight management",
        "Hormonal therapy to regulate menstrual cycles",
        "Medications to reduce excess androgen symptoms like acne and hair growth",
        "Insulin-sensitizing medications such as Metformin when needed",
        "Ovulation induction treatments for women planning pregnancy",
        "Advanced fertility treatments like IUI or IVF if required",
        "Emotional wellness and stress management support"
      ],

      image: fd4,
    },

  ],


  // ================= DOCTOR SECTION =================
  doctorSection: {

    heading: "Why Choose Dr. Meenu’s Clinic for PCOS Treatment?",

    para:
      "We provide compassionate, science-based, and long-term care to help women manage PCOS effectively and improve their quality of life.",

    points: [
      "Experienced gynecologist specializing in PCOS and hormonal disorders",
      "Advanced diagnostic tools for accurate evaluation",
      "Personalized treatment plans based on individual needs",
      "Focus on fertility preservation and reproductive health",
      "Holistic approach including lifestyle and emotional support",
      "Continuous monitoring and long-term care support"
    ],

    image: n3,
  },

},


 "pelvic-pain-pap-smear": {

  title: "Pelvic Pain, Breast Examination & Pap Smear",

  intro:
    `Pelvic pain refers to discomfort in the lower abdomen or pelvic region. It may be occasional or persistent and can result from gynecological, urinary, digestive, or musculoskeletal conditions. While some pelvic pain may be related to normal menstrual cycles, ongoing or severe discomfort should never be ignored. At <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong>, we focus on identifying the exact cause of pelvic pain and providing personalized treatment to restore comfort, health, and peace of mind.`,

  heroExtraText:
    `In addition to diagnosing pelvic pain, we also emphasize preventive care through regular breast examinations and Pap smear screening. These essential tests help detect abnormalities early, ensuring timely treatment and long-term reproductive wellness.`,

  heroImage: pa1,


  sections: [

    // ================= CAUSES =================
    {
      medicalheading: "Common Causes of Pelvic Pain",

      heading: "Common Causes of Pelvic Pain",

      description:
        "Pelvic pain can originate from various organs and systems within the body. Proper diagnosis is essential for effective treatment.",

      points: [
        "Endometriosis – Growth of uterine tissue outside the uterus causing severe pain and fertility challenges",
        "Ovarian cysts – Fluid-filled sacs that may cause sharp or dull pelvic discomfort",
        "Uterine fibroids – Non-cancerous growths causing pressure, heavy periods, or pain",
        "Pelvic inflammatory disease (PID) – Infection of reproductive organs causing chronic pelvic pain",
        "Urinary tract infections (UTIs) – Burning sensation and lower abdominal discomfort",
        "Digestive disorders such as IBS or constipation causing abdominal and pelvic pressure",
        "Pelvic floor muscle dysfunction causing long-term pelvic discomfort"
      ],

      image: pa2,
    },


    // ================= TREATMENT =================
    {
      heading: "Effective Treatment Options",

      description:
        "Treatment depends on identifying the root cause. Our clinic provides comprehensive care to relieve pain and restore normal function.",

      points: [
        "Medications including antibiotics, anti-inflammatory drugs, or hormonal therapy",
        "Pelvic floor physiotherapy to strengthen and relax muscles",
        "Lifestyle guidance including nutrition, stress management, and exercise",
        "Minimally invasive surgery when required for fibroids, cysts, or endometriosis",
        "Long-term monitoring and preventive care to avoid recurrence"
      ],

      image: pa3,
    },


    // ================= BREAST EXAM =================
    {
      heading: "Clinical Breast Examination",

      description:
        "Regular breast examinations help detect abnormalities early and protect breast health.",

      points: [
        "Detection of lumps, swelling, or unusual breast changes",
        "Early identification of breast cancer warning signs",
        "Professional evaluation and guidance if abnormalities are found",
        "Recommendation of further imaging like mammography when needed",
        "Preventive screening for long-term breast health"
      ],

      image: pa4,
    },


    // ================= PAP SMEAR =================
    {
      heading: "Pap Smear Screening for Cervical Health",

      description:
        "A Pap smear is a simple and effective test used to detect early cervical cell changes before they develop into cancer.",

      points: [
        "Early detection of cervical abnormalities",
        "Prevention and early treatment of cervical cancer",
        "Safe, quick, and painless procedure",
        "Recommended for women starting from age 21",
        "Regular screening ensures long-term reproductive health"
      ],

      // image: pa5,
    },

  ],


  // ================= DOCTOR SECTION =================
  doctorSection: {

    heading: "Why Choose Dr. Meenu’s Clinic for Pelvic Pain and Preventive Care",

    para:
      "We provide comprehensive diagnosis, effective treatment, and preventive screening to ensure complete reproductive wellness.",

    points: [
      "Experienced gynecologist specializing in pelvic pain diagnosis and treatment",
      "Advanced diagnostic technology for accurate evaluation",
      "Personalized treatment plans based on individual needs",
      "Safe and confidential breast examination and Pap smear screening",
      "Compassionate and supportive patient care environment",
      "Continuous follow-up for long-term health and prevention"
    ],

    image: n3,
  },

},

};
