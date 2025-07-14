import { Heart, Brain, Users, Shield } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Individual Counselling",
    description: "One-on-one therapy sessions tailored to your unique needs and goals",
    icon: Heart,
    color: "text-blue-600"
  },
  {
    id: 2,
    title: "Teen/Adolescent Therapy",
    description: "Specialized support for teenagers navigating emotional and social challenges",
    icon: Users,
    color: "text-purple-600"
  },
  {
    id: 3,
    title: "Family/Couple Counselling",
    description: "Relationship therapy to strengthen bonds and improve communication",
    icon: Heart,
    color: "text-pink-600"
  },
  {
    id: 4,
    title: "Psychometric Assessments",
    description: "Comprehensive psychological evaluations and testing services",
    icon: Brain,
    color: "text-green-600"
  },
  {
    id: 5,
    title: "Workshops & Programs",
    description: "Mental health awareness programs and skill-building workshops",
    icon: Users,
    color: "text-orange-600"
  },
  {
    id: 6,
    title: "Special Clinics",
    description: "Focused treatment for anxiety, depression, trauma, and addiction",
    icon: Shield,
    color: "text-red-600"
  }
];

export const keyServices = [
  services[0],
  services[2],
  services[3]
]
