import { 
  GraduationCap,
  Apple,
  BookOpenText,
  CheckCircle2,
  Circle,
  CircleOff,
  HelpCircle,
  Timer
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
  
  export const statuses = [
    {
      value: "backlog",
      label: "Backlog",
      icon: HelpCircle,
    },
    {
      value: "todo",
      label: "Todo",
      icon: Circle,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: Timer,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircle2,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CircleOff,
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