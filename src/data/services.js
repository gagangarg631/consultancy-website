import { Heart, Users, Shield, GraduationCap, SmilePlus } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Individual Counselling",
    description: "One-on-one therapy sessions tailored to your unique needs and goals",
    icon: Heart,
    color: "text-indigo-700",
    bgColor: "rgb(134 161 245 / 68%)",
    amount: {
      1: 699,
      2: 699,
      3: 599,
      4: 599,
      5: 599,
      6: 599,
      7: 599,
      8: 599,
      9: 599,
      10: 599,
      11: 599,
      12: 599,
    }
  },
  {
    id: 2,
    title: "Family/Couple Counselling",
    description: "Relationship therapy to strengthen bonds and improve communication",
    icon: Heart,
    color: "text-red-600",
    bgColor: "rgb(247 6 6 / 46%)",
    amount: {
      1: 999,
      2: 999,
      3: 999,
      4: 699,
      5: 699,
      6: 699,
      7: 699,
      8: 699,
      9: 699,
      10: 699,
      11: 699,
      12: 699,
    }
  },
  {
    id: 3,
    title: "Internship and training",
    description: `Hands-on training and guided internships for psychology students to build real-world counselling skills and professional confidence.`,
    icon: GraduationCap,
    bgColor: "blanchedalmond",
    color: "text-yellow-700",
    link: "/services/internship-and-training"
  },
  {
    id: 4,
    title: "Addiction Counselling",
    description: `Supportive, non-judgmental therapy to help individuals manage addiction patterns and move towards healthier coping methods.`,
    icon: SmilePlus,
    color: "text-lime-800",
    bgColor: "rgb(239 255 133)",
    amount: {
      1: 699,
      2: 699,
      3: 599,
      4: 599,
      5: 599,
      6: 599,
      7: 599,
      8: 599,
      9: 599,
      10: 599,
      11: 599,
      12: 599,
    }
  },
  {
    id: 5,
    title: "Workshops & Programs",
    description: "Mental health awareness programs and skill-building workshops",
    icon: Users,
    color: "text-green-700",
    bgColor: "rgb(153 243 196)",
    link: "/services/workshop-and-awareness"
  },
  {
    id: 6,
    title: "Special Clinics",
    description: "Focused treatment for anxiety, depression, trauma, and addiction",
    icon: Shield,
    color: "text-pink-700",
    bgColor: "rgb(233 163 196)",
    link: '/services/special-clinics'
  }
];

export const keyServices = [
  services[0],
  services[1],
  services[2]
]
