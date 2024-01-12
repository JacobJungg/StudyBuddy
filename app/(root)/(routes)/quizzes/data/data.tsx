import { 
  GraduationCap,
  Apple,
  BookOpenText,
  SignalLow,
  SignalHigh,
  Signal
} from 'lucide-react';

export const labels = [
{
  value: "math",
  label: "Math",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "art",
    label: "Art",
  },
  {
    value: "law",
    label: "Law",
  },
]

export const difficulties = [
  {
    value: "easy",
    label: "Easy",
    icon: SignalLow,
  },
  {
    value: "fair",
    label: "Fair",
    icon: SignalHigh,
  },
  {
    value: "hard",
    label: "Hard",
    icon: Signal,
  },
]
  
export const authors = [
  {
    label: "Student",
    value: "student",
    icon: GraduationCap,
  },
  {
    label: "Teacher",
    value: "teacher",
    icon: Apple,
  },
  {
    label: "StudyBuddy",
    value: "studybuddy",
    icon: BookOpenText,
  },
]