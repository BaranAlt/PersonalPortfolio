const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}
import NeverEndingBox from '../components/NeverEndingBox'; // Bileşeni içe aktarın
const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Baran', 'Altundas'],
  greetingEmoji: <NeverEndingBox />, // Animasyonu burada kullanıyoruz
  role: 'Fullstack Developer',
  company: '',
  description: [
    'I am a passionate fullstack developer dedicated to continuous improvement and writing clean, efficient code. My goal is to contribute valuable skills to myself and to learn as much as I can. I engage in various projects and read documentation and articles to develop both theoretical and practical knowledge. I love to research and learn, and I enjoy sharing what I learn with those around me.',
  ],
  resume: 'https://medium.com/@altundassbaran',
  social: {
    github: 'https://github.com/BaranAlt',
    linkedin: 'https://www.linkedin.com/in/baran-altunda%C5%9F-8620861b4/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/mionmedikal.png',
    name: 'Mi-on Medikal Website',
    description: [
      'Mi-On Medical is a platform that offers high-quality and reliable textile products for the textile and healthcare sectors.',
    ],
    stack: ['HTML', 'CSS', 'JS','Wordpress'],
    sourceCode: 'https://github.com/BaranAlt',
    livePreview: 'https://mi-onmedikaltekstil.com/',
  },
  {
    thumbnail: 'images/dmrproje.png',
    name: 'DMR PROJE VE DANIŞMANLIK',
    description: [
      'DMR Proje, as a company that offers innovative solutions in the construction and engineering field, strengthens its position in the industry with a commitment to quality service.',
    ],
    stack: ['HTML', 'CSS', 'JS','Wordpress'],
    sourceCode: 'https://github.com/BaranAlt',
    livePreview: 'https://dmrproje.com.tr/',
  },
  {
    thumbnail: 'images/comingsoon.png',
    name: 'Learn English',
    description: [
      'The English learning application allows users to select vocabulary pools from various topics at the beginning. Based on the selected vocabulary pools, users take quizzes to learn new words and reinforce their knowledge. Each quiz presents users with different sentences, and they are expected to select the correct word that matches the meaning of these sentences. ',
    ],
    stack: ['React Native', 'NodeJS', 'SQL'],
    sourceCode: 'https://github.com/BaranAlt',
    livePreview: '',
  },
  {
    thumbnail: 'images/comingsoon.png',
    name: 'RemindMe',
    description: [
      'This application simplifies task management by helping users plan their daily and weekly tasks. With features like calendar, reminders, and team collaboration, users can effectively manage their projects.',
    ],
    stack: ['React Native', 'NodeJS', 'SQL','Firebase Firestore'],
    sourceCode: 'https://github.com/BaranAlt',
    livePreview: '',
  },
]

const skills = [
  
  'HTML',
  'CSS',
  'C',
  'Tailwind',
  'JavaScript',
  'SQL',
  'React Native',
  'Jira',
  'GitHub',
  'Git',
  'Synthesia AI',
]

const contact = {
 
  email: 'altundassbaran@gmail.com',
}

export { header, about, projects, skills, contact }
