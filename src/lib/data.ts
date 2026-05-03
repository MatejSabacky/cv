export const profile = {
  name: 'Matěj',
  fullName: 'Matěj Šabacký',
  title: 'Senior QA Automation Engineer / SDET',
  location: 'Czech Republic',
  linkedin: 'https://www.linkedin.com/in/matej-sabacky',

  tagline:
    'Senior QA Automation Engineer with 8+ years of experience building scalable test frameworks, integrating automation into CI/CD pipelines, and driving quality engineering across teams.',

  bio: [
    "I'm a Senior QA Automation Engineer with 8+ years of experience in test automation, QA process design, and quality engineering. I specialise in building scalable automation frameworks and integrating testing into CI/CD pipelines — currently leading a team of 5 QA engineers at Invia.",
    "I have a proven track record of transforming QA processes from the ground up. At Invia I inherited a single Excel file of regression cases and built a fully automated suite — reducing regression testing time from 25 hours to 15 minutes and reaching ~95% automation coverage.",
    "I'm a strong advocate of modern testing practices and continuous improvement, including AI-driven solutions that accelerate test coverage and efficiency.",
  ],
}

export const skills = {
  primary: [
    { name: 'Playwright'},
    { name: 'TypeScript'},
    { name: 'Test Automation'},
    { name: 'Framework Design'},
  ],
  secondary: [
    'Cypress',
    'Selenium',
    'PHP',
    'GitLab CI/CD',
    'Jenkins',
    'TeamCity',
    'Docker',
    'Git',
    'Jira / Xray',
    'TestLink',
    'Postman',
    'Team Leadership',
    'AI in Testing',
    'Cross-team Collaboration',
  ],
}

export const certifications = [
  {
    name: 'ISTQB Foundation Level',
    issuer: 'International Software Testing Qualifications Board',
    year: '2020',
    image: 'istqb_logo.jpeg',
  },
  {
    name: 'Certified SAFe 4 Practitioner',
    issuer: 'Scaled Agile',
    year: '2021',
    image: 'scaled_agile_inc__logo.jpeg',
  },
  {
    name: 'Google AI Professional',
    issuer: 'Google',
    year: '2026',
    image: 'ai-professional.jpeg',
  },
]

export type Company = {
  slug: string
  name: string
  role: string
  period: string
  location: string
  summary: string
  responsibilities: string[]
  achievements: string[]
  stack: string[]
}

export const companies: Company[] = [
  {
    slug: 'invia',
    name: 'Invia',
    role: 'Senior QA Automation Engineer',
    period: 'Apr 2022 — Present',
    location: 'Czech Republic',
    summary:
      'Joined to build automation, but quickly expanded scope to establish the full QA function from scratch — test case library, regression processes, CI/CD-integrated automation, and team leadership — for a travel booking platform spanning four Central European markets.',
    responsibilities: [
      'Built the QA function from the ground up: created a test-case library (TestLink → Jira/Xray), defined regression scope, and introduced a QA gate ensuring all tasks are verified before release',
      'Designed and built automation framework in Cypress/TypeScript, then migrated fully to Playwright after a company acquisition to align tooling across teams',
      'Integrated automated suites into GitLab CI/CD with test tiers (Smoke, Regression, Extended) running on schedule and on demand',
      'Technically led and mentored 5 QA engineers across teams — owning learning plans, automation guidance, and quality standards (technical lead; HR reporting to team managers)',
      'Founded and facilitated a cross-team QA sync after a second acquisition, presenting tooling updates and best practices to QAs across the group',
      'Introduced AI-assisted workflows: prompt engineering, AI chat usage, and AI agent setup including Claude Code and MCP tools',
    ],
    achievements: [
      'Reduced regression testing time from 25 hours to 15 minutes through full end-to-end automation',
      'Reached ~95% automation coverage of the regression test suite (remaining cases too complex to automate currently)',
      'Transformed QA from a single manual tester with Excel-based test cases to a structured, automated, and tooled function',
      'Built and shipped Playwright Results Parser — a standalone HTML tool for analysing CI results, calculating flaky rates, and fetching GitLab pipeline artifacts',
    ],
    stack: ['Playwright', 'TypeScript', 'Cypress', 'GitLab CI/CD', 'Jira', 'Xray', 'Node.js', 'Claude Code'],
  },
  {
    slug: 'solarwinds',
    name: 'SolarWinds',
    role: 'QA Engineer',
    period: 'Sep 2019 — Apr 2022',
    location: 'Czech Republic',
    summary:
      'QA Engineer in the DBA team, testing a browser-based database monitoring product used by large enterprise clients including US government agencies.',
    responsibilities: [
      'Manual and automated testing of a browser-based database monitoring application',
      'Built and maintained automated test suite in Cypress',
      'Used TeamCity for CI/CD integration and Docker for test environment setup',
      'Acted as the last level of customer support — directly handling the most complex and hardest-to-reproduce issues escalated through all previous support tiers',
      'Worked in Agile/Scrum environment in a team of 5 developers and 2 QA engineers',
    ],
    achievements: [
      'Served as the final escalation tier for complex defects reported by enterprise and US government clients — handling issues that could not be reproduced or resolved at any previous support level',
      'Contributed to increasing automation coverage within the DBA monitoring product, shifting the manual/automated ratio from 60/40 toward greater automation',
    ],
    stack: ['Cypress', 'JavaScript', 'TeamCity', 'Docker', 'IntelliJ IDEA', 'Git'],
  },
  {
    slug: 'dixons-carphone',
    name: 'Dixons Carphone',
    role: 'QA Engineer',
    period: 'Sep 2017 — Sep 2019',
    location: 'Czech Republic (product: UK market)',
    summary:
      'QA Engineer on Currys.co.uk, one of the largest e-commerce platforms in the UK. First professional exposure to test automation, working in a large Agile/Scrum team with English as the primary language.',
    responsibilities: [
      'Manual and automated testing of a large-scale UK e-commerce platform (Currys.co.uk)',
      'Developed automated test scenarios in PHP using Selenium',
      'First professional use of CLI tooling, Git, Jenkins CI/CD, and log analysis via terminal',
      'Part of a large Scrum team: 8 developers, 4 QAs (2 manual, 2 combined manual/automation), Scrum Master',
      'All written and verbal communication in English',
    ],
    achievements: [
      'Gained professional automation experience from scratch in a production environment, progressing to a combined manual/automation QA role on one of the UK\'s largest e-commerce platforms',
      'Operated fully in English — writing, speaking, and collaborating daily with a multinational team as a non-native speaker',
    ],
    stack: ['PHP', 'Selenium', 'Jenkins', 'Git'],
  },
  {
    slug: 'sberbank',
    name: 'Sberbank',
    role: 'QA Analyst',
    period: 'Jun 2017 — Sep 2017',
    location: 'Czech Republic',
    summary:
      'Short-term role supporting a manual testing team. Left after the trial period due to role misalignment — promised automation responsibilities never materialised.',
    responsibilities: [
      'Prepared test plans and test cases for manual testing teams',
      'Coordinated and evaluated test results after production releases',
      'Created test result reports including summary tables and charts',
    ],
    achievements: [],
    stack: ['Manual Testing', 'Jira'],
  },
  {
    slug: 'sonet',
    name: 'SoNet',
    role: 'QA Engineer',
    period: 'Apr 2015 — May 2017',
    location: 'Czech Republic',
    summary:
      'QA Engineer at a payment terminal software company. Progressed from manual device testing to leading third-party software certification — verifying that external companies\' solutions met official terminal compatibility requirements.',
    responsibilities: [
      'Manual testing of payment terminal software on real POS devices, including buttonless terminals operated via communication protocol and a custom application',
      'Manual installation and update of terminal software via PC connection',
      'Wrote and managed test cases in TestLink; tracked defects in Redmine',
      'In the final two years, led certification testing for external companies building software on SoNet terminals — verifying functional correctness, edge-case coverage, and compliance before issuing or denying certification',
    ],
    achievements: [
      'Successfully completed ~10 third-party software certifications',
    ],
    stack: ['Manual Testing', 'TestLink', 'Redmine'],
  },
  {
    slug: 'it-moravia',
    name: 'IT Moravia',
    role: 'Tester (Part-time)',
    period: '2014',
    location: 'Czech Republic',
    summary:
      'First testing experience at a company specialising in custom translations and interactive multilingual learning products. Manually verified language correctness, UI functionality, and audio playback across different language selections.',
    responsibilities: [
      'Manual testing of multilingual interactive learning products',
      'Verified that UI elements (buttons, navigation) and audio clips matched the selected language',
      'Exploratory testing based on specifications — no dedicated tooling required',
    ],
    achievements: [],
    stack: ['Manual Testing'],
  },
]

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'playwright-test-tiers',
    title: 'A Three-Tier Approach to Playwright Test Suites',
    date: '2025-09-12',
    excerpt:
      'How splitting a flaky 1,000-test suite into Smoke, Regression, and Extended tiers turned CI from a daily headache into something the team actually trusts.',
    readTime: '6 min read',
    tags: ['Playwright', 'CI/CD', 'Test Strategy'],
  },
  {
    slug: 'ai-assisted-test-generation',
    title: 'AI-Assisted Test Generation: A Pragmatic POC',
    date: '2025-07-28',
    excerpt:
      'Notes from building a human-gated test generation pipeline using Jira tickets and GitLab MR context — what worked, what surprised me, and where I drew the line.',
    readTime: '8 min read',
    tags: ['AI', 'Test Automation', 'Tooling'],
  },
]

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  status: string
  links: { label: string; url: string }[]
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'playwright-parser',
    title: 'Playwright Results Parser',
    tagline: 'A standalone HTML tool for turning Playwright results.json into team-ready insights.',
    description:
      'Parses Playwright results.json files from GitLab CI into Excel-ready TSV. Includes environment detection via GitLab stage names, flaky-rate calculation, job duration tracking, and a GitLab API tab for automated shard fetching.',
    status: 'v2.0 — actively maintained',
    links: [
      { label: 'Live Demo', url: '/demos/playwright-parser.html' },
    ],
    tags: ['HTML', 'JavaScript', 'Playwright', 'GitLab API'],
  },
]
